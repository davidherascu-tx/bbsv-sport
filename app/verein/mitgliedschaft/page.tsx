import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { downloads } from "@/lib/data";

export const metadata: Metadata = { title: "Mitgliedschaft" };

export default function Mitgliedschaft() {
  return (
    <>
      <PageHero title="Mitgliedschaft" subtitle="Werde Teil des BBSV." />
      <section className="mx-auto max-w-4xl px-4 py-16">
        <p className="text-lg leading-relaxed text-navy/80">
          Nachfolgend finden Sie unsere Satzung, Beitrags- und Gebührenordnung sowie den Aufnahmeantrag des Vereins als unverbindlichen PDF-Download. Den
          ausgefüllten Aufnahmeantrag können Sie uns unterschrieben per Post zusenden oder persönlich beim jeweiligen Trainer abgeben.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-3">
          {downloads.map((d) => (
            <li key={d.href}>
              <a
                href={d.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col items-start gap-4 rounded-xl border border-black/10 p-6 transition hover:-translate-y-0.5 hover:border-brand hover:shadow-lg"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand/10 text-brand" aria-hidden>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" />
                  </svg>
                </span>
                <span className="font-semibold text-navy group-hover:text-brand">{d.label}</span>
                <span className="text-xs text-navy/50">PDF herunterladen</span>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-12 text-navy/70">
          Fragen zur Mitgliedschaft? <Link href="/kontakt" className="font-semibold text-brand hover:underline">Schreib uns</Link>.
        </p>
      </section>
    </>
  );
}
