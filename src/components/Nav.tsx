"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Music", href: "#music" },
  { label: "Watch", href: "#video" },
  { label: "Shows", href: "#shows" },
  { label: "House Concerts", href: "#house-concerts" },
  { label: "Private Events", href: "#events" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#292a20]/10 bg-[#f3f0e8]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-[4.5rem] flex items-center justify-between gap-6">
        {/* Logo */}
        <Link
          href="/"
          className="focus-ring font-[family-name:var(--font-dm-sans)] text-base font-semibold text-[#292a20] tracking-[0.18em] uppercase shrink-0"
        >
          Mr. Kind
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring text-[11px] font-[family-name:var(--font-dm-sans)] text-[#292a20]/65 hover:text-[#b9771c] transition-colors duration-200 tracking-[0.16em] uppercase whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Request / Tip CTA */}
        <Link
          href="/request"
          className="focus-ring hidden lg:inline-flex text-[11px] px-5 py-2.5 bg-[#b9771c] text-[#f3f0e8] hover:bg-[#292a20] transition-colors duration-200 tracking-[0.16em] uppercase font-[family-name:var(--font-dm-sans)] shrink-0"
        >
          Request / Tip
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="focus-ring lg:hidden flex flex-col gap-1.5 p-2 ml-auto"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-[#292a20] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-[#292a20] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-[#292a20] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>
    </header>

      {/* Mobile full-screen overlay nav */}
      <div
        className={`lg:hidden fixed inset-0 bg-[#f3f0e8] z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="focus-ring font-[family-name:var(--font-playfair)] text-4xl text-[#292a20] hover:text-[#b9771c] transition-colors"
          >
            {link.label}
          </a>
        ))}
        <Link
          href="/request"
          onClick={() => setMenuOpen(false)}
          className="focus-ring mt-4 text-xs px-8 py-3 bg-[#b9771c] text-[#f3f0e8] tracking-[0.16em] uppercase font-[family-name:var(--font-dm-sans)]"
        >
          Request / Tip
        </Link>
      </div>
    </>
  );
}
