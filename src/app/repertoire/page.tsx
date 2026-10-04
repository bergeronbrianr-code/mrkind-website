import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { SONGS } from "@/lib/repertoire";

export const metadata: Metadata = {
  title: "Cover Repertoire | Mr. Kind",
  description:
    "Browse Mr. Kind's live acoustic cover repertoire for corporate gatherings, holiday parties, and private events in the DC area.",
};

export default function RepertoirePage() {
  return (
    <main>
      <section className="px-5 pb-16 pt-32 md:px-8 md:pb-20 md:pt-40">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-[11px] uppercase tracking-[0.24em] text-[#b9771c]">Live acoustic covers</p>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl">The cover repertoire.</h1>
          <p className="mt-6 max-w-2xl font-[family-name:var(--font-source-sans)] text-lg leading-relaxed text-[#292a20]/70">
            Browse the current selection of folk, rock, soul, indie, and pop covers, then tell Brian what fits your event. Song requests in advance are welcome.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/?inquiry=corporate-private-event#contact" className="focus-ring bg-[#b9771c] px-7 py-3.5 text-xs font-medium uppercase tracking-[0.16em] text-[#f3f0e8] transition-colors hover:bg-[#292a20]">Ask about a date</Link>
            <Link href="/epk#watch" className="focus-ring border border-[#292a20]/25 px-7 py-3.5 text-xs font-medium uppercase tracking-[0.16em] transition-colors hover:border-[#b9771c] hover:text-[#b9771c]">Watch the cover medley</Link>
          </div>
        </div>
      </section>

      <section className="bg-[#b9d3c8]/35 px-5 py-16 md:px-8 md:py-20" aria-label="Cover songs">
        <div className="mx-auto max-w-7xl">
          <ul className="grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            {SONGS.map((song) => {
              const [artist, title] = song.split(" – ");
              return (
                <li key={song} className="border-b border-[#292a20]/15 py-4">
                  <p className="font-[family-name:var(--font-source-sans)] text-base text-[#292a20]">{title}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.13em] text-[#292a20]/55">{artist}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <Footer bookerFocused />
    </main>
  );
}
