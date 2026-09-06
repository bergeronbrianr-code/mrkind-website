import Image from "next/image";

const releases = [
  { artist: "Mr. Kind", title: "The Wild EP", year: "2016", img: "https://f4.bcbits.com/img/a3432710114_10.jpg", spotifyUrl: "https://open.spotify.com/album/6XHtvMqjuWxChmloW9KevO", bandcampUrl: "https://meetmrkind.bandcamp.com/album/the-wild-ep" },
  { artist: "Mr. Kind", title: "Wide Awake | Open Hands", year: "2014", img: "https://f4.bcbits.com/img/a2481742921_10.jpg", spotifyUrl: "https://open.spotify.com/album/7iMT2nWSBQwz6csW0JwD6G", bandcampUrl: "https://meetmrkind.bandcamp.com/album/wide-awake-open-hands" },
  { artist: "Mr. Kind", title: "Mr. Kind EP", year: "2013", img: "https://f4.bcbits.com/img/a3833324749_10.jpg", spotifyUrl: "https://open.spotify.com/album/2rcEHb8avW3Vr4OdnJ9Wox", bandcampUrl: "https://meetmrkind.bandcamp.com/album/mr-kind" },
  { artist: "Mr. Kind", title: "OK", year: "2012", img: "https://f4.bcbits.com/img/a1705133179_10.jpg", bandcampUrl: "https://meetmrkind.bandcamp.com/album/ok" },
  { artist: "Brian Bergeron", title: "We've Got To Find An Easier Way", year: "2009", img: "https://f4.bcbits.com/img/a3149445310_10.jpg", bandcampUrl: "https://brianbergeron.bandcamp.com/album/weve-got-to-find-an-easier-way" },
  { artist: "Brian Bergeron", title: "Hourglass EP", year: "2011", img: "https://f4.bcbits.com/img/a2683240432_10.jpg", bandcampUrl: "https://brianbergeron.bandcamp.com/album/hourglass-ep" },
];

export default function MusicSection() {
  return (
    <section id="music" className="relative overflow-hidden bg-[#292a20] px-5 py-28 md:px-8">
      <div className="paper-grain pointer-events-none absolute inset-0 opacity-[0.12]" />
      <div className="absolute -left-16 top-20 h-40 w-[45%] -rotate-[18deg] bg-[#7da89e]/20" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14">
          <p className="mb-4 font-[family-name:var(--font-dm-sans)] text-[11px] uppercase tracking-[0.24em] text-[#e6c48c]">Discography</p>
          <h2 className="font-[family-name:var(--font-playfair)] text-5xl text-[#f3f0e8] md:text-6xl">The Music</h2>
          <div className="mt-4 h-px w-16 bg-[#b9771c]" />
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14">
          <div>
            <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <h3 className="mb-1 font-[family-name:var(--font-playfair)] text-3xl text-[#f3f0e8]">Mr. Kind</h3>
                <p className="font-[family-name:var(--font-source-sans)] text-sm italic text-[#ede8de]/50">Oakland indie / electro-Americana · 2012–2016</p>
              </div>
              <a href="https://open.spotify.com/artist/1XvF6CpuKjhuvUEbI8B8AZ" target="_blank" rel="noopener noreferrer" className="focus-ring self-start border border-[#f3f0e8]/25 px-4 py-2 font-[family-name:var(--font-dm-sans)] text-[10px] uppercase tracking-[0.16em] text-[#f3f0e8]/65 transition-colors hover:border-[#b9771c] hover:text-[#e6c48c] sm:self-auto">Open in Spotify</a>
            </div>
            <iframe title="Mr. Kind on Spotify" src="https://open.spotify.com/embed/artist/1XvF6CpuKjhuvUEbI8B8AZ?utm_source=generator&theme=0" width="100%" height="500" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" className="border-0" />
          </div>

          <aside className="lg:pt-1" aria-label="Releases">
            <p className="mb-5 font-[family-name:var(--font-dm-sans)] text-[11px] uppercase tracking-[0.18em] text-[#e6c48c]">Releases</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-2">
              {releases.map((release) => (
                <article key={`${release.artist}-${release.title}`} className="group">
                  <a href={release.bandcampUrl} target="_blank" rel="noopener noreferrer" aria-label={`Listen to ${release.title} by ${release.artist} on Bandcamp`} className="focus-ring relative block aspect-square overflow-hidden border border-[#f3f0e8]/10 transition-colors duration-300 group-hover:border-[#b9771c]/80">
                    <Image src={release.img} alt={`${release.title} album art`} fill sizes="(max-width: 640px) 45vw, (max-width: 1024px) 28vw, 152px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </a>
                  <p className="mt-2 font-[family-name:var(--font-source-sans)] text-sm leading-snug text-[#f3f0e8]">{release.title}</p>
                  <p className="mt-1 font-[family-name:var(--font-dm-sans)] text-[9px] uppercase tracking-[0.13em] text-[#b9d3c8]">{release.artist} · {release.year}</p>
                  <div className="mt-2 flex gap-3 font-[family-name:var(--font-dm-sans)] text-[9px] uppercase tracking-[0.13em]">
                    {release.spotifyUrl && <a href={release.spotifyUrl} target="_blank" rel="noopener noreferrer" className="focus-ring text-[#f3f0e8]/45 transition-colors hover:text-[#e6c48c]">Spotify</a>}
                    <a href={release.bandcampUrl} target="_blank" rel="noopener noreferrer" className="focus-ring text-[#f3f0e8]/45 transition-colors hover:text-[#e6c48c]">Bandcamp</a>
                  </div>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
