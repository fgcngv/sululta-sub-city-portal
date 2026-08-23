

"use client";

import Image from "next/image";
import { ImagePlus, Loader2, Trash2 } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";

export type UploadedMedia = {
  id: string;
  fileName: string;
  fileUrl: string;
  storagePath: string;
};

type ImageUploadProps = {
  value?: UploadedMedia | null;
  onChange: (media: UploadedMedia | null) => void;
};

export function ImageUpload({
  value,
  onChange,
}: ImageUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(
    value?.fileUrl ?? null
  );
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  async function handleFile(file: File) {
    setError("");
  
    if (!file.type.startsWith("image/")) {
      const message = "Please select an image file.";
      setError(message);
      toast.error(message);
      return;
    }
  
    if (file.size > 10 * 1024 * 1024) {
      const message = "Image must be smaller than 10MB.";
      setError(message);
      toast.error(message);
      return;
    }
  
    const localPreview = URL.createObjectURL(file);
  
    setPreview(localPreview);
    setUploading(true);
  
    const toastId = toast.loading("Uploading image...");
  
    try {
      const formData = new FormData();
      formData.append("file", file);
  
      const response = await fetch("/api/admin/media/upload", {
        method: "POST",
        body: formData,
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.error || "Upload failed");
      }
  
      setPreview(data.media.fileUrl);
      onChange(data.media);
  
      toast.success("Image uploaded successfully.", {
        id: toastId,
      });
    } catch (error) {
      console.error(error);
  
      setPreview(value?.fileUrl ?? null);
  
      const message =
        error instanceof Error
          ? error.message
          : "Upload failed.";
  
      setError(message);
  
      toast.error(message, {
        id: toastId,
      });
    } finally {
      setUploading(false);
    }
  }

  function handleInputChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0];

    if (file) {
      void handleFile(file);
    }
  }

  function removeImage() {
    setPreview(null);
    onChange(null);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  return (
    <div className="space-y-3">
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleInputChange}
        className="hidden"
        required
      />

      {preview ? (
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={preview}
              alt="News image preview"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 700px"
            />

            {uploading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <div className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-medium text-slate-900 shadow-lg">
                  <Loader2 className="size-4 animate-spin" />
                  Uploading...
                </div>
              </div>
            )}
          </div>

          {!uploading && (
            <div className="flex items-center justify-between border-t border-slate-200 bg-white p-3">
              <button
                type="button"
                onClick={() =>
                  inputRef.current?.click()
                }
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
              >
                Replace image
              </button>

              <button
                type="button"
                onClick={removeImage}
                className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50"
              >
                <Trash2 className="size-4" />
                Remove
              </button>
            </div>
          )}
        </div>
      ) : (
        <button
          type="button"
          onClick={() =>
            inputRef.current?.click()
          }
          className="group flex w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 px-6 py-14 text-center transition hover:border-slate-400 hover:bg-slate-100"
        >
          <span className="mb-4 flex size-14 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition group-hover:scale-105">
            <ImagePlus className="size-6 text-slate-600" />
          </span>

          <span className="text-sm font-semibold text-slate-900">
            Upload news image
          </span>

          <span className="mt-1 text-xs text-slate-500">
            PNG, JPG, WEBP up to 10MB
          </span>
        </button>
      )}

      {error && (
        <p className="text-sm font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}