"use client";

import { useEffect } from "react";

export default function HashScrollFix() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    let cancelled = false;
    const scrollToHash = () => {
      if (cancelled) return;
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    // Re-run after lazy-loaded content (e.g. the Bandsintown widget) finishes
    // rendering and shifts page height, which can leave the initial scroll short.
    const timers = [300, 800, 1500, 3000].map((delay) => setTimeout(scrollToHash, delay));
    const cancel = () => { cancelled = true; };
    window.addEventListener("wheel", cancel, { once: true });
    window.addEventListener("touchmove", cancel, { once: true });

    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("wheel", cancel);
      window.removeEventListener("touchmove", cancel);
    };
  }, []);

  return null;
}
