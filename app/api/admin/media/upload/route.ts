
import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(request: Request) {
  try {
    const user = await currentUser();

    if (!user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const dbUser = await prisma.user.findUnique({
      where: {
        clerkId: user.id,
      },
    });

    if (!dbUser) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 403 }
      );
    }

    if (
      dbUser.role !== "ADMIN" &&
      dbUser.role !== "SUPER_ADMIN" &&
      dbUser.role !== "EDITOR"
    ) {
      return NextResponse.json(
        { error: "Forbidden" },
        { status: 403 }
      );
    }

    const formData = await request.formData();

    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json(
        { error: "No file provided" },
        { status: 400 }
      );
    }

    if (!file.type.startsWith("image/")) {
      return NextResponse.json(
        { error: "Only image files are allowed" },
        { status: 400 }
      );
    }

    const maxSize = 10 * 1024 * 1024;

    if (file.size > maxSize) {
      return NextResponse.json(
        { error: "Image must be smaller than 10MB" },
        { status: 400 }
      );
    }

    const extension =
      file.name.split(".").pop()?.toLowerCase() || "jpg";

    const fileName =
      `${crypto.randomUUID()}.${extension}`;

    const storagePath =
      `news/${new Date().getFullYear()}/${fileName}`;

    const buffer = Buffer.from(
      await file.arrayBuffer()
    );

    const { error: uploadError } =
      await supabaseAdmin.storage
        .from("news-media")
        .upload(storagePath, buffer, {
          contentType: file.type,
          upsert: false,
        });

    if (uploadError) {
      console.error("SUPABASE UPLOAD ERROR:", uploadError);

      return NextResponse.json(
        { error: "Failed to upload image" },
        { status: 500 }
      );
    }

    const {
      data: publicUrlData,
    } = supabaseAdmin.storage
      .from("news-media")
      .getPublicUrl(storagePath);

    const media = await prisma.media.create({
      data: {
        type: "IMAGE",
        fileName: file.name,
        fileUrl: publicUrlData.publicUrl,
        storagePath,
        mimeType: file.type,
        fileSize: file.size,
      },
    });

    return NextResponse.json({
      success: true,
      media,
    });
  } catch (error) {
    console.error("MEDIA UPLOAD ERROR:", error);

    return NextResponse.json(
      { error: "Upload failed" },
      { status: 500 }
    );
  }
}