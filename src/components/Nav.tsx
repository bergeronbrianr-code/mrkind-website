"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Music", href: "#music" },
  { label: "Shows", href: "#shows" },
  { label: "House Concerts", href: "#house-concerts" },
  { label: "Events", href: "#events" },
  { label: "Press", href: "#press" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1c1a17]/90 backdrop-blur-sm border-b border-[#b8832a]/20">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link
          href="/"
          className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[#b8832a] tracking-wide shrink-0"
        >
          Mr. Kind
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-[family-name:var(--font-dm-sans)] text-[#ede8de]/60 hover:text-[#b8832a] transition-colors duration-200 tracking-widest uppercase whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Request / Tip CTA */}
        <Link
          href="/request"
          className="hidden lg:inline-flex text-xs px-5 py-2 border border-[#b8832a] text-[#b8832a] hover:bg-[#b8832a] hover:text-[#1c1a17] transition-all duration-200 tracking-widest uppercase font-[family-name:var(--font-dm-sans)] shrink-0"
        >
          Request / Tip
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2 ml-auto"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-[#ede8de] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-[#ede8de] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-[#ede8de] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile full-screen overlay nav */}
      <div
        className={`lg:hidden fixed inset-0 bg-[#1c1a17] z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="font-[family-name:var(--font-playfair)] text-3xl text-[#ede8de] hover:text-[#b8832a] transition-colors"
          >
            {link.label}
          </a>
        ))}
        <Link
          href="/request"
          onClick={() => setMenuOpen(false)}
          className="mt-4 text-sm px-8 py-3 border border-[#b8832a] text-[#b8832a] tracking-widest uppercase font-[family-name:var(--font-dm-sans)]"
        >
          Request / Tip
        </Link>
      </div>
    </header>
  );
}
