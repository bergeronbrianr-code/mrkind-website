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

const MAILCHIMP_URL =
  "https://mrkindmusic.us17.list-manage.com/subscribe/post?u=90a8ab0567da6cacd07d0ffc6&id=7e20313e43&f_id=0000c2e1f0";

async function subscribeToMailchimp(email: string) {
  const data = new FormData();
  data.append("EMAIL", email);
  data.append("b_90a8ab0567da6cacd07d0ffc6_7e20313e43", ""); // honeypot — do not remove
  await fetch(MAILCHIMP_URL, { method: "POST", body: data, mode: "no-cors" });
}

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
  "Bruce Springsteen – I'm on Fire",
  "Donnie Hathaway – Jealous Guy",
  "Dr. Dog – Shadow People",
  "Elton John – Tiny Dancer",
  "Elton John – Your Song",
  "Father John Misty – Fun Times in Babylon",
  "Father John Misty – I'm Writing A Novel",
  "Flock of Dimes – Awake for the Sunrise",
  "Geese – Cobra",
  "Jackson Browne – These Days",
  "Johnny Cash – Ring of Fire",
  "Kings of Leon – Use Somebody",
  "Neil Young – Harvest Moon",
  "Neil Young – Out on the Weekend",
  "Prince – Nothing Compares 2 U",
  "Radiohead – Fake Plastic Trees",
  "Sheryl Crow – Strong Enough",
  "The Beatles – Come Together",
  "The Beatles – Don't Let Me Down",
  "The Rolling Stones – Wild Horses",
  "Tears for Fears – Everybody Wants to Rule the World",
  "Tom Petty – I Won't Back Down",
  "Wilco – California Stars",
]);

const TIP_AMOUNTS = [5, 10, 20];

// STRIPE PAYMENT LINK — replace with your actual Stripe Payment Link URL
const STRIPE_PAYMENT_LINK_URL = "https://buy.stripe.com/YOUR_PAYMENT_LINK";

