import type { MetadataRoute } from "next";
import { categories } from "@/lib/data";
import { getNews } from "@/lib/sanity";

const base = "https://www.bbsv-sport.de";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const news = await getNews();
  const pages = ["", "/sportangebote", "/verein/ueber-uns", "/verein/trainer", "/verein/trainingsangebote", "/verein/mitgliedschaft", "/aktuelles", "/kontakt", "/impressum", "/datenschutz"];

  return [
    ...pages.map((p) => ({ url: `${base}${p}`, priority: p === "" ? 1 : 0.7 })),
    ...categories.flatMap((c) => [
      { url: `${base}/sportangebote/${c.slug}`, priority: 0.8 },
      ...c.sports.map((s) => ({ url: `${base}/sportangebote/${c.slug}/${s.slug}`, priority: 0.6 })),
    ]),
    ...news.filter((n) => n.slug).map((n) => ({ url: `${base}/aktuelles/${n.slug}`, lastModified: n.date, priority: 0.5 })),
  ];
}
