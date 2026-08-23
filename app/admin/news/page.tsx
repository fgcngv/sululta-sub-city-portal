

// // import Link from "next/link";
// // import {
// //   Archive,
// //   ArrowUpRight,
// //   FileText,
// //   Plus,
// //   Star,
// // } from "lucide-react";

// // import { prisma } from "@/lib/prisma";

// // export default async function NewsPage() {
// //   const news = await prisma.news.findMany({
// //     include: {
// //       translations: {
// //         where: {
// //           language: "EN",
// //         },
// //         take: 1,
// //       },
// //     },
// //     orderBy: {
// //       createdAt: "desc",
// //     },
// //   });

// //   const publishedCount = news.filter(
// //     (item) => item.status === "PUBLISHED",
// //   ).length;

// //   const draftCount = news.filter(
// //     (item) => item.status === "DRAFT",
// //   ).length;

// //   const archivedCount = news.filter(
// //     (item) => item.status === "ARCHIVED",
// //   ).length;

// //   return (
// //     <div className="space-y-8">
// //       {/* Header */}
// //       <section className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
// //         <div>
// //           <p className="text-sm font-medium text-slate-500">
// //             Content management
// //           </p>

// //           <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-950">
// //             News
// //           </h1>

// //           <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
// //             Create, manage, translate, and publish official news
// //             and announcements.
// //           </p>
// //         </div>

// //         <Link
// //           href="/admin/news/new"
// //           className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-slate-800"
// //         >
// //           <Plus className="size-4" />
// //           Create news
// //         </Link>
// //       </section>

// //       {/* Statistics */}
// //       <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
// //         <StatCard
// //           label="Total news"
// //           value={news.length}
// //           icon={FileText}
// //         />

// //         <StatCard
// //           label="Published"
// //           value={publishedCount}
// //           icon={ArrowUpRight}
// //         />

// //         <StatCard
// //           label="Drafts"
// //           value={draftCount}
// //           icon={FileText}
// //         />

// //         <StatCard
// //           label="Archived"
// //           value={archivedCount}
// //           icon={Archive}
// //         />
// //       </section>

// //       {/* News table */}
// //       <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
// //         <div className="flex flex-col gap-3 border-b border-slate-200 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
// //           <div>
// //             <h2 className="font-semibold text-slate-950">
// //               All news
// //             </h2>

// //             <p className="mt-1 text-sm text-slate-500">
// //               Manage your published and unpublished content.
// //             </p>
// //           </div>

// //           <Link
// //             href="/admin/news/new"
// //             className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-3.5 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
// //           >
// //             <Plus className="size-4" />
// //             New article
// //           </Link>
// //         </div>

// //         {news.length === 0 ? (
// //           <EmptyState />
// //         ) : (
// //           <div className="divide-y divide-slate-100">
// //             {news.map((article) => {
// //               const translation = article.translations[0];

// //               return (
// //                 <article
// //                   key={article.id}
// //                   className="group flex flex-col gap-4 px-5 py-5 transition-colors hover:bg-slate-50/70 sm:flex-row sm:items-center sm:justify-between"
// //                 >
// //                   <div className="min-w-0">
// //                     <div className="flex flex-wrap items-center gap-2">
// //                       <StatusBadge status={article.status} />

// //                       {article.featured && (
// //                         <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700">
// //                           <Star className="size-3" />
// //                           Featured
// //                         </span>
// //                       )}
// //                     </div>

// //                     <h3 className="mt-2 truncate text-sm font-semibold text-slate-950">
// //                       {translation?.title ?? "Untitled news"}
// //                     </h3>

// //                     <p className="mt-1 truncate text-sm text-slate-500">
// //                       {translation?.excerpt ??
// //                         "No English excerpt available."}
// //                     </p>

// //                     <p className="mt-2 text-xs text-slate-400">
// //                       /{article.slug}
// //                     </p>
// //                   </div>

// //                   <div className="flex shrink-0 items-center gap-4">
// //                     <div className="hidden text-right sm:block">
// //                       <p className="text-xs font-medium text-slate-400">
// //                         Updated
// //                       </p>

