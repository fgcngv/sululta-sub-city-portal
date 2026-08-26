
"use client";

import Image from "next/image";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

type EducationImageLightboxProps = {
  src: string;
  alt: string;
  className?: string;
};

export default function EducationImageLightbox({
  src,
  alt,
  className = "",
}: EducationImageLightboxProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`group relative block w-full cursor-zoom-in overflow-hidden ${className}`}
        aria-label={`View ${alt}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/25">
          <div className="flex size-11 scale-90 items-center justify-center rounded-full bg-white/90 text-[#231f20] opacity-0 shadow-lg transition group-hover:scale-100 group-hover:opacity-100">
            <ZoomIn className="size-5" />
          </div>
        </div>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={alt}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 z-10 flex size-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
            aria-label="Close image"
          >
            <X className="size-6" />
          </button>

          <div
            className="relative h-[85vh] w-full max-w-7xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}