

"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

type Language = "EN" | "AM" | "OM";

type TranslationInput = {
  title: string;
  excerpt: string;
  content: string;
  seoTitle: string;
  seoDescription: string;
};

type CreateNewsInput = {
  slug: string;
  status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
  featured: boolean;
  translations: Record<Language, TranslationInput>;
};

export async function createNews(input: CreateNewsInput) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const user = await prisma.user.findUnique({
    where: {
      clerkId: userId,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  if (!["SUPER_ADMIN", "ADMIN", "EDITOR"].includes(user.role)) {
    throw new Error("Forbidden");
  }

  if (!input.slug.trim()) {
    throw new Error("Slug is required");
  }

  if (!input.translations.EN.title.trim()) {
    throw new Error("English title is required");
  }

  if (!input.translations.EN.content.trim()) {
    throw new Error("English content is required");
  }

  const existingSlug = await prisma.news.findUnique({
    where: {
      slug: input.slug,
    },
  });

  if (existingSlug) {
    throw new Error("A news article with this slug already exists.");
  }

  const publishedAt =
    input.status === "PUBLISHED"
      ? new Date()
      : null;

  const translations = Object.entries(
    input.translations,
  )
    .filter(([, translation]) =>
      translation.title.trim(),
    )
    .map(([language, translation]) => ({
      language: language as Language,
      title: translation.title.trim(),
      excerpt:
        translation.excerpt.trim() || null,
      content: translation.content.trim(),
      seoTitle:
        translation.seoTitle.trim() || null,
      seoDescription:
        translation.seoDescription.trim() || null,
    }));

  const news = await prisma.news.create({
    data: {
      slug: input.slug.trim(),
      status: input.status,
      featured: input.featured,
      publishedAt,

      createdById: user.id,
      updatedById: user.id,

      translations: {
        create: translations,
      },
    },

    include: {
      translations: true,
    },
  });

  revalidatePath("/admin/news");

  return {
    success: true,
    id: news.id,
  };
}