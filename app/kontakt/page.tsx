import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { childProtection, club, contactGroups, telHref } from "@/lib/data";

export const metadata: Metadata = { alternates: { canonical: "/kontakt" }, title: "Kontakt", description: "Ansprechpartner, Telefon und E-Mail des BBSV in Berlin-Reinickendorf. Probetraining jederzeit kostenlos möglich." };

const link = "font-medium text-brand hover:underline";

export default function Kontakt() {
  return (
    <>
      <PageHero title="Ihre Ansprechpartner beim BBSV" />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <p className="max-w-3xl text-lg leading-relaxed text-navy/80">
          Bitte nutzen Sie je nach Thema die angegebenen Kontaktdaten. Wir melden uns dann umgehend zurück. Unsere Satzung sowie der Aufnahmeantrag stehen
          übrigens als Download im Bereich{" "}
          <Link href="/verein/mitgliedschaft" className={link}>Mitgliedschaft</Link> zur Verfügung.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          <div className="rounded-2xl bg-navy p-8 text-white lg:col-span-3">
            <h2 className="text-2xl font-bold">Allgemein</h2>
            <p className="mt-3 text-white/75">
              Für allgemeine Anfragen zum Verein, zur Mitgliedschaft, zum Sponsoring und so weiter nutzen Sie bitte die folgenden Kontaktdaten:
            </p>
            <dl className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-[auto_1fr]">
              <dt className="font-semibold text-white/60">E-Mail</dt>
              <dd>
                <a href={`mailto:${club.email}`} className="hover:underline">{club.email}</a> bzw.{" "}
                <a href={`mailto:${club.emailBoard}`} className="hover:underline">{club.emailBoard}</a>
              </dd>
              <dt className="font-semibold text-white/60">Telefon</dt>
              <dd>
                <a href={telHref(club.phone)} className="hover:underline">{club.phone}</a>{" "}
                <span className="text-white/60">({club.phoneNote})</span>
              </dd>
              <dt className="font-semibold text-white/60">Fax</dt>
              <dd>{club.fax}</dd>
            </dl>
          </div>

          <div className="flex gap-5 rounded-2xl border border-black/10 p-6 lg:col-span-2">
            <Image src="/Kinder_Schutz.webp" alt="Kinderschutzsiegel des LSB Berlin 2026–2031" width={500} height={538} className="h-28 w-auto shrink-0 self-start" />
            <div className="min-w-0">
              <h2 className="text-xl font-bold">Kinderschutz&shy;beauftragter</h2>
              <p className="mt-2 font-semibold">{childProtection.name}</p>
              <a href={`mailto:${childProtection.email}`} className={`${link} whitespace-nowrap text-sm`}>{childProtection.email}</a>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {contactGroups.map((g) => (
            <div key={g.title} className="rounded-2xl border border-black/10 p-6">
              <h2 className="text-xl font-bold">{g.title}</h2>
              {g.people.map((p) => (
                <div key={p.name} className="mt-3 text-sm">
                  <p className="font-semibold">{p.name}</p>
                  <p className="text-navy/60">{p.topics}</p>
                  <a href={telHref(p.phone)} className={link}>{p.phone}</a>
                </div>
              ))}
              <p className="mt-3 text-sm">
                <a href={`mailto:${g.email}`} className={link}>{g.email}</a>
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
