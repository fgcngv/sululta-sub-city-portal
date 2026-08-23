

// "use client";

// import { useState } from "react";
// import { Save } from "lucide-react";

// import {
//   ImageUpload,
//   type UploadedMedia,
// } from "@/components/admin/media/image-upload";

// export function NewsForm() {
//   const [title, setTitle] = useState("");
//   const [slug, setSlug] = useState("");
//   const [excerpt, setExcerpt] = useState("");
//   const [content, setContent] = useState("");
//   const [featured, setFeatured] = useState(false);
//   const [status, setStatus] = useState("DRAFT");
//   const [featuredImage, setFeaturedImage] =
//     useState<UploadedMedia | null>(null);
//   const [saving, setSaving] = useState(false);
//   const [error, setError] = useState("");

//   function createSlug(value: string) {
//     return value
//       .toLowerCase()
//       .trim()
//       .replace(/[^a-z0-9\s-]/g, "")
//       .replace(/\s+/g, "-")
//       .replace(/-+/g, "-");
//   }

//   async function handleSubmit(
//     event: React.FormEvent<HTMLFormElement>
//   ) {
//     event.preventDefault();

//     setError("");
//     setSaving(true);

//     try {
//       const response = await fetch("/api/admin/news", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           title,
//           slug,
//           excerpt,
//           content,
//           featured,
//           status,
//           featuredMediaId: featuredImage?.id ?? null,
//         }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(
//           data.error || "Failed to create news"
//         );
//       }

//       // window.location.href = `/admin/news/${data.news.id}`;
//     } catch (error) {
//       setError(
//         error instanceof Error
//           ? error.message
//           : "Something went wrong."
//       );
//     } finally {
//       setSaving(false);
//     }
//   }

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="mx-auto max-w-5xl space-y-6"
//     >
//       <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
//         <div>
//           <p className="text-sm font-medium text-slate-500">
//             News
//           </p>

//           <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-950">
//             Create news
//           </h1>

//           <p className="mt-1 text-sm text-slate-500">
//             Publish a news article with an image.
//           </p>
//         </div>

//         <button
//           type="submit"
//           disabled={saving}
//           className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
//         >
//           <Save className="size-4" />

//           {saving ? "Saving..." : "Save news"}
//         </button>
//       </div>

//       {error && (
//         <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
//           {error}
//         </div>
//       )}

//       <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
//         <div className="space-y-6">
//           <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
//             <h2 className="text-base font-semibold text-slate-950">
//               Article information
//             </h2>

//             <div className="mt-5 space-y-5">
//               <div>
//                 <label
//                   htmlFor="title"
//                   className="mb-2 block text-sm font-medium text-slate-700"
//                 >
//                   Title
//                 </label>

//                 <input
//                   id="title"
//                   value={title}
//                   onChange={(event) => {
//                     const value = event.target.value;

//                     setTitle(value);

//                     if (!slug) {
//                       setSlug(createSlug(value));
//                     }
//                   }}
//                   placeholder="Enter news title"
//                   required
//                   className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-slate-900/10"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="slug"
//                   className="mb-2 block text-sm font-medium text-slate-700"
//                 >
//                   Slug
//                 </label>

//                 <input
//                   id="slug"
//                   value={slug}
//                   onChange={(event) =>
//                     setSlug(event.target.value)
//                   }
//                   placeholder="news-article-slug"
//                   required
//                   className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-slate-900/10"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="excerpt"
//                   className="mb-2 block text-sm font-medium text-slate-700"
//                 >
//                   Excerpt
//                 </label>

//                 <textarea
//                   id="excerpt"
//                   value={excerpt}
//                   onChange={(event) =>
//                     setExcerpt(event.target.value)
//                   }
//                   placeholder="Short summary of the article"
//                   rows={4}
//                   className="w-full resize-none rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-slate-900/10"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="content"
//                   className="mb-2 block text-sm font-medium text-slate-700"
//                 >
//                   Content
//                 </label>

//                 <textarea
//                   id="content"
//                   value={content}
//                   onChange={(event) =>
//                     setContent(event.target.value)
//                   }
//                   placeholder="Write the full news article..."
//                   rows={14}
//                   required
//                   className="w-full resize-y rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm leading-7 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-slate-900/10"
//                 />
//               </div>
//             </div>
//           </section>

//           <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
//             <div>
//               <h2 className="text-base font-semibold text-slate-950">
//                 Featured image
//               </h2>

//               <p className="mt-1 text-sm text-slate-500">
//                 Upload an image from your device.
//               </p>
//             </div>

//             <div className="mt-5">
//               <ImageUpload
//                 value={featuredImage}
//                 onChange={setFeaturedImage}
//               />
//             </div>
//           </section>
//         </div>

//         <aside className="space-y-6">
//           <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
//             <h2 className="text-base font-semibold text-slate-950">
//               Publishing
//             </h2>

//             <div className="mt-5 space-y-5">
//               <div>
//                 <label
//                   htmlFor="status"
//                   className="mb-2 block text-sm font-medium text-slate-700"
//                 >
//                   Status
//                 </label>

//                 <select
//                   id="status"
//                   value={status}
//                   onChange={(event) =>
//                     setStatus(event.target.value)
//                   }
//                   className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-900/10"
//                 >
//                   <option value="DRAFT">Draft</option>
//                   <option value="PUBLISHED">
//                     Published
//                   </option>
//                   <option value="ARCHIVED">
//                     Archived
//                   </option>
//                 </select>
//               </div>

