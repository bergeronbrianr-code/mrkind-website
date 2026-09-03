"use client";

// Form powered by Formspree — replace YOUR_FORM_ID with your actual form ID.
// Get a free form ID at https://formspree.io

import { useState } from "react";

const MAILCHIMP_URL =
  "https://mrkindmusic.us22.list-manage.com/subscribe/post?u=66488e430c5058f0f9ead5921&id=be89dc2db0&f_id=0071c2e1f0";

async function subscribeToMailchimp(email: string, name?: string) {
  const data = new FormData();
  data.append("EMAIL", email);
  if (name) data.append("FNAME", name.split(" ")[0]);
  data.append("b_66488e430c5058f0f9ead5921_be89dc2db0", ""); // honeypot — do not remove
  await fetch(MAILCHIMP_URL, { method: "POST", body: data, mode: "no-cors" });
}

export default function ContactSection() {
  const [subscribeChecked, setSubscribeChecked] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (subscribeChecked) {
      const form = e.currentTarget;
      const email = (form.elements.namedItem("email") as HTMLInputElement).value;
      const name = (form.elements.namedItem("name") as HTMLInputElement).value;
      subscribeToMailchimp(email, name);
    }
    // form continues to Formspree normally
  }

  return (
    <section id="contact" className="relative overflow-hidden py-28 px-5 md:px-8 bg-[#292a20]">
      <div className="paper-grain absolute inset-0 opacity-[0.12] pointer-events-none" />
      <div className="absolute -left-20 bottom-0 h-48 w-[58%] -skew-y-12 bg-[#7da89e]/25" />
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: info */}
          <div>
            <p className="font-[family-name:var(--font-dm-sans)] text-[#e6c48c] tracking-[0.24em] uppercase text-[11px] mb-4">
              Reach Out
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl text-[#f3f0e8] leading-tight mb-4">
              Let&apos;s Make Something Happen
            </h2>
            <div className="w-16 h-px bg-[#b9771c] mb-8" />

            <p className="font-[family-name:var(--font-source-sans)] text-[#f3f0e8]/65 text-lg italic mb-10 leading-relaxed">
              Booking, house concerts, private events, press, or just to say hello.
            </p>

            <div className="space-y-6 font-[family-name:var(--font-dm-sans)] mb-12">
              <div>
                <p className="text-[10px] tracking-[0.16em] uppercase text-[#b9d3c8] mb-1">Direct Email</p>
                <a
                  href="mailto:info@mrkindmusic.com"
                  className="focus-ring text-[#f3f0e8]/80 hover:text-[#e6c48c] transition-colors"
                >
                  info@mrkindmusic.com
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="pt-8 border-t border-[#f3f0e8]/15">
              <p className="font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.16em] uppercase text-[#b9d3c8] mb-5">
                Follow Along
              </p>
              <div className="flex flex-wrap gap-5">
                {[
                  { label: "Spotify", href: "https://open.spotify.com/artist/1XvF6CpuKjhuvUEbI8B8AZ" },
                  { label: "Bandcamp", href: "https://meetmrkind.bandcamp.com" },
                  { label: "Facebook", href: "https://www.facebook.com/meetmrkind" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring font-[family-name:var(--font-dm-sans)] text-sm text-[#f3f0e8]/55 hover:text-[#e6c48c] transition-colors"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div>
            <form
              action="https://formspree.io/f/mbdzejjy"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.16em] uppercase text-[#f3f0e8]/50 block mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full bg-[#f3f0e8]/8 border border-[#f3f0e8]/20 text-[#f3f0e8] placeholder-[#f3f0e8]/35 px-4 py-3 text-base font-[family-name:var(--font-dm-sans)] focus:outline-none focus:border-[#e6c48c] transition-colors"
                  />
                </div>
                <div>
                  <label className="font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.16em] uppercase text-[#f3f0e8]/50 block mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="w-full bg-[#f3f0e8]/8 border border-[#f3f0e8]/20 text-[#f3f0e8] placeholder-[#f3f0e8]/35 px-4 py-3 text-base font-[family-name:var(--font-dm-sans)] focus:outline-none focus:border-[#e6c48c] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.16em] uppercase text-[#f3f0e8]/50 block mb-2">
                  Inquiry Type *
                </label>
                <div className="relative">
                  <select
                    name="inquiry"
                    required
                    className="w-full appearance-none bg-[#f3f0e8]/8 border border-[#f3f0e8]/20 text-[#f3f0e8]/80 px-4 py-3 pr-10 text-base font-[family-name:var(--font-dm-sans)] focus:outline-none focus:border-[#e6c48c] transition-colors cursor-pointer"
                  >
                    <option value="">Select a topic…</option>
                    <option value="general">General</option>
                    <option value="book-a-show">Book a Show</option>
                    <option value="house-concert">House Concert</option>
                    <option value="corporate-private-event">Corporate / Private Event</option>
                    <option value="press">Press</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                    <svg className="w-3.5 h-3.5 text-[#e6c48c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Mailing list opt-in */}
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative mt-0.5 shrink-0">
                  <input
                    type="checkbox"
                    checked={subscribeChecked}
                    onChange={(e) => setSubscribeChecked(e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`w-4 h-4 border transition-colors ${subscribeChecked ? "border-[#b9771c] bg-[#b9771c]" : "border-[#f3f0e8]/30 bg-[#f3f0e8]/8 group-hover:border-[#f3f0e8]/60"}`}>
                    {subscribeChecked && (
                      <svg className="w-4 h-4 text-[#f3f0e8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </div>
                <span className="font-[family-name:var(--font-dm-sans)] text-[#f3f0e8]/50 text-xs leading-relaxed group-hover:text-[#f3f0e8]/75 transition-colors">
                  Keep me posted on upcoming shows and house concerts
                </span>
              </label>

              <div>
                <label className="font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.16em] uppercase text-[#f3f0e8]/50 block mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="What's on your mind?"
                  className="w-full bg-[#f3f0e8]/8 border border-[#f3f0e8]/20 text-[#f3f0e8] placeholder-[#f3f0e8]/35 px-4 py-3 text-base font-[family-name:var(--font-dm-sans)] focus:outline-none focus:border-[#e6c48c] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="focus-ring w-full py-4 bg-[#b9771c] text-[#f3f0e8] font-[family-name:var(--font-dm-sans)] font-medium tracking-[0.16em] uppercase text-xs hover:bg-[#7da89e] transition-colors duration-200"
              >
                Send Message
              </button>

              <p className="font-[family-name:var(--font-dm-sans)] text-[#f3f0e8]/35 text-xs text-center">
                Or email directly:{" "}
                <a
                  href="mailto:info@mrkindmusic.com"
                  className="text-[#f3f0e8]/50 hover:text-[#e6c48c] transition-colors"
                >
                  info@mrkindmusic.com
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
