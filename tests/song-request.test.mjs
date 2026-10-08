import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import ts from "typescript";

const source = await readFile(new URL("../src/lib/song-request.ts", import.meta.url), "utf8");
const { outputText } = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2020 },
});
const { sendSongRequest } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`);
const request = { name: "Test Guest", email: "", song: "Test Artist – Test Song", note: "" };

test("tip-only visitors do not create an empty song request", async () => {
  const original = globalThis.fetch;
  globalThis.fetch = () => { throw new Error("Unexpected request"); };
  try { await sendSongRequest({ ...request, song: "" }); }
  finally { globalThis.fetch = original; }
});

test("waits for the request service to accept the song before resolving", async () => {
  const original = globalThis.fetch;
  let accept;
  let finished = false;
  globalThis.fetch = async (url, options) => {
    assert.equal(url, "https://formspree.io/f/mbdzejjy");
    assert.deepEqual(JSON.parse(options.body), request);
    return new Promise(resolve => { accept = resolve; });
  };
  try {
    const pending = sendSongRequest(request).then(() => { finished = true; });
    await Promise.resolve();
    assert.equal(finished, false);
    accept({ ok: true });
    await pending;
    assert.equal(finished, true);
  } finally { globalThis.fetch = original; }
});

test("a rejected request prevents a false success or payment handoff", async () => {
  const original = globalThis.fetch;
  globalThis.fetch = async () => ({ ok: false });
  try { await assert.rejects(sendSongRequest(request), /request wasn't sent/); }
  finally { globalThis.fetch = original; }
});

test("network failure remains an error for the caller to show", async () => {
  const original = globalThis.fetch;
  globalThis.fetch = async () => { throw new Error("Network unavailable"); };
  try { await assert.rejects(sendSongRequest(request), /Network unavailable/); }
  finally { globalThis.fetch = original; }
});
