const highlights = [
  "100+ song repertoire spanning classic rock, folk, indie, soul, and pop",
  "Professional compact setup — suitable for offices, rooftops, private venues",
  "Available solo or with additional musicians",
  "Cocktail hours and corporate events (wedding cocktail hours considered on a case-by-case basis)",
];

export default function EventsSection() {
  return (
    <section id="events" className="relative overflow-hidden py-28 px-5 md:px-8 bg-[#b9d3c8]/55">
      <div className="paper-grain absolute inset-0 opacity-25 pointer-events-none" />
      <div className="absolute -right-20 top-16 h-72 w-[55%] -rotate-[22deg] bg-[#f3f0e8]/55" />
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: copy */}
          <div>
            <p className="font-[family-name:var(--font-dm-sans)] text-[#b9771c] tracking-[0.24em] uppercase text-[11px] mb-4">
              Hire for Events
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl text-[#292a20] leading-tight mb-4">
              Private &amp; Corporate Events
            </h2>
            <div className="w-16 h-px bg-[#b9771c] mb-6" />

            <p className="font-[family-name:var(--font-source-sans)] text-[#292a20]/65 text-lg italic mb-8 leading-relaxed">
              Cocktail hours, company events, and private gatherings — a live soundtrack that
              actually elevates the room.
            </p>

            <div className="space-y-5 font-[family-name:var(--font-source-sans)] text-[#292a20]/75 text-lg leading-relaxed mb-10">
              <p>
                With a repertoire of 100+ songs spanning five decades, Brian brings a polished,
                professional performance to corporate functions, cocktail hours, and private
                celebrations. Setup is compact and self-contained — no soundcheck drama, no rider
                demands.
              </p>
              <p>
                Whether it&apos;s a company happy hour, a milestone birthday, or a holiday party,
                the goal is the same: music that&apos;s engaging enough to notice and comfortable
                enough to talk over.
              </p>
            </div>

            <a
              href="#contact"
              className="focus-ring inline-block font-[family-name:var(--font-dm-sans)] text-[11px] tracking-[0.16em] uppercase px-8 py-3.5 bg-[#292a20] text-[#f3f0e8] hover:bg-[#b9771c] transition-colors duration-200"
            >
              Inquire About an Event →
            </a>
          </div>

          {/* Right: highlights + photo placeholder */}
          <div className="flex flex-col gap-8">
            {/* Highlights */}
            <div className="relative overflow-hidden bg-[#292a20] p-8 shadow-[12px_14px_0_rgba(41,42,32,0.12)]">
              <div className="absolute -right-8 -top-8 h-32 w-32 bg-[#b9771c]/45" />
              <p className="relative font-[family-name:var(--font-dm-sans)] text-[#e6c48c] tracking-[0.18em] uppercase text-[11px] mb-6">
                What You Get
              </p>
              <ul className="space-y-4">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-[#e6c48c] shrink-0 mt-0.5">—</span>
                    <span className="font-[family-name:var(--font-source-sans)] text-[#f3f0e8]/70 text-base leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* PERFORMANCE PHOTO — add when ready */}
          </div>
        </div>
      </div>
    </section>
  );
}