export default function RequestPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "phil">("all");
  const [selectedSong, setSelectedSong] = useState("");
  const [tipAmount, setTipAmount] = useState<number | null>(null);
  const [customTip, setCustomTip] = useState("");
  const [tipNote, setTipNote] = useState("");
  const [requestNote, setRequestNote] = useState("");
  const [requestSubmitted, setRequestSubmitted] = useState(false);
  const [listEmail, setListEmail] = useState("");
  const [listChecked, setListChecked] = useState(false);
  const [listSubmitted, setListSubmitted] = useState(false);

  const filtered = useMemo(() => {
    const base = filter === "phil" ? SONGS.filter((s) => PHIL_SONGS.has(s)) : SONGS;
    if (!search) return base;
    const q = search.toLowerCase();
    return base.filter((s) => s.toLowerCase().includes(q));
  }, [search, filter]);

  const effectiveTip = tipAmount ?? (customTip ? parseFloat(customTip) : null);

  function handleTipPay() {
    if (!effectiveTip || effectiveTip < 1) return;
    window.open(STRIPE_PAYMENT_LINK_URL, "_blank");
  }

  function handleRequestSubmit(e: React.FormEvent) {
    e.preventDefault();
    setRequestSubmitted(true);
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
            <form
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              onSubmit={handleRequestSubmit}
              className="space-y-4"
            >
              <input type="hidden" name="song_request" value={selectedSong} />

              {/* Filter toggle */}
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => { setFilter("all"); setSelectedSong(""); setSearch(""); }}
                  className={`flex-1 py-2.5 text-xs font-[family-name:var(--font-dm-sans)] tracking-widest uppercase transition-all border ${
                    filter === "all"
                      ? "border-[#b8832a] bg-[#b8832a]/15 text-[#b8832a]"
                      : "border-[#ede8de]/15 text-[#ede8de]/40 hover:border-[#ede8de]/30"
                  }`}
                >
                  Mr. Kind Solo
                </button>
                <button
                  type="button"
                  onClick={() => { setFilter("phil"); setSelectedSong(""); setSearch(""); }}
                  className={`flex-1 py-2.5 text-xs font-[family-name:var(--font-dm-sans)] tracking-widest uppercase transition-all border ${
                    filter === "phil"
                      ? "border-[#b8832a] bg-[#b8832a]/15 text-[#b8832a]"
                      : "border-[#ede8de]/15 text-[#ede8de]/40 hover:border-[#ede8de]/30"
                  }`}
                >
                  With Phil on Keys
                </button>
              </div>

              {/* Search */}
              <input
                type="text"
                value={search}
                onChange={(e) => { setSearch(e.target.value); setSelectedSong(""); }}
                placeholder="Filter by artist or song…"
                className="w-full bg-[#252220] border border-[#ede8de]/10 text-[#ede8de] placeholder-[#ede8de]/25 px-4 py-3 text-sm font-[family-name:var(--font-dm-sans)] focus:outline-none focus:border-[#b8832a]/50 transition-colors"
                autoComplete="off"
              />

              {/* Browsable song grid */}
              <div className="h-64 overflow-y-auto border border-[#ede8de]/10 bg-[#181614]">
                {filtered.length === 0 ? (
                  <p className="text-center font-[family-name:var(--font-dm-sans)] text-[#ede8de]/25 text-xs py-10">
                    No matches
                  </p>
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
                            selectedSong === song
                              ? "bg-[#b8832a]/20 border-l-2 border-[#b8832a]"
                              : "hover:bg-[#252220]"
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
                <p className="font-[family-name:var(--font-dm-sans)] text-[#b8832a] text-xs tracking-widest uppercase text-center">
                  ✓ {selectedSong}
                </p>
              )}

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
                onClick={() => { setTipAmount(amount); setCustomTip(""); }}
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
                onChange={(e) => { setCustomTip(e.target.value); setTipAmount(null); }}
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

        {/* ── Stay in the Loop ──────────────────────────────────────── */}
        <section className="mb-10 pt-8 border-t border-[#ede8de]/10">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#ede8de] mb-1">
            Stay in the Loop
          </h2>
          <div className="w-8 h-px bg-[#b8832a] mb-4" />
          <p className="font-[family-name:var(--font-source-sans)] text-[#ede8de]/50 text-sm italic mb-5">
            Get notified about upcoming shows and house concert dates.
          </p>

          {listSubmitted ? (
            <p className="font-[family-name:var(--font-playfair)] text-[#8aaa9e] text-base italic">
              You&apos;re on the list.
            </p>
          ) : (
            <div className="space-y-3">
              <input
                type="email"
                value={listEmail}
                onChange={(e) => setListEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full bg-[#252220] border border-[#ede8de]/10 text-[#ede8de] placeholder-[#ede8de]/25 px-4 py-3 text-sm font-[family-name:var(--font-dm-sans)] focus:outline-none focus:border-[#b8832a]/50 transition-colors"
              />
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative mt-0.5 shrink-0">
                  <input
                    type="checkbox"
                    checked={listChecked}
                    onChange={(e) => setListChecked(e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`w-4 h-4 border transition-colors ${listChecked ? "border-[#b8832a] bg-[#b8832a]" : "border-[#ede8de]/20 bg-[#252220] group-hover:border-[#ede8de]/40"}`}>
                    {listChecked && (
                      <svg className="w-4 h-4 text-[#1c1a17]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </div>
                <span className="font-[family-name:var(--font-dm-sans)] text-[#ede8de]/40 text-xs leading-relaxed group-hover:text-[#ede8de]/60 transition-colors">
                  Yes, keep me posted on upcoming shows
                </span>
              </label>
              <button
                type="button"
                disabled={!listChecked || !listEmail}
                onClick={async () => {
                  await subscribeToMailchimp(listEmail);
                  setListSubmitted(true);
                }}
                className="w-full py-3 border border-[#b8832a] text-[#b8832a] font-[family-name:var(--font-dm-sans)] font-semibold tracking-widest uppercase text-xs hover:bg-[#b8832a] hover:text-[#1c1a17] transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Sign Me Up
              </button>
            </div>
          )}
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
