import HouseConcertsAccordion from "@/components/HouseConcertsAccordion";

const showDetails = [
  "Up to 90 minutes — a mix of covers and originals",
  "Minimum 10 guests",
  "Compact sound system provided — no venue required",
  "Song requests welcome in advance",
  "Every guest receives a custom souvenir (it's a surprise)",
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
            Invite your friends for an intimate performance you&apos;ll never forget.
          </p>
        </div>

        {/* Pitch */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-14 mb-16">
          <p className="font-[family-name:var(--font-source-sans)] text-[#292a20]/75 text-lg leading-relaxed">
            Brian has performed in over 1,000 venues of all shapes and sizes, and loves these
            intimate settings most. Every guest receives a custom souvenir — it&apos;s a surprise.
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

        {/* Two Ways to Book */}
        <div className="mb-16">
          <p className="font-[family-name:var(--font-dm-sans)] text-[#b9771c] tracking-[0.18em] uppercase text-[11px] mb-8">
            Two Ways to Book
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card A: Guests Pay */}
            <div className="border border-[#b9771c]/70 bg-[#292a20] p-8 flex flex-col">
              <h3 className="font-[family-name:var(--font-playfair)] text-[#f3f0e8] text-2xl mb-4">
                Guests Pay
              </h3>
              <p className="font-[family-name:var(--font-source-sans)] text-[#f3f0e8]/65 text-base leading-relaxed flex-1 mb-8">
                Brian sets a suggested contribution per guest. He&apos;ll bring a QR code the night of the show.
              </p>
              <a
                href="#contact"
                className="focus-ring block text-center font-[family-name:var(--font-dm-sans)] text-[11px] tracking-[0.16em] uppercase px-6 py-3 bg-[#b9771c] text-[#f3f0e8] hover:bg-[#7da89e] transition-colors"
              >
                I Want to Host →
              </a>
            </div>

            {/* Card B: Host Pays */}
            <div className="border border-[#292a20]/20 bg-[#b9d3c8]/30 p-8 flex flex-col">
              <h3 className="font-[family-name:var(--font-playfair)] text-[#292a20] text-2xl mb-4">
                Host Pays
              </h3>
              <p className="font-[family-name:var(--font-source-sans)] text-[#292a20]/70 text-base leading-relaxed flex-1 mb-8">
                A flat guarantee paid in advance. Brian can collect payment via QR code the night of the show, or you can pay in advance.
              </p>
              <a
                href="#contact"
                className="focus-ring block text-center font-[family-name:var(--font-dm-sans)] text-[11px] tracking-[0.16em] uppercase px-6 py-3 border border-[#292a20]/25 text-[#292a20] hover:border-[#b9771c] hover:text-[#b9771c] transition-colors"
              >
                I Want to Host →
              </a>
            </div>
          </div>
        </div>

        {/* Hosting Guide Accordion */}
        <div className="border-t border-[#292a20]/15 pt-12 mb-14">
          <p className="font-[family-name:var(--font-dm-sans)] text-[#b9771c] tracking-[0.18em] uppercase text-[11px] mb-6">
            The Hosting Guide
          </p>
          <HouseConcertsAccordion />
        </div>

        {/* Song request link */}
        <div className="pt-8 border-t border-[#292a20]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-[family-name:var(--font-source-sans)] text-[#292a20]/75 text-base italic mb-1">
              Want to request songs for your show?
            </p>
            <p className="font-[family-name:var(--font-dm-sans)] text-[#292a20]/50 text-sm">
              Submit your requests in advance and Brian will work them into the setlist.
            </p>
          </div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf8S0ggMNiP9gzHoUjgXabpA16cShonxaUR1wUZ7kHfTorL8g/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring font-[family-name:var(--font-dm-sans)] text-[11px] tracking-[0.16em] uppercase px-6 py-3 border border-[#292a20]/25 text-[#292a20] hover:border-[#b9771c] hover:text-[#b9771c] transition-colors whitespace-nowrap"
          >
            Request Songs →
          </a>
        </div>
      </div>
    </section>
  );
}
