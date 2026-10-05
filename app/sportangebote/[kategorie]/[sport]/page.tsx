import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { categories, getCategory, getSport, trainersFor } from "@/lib/data";

type Props = { params: Promise<{ kategorie: string; sport: string }> };

export function generateStaticParams() {
  return categories.flatMap((c) => c.sports.map((s) => ({ kategorie: c.slug, sport: s.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { kategorie, sport } = await params;
  const s = getSport(kategorie, sport);
  return { title: s?.name ?? "Sportangebot", description: s?.text };
}

export default async function SportPage({ params }: Props) {
  const { kategorie, sport } = await params;
  const cat = getCategory(kategorie);
  const s = getSport(kategorie, sport);
  if (!cat || !s) notFound();
  const trainers = trainersFor(s.slug);

  return (
    <>
      <PageHero title={s.name} subtitle={cat.name} />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-3">
        <div className="md:col-span-2">
          <nav aria-label="Brotkrumen" className="mb-6 text-sm text-navy/60">
            <Link href="/sportangebote" className="hover:text-brand">Sportangebote</Link> /{" "}
            <Link href={`/sportangebote/${cat.slug}`} className="hover:text-brand">{cat.name}</Link> / {s.name}
          </nav>
          <p className="text-lg leading-relaxed text-navy/80">{s.text}</p>
        </div>
        <aside className="h-fit rounded-xl bg-soft p-6">
          {trainers.length > 0 && (
            <>
              <h2 className="text-xl font-bold">{trainers.length > 1 ? "Trainer" : "Trainer*in"}</h2>
              <ul className="mt-4 space-y-3 text-sm">
                {trainers.map((t) => (
                  <li key={t.name} className="flex items-center gap-3">
                    <Image src={t.photo} alt="" width={96} height={96} className="h-12 w-12 rounded-full object-cover object-top" />
                    <span>
                      <span className="block font-semibold">{t.name}</span>
                      {t.role && <span className="text-navy/60">{t.role}</span>}
                    </span>
                  </li>
                ))}
              </ul>
            </>
          )}
          <p className="mt-5 text-sm text-navy/70">Trainingszeiten und Orte erfährst du auf Anfrage.</p>
          <Link href="/kontakt" className="mt-4 block rounded-md bg-brand px-4 py-3 text-center font-semibold text-white hover:bg-brand-dark">
            Probetraining anfragen
          </Link>
        </aside>
      </section>
    </>
  );
}
