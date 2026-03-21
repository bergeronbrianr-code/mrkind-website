import Script from "next/script";

export default function ShowsSection() {
  return (
    <section id="shows" className="py-28 px-6 bg-[#f5f0e8]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <p className="font-[family-name:var(--font-dm-sans)] text-[#b8832a] tracking-[0.3em] uppercase text-xs mb-3">
            Live
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl text-[#1c1a17]">
            Upcoming Shows
          </h2>
          <div className="mt-4 w-12 h-px bg-[#b8832a]" />
        </div>

        {/* Bandsintown widget */}
        <div className="mb-10">
          <a
            className="bit-widget-initializer"
            data-artist-name="id_2979862"
            data-app-id="8fa2a55cea34338859aa4e78dc01a464"
          />
          <Script
            src="https://widgetv3.bandsintown.com/main.min.js"
            strategy="lazyOnload"
          />
        </div>

        {/* Sub-CTA */}
        <div className="text-center">
          <p className="font-[family-name:var(--font-source-sans)] text-[#1c1a17]/60 text-sm italic mb-4">
            Don&apos;t see your city?
          </p>
          <a
            href="#contact"
            className="font-[family-name:var(--font-dm-sans)] text-xs tracking-widest uppercase px-6 py-3 border border-[#1c1a17] text-[#1c1a17] hover:bg-[#1c1a17] hover:text-[#f5f0e8] transition-colors duration-200 inline-block"
          >
            Book a Private Show →
          </a>
        </div>
      </div>
    </section>
  );
}
