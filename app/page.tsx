import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CountUp from "@/components/CountUp";
import Reveal from "@/components/Reveal";
import Sponsors from "@/components/Sponsors";
import HeroSlider from "@/components/HeroSlider";
import { categories, club, formatDate } from "@/lib/data";
import { getNews } from "@/lib/sanity";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default async function Home() {
  const news = await getNews(3);
  const sportCount = categories.reduce((n, c) => n + c.sports.length, 0);
  const stats = [
    { v: sportCount, l: "Kurse & Sportarten" },
    { v: categories.length, l: "Bereiche" },
    { v: "Alle", l: "Altersgruppen" },
  ];

  return (
    <>
      <HeroSlider slides={categories.map((c) => ({ slug: c.slug, name: c.name, text: c.text, banner: c.banner, block: c.block }))} keyVisual="/BBSV_KeyVisual.png" introText={`Der ${club.name} bietet Kampfkunst, Gesundheits- und Fitnesssport für Kinder, Jugendliche und Erwachsene – mit Leidenschaft und Gemeinschaft.`} />

      <section className="border-b border-black/10 bg-soft">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-10 md:flex-row md:justify-between md:gap-12">
          <dl className="grid w-full grid-cols-3 gap-6 text-center md:flex-1">
            {stats.map((s, i) => (
              <Reveal key={s.l} delay={i * 120}>
                <dd className="font-display text-4xl font-bold text-brand">{typeof s.v === "number" ? <CountUp value={s.v} /> : s.v}</dd>
                <dt className="text-sm text-navy/70">{s.l}</dt>
              </Reveal>
            ))}
          </dl>
          <Reveal dir="right" delay={200} className="shrink-0">
          <Link href="/kontakt" className="flex shrink-0 items-center gap-4 rounded-xl bg-white p-3 pr-5 shadow-sm ring-1 ring-black/5 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg">
            <Image src="/Kinder_Schutz.webp" alt="Kinderschutzsiegel des LSB Berlin 2026–2031" width={500} height={538} className="h-24 w-auto" />
            <span className="max-w-[11rem] text-sm leading-snug text-navy/80">
              <span className="block font-semibold text-navy">Kinderschutz im Verein</span>
              Siegel des LSB Berlin
            </span>
          </Link>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <Reveal><h2 className="mb-8 text-3xl font-bold">Unsere Sportangebote</h2></Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((c, i) => (
            <Reveal key={c.slug} delay={i * 130}>
            <Link href={`/sportangebote/${c.slug}`} className="group flex h-full overflow-hidden rounded-xl border border-black/10 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg">
              <Image src={c.block} alt="" width={143} height={264} className="h-auto w-20 shrink-0 self-start sm:w-24" />
              <div className="min-w-0 flex-1 p-6">
                <h3 className="text-2xl font-bold group-hover:text-brand">{c.name}</h3>
                <p className="mt-2 text-sm text-navy/70">{c.text}</p>
                <p className="mt-4 text-sm font-medium text-navy/60">{c.sports.map((s) => s.name).join(" · ")}</p>
              </div>
            </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-soft">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div>
            <Reveal className="mb-6 flex items-end justify-between">
              <h2 className="text-3xl font-bold">Aktuelles</h2>
              <Link href="/aktuelles" className="text-sm font-semibold text-brand hover:underline">Alle Meldungen →</Link>
            </Reveal>
            {news.length === 0 && <p className="text-navy/60">Zurzeit gibt es keine Neuigkeiten.</p>}
            <ul className="grid gap-4 md:grid-cols-3">
              {news.map((n, i) => (
                <Reveal as="li" key={n.date + n.title} delay={i * 130} className="group relative rounded-xl border border-black/10 bg-white p-5 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                  <time dateTime={n.date} className="text-xs font-medium text-brand">{formatDate(n.date)}</time>
                  <p className="mt-1 font-semibold [overflow-wrap:anywhere] hyphens-auto transition-colors group-hover:text-brand">{n.title}</p>
                  <p className="mt-1 line-clamp-3 text-sm text-navy/70">{n.text}</p>
                  {n.slug && <Link href={`/aktuelles/${n.slug}`} className="mt-2 inline-block text-sm font-semibold text-brand after:absolute after:inset-0 group-hover:underline">Weiterlesen →</Link>}
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <Reveal dir="zoom" className="rounded-2xl bg-brand px-8 py-12 text-center text-white">
          <h2 className="text-3xl font-bold sm:text-4xl">Probetraining? Komm vorbei!</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/90">Schnuppern ist jederzeit kostenlos und unverbindlich möglich.</p>
          <Link href="/kontakt" className="mt-6 inline-block rounded-md bg-white px-6 py-3 font-semibold text-brand hover:bg-soft">
            Kontakt aufnehmen
          </Link>
        </Reveal>
      </section>

      <Sponsors />
    </>
  );
}
