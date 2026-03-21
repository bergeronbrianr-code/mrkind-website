"use client";

// SETUP REQUIRED — add to .env.local:
//   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
//   STRIPE_SECRET_KEY=sk_live_...

import { useState, useMemo, useCallback } from "react";
import Link from "next/link";
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

const SONGS = [
  "Al Green – Let's Stay Together",
  "Amy Winehouse – Valerie",
  "Andrew Bird – Measuring Cups",
  "Beck – The Golden Age",
  "Bill Withers – Ain't No Sunshine",
  "Bill Withers – Lean on Me",
  "Bob Dylan – Like a Rolling Stone",
  "Bob Marley – No Woman No Cry",
  "Bon Iver – Skinny Love",
  "Bright Eyes – First Day of My Life",
  "Bruce Springsteen – Dancing in the Dark",
  "Bruce Springsteen – I'm on Fire",
  "Coldplay – Clocks",
  "Dave Matthews Band – Ants Marching",
  "David Gray – Babylon",
  "Death Cab for Cutie – I Will Follow You Into the Dark",
  "Donnie Hathaway – Jealous Guy",
  "Dr. Dog – Shadow People",
  "Eagles – Hotel California",
  "Edward Sharpe & The Magnetic Zeros – Home",
  "Elton John – Tiny Dancer",
  "Elton John – Your Song",
  "Elvis Presley – Can't Help Falling In Love With You",
  "Eric Clapton – Lay Down Sally",
  "Eric Clapton – Layla",
  "Father John Misty – Fun Times in Babylon",
  "Father John Misty – I'm Writing A Novel",
  "Feist – 1, 2, 3, 4",
  "Fleetwood Mac – Landslide",
  "Flock of Dimes – Awake for the Sunrise",
  "Foo Fighters – Everlong",
  "Geese – Cobra",
  "Goo Goo Dolls – Slide",
  "Hall & Oates – You Make My Dreams Come True",
  "Jack Johnson – Better Together",
  "Jackson Browne – These Days",
  "James Taylor – Fire and Rain",
  "James Taylor – How Sweet It Is",
  "Jason Mraz – I'm Yours",
  "Jeff Buckley – Hallelujah",
  "John Legend – All of Me",
  "John Lennon – Imagine",
  "John Mayer – Why Georgia",
  "Johnny Cash – Folsom Prison Blues",
  "Johnny Cash – I Walk The Line",
  "Johnny Cash – Ring of Fire",
  "Josh Ritter – Girl in the War",
  "Josh Ritter – Monster Ballads",
  "Journey – Don't Stop Believin'",
  "Judy Garland – Somewhere Over the Rainbow",
  "Kings of Leon – Use Somebody",
  "Leonard Cohen – Hallelujah",
  "Lumineers – Ho Hey",
  "Matchbox 20 – 3AM",
  "MGMT – Fated to Pretend",
  "Modern English – Melt with You",
  "Mumford & Sons – I Will Wait",
  "Neil Diamond – Sweet Caroline",
  "Neil Young – Harvest Moon",
  "Neil Young – Heart of Gold",
  "Neil Young – Out on the Weekend",
  "Neutral Milk Hotel – In the Aeroplane Over the Sea",
  "Noah Kahan – Orange Juice",
  "Oasis – Wonderwall",
  "Old Crow Medicine Show – Wagon Wheel",
  "Otis Redding – Sittin' On The Dock of the Bay",
  "Paul Simon – 50 Ways to Leave Your Lover",
  "Paul Simon – The Sound of Silence",
  "Pearl Jam – Betterman",
  "Prince – Nothing Compares 2 U",
  "Radiohead – Creep",
  "Radiohead – Fake Plastic Trees",
  "Radiohead – Karma Police",
  "Ray LaMontagne – You Are the Best Thing",
  "Red Hot Chili Peppers – Under the Bridge",
  "REM – Losing My Religion",
  "Roy Orbison – Pretty Woman",
  "Sam Cooke – Wonderful World",
  "Sheryl Crow – Strong Enough",
  "Simon & Garfunkel – Me and Julio Down by the Schoolyard",
  "Smashing Pumpkins – Tonight Tonight",
  "Spoon – The Underdog",
  "Stealers Wheel – Stuck in the Middle With You",
  "Tears for Fears – Everybody Wants to Rule the World",
  "The Band – The Weight",
  "The Beatles – Come Together",
  "The Beatles – Don't Let Me Down",
  "The Beatles – Here Comes The Sun",
  "The Beatles – In My Life",
  "The Beatles – Yellow Submarine",
  "The National – Fake Empire",
  "The Postal Service – The District Sleeps Alone Tonight",
  "The Rolling Stones – Wild Horses",
  "The Temptations – My Girl",
  "Tom Petty – Free Fallin'",
  "Tom Petty – I Won't Back Down",
  "Tom Petty – Wildflowers",
  "Tracy Chapman – Gimme One Reason",
  "U2 – With or Without You",
  "Vampire Weekend – I Stand Corrected",
  "Van Morrison – Brown Eyed Girl",
  "Van Morrison – Into the Mystic",
  "Wilco – California Stars",
  "Wilco – Jesus, etc.",
  "Wilco – Kamera",
];

const PHIL_SONGS = new Set([
  "Al Green – Let's Stay Together",
  "Beck – The Golden Age",
  "Bon Iver – Skinny Love",
  "Bruce Springsteen – Dancing in the Dark",
  "Donnie Hathaway – Jealous Guy",
  "Elton John – Your Song",
  "Flock of Dimes – Awake for the Sunrise",
  "Geese – Cobra",
  "Kings of Leon – Use Somebody",
  "Neil Young – Harvest Moon",
  "Radiohead – Fake Plastic Trees",
  "Sheryl Crow – Strong Enough",
  "The Beatles – Come Together",
  "The Beatles – Don't Let Me Down",
  "The Rolling Stones – Wild Horses",
  "Tears for Fears – Everybody Wants to Rule the World",
  "Wilco – Jesus, etc.",
  "Wilco – Kamera",
]);

