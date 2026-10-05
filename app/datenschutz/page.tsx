import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { club } from "@/lib/data";

export const metadata: Metadata = { title: "Datenschutz" };

export default function Datenschutz() {
  return (
    <>
      <PageHero title="Datenschutzerklärung" />
      <section className="mx-auto max-w-3xl space-y-4 px-4 py-16 text-navy/80">
        <p className="rounded-md bg-soft p-4 text-sm">Platzhalter – bitte durch eine rechtlich geprüfte Datenschutzerklärung ersetzen.</p>
        <p>Verantwortlich: {club.name} (Postadresse folgt)</p>
        <p>Kontakt: {club.email}</p>
      </section>
    </>
  );
}
