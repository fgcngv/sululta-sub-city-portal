

"use client";

import Image from "next/image";
import { ImagePlus, Loader2, Trash2 } from "lucide-react";
import { useState } from "react";

import { uploadMedia } from "@/lib/supabase/storage";

type UploadedMedia = {
  fileName: string;
  fileUrl: string;
  storagePath: string;
  mimeType: string;
  fileSize: number;
};

type MediaUploaderProps = {
  folder?: string;
  value?: UploadedMedia | null;
  onChange: (media: UploadedMedia | null) => void;
};

export function MediaUploader({
  folder = "news",
  value,
  onChange,
}: MediaUploaderProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  async function handleFileChange(
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    setError("");

    if (!file.type.startsWith("image/")) {
      setError("Please select an image file.");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setError("Image must be smaller than 10 MB.");
      return;
    }

    try {
      setUploading(true);

      const uploaded = await uploadMedia(
        file,
        folder,
      );

      onChange(uploaded);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Upload failed.",
      );
    } finally {
      setUploading(false);
    }
  }

  if (value) {
    return (
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <div className="relative aspect-video bg-slate-100">
          <Image
            src={value.fileUrl}
            alt={value.fileName}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex items-center justify-between gap-4 p-4">
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-slate-900">
              {value.fileName}
            </p>

            <p className="mt-1 text-xs text-slate-500">
              {(value.fileSize / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>

          <button
            type="button"
            onClick={() => onChange(null)}
            className="
              inline-flex size-9 shrink-0
              items-center justify-center
              rounded-lg
              text-slate-500
              transition-colors
              hover:bg-red-50
              hover:text-red-600
            "
            aria-label="Remove image"
          >
            <Trash2 className="size-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <label
        className="
          flex min-h-48
          cursor-pointer
          flex-col items-center justify-center
          rounded-2xl
          border-2 border-dashed
          border-slate-300
          bg-slate-50
          px-6
          transition-colors
          hover:border-slate-400
          hover:bg-slate-100
        "
      >
        {uploading ? (
          <>
            <Loader2 className="size-8 animate-spin text-slate-500" />

            <p className="mt-3 text-sm font-medium text-slate-700">
              Uploading image...
            </p>
          </>
        ) : (
          <>
            <div className="flex size-12 items-center justify-center rounded-xl bg-white shadow-sm">
              <ImagePlus className="size-6 text-slate-600" />
            </div>

            <p className="mt-4 text-sm font-semibold text-slate-800">
              Upload cover image
            </p>

            <p className="mt-1 text-xs text-slate-500">
              PNG, JPG or WebP · Maximum 10 MB
            </p>
          </>
        )}

        <input
          type="file"
          accept="image/png,image/jpeg,image/webp"
          disabled={uploading}
          onChange={handleFileChange}
          className="sr-only"
        />
      </label>

      {error && (
        <p className="mt-2 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}