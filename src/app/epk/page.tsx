import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Footer from "@/components/Footer";
import LiteYouTube from "@/components/LiteYouTube";

export const metadata: Metadata = {
  title: "Book Mr. Kind | Live Music for DC Private & Corporate Events",
  description:
    "Book Mr. Kind (Brian Bergeron) for corporate gatherings and private parties in the DC, Maryland, and Virginia area. Hear live music, see client reviews, and get in touch.",
};

const inquiryHref = "/?inquiry=corporate-private-event#contact";

const reviews = [
  {
    quote: "At least five people ... asked me who he was and how we found him.",
    name: "Laura & Adam F.",
    source: "https://unilocal.es/estados-unidos/san-francisco/ivy-hill-entertainment",
  },
  {
    quote: "I would absolutely recommend him for any event.",
    name: "Matt L.",
    source: "https://unilocal.es/estados-unidos/san-francisco/ivy-hill-entertainment",
  },
  {
    quote: "With the utmost professionalism.",
    name: "Emily K.",
    source: "https://www.thebash.com/dj/ivyhillentertainment",
  },
  {
    quote: "Professional, accommodating, easy to work with, punctual and personable.",
    name: "Gilda G.",
    source: "https://www.thebash.com/acoustic-guitar/ivyhillentertainment/feedback?page=1",
  },
];

const details = [
  "Solo acoustic set with a compact, self-contained PA",
  "Originals and a 100+ song live cover repertoire",
  "Typical sets of 60–90 minutes; timing shaped to your event",
  "Song requests in advance are welcome",
  "Additional musicians available by arrangement",
];