// //                       <p className="mt-1 text-xs text-slate-500">
// //                         {formatDate(article.updatedAt)}
// //                       </p>
// //                     </div>

// //                     <Link
// //                       href={`/admin/news/${article.id}`}
// //                       className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-white hover:text-slate-950"
// //                     >
// //                       Edit
// //                       <ArrowUpRight className="size-3.5" />
// //                     </Link>
// //                   </div>
// //                 </article>
// //               );
// //             })}
// //           </div>
// //         )}
// //       </section>
// //     </div>
// //   );
// // }

// // function StatCard({
// //   label,
// //   value,
// //   icon: Icon,
// // }: {
// //   label: string;
// //   value: number;
// //   icon: React.ComponentType<{ className?: string }>;
// // }) {
// //   return (
// //     <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
// //       <div className="flex items-center justify-between">
// //         <div className="flex size-10 items-center justify-center rounded-xl bg-slate-100">
// //           <Icon className="size-5 text-slate-600" />
// //         </div>

// //         <span className="text-2xl font-bold tracking-tight text-slate-950">
// //           {value}
// //         </span>
// //       </div>

// //       <p className="mt-4 text-sm font-medium text-slate-500">
// //         {label}
// //       </p>
// //     </div>
// //   );
// // }

// // function StatusBadge({
// //   status,
// // }: {
// //   status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
// // }) {
// //   const styles = {
// //     DRAFT: "bg-amber-50 text-amber-700",
// //     PUBLISHED: "bg-emerald-50 text-emerald-700",
// //     ARCHIVED: "bg-slate-100 text-slate-600",
// //   };

// //   const labels = {
// //     DRAFT: "Draft",
// //     PUBLISHED: "Published",
// //     ARCHIVED: "Archived",
// //   };

// //   return (
// //     <span
// //       className={`rounded-full px-2.5 py-1 text-xs font-semibold ${styles[status]}`}
// //     >
// //       {labels[status]}
// //     </span>
// //   );
// // }

// // function EmptyState() {
// //   return (
// //     <div className="flex min-h-80 flex-col items-center justify-center px-6 text-center">
// //       <div className="flex size-14 items-center justify-center rounded-2xl bg-slate-100">
// //         <FileText className="size-6 text-slate-500" />
// //       </div>

// //       <h3 className="mt-5 text-lg font-semibold text-slate-950">
// //         No news yet
// //       </h3>

// //       <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
// //         Create your first article to start publishing official
// //         updates.
// //       </p>

// //       <Link
// //         href="/admin/news/new"
// //         className="mt-5 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
// //       >
// //         <Plus className="size-4" />
// //         Create news
// //       </Link>
// //     </div>
// //   );
// // }

// // function formatDate(date: Date) {
// //   return new Intl.DateTimeFormat("en", {
// //     month: "short",
// //     day: "numeric",
// //     year: "numeric",
// //   }).format(date);
// // }




// import Link from "next/link";
// import Image from "next/image";
// import {
//   Plus,
//   Search,
//   MoreHorizontal,
//   ImageIcon,
//   CalendarDays,
// } from "lucide-react";

// const placeholderNews = [
//   {
//     id: "1",
//     title: "New Urban Development Initiative",
//     slug: "new-urban-development-initiative",
//     status: "PUBLISHED",
//     publishedAt: "Aug 20, 2026",
//     image: "/images/news/news-1.jpg",
//   },
//   {
//     id: "2",
//     title: "Community Infrastructure Project",
//     slug: "community-infrastructure-project",
//     status: "DRAFT",
//     publishedAt: "Aug 18, 2026",
//     image: "/images/news/news-2.jpg",
//   },
//   {
//     id: "3",
//     title: "Public Service Improvement Program",
//     slug: "public-service-improvement-program",
//     status: "PUBLISHED",
//     publishedAt: "Aug 15, 2026",
//     image: "/images/news/news-3.jpg",
//   },
// ];

// export default function NewsAdminPage() {
//   return (
//     <div className="space-y-8">
//       {/* Header */}
//       <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
//         <div>
//           <p className="text-sm font-medium text-slate-500">
//             Content Management
//           </p>

