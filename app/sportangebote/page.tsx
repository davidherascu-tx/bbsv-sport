import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { categories } from "@/lib/data";

export const metadata: Metadata = { alternates: { canonical: "/sportangebote" }, title: "Sportangebote", description: "Kampfkunst, Gesundheitssport und Fitness beim BBSV Berlin: alle Kurse und Sportarten im Überblick." };

export default function Sportangebote() {
  return (
    <>
      <PageHero title="Sportangebote" subtitle="Kampfkunst, Gesundheit und Fitness – finde das passende Angebot für dich." />
      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-16 md:grid-cols-3">
        {categories.map((c) => (
          <div key={c.slug} className="rounded-xl border border-black/10 p-6">
            <div className="text-4xl" aria-hidden>{c.emoji}</div>
            <h2 className="mt-3 text-2xl font-bold">
              <Link href={`/sportangebote/${c.slug}`} className="hover:text-brand">{c.name}</Link>
            </h2>
            <p className="mt-2 text-sm text-navy/70">{c.text}</p>
            <ul className="mt-4 space-y-1 text-sm">
              {c.sports.map((s) => (
                <li key={s.slug}>
                  <Link href={`/sportangebote/${c.slug}/${s.slug}`} className="font-medium text-brand hover:underline">{s.name} →</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </>
  );
}
