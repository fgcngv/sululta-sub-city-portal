

"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { useEffect, useState } from "react";

type GalleryItem = {
  image: string;
  alt: string;
};

type Props = {
  items: GalleryItem[];
  clickToView: string;
  close: string;
  previous: string;
  next: string;
};

export default function ScienceGallery({
  items,
  clickToView,
  close,
  previous,
  next,
}: Props) {
  const [selected, setSelected] = useState<number | null>(null);

  const selectedItem =
    selected !== null ? items[selected] : null;

  const openImage = (index: number) => {
    setSelected(index);
  };

  const closeImage = () => {
    setSelected(null);
  };

  const showPrevious = () => {
    if (selected === null) return;

    setSelected(
      selected === 0 ? items.length - 1 : selected - 1
    );
  };

  const showNext = () => {
    if (selected === null) return;

    setSelected(
      selected === items.length - 1 ? 0 : selected + 1
    );
  };

  useEffect(() => {
    if (selected === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeImage();
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
  }, [selected]);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {items.map((item, index) => (
          <button
            key={`${item.image}-${index}`}
            type="button"
            onClick={() => openImage(index)}
            className={`group relative overflow-hidden rounded-2xl bg-slate-200 text-left ${
              index === 0
                ? "col-span-2 row-span-2 aspect-square md:aspect-auto"
                : "aspect-square"
            }`}
            aria-label={`${clickToView}: ${item.alt}`}
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/35" />

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 transition group-hover:opacity-100">
              <span className="rounded-full bg-white/90 px-3 py-2 text-xs font-semibold text-[#231f20]">
                {clickToView}
              </span>

              <span className="flex size-9 items-center justify-center rounded-full bg-white/90 text-[#231f20]">
                <Maximize2 className="size-4" />
              </span>
            </div>
          </button>
        ))}
      </div>

      {selectedItem && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.alt}
          onClick={closeImage}
        >
          <button
            type="button"
            onClick={closeImage}
            aria-label={close}
            className="absolute right-5 top-5 z-20 flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <X className="size-6" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label={previous}
            className="absolute left-4 top-1/2 z-20 flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 md:left-8"
          >
            <ChevronLeft className="size-7" />
          </button>

          <div
            className="relative h-[85vh] w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selectedItem.image}
              alt={selectedItem.alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label={next}
            className="absolute right-4 top-1/2 z-20 flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 md:right-8"
          >
            <ChevronRight className="size-7" />
          </button>
        </div>
      )}
    </>
  );
}