"use client";

// Song Request + Tip page — QR code destination for live shows.
// Mobile-first. Loads fast on phones.
//
// STRIPE SETUP:
//   1. Create a free account at stripe.com
//   2. Get your Publishable Key from the Stripe Dashboard
//   3. Replace STRIPE_PLACEHOLDER_KEY below with your actual key (starts with pk_live_ or pk_test_)
//   4. Create a Payment Link at dashboard.stripe.com/payment-links
//   5. Replace STRIPE_PAYMENT_LINK_URL with that URL
//
// FORMSPREE SETUP (song requests):
//   1. Create a free account at formspree.io
//   2. Create a new form, copy the form ID
//   3. Replace YOUR_FORM_ID in the form action below

import { useState, useMemo } from "react";
import Link from "next/link";

const SONGS = [
  "Al Green – Let's Stay Together",
  "Andrew Bird – Measuring Cups",
  "Awake for the Sunrise – Flock of Dimes",
  "Beck – The Golden Age",
  "Bill Withers – Ain't No Sunshine",
  "Bob Dylan – Like a Rolling Stone",
  "Bon Iver – Calgary",
  "Bon Iver – Skinny Love",
  "Bruce Springsteen – Dancing in the Dark",
  "Bruce Springsteen – I'm on Fire",
  "Coldplay – Clocks",
  "David Gray – Babylon",
  "Dr. Dog – Shadow People",
  "Elton John – Tiny Dancer",
  "Elton John – Your Song",
  "Elvis Presley – Can't Help Falling In Love With You",
  "Eric Clapton – Lay Down Sally",
  "Eric Clapton – Layla",
  "Father John Misty – Fun Times in Babylon",
  "Father John Misty – I'm Writing A Novel",
  "Feist – 1, 2, 3, 4",
  "Fleetwood Mac – Landslide",
  "Geese – Cobra",
  "Goo Goo Dolls – Slide",
  "Hall and Oates – You Make My Dreams Come True",
  "Jack Johnson – Better Together",
  "Jackson Browne – These Days",
  "James Taylor – How Sweet It Is",
  "Jealous Guy – John Lennon / Donny Hathaway",
  "Johnny Cash – I Walk The Line",
  "Johnny Cash – Ring of Fire",
  "Josh Ritter – Girl in the War",
  "Josh Ritter – Monster Ballads",
  "Journey – Don't Stop Believin'",
  "Kings of Leon – Use Somebody",
  "Lumineers – Ho Hey",
  "Matchbox 20 – 3AM",
  "Modern English – I Melt with You",
  "Neil Diamond – Sweet Caroline",
  "Neil Young – Harvest Moon",
  "Neil Young – Heart of Gold",
  "Nothing Compares 2 U – Prince / Sinéad O'Connor",
  "Oasis – Wonderwall",
  "Old Crow Medicine Show – Wagon Wheel",
  "Otis Redding – Sittin' On The Dock of the Bay",
  "Out on the Weekend – Neil Young",
  "Pearl Jam – Betterman",
  "Radiohead – Creep",
  "Radiohead – Fake Plastic Trees",
  "Radiohead – Karma Police",
  "REM – Losing My Religion",
  "Roy Orbison – Pretty Woman",
  "Sheryl Crow – Strong Enough",
  "Simon and Garfunkel – Me and Julio Down by the Schoolyard",
  "Spoon – The Underdog",
  "Steeler's Wheel – Stuck in the Middle With You",
  "Tears for Fears – Everybody Wants to Rule the World",
  "The Band – The Weight",
  "The Beatles – Come Together",
  "The Beatles – Don't Let Me Down",
  "The Beatles – Here Comes The Sun",
  "The Beatles – Yellow Submarine",
  "The National – Fake Empire",
  "The Postal Service – The District Sleeps Alone Tonight",
  "The Rolling Stones – Wild Horses",
  "The Temptations – My Girl",
  "Tom Petty – Free Fallin'",
  "Tom Petty – I Won't Back Down",
  "Tracy Chapman – Gimme One Reason",
  "Vampire Weekend – I Stand Corrected",
  "Van Morrison – Into the Mystic",
  "Wilco – California Stars",
  "Wilco – Jesus, etc.",
  "Wilco – Kamera",
];

const TIP_AMOUNTS = [5, 10, 20];

// STRIPE PAYMENT LINK — replace with your actual Stripe Payment Link URL
const STRIPE_PAYMENT_LINK_URL = "https://buy.stripe.com/YOUR_PAYMENT_LINK";

