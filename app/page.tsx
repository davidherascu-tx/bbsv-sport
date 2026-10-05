import Link from "next/link";
import { categories, club, events, formatDate, news } from "@/lib/data";

export default function Home() {
  const sportCount = categories.reduce((n, c) => n + c.sports.length, 0);
  const stats = [
    { v: String(sportCount), l: "Kurse & Sportarten" },
    { v: String(categories.length), l: "Bereiche" },
    { v: "Alle", l: "Altersgruppen" },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand/30 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:py-32">
          <p className="mb-4 inline-block bg-brand px-3 py-1 text-sm font-semibold uppercase tracking-widest">Sport verbindet</p>
          <h1 className="max-w-3xl text-5xl font-bold leading-tight sm:text-7xl">Gemeinsam bewegen in Berlin &amp; Brandenburg</h1>
          <p className="mt-6 max-w-xl text-lg text-white/80">
            Der {club.name} bietet Kampfkunst, Gesundheits- und Fitnesssport für Kinder, Jugendliche und Erwachsene – mit Leidenschaft und Gemeinschaft.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/verein/mitgliedschaft" className="rounded-md bg-brand px-6 py-3 font-semibold transition-colors hover:bg-brand-dark">
              Mitglied werden
            </Link>
            <Link href="/sportangebote" className="rounded-md border border-white/40 px-6 py-3 font-semibold transition-colors hover:bg-white/10">
              Sportangebote entdecken
            </Link>
          </div>
        </div>
      </section>

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
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2">
          <div>
            <div className="mb-6 flex items-end justify-between">
              <h2 className="text-3xl font-bold">Aktuelles</h2>
              <Link href="/aktuelles" className="text-sm font-semibold text-brand hover:underline">Alle Meldungen →</Link>
            </div>
            <ul className="space-y-4">
              {news.slice(0, 2).map((n) => (
                <li key={n.date + n.title} className="rounded-xl border border-black/10 bg-white p-5">
                  <time dateTime={n.date} className="text-xs font-medium text-brand">{formatDate(n.date)}</time>
                  <p className="mt-1 font-semibold">{n.title}</p>
                  <p className="mt-1 text-sm text-navy/70">{n.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-3xl font-bold">Termine</h2>
            <ul className="divide-y divide-black/10 rounded-xl border border-black/10 bg-white">
              {events.slice(0, 3).map((e) => (
                <li key={e.date + e.title} className="p-5">
                  <time dateTime={e.date} className="text-xs font-medium text-brand">{formatDate(e.date)}</time>
                  <p className="font-semibold">{e.title}</p>
                  <p className="text-sm text-navy/60">{e.ort}</p>
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
    </>
  );
}
