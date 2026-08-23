
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
} from "lucide-react";
import { useState } from "react";

type GalleryImage = {
  src: string;
  name: string;
};

type GalleryClientProps = {
  images: GalleryImage[];
};

export default function GalleryClient({
  images,
}: GalleryClientProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedImage =
    selectedIndex !== null ? images[selectedIndex] : null;

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const previousImage = () => {
    if (selectedIndex === null || images.length === 0) return;

    setSelectedIndex(
      selectedIndex === 0
        ? images.length - 1
        : selectedIndex - 1
    );
  };

  const nextImage = () => {
    if (selectedIndex === null || images.length === 0) return;

    setSelectedIndex(
      selectedIndex === images.length - 1
        ? 0
        : selectedIndex + 1
    );
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="border-b bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-red-700 transition-colors hover:text-slate-700"
          >
            <ArrowLeft className="size-4" />
            Back to home
          </Link>

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Gallery
          </p>

          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-red-700 sm:text-5xl">
            Our projects and activities
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Explore photographs from our projects, activities, community
            work and development initiatives.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        {images.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 px-6 py-16 text-center">
            <p className="text-sm text-slate-500">
              No images have been added to the gallery yet.
            </p>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className="group relative overflow-hidden rounded-2xl bg-slate-100 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-4"
                aria-label={`View image ${index + 1}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={image.src}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/40">
                    <div className="flex size-12 scale-75 items-center justify-center rounded-full bg-white/95 text-slate-800 opacity-0 shadow-lg transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                      <Maximize2 className="size-5" />
                    </div>
                  </div>

                  {/* Image number */}
                  <div className="absolute bottom-3 left-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                    {index + 1}
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onClick={closeLightbox}
        >
          <div
            className="relative flex w-full max-w-7xl flex-col"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close */}
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute right-2 top-2 z-30 flex size-11 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-white sm:right-4 sm:top-4"
              aria-label="Close image viewer"
            >
              <X className="size-5" />
            </button>

            {/* Previous */}
            {images.length > 1 && (
              <button
                type="button"
                onClick={previousImage}
                className="absolute left-2 top-1/2 z-30 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-white sm:left-4"
                aria-label="Previous image"
              >
                <ChevronLeft className="size-6" />
              </button>
            )}

            {/* Next */}
            {images.length > 1 && (
              <button
                type="button"
                onClick={nextImage}
                className="absolute right-2 top-1/2 z-30 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-white sm:right-4"
                aria-label="Next image"
              >
                <ChevronRight className="size-6" />
              </button>
            )}

            {/* Large image */}
            <div className="relative h-[75vh] w-full overflow-hidden rounded-xl bg-black">
              <Image
                src={selectedImage.src}
                alt={`Gallery image ${selectedIndex! + 1}`}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            {/* Counter */}
            <div className="mt-3 text-center text-sm text-white/70">
              {selectedIndex! + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}