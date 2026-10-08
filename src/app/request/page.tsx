"use client";

// SETUP REQUIRED — add to .env.local:
//   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
//   STRIPE_SECRET_KEY=sk_live_...

import { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import { SONGS } from "@/lib/repertoire";
import { sendSongRequest } from "@/lib/song-request";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const PHIL_SONGS = new Set([
  "Al Green – Let's Stay Together",
  "Beck – The Golden Age",
  "Bon Iver – Skinny Love",
  "Bruce Springsteen – Dancing in the Dark",
  "Donny Hathaway – Jealous Guy",
  "Elton John – Your Song (Eb)",
  "Flock of Dimes – Awake for the Sunrise",
  "Geese – Cobra",
  "Kings of Leon – Use Somebody",
  "MGMT – Time to Pretend",
  "Neil Young – Harvest Moon",
  "Radiohead – Fake Plastic Trees",
  "Sheryl Crow – Strong Enough",
  "Simon & Garfunkel – The Sound of Silence",
  "The Beatles – Come Together",
  "The Beatles – Norwegian Wood",
  "The Flaming Lips – Yoshimi Battles the Pink Robots",
  "The Rolling Stones – Wild Horses",
  "Tears for Fears – Everybody Wants to Rule the World",
  "The Postal Service – The District Sleeps Alone Tonight",
  "Tom Petty – Wildflowers",
  "Tom Petty – You Don't Know How It Feels",
]);

const TIP_AMOUNTS = [5, 10, 20];

const VENMO_URL = "https://www.venmo.com/u/MrKindMusic";

const MAILCHIMP_URL =
  "https://mrkindmusic.us22.list-manage.com/subscribe/post?u=66488e430c5058f0f9ead5921&id=be89dc2db0&f_id=0071c2e1f0";

const STRIPE_APPEARANCE = {
  theme: "night" as const,
  variables: {
    colorPrimary: "#b8832a",
    colorBackground: "#252220",
    colorText: "#ede8de",
    colorTextSecondary: "#ede8de99",
    colorTextPlaceholder: "#ede8de40",
    colorDanger: "#e07070",
    fontFamily: "DM Sans, sans-serif",
    borderRadius: "0px",
    spacingUnit: "4px",
  },
  rules: {
    ".Input": { border: "1px solid rgba(237,232,222,0.1)", padding: "12px 16px" },
    ".Input:focus": { border: "1px solid rgba(184,131,42,0.5)", boxShadow: "none" },
    ".Label": { color: "rgba(237,232,222,0.4)", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase" },
    ".Tab": { border: "1px solid rgba(237,232,222,0.1)", backgroundColor: "#252220" },
    ".Tab--selected": { border: "1px solid #b8832a", backgroundColor: "#b8832a18" },
  },
};

async function subscribeToMailchimp(email: string, name?: string, phone?: string) {
  const data = new FormData();
  data.append("EMAIL", email);
  if (name) data.append("FNAME", name.split(" ")[0]);
  if (phone) data.append("PHONE", phone);
  data.append("b_66488e430c5058f0f9ead5921_be89dc2db0", "");
  await fetch(MAILCHIMP_URL, { method: "POST", body: data, mode: "no-cors" });
}

// ── Stripe payment form (rendered inside <Elements>) ─────────────────────────
function PaymentForm({
  amount,
  song,
  name,
  email,
  phone,
  note,
  notifyChecked,
  onSuccess,
  onBack,
}: {
  amount: number;
  song: string;
  name: string;
  email: string;
  phone: string;
  note: string;
  notifyChecked: boolean;
  onSuccess: () => void;
  onBack: () => void;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [paying, setPaying] = useState(false);
  const [error, setError] = useState("");

  async function handleVenmo() {
    setPaying(true);
    setError("");
    try {
      await sendSongRequest({ name, email, song, note });
      if (notifyChecked && email) {
        subscribeToMailchimp(email, name, phone).catch(() => {});
      }
      window.location.assign(VENMO_URL);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Couldn't send your request. Please try again.");
      setPaying(false);
    }
  }

  async function handlePay(e: React.FormEvent) {
    e.preventDefault();
    if (!stripe || !elements) return;
    setPaying(true);
    setError("");

    const { error: submitErr } = await elements.submit();
    if (submitErr) {
      setError(submitErr.message ?? "Payment failed.");
      setPaying(false);
      return;
    }

    // Submit song request to Formspree (fire and forget)
    if (song || note) {
      fetch("https://formspree.io/f/mbdzejjy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, song, note }),
      }).catch(() => {});
    }

    // Mailchimp opt-in
    if (notifyChecked && email) {
      subscribeToMailchimp(email, name, phone).catch(() => {});
    }

    const { error: confirmErr } = await stripe.confirmPayment({
      elements,
      confirmParams: { return_url: window.location.href },
      redirect: "if_required",
    });

    if (confirmErr) {
      setError(confirmErr.message ?? "Payment failed.");
      setPaying(false);
    } else {
      onSuccess();
    }
  }

  return (
    <form onSubmit={handlePay} className="space-y-6">
      <div className="flex items-center justify-between mb-2">
        <button
          type="button"
          onClick={onBack}
          className="font-[family-name:var(--font-dm-sans)] text-xs text-[#ede8de]/30 hover:text-[#ede8de]/60 tracking-widest uppercase transition-colors"
        >
          ← Back
        </button>
        <p className="font-[family-name:var(--font-dm-sans)] text-[#b8832a] text-xs tracking-widest uppercase">
          Tipping ${amount}
          {song ? ` · ${song.split(" – ")[1]}` : ""}
        </p>
      </div>

      <PaymentElement />

      {error && (
        <p className="font-[family-name:var(--font-dm-sans)] text-[#e07070] text-xs text-center">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={!stripe || paying}
        className="w-full py-4 bg-[#b8832a] text-[#1c1a17] font-[family-name:var(--font-dm-sans)] font-semibold tracking-widest uppercase text-sm hover:bg-[#a8721a] transition-colors duration-200 disabled:opacity-40"
      >
        {paying ? "Processing…" : `Pay $${amount} →`}
      </button>

      <p className="text-center font-[family-name:var(--font-dm-sans)] text-[#ede8de]/20 text-xs">
        Secured by Stripe · Apple Pay &amp; Google Pay accepted
      </p>
      <p className="text-center font-[family-name:var(--font-dm-sans)] text-[#ede8de]/30 text-xs">
        Prefer Venmo?{" "}
        <button
          type="button"
          onClick={handleVenmo}
          disabled={paying}
          className="text-[#b8832a] hover:underline disabled:opacity-40"
        >
          {song || note ? "Send request & open Venmo →" : "Open Venmo →"}
        </button>
      </p>
      <p className="text-center font-[family-name:var(--font-dm-sans)] text-[#ede8de]/40 text-xs">
        Choose your tip amount in Venmo.
      </p>
    </form>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────
export default function RequestPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "phil">("all");
  const [selectedSong, setSelectedSong] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"stripe" | null>(null);
  const [tipAmount, setTipAmount] = useState<number | null>(null);
  const [customTip, setCustomTip] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [notifyChecked, setNotifyChecked] = useState(false);

  const [phase, setPhase] = useState<"form" | "payment" | "success">("form");
  const [clientSecret, setClientSecret] = useState("");
  const [loadingPayment, setLoadingPayment] = useState(false);
  const [sendingRequest, setSendingRequest] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const filtered = useMemo(() => {
    const base = filter === "phil" ? SONGS.filter((s) => PHIL_SONGS.has(s)) : SONGS;
    if (!search) return base;
    const q = search.toLowerCase();
    return base.filter((s) => s.toLowerCase().includes(q));
  }, [search, filter]);

  const effectiveTip = tipAmount ?? (customTip ? parseFloat(customTip) : null);
  const hasTip = effectiveTip !== null && Number.isFinite(effectiveTip) && effectiveTip >= 1;
  const hasRequest = !!selectedSong || !!note;
  const canSubmit = paymentMethod === "stripe" ? hasTip : hasRequest;
  const busy = loadingPayment || sendingRequest;

  const handleRequest = useCallback(async (method: "free" | "venmo") => {
    setSubmitError("");
    setSendingRequest(true);
    try {
      await sendSongRequest({ name, email, song: selectedSong, note });
      if (notifyChecked && email) {
        subscribeToMailchimp(email, name, phone).catch(() => {});
      }
      if (method === "venmo") {
        window.location.assign(VENMO_URL);
      } else {
        setTipAmount(null);
        setCustomTip("");
        setPhase("success");
      }
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Couldn't send your request. Please try again.");
    } finally {
      setSendingRequest(false);
    }
  }, [name, email, selectedSong, note, notifyChecked, phone]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");
    if (paymentMethod === "stripe" && !hasTip) {
      setSubmitError("Choose a tip amount of at least $1.");
      return;
    }
    if (paymentMethod === null && !hasRequest) return;

    if (paymentMethod === "stripe" && hasTip) {
      // Go to Stripe payment screen
      setLoadingPayment(true);
      try {
        const res = await fetch("/api/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amount: effectiveTip,
            song: selectedSong || undefined,
            name: name || undefined,
          }),
        });
        const text = await res.text();
        const data = text ? JSON.parse(text) : { error: `Server error (${res.status})` };
        if (data.error) throw new Error(`${data.error}${data.keyDiag ? ` [${data.keyDiag}]` : ""}`);
        setClientSecret(data.clientSecret);
        setPhase("payment");
      } catch (err) {
        setSubmitError(err instanceof Error ? err.message : "Couldn't set up payment. Try again.");
      } finally {
        setLoadingPayment(false);
      }
    } else {
      await handleRequest("free");
    }
  }, [paymentMethod, hasTip, hasRequest, effectiveTip, selectedSong, name, handleRequest]);

  // ── Success screen
  if (phase === "success") {
    return (
      <main className="min-h-screen bg-[#1c1a17] flex items-center justify-center px-5">
        <div className="text-center max-w-sm">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#b8832a]/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#b8832a]" />
            <div className="h-px w-8 bg-[#b8832a]/40" />
          </div>
          <p className="font-[family-name:var(--font-playfair)] text-[#ede8de] text-3xl mb-3">
            Thanks{name ? `, ${name.split(" ")[0]}` : ""}!
          </p>
          <p className="font-[family-name:var(--font-source-sans)] text-[#ede8de]/55 text-base italic mb-8">
            {selectedSong
              ? `Request for "${selectedSong.split(" – ")[1]}" sent.`
              : "You're all set."}
          </p>
          {!hasTip && hasRequest && (
            <button
              onClick={() => {
                setSelectedSong(""); setSearch(""); setNote("");
                setPaymentMethod(null); setTipAmount(null); setCustomTip("");
                setClientSecret(""); setSubmitError(""); setNotifyChecked(false);
                setPhase("form");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="focus-ring block w-full mb-6 font-[family-name:var(--font-source-sans)] text-base text-[#b8832a] hover:underline"
            >
              Leave a tip →
            </button>
          )}
          <button
            onClick={() => {
              setPhase("form");
              setSelectedSong(""); setSearch(""); setNote("");
              setPaymentMethod(null); setTipAmount(null); setCustomTip(""); setClientSecret("");
            }}
            className="font-[family-name:var(--font-dm-sans)] text-xs tracking-widest uppercase text-[#b8832a] hover:underline"
          >
            Submit another
          </button>
        </div>
      </main>
    );
  }

  // ── Payment screen
  if (phase === "payment" && clientSecret) {
    return (
      <main className="min-h-screen bg-[#1c1a17] pt-20 pb-16">
        <div className="max-w-lg mx-auto px-5">
          <div className="py-10 text-center">
            <Link href="/" className="font-[family-name:var(--font-playfair)] text-[#b8832a] text-xl block mb-8">
              Mr. Kind
            </Link>
          </div>
          <Elements
            stripe={stripePromise}
            options={{ clientSecret, appearance: STRIPE_APPEARANCE }}
          >
            <PaymentForm
              amount={effectiveTip!}
              song={selectedSong}
              name={name}
              email={email}
              phone={phone}
              note={note}
              notifyChecked={notifyChecked}
              onSuccess={() => setPhase("success")}
              onBack={() => setPhase("form")}
            />
          </Elements>
        </div>
      </main>
    );
  }

  // ── Form screen
  return (
    <main className="min-h-screen bg-[#1c1a17] pt-20 pb-16">
      <div className="max-w-lg mx-auto px-5">

        <div className="py-10 text-center">
          <Link href="/" className="font-[family-name:var(--font-playfair)] text-[#b8832a] text-xl block mb-8">
            Mr. Kind
          </Link>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 bg-[#b8832a]/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#b8832a]" />
            <div className="h-px w-8 bg-[#b8832a]/40" />
          </div>
          <p className="font-[family-name:var(--font-source-sans)] text-[#ede8de]/40 text-sm italic">
            Request a song or leave a tip — or both.
          </p>

        </div>

        <form onSubmit={handleSubmit} className="space-y-10">

          <section aria-labelledby="tip-heading">
            <div className="mb-5">
              <h2 id="tip-heading" className="font-[family-name:var(--font-playfair)] text-3xl text-[#ede8de] mb-1">Leave a Tip</h2>
              <div className="w-8 h-px bg-[#b8832a]" />
            </div>
            <p className="font-[family-name:var(--font-source-sans)] text-[#ede8de]/70 text-base mb-5">
              Choose how to pay, then choose your amount.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={VENMO_URL}
                onClick={(e) => {
                  if (busy) { e.preventDefault(); return; }
                  if (hasRequest || (notifyChecked && email)) {
                    e.preventDefault();
                    if (!busy) handleRequest("venmo");
                  }
                }}
                aria-disabled={busy}
                className={`focus-ring flex min-h-28 flex-col justify-center border border-[#b8832a]/60 bg-[#252220] px-5 py-4 text-center hover:bg-[#b8832a]/15 transition-colors ${busy ? "pointer-events-none opacity-40" : ""}`}
              >
                <span className="font-[family-name:var(--font-dm-sans)] text-lg font-semibold text-[#ede8de]">Venmo →</span>
                <span className="mt-2 font-[family-name:var(--font-source-sans)] text-sm text-[#ede8de]/70">
                  {hasRequest ? "Send your request, then open Venmo" : "Go straight to Venmo"}
                </span>
                <span className="font-[family-name:var(--font-source-sans)] text-sm text-[#ede8de]/70">Choose your amount there</span>
              </a>
              <button
                type="button"
                aria-pressed={paymentMethod === "stripe"}
                aria-controls="card-tip-amount"
                disabled={busy}
                onClick={() => setPaymentMethod("stripe")}
                className={`focus-ring flex min-h-28 flex-col justify-center border px-5 py-4 text-center transition-colors disabled:opacity-40 ${paymentMethod === "stripe" ? "border-[#b8832a] bg-[#b8832a]/15" : "border-[#b8832a]/60 bg-[#252220] hover:bg-[#b8832a]/15"}`}
              >
                <span className="font-[family-name:var(--font-dm-sans)] text-lg font-semibold text-[#ede8de]">Card / Apple Pay / Google Pay</span>
                <span className="mt-2 font-[family-name:var(--font-source-sans)] text-sm text-[#ede8de]/70">Choose your amount here</span>
              </button>
            </div>
            {paymentMethod === "stripe" && (
              <div id="card-tip-amount" className="mt-6">
                <p className="mb-3 font-[family-name:var(--font-dm-sans)] text-base text-[#ede8de]">How much would you like to tip?</p>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {TIP_AMOUNTS.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => { setTipAmount(tipAmount === amount ? null : amount); setCustomTip(""); }}
                      className={`py-4 font-[family-name:var(--font-playfair)] text-2xl transition-all border ${
                        tipAmount === amount
                          ? "border-[#b8832a] bg-[#b8832a]/15 text-[#b8832a]"
                          : "border-[#ede8de]/15 bg-[#252220] text-[#ede8de]/60 hover:border-[#b8832a]/40"
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>

                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#ede8de]/40 font-[family-name:var(--font-dm-sans)]">$</span>
                  <input
                    aria-label="Tip amount in dollars"
                    type="number"
                    min="1"
                    step="1"
                    value={customTip}
                    onChange={(e) => { setCustomTip(e.target.value); setTipAmount(null); }}
                    placeholder="Other amount"
                    className="w-full bg-[#252220] border border-[#ede8de]/10 text-[#ede8de] placeholder-[#ede8de]/20 pl-8 pr-4 py-3 text-base font-[family-name:var(--font-dm-sans)] focus:outline-none focus:border-[#b8832a]/50 transition-colors"
                  />
                </div>

                {hasTip && (
                  <p className="mt-3 font-[family-name:var(--font-dm-sans)] text-[#b8832a] text-xs tracking-widest uppercase text-center">
                    ✓ ${effectiveTip} tip selected
                  </p>
                )}
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!hasTip || busy}
                  className="focus-ring mt-5 w-full py-4 bg-[#b8832a] text-[#1c1a17] font-[family-name:var(--font-dm-sans)] font-semibold tracking-widest uppercase text-sm hover:bg-[#a8721a] transition-colors disabled:opacity-40"
                >
                  {loadingPayment ? "Setting up payment…" : hasTip ? `Continue to Pay $${effectiveTip} →` : "Choose a tip amount"}
                </button>
                <p className="mt-2 text-center font-[family-name:var(--font-source-sans)] text-sm text-[#ede8de]/70">Secure checkout through Stripe</p>
              </div>
            )}
            {submitError && (
              <p role="alert" className="mt-4 font-[family-name:var(--font-dm-sans)] text-[#e07070] text-sm">{submitError}</p>
            )}
          </section>


          {/* ── 1. Song Request ─────────────────────────────────────── */}
          <section>
            <div className="mb-5">
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-[#ede8de] mb-1">Request a Song</h2>
              <div className="w-8 h-px bg-[#b8832a]" />
            </div>
            <p className="font-[family-name:var(--font-source-sans)] text-[#ede8de]/50 text-sm italic mb-5">
              Optional — skip if you just want to leave a tip.
            </p>

            <div className="flex gap-2 mb-3">
              {(["all", "phil"] as const).map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => { setFilter(f); setSelectedSong(""); setSearch(""); }}
                  className={`flex-1 py-2.5 text-xs font-[family-name:var(--font-dm-sans)] tracking-widest uppercase transition-all border ${
                    filter === f
                      ? "border-[#b8832a] bg-[#b8832a]/15 text-[#b8832a]"
                      : "border-[#ede8de]/15 text-[#ede8de]/40 hover:border-[#ede8de]/30"
                  }`}
                >
                  {f === "all" ? "Mr. Kind Solo" : "With Phil on Keys"}
                </button>
              ))}
            </div>

            <input
              type="text"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setSelectedSong(""); }}
              placeholder="Filter by artist or song…"
              className="w-full bg-[#252220] border border-[#ede8de]/10 text-[#ede8de] placeholder-[#ede8de]/25 px-4 py-3 text-base font-[family-name:var(--font-dm-sans)] focus:outline-none focus:border-[#b8832a]/50 transition-colors mb-3"
              autoComplete="off"
            />

            <div className="h-64 overflow-y-auto border border-[#ede8de]/10 bg-[#181614] mb-3">
              {filtered.length === 0 ? (
                <p className="text-center font-[family-name:var(--font-dm-sans)] text-[#ede8de]/25 text-xs py-10">No matches</p>
              ) : (
                <div className="grid grid-cols-2 gap-px bg-[#ede8de]/5">
                  {filtered.map((song) => {
                    const [artist, title] = song.split(" – ");
                    return (
                      <button
                        key={song}
                        type="button"
                        onClick={() => { setSelectedSong(song); setSearch(song); }}
                        className={`text-left px-3 py-2.5 transition-colors bg-[#181614] ${
                          selectedSong === song ? "bg-[#b8832a]/20 border-l-2 border-[#b8832a]" : "hover:bg-[#252220]"
                        }`}
                      >
                        <p className={`font-[family-name:var(--font-dm-sans)] text-[10px] tracking-widest uppercase truncate leading-tight mb-0.5 ${selectedSong === song ? "text-[#b8832a]" : "text-[#8aaa9e]"}`}>
                          {artist}
                        </p>
                        <p className={`font-[family-name:var(--font-source-sans)] text-xs truncate leading-snug ${selectedSong === song ? "text-[#b8832a]" : "text-[#ede8de]/70"}`}>
                          {title}
                        </p>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {selectedSong && (
              <p className="font-[family-name:var(--font-dm-sans)] text-[#b8832a] text-xs tracking-widest uppercase text-center mb-3">
                ✓ {selectedSong}
              </p>
            )}

            <div>
              <label className="font-[family-name:var(--font-dm-sans)] text-xs tracking-widest uppercase text-[#ede8de]/40 block mb-2">
                Note for Brian <span className="normal-case tracking-normal text-[#ede8de]/25">(optional)</span>
              </label>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows={3}
                placeholder="Any other request, key preference, or just a hello…"
                className="w-full bg-[#252220] border border-[#ede8de]/10 text-[#ede8de] placeholder-[#ede8de]/20 px-4 py-3 text-base font-[family-name:var(--font-dm-sans)] focus:outline-none focus:border-[#b8832a]/50 transition-colors resize-none"
              />
            </div>
          </section>

          {/* ── 3. Your Info ────────────────────────────────────────── */}
          <section>
            <div className="mb-5">
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-[#ede8de] mb-1">Your Info</h2>
              <div className="w-8 h-px bg-[#b8832a]" />
            </div>
            <div className="space-y-3">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name (optional)"
                className="w-full bg-[#252220] border border-[#ede8de]/10 text-[#ede8de] placeholder-[#ede8de]/25 px-4 py-3 text-base font-[family-name:var(--font-dm-sans)] focus:outline-none focus:border-[#b8832a]/50 transition-colors"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email (optional)"
                className="w-full bg-[#252220] border border-[#ede8de]/10 text-[#ede8de] placeholder-[#ede8de]/25 px-4 py-3 text-base font-[family-name:var(--font-dm-sans)] focus:outline-none focus:border-[#b8832a]/50 transition-colors"
              />
              <label className={`focus-within:outline-2 focus-within:outline-[#b8832a] flex items-start gap-4 cursor-pointer border p-5 transition-colors ${notifyChecked ? "border-[#b8832a] bg-[#b8832a]/10" : "border-[#ede8de]/25 bg-[#252220] hover:border-[#b8832a]/60"}`}>
                <input
                  type="checkbox"
                  checked={notifyChecked}
                  onChange={(e) => setNotifyChecked(e.target.checked)}
                  className="mt-0.5 h-6 w-6 shrink-0 accent-[#b8832a]"
                />
                <span className="font-[family-name:var(--font-dm-sans)] text-[#ede8de]/90 leading-relaxed">
                  <span className="block text-lg font-semibold">Get email &amp; text alerts</span>
                  <span className="mt-1 block text-base text-[#ede8de]/75">Upcoming shows and house concert dates</span>
                </span>
              </label>
              {notifyChecked && (
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone for text alerts (optional)"
                  className="w-full bg-[#252220] border border-[#ede8de]/10 text-[#ede8de] placeholder-[#ede8de]/25 px-4 py-3 text-base font-[family-name:var(--font-dm-sans)] focus:outline-none focus:border-[#b8832a]/50 transition-colors"
                />
              )}
            </div>
          </section>

          {/* ── Submit ──────────────────────────────────────────────── */}
          <div className="pb-4">
            <button
              type="submit"
              disabled={!canSubmit || busy}
              className="w-full py-4 bg-[#b8832a] text-[#1c1a17] font-[family-name:var(--font-dm-sans)] font-semibold tracking-widest uppercase text-sm hover:bg-[#a8721a] transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              {sendingRequest
                ? "Sending request…"
                : loadingPayment
                ? "Setting up payment…"
                : paymentMethod === "stripe"
                ? hasTip ? `Continue to Pay $${effectiveTip} →` : "Choose a tip amount above"
                : "Send Request →"}
            </button>
            <p className="mt-3 text-center font-[family-name:var(--font-dm-sans)] text-[#ede8de]/20 text-xs">
              {paymentMethod === "stripe" ? "Paid securely via Stripe · Apple Pay & Google Pay accepted" : "Requests are free. Tips are always appreciated."}
            </p>
            {hasRequest && paymentMethod === "stripe" && (
              <button
                type="button"
                onClick={() => handleRequest("free")}
                disabled={busy}
                className="focus-ring mt-5 w-full py-3 border border-[#ede8de]/20 font-[family-name:var(--font-dm-sans)] text-xs tracking-widest uppercase text-[#ede8de]/60 hover:text-[#ede8de] disabled:opacity-40"
              >
                Request without a tip →
              </button>
            )}
            <div className="text-center pt-6">
              <Link href="/" className="font-[family-name:var(--font-dm-sans)] text-xs text-[#ede8de]/25 hover:text-[#ede8de]/50 tracking-widest uppercase transition-colors">
                ← Back to mrkindmusic.com
              </Link>
            </div>
          </div>

        </form>
      </div>
    </main>
  );
}
