"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Reveal from "./Reveal";
import { formatDate } from "@/lib/data";
import type { NewsItem } from "@/lib/sanity";

const PAGE = 5;

export default function NewsList({ news }: { news: NewsItem[] }) {
  const [visible, setVisible] = useState(PAGE);
  const shown = news.slice(0, visible);
  const rest = news.length - shown.length;

  return (
    <>
      {shown.map((n, i) => (
        <Reveal key={(n.slug ?? "") + n.date + n.title} delay={(i % PAGE) * 90}>
        <article className="group relative flex overflow-hidden rounded-xl border border-black/10 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg">
          {n.image && (
            <div className="relative w-28 shrink-0 self-stretch overflow-hidden sm:w-44">
              <Image src={n.image.url} alt={n.image.alt ?? ""} fill sizes="(min-width: 640px) 176px, 112px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
          )}
          <div className="min-w-0 flex-1 p-5">
            <time dateTime={n.date} className="text-sm font-medium text-brand">{formatDate(n.date)}</time>
            <h3 className="mt-1 font-sans! text-lg font-bold normal-case [overflow-wrap:anywhere] hyphens-auto transition-colors group-hover:text-brand sm:text-xl">{n.title}</h3>
            <p className="mt-2 line-clamp-3 text-sm text-navy/75">{n.text}</p>
            {n.slug && (
              <Link href={`/aktuelles/${n.slug}`} className="mt-3 inline-block text-sm font-semibold text-brand after:absolute after:inset-0 group-hover:underline">
                Weiterlesen →
              </Link>
            )}
          </div>
        </article>
        </Reveal>
      ))}

      {rest > 0 && (
        <div className="pt-2 text-center">
          <button
            type="button"
            onClick={() => setVisible((v) => v + PAGE)}
            className="rounded-full border-2 border-brand px-6 py-3 font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
          >
            Weitere Beiträge anzeigen ({rest})
          </button>
        </div>
      )}
    </>
  );
}
