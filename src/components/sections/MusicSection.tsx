import Image from "next/image";

const mrKindEPs = [
  {
    title: "The Wild EP",
    year: "2016",
    img: "https://f4.bcbits.com/img/a3432710114_10.jpg",
    spotifyId: "6XHtvMqjuWxChmloW9KevO",
    bandcampUrl: "https://meetmrkind.bandcamp.com/album/the-wild-ep",
  },
  {
    title: "Wide Awake | Open Hands",
    year: "2014",
    img: "https://f4.bcbits.com/img/a2481742921_10.jpg",
    spotifyId: "7iMT2nWSBQwz6csW0JwD6G",
    bandcampUrl: "https://meetmrkind.bandcamp.com/album/wide-awake-open-hands",
  },
  {
    title: "Mr. Kind EP",
    year: "2013",
    img: "https://f4.bcbits.com/img/a3833324749_10.jpg",
    spotifyId: "2rcEHb8avW3Vr4OdnJ9Wox",
    bandcampUrl: "https://meetmrkind.bandcamp.com/album/mr-kind",
  },
  {
    title: "OK",
    year: "2012",
    img: "https://f4.bcbits.com/img/a1705133179_10.jpg",
    spotifyId: null,
    bandcampUrl: "https://meetmrkind.bandcamp.com/album/ok",
  },
];

export default function MusicSection() {
  return (
    <section id="music" className="py-28 px-6 bg-[#1c1a17]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="font-[family-name:var(--font-dm-sans)] text-[#b8832a] tracking-[0.3em] uppercase text-xs mb-3">
            Discography
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl text-[#ede8de]">
            The Music
          </h2>
          <div className="mt-4 w-12 h-px bg-[#b8832a]" />
        </div>

        {/* ── Mr. Kind (Band) ─────────────────────────────────────── */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <h3 className="font-[family-name:var(--font-playfair)] text-3xl text-[#ede8de] mb-1">
                Mr. Kind
              </h3>
              <p className="font-[family-name:var(--font-source-sans)] text-[#ede8de]/50 text-sm italic">
                Oakland indie / electro-Americana · 4 EPs (2012–2016)
              </p>
            </div>
            <a
              href="https://open.spotify.com/artist/1XvF6CpuKjhuvUEbI8B8AZ"
              target="_blank"
              rel="noopener noreferrer"
              className="font-[family-name:var(--font-dm-sans)] text-xs tracking-widest uppercase text-[#ede8de]/50 hover:text-[#b8832a] transition-colors border border-[#ede8de]/20 hover:border-[#b8832a] px-4 py-2 self-start sm:self-auto"
            >
              Open in Spotify
            </a>
          </div>

          {/* Band photo */}
          <div className="relative w-full aspect-[16/7] overflow-hidden mb-10">
            <Image
              src="/Photos/4.jpg"
              alt="Mr. Kind recording in the studio"
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover object-center"
            />
            <p className="absolute bottom-3 right-4 font-[family-name:var(--font-dm-sans)] text-[#ede8de]/40 text-[10px] tracking-widest uppercase">
              Mr. Kind · Studio Session
            </p>
          </div>

          {/* Single artist-level Spotify embed — includes Follow button */}
          <div className="mb-10">
            <iframe
              src="https://open.spotify.com/embed/artist/1XvF6CpuKjhuvUEbI8B8AZ?utm_source=generator&theme=0"
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="border-0"
            />
          </div>

          {/* EP art grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {mrKindEPs.map((ep) => (
              <div key={ep.title} className="group">
                {/* Album art */}
                <div className="relative aspect-square mb-3 overflow-hidden border border-[#ede8de]/5 group-hover:border-[#b8832a]/40 transition-colors duration-300">
                  <Image
                    src={ep.img}
                    alt={`${ep.title} album art`}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <h4 className="font-[family-name:var(--font-source-sans)] text-[#ede8de] text-sm leading-snug mb-1">
                  {ep.title}
                </h4>
                <p className="font-[family-name:var(--font-dm-sans)] text-[#8aaa9e] text-xs tracking-widest mb-2">
                  {ep.year}
                </p>

                {/* Links */}
                <div className="flex items-center gap-3">
                  {ep.spotifyId && (
                    <a
                      href={`https://open.spotify.com/album/${ep.spotifyId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-[family-name:var(--font-dm-sans)] text-[10px] tracking-widest uppercase text-[#ede8de]/30 hover:text-[#b8832a] transition-colors"
                    >
                      Spotify
                    </a>
                  )}
                  <a
                    href={ep.bandcampUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-[family-name:var(--font-dm-sans)] text-[10px] tracking-widest uppercase text-[#ede8de]/30 hover:text-[#b8832a] transition-colors"
                  >
                    Bandcamp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Thin rule */}
        <div className="h-px w-full bg-[#ede8de]/10 mb-16" />

        {/* ── Solo Work ───────────────────────────────────────────── */}
        <div>
          <div className="mb-8">
            <h3 className="font-[family-name:var(--font-playfair)] text-3xl text-[#ede8de] mb-1">
              Brian Bergeron
            </h3>
            <p className="font-[family-name:var(--font-source-sans)] text-[#ede8de]/50 text-sm italic">
              Solo · folk / indie rock (2009–2011)
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl">
            {/* We've Got To Find An Easier Way */}
            <div className="flex flex-row gap-5 items-start">
              <div className="relative aspect-square w-32 shrink-0 overflow-hidden border border-[#ede8de]/5">
                <Image
                  src="https://f4.bcbits.com/img/a3149445310_10.jpg"
                  alt="We've Got To Find An Easier Way album art"
                  fill
                  sizes="128px"
                  className="object-cover"
                />
              </div>
              <div className="pt-1">
                <h4 className="font-[family-name:var(--font-source-sans)] text-[#ede8de] text-base leading-snug mb-1">
                  We&apos;ve Got To Find An Easier Way
                </h4>
                <p className="font-[family-name:var(--font-dm-sans)] text-[#8aaa9e] text-xs tracking-widest mb-4">
                  2009 · Debut album
                </p>
                <a
                  href="https://brianbergeron.bandcamp.com/album/weve-got-to-find-an-easier-way"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-[family-name:var(--font-dm-sans)] text-xs tracking-widest uppercase text-[#ede8de]/30 hover:text-[#b8832a] transition-colors"
                >
                  Listen on Bandcamp →
                </a>
              </div>
            </div>

            {/* Hourglass */}
            <div className="flex flex-row gap-5 items-start">
              <div className="relative aspect-square w-32 shrink-0 overflow-hidden border border-[#ede8de]/5">
                <Image
                  src="https://f4.bcbits.com/img/a2683240432_10.jpg"
                  alt="Hourglass EP album art"
                  fill
                  sizes="128px"
                  className="object-cover"
                />
              </div>
              <div className="pt-1">
                <h4 className="font-[family-name:var(--font-source-sans)] text-[#ede8de] text-base leading-snug mb-1">
                  Hourglass EP
                </h4>
                <p className="font-[family-name:var(--font-dm-sans)] text-[#8aaa9e] text-xs tracking-widest mb-4">
                  2011
                </p>
                <a
                  href="https://brianbergeron.bandcamp.com/album/hourglass-ep"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-[family-name:var(--font-dm-sans)] text-xs tracking-widest uppercase text-[#ede8de]/30 hover:text-[#b8832a] transition-colors"
                >
                  Listen on Bandcamp →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
