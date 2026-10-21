import { createClient } from "next-sanity";
import { news as staticNews } from "./data";
import { apiVersion, dataset, projectId, sanityConfigured } from "@/sanity/env";

export type Img = { url: string; width: number; height: number; alt?: string; caption?: string };
export type FileLink = { title: string; url: string; name?: string; size?: number };
export type NewsItem = { slug?: string; date: string; title: string; text: string; image?: Img | null; files?: FileLink[]; gallery?: Img[]; moreImages?: Img[] };

const client = sanityConfigured ? createClient({ projectId, dataset, apiVersion, useCdn: false }) : null;

// Neue Inhalte erscheinen spätestens nach einer Minute auf der Website.
const revalidate = { next: { revalidate: 60 } };

const IMG = `"url": asset->url, "width": asset->metadata.dimensions.width, "height": asset->metadata.dimensions.height`;

export async function getNews(limit?: number): Promise<NewsItem[]> {
  if (!client) return staticNews.slice(0, limit);
  try {
    return await client.fetch<NewsItem[]>(
      `*[_type == "post" && defined(slug.current) && (!defined(publishAt) || publishAt <= now())] | order(date desc, _createdAt desc)[0...$limit]{
        "slug": slug.current, date, title, text,
        "image": image{ ${IMG}, alt }
      }`,
      { limit: limit ?? 100 },
      revalidate,
    );
  } catch {
    return staticNews.slice(0, limit);
  }
}

export async function getPost(slug: string): Promise<NewsItem | null> {
  if (!client) return null;
  try {
    return await client.fetch<NewsItem | null>(
      `*[_type == "post" && slug.current == $slug && (!defined(publishAt) || publishAt <= now())][0]{
        "slug": slug.current, date, title, text,
        "image": image{ ${IMG}, alt },
        "moreImages": moreImages[defined(asset)]{ ${IMG} },
        "files": files[defined(file.asset)]{ title, "url": file.asset->url, "name": file.asset->originalFilename, "size": file.asset->size },
        "gallery": gallery[defined(asset)]{ ${IMG}, alt, caption }
      }`,
      { slug },
      revalidate,
    );
  } catch {
    return null;
  }
}
