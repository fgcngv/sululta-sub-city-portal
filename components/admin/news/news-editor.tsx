

"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ImagePlus,
  Languages,
  Save,
  Star,
} from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { createNews } from "@/app/admin/news/actions";

type Language = "EN" | "AM" | "OM";

type Translation = {
  title: string;
  excerpt: string;
  content: string;
  seoTitle: string;
  seoDescription: string;
};

type NewsEditorProps = {
  mode: "create" | "edit";
  initialData?: {
    id?: string;
    slug?: string;
    status?: "DRAFT" | "PUBLISHED" | "ARCHIVED";
    featured?: boolean;
    translations?: Partial<
      Record<Language, Partial<Translation>>
    >;
  };
};

const emptyTranslation: Translation = {
  title: "",
  excerpt: "",
  content: "",
  seoTitle: "",
  seoDescription: "",
};

export function NewsEditor({
  mode,
  initialData,
}: NewsEditorProps) {
  const [language, setLanguage] = useState<Language>("EN");

  const [slug, setSlug] = useState(
    initialData?.slug ?? "",
  );

  const [status, setStatus] = useState<
    "DRAFT" | "PUBLISHED" | "ARCHIVED"
  >(initialData?.status ?? "DRAFT");

  const [featured, setFeatured] = useState(
    initialData?.featured ?? false,
  );

  const [translations, setTranslations] = useState<
    Record<Language, Translation>
  >({
    EN: {
      ...emptyTranslation,
      ...initialData?.translations?.EN,
    },
    AM: {
      ...emptyTranslation,
      ...initialData?.translations?.AM,
    },
    OM: {
      ...emptyTranslation,
      ...initialData?.translations?.OM,
    },
  });

  const current = translations[language];

  function updateCurrent(
    field: keyof Translation,
    value: string,
  ) {
    setTranslations((previous) => ({
      ...previous,
      [language]: {
        ...previous[language],
        [field]: value,
      },
    }));
  }

  function generateSlug() {
    const value = translations.EN.title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");

    setSlug(value);
  }

  const [saving, setSaving] = useState(false);
const [error, setError] = useState("");

async function handleSave(
    nextStatus?: "DRAFT" | "PUBLISHED",
  ) {
    setSaving(true);
    setError("");
  
    try {
      const result = await createNews({
        slug,
        status: nextStatus ?? status,
        featured,
        translations,
      });
  
      if (result.success) {
        window.location.href = "/admin/news";
      }
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong.",
      );
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="mx-auto max-w-6xl space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link
            href="/admin/news"
            className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-950"
          >
            <ArrowLeft className="size-4" />
            Back to News
          </Link>

          <h1 className="text-3xl font-bold tracking-tight text-slate-950">
            {mode === "create"
              ? "Create news"
              : "Edit news"}
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Create an official multilingual news article.
          </p>
        </div>

        <div className="flex items-center gap-2">
        <Button
  type="button"
  variant="outline"
  disabled={saving}
  onClick={() => handleSave("DRAFT")}
>
  {saving ? "Saving..." : "Save draft"}
</Button>

<Button
  type="button"
  disabled={saving}
  onClick={() => handleSave("PUBLISHED")}
  className="gap-2"
>
  <Save className="size-4" />

  {saving
    ? "Publishing..."
    : "Publish"}
</Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        {/* Main editor */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="font-semibold">
                    Article content
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Manage the content for each language.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Languages className="size-4 text-slate-400" />

                  <Select
                    value={language}
                    onValueChange={(value) =>
                      setLanguage(value as Language)
                    }
                  >
                    <SelectTrigger className="w-[150px]">
                      <SelectValue />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="EN">
                        English
                      </SelectItem>

                      <SelectItem value="AM">
                        አማርኛ
                      </SelectItem>

                      <SelectItem value="OM">
                        Afaan Oromoo
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>

            {error && (
  <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
    {error}
  </div>
)}
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">
                  Title
                </Label>

                <Input
                  id="title"
                  value={current.title}
                  onChange={(event) =>
                    updateCurrent(
                      "title",
                      event.target.value,
                    )
                  }
                  placeholder="Enter the news title"
                  className="h-12 text-base"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="excerpt">
                  Excerpt
                </Label>

                <Textarea
                  id="excerpt"
                  value={current.excerpt}
                  onChange={(event) =>
                    updateCurrent(
                      "excerpt",
                      event.target.value,
                    )
                  }
                  placeholder="Short summary of this news article"
                  className="min-h-24 resize-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">
                  Content
                </Label>

                <Textarea
                  id="content"
                  value={current.content}
                  onChange={(event) =>
                    updateCurrent(
                      "content",
                      event.target.value,
                    )
                  }
                  placeholder="Write the full news article..."
                  className="min-h-[360px] resize-y leading-7"
                />

                <p className="text-xs text-slate-400">
                  Rich text editing can be added here next.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* SEO */}
          <Card>
            <CardHeader>
              <h2 className="font-semibold">
                SEO
              </h2>

              <p className="text-sm text-slate-500">
                Search-engine metadata for this language.
              </p>
            </CardHeader>

            <CardContent className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="seoTitle">
                  SEO title
                </Label>

                <Input
                  id="seoTitle"
                  value={current.seoTitle}
                  onChange={(event) =>
                    updateCurrent(
                      "seoTitle",
                      event.target.value,
                    )
                  }
                  placeholder="SEO page title"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="seoDescription">
                  SEO description
                </Label>

                <Textarea
                  id="seoDescription"
                  value={current.seoDescription}
                  onChange={(event) =>
                    updateCurrent(
                      "seoDescription",
                      event.target.value,
                    )
                  }
                  placeholder="Description shown in search results"
                  className="min-h-24 resize-none"
                />
              </div>
            </CardContent>
          </Card>

          {/* Media */}
          <Card>
            <CardHeader>
              <h2 className="font-semibold">
                Media
              </h2>

              <p className="text-sm text-slate-500">
                Add images, videos, or documents to this
                article.
              </p>
            </CardHeader>

            <CardContent>
              <button
                type="button"
                className="flex min-h-36 w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-200 bg-slate-50/50 text-center transition-colors hover:border-slate-300 hover:bg-slate-50"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-white shadow-sm">
                  <ImagePlus className="size-5 text-slate-500" />
                </div>

                <span className="mt-3 text-sm font-semibold text-slate-700">
                  Add media
                </span>

                <span className="mt-1 text-xs text-slate-400">
                  Images, videos, and documents
                </span>
              </button>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <Card>
            <CardHeader>
              <h2 className="font-semibold">
                Publishing
              </h2>
            </CardHeader>

            <CardContent className="space-y-5">
              <div className="space-y-2">
                <Label>Status</Label>

                <Select
                  value={status}
                  onValueChange={(value) =>
                    setStatus(
                      value as
                        | "DRAFT"
                        | "PUBLISHED"
                        | "ARCHIVED",
                    )
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="DRAFT">
                      Draft
                    </SelectItem>

                    <SelectItem value="PUBLISHED">
                      Published
                    </SelectItem>

                    <SelectItem value="ARCHIVED">
                      Archived
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator />

              <div className="flex items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <Star className="mt-0.5 size-4 text-slate-400" />

                  <div>
                    <p className="text-sm font-medium text-slate-900">
                      Featured
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Highlight this article on the website.
                    </p>
                  </div>
                </div>

                <Switch
                  checked={featured}
                  onCheckedChange={setFeatured}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="font-semibold">
                URL
              </h2>
            </CardHeader>

            <CardContent className="space-y-3">
              <Label htmlFor="slug">
                Slug
              </Label>

              <Input
                id="slug"
                value={slug}
                onChange={(event) =>
                  setSlug(event.target.value)
                }
                placeholder="news-article-slug"
              />

              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={generateSlug}
              >
                Generate from English title
              </Button>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}