export default function EpkPage() {
  return (
    <main>
      <section className="relative overflow-hidden px-5 pb-20 pt-32 md:px-8 md:pb-28 md:pt-40">
        <div className="pointer-events-none absolute -left-20 bottom-0 h-44 w-[55%] -rotate-[20deg] bg-[#b9d3c8]/55" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div>
            <p className="mb-6 text-[11px] uppercase tracking-[0.24em] text-[#b9771c]">Electronic press kit · Washington, DC area</p>
            <h1 className="font-[family-name:var(--font-playfair)] text-6xl leading-[0.99] md:text-7xl lg:text-[5.75rem]">
              Mr. Kind<span className="mt-3 block italic text-[#7da89e]">is Brian Bergeron.</span>
            </h1>
            <div className="my-8 h-px w-20 bg-[#b9771c]" />
            <p className="max-w-xl font-[family-name:var(--font-source-sans)] text-xl leading-relaxed text-[#292a20]/75 md:text-2xl">
              Indie rock and folk-Americana for corporate gatherings, holiday parties, and private events across DC, Maryland, and Virginia.
            </p>
            <p className="mt-5 text-xs font-medium uppercase tracking-[0.16em] text-[#986014]">Booking holiday events</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href={inquiryHref} className="focus-ring bg-[#b9771c] px-7 py-3.5 text-xs font-medium uppercase tracking-[0.16em] text-[#f3f0e8] transition-colors hover:bg-[#292a20]">Book Mr. Kind</Link>
              <a href="#watch" className="focus-ring border border-[#292a20]/25 px-7 py-3.5 text-xs font-medium uppercase tracking-[0.16em] transition-colors hover:border-[#b9771c] hover:text-[#b9771c]">Watch live</a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[450px]">
            <div className="absolute -right-5 -top-5 h-32 w-32 bg-[#b9771c]/20" />
            <div className="relative aspect-square overflow-hidden shadow-[17px_19px_0_rgba(41,42,32,0.11)]">
              <Image src="/Photos/Mr Kind - Front Text-Free.png" alt="Mr. Kind artwork in ochre and teal" fill priority sizes="(max-width: 1024px) 90vw, 40vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Performance at a glance" className="bg-[#292a20] px-5 py-11 text-[#f3f0e8] md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-3">
          {[{ value: "20+", label: "Years performing" }, { value: "1,000+", label: "Shows played" }, { value: "100+", label: "Songs in the live repertoire" }].map((item) => (
            <div key={item.label} className="border-l border-[#b9771c] pl-5">
              <p className="font-[family-name:var(--font-playfair)] text-4xl">{item.value}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.13em] text-[#f3f0e8]/65">{item.label}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-9 max-w-7xl border-t border-[#f3f0e8]/15 pt-6 text-sm text-[#f3f0e8]/65">
          Brian Bergeron catalog sync placements: NBC&apos;s <em>The Voice</em>, <em>The Young and the Restless</em>, <em>Keeping Up with the Kardashians</em>, and MTV&apos;s <em>The Real World</em>.
        </p>
      </section>

      <section className="px-5 py-24 md:px-8 md:py-28" aria-labelledby="epk-bio">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <div>
            <p className="mb-4 text-[11px] uppercase tracking-[0.24em] text-[#b9771c]">The artist</p>
            <h2 id="epk-bio" className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl">A song first kind of set.</h2>
            <div className="mt-8 space-y-5 font-[family-name:var(--font-source-sans)] text-lg leading-relaxed text-[#292a20]/75">
              <p>Mr. Kind is Brian Bergeron, a singer, songwriter, and guitarist now performing across the DC, Maryland, and Virginia area. His set moves between heartfelt indie rock originals and familiar songs reshaped for voice and guitar, giving guests something to listen to without taking over the room.</p>
              <p>Before returning to the DMV, Brian fronted Oakland indie band Mr. Kind and founded Ivy Hill Entertainment, a Bay Area-based events company. His musical roots go back to Boston&apos;s folk-rock scene, and songs from his earlier catalog reached television audiences through <em>The Voice</em>, <em>The Young and the Restless</em>, <em>Keeping Up with the Kardashians</em>, and <em>The Real World</em>.</p>
              <p>For planners and hosts, he brings a compact setup, a broad mix of covers and originals, and a straightforward load-in. He can shape the music around a company gathering, milestone party, or intimate reception.</p>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -bottom-4 -right-4 h-full w-full border border-[#7da89e]" />
            <div className="relative aspect-[3/4] overflow-hidden bg-[#292a20]">
              <Image src="/Photos/Artist Photo 2.png" alt="Brian Bergeron, Mr. Kind" fill sizes="(max-width: 1024px) 90vw, 35vw" className="object-cover object-top" />
            </div>
          </div>
        </div>
      </section>

      <section id="watch" className="bg-[#b9d3c8]/45 px-5 py-24 md:px-8 md:py-28" aria-labelledby="epk-watch">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-[11px] uppercase tracking-[0.24em] text-[#986014]">Hear the set</p>
          <h2 id="epk-watch" className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl">Watch Mr. Kind live.</h2>
          <p className="mt-5 max-w-2xl font-[family-name:var(--font-source-sans)] text-lg text-[#292a20]/70">Hear a live original and a five-song cover medley.</p>
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.25fr_0.75fr]">
            <div>
              <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-[#986014]">01 · Live original</p>
              <LiteYouTube id="qrsYATQ89Io" title="Mr. Kind — The Girl with the Golden Eyes (live)" caption="The Girl with the Golden Eyes · live original" />
            </div>
            <div>
              <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-[#986014]">02 · Cover sampler</p>
              <LiteYouTube id="crZaMQwg2L8" title="Mr. Kind — Five-Song Cover Medley (Live Performance)" caption="Five-song cover medley · live performance · 2:12" />
            </div>
          </div>
          <Link href="/repertoire" className="focus-ring mt-8 inline-block border-b border-[#986014] pb-1 text-xs font-medium uppercase tracking-[0.14em] text-[#292a20] hover:text-[#986014]">Browse the cover repertoire ↗</Link>
        </div>
      </section>

      <section className="px-5 py-24 md:px-8 md:py-28" aria-labelledby="epk-live">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-[11px] uppercase tracking-[0.24em] text-[#b9771c]">On stage</p>
          <h2 id="epk-live" className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl">See him in a room.</h2>
          <p className="mt-5 max-w-2xl font-[family-name:var(--font-source-sans)] text-lg text-[#292a20]/70">Upcoming shows are a chance to hear the set in person.</p>
          <div className="mt-10 border-t border-[#292a20]/15 pt-8">
            <a className="bit-widget-initializer" data-artist-name="id_2979862" data-app-id="8fa2a55cea34338859aa4e78dc01a464" />
            <Script src="https://widgetv3.bandsintown.com/main.min.js" strategy="lazyOnload" />
          </div>
        </div>
      </section>

      <section className="bg-[#292a20] px-5 py-24 text-[#f3f0e8] md:px-8 md:py-28" aria-labelledby="epk-reviews">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-[11px] uppercase tracking-[0.24em] text-[#e6c48c]">From past clients</p>
          <h2 id="epk-reviews" className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl">What people remember.</h2>
          <p className="mt-5 max-w-2xl font-[family-name:var(--font-source-sans)] text-base text-[#f3f0e8]/65">These reviews name Brian and come from earlier Bay Area events booked through Ivy Hill Entertainment, the company he founded. Read the full context at each source.</p>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {reviews.map((review) => (
              <figure key={review.name} className="border-l-2 border-[#b9771c] bg-[#f3f0e8]/5 p-7">
                <blockquote className="font-[family-name:var(--font-playfair)] text-2xl italic leading-snug">&ldquo;{review.quote}&rdquo;</blockquote>
                <figcaption className="mt-6 text-xs uppercase tracking-[0.14em] text-[#f3f0e8]/65">
                  <a href={review.source} target="_blank" rel="noopener noreferrer" className="focus-ring hover:text-[#e6c48c]">{review.name} · Read review ↗</a>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-8 md:py-28" aria-labelledby="epk-details">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="mb-4 text-[11px] uppercase tracking-[0.24em] text-[#b9771c]">The practical details</p>
            <h2 id="epk-details" className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl">Easy from first email to load-in.</h2>
            <p className="mt-7 font-[family-name:var(--font-source-sans)] text-lg text-[#292a20]/70">Tell Brian about the room, date, audience, and timing. He&apos;ll reply with availability and a quote for the event.</p>
          </div>
          <ul className="border-t border-[#292a20]/15">
            {details.map((detail) => <li key={detail} className="flex gap-5 border-b border-[#292a20]/15 py-5 font-[family-name:var(--font-source-sans)] text-lg text-[#292a20]/75"><span aria-hidden="true" className="text-[#b9771c]">—</span>{detail}</li>)}
          </ul>
        </div>
      </section>

      <section id="contact" className="bg-[#b9d3c8]/50 px-5 py-24 md:px-8 md:py-28" aria-labelledby="epk-contact">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-[11px] uppercase tracking-[0.24em] text-[#986014]">Booking</p>
          <h2 id="epk-contact" className="max-w-3xl font-[family-name:var(--font-playfair)] text-5xl md:text-6xl">Let&apos;s find the right music for your event.</h2>
          <p className="mt-6 max-w-2xl font-[family-name:var(--font-source-sans)] text-lg text-[#292a20]/75">Booking corporate gatherings, holiday parties, and private events in the DC area. Rates are quoted by event.</p>
          <div className="mt-9 flex flex-wrap items-center gap-6">
            <Link href={inquiryHref} className="focus-ring bg-[#292a20] px-7 py-3.5 text-xs font-medium uppercase tracking-[0.16em] text-[#f3f0e8] transition-colors hover:bg-[#b9771c]">Send a booking inquiry</Link>
            <a href="mailto:info@mrkindmusic.com?subject=Private%20event%20booking" className="focus-ring border-b border-[#292a20]/50 pb-1 text-base hover:border-[#b9771c] hover:text-[#986014]">info@mrkindmusic.com</a>
          </div>
        </div>
      </section>
      <Footer bookerFocused />
    </main>
  );
}
