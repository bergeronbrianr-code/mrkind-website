import Script from "next/script";

export default function ShowsSection() {
  return (
    <section id="shows" className="relative overflow-hidden py-28 px-5 md:px-8 bg-[#dfe9e2]/60">
      <div className="paper-grain absolute inset-0 opacity-25 pointer-events-none" />
      <div className="absolute -right-20 bottom-0 h-44 w-[62%] -skew-y-12 bg-[#b9771c]/15" />
      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <p className="font-[family-name:var(--font-dm-sans)] text-[#b9771c] tracking-[0.24em] uppercase text-[11px] mb-4">
            Live
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl text-[#292a20]">
            Upcoming Shows
          </h2>
          <div className="mt-4 w-16 h-px bg-[#b9771c]" />
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
          <p className="font-[family-name:var(--font-source-sans)] text-[#292a20]/60 text-sm italic mb-4">
            Don&apos;t see your city?
          </p>
          <a
            href="#contact"
            className="focus-ring font-[family-name:var(--font-dm-sans)] text-[11px] tracking-[0.16em] uppercase px-6 py-3 bg-[#292a20] text-[#f3f0e8] hover:bg-[#b9771c] transition-colors duration-200 inline-block"
          >
            Book a Private Show →
          </a>
        </div>
      </div>
    </section>
  );
}
