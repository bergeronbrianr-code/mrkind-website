"use client";

// SETUP REQUIRED:
// 1. Formspree (free at formspree.io) — replace YOUR_FORM_ID below
// 2. Stripe Payment Link — replace YOUR_PAYMENT_LINK below

import { useState, useMemo } from "react";
import Link from "next/link";

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
const STRIPE_PAYMENT_LINK_URL = "https://buy.stripe.com/YOUR_PAYMENT_LINK";
const MAILCHIMP_URL =
  "https://mrkindmusic.us17.list-manage.com/subscribe/post?u=90a8ab0567da6cacd07d0ffc6&id=7e20313e43&f_id=0000c2e1f0";

async function subscribeToMailchimp(email: string, name?: string) {
  const data = new FormData();
  data.append("EMAIL", email);
  if (name) data.append("FNAME", name.split(" ")[0]);
  data.append("b_90a8ab0567da6cacd07d0ffc6_7e20313e43", "");
  await fetch(MAILCHIMP_URL, { method: "POST", body: data, mode: "no-cors" });
}

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
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const filtered = useMemo(() => {
    const base = filter === "phil" ? SONGS.filter((s) => PHIL_SONGS.has(s)) : SONGS;
    if (!search) return base;
    const q = search.toLowerCase();
    return base.filter((s) => s.toLowerCase().includes(q));
  }, [search, filter]);

  const effectiveTip = tipAmount ?? (customTip ? parseFloat(customTip) : null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    // Submit song request to Formspree
    if (selectedSong || note) {
      await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, song: selectedSong, note }),
      }).catch(() => {}); // silent fail — don't block the user
    }

    // Subscribe to Mailchimp if opted in
    if (notifyChecked && email) {
      await subscribeToMailchimp(email, name);
    }

    // Open Stripe for tip
    if (effectiveTip && effectiveTip >= 1) {
      window.open(STRIPE_PAYMENT_LINK_URL, "_blank");
    }

    setSubmitted(true);
    setSubmitting(false);
  }

  if (submitted) {
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
              ? `Request for "${selectedSong.split(" – ")[1]}" sent. Brian will do his best to work it in.`
              : "You're all set."}
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setSelectedSong("");
              setSearch("");
              setNote("");
              setTipAmount(null);
              setCustomTip("");
            }}
            className="font-[family-name:var(--font-dm-sans)] text-xs tracking-widest uppercase text-[#b8832a] hover:underline"
          >
            Submit another
          </button>
        </div>
      </main>
    );
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
            Request a song or leave a tip — or both.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">

          {/* ── 1. Tip (optional) ─────────────────────────────────── */}
          <section>
            <div className="mb-5">
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-[#ede8de] mb-1">
                Leave a Tip
              </h2>
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
                className="w-full bg-[#252220] border border-[#ede8de]/10 text-[#ede8de] placeholder-[#ede8de]/20 pl-8 pr-4 py-3 text-base font-[family-name:var(--font-dm-sans)] focus:outline-none focus:border-[#b8832a]/50 transition-colors"
              />
            </div>

            {effectiveTip && effectiveTip >= 1 ? (
              <p className="mt-3 font-[family-name:var(--font-dm-sans)] text-[#b8832a] text-xs tracking-widest uppercase text-center">
                ✓ ${effectiveTip} tip selected · paid via Stripe on submit
              </p>
            ) : null}
          </section>

          {/* ── 2. Song Request ───────────────────────────────────── */}
          <section>
            <div className="mb-5">
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-[#ede8de] mb-1">
                Request a Song
              </h2>
              <div className="w-8 h-px bg-[#b8832a]" />
            </div>
            <p className="font-[family-name:var(--font-source-sans)] text-[#ede8de]/50 text-sm italic mb-5">
              Optional — skip if you just want to leave a tip.
            </p>

            {/* Filter toggle */}
            <div className="flex gap-2 mb-3">
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
              <p className="font-[family-name:var(--font-dm-sans)] text-[#b8832a] text-xs tracking-widest uppercase text-center mb-3">
                ✓ {selectedSong}
              </p>
            )}

            <div>
              <label className="font-[family-name:var(--font-dm-sans)] text-xs tracking-widest uppercase text-[#ede8de]/40 block mb-2">
                Note for Brian{" "}
                <span className="normal-case tracking-normal text-[#ede8de]/25">(optional)</span>
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

          {/* ── 3. Your Info ──────────────────────────────────────── */}
          <section>
            <div className="mb-5">
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-[#ede8de] mb-1">
                Your Info
              </h2>
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

          {/* ── Submit ────────────────────────────────────────────── */}
          <div className="pb-4">
            <button
              type="submit"
              disabled={submitting || (!selectedSong && !note && !(effectiveTip && effectiveTip >= 1))}
              className="w-full py-4 bg-[#b8832a] text-[#1c1a17] font-[family-name:var(--font-dm-sans)] font-semibold tracking-widest uppercase text-sm hover:bg-[#a8721a] transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              {submitting
                ? "Sending…"
                : effectiveTip && effectiveTip >= 1
                ? `Send${selectedSong ? " Request" : ""} & Tip $${effectiveTip} →`
                : "Send Request →"}
            </button>
            <p className="mt-3 text-center font-[family-name:var(--font-dm-sans)] text-[#ede8de]/20 text-xs">
              {effectiveTip && effectiveTip >= 1
                ? "Tip paid securely via Stripe · Apple Pay & Google Pay accepted"
                : "Nothing to pay — just hit send"}
            </p>

            <div className="text-center pt-6">
              <Link
                href="/"
                className="font-[family-name:var(--font-dm-sans)] text-xs text-[#ede8de]/25 hover:text-[#ede8de]/50 tracking-widest uppercase transition-colors"
              >
                ← Back to mrkindmusic.com
              </Link>
            </div>
          </div>

        </form>
      </div>
    </main>
  );
}
