import Link from "next/link";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Music", href: "#music" },
  { label: "Shows", href: "#shows" },
  { label: "House Concerts", href: "#house-concerts" },
  { label: "Events", href: "#events" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "Spotify", href: "https://open.spotify.com/artist/1XvF6CpuKjhuvUEbI8B8AZ" },
  { label: "Bandcamp", href: "https://meetmrkind.bandcamp.com" },
  { label: "Facebook", href: "https://www.facebook.com/meetmrkind" },
];

export default function Footer() {
  return (
    <footer className="bg-[#f3f0e8] border-t border-[#292a20]/15 py-14 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="focus-ring font-[family-name:var(--font-dm-sans)] text-base font-semibold tracking-[0.18em] uppercase text-[#292a20] block mb-2"
            >
              Mr. Kind
            </Link>
            <p className="font-[family-name:var(--font-source-sans)] text-[#292a20]/60 text-sm italic leading-relaxed">
              Heartfelt indie rock, folk-Americana storytelling.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="font-[family-name:var(--font-dm-sans)] text-[#292a20]/45 text-[10px] tracking-[0.16em] uppercase mb-4">
              Navigate
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="focus-ring font-[family-name:var(--font-dm-sans)] text-sm text-[#292a20]/65 hover:text-[#b9771c] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials + Request */}
          <div>
            <p className="font-[family-name:var(--font-dm-sans)] text-[#292a20]/45 text-[10px] tracking-[0.16em] uppercase mb-4">
              Follow
            </p>
            <ul className="space-y-2 mb-6">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="focus-ring font-[family-name:var(--font-dm-sans)] text-sm text-[#292a20]/65 hover:text-[#b9771c] transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
            <Link
              href="/request"
              className="focus-ring inline-block font-[family-name:var(--font-dm-sans)] text-[11px] tracking-[0.16em] uppercase px-5 py-2 bg-[#b9771c] text-[#f3f0e8] hover:bg-[#292a20] transition-colors"
            >
              Request / Tip
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#292a20]/12 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-[family-name:var(--font-dm-sans)] text-[#292a20]/40 text-xs">
            © 2026 Brian Bergeron / Mr. Kind. All rights reserved.
          </p>
          <p className="font-[family-name:var(--font-dm-sans)] text-[#292a20]/35 text-xs">
            mrkindmusic.com
          </p>
        </div>
      </div>
    </footer>
  );
}
