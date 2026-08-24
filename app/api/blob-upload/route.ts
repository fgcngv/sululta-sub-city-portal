

import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json(
        { error: "No file provided" },
        { status: 400 }
      );
    }

    const blob = await put(
      `videos/${file.name}`,
      file,
      {
        access: "public",
        addRandomSuffix: false,
      }
    );

    return NextResponse.json({
      url: blob.url,
    });
  } catch (error) {
    console.error("Blob upload error:", error);

    return NextResponse.json(
      { error: "Upload failed" },
      { status: 500 }
    );
  }
}