//           <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
//             News
//           </h1>

//           <p className="mt-2 text-sm text-slate-500">
//             Create, manage, and publish news and announcements.
//           </p>
//         </div>

//         <Link
//           href="/admin/news/new"
//           className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-slate-800 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2"
//         >
//           <Plus className="size-4" />
//           Create News
//         </Link>
//       </div>

//       {/* Toolbar */}
//       <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row">
//         <div className="relative flex-1">
//           <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />

//           <input
//             type="search"
//             placeholder="Search news..."
//             className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm outline-none transition focus:border-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-900/10"
//           />
//         </div>

//         <select
//           defaultValue="all"
//           className="h-11 rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-900/10"
//         >
//           <option value="all">All status</option>
//           <option value="published">Published</option>
//           <option value="draft">Draft</option>
//           <option value="archived">Archived</option>
//         </select>
//       </div>

//       {/* News list */}
//       <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
//         <div className="hidden border-b border-slate-200 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-400 md:grid md:grid-cols-[minmax(0,1fr)_140px_160px_48px] md:gap-4">
//           <span>News</span>
//           <span>Status</span>
//           <span>Published</span>
//           <span />
//         </div>

//         <div className="divide-y divide-slate-100">
//           {placeholderNews.map((news) => (
//             <article
//               key={news.id}
//               className="group grid gap-4 p-4 transition-colors hover:bg-slate-50/70 md:grid-cols-[minmax(0,1fr)_140px_160px_48px] md:items-center md:gap-4 md:px-6"
//             >
//               {/* News information */}
//               <div className="flex min-w-0 items-center gap-4">
//                 <div className="relative size-20 shrink-0 overflow-hidden rounded-xl bg-slate-100">
//                   {news.image ? (
//                     <Image
//                       src={news.image}
//                       alt=""
//                       fill
//                       sizes="80px"
//                       className="object-cover transition-transform duration-300 group-hover:scale-105"
//                     />
//                   ) : (
//                     <div className="flex size-full items-center justify-center">
//                       <ImageIcon className="size-6 text-slate-300" />
//                     </div>
//                   )}
//                 </div>

//                 <div className="min-w-0">
//                   <Link
//                     href={`/admin/news/${news.id}`}
//                     className="line-clamp-2 text-sm font-semibold text-slate-950 hover:underline"
//                   >
//                     {news.title}
//                   </Link>

//                   <p className="mt-1 truncate text-xs text-slate-400">
//                     /{news.slug}
//                   </p>
//                 </div>
//               </div>

//               {/* Status */}
//               <div>
//                 <span
//                   className={[
//                     "inline-flex rounded-full px-2.5 py-1 text-xs font-semibold",
//                     news.status === "PUBLISHED"
//                       ? "bg-emerald-50 text-emerald-700"
//                       : "bg-amber-50 text-amber-700",
//                   ].join(" ")}
//                 >
//                   {news.status === "PUBLISHED" ? "Published" : "Draft"}
//                 </span>
//               </div>

//               {/* Date */}
//               <div className="flex items-center gap-2 text-sm text-slate-500">
//                 <CalendarDays className="size-4 text-slate-400" />
//                 {news.publishedAt}
//               </div>

//               {/* Actions */}
//               <button
//                 type="button"
//                 aria-label={`Actions for ${news.title}`}
//                 className="inline-flex size-10 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-950"
//               >
//                 <MoreHorizontal className="size-5" />
//               </button>
//             </article>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }




import Image from "next/image";
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
                      <Image
                        src={image.fileUrl}
                        alt={translation?.title ?? article.slug}
                        fill
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
                    <Link
                      href={`/admin/news/${article.id}`}
                      aria-label={`Edit ${translation?.title ?? "news"}`}
                      className="inline-flex size-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-950"
                    >
                      <Pencil className="size-4" />
                    </Link>

                    {article.status === "PUBLISHED" && (
                      <Link
                        href={`/news/${article.slug}`}
                        target="_blank"
                        aria-label="View published news"
                        className="inline-flex size-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-950"
                      >
                        <Eye className="size-4" />
                      </Link>
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