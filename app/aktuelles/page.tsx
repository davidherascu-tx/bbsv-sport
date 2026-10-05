import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { events, formatDate, news } from "@/lib/data";

export const metadata: Metadata = { title: "Aktuelles" };

export default function Aktuelles() {
  return (
    <>
      <PageHero title="Aktuelles" subtitle="Neuigkeiten und Termine aus dem Vereinsleben." />
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <h2 className="text-3xl font-bold">Neuigkeiten</h2>
          {news.map((n) => (
            <article key={n.date + n.title} className="rounded-xl border border-black/10 p-6">
              <time dateTime={n.date} className="text-sm font-medium text-brand">{formatDate(n.date)}</time>
              <h3 className="mt-1 font-sans! text-xl font-bold normal-case">{n.title}</h3>
              <p className="mt-2 text-navy/75">{n.text}</p>
            </article>
          ))}
        </div>
        <aside>
          <h2 className="mb-6 text-3xl font-bold">Termine</h2>
          <ul className="divide-y divide-black/10 rounded-xl border border-black/10">
            {events.map((e) => (
              <li key={e.date + e.title} className="p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-brand">{e.kat}</span>
                <p className="font-semibold">{e.title}</p>
                <p className="text-sm text-navy/70">
                  <time dateTime={e.date}>{formatDate(e.date)}</time> · {e.ort}
                </p>
              </li>
            ))}
          </ul>
        </aside>
      </section>
    </>
  );
}
