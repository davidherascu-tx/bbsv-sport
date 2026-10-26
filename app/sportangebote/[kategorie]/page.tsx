import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { categories, getCategory } from "@/lib/data";

type Props = { params: Promise<{ kategorie: string }> };

export function generateStaticParams() {
  return categories.map((c) => ({ kategorie: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { kategorie } = await params;
  const cat = getCategory(kategorie);
  return { title: cat?.name ?? "Sportangebote", description: cat?.text, alternates: { canonical: `/sportangebote/${kategorie}` } };
}

export default async function Kategorie({ params }: Props) {
  const { kategorie } = await params;
  const cat = getCategory(kategorie);
  if (!cat) notFound();

  return (
    <>
      <PageHero title={cat.name} subtitle={cat.text} image={cat.banner} />
      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-16 md:grid-cols-2">
        {cat.sports.map((s) => (
          <Link key={s.slug} href={`/sportangebote/${cat.slug}/${s.slug}`} className="group flex flex-col rounded-xl border border-black/10 p-6 transition-shadow hover:shadow-lg">
            {s.image && <Image src={s.image} alt="" width={500} height={350} className="-mx-6 -mt-6 mb-5 max-w-none rounded-t-xl object-cover" style={{ width: "calc(100% + 3rem)" }} />}
            <h2 className="text-2xl font-bold group-hover:text-brand">{s.name}</h2>
            <p className="mt-3 line-clamp-4 flex-1 text-sm leading-relaxed text-navy/70">{s.text}</p>
            <span className="mt-4 text-sm font-semibold text-brand">Mehr Erfahren →</span>
          </Link>
        ))}
      </section>
    </>
  );
}
