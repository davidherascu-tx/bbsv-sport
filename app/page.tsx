import Link from "next/link";
import Sponsors from "@/components/Sponsors";
import HeroSlider from "@/components/HeroSlider";
import { categories, club, formatDate } from "@/lib/data";
import { getNews } from "@/lib/sanity";

export default async function Home() {
  const news = await getNews(3);
  const sportCount = categories.reduce((n, c) => n + c.sports.length, 0);
  const stats = [
    { v: String(sportCount), l: "Kurse & Sportarten" },
    { v: String(categories.length), l: "Bereiche" },
    { v: "Alle", l: "Altersgruppen" },
  ];

  return (
    <>
      <HeroSlider slides={categories.map((c) => ({ slug: c.slug, name: c.name, text: c.text, banner: c.banner, block: c.block }))} keyVisual="/BBSV_KeyVisual.png" introText={`Der ${club.name} bietet Kampfkunst, Gesundheits- und Fitnesssport für Kinder, Jugendliche und Erwachsene – mit Leidenschaft und Gemeinschaft.`} />

      <section className="border-b border-black/10 bg-soft">
        <dl className="mx-auto grid max-w-6xl grid-cols-3 gap-6 px-4 py-10 text-center">
          {stats.map((s) => (
            <div key={s.l}>
              <dd className="font-display text-4xl font-bold text-brand">{s.v}</dd>
              <dt className="text-sm text-navy/70">{s.l}</dt>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="mb-8 text-3xl font-bold">Unsere Sportangebote</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((c) => (
            <Link key={c.slug} href={`/sportangebote/${c.slug}`} className="group rounded-xl border border-black/10 p-6 transition-shadow hover:shadow-lg">
              <div className="text-4xl" aria-hidden>{c.emoji}</div>
              <h3 className="mt-4 text-2xl font-bold group-hover:text-brand">{c.name}</h3>
              <p className="mt-2 text-sm text-navy/70">{c.text}</p>
              <p className="mt-4 text-sm font-medium text-navy/60">{c.sports.map((s) => s.name).join(" · ")}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-soft">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div>
            <div className="mb-6 flex items-end justify-between">
              <h2 className="text-3xl font-bold">Aktuelles</h2>
              <Link href="/aktuelles" className="text-sm font-semibold text-brand hover:underline">Alle Meldungen →</Link>
            </div>
            {news.length === 0 && <p className="text-navy/60">Zurzeit gibt es keine Neuigkeiten.</p>}
            <ul className="grid gap-4 md:grid-cols-3">
              {news.map((n) => (
                <li key={n.date + n.title} className="group relative rounded-xl border border-black/10 bg-white p-5 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                  <time dateTime={n.date} className="text-xs font-medium text-brand">{formatDate(n.date)}</time>
                  <p className="mt-1 font-semibold [overflow-wrap:anywhere] hyphens-auto transition-colors group-hover:text-brand">{n.title}</p>
                  <p className="mt-1 line-clamp-3 text-sm text-navy/70">{n.text}</p>
                  {n.slug && <Link href={`/aktuelles/${n.slug}`} className="mt-2 inline-block text-sm font-semibold text-brand after:absolute after:inset-0 group-hover:underline">Weiterlesen →</Link>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-2xl bg-brand px-8 py-12 text-center text-white">
          <h2 className="text-3xl font-bold sm:text-4xl">Probetraining? Komm vorbei!</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/90">Schnuppern ist jederzeit kostenlos und unverbindlich möglich.</p>
          <Link href="/kontakt" className="mt-6 inline-block rounded-md bg-white px-6 py-3 font-semibold text-brand hover:bg-soft">
            Kontakt aufnehmen
          </Link>
        </div>
      </section>

      <Sponsors />
    </>
  );
}
