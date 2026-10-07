"use client";

import { useEffect, useRef } from "react";

type Dir = "up" | "left" | "right" | "zoom";

// Blendet Inhalte beim Scrollen ein. Was beim Laden schon sichtbar ist, bleibt unverändert (kein Flackern);
// ohne JavaScript oder bei "reduzierte Bewegung" ist alles sofort sichtbar.
export default function Reveal({
  children,
  className = "",
  delay = 0,
  dir = "up",
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  dir?: Dir;
  as?: "div" | "li" | "section";
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) {
      el.style.transitionDelay = "0ms"; // schon sichtbar: nichts einblenden
      return;
    }

    el.dataset.reveal = "hidden";
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.reveal = "shown";
          io.disconnect();
          // Verzögerung nach dem Einblenden entfernen, damit Hover-Effekte sofort reagieren
          window.setTimeout(() => (el.style.transitionDelay = "0ms"), delay + 800);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  const Tag = as as "div";
  return (
    <Tag ref={ref} data-dir={dir} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}
