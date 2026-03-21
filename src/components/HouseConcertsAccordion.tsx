"use client";

import { useState } from "react";

const steps = [
  {
    title: "Pick Your Space",
    body: "Living room, backyard, finished basement. Cozy beats cavernous.",
  },
  {
    title: "Build Your List",
    body: "Invite 15–20 to hit your 10-person minimum. Life happens.",
  },
  {
    title: "Food & Drink",
    body: "Most hosts do BYOB + a snack to share. Keep it simple; let the music be the thing.",
  },
  {
    title: "The Night's Flow",
    body: "7pm doors → 8pm music → 9pm hang out + merch time.",
  },
  {
    title: "Payment",
    body: "Brian sends a link or QR code. Guests pay directly. You're done.",
  },
];

export default function HouseConcertsAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-[#ede8de]/10">
      {steps.map((step, i) => (
        <div key={step.title}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between py-4 text-left group"
          >
            <div className="flex items-center gap-4">
              <span className="font-[family-name:var(--font-dm-sans)] text-[#b8832a] text-xs tabular-nums w-5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-[family-name:var(--font-dm-sans)] text-[#ede8de] text-sm tracking-wide group-hover:text-[#b8832a] transition-colors">
                {step.title}
              </span>
            </div>
            <span
              className={`text-[#b8832a] text-lg leading-none transition-transform duration-200 ${open === i ? "rotate-45" : ""}`}
            >
              +
            </span>
          </button>

          {open === i && (
            <div className="pb-4 pl-9">
              <p className="font-[family-name:var(--font-source-sans)] text-[#ede8de]/60 text-base leading-relaxed">
                {step.body}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
