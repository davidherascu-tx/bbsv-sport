import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { categories, getCategory, getSport, trainersFor } from "@/lib/data";
import { sportLocations } from "@/lib/karate-locations";

type Props = { params: Promise<{ kategorie: string; sport: string }> };

export function generateStaticParams() {
  return categories.flatMap((c) => c.sports.map((s) => ({ kategorie: c.slug, sport: s.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { kategorie, sport } = await params;
  const s = getSport(kategorie, sport);
  return { title: s?.name ?? "Sportangebot", description: s?.text, alternates: { canonical: `/sportangebote/${kategorie}/${sport}` } };
}

export default async function SportPage({ params }: Props) {
  const { kategorie, sport } = await params;
  const cat = getCategory(kategorie);
  const s = getSport(kategorie, sport);
  if (!cat || !s) notFound();
  const trainers = trainersFor(s.slug);
  const locations = sportLocations[s.slug] ?? [];

  return (
    <>
      <PageHero title={s.name} subtitle={cat.name} image={cat.banner} />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-3">
        <div className="md:col-span-2">
          <nav aria-label="Brotkrumen" className="mb-6 text-sm text-navy/60">
            <Link href="/sportangebote" className="hover:text-brand">Sportangebote</Link> /{" "}
            <Link href={`/sportangebote/${cat.slug}`} className="hover:text-brand">{cat.name}</Link> / {s.name}
          </nav>
          {s.image && <Image src={s.image} alt={s.name} width={500} height={350} className="mb-6 h-auto w-full max-w-md rounded-xl" />}
          <p className="text-lg leading-relaxed text-navy/80">{s.text}</p>
          {locations.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold">Trainingsorte und -zeiten</h2>
              {(["Berlin", "Brandenburg"] as const).filter((r) => locations.some((l) => l.region === r)).map((region) => (
                <div key={region} className="mt-8">
                  <h3 className="text-xl font-bold text-brand">{region}</h3>
                  <div className="mt-4 grid gap-5">
                    {locations
                      .filter((l) => l.region === region)
                      .map((l) => (
                        <article key={l.venue} className="rounded-xl border border-navy/10 p-5">
                          <p className="text-sm font-semibold uppercase tracking-wide text-navy/60">{l.district}</p>
                          <h4 className="text-lg font-bold">{l.venue}</h4>
                          <p className="text-sm text-navy/70">{l.address}</p>
                          <div className="mt-4 space-y-4 text-sm">
                            {l.schedule.map((d) => (
                              <div key={d.days}>
                                <p className="font-semibold">{d.days}</p>
                                <ul className="mt-1 space-y-0.5">
                                  {d.slots.map((sl) => (
                                    <li key={sl.time}>
                                      {sl.time}
                                      {sl.note && <span className="text-navy/60"> – {sl.note}</span>}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                          <p className="mt-4 text-sm">
                            <span className="font-semibold">Trainer:</span> {l.trainers.join(", ")}
                          </p>
                        </article>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          )}
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
                    </span>
                  </li>
                ))}
              </ul>
            </>
          )}
          {locations.length === 0 && <p className="mt-5 text-sm text-navy/70">Trainingszeiten und Orte erfährst du auf Anfrage.</p>}
          <Link href="/kontakt" className="mt-4 block rounded-md bg-brand px-4 py-3 text-center font-semibold text-white hover:bg-brand-dark">
            Probetraining anfragen
          </Link>
        </aside>
      </section>
    </>
  );
}
