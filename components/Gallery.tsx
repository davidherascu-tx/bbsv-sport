"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Img } from "@/lib/sanity";

export default function Gallery({ images }: { images: Img[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const count = images.length;

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => (i === null ? i : (i + 1) % count));
      if (e.key === "ArrowLeft") setOpen((i) => (i === null ? i : (i - 1 + count) % count));
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, count]);

  const cur = open === null ? null : images[open];
  const btn = "absolute grid h-11 w-11 place-items-center rounded-full bg-white/10 text-2xl text-white hover:bg-white/20";

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {images.map((img, i) => (
          <li key={img.url}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="group relative block aspect-[4/3] w-full overflow-hidden rounded-xl bg-soft"
              aria-label={`Bild ${i + 1} vergrößern`}
            >
              <Image
                src={img.url}
                alt={img.alt ?? img.caption ?? ""}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </button>
          </li>
        ))}
      </ul>

      {cur && open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Bildergalerie"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90 p-4"
          onClick={() => setOpen(null)}
        >
          <div className="relative h-[75vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image src={cur.url} alt={cur.alt ?? cur.caption ?? ""} fill sizes="100vw" className="object-contain" />
          </div>
          {cur.caption && (
            <p className="mt-3 text-center text-sm text-white/80" onClick={(e) => e.stopPropagation()}>
              {cur.caption}
            </p>
          )}
          <p className="mt-1 text-xs text-white/50">
            {open + 1} / {count}
          </p>
          <button type="button" onClick={() => setOpen(null)} aria-label="Schließen" className={`${btn} right-4 top-4`}>
            ×
          </button>
          {count > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen((open - 1 + count) % count);
                }}
                aria-label="Vorheriges Bild"
                className={`${btn} left-3 top-1/2 -translate-y-1/2`}
              >
                ‹
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen((open + 1) % count);
                }}
                aria-label="Nächstes Bild"
                className={`${btn} right-3 top-1/2 -translate-y-1/2`}
              >
                ›
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}
