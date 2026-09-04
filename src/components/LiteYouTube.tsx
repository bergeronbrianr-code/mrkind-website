"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  id: string;
  title: string;
  /** Caption shown under the frame. Omit to hide. */
  caption?: string;
};

/**
 * Click-to-load YouTube embed. Renders YouTube's own poster frame until the
 * visitor presses play, so the page doesn't pull in the YouTube player on load.
 */
export default function LiteYouTube({ id, title, caption }: Props) {
  const [playing, setPlaying] = useState(false);

  return (
    <figure className="m-0">
      <div className="relative aspect-video overflow-hidden border border-[#292a20]/15 bg-[#292a20]">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play ${title}`}
            className="focus-ring group absolute inset-0 h-full w-full cursor-pointer"
          >
            <Image
              src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 800px"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <span className="absolute inset-0 bg-[#292a20]/25 transition-colors duration-300 group-hover:bg-[#292a20]/10" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-[#f3f0e8]/70 bg-[#292a20]/55 backdrop-blur-sm transition-colors duration-300 group-hover:border-[#b9771c] group-hover:bg-[#b9771c]">
                <span className="ml-1 text-lg leading-none text-[#f3f0e8]">▶</span>
              </span>
            </span>
          </button>
        )}
      </div>
      {caption && (
        <figcaption className="mt-3 font-[family-name:var(--font-dm-sans)] text-[10px] uppercase tracking-[0.16em] text-[#292a20]/50">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
