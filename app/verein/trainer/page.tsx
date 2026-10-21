import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { trainerGroups } from "@/lib/data";

export const metadata: Metadata = { title: "Trainer", description: "Die Trainerinnen und Trainer des BBSV Berlin-Brandenburger Sportverein e. V." };

export default function Trainer() {
  return (
    <>
      <PageHero title="Trainer" subtitle="Wir stellen uns vor." />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <p className="max-w-3xl text-lg leading-relaxed text-navy/80">
          Die Trainer unseres Vereins haben ihre Trainer-/Übungsleiterausbildung bei der Europäischen Sportakademie in Brandenburg absolviert. Alle Trainer
          besitzen zusätzlich zu ihrer sportartspezifischen Kompetenz weitere Lizenzen in den Bereichen Breitensport, Fitness, Gesundheit, Prävention und
          Rehabilitation.
        </p>

        {trainerGroups.map((g) => (
          <div key={g.category} className="mt-14">
            <h2 className="mb-6 border-b-2 border-brand pb-2 text-3xl font-bold">{g.category}</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {g.trainers.map((t) => (
                <article key={t.name} className="overflow-hidden rounded-xl border border-black/10 transition-shadow hover:shadow-lg">
                  <Image src={t.photo} alt={t.name} width={500} height={350} className="aspect-10/7 w-full object-cover object-top" />
                  <div className="p-5">
                    <h3 className="font-sans! text-lg font-bold normal-case">{t.name}</h3>
                    {t.role && <p className="text-sm font-semibold text-brand">{t.role}</p>}
                    <p className="mt-1 text-sm text-navy/70">{t.offers}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
