

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { newsItems } from "@/lib/news-data";
import { NewsCard } from "@/components/news/news-card";

type NewsPreviewProps = {
  items?: typeof newsItems;
};

export function NewsPreview({
  items = newsItems,
}: NewsPreviewProps) {
  return (
    <section
      aria-labelledby="latest-news-heading"
      className="bg-slate-50"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Latest updates
            </p>

            <h2
              id="latest-news-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-red-700 sm:text-4xl"
            >
              News & announcements
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Follow the latest news, activities and official announcements
              from Sululta Sub-City.
            </p>
          </div>

          <Link
            href="/news"
            className="text-red-700 inline-flex min-h-11 shrink-0 items-center gap-2 text-sm font-semibold transition-colors hover:text-slate-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-4"
          >
            View all news
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.slice(0, 3).map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}