"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export type HeroSlide = { slug: string; name: string; text: string; banner: string; block: string };

const INTERVAL = 5000;

type Item = { id: string; label: string; kind: "intro" } | { id: string; label: string; kind: "category"; slide: HeroSlide };

export default function HeroSlider({
  slides,
  keyVisual,
  introText,
}: {
  slides: HeroSlide[];
  keyVisual: string;
  introText: string;
}) {
  const items: Item[] = [
    { id: "start", label: "Sport verbindet", kind: "intro" },
    ...slides.map((s): Item => ({ id: s.slug, label: s.name, kind: "category", slide: s })),
  ];
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = items.length;

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setI((n) => (n + 1) % count), INTERVAL);
    return () => clearTimeout(t);
  }, [i, paused, count]);

  return (
    <section
      className="relative overflow-hidden bg-navy text-white"
      aria-roledescription="carousel"
      aria-label="Sportbereiche"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative h-[440px] sm:h-[480px] md:h-[600px] lg:h-[640px]">
        {items.map((item, n) => {
          const active = n === i;
          return (
            <div
              key={item.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${n + 1} von ${count}`}
              aria-hidden={!active}
              className={`absolute inset-0 transition-opacity duration-500 ${active ? "opacity-100" : "pointer-events-none opacity-0"}`}
            >
              {item.kind === "intro" ? (
                <>
                  <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand/30 blur-3xl" aria-hidden />
                  {active && (
                    <div className="relative mx-auto flex h-full max-w-6xl items-center justify-between gap-8 px-4 pb-12">
                      <div className="hero-text-in max-w-xl">
                        <p className="mb-3 inline-block bg-brand px-3 py-1 text-xs font-semibold uppercase tracking-widest sm:mb-4 sm:text-sm">Sport verbindet</p>
                        <h1 className="text-[1.75rem] font-bold leading-tight sm:text-4xl lg:text-6xl">Gemeinsam bewegen in Berlin &amp; Brandenburg</h1>
                        <p className="mt-3 text-sm text-white/85 sm:mt-4 sm:text-lg">{introText}</p>
                        <div className="mt-5 flex flex-wrap gap-3 sm:mt-6">
                          <Link href="/verein/mitgliedschaft" className="rounded-md bg-brand px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-brand-dark sm:px-6 sm:py-3 sm:text-base">
                            Mitglied werden
                          </Link>
                          <Link href="/sportangebote" className="rounded-md border border-white/40 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-white/10 sm:px-6 sm:py-3 sm:text-base">
                            Sportangebote entdecken
                          </Link>
                        </div>
                      </div>
                      <div className="relative hidden shrink-0 md:block">
                        {/* Key Visual hinter den Icons, fährt als Letztes ein */}
                        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" aria-hidden>
                          <div className="hero-key-in" style={{ animationDelay: `${0.1 + slides.length * 0.2}s` }}>
                            <Image src={keyVisual} alt="" width={949} height={949} className="h-[420px] w-[420px] max-w-none opacity-90 lg:h-[520px] lg:w-[520px]" />
                          </div>
                        </div>
                        <ul className="relative z-10 flex gap-4 lg:gap-6">
                          {slides.map((s, k) => (
                            <li key={s.slug} className="hero-key-in" style={{ animationDelay: `${0.1 + k * 0.2}s` }}>
                              <Link href={`/sportangebote/${s.slug}`} aria-label={s.name} className="block transition-transform duration-300 hover:-translate-y-2">
                                <Image src={s.block} alt="" width={143} height={264} className="h-auto w-24 drop-shadow-lg lg:w-32" />
                              </Link>
                            </li>
                          ))}
                        </ul>

                      </div>
                    </div>
                  )}
                </>
              ) : (
                <>
                  <Image src={item.slide.banner} alt="" fill sizes="100vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/50 to-transparent" aria-hidden />

                  {/* Inhalt wird pro aktivem Slide neu gemountet, damit die Animationen erneut starten */}
                  {active && (
                    <div className="relative mx-auto flex h-full max-w-6xl items-stretch px-4">
                      <div className="hero-block-in w-20 shrink-0 self-start sm:w-24" style={{ animationDelay: "0s" }}>
                        <Image src={item.slide.block} alt="" width={143} height={264} className="h-auto w-full" />
                      </div>
                      <div className="hero-text-in flex flex-1 flex-col justify-center px-5 sm:px-10" style={{ animationDelay: "0.25s" }}>
                        <h2 className="text-4xl font-bold leading-tight sm:text-6xl">{item.slide.name}</h2>
                        <p className="mt-4 max-w-md text-base text-white/85 sm:text-lg">{item.slide.text}</p>
                        <div className="mt-6">
                          <Link href={`/sportangebote/${item.slide.slug}`} className="inline-block rounded-md bg-brand px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-brand-dark sm:px-6 sm:py-3 sm:text-base">
                            Mehr erfahren
                          </Link>
                        </div>
                      </div>
                      <div className="hero-key-in hidden self-end pb-10 md:block" style={{ animationDelay: "0.15s" }}>
                        <Image src={keyVisual} alt="BBSV Key Visual" width={949} height={949} className="h-72 w-72 drop-shadow-lg lg:h-80 lg:w-80" />
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>

      <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
        {items.map((s, n) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setI(n)}
            aria-label={`Zu ${s.label} wechseln`}
            aria-current={n === i}
            className={`h-2.5 rounded-full transition-all ${n === i ? "w-8 bg-brand" : "w-2.5 bg-white/60 hover:bg-white"}`}
          />
        ))}
      </div>
      <button
        type="button"
        onClick={() => setI((i - 1 + count) % count)}
        aria-label="Vorheriger Slide"
        className="absolute left-2 top-1/2 hidden h-10 w-10 -translate-y-1/2 rounded-full bg-black/30 text-xl hover:bg-black/50 sm:block"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={() => setI((i + 1) % count)}
        aria-label="Nächster Slide"
        className="absolute right-2 top-1/2 hidden h-10 w-10 -translate-y-1/2 rounded-full bg-black/30 text-xl hover:bg-black/50 sm:block"
      >
        ›
      </button>
    </section>
  );
}
