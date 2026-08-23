

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";

export async function GET() {
  try {
    await requireAdmin();

    const media = await prisma.media.findMany({
      where: {
        type: "IMAGE",
      },
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        fileName: true,
        fileUrl: true,
        mimeType: true,
        altText: true,
      },
    });

    return NextResponse.json({
      media,
    });
  } catch (error) {
    console.error(
      "LOAD MEDIA ERROR:",
      error
    );

    return NextResponse.json(
      {
        error: "Unable to load images.",
      },
      {
        status: 500,
      }
    );
  }
}