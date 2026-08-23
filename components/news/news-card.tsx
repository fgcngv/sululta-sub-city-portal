

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { NewsItem } from "@/lib/news-data";

type NewsCardProps = {
  article: NewsItem;
};

export function NewsCard({ article }: NewsCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <Link
        href={"/news"}
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-inset"
      >
        <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
          <Image
            src={article.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

        </div>

        <div className="p-5 sm:p-6">
          <div className="flex items-center gap-3 text-xs font-medium text-slate-500">
            <span>{article.category}</span>

            <span
              aria-hidden="true"
              className="size-1 rounded-full bg-slate-300"
            />

            <time dateTime={article.date}>
              {new Intl.DateTimeFormat("en", {
                month: "short",
                day: "numeric",
                year: "numeric",
              }).format(new Date(article.date))}
            </time>
          </div>

          <h3 className="mt-3 text-lg font-semibold leading-7 text-red-700">
            {article.title}
          </h3>

          <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">
            {article.excerpt}
          </p>
        </div>
      </Link>
    </article>
  );
}