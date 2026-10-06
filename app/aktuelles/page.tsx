import type { Metadata } from "next";
import NewsList from "@/components/NewsList";
import PageHero from "@/components/PageHero";
import { getNews } from "@/lib/sanity";

export const metadata: Metadata = { title: "Aktuelles" };

export default async function Aktuelles() {
  const news = await getNews();
  return (
    <>
      <PageHero title="Aktuelles" subtitle="Neuigkeiten aus dem Vereinsleben." />
      <section className="mx-auto max-w-4xl px-4 py-16">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Neuigkeiten</h2>
          {news.length === 0 && <p className="text-navy/60">Zurzeit gibt es keine Neuigkeiten.</p>}
          <NewsList news={news} />
        </div>
      </section>
    </>
  );
}
