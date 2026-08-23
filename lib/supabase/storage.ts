

import { createClient } from "@/lib/supabase/client";

const BUCKET_NAME = "media";

export async function uploadMedia(
  file: File,
  folder: string,
) {
  const supabase = createClient();

  const extension =
    file.name.split(".").pop()?.toLowerCase() ?? "bin";

  const fileName = `${crypto.randomUUID()}.${extension}`;

  const storagePath = `${folder}/${fileName}`;

  const { error } = await supabase.storage
    .from(BUCKET_NAME)
    .upload(storagePath, file, {
      cacheControl: "3600",
      upsert: false,
      contentType: file.type,
    });

  if (error) {
    throw new Error(error.message);
  }

  const {
    data: { publicUrl },
  } = supabase.storage
    .from(BUCKET_NAME)
    .getPublicUrl(storagePath);

  return {
    fileName: file.name,
    fileUrl: publicUrl,
    storagePath,
    mimeType: file.type,
    fileSize: file.size,
  };
}