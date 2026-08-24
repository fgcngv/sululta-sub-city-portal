


"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Images, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

type AgricultureInitiative = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  href?: string;
};

const agricultureInitiatives: AgricultureInitiative[] = [
  {
    id: "agriculture-1",
    title: "",
    category: "Farmer Development",
    description:
      "",
    image: "/images/projects/img6.png",
    href: "/initiatives/smallholder-farmer-support",
  },
  {
    id: "agriculture-2",
    title: "Crop Production Initiative",
    category: "Crop Production",
    description:
      ".",
    image: "/images/projects/img7.png",
    href: "/initiatives/crop-production",
  },
  {
    id: "agriculture-3",
    title: "Irrigation Development",
    category: "Irrigation",
    description:
      "",
    image: "/images/projects/img8.png",
    href: "/initiatives/irrigation-development",
  },
  {
    id: "agriculture-4",
    title: "",
    category: "Livestock",
    description:
      "",
    image: "/images/projects/img9.png",
    href: "/initiatives/livestock-development",
  },
  {
    id: "agriculture-5",
    title: "",
    category: "",
    description:
      ".",
    image: "/images/projects/img10.png",
    href: "/initiatives/agricultural-training",
  },  {
    id: "agriculture-6",
    title: "",
    category: "",
    description:
      ".",
    image: "/images/projects/img26.png",
    href: "/initiatives/agricultural-training",
  },  {
    id: "agriculture-7",
    title: "",
    category: "",
    description:
      ".",
    image: "/images/projects/img27.png",
    href: "/initiatives/agricultural-training",
  },  {
    id: "agriculture-8",
    title: "",
    category: "",
    description:
      ".",
    image: "/images/projects/img28.png",
    href: "/initiatives/agricultural-training",
  }, {
    id: "agriculture-9",
    title: "",
    category: "",
    description:
      ".",
    image: "/images/projects/img33.png",
    href: "/initiatives/agricultural-training",
  }, {
    id: "agriculture-10",
    title: "",
    category: "",
    description:
      ".",
    image: "/images/projects/img32.png",
    href: "/initiatives/agricultural-training",
  }, {
    id: "agriculture-11",
    title: "",
    category: "",
    description:
      ".",
    image: "/images/projects/img36.png",
    href: "/initiatives/agricultural-training",
  }, {
    id: "agriculture-12",
    title: "",
    category: "",
    description:
      ".",
    image: "/images/projects/img35.png",
    href: "/initiatives/agricultural-training",
  },
];

type GalleryPreviewProps = {
  t: {
    agriculture: {
      label: string;
      title: string;
      description: string;
      viewAll: string;
      clickView: string;
      close: string;
      previous: string;
      next: string;
      learnMore: string;
    };
  };
};

export function GalleryPreview({
  t,
}: GalleryPreviewProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedInitiative =
    selectedIndex !== null
      ? agricultureInitiatives[selectedIndex]
      : null;

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const showPrevious = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === 0
        ? agricultureInitiatives.length - 1
        : selectedIndex - 1
    );
  };

  const showNext = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === agricultureInitiatives.length - 1
        ? 0
        : selectedIndex + 1
    );
  };

  return (
    <>
      <section
        aria-labelledby="agriculture-preview-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          {/* Heading */}
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
  {t.agriculture.label}
</p>


<h2
  id="agriculture-preview-heading"
  className="mt-3 text-3xl font-bold tracking-tight text-red-700 sm:text-4xl"
>
  {t.agriculture.title}
</h2>


<p className="mt-4 text-base leading-7 text-slate-600">
  {t.agriculture.description}
</p>
            </div>

            <Link
              href="/initiatives"
              className="inline-flex min-h-11 shrink-0 items-center gap-2 text-sm font-semibold text-red-700 transition-colors hover:text-slate-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-4"
            >
             {t.agriculture.viewAll}
              <ArrowRight className="size-4" />
            </Link>
          </div>

          {/* Agriculture initiatives */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {agricultureInitiatives.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className={[
                  "group relative overflow-hidden rounded-2xl bg-slate-100 text-left",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-2",
                  index === 0
                    ? "sm:col-span-2 sm:row-span-2"
                    : "aspect-[4/3]",
                ].join(" ")}
                aria-label={`${t.agriculture.clickView} ${item.title}`}
              >
                <div
                  className={
                    index === 0
                      ? "relative aspect-[4/3] h-full min-h-[280px] sm:min-h-[420px]"
                      : "relative h-full min-h-[220px]"
                  }
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes={
                      index === 0
                        ? "(min-width: 1024px) 50vw, 100vw"
                        : "(min-width: 1024px) 25vw, 50vw"
                    }
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Dark gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Image icon */}
                  <div className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full bg-white/90 text-slate-700 opacity-0 shadow-sm backdrop-blur transition-opacity duration-200 group-hover:opacity-100">
                    <Images className="size-4" />
                  </div>

                  {/* Information */}
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-white/75">
                      <Images className="size-3.5" />
                      {item.category}
                    </div>

                    <h3 className="mt-1 text-base font-semibold sm:text-lg">
                      {item.title}
                    </h3>

                    <p className="mt-2 line-clamp-2 text-sm leading-5 text-white/80">
                      {item.description}
                    </p>

                    <span className="mt-3 inline-block text-xs font-semibold text-white/90">
                    {t.agriculture.clickView}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Image lightbox */}
      {selectedInitiative && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={selectedInitiative.title}
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-2 top-2 z-20 flex size-10 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label={t.agriculture.close}
            >
              <X className="size-5" />
            </button>

            {/* Previous */}
            <button
              type="button"
              onClick={showPrevious}
              className="absolute left-2 top-1/2 z-20 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:left-4"
              aria-label={t.agriculture.previous}
            >
              <ChevronLeft className="size-6" />
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={showNext}
              className="absolute right-2 top-1/2 z-20 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-4"
              aria-label={t.agriculture.next}
            >
              <ChevronRight className="size-6" />
            </button>

            {/* Large image */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-950">
              <Image
                src={selectedInitiative.image}
                alt={selectedInitiative.title}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            {/* Image information */}
            <div className="mt-4 rounded-2xl bg-white p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">
                {selectedInitiative.category}
              </p>

              <h3 className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">
                {selectedInitiative.title}
              </h3>

              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
                {selectedInitiative.description}
              </p>

              {selectedInitiative.href && (
                <Link
                  href={selectedInitiative.href}
                  onClick={closeModal}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-red-700 hover:text-slate-600"
                >
                 {t.agriculture.learnMore}
                  <ArrowRight className="size-4" />
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}