const TIP_AMOUNTS = [5, 10, 20];

const MAILCHIMP_URL =
  "https://mrkindmusic.us17.list-manage.com/subscribe/post?u=90a8ab0567da6cacd07d0ffc6&id=7e20313e43&f_id=0000c2e1f0";

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

async function subscribeToMailchimp(email: string, name?: string) {
  const data = new FormData();
  data.append("EMAIL", email);
  if (name) data.append("FNAME", name.split(" ")[0]);
  data.append("b_90a8ab0567da6cacd07d0ffc6_7e20313e43", "");
  await fetch(MAILCHIMP_URL, { method: "POST", body: data, mode: "no-cors" });
}

// ── Stripe payment form (rendered inside <Elements>) ─────────────────────────
function PaymentForm({
  amount,
  song,
  name,
  email,
  note,
  notifyChecked,
  onSuccess,
  onBack,
}: {
  amount: number;
  song: string;
  name: string;
  email: string;
  note: string;
  notifyChecked: boolean;
  onSuccess: () => void;
  onBack: () => void;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [paying, setPaying] = useState(false);
  const [error, setError] = useState("");

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
      subscribeToMailchimp(email, name).catch(() => {});
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
    </form>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────
export default function RequestPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "phil">("all");
  const [selectedSong, setSelectedSong] = useState("");
  const [tipAmount, setTipAmount] = useState<number | null>(null);
  const [customTip, setCustomTip] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [notifyChecked, setNotifyChecked] = useState(false);

  const [phase, setPhase] = useState<"form" | "payment" | "success">("form");
  const [clientSecret, setClientSecret] = useState("");
  const [loadingPayment, setLoadingPayment] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const filtered = useMemo(() => {
    const base = filter === "phil" ? SONGS.filter((s) => PHIL_SONGS.has(s)) : SONGS;
    if (!search) return base;
    const q = search.toLowerCase();
    return base.filter((s) => s.toLowerCase().includes(q));
  }, [search, filter]);

  const effectiveTip = tipAmount ?? (customTip ? parseFloat(customTip) : null);
  const hasTip = !!effectiveTip && effectiveTip >= 1;
  const hasRequest = !!selectedSong || !!note;
  const canSubmit = hasTip || hasRequest;

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    if (hasTip) {
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
      // No tip — just submit request and go to success
      if (hasRequest) {
        fetch("https://formspree.io/f/mbdzejjy", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, song: selectedSong, note }),
        }).catch(() => {});
      }
      if (notifyChecked && email) {
        subscribeToMailchimp(email, name).catch(() => {});
      }
      setPhase("success");
    }
  }, [hasTip, effectiveTip, selectedSong, name, email, note, notifyChecked, hasRequest]);

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
          <button
            onClick={() => {
              setPhase("form");
              setSelectedSong(""); setSearch(""); setNote("");
              setTipAmount(null); setCustomTip(""); setClientSecret("");
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

          {/* ── 1. Tip ──────────────────────────────────────────────── */}
          <section>
            <div className="mb-5">
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-[#ede8de] mb-1">Leave a Tip</h2>
              <div className="w-8 h-px bg-[#b8832a]" />
            </div>
            <p className="font-[family-name:var(--font-source-sans)] text-[#ede8de]/50 text-sm italic mb-5">
              Optional — skip if you just want to request a song.
            </p>

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
          </section>

          {/* ── 2. Song Request ─────────────────────────────────────── */}
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
              <label className="flex items-start gap-3 cursor-pointer group pt-1">
                <div className="relative mt-0.5 shrink-0">
                  <input
                    type="checkbox"
                    checked={notifyChecked}
                    onChange={(e) => setNotifyChecked(e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`w-4 h-4 border transition-colors ${notifyChecked ? "border-[#b8832a] bg-[#b8832a]" : "border-[#ede8de]/20 bg-[#252220] group-hover:border-[#ede8de]/40"}`}>
                    {notifyChecked && (
                      <svg className="w-4 h-4 text-[#1c1a17]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </div>
                <span className="font-[family-name:var(--font-dm-sans)] text-[#ede8de]/40 text-xs leading-relaxed group-hover:text-[#ede8de]/60 transition-colors">
                  Get notified about upcoming shows and house concert dates
                </span>
              </label>
            </div>
          </section>

          {/* ── Submit ──────────────────────────────────────────────── */}
          <div className="pb-4">
            {submitError && (
              <p className="font-[family-name:var(--font-dm-sans)] text-[#e07070] text-xs text-center mb-3">
                {submitError}
              </p>
            )}
            <button
              type="submit"
              disabled={!canSubmit || loadingPayment}
              className="w-full py-4 bg-[#b8832a] text-[#1c1a17] font-[family-name:var(--font-dm-sans)] font-semibold tracking-widest uppercase text-sm hover:bg-[#a8721a] transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              {loadingPayment
                ? "Setting up payment…"
                : hasTip
                ? `Continue to Pay $${effectiveTip} →`
                : "Send Request →"}
            </button>
            <p className="mt-3 text-center font-[family-name:var(--font-dm-sans)] text-[#ede8de]/20 text-xs">
              {hasTip ? "Paid securely via Stripe · Apple Pay & Google Pay accepted" : "Nothing to pay — just hit send"}
            </p>
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
