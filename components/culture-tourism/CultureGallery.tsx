

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
} from "lucide-react";

type GalleryImage = {
  image: string;
  title?: string;
};

type CultureGalleryProps = {
  images: GalleryImage[];
  imageAlt: string;
  clickToView: string;
  close: string;
  previous: string;
  next: string;
  imageOf: string;
  of: string;
};

export default function CultureGallery({
  images,
  imageAlt,
  clickToView,
  close,
  previous,
  next,
  imageOf,
  of,
}: CultureGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedImage =
    selectedIndex !== null ? images[selectedIndex] : null;

  const closeViewer = () => {
    setSelectedIndex(null);
  };

  const showPrevious = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === 0 ? images.length - 1 : selectedIndex - 1
    );
  };

  const showNext = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === images.length - 1 ? 0 : selectedIndex + 1
    );
  };

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeViewer();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  return (
    <>
      {/* Gallery */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {images.map((item, index) => (
          <button
            key={`${item.image}-${index}`}
            type="button"
            onClick={() => setSelectedIndex(index)}
            aria-label={`${clickToView}: ${item.title || `${imageAlt} ${index + 1}`}`}
            className={`group relative overflow-hidden rounded-2xl bg-slate-200 text-left ${
              index === 0
                ? "col-span-2 row-span-2 aspect-square md:aspect-auto"
                : "aspect-square"
            }`}
          >
            <Image
              src={item.image}
              alt={item.title || `${imageAlt} ${index + 1}`}
              fill
              sizes={
                index === 0
                  ? "(min-width: 768px) 66vw, 100vw"
                  : "(min-width: 768px) 33vw, 50vw"
              }
              className="object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition group-hover:opacity-100" />

            <div className="absolute inset-x-0 bottom-0 flex translate-y-3 items-center justify-between p-5 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <span className="text-sm font-semibold text-white">
                {item.title || clickToView}
              </span>

              <span className="flex size-9 items-center justify-center rounded-full bg-white/90 text-slate-900">
                <Maximize2 className="size-4" />
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Full screen viewer */}
      {selectedImage && selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={imageAlt}
        >
          {/* Close */}
          <button
            type="button"
            onClick={closeViewer}
            aria-label={close}
            className="absolute right-4 top-4 z-20 flex size-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20 sm:right-6 sm:top-6"
          >
            <X className="size-6" />
          </button>

          {/* Previous */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={showPrevious}
              aria-label={previous}
              className="absolute left-3 top-1/2 z-20 flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20 sm:left-6"
            >
              <ChevronLeft className="size-7" />
            </button>
          )}

          {/* Image */}
          <div className="relative h-[80vh] w-full max-w-7xl">
            <Image
              src={selectedImage.image}
              alt={
                selectedImage.title ||
                `${imageAlt} ${selectedIndex + 1}`
              }
              fill
              priority
              sizes="100vw"
              className="object-contain"
            />
          </div>

          {/* Next */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={showNext}
              aria-label={next}
              className="absolute right-3 top-1/2 z-20 flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20 sm:right-6"
            >
              <ChevronRight className="size-7" />
            </button>
          )}

          {/* Bottom information */}
          <div className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2 text-center">
            <p className="text-sm font-medium text-white/90">
              {selectedImage.title}
            </p>

            <p className="mt-1 text-xs text-white/50">
              {imageOf} {selectedIndex + 1} {of} {images.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}