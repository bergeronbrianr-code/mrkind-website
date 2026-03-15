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
        <div className="mb-10 bg-[#1c1a17] border border-[#b8832a]/20 p-10 flex flex-col items-center justify-center min-h-[300px] gap-4">
          {/*
            BANDSINTOWN WIDGET HERE
            1. Claim/create your artist page at bandsintown.com
            2. Replace YOUR_ARTIST_NAME below with your Bandsintown artist name
            3. Shows auto-update from your Bandsintown dashboard — no code changes needed

            <a class="bandsintown-link" href="https://bandsintown.com/a/YOUR_ARTIST_NAME">
              Check out Mr. Kind on Bandsintown
            </a>
            <script src="https://widget.bandsintown.com/main.min.js" charset="utf-8"></script>
          */}
          <div className="w-10 h-10 border border-[#b8832a]/40 rounded-full flex items-center justify-center mb-2">
            <span className="text-[#b8832a] text-lg leading-none">♪</span>
          </div>
          <p className="font-[family-name:var(--font-dm-sans)] text-[#ede8de]/40 text-xs tracking-widest uppercase text-center">
            Bandsintown widget — shows auto-update from your dashboard
          </p>
          <p className="font-[family-name:var(--font-source-sans)] text-[#ede8de]/20 text-xs text-center max-w-xs">
            Claim your artist page at bandsintown.com, then paste the widget code above this comment.
          </p>
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
