import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import FormattedText from "@/components/FormattedText";
import Gallery from "@/components/Gallery";
import PageHero from "@/components/PageHero";
import { formatDate } from "@/lib/data";
import { getPost } from "@/lib/sanity";

export const revalidate = 60;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  return { title: post?.title ?? "Aktuelles", description: post?.text.slice(0, 160), alternates: { canonical: `/aktuelles/${slug}` } };
}

function downloadName(title: string, original?: string) {
  const ext = original?.match(/.[A-Za-z0-9]+$/)?.[0] ?? "";
  const base = title.trim().replace(/[\/:*?"<>|]+/g, "").replace(/s+/g, " ");
  return (base || original?.replace(/.[^.]+$/, "") || "download") + ext;
}

function fileSize(bytes?: number) {
  if (!bytes) return "";
  return bytes < 1024 * 1024 ? `${Math.max(1, Math.round(bytes / 1024))} KB` : `${(bytes / 1024 / 1024).toFixed(1).replace(".", ",")} MB`;
}

export default async function Beitrag({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <>
      <PageHero title={post.title} subtitle={formatDate(post.date)} />
      <article className="mx-auto max-w-3xl px-4 py-16">
        <Link href="/aktuelles" className="text-sm font-semibold text-brand hover:underline">
          ← Alle Meldungen
        </Link>

        {post.image && (
          <Image
            src={post.image.url}
            alt={post.image.alt ?? ""}
            width={post.image.width}
            height={post.image.height}
            priority
            sizes="(min-width: 768px) 768px, 100vw"
            className="mt-6 h-auto w-full rounded-2xl"
          />
        )}

        <FormattedText text={post.text} className="mt-8 text-lg leading-relaxed text-navy/80" />

        {post.moreImages && post.moreImages.length > 0 && (
          <div className="mt-8 grid grid-cols-2 items-start gap-3 sm:gap-4">
            {post.moreImages.map((img) => (
              <Image
                key={img.url}
                src={img.url}
                alt=""
                width={img.width}
                height={img.height}
                sizes="(min-width: 768px) 384px, 50vw"
                className="h-auto w-full rounded-xl"
              />
            ))}
          </div>
        )}

        {post.files && post.files.length > 0 && (
          <div className="mt-10">
            <h2 className="mb-4 text-2xl font-bold">Downloads</h2>
            <ul className="flex flex-wrap gap-3">
              {post.files.map((f, i) => (
                <li key={`${f.url}-${i}`}>
                  <a
                    href={`${f.url}?dl=${encodeURIComponent(downloadName(f.title, f.name))}`}
                    className="inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 font-semibold text-white transition-colors hover:bg-brand-dark"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" />
                    </svg>
                    {f.title}
                    {f.size ? <span className="text-sm font-normal text-white/75">({fileSize(f.size)})</span> : null}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {post.gallery && post.gallery.length > 0 && (
          <div className="mt-12">
            <h2 className="mb-4 text-2xl font-bold">Bildergalerie</h2>
            <Gallery images={post.gallery} />
          </div>
        )}
      </article>
    </>
  );
}
