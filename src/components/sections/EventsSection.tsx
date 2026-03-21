const highlights = [
  "100+ song repertoire spanning classic rock, folk, indie, soul, and pop",
  "Professional compact setup — suitable for offices, rooftops, private venues",
  "Available solo or with additional musicians",
  "Cocktail hours and corporate events (wedding cocktail hours considered on a case-by-case basis)",
];

export default function EventsSection() {
  return (
    <section id="events" className="py-28 px-6 bg-[#f5f0e8]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: copy */}
          <div>
            <p className="font-[family-name:var(--font-dm-sans)] text-[#b8832a] tracking-[0.3em] uppercase text-xs mb-3">
              Hire for Events
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl text-[#1c1a17] leading-tight mb-4">
              Private &amp; Corporate Events
            </h2>
            <div className="w-12 h-px bg-[#b8832a] mb-6" />

            <p className="font-[family-name:var(--font-source-sans)] text-[#1c1a17]/60 text-lg italic mb-8 leading-relaxed">
              Cocktail hours, company events, and private gatherings — a live soundtrack that
              actually elevates the room.
            </p>

            <div className="space-y-5 font-[family-name:var(--font-source-sans)] text-[#1c1a17]/70 text-lg leading-relaxed mb-10">
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
              className="inline-block font-[family-name:var(--font-dm-sans)] text-xs tracking-widest uppercase px-8 py-3.5 bg-[#1c1a17] text-[#f5f0e8] hover:bg-[#b8832a] hover:text-[#1c1a17] transition-colors duration-200"
            >
              Inquire About an Event →
            </a>
          </div>

          {/* Right: highlights + photo placeholder */}
          <div className="flex flex-col gap-8">
            {/* Highlights */}
            <div className="bg-[#1c1a17] p-8">
              <p className="font-[family-name:var(--font-dm-sans)] text-[#b8832a] tracking-[0.2em] uppercase text-xs mb-6">
                What You Get
              </p>
              <ul className="space-y-4">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-[#b8832a] shrink-0 mt-0.5">—</span>
                    <span className="font-[family-name:var(--font-source-sans)] text-[#ede8de]/65 text-base leading-relaxed">
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
