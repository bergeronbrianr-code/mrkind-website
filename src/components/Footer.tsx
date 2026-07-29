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
    <footer className="bg-[#1c1a17] border-t border-[#ede8de]/10 py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-[family-name:var(--font-playfair)] text-2xl text-[#b8832a] block mb-2"
            >
              Mr. Kind
            </Link>
            <p className="font-[family-name:var(--font-source-sans)] text-[#ede8de]/40 text-sm italic leading-relaxed">
              Heartfelt indie rock, folk-Americana storytelling.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="font-[family-name:var(--font-dm-sans)] text-[#ede8de]/30 text-xs tracking-widest uppercase mb-4">
              Navigate
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-[family-name:var(--font-dm-sans)] text-sm text-[#ede8de]/40 hover:text-[#b8832a] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials + Request */}
          <div>
            <p className="font-[family-name:var(--font-dm-sans)] text-[#ede8de]/30 text-xs tracking-widest uppercase mb-4">
              Follow
            </p>
            <ul className="space-y-2 mb-6">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="font-[family-name:var(--font-dm-sans)] text-sm text-[#ede8de]/40 hover:text-[#b8832a] transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/request"
                className="inline-block font-[family-name:var(--font-dm-sans)] text-xs tracking-widest uppercase px-5 py-2 border border-[#b8832a]/40 text-[#b8832a]/70 hover:border-[#b8832a] hover:text-[#b8832a] transition-colors"
              >
                Request / Tip
              </Link>
              <a
                href="#mailing-list"
                className="inline-block font-[family-name:var(--font-dm-sans)] text-xs tracking-widest uppercase px-5 py-2 border border-[#b8832a]/40 text-[#b8832a]/70 hover:border-[#b8832a] hover:text-[#b8832a] transition-colors"
              >
                Email &amp; Text List
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#ede8de]/8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-[family-name:var(--font-dm-sans)] text-[#ede8de]/20 text-xs">
            © 2025 Brian Bergeron / Mr. Kind. All rights reserved.
          </p>
          <p className="font-[family-name:var(--font-dm-sans)] text-[#ede8de]/15 text-xs">
            mrkindmusic.com
          </p>
        </div>
      </div>
    </footer>
  );
}
