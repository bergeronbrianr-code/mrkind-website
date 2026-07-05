export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1c1a17]">
      {/* Hero photo placeholder — warm amber fill at landscape ratio */}
      <div className="absolute inset-0 bg-[#b8832a]/10">
        {/* HERO PHOTO HERE — dark stage / warm backlighting, landscape, high-res */}
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1c1a17]/60 via-[#1c1a17]/30 to-[#1c1a17]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1c1a17]/60 via-transparent to-[#1c1a17]/60" />

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-8xl font-semibold text-[#ede8de] leading-tight mb-6">
          Twenty Years of Stories.{" "}
          <em className="not-italic text-[#b8832a]">Every Show Feels Like the First.</em>
        </h1>

        {/* Thin gold rule */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px flex-1 max-w-[80px] bg-[#b8832a]/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#b8832a]" />
          <div className="h-px flex-1 max-w-[80px] bg-[#b8832a]/40" />
        </div>

        <p className="font-[family-name:var(--font-source-sans)] text-lg md:text-xl text-[#ede8de]/70 italic mb-10 max-w-2xl mx-auto leading-relaxed">
          Indie rock. Folk-Americana. Originals and covers.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/request"
            className="px-8 py-3.5 bg-[#b8832a] text-[#1c1a17] font-[family-name:var(--font-dm-sans)] font-semibold tracking-widest uppercase text-sm hover:bg-[#a8721a] transition-colors duration-200"
          >
            Request a Song →
          </a>
          <a
            href="https://open.spotify.com/artist/1XvF6CpuKjhuvUEbI8B8AZ"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 border border-[#ede8de]/30 text-[#ede8de]/80 font-[family-name:var(--font-dm-sans)] font-medium tracking-widest uppercase text-sm hover:border-[#b8832a] hover:text-[#b8832a] transition-colors duration-200"
          >
            Listen on Spotify →
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="font-[family-name:var(--font-dm-sans)] text-[#ede8de] text-xs tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-[#ede8de] animate-pulse" />
      </div>
    </section>
  );
}
