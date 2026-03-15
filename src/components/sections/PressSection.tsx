const credits = [
  { text: "\"Dreamy, at times psychedelic.\"", source: "San Francisco Chronicle" },
  {
    text: "Music featured on NBC's The Voice, CBS's The Young and the Restless, Keeping Up with the Kardashians, MTV's The Real World.",
    source: "TV / Sync Placements",
  },
  {
    text: "Performed at Bottom of the Hill and The Great American Music Hall.",
    source: "San Francisco",
  },
  {
    text: "Founder, Ivy Hill Entertainment — $1M+ generated for independent musicians.",
    source: "Industry",
  },
  { text: "500+ private events performed.", source: "" },
];

const downloads = [
  { label: "Download Bio (PDF)", href: "#" },
  { label: "Download High-Res Photos", href: "#" },
  { label: "Download Technical Rider", href: "#" },
];

export default function PressSection() {
  return (
    <section id="press" className="py-28 px-6 bg-[#f5f0e8]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="font-[family-name:var(--font-dm-sans)] text-[#b8832a] tracking-[0.3em] uppercase text-xs mb-3">
            Media
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl text-[#1c1a17]">
            Press &amp; EPK
          </h2>
          <div className="mt-4 w-12 h-px bg-[#b8832a]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: credits + quote */}
          <div>
            <p className="font-[family-name:var(--font-dm-sans)] text-[#1c1a17]/40 tracking-[0.2em] uppercase text-xs mb-6">
              Credits &amp; Coverage
            </p>

            {/* Featured pull quote */}
            <blockquote className="mb-10 border-l-2 border-[#b8832a] pl-6 py-1">
              <p className="font-[family-name:var(--font-playfair)] text-3xl text-[#1c1a17] italic leading-snug mb-3">
                &ldquo;Dreamy, at times psychedelic.&rdquo;
              </p>
              <footer className="font-[family-name:var(--font-dm-sans)] text-[#8aaa9e] text-xs tracking-widest uppercase">
                — San Francisco Chronicle
              </footer>
            </blockquote>

            {/* Credits list */}
            <ul className="space-y-5">
              {credits.slice(1).map((credit) => (
                <li key={credit.text} className="flex items-start gap-4">
                  <span className="text-[#b8832a] mt-1 shrink-0">—</span>
                  <div>
                    <p className="font-[family-name:var(--font-source-sans)] text-[#1c1a17]/75 text-sm leading-relaxed">
                      {credit.text}
                    </p>
                    {credit.source && (
                      <p className="font-[family-name:var(--font-dm-sans)] text-[#8aaa9e] text-xs tracking-widest uppercase mt-1">
                        {credit.source}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: photo grid + downloads */}
          <div className="flex flex-col gap-8">
            {/* Press photo grid */}
            <div>
              <p className="font-[family-name:var(--font-dm-sans)] text-[#1c1a17]/40 tracking-[0.2em] uppercase text-xs mb-4">
                Photos
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Live Performance", ratio: "aspect-square" },
                  { label: "Studio Session", ratio: "aspect-square" },
                  { label: "Acoustic Set", ratio: "aspect-video col-span-2" },
                ].map((photo) => (
                  <div
                    key={photo.label}
                    className={`${photo.ratio} flex items-center justify-center border border-[#1c1a17]/8`}
                    style={{ backgroundColor: "#b8832a18" }}
                  >
                    <div className="text-center opacity-30 px-3">
                      <p className="font-[family-name:var(--font-dm-sans)] text-[#1c1a17] text-xs tracking-widest uppercase">
                        {photo.label}
                        {/* PRESS PHOTO HERE */}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Downloads */}
            <div>
              <p className="font-[family-name:var(--font-dm-sans)] text-[#1c1a17]/40 tracking-[0.2em] uppercase text-xs mb-4">
                Downloads
              </p>
              <div className="space-y-2">
                {downloads.map((dl) => (
                  <a
                    key={dl.label}
                    href={dl.href}
                    className="flex items-center justify-between w-full px-5 py-4 border border-[#1c1a17]/15 hover:border-[#b8832a] hover:bg-[#b8832a]/5 transition-all group"
                  >
                    <span className="font-[family-name:var(--font-dm-sans)] text-[#1c1a17]/70 text-sm group-hover:text-[#1c1a17]">
                      {dl.label}
                    </span>
                    <span className="text-[#b8832a] text-lg">↓</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Press contact */}
            <div className="pt-4 border-t border-[#1c1a17]/10">
              <p className="font-[family-name:var(--font-dm-sans)] text-[#1c1a17]/40 tracking-[0.2em] uppercase text-xs mb-2">
                Press Contact
              </p>
              <a
                href="mailto:bergeron.brian.r@gmail.com"
                className="font-[family-name:var(--font-source-sans)] text-[#1c1a17]/70 hover:text-[#b8832a] transition-colors"
              >
                bergeron.brian.r@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
