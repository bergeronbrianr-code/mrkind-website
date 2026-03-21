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
    <section id="house-concerts" className="py-28 px-6 bg-[#1c1a17]">
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <p className="font-[family-name:var(--font-dm-sans)] text-[#b8832a] tracking-[0.3em] uppercase text-xs mb-3">
            House Concerts
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl text-[#ede8de] leading-tight mb-4">
            A real concert{" "}
            <span className="text-[#b8832a]">in your home.</span>
          </h2>
          <div className="w-12 h-px bg-[#b8832a] mb-6" />
          <p className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-[#ede8de]/70 italic">
            Invite your friends for an intimate performance you&apos;ll never forget.
          </p>
        </div>

        {/* Pitch */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-14 mb-16">
          <p className="font-[family-name:var(--font-source-sans)] text-[#ede8de]/65 text-lg leading-relaxed">
            Brian has performed in over 1,000 venues of all shapes and sizes, and loves these
            intimate settings most. Every guest receives a custom souvenir — it&apos;s a surprise.
          </p>

          {/* Show details */}
          <div>
            <p className="font-[family-name:var(--font-dm-sans)] text-[#b8832a] tracking-[0.2em] uppercase text-xs mb-5">
              What to Expect
            </p>
            <ul className="space-y-3">
              {showDetails.map((detail) => (
                <li key={detail} className="flex items-start gap-3">
                  <span className="text-[#b8832a] mt-0.5 shrink-0">—</span>
                  <span className="font-[family-name:var(--font-source-sans)] text-[#ede8de]/65 text-base leading-relaxed">
                    {detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Two Ways to Book */}
        <div className="mb-16">
          <p className="font-[family-name:var(--font-dm-sans)] text-[#b8832a] tracking-[0.2em] uppercase text-xs mb-8">
            Two Ways to Book
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card A: Guests Pay */}
            <div className="border border-[#b8832a]/60 bg-[#252220] p-8 flex flex-col">
              <h3 className="font-[family-name:var(--font-playfair)] text-[#ede8de] text-2xl mb-4">
                Guests Pay
              </h3>
              <p className="font-[family-name:var(--font-source-sans)] text-[#ede8de]/55 text-base leading-relaxed flex-1 mb-8">
                Brian sets a suggested contribution per guest. He&apos;ll bring a QR code the night of the show.
              </p>
              <a
                href="#contact"
                className="block text-center font-[family-name:var(--font-dm-sans)] text-xs tracking-widest uppercase px-6 py-3 bg-[#b8832a] text-[#1c1a17] hover:bg-[#a8721a] transition-colors"
              >
                I Want to Host →
              </a>
            </div>

            {/* Card B: Host Pays */}
            <div className="border border-[#ede8de]/15 bg-[#201e1b] p-8 flex flex-col">
              <h3 className="font-[family-name:var(--font-playfair)] text-[#ede8de] text-2xl mb-4">
                Host Pays
              </h3>
              <p className="font-[family-name:var(--font-source-sans)] text-[#ede8de]/55 text-base leading-relaxed flex-1 mb-8">
                A flat guarantee paid in advance. Brian can collect payment via QR code the night of the show, or you can pay in advance.
              </p>
              <a
                href="#contact"
                className="block text-center font-[family-name:var(--font-dm-sans)] text-xs tracking-widest uppercase px-6 py-3 border border-[#ede8de]/20 text-[#ede8de]/60 hover:border-[#b8832a] hover:text-[#b8832a] transition-colors"
              >
                I Want to Host →
              </a>
            </div>
          </div>
        </div>

        {/* Hosting Guide Accordion */}
        <div className="border-t border-[#ede8de]/10 pt-12 mb-14">
          <p className="font-[family-name:var(--font-dm-sans)] text-[#b8832a] tracking-[0.2em] uppercase text-xs mb-6">
            The Hosting Guide
          </p>
          <HouseConcertsAccordion />
        </div>

        {/* Song request link */}
        <div className="pt-8 border-t border-[#ede8de]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-[family-name:var(--font-source-sans)] text-[#ede8de]/60 text-base italic mb-1">
              Want to request songs for your show?
            </p>
            <p className="font-[family-name:var(--font-dm-sans)] text-[#ede8de]/30 text-sm">
              Submit your requests in advance and Brian will work them into the setlist.
            </p>
          </div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf8S0ggMNiP9gzHoUjgXabpA16cShonxaUR1wUZ7kHfTorL8g/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="font-[family-name:var(--font-dm-sans)] text-xs tracking-widest uppercase px-6 py-3 border border-[#ede8de]/20 text-[#ede8de]/50 hover:border-[#b8832a] hover:text-[#b8832a] transition-colors whitespace-nowrap"
          >
            Request Songs →
          </a>
        </div>
      </div>
    </section>
  );
}
