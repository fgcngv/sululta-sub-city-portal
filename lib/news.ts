

import { prisma } from "@/lib/prisma";

export async function getPublishedNews(language = "EN") {
  return prisma.news.findMany({
    where: {
      status: "PUBLISHED",
      translations: {
        some: {
          language: language as "EN" | "AM" | "OM",
        },
      },
    },
    include: {
      translations: {
        where: {
          language: language as "EN" | "AM" | "OM",
        },
      },
      media: {
        include: {
          media: true,
        },
        orderBy: {
          sortOrder: "asc",
        },
      },
    },
    orderBy: {
      publishedAt: "desc",
    },
  });
}

export async function getFeaturedNews(language = "EN") {
  return prisma.news.findMany({
    where: {
      status: "PUBLISHED",
      featured: true,
      translations: {
        some: {
          language: language as "EN" | "AM" | "OM",
        },
      },
    },
    include: {
      translations: {
        where: {
          language: language as "EN" | "AM" | "OM",
        },
      },
      media: {
        include: {
          media: true,
        },
        orderBy: {
          sortOrder: "asc",
        },
      },
    },
    orderBy: {
      publishedAt: "desc",
    },
    take: 5,
  });
}

export async function getNewsBySlug(
  slug: string,
  language = "EN",
) {
  return prisma.news.findUnique({
    where: {
      slug,
    },
    include: {
      translations: {
        where: {
          language: language as "EN" | "AM" | "OM",
        },
      },
      media: {
        include: {
          media: true,
        },
        orderBy: {
          sortOrder: "asc",
        },
      },
    },
  });
}