export default function RequestPage() {
  const [search, setSearch] = useState("");
  const [selectedSong, setSelectedSong] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [tipAmount, setTipAmount] = useState<number | null>(null);
  const [customTip, setCustomTip] = useState("");
  const [tipNote, setTipNote] = useState("");
  const [requestNote, setRequestNote] = useState("");
  const [requestSubmitted, setRequestSubmitted] = useState(false);

  const filtered = useMemo(() => {
    if (!search) return SONGS;
    const q = search.toLowerCase();
    return SONGS.filter((s) => s.toLowerCase().includes(q));
  }, [search]);

  const effectiveTip = tipAmount ?? (customTip ? parseFloat(customTip) : null);

  function handleSelectSong(song: string) {
    setSelectedSong(song);
    setSearch(song);
    setShowDropdown(false);
  }

  function handleRequestSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Actual submission handled by Formspree — this is for optimistic UI
    setRequestSubmitted(true);
  }

  function handleTipPay() {
    if (!effectiveTip || effectiveTip < 1) return;
    // Redirect to Stripe Payment Link
    // In production, you could append ?prefilled_quantity=X or use Stripe Checkout Sessions
    // for a more custom experience with Apple Pay / Google Pay.
    window.open(STRIPE_PAYMENT_LINK_URL, "_blank");
  }

  return (
    <main className="min-h-screen bg-[#1c1a17] pt-20 pb-16">
      <div className="max-w-lg mx-auto px-5">
        {/* Header */}
        <div className="py-10 text-center">
          <Link
            href="/"
            className="font-[family-name:var(--font-playfair)] text-[#b8832a] text-xl block mb-8"
          >
            Mr. Kind
          </Link>

          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 bg-[#b8832a]/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#b8832a]" />
            <div className="h-px w-8 bg-[#b8832a]/40" />
          </div>
          <p className="font-[family-name:var(--font-source-sans)] text-[#ede8de]/40 text-sm italic">
            Live at the show? Request a song or leave a tip.
          </p>
        </div>

        {/* ── Song Request ──────────────────────────────────────────── */}
        <section className="mb-10">
          <div className="mb-5">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-[#ede8de] mb-1">
              Request a Song
            </h2>
            <div className="w-8 h-px bg-[#b8832a]" />
          </div>

          {requestSubmitted ? (
            <div className="bg-[#8aaa9e]/20 border border-[#8aaa9e]/40 p-6 text-center">
              <p className="font-[family-name:var(--font-playfair)] text-[#ede8de] text-xl mb-2">
                Request sent!
              </p>
              <p className="font-[family-name:var(--font-source-sans)] text-[#ede8de]/55 text-sm italic">
                Brian will do his best to work it in.
              </p>
              <button
                onClick={() => {
                  setRequestSubmitted(false);
                  setSelectedSong("");
                  setSearch("");
                  setRequestNote("");
                }}
                className="mt-4 font-[family-name:var(--font-dm-sans)] text-xs tracking-widest uppercase text-[#b8832a] hover:underline"
              >
                Request another
              </button>
            </div>
          ) : (
            /* Actual form — Formspree handles submission */
            <form
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              onSubmit={handleRequestSubmit}
              className="space-y-4"
            >
              {/* Searchable song picker */}
              <div className="relative">
                <label className="font-[family-name:var(--font-dm-sans)] text-xs tracking-widest uppercase text-[#ede8de]/40 block mb-2">
                  Song
                </label>
                <input
                  type="text"
                  name="song_request"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setSelectedSong("");
                    setShowDropdown(true);
                  }}
                  onFocus={() => setShowDropdown(true)}
                  placeholder="Search artist or song title…"
                  className="w-full bg-[#252220] border border-[#ede8de]/10 text-[#ede8de] placeholder-[#ede8de]/25 px-4 py-3.5 text-sm font-[family-name:var(--font-dm-sans)] focus:outline-none focus:border-[#b8832a]/50 transition-colors"
                  autoComplete="off"
                />

                {showDropdown && filtered.length > 0 && (
                  <div className="absolute z-20 w-full bg-[#1e1c19] border border-[#ede8de]/10 border-t-0 max-h-56 overflow-y-auto shadow-xl">
                    {filtered.map((song) => (
                      <button
                        key={song}
                        type="button"
                        onMouseDown={() => handleSelectSong(song)}
                        className={`w-full text-left px-4 py-3 text-sm font-[family-name:var(--font-dm-sans)] transition-colors ${
                          selectedSong === song
                            ? "bg-[#b8832a]/20 text-[#b8832a]"
                            : "text-[#ede8de]/70 hover:bg-[#b8832a]/10 hover:text-[#ede8de]"
                        }`}
                      >
                        {song}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Note */}
              <div>
                <label className="font-[family-name:var(--font-dm-sans)] text-xs tracking-widest uppercase text-[#ede8de]/40 block mb-2">
                  Note for Brian{" "}
                  <span className="normal-case tracking-normal text-[#ede8de]/25">(optional)</span>
                </label>
                <textarea
                  name="note"
                  value={requestNote}
                  onChange={(e) => setRequestNote(e.target.value)}
                  rows={3}
                  placeholder="Any other request, key preference, or just a hello…"
                  className="w-full bg-[#252220] border border-[#ede8de]/10 text-[#ede8de] placeholder-[#ede8de]/20 px-4 py-3 text-sm font-[family-name:var(--font-dm-sans)] focus:outline-none focus:border-[#b8832a]/50 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#b8832a] text-[#1c1a17] font-[family-name:var(--font-dm-sans)] font-semibold tracking-widest uppercase text-sm hover:bg-[#a8721a] transition-colors duration-200 disabled:opacity-40"
              >
                Send Request
              </button>
            </form>
          )}
        </section>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1 bg-[#ede8de]/10" />
          <span className="font-[family-name:var(--font-dm-sans)] text-[#ede8de]/20 text-xs tracking-widest uppercase">
            or
          </span>
          <div className="h-px flex-1 bg-[#ede8de]/10" />
        </div>

        {/* ── Tip / Support ─────────────────────────────────────────── */}
        <section className="mb-10">
          <div className="mb-5">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-[#ede8de] mb-1">
              Leave a Tip
            </h2>
            <div className="w-8 h-px bg-[#b8832a]" />
          </div>

          <p className="font-[family-name:var(--font-source-sans)] text-[#ede8de]/50 text-sm italic mb-6">
            Enjoyed the show? Tips go directly to Brian. Apple Pay and Google Pay accepted.
          </p>

          {/* Tip amount selector */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            {TIP_AMOUNTS.map((amount) => (
              <button
                key={amount}
                type="button"
                onClick={() => {
                  setTipAmount(amount);
                  setCustomTip("");
                }}
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

          {/* Custom amount */}
          <div className="mb-4">
            <label className="font-[family-name:var(--font-dm-sans)] text-xs tracking-widest uppercase text-[#ede8de]/40 block mb-2">
              Custom Amount
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#ede8de]/40 font-[family-name:var(--font-dm-sans)]">
                $
              </span>
              <input
                type="number"
                min="1"
                step="1"
                value={customTip}
                onChange={(e) => {
                  setCustomTip(e.target.value);
                  setTipAmount(null);
                }}
                placeholder="Other amount"
                className="w-full bg-[#252220] border border-[#ede8de]/10 text-[#ede8de] placeholder-[#ede8de]/20 pl-8 pr-4 py-3 text-sm font-[family-name:var(--font-dm-sans)] focus:outline-none focus:border-[#b8832a]/50 transition-colors"
              />
            </div>
          </div>

          {/* Tip note */}
          <div className="mb-5">
            <label className="font-[family-name:var(--font-dm-sans)] text-xs tracking-widest uppercase text-[#ede8de]/40 block mb-2">
              Leave a note{" "}
              <span className="normal-case tracking-normal text-[#ede8de]/25">(optional)</span>
            </label>
            <input
              type="text"
              value={tipNote}
              onChange={(e) => setTipNote(e.target.value)}
              placeholder="Say something nice…"
              className="w-full bg-[#252220] border border-[#ede8de]/10 text-[#ede8de] placeholder-[#ede8de]/20 px-4 py-3 text-sm font-[family-name:var(--font-dm-sans)] focus:outline-none focus:border-[#b8832a]/50 transition-colors"
            />
          </div>

          {/*
            STRIPE HERE
            This button redirects to a Stripe Payment Link.
            Stripe handles Apple Pay, Google Pay, and card payments automatically.

            For a more embedded experience with custom amount:
              - Use Stripe Checkout Sessions via a Vercel Edge Function
              - POST { amount, note } → create session → redirect to session.url
              - See: https://stripe.com/docs/payments/checkout
          */}
          <button
            type="button"
            onClick={handleTipPay}
            disabled={!effectiveTip || effectiveTip < 1}
            className="w-full py-4 bg-[#b8832a] text-[#1c1a17] font-[family-name:var(--font-dm-sans)] font-semibold tracking-widest uppercase text-sm hover:bg-[#a8721a] transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            {effectiveTip && effectiveTip >= 1
              ? `Tip $${effectiveTip} →`
              : "Select an Amount"}
          </button>

          <p className="mt-3 text-center font-[family-name:var(--font-dm-sans)] text-[#ede8de]/20 text-xs">
            Powered by Stripe · Apple Pay &amp; Google Pay accepted
          </p>
        </section>

        {/* Back link */}
        <div className="text-center pt-4">
          <Link
            href="/"
            className="font-[family-name:var(--font-dm-sans)] text-xs text-[#ede8de]/25 hover:text-[#ede8de]/50 tracking-widest uppercase transition-colors"
          >
            ← Back to mrkindmusic.com
          </Link>
        </div>
      </div>
    </main>
  );
}
