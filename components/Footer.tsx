import Image from "next/image";
import Link from "next/link";
import { categories, club, telHref } from "@/lib/data";

const verein = [
  { label: "Über uns", href: "/verein/ueber-uns" },
  { label: "Trainer", href: "/verein/trainer" },
  { label: "Trainingsangebote", href: "/verein/trainingsangebote" },
  { label: "Mitgliedschaft", href: "/verein/mitgliedschaft" },
  { label: "Aktuelles", href: "/aktuelles" },
];

export default function Footer() {
  return (
    <footer className="mt-auto bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-4">
        <div>
          <Image src="/bbsv_logo.png" alt={club.name} width={800} height={231} className="h-14 w-auto brightness-0 invert" />
        </div>
        <div>
          <h3 className="text-base font-bold">Der Verein</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            {verein.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-white">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-base font-bold">Sportangebote</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/sportangebote/${c.slug}`} className="hover:text-white">{c.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-base font-bold">Kontakt</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li><a href={telHref(club.phone)} className="hover:text-white">{club.phone}</a> <span className="text-white/50">({club.phoneNote})</span></li>
            <li><a href={`mailto:${club.email}`} className="hover:text-white">{club.email}</a></li>
            <li><Link href="/kontakt" className="hover:text-white">Kontaktformular</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-white/60 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {club.name}</p>
          <p className="flex gap-4">
            <Link href="/impressum" className="hover:text-white">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-white">Datenschutz</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
