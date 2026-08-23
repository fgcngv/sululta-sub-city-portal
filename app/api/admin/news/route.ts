import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const clerkUser = await currentUser();

    if (!clerkUser) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const dbUser = await prisma.user.findUnique({
      where: {
        clerkId: clerkUser.id,
      },
    });

    if (!dbUser) {
      return NextResponse.json(
        { error: "User does not exist in the database." },
        { status: 403 }
      );
    }

    if (
      dbUser.role !== "EDITOR" &&
      dbUser.role !== "ADMIN" &&
      dbUser.role !== "SUPER_ADMIN"
    ) {
      return NextResponse.json(
        { error: "You do not have permission to create news." },
        { status: 403 }
      );
    }

    const body = await request.json();

    const {
      title,
      slug,
      excerpt,
      content,
      featured,
      status,
      featuredMediaId,
    } = body;

    if (!title || !slug || !content) {
      return NextResponse.json(
        {
          error:
            "Title, slug, and content are required.",
        },
        { status: 400 }
      );
    }

    const existingNews = await prisma.news.findUnique({
      where: {
        slug,
      },
    });

    if (existingNews) {
      return NextResponse.json(
        {
          error:
            "A news article with this slug already exists.",
        },
        { status: 409 }
      );
    }

    if (
      featuredMediaId &&
      typeof featuredMediaId !== "string"
    ) {
      return NextResponse.json(
        { error: "Invalid media ID." },
        { status: 400 }
      );
    }

    if (featuredMediaId) {
      const media = await prisma.media.findUnique({
        where: {
          id: featuredMediaId,
        },
      });

      if (!media) {
        return NextResponse.json(
          { error: "Featured image was not found." },
          { status: 400 }
        );
      }

      if (media.type !== "IMAGE") {
        return NextResponse.json(
          { error: "Featured media must be an image." },
          { status: 400 }
        );
      }
    }

    const news = await prisma.$transaction(
      async (tx) => {
        const createdNews = await tx.news.create({
          data: {
            slug,
            status,
            featured: Boolean(featured),

            publishedAt:
              status === "PUBLISHED"
                ? new Date()
                : null,

            createdById: dbUser.id,
            updatedById: dbUser.id,

            translations: {
              create: {
                language: "EN",
                title,
                excerpt: excerpt || null,
                content,
              },
            },
          },
          include: {
            translations: true,
          },
        });

        if (featuredMediaId) {
          await tx.newsMedia.create({
            data: {
              newsId: createdNews.id,
              mediaId: featuredMediaId,
              sortOrder: 0,
            },
          });
        }

        return createdNews;
      }
    );

    return NextResponse.json(
      {
        success: true,
        news,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("CREATE NEWS ERROR:", error);

    return NextResponse.json(
      {
        error: "Failed to create news article.",
      },
      { status: 500 }
    );
  }
}