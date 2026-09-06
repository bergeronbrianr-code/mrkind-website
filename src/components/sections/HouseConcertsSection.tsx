import HouseConcertsAccordion from "@/components/HouseConcertsAccordion";
import Link from "next/link";

const showDetails = [
  "Up to 90 minutes — originals and covers",
  "Compact sound system provided — no venue required",
  "Song requests welcome in advance",
  "Built for an intimate gathering of friends",
];

export default function HouseConcertsSection() {
  return (
    <section id="house-concerts" className="relative overflow-hidden py-28 px-5 md:px-8 bg-[#f3f0e8]">
      <div className="absolute -left-24 bottom-20 h-44 w-[45%] -rotate-[24deg] bg-[#b9d3c8]/60" />
      <div className="absolute right-0 top-0 h-52 w-[22%] bg-[#b9771c]/12" />
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <p className="font-[family-name:var(--font-dm-sans)] text-[#b9771c] tracking-[0.24em] uppercase text-[11px] mb-4">
            House Concerts
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl text-[#292a20] leading-tight mb-4">
            A real concert{" "}
            <span className="text-[#7da89e]">in your home.</span>
          </h2>
          <div className="w-16 h-px bg-[#b9771c] mb-6" />
          <p className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-[#292a20]/70 italic">
            Invite your friends. Brian brings the songs, the sound, and the night — you just open the door.
          </p>
        </div>

        {/* Pitch */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-14 mb-16">
          <p className="font-[family-name:var(--font-source-sans)] text-[#292a20]/75 text-lg leading-relaxed">
            Brian has played 1,000+ shows in rooms of every size, and these intimate nights are
            the ones he loves most. No venue hunt. No soundcheck drama. Just a living room that
            feels like a music hall for an evening.
          </p>

          {/* Show details */}
          <div>
            <p className="font-[family-name:var(--font-dm-sans)] text-[#b9771c] tracking-[0.18em] uppercase text-[11px] mb-5">
              What to Expect
            </p>
            <ul className="space-y-3">
              {showDetails.map((detail) => (
                <li key={detail} className="flex items-start gap-3">
                  <span className="text-[#b9771c] mt-0.5 shrink-0">—</span>
                  <span className="font-[family-name:var(--font-source-sans)] text-[#292a20]/75 text-base leading-relaxed">
                    {detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-16">
          <Link
            href="/?inquiry=house-concert#contact"
            className="focus-ring inline-block bg-[#292a20] px-8 py-3.5 font-[family-name:var(--font-dm-sans)] text-[11px] uppercase tracking-[0.16em] text-[#f3f0e8] transition-colors duration-200 hover:bg-[#b9771c]"
          >
            Host a House Concert
          </Link>
        </div>

        {/* Hosting Guide Accordion */}
        <div className="border-t border-[#292a20]/15 pt-12 mb-14">
          <p className="font-[family-name:var(--font-dm-sans)] text-[#b9771c] tracking-[0.18em] uppercase text-[11px] mb-6">
            The Hosting Guide
          </p>
          <HouseConcertsAccordion />
        </div>

      </div>
    </section>
  );
}
