// Video IDs to add when footage is available.
// Priority: house concert footage, live performance, acoustic solo.
// Replace the empty strings with YouTube video IDs (the part after ?v= in the URL).
//
// Example: "dQw4w9WgXcQ" for https://www.youtube.com/watch?v=dQw4w9WgXcQ
const videoIds: string[] = [
  "", // Add YouTube video ID here — house concert footage
  "", // Add YouTube video ID here — live performance
  "", // Add YouTube video ID here — acoustic solo session
  "", // Add YouTube video ID here — full live set clip
];

export default function VideoSection() {
  const hasVideos = videoIds.some((id) => id.length > 0);

  return (
    <section id="video" className="py-28 px-6 bg-[#1c1a17]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <p className="font-[family-name:var(--font-dm-sans)] text-[#b8832a] tracking-[0.3em] uppercase text-xs mb-3">
            Watch
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl text-[#ede8de]">
            Live
          </h2>
          <div className="mt-4 w-12 h-px bg-[#b8832a]" />
        </div>

        {hasVideos ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videoIds
              .filter((id) => id.length > 0)
              .map((id) => (
                <div key={id} className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${id}`}
                    title="Mr. Kind live performance"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ))}
          </div>
        ) : (
          /* Placeholder grid — shown until video IDs are added */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "House concert footage",
              "Live performance",
              "Acoustic solo session",
              "Full live set clip",
            ].map((label) => (
              <div
                key={label}
                className="aspect-video flex items-center justify-center border border-[#ede8de]/8"
                style={{ backgroundColor: "#b8832a14" }}
              >
                <div className="text-center opacity-40">
                  <div className="w-12 h-12 border border-[#b8832a]/40 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-[#b8832a] text-xl leading-none ml-1">▶</span>
                  </div>
                  <p className="font-[family-name:var(--font-dm-sans)] text-[#ede8de] text-xs tracking-widest uppercase">
                    {label}
                  </p>
                  {/* Add YouTube video ID to videoIds array above */}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Note */}
        {!hasVideos && (
          <p className="mt-8 text-center font-[family-name:var(--font-source-sans)] text-[#ede8de]/25 text-sm italic">
            Video coming soon — add YouTube IDs to the{" "}
            <code className="font-mono text-[#b8832a]/40">videoIds</code> array in VideoSection.tsx
          </p>
        )}
      </div>
    </section>
  );
}
