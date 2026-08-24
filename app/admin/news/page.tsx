
import Link from "next/link";
import {
  FileText,
  Plus,
  Search,
  MoreHorizontal,
  Pencil,
  Trash2,
  Eye,
} from "lucide-react";

import { prisma } from "@/lib/prisma";

const statusStyles = {
  DRAFT: "bg-slate-100 text-slate-700",
  PUBLISHED: "bg-emerald-50 text-emerald-700",
  ARCHIVED: "bg-amber-50 text-amber-700",
} as const;

export default async function NewsPage() {
  const news = await prisma.news.findMany({
    orderBy: {
      createdAt: "desc",
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
      createdBy: {
        select: {
          firstName: true,
          lastName: true,
          email: true,
        },
      },
    },
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <FileText className="size-5 text-slate-500" />
            <h1 className="text-2xl font-bold tracking-tight text-slate-950">
              News
            </h1>
          </div>

          <p className="mt-1 text-sm text-slate-500">
            Create, manage, and publish news articles.
          </p>
        </div>

        <Link
          href="/admin/news/new"
          className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
        >
          <Plus className="size-4" />
          Create News
        </Link>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />

          <input
            type="search"
            placeholder="Search news..."
            className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-900/10"
          />
        </div>

        <select
          defaultValue="ALL"
          className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-900/10"
        >
          <option value="ALL">All status</option>
          <option value="PUBLISHED">Published</option>
          <option value="DRAFT">Draft</option>
          <option value="ARCHIVED">Archived</option>
        </select>
      </div>

      {/* News table */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
        {news.length === 0 ? (
          <div className="flex flex-col items-center justify-center px-6 py-20 text-center">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-slate-100">
              <FileText className="size-6 text-slate-500" />
            </div>

            <h2 className="mt-4 text-base font-semibold text-slate-950">
              No news articles yet
            </h2>

            <p className="mt-1 max-w-sm text-sm text-slate-500">
              Create your first news article to start publishing content.
            </p>

            <Link
              href="/admin/news/new"
              className="mt-5 inline-flex h-10 items-center gap-2 rounded-xl bg-slate-900 px-4 text-sm font-semibold text-white hover:bg-slate-800"
            >
              <Plus className="size-4" />
              Create News
            </Link>
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {news.map((article) => {
              const translation = article.translations[0];
              const image = article.media[0]?.media;
              const authorName =
                [article.createdBy.firstName, article.createdBy.lastName]
                  .filter(Boolean)
                  .join(" ") || article.createdBy.email;

              return (
                <div
                  key={article.id}
                  className="group flex flex-col gap-4 p-4 transition hover:bg-slate-50/70 sm:flex-row sm:items-center"
                >
                  {/* Image */}
                  <div className="relative h-24 w-full shrink-0 overflow-hidden rounded-xl bg-slate-100 sm:w-40">
                    {image ? (
                      <img
                        src={image.fileUrl}
                        alt={translation?.title ?? article.slug}
                        
                        className="object-cover"
                        sizes="160px"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <FileText className="size-7 text-slate-300" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                          statusStyles[article.status]
                        }`}
                      >
                        {article.status}
                      </span>

                      {article.featured && (
                        <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-blue-700">
                          Featured
                        </span>
                      )}
                    </div>

                    <h2 className="mt-2 truncate text-sm font-semibold text-slate-950">
                      {translation?.title ?? "Untitled news"}
                    </h2>

                    <p className="mt-1 line-clamp-1 text-xs text-slate-500">
                      {translation?.excerpt ?? "No excerpt available."}
                    </p>

                    <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400">
                      <span>{authorName}</span>
                      <span>•</span>
                      <span>
                        {new Intl.DateTimeFormat("en", {
                          dateStyle: "medium",
                        }).format(article.createdAt)}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex shrink-0 items-center gap-1">
                  <div
                      className="inline-flex size-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-950"
                    >
                      <Pencil className="size-4" />
                    </div>
                    {/* <Link
                      href={`/admin/news/${article.id}`}
                      aria-label={`Edit ${translation?.title ?? "news"}`}
                      className="inline-flex size-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-950"
                    >
                      <Pencil className="size-4" />
                    </Link> */}

                    {article.status === "PUBLISHED" && (
                      // <Link
                      //   href={`/news/${article.slug}`}
                      //   target="_blank"
                      //   aria-label="View published news"
                      //   className="inline-flex size-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-950"
                      // >
                      //   <Eye className="size-4" />
                      // </Link>
                      <div
                      className="inline-flex size-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-950"
                    >
                      <Eye className="size-4" />
                    </div>
                    )}

                    <button
                      type="button"
                      aria-label={`More actions for ${
                        translation?.title ?? "news"
                      }`}
                      className="inline-flex size-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-950"
                    >
                      <MoreHorizontal className="size-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}