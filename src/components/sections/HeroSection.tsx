import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-[660px] overflow-hidden bg-[#f3f0e8] pt-28 pb-16 md:min-h-[720px] md:pt-32 md:pb-20">
      <div className="paper-grain absolute inset-0 opacity-30 pointer-events-none" />
      <div className="absolute -left-24 bottom-4 h-64 w-[44rem] -rotate-[25deg] bg-[#b9d3c8]/40 md:h-80" />
      <div className="absolute right-[7%] top-24 hidden h-32 w-32 bg-[#b9771c]/15 md:block" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 md:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)] md:gap-10 md:px-8 lg:gap-16">
        <div className="relative z-10 max-w-2xl">
          <p className="mb-7 font-[family-name:var(--font-dm-sans)] text-[11px] font-medium tracking-[0.24em] text-[#b9771c] uppercase">
            Songs for rooms of every size
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl leading-[0.98] text-[#292a20] md:text-6xl lg:text-[5.5rem]">
            Mr. Kind
            <span className="mt-3 block text-[#7da89e] italic">is Brian Bergeron.</span>
          </h1>
          <div className="my-8 h-px w-20 bg-[#b9771c]" />
          <p className="max-w-lg font-[family-name:var(--font-source-sans)] text-xl leading-relaxed text-[#292a20]/70 md:text-2xl">
            Indie rock and folk-Americana for listening rooms, house concerts, and nights worth remembering.
          </p>
          <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <a
            href="/request"
            className="focus-ring px-7 py-3.5 bg-[#b9771c] text-[#f3f0e8] font-[family-name:var(--font-dm-sans)] font-medium tracking-[0.16em] uppercase text-xs hover:bg-[#292a20] transition-colors duration-200"
          >
            Request a Song
          </a>
          <a
            href="https://open.spotify.com/artist/1XvF6CpuKjhuvUEbI8B8AZ"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring px-7 py-3.5 border border-[#292a20]/25 text-[#292a20] font-[family-name:var(--font-dm-sans)] font-medium tracking-[0.16em] uppercase text-xs hover:border-[#b9771c] hover:text-[#b9771c] transition-colors duration-200"
          >
            Listen on Spotify
          </a>
        </div>
        </div>

        <div className="relative mx-auto w-full max-w-[360px] md:ml-auto md:max-w-[400px] lg:max-w-[480px]">
          <div className="absolute -left-6 top-[18%] h-[68%] w-[24%] bg-[#7da89e]/20" />
          <div className="absolute -right-6 bottom-[7%] h-[30%] w-[46%] bg-[#b9771c]/15" />
          <div className="relative aspect-square overflow-hidden shadow-[18px_22px_0_rgba(41,42,32,0.10)]">
            <Image
              src="/Photos/Mr Kind - Front Text-Free.png"
              alt="Abstract Mr. Kind artwork in ochre and teal"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="object-cover"
            />
          </div>
          <p className="absolute -bottom-8 right-0 font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.17em] text-[#292a20]/45 uppercase">
            2011 — now · DMV / Oakland
          </p>
        </div>
      </div>
    </section>
  );
}
