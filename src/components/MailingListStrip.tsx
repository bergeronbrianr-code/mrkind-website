"use client";

import { useState } from "react";

const MAILCHIMP_URL =
  "https://mrkindmusic.us17.list-manage.com/subscribe/post?u=90a8ab0567da6cacd07d0ffc6&id=7e20313e43&f_id=0000c2e1f0";

export default function MailingListStrip() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    const data = new FormData();
    data.append("EMAIL", email);
    data.append("b_90a8ab0567da6cacd07d0ffc6_7e20313e43", "");
    await fetch(MAILCHIMP_URL, { method: "POST", body: data, mode: "no-cors" });
    setSubmitted(true);
    setLoading(false);
  }

  return (
    <div className="bg-[#b8832a] px-6 py-12">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-[family-name:var(--font-playfair)] text-[#1c1a17] text-2xl mb-1">
            Stay in the loop.
          </p>
          <p className="font-[family-name:var(--font-source-sans)] text-[#1c1a17]/70 text-base">
            Shows, house concerts, and the occasional update.
          </p>
        </div>

        {submitted ? (
          <p className="font-[family-name:var(--font-dm-sans)] text-[#1c1a17] tracking-widest uppercase text-sm">
            You&apos;re on the list ✓
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex w-full sm:w-auto gap-0">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 sm:w-72 bg-[#1c1a17] text-[#ede8de] placeholder-[#ede8de]/30 px-4 py-3 text-base font-[family-name:var(--font-dm-sans)] focus:outline-none"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-[#1c1a17] text-[#b8832a] font-[family-name:var(--font-dm-sans)] font-semibold tracking-widest uppercase text-xs px-6 py-3 hover:bg-[#252220] transition-colors border-l border-[#ede8de]/10 whitespace-nowrap disabled:opacity-50"
            >
              {loading ? "…" : "Sign Up"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
