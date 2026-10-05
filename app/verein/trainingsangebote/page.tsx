import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { categories } from "@/lib/data";

export const metadata: Metadata = { title: "Trainingsangebote" };

export default function Trainingsangebote() {
  return (
    <>
      <PageHero title="Trainingsangebot" subtitle="Unsere Trainingsangebote im Überblick." />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <p className="max-w-3xl text-lg leading-relaxed text-navy/80">
          Wir bieten ein vielfältiges Trainingsangebot in den Bereichen Kampfkunst (Karate, Kobudo, Selbstverteidigung), Fitness (Aerobic / Step-Aerobic /
          Bauch-Beine-Po) und Gesundheit (Koronarsport, Multiple Sklerose Sport, Pilates, Seniorensport, Yoga).
        </p>

        {categories.map((c) => (
          <div key={c.slug} className="mt-14">
            <h2 className="mb-6 border-b-2 border-brand pb-2 text-3xl font-bold">
              <span aria-hidden>{c.emoji}</span> {c.name}
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {c.sports.map((s) => (
                <article key={s.slug} className="flex flex-col rounded-xl border border-black/10 p-6">
                  <h3 className="text-xl font-bold">{s.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/75">{s.text}</p>
                  <Link href={`/sportangebote/${c.slug}/${s.slug}`} className="mt-5 inline-block self-start rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white hover:bg-brand-dark">
                    Mehr Erfahren
                  </Link>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
