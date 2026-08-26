


"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type GalleryImage = {
  image: string;
  alt: string;
};

type AgricultureGalleryProps = {
  images: GalleryImage[];
  clickLabel: string;
  closeLabel: string;
  previousLabel: string;
  nextLabel: string;
};

export default function AgricultureGallery({
  images,
  clickLabel,
  closeLabel,
  previousLabel,
  nextLabel,
}: AgricultureGalleryProps) {
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
      {/* =========================================================
          GALLERY GRID
      ========================================================= */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {images.map((item, index) => (
          <button
            key={`${item.image}-${index}`}
            type="button"
            onClick={() => setSelectedIndex(index)}
            className={`group relative overflow-hidden rounded-2xl bg-slate-200 text-left ${
              index === 0
                ? "col-span-2 aspect-[16/10] md:col-span-2 md:row-span-2 md:aspect-auto"
                : "aspect-square"
            }`}
            aria-label={`${clickLabel}: ${item.alt}`}
          >
            <img
              src={item.image}
              alt={item.alt}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

            <div className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-[#087443] opacity-0 shadow-lg transition duration-300 group-hover:opacity-100">
              {clickLabel}
            </div>
          </button>
        ))}
      </div>

      {/* =========================================================
          FULLSCREEN IMAGE VIEWER
      ========================================================= */}
      {selectedImage && selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.alt}
          onClick={closeViewer}
        >
          {/* IMAGE AREA */}
          <div
            className="relative flex h-full w-full items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.alt}
              className="max-h-[88vh] max-w-[92vw] rounded-lg object-contain shadow-2xl"
            />

            {/* CLOSE */}
            <button
              type="button"
              onClick={closeViewer}
              aria-label={closeLabel}
              className="absolute right-2 top-2 flex size-11 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg transition hover:scale-105 hover:bg-slate-100 sm:right-4 sm:top-4"
            >
              <X className="size-6" />
            </button>

            {/* PREVIOUS */}
            <button
              type="button"
              onClick={showPrevious}
              aria-label={previousLabel}
              className="absolute left-2 top-1/2 flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-slate-900 shadow-lg transition hover:scale-105 hover:bg-white sm:left-6"
            >
              <ChevronLeft className="size-6" />
            </button>

            {/* NEXT */}
            <button
              type="button"
              onClick={showNext}
              aria-label={nextLabel}
              className="absolute right-2 top-1/2 flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-slate-900 shadow-lg transition hover:scale-105 hover:bg-white sm:right-6"
            >
              <ChevronRight className="size-6" />
            </button>

            {/* IMAGE COUNTER */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/70 px-4 py-2 text-xs font-medium text-white backdrop-blur-md sm:bottom-5">
              {selectedIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

