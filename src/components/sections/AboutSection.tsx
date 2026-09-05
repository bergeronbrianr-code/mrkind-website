import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden py-28 px-5 md:px-8">
      <div className="absolute right-0 top-24 hidden h-64 w-[38%] bg-[#b9d3c8]/30 lg:block" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: text */}
          <div>
            <p className="font-[family-name:var(--font-dm-sans)] text-[#b9771c] tracking-[0.24em] uppercase text-[11px] mb-4">
              About
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl text-[#292a20] mb-4 leading-tight">
              The Story So Far
            </h2>
            <div className="w-16 h-px bg-[#b9771c] mb-8" />

            <div className="space-y-5 font-[family-name:var(--font-source-sans)] text-[#292a20]/75 text-lg leading-relaxed">
              <p>
                Mr. Kind is Brian Bergeron — singer, songwriter, guitarist, and the kind of performer
                who makes a living room feel like a music hall.
              </p>
              <p>
                Brian has been playing music for over two decades — first in Boston&apos;s folk-rock
                scene, then as the frontman of Oakland indie band Mr. Kind, and now across the
                DC/Maryland/Virginia region as a solo performer and collaborator.
              </p>
              <p>
                Mr. Kind formed in Oakland in 2012, releasing four EPs that evolved from garage
                folk-rock to electro-Americana. The band played renowned SF venues like Bottom of the
                Hill and The Great American Music Hall. Songs from Brian&apos;s earlier solo work
                appeared on <em>NBC&apos;s The Voice</em>, <em>The Young and the Restless</em>,{" "}
                <em>Keeping Up with the Kardashians</em>, and <em>MTV&apos;s The Real World</em>.
              </p>
              <p>
                After years of touring, travel, and starting a family, Brian re-launched his career in
                2024. Today he performs heartfelt indie rock originals alongside a carefully curated
                repertoire of 100+ covers — from classic folk to modern indie — for house concerts,
                private events, and venues across the DMV.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 pt-10 border-t border-[#292a20]/15">
              {[
                { value: "20+", label: "Years Performing" },
                { value: "1,000+", label: "Shows Played" },
                { value: "6+", label: "Musical Releases" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-[family-name:var(--font-playfair)] text-[#b9771c] text-3xl mb-1">
                    {stat.value}
                  </p>
                  <p className="font-[family-name:var(--font-dm-sans)] text-[#292a20]/45 text-[10px] tracking-[0.14em] uppercase leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: photo + pull quote */}
          <div className="flex flex-col gap-8">
            {/* Artist photo */}
            <div className="relative z-10 max-w-[35rem] lg:ml-auto">
              <div className="absolute -left-5 -top-5 h-[42%] w-[48%] bg-[#b9771c]/15" />
              <div className="relative z-10 aspect-[3/4] overflow-hidden bg-[#292a20]">
                <Image
                  src="/Photos/Artist Photo 2.png"
                  alt="Brian Bergeron"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Offset accent border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#7da89e]/70 -z-10" />
            </div>

            {/* Pull quote */}
            <blockquote className="relative z-10 border-l-2 border-[#b9771c] pl-6 py-1">
              <p className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-[#292a20] italic leading-snug mb-3">
                &ldquo;Dreamy, at times psychedelic.&rdquo;
              </p>
              <footer className="font-[family-name:var(--font-dm-sans)] text-[#7da89e] text-[10px] tracking-[0.16em] uppercase">
                — San Francisco Chronicle
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
