"use client";

import Image from "next/image";
import { useState } from "react";

type Video = {
  id: string;
  title: string;
};

/**
 * Live originals. Add the next song by appending one entry — the featured
 * player and the selector strip below it both size themselves to this list.
 * The cover medley lives in the Events section, where it does its real work.
 */
const videos: Video[] = [
  { id: "qrsYATQ89Io", title: "The Girl with the Golden Eyes" },
  { id: "U3JuFS-kdhE", title: "Homeostasis" },
  { id: "iXC1bR4oQh4", title: "You're OK" },
  { id: "djHXYHVABlY", title: "Live Performance" },
  // Fifth video slot — add the next original here:
  // { id: "", title: "" },
];

export default function VideoSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  const active = videos[activeIndex];

  const select = (index: number) => {
    setActiveIndex(index);
    setPlaying(true);
  };

  return (
    <section id="video" className="relative overflow-hidden bg-[#f3f0e8] py-28 px-5 md:px-8">
      <div className="absolute -right-24 top-24 hidden h-56 w-[38%] -rotate-[16deg] bg-[#b9d3c8]/45 lg:block" />
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14">
          <p className="mb-4 font-[family-name:var(--font-dm-sans)] text-[11px] uppercase tracking-[0.24em] text-[#b9771c]">
            Watch
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-5xl text-[#292a20] md:text-6xl">
            Live Originals
          </h2>
          <div className="mt-4 h-px w-16 bg-[#b9771c]" />
          <p className="mt-6 max-w-xl font-[family-name:var(--font-source-sans)] text-lg italic leading-relaxed text-[#292a20]/65">
            Originals, performed the way you&apos;d hear them in your living room — one voice, one
            guitar, no studio polish.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-14">
          {/* Featured player */}
          <div>
            <div className="relative aspect-video overflow-hidden border border-[#292a20]/15 bg-[#292a20]">
              {playing ? (
                <iframe
                  key={active.id}
                  src={`https://www.youtube-nocookie.com/embed/${active.id}?autoplay=1&rel=0&modestbranding=1`}
                  title={`Mr. Kind — ${active.title}`}
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  aria-label={`Play ${active.title}`}
                  className="focus-ring group absolute inset-0 h-full w-full cursor-pointer"
                >
                  <Image
                    src={`https://i.ytimg.com/vi/${active.id}/maxresdefault.jpg`}
                    alt=""
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 900px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute inset-0 bg-[#292a20]/30 transition-colors duration-300 group-hover:bg-[#292a20]/12" />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-20 w-20 items-center justify-center rounded-full border border-[#f3f0e8]/70 bg-[#292a20]/55 backdrop-blur-sm transition-colors duration-300 group-hover:border-[#b9771c] group-hover:bg-[#b9771c]">
                      <span className="ml-1 text-2xl leading-none text-[#f3f0e8]">▶</span>
                    </span>
                  </span>
                </button>
              )}
            </div>

            <h3 className="mt-5 font-[family-name:var(--font-playfair)] text-2xl text-[#292a20] md:text-3xl">
              {active.title}
            </h3>
          </div>

          {/* Selector strip */}
          <div className="lg:pt-1">
            <p className="mb-5 font-[family-name:var(--font-dm-sans)] text-[11px] uppercase tracking-[0.18em] text-[#b9771c]">
              More Songs
            </p>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {videos.map((video, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={video.id}
                    type="button"
                    onClick={() => select(index)}
                    aria-current={isActive}
                    className="focus-ring group cursor-pointer text-left"
                  >
                    <div
                      className={`relative aspect-video overflow-hidden border transition-colors duration-300 ${
                        isActive
                          ? "border-[#b9771c]"
                          : "border-[#292a20]/12 group-hover:border-[#b9771c]/70"
                      }`}
                    >
                      <Image
                        src={`https://i.ytimg.com/vi/${video.id}/mqdefault.jpg`}
                        alt=""
                        fill
                        sizes="260px"
                        className="object-cover"
                      />
                      <span
                        className={`absolute inset-0 transition-colors duration-300 ${
                          isActive
                            ? "bg-transparent"
                            : "bg-[#f3f0e8]/45 group-hover:bg-[#f3f0e8]/10"
                        }`}
                      />
                    </div>
                    <p
                      className={`mt-2 font-[family-name:var(--font-source-sans)] text-sm leading-snug transition-colors duration-300 ${
                        isActive ? "text-[#292a20]" : "text-[#292a20]/60 group-hover:text-[#292a20]"
                      }`}
                    >
                      {video.title}
                    </p>
                  </button>
                );
              })}
            </div>

            <a
              href="https://www.youtube.com/@MrKindMusicVolume2"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-6 inline-block font-[family-name:var(--font-dm-sans)] text-[10px] uppercase tracking-[0.16em] text-[#292a20]/50 transition-colors hover:text-[#b9771c]"
            >
              All videos on YouTube →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
