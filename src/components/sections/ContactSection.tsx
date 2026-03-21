// Form powered by Formspree — replace YOUR_FORM_ID with your actual form ID.
// Get a free form ID at https://formspree.io
// Once you have one, change the action below to: https://formspree.io/f/YOUR_FORM_ID

export default function ContactSection() {
  return (
    <section id="contact" className="py-28 px-6 bg-[#1c1a17]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: info */}
          <div>
            <p className="font-[family-name:var(--font-dm-sans)] text-[#b8832a] tracking-[0.3em] uppercase text-xs mb-3">
              Reach Out
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl text-[#ede8de] leading-tight mb-4">
              Let&apos;s Make Something Happen
            </h2>
            <div className="w-12 h-px bg-[#b8832a] mb-8" />

            <p className="font-[family-name:var(--font-source-sans)] text-[#ede8de]/55 text-lg italic mb-10 leading-relaxed">
              Booking, house concerts, private events, press, or just to say hello.
            </p>

            <div className="space-y-6 font-[family-name:var(--font-dm-sans)] mb-12">
              <div>
                <p className="text-xs tracking-widest uppercase text-[#8aaa9e] mb-1">Direct Email</p>
                <a
                  href="mailto:info@mrkindmusic.com"
                  className="text-[#ede8de]/70 hover:text-[#b8832a] transition-colors"
                >
                  info@mrkindmusic.com
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="pt-8 border-t border-[#ede8de]/10">
              <p className="font-[family-name:var(--font-dm-sans)] text-xs tracking-widest uppercase text-[#8aaa9e] mb-5">
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
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="font-[family-name:var(--font-dm-sans)] text-sm text-[#ede8de]/40 hover:text-[#b8832a] transition-colors"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div>
            {/* FORMSPREE FORM — replace action URL with your Formspree endpoint */}
            <form
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              className="space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-[family-name:var(--font-dm-sans)] text-xs tracking-widest uppercase text-[#ede8de]/40 block mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full bg-[#252220] border border-[#ede8de]/10 text-[#ede8de] placeholder-[#ede8de]/20 px-4 py-3 text-sm font-[family-name:var(--font-dm-sans)] focus:outline-none focus:border-[#b8832a]/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="font-[family-name:var(--font-dm-sans)] text-xs tracking-widest uppercase text-[#ede8de]/40 block mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="w-full bg-[#252220] border border-[#ede8de]/10 text-[#ede8de] placeholder-[#ede8de]/20 px-4 py-3 text-sm font-[family-name:var(--font-dm-sans)] focus:outline-none focus:border-[#b8832a]/50 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="font-[family-name:var(--font-dm-sans)] text-xs tracking-widest uppercase text-[#ede8de]/40 block mb-2">
                  Inquiry Type *
                </label>
                <div className="relative">
                  <select
                    name="inquiry"
                    required
                    className="w-full appearance-none bg-[#252220] border border-[#ede8de]/10 text-[#ede8de]/70 px-4 py-3 pr-10 text-sm font-[family-name:var(--font-dm-sans)] focus:outline-none focus:border-[#b8832a]/50 transition-colors cursor-pointer"
                  >
                    <option value="">Select a topic…</option>
                    <option value="general">General</option>
                    <option value="book-a-show">Book a Show</option>
                    <option value="house-concert">House Concert</option>
                    <option value="corporate-private-event">Corporate / Private Event</option>
                    <option value="press">Press</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                    <svg className="w-3.5 h-3.5 text-[#b8832a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="font-[family-name:var(--font-dm-sans)] text-xs tracking-widest uppercase text-[#ede8de]/40 block mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  rows={6}
                  required
                  placeholder="What's on your mind?"
                  className="w-full bg-[#252220] border border-[#ede8de]/10 text-[#ede8de] placeholder-[#ede8de]/20 px-4 py-3 text-sm font-[family-name:var(--font-dm-sans)] focus:outline-none focus:border-[#b8832a]/50 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#b8832a] text-[#1c1a17] font-[family-name:var(--font-dm-sans)] font-semibold tracking-widest uppercase text-sm hover:bg-[#a8721a] transition-colors duration-200"
              >
                Send Message
              </button>

              <p className="font-[family-name:var(--font-dm-sans)] text-[#ede8de]/20 text-xs text-center">
                Or email directly:{" "}
                <a
                  href="mailto:info@mrkindmusic.com"
                  className="text-[#ede8de]/30 hover:text-[#b8832a] transition-colors"
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
