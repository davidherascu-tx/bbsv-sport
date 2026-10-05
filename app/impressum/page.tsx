import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { club } from "@/lib/data";

export const metadata: Metadata = { title: "Impressum" };

export default function Impressum() {
  return (
    <>
      <PageHero title="Impressum" />
      <section className="mx-auto max-w-3xl space-y-4 px-4 py-16 text-navy/80">
        <p className="rounded-md bg-soft p-4 text-sm">Platzhalter – bitte durch rechtlich geprüfte Angaben ersetzen (Vorstand, Registergericht, Vereinsregisternummer).</p>
        <p>
          {club.name}
          <br />
          (Postadresse folgt)
        </p>
        <p>E-Mail: {club.email}</p>
      </section>
    </>
  );
}
