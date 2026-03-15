import HouseConcertsAccordion from "@/components/HouseConcertsAccordion";

const showDetails = [
  "60-minute set — originals and covers, tailored to your crowd",
  "Song requests welcome in advance",
  "Compact sound system provided — no venue required",
  "Based in Kensington, MD — available throughout the DMV",
  "Every guest receives a custom 3D-printed souvenir 🎸",
];

export default function HouseConcertsSection() {
  return (
    <section id="house-concerts" className="py-28 px-6 bg-[#1c1a17]">
      {/* Subtle grain on this section */}
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <p className="font-[family-name:var(--font-dm-sans)] text-[#b8832a] tracking-[0.3em] uppercase text-xs mb-3">
            House Concerts
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl text-[#ede8de] leading-tight mb-4">
            Your Home.{" "}
            <span className="text-[#b8832a]">A Real Concert.</span>
          </h2>
          <div className="w-12 h-px bg-[#b8832a] mb-10" />
        </div>

        {/* Opening hook — large, prominent */}
        <div className="mb-14 max-w-3xl">
          <p className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-[#ede8de] leading-relaxed italic">
            You don&apos;t pay anything up front. Send your friends a link — they each pay $25
            directly. When 10 people confirm, the show is on.
          </p>
        </div>

        {/* Pitch */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div className="space-y-5 font-[family-name:var(--font-source-sans)] text-[#ede8de]/65 text-[1.05rem] leading-relaxed">
            <p>
              A house concert isn&apos;t background music at a party. It&apos;s an actual show —
              60 minutes of live indie rock and folk-Americana, in your living room or backyard, for
              20–50 of your people. Intimate in a way that no venue can replicate.
            </p>
            <p>
              Brian has done hundreds of these. He brings the sound system, the setlist, and a
              custom 3D-printed souvenir for every guest. You bring the space and your favorite
              people. That&apos;s the whole deal.
            </p>
          </div>

          {/* Show details */}
          <div>
            <p className="font-[family-name:var(--font-dm-sans)] text-[#b8832a] tracking-[0.2em] uppercase text-xs mb-5">
              What to Expect
            </p>
            <ul className="space-y-3">
              {showDetails.map((detail) => (
                <li key={detail} className="flex items-start gap-3">
                  <span className="text-[#b8832a] mt-0.5 shrink-0">—</span>
                  <span className="font-[family-name:var(--font-source-sans)] text-[#ede8de]/65 text-sm leading-relaxed">
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
            {/* Card A: Guests Pay — recommended, gold border */}
            <div className="relative border border-[#b8832a]/60 bg-[#252220] p-8 flex flex-col">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-[family-name:var(--font-playfair)] text-[#ede8de] text-2xl">
                  Guests Pay
                </h3>
                <span className="font-[family-name:var(--font-dm-sans)] text-[10px] tracking-widest uppercase bg-[#b8832a] text-[#1c1a17] px-2 py-1">
                  Recommended
                </span>
              </div>

              <p className="font-[family-name:var(--font-playfair)] text-[#b8832a] text-4xl mb-4">
                $25 / guest
              </p>

              <p className="font-[family-name:var(--font-source-sans)] text-[#ede8de]/55 text-sm leading-relaxed mb-6">
                Brian sends you a shareable payment link. Your guests each pay $25 directly before
                the show.
              </p>

              <ul className="space-y-2.5 mb-8 flex-1">
                {[
                  "You pay nothing up front",
                  "Best for hosts who want zero financial risk",
                  "Requires 10 confirmed guests before show date",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-[#b8832a] shrink-0 mt-0.5 text-sm">✓</span>
                    <span className="font-[family-name:var(--font-dm-sans)] text-[#ede8de]/55 text-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact?inquiry=house-concert"
                className="block text-center font-[family-name:var(--font-dm-sans)] text-xs tracking-widest uppercase px-6 py-3 bg-[#b8832a] text-[#1c1a17] hover:bg-[#a8721a] transition-colors"
              >
                I Want to Host →
              </a>
            </div>

            {/* Card B: Host Pays */}
            <div className="border border-[#ede8de]/15 bg-[#201e1b] p-8 flex flex-col">
              <div className="mb-4">
                <h3 className="font-[family-name:var(--font-playfair)] text-[#ede8de] text-2xl">
                  Host Pays
                </h3>
              </div>

              <p className="font-[family-name:var(--font-playfair)] text-[#8aaa9e] text-4xl mb-4">
                $250
              </p>

              <p className="font-[family-name:var(--font-source-sans)] text-[#ede8de]/55 text-sm leading-relaxed mb-6">
                You pay a $250 guarantee upfront. Guests reimburse you however you like — or you
                cover it as a gift.
              </p>

              <ul className="space-y-2.5 mb-8 flex-1">
                {[
                  "Guaranteed regardless of final headcount",
                  "Best for hosts who want full control of the guest experience",
                  "Ideal for milestone events where you're covering costs",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-[#8aaa9e] shrink-0 mt-0.5 text-sm">✓</span>
                    <span className="font-[family-name:var(--font-dm-sans)] text-[#ede8de]/55 text-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact?inquiry=house-concert"
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
            <p className="font-[family-name:var(--font-source-sans)] text-[#ede8de]/60 text-sm italic mb-1">
              Want to request songs for your show?
            </p>
            <p className="font-[family-name:var(--font-dm-sans)] text-[#ede8de]/30 text-xs">
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
