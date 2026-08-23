import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Newspaper,
} from "lucide-react";

import { prisma } from "@/lib/prisma";

export default async function NewsPage() {
  const news = await prisma.news.findMany({
    orderBy: {
      publishedAt: "desc",
    },
    include: {
      translations: {
        where: {
          language: "EN",
        },
        take: 1,
      },
      media: {
        orderBy: {
          sortOrder: "asc",
        },
        take: 1,
        include: {
          media: true,
        },
      },
    },
  });


  console.log("news media file: ",news[1].media[0].media.fileUrl)

  return (
    <main className="min-h-screen bg-slate-50">
      {/* =========================================================
          HEADER / BRAND
      ========================================================= */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-4"
          >
            <div className="relative h-16 w-32 sm:h-20 sm:w-40">
              <Image
                src="/images/shaggar-logo.png"
                alt="Shagar City Administration"
                fill
                priority
                className="object-contain object-left"
                sizes="160px"
              />
            </div>

            <div className="hidden border-l border-slate-200 pl-4 sm:block">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                Sululta Sub-City
              </p>

              <p className="mt-1 text-sm font-semibold text-slate-900">
                Official Portal
              </p>
            </div>
          </Link>

          <Link
            href="/"
            className="hidden items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-slate-950 sm:inline-flex"
          >
            Back to Portal
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </header>

      {/* =========================================================
          PAGE INTRO
      ========================================================= */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white">
              <Newspaper className="size-4" />
              News & Updates
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Latest News
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Stay informed about the latest developments, announcements,
              projects, public services, and activities of Sululta Sub-City.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          NEWS LIST
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
        {news.length === 0 ? (
          <div className="flex min-h-[360px] flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white px-6 text-center">
            <div className="flex size-16 items-center justify-center rounded-2xl bg-slate-50 ring-1 ring-slate-200">
              <Newspaper className="size-7 text-slate-400" />
            </div>

            <h2 className="mt-5 text-xl font-semibold text-slate-950">
              No news available
            </h2>

            <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
              There are no published news articles at the moment. Please check
              back later.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {news.map((article) => {
              const translation = article.translations[0];
              const image = article.media[0]?.media;

              if (!translation) {
                return null;
              }

              return (
                <article
                  key={article.id}
                  className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-lg"
                >
                  <div
                    className="grid lg:grid-cols-[380px_1fr]"
                  >
                    {/* =================================================
                        IMAGE
                    ================================================= */}
                    <div className="relative aspect-[16/9] overflow-hidden bg-slate-100 lg:aspect-auto lg:min-h-[270px]">
                      {image ? (
                        // <Image
                        //   src={image.fileUrl}
                        //   alt={translation.title}
                        //   fill
                        //   className="object-cover transition duration-700 group-hover:scale-105"
                        //   sizes="(max-width: 1024px) 100vw, 380px"
                        // />
                        <img src={image.fileUrl} alt={translation.title} sizes="(max-width: 1024px) 100vw, 380px"/>
                      ) : (
                        <div className="flex h-full min-h-[220px] items-center justify-center bg-slate-100">
                          <Newspaper className="size-12 text-slate-300" />
                        </div>
                      )}

                      {/* Image overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-70" />

                      {article.featured && (
                        <div className="absolute left-5 top-5">
                          <span className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-900 shadow-sm backdrop-blur">
                            Featured
                          </span>
                        </div>
                      )}
                    </div>

                    {/* =================================================
                        MESSAGE / CONTENT
                    ================================================= */}
                    <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                      {/* Date */}
                      <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.08em] text-slate-500">
                        <CalendarDays className="size-4" />

                        <time
                          dateTime={
                            article.publishedAt?.toISOString() ??
                            article.createdAt.toISOString()
                          }
                        >
                          {new Intl.DateTimeFormat("en", {
                            dateStyle: "long",
                          }).format(
                            article.publishedAt ?? article.createdAt
                          )}
                        </time>
                      </div>

                      {/* Title */}
                      <h2 className="mt-4 max-w-3xl text-2xl font-bold leading-tight tracking-tight text-slate-950 transition-colors duration-300 group-hover:text-slate-700 sm:text-3xl">
                        {translation.title}
                      </h2>

                      {/* Excerpt */}
                      {translation.excerpt && (
                        <p className="mt-4 max-w-3xl line-clamp-3 text-sm leading-7 text-slate-600 sm:text-base">
                          {translation.excerpt}
                        </p>
                      )}

                      {/* Read more */}
                      <div className="mt-6">
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-950">
                          Read full story
                          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* =========================================================
          FOOTER BRAND
      ========================================================= */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row lg:px-8">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-20">
              <Image
                src="/images/shaggar-logo.png"
                alt="Shagar City"
                fill
                className="object-contain"
                sizes="80px"
              />
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-900">
                Sululta Sub-City
              </p>

              <p className="text-xs text-slate-500">
                Shagar City Administration
              </p>
            </div>
          </div>

          <p className="text-xs text-slate-500">
            Official information and public updates
          </p>
        </div>
      </footer>
    </main>
  );
}