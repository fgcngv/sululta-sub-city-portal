

"use client";

import Image from "next/image";
import {
  Check,
  ImageIcon,
  Loader2,
  Search,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";

export type MediaItem = {
  id: string;
  fileName: string;
  fileUrl: string;
  mimeType: string | null;
  altText: string | null;
};

type MediaPickerProps = {
  open: boolean;
  onClose: () => void;
  onSelect: (media: MediaItem) => void;
};

export function MediaPicker({
  open,
  onClose,
  onSelect,
}: MediaPickerProps) {
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] =
    useState<string | null>(null);

  useEffect(() => {
    if (!open) return;

    async function loadMedia() {
      setLoading(true);

      try {
        const response = await fetch(
          "/api/admin/media/images"
        );

        if (!response.ok) {
          throw new Error("Unable to load media.");
        }

        const data = await response.json();

        setMedia(data.media ?? []);
      } catch (error) {
        console.error("MEDIA PICKER ERROR:", error);
      } finally {
        setLoading(false);
      }
    }

    loadMedia();
  }, [open]);

  const filteredMedia = media.filter((item) =>
    item.fileName
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  function selectMedia(item: MediaItem) {
    setSelectedId(item.id);
    onSelect(item);
    onClose();
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl overflow-hidden p-0">
        <DialogHeader className="border-b border-slate-200 px-6 py-5">
          <DialogTitle>
            Select image
          </DialogTitle>

          <DialogDescription>
            Choose an image from the media library.
          </DialogDescription>
        </DialogHeader>

        <div className="p-6">
          {/* Search */}
          <div className="relative mb-6">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />

            <input
              type="search"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search images..."
              className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm outline-none transition focus:border-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-900/10"
            />
          </div>

          {/* Loading */}
          {loading && (
            <div className="flex min-h-64 items-center justify-center">
              <Loader2 className="size-6 animate-spin text-slate-400" />
            </div>
          )}

          {/* Empty */}
          {!loading && filteredMedia.length === 0 && (
            <div className="flex min-h-64 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50">
              <div className="mb-3 flex size-12 items-center justify-center rounded-xl bg-white shadow-sm">
                <ImageIcon className="size-5 text-slate-400" />
              </div>

              <p className="text-sm font-semibold text-slate-900">
                No images found
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Upload an image to your media library first.
              </p>
            </div>
          )}

          {/* Grid */}
          {!loading && filteredMedia.length > 0 && (
            <div className="grid max-h-[60vh] grid-cols-2 gap-4 overflow-y-auto sm:grid-cols-3 lg:grid-cols-4">
              {filteredMedia.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => selectMedia(item)}
                  className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white text-left transition hover:border-slate-400 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950"
                >
                  <div className="relative aspect-video overflow-hidden bg-slate-100">
                    <Image
                      src={item.fileUrl}
                      alt={item.altText ?? item.fileName}
                      fill
                      sizes="300px"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    {selectedId === item.id && (
                      <div className="absolute inset-0 flex items-center justify-center bg-slate-950/40">
                        <span className="flex size-10 items-center justify-center rounded-full bg-white">
                          <Check className="size-5 text-slate-950" />
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-3">
                    <p className="truncate text-xs font-medium text-slate-700">
                      {item.fileName}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}