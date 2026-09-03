"use client";

import { useState } from "react";

const MAILCHIMP_URL =
  "https://mrkindmusic.us22.list-manage.com/subscribe/post?u=66488e430c5058f0f9ead5921&id=be89dc2db0&f_id=0071c2e1f0";

export default function MailingListStrip() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    const data = new FormData();
    data.append("EMAIL", email);
    if (phone) data.append("PHONE", phone);
    data.append("b_66488e430c5058f0f9ead5921_be89dc2db0", "");
    await fetch(MAILCHIMP_URL, { method: "POST", body: data, mode: "no-cors" });
    setSubmitted(true);
    setLoading(false);
  }

  return (
    <div id="mailing-list" className="relative overflow-hidden bg-[#b9771c] px-5 py-12 md:px-8">
      <div className="absolute inset-y-0 right-[11%] w-24 -skew-x-[34deg] bg-[#f3f0e8]/15" />
      <div className="relative max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-[family-name:var(--font-playfair)] text-[#292a20] text-3xl mb-1">
            Stay in the loop.
          </p>
          <p className="font-[family-name:var(--font-source-sans)] text-[#292a20]/75 text-base">
            Shows, house concerts, and text alerts for the occasional update.
          </p>
        </div>

        {submitted ? (
          <p className="font-[family-name:var(--font-dm-sans)] text-[#292a20] tracking-[0.16em] uppercase text-xs">
            You&apos;re on the list ✓
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col items-stretch sm:items-end w-full sm:w-auto gap-2">
            <div className="flex w-full sm:w-auto gap-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="focus:ring-2 focus:ring-[#292a20] flex-1 sm:w-72 bg-[#f3f0e8] text-[#292a20] placeholder-[#292a20]/35 px-4 py-3 text-base font-[family-name:var(--font-dm-sans)] focus:outline-none"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-[#292a20] text-[#f3f0e8] font-[family-name:var(--font-dm-sans)] font-medium tracking-[0.16em] uppercase text-[11px] px-6 py-3 hover:bg-[#7da89e] transition-colors whitespace-nowrap disabled:opacity-50"
              >
                {loading ? "…" : "Sign Up"}
              </button>
            </div>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone number (optional, for text alerts)"
              className="focus:ring-2 focus:ring-[#292a20] w-full sm:w-72 bg-[#f3f0e8] text-[#292a20] placeholder-[#292a20]/35 px-4 py-3 text-base font-[family-name:var(--font-dm-sans)] focus:outline-none"
            />
            <p className="font-[family-name:var(--font-dm-sans)] text-[#292a20]/65 text-[11px] leading-snug max-w-72">
              By adding your number you agree to receive occasional text alerts from Mr. Kind. Msg &amp; data rates may apply. Reply STOP to unsubscribe.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