//               <label className="flex cursor-pointer items-center justify-between gap-4 rounded-xl border border-slate-200 p-4">
//                 <div>
//                   <p className="text-sm font-medium text-slate-900">
//                     Featured article
//                   </p>

//                   <p className="mt-1 text-xs text-slate-500">
//                     Highlight this article on the website.
//                   </p>
//                 </div>

//                 <input
//                   type="checkbox"
//                   checked={featured}
//                   onChange={(event) =>
//                     setFeatured(event.target.checked)
//                   }
//                   className="size-5 rounded border-slate-300 accent-slate-950"
//                 />
//               </label>
//             </div>
//           </section>

//           <section className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
//             <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
//               Publishing workflow
//             </p>

//             <p className="mt-2 text-sm leading-6 text-slate-600">
//               Save the article as a draft first, or publish it
//               immediately.
//             </p>
//           </section>
//         </aside>
//       </div>
//     </form>
//   );
// }




"use client";

import { useState } from "react";
import { Save } from "lucide-react";
import { toast } from "sonner";

import {
  ImageUpload,
  type UploadedMedia,
} from "@/components/admin/media/image-upload";

export function NewsForm() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [featured, setFeatured] = useState(false);
  const [status, setStatus] = useState("DRAFT");
  const [featuredImage, setFeaturedImage] =
    useState<UploadedMedia | null>(null);

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  function createSlug(value: string) {
    return value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  }

  function resetForm() {
    setTitle("");
    setSlug("");
    setExcerpt("");
    setContent("");
    setFeatured(false);
    setStatus("DRAFT");
    setFeaturedImage(null);
    setError("");
  }

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setError("");
    setSaving(true);

    try {
      const response = await fetch("/api/admin/news", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          slug,
          excerpt,
          content,
          featured,
          status,
          featuredMediaId: featuredImage?.id ?? null,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Failed to create news"
        );
      }

      // Show success toast
      toast.success("News article created successfully!", {
        description: "Your news article has been saved.",
      });

      // Clear all form inputs
      resetForm();

      // Optional:
      // window.location.href = `/admin/news/${data.news.id}`;
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Something went wrong.";

      setError(message);

      toast.error("Failed to create news", {
        description: message,
      });
    } finally {
      setSaving(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-5xl space-y-6"
    >
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-medium text-slate-500">
            News
          </p>

          <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-950">
            Create news
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Publish a news article with an image.
          </p>
        </div>

        <button
          type="submit"
          disabled={saving}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Save className="size-4" />

          {saving ? "Saving..." : "Save news"}
        </button>
      </div>

      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {error}
        </div>
      )}

      <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
        <div className="space-y-6">
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-base font-semibold text-slate-950">
              Article information
            </h2>

            <div className="mt-5 space-y-5">
              <div>
                <label
                  htmlFor="title"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Title
                </label>

                <input
                  id="title"
                  value={title}
                  onChange={(event) => {
                    const value = event.target.value;

                    setTitle(value);

                    if (!slug) {
                      setSlug(createSlug(value));
                    }
                  }}
                  placeholder="Enter news title"
                  required
                  className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-slate-900/10"
                />
              </div>

              <div>
                <label
                  htmlFor="slug"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Slug
                </label>

                <input
                  id="slug"
                  value={slug}
                  onChange={(event) =>
                    setSlug(event.target.value)
                  }
                  placeholder="news-article-slug"
                  required
                  className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-slate-900/10"
                />
              </div>

              <div>
                <label
                  htmlFor="excerpt"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Excerpt
                </label>

                <textarea
                  id="excerpt"
                  value={excerpt}
                  onChange={(event) =>
                    setExcerpt(event.target.value)
                  }
                  placeholder="Short summary of the article"
                  rows={4}
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-slate-900/10"
                />
              </div>

              <div>
                <label
                  htmlFor="content"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Content
                </label>

                <textarea
                  id="content"
                  value={content}
                  onChange={(event) =>
                    setContent(event.target.value)
                  }
                  placeholder="Write the full news article..."
                  rows={14}
                  required
                  className="w-full resize-y rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm leading-7 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-slate-900/10"
                />
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div>
              <h2 className="text-base font-semibold text-slate-950">
                Featured image
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Upload an image from your device.
              </p>
            </div>

            <div className="mt-5">
              <ImageUpload
                value={featuredImage}
                onChange={setFeaturedImage}
              />
            </div>
          </section>
        </div>

        <aside className="space-y-6">
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-base font-semibold text-slate-950">
              Publishing
            </h2>

            <div className="mt-5 space-y-5">
              <div>
                <label
                  htmlFor="status"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Status
                </label>

                <select
                  id="status"
                  value={status}
                  onChange={(event) =>
                    setStatus(event.target.value)
                  }
                  className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-900/10"
                >
                  <option value="DRAFT">Draft</option>
                  <option value="PUBLISHED">Published</option>
                  <option value="ARCHIVED">Archived</option>
                </select>
              </div>

              <label className="flex cursor-pointer items-center justify-between gap-4 rounded-xl border border-slate-200 p-4">
                <div>
                  <p className="text-sm font-medium text-slate-900">
                    Featured article
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Highlight this article on the website.
                  </p>
                </div>

                <input
                  type="checkbox"
                  checked={featured}
                  onChange={(event) =>
                    setFeatured(event.target.checked)
                  }
                  className="size-5 rounded border-slate-300 accent-slate-950"
                />
              </label>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Publishing workflow
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Save the article as a draft first, or publish it
              immediately.
            </p>
          </section>
        </aside>
      </div>
    </form>
  );
}