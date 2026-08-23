

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { notFound } from "next/navigation";

import { getNewsBySlug } from "@/lib/news";

type NewsDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function NewsDetailPage({
  params,
}: NewsDetailPageProps) {
  const { slug } = await params;

  const news = await getNewsBySlug(slug, "EN");

  if (!news || news.status !== "PUBLISHED") {
    notFound();
  }

  const translation = news.translations[0];

  if (!translation) {
    notFound();
  }

  const cover = news.media[0]?.media;

  return (
    <main className="min-h-screen bg-white">
      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <Link
          href="/news"
          className="
            inline-flex items-center gap-2
            text-sm font-medium
            text-slate-500
            transition-colors
            hover:text-slate-950
          "
        >
          <ArrowLeft className="size-4" />
          Back to news
        </Link>

        <div className="mt-10">
          {news.publishedAt && (
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <CalendarDays className="size-4" />

              <time dateTime={news.publishedAt.toISOString()}>
                {new Intl.DateTimeFormat("en", {
                  dateStyle: "long",
                }).format(news.publishedAt)}
              </time>
            </div>
          )}

          <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            {translation.title}
          </h1>

          {translation.excerpt && (
            <p className="mt-6 text-lg leading-8 text-slate-600">
              {translation.excerpt}
            </p>
          )}

          {cover?.type === "IMAGE" && (
            <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-3xl bg-slate-100">
              <Image
                src={cover.fileUrl}
                alt={cover.altText ?? translation.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover"
              />
            </div>
          )}

          <div
            className="
              prose prose-slate
              mt-10 max-w-none
              prose-headings:tracking-tight
              prose-p:leading-8
            "
          >
            {translation.content}
          </div>
        </div>
      </article>
    </main>
  );
}