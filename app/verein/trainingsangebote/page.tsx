import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import { categories } from "@/lib/data";

export const metadata: Metadata = { title: "Trainingsangebote", description: "Trainingszeiten und Orte aller Kurse des BBSV Berlin." };

export default function Trainingsangebote() {
  return (
    <>
      <PageHero title="Trainingsangebot" subtitle="Unsere Trainingsangebote im Überblick." />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <p className="max-w-3xl text-lg leading-relaxed text-navy/80">
          Wir bieten ein vielfältiges Trainingsangebot in den Bereichen Kampfkunst (Karate, Selbstverteidigung), Fitness (Aerobic / Step-Aerobic /
          Bauch-Beine-Po) und Gesundheit (Koronarsport, Multiple Sklerose Sport, Pilates, Seniorensport, Yoga).
        </p>

        {categories.map((c) => (
          <div key={c.slug} className="mt-14">
            <h2 className="mb-6 flex items-center gap-3 border-b-2 border-brand pb-3 text-3xl font-bold">
              <Image src={c.icon} alt="" width={143} height={143} className="h-11 w-11 shrink-0 rounded-lg" />
              {c.name}
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {c.sports.map((s, i) => (
                <Reveal key={s.slug} delay={(i % 2) * 120} className="h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-xl border border-black/10 p-6">
                  {s.image && <Image src={s.image} alt="" width={500} height={350} className="-mx-6 -mt-6 mb-4 max-w-none rounded-t-xl object-cover" style={{ width: "calc(100% + 3rem)" }} />}
                  <h3 className="text-xl font-bold">{s.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/75">{s.text}</p>
                  <Link href={`/sportangebote/${c.slug}/${s.slug}`} className="mt-5 inline-block self-start rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white hover:bg-brand-dark">
                    Mehr Erfahren
                  </Link>
                </article>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
