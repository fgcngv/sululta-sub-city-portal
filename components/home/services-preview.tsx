
"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

type Project = {
  id: string;
  title: string;
  year: number;
  location: string;
  description: string;
  image: string;
  href: string;
};

type ProjectsPreviewProps = {
  t: {
    projects: {
      label: string;
      title: string;
      description: string;
      viewAll: string;
      viewGallery: string;

      // Optional translations for the image viewer.
      // Add these to your dictionaries.
      closeImage?: string;
      viewImage?: string;

      items: Project[];
    };
  };

  showViewAll?: boolean;
};

export function ProjectsPreview({
  t,
  showViewAll = true,
}: ProjectsPreviewProps) {
  const currentYear = new Date().getFullYear();

  const recentFiveYears = t.projects.items.filter(
    (project) =>
      project.year >= currentYear - 4 && project.year <= currentYear
  );

  const [selectedImage, setSelectedImage] = useState<Project | null>(null);

  // Close modal with Escape key
  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Prevent background scrolling while modal is open
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <>
      <section
        aria-labelledby="projects-preview-heading"
        className="bg-white"
      >
        <div
          className="
            mx-auto max-w-7xl
            px-4 py-16
            sm:px-6
            lg:px-8
            lg:py-24
          "
        >
          {/* HEADER */}
          <div
            className="
              flex flex-col gap-6
              sm:flex-row
              sm:items-end
              sm:justify-between
            "
          >
            <div className="max-w-2xl">
              <p
                className="
                  text-sm font-semibold
                  uppercase tracking-[0.18em]
                  text-slate-500
                "
              >
                {t.projects.label}
              </p>

              <h2
                id="projects-preview-heading"
                className="
                  mt-3
                  text-3xl font-bold
                  tracking-tight
                  text-red-700
                  sm:text-4xl
                "
              >
                {t.projects.title}
              </h2>

              <p
                className="
                  mt-4
                  text-base
                  leading-7
                  text-slate-600
                "
              >
                {t.projects.description}
              </p>
            </div>
          </div>

          {/* PROJECT CARDS */}
          <div
            className="
              mt-10
              grid gap-6
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {recentFiveYears.map((project) => (
              <div
                key={project.id}
                className="
                  group
                  overflow-hidden
                  rounded-2xl
                  border border-slate-200
                  bg-white
                  transition-all
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >
                {/* IMAGE */}
                <button
                  type="button"
                  onClick={() => setSelectedImage(project)}
                  aria-label={
                    t.projects.viewImage
                      ? `${t.projects.viewImage}: ${project.title}`
                      : `View ${project.title}`
                  }
                  className="
                    relative
                    block
                    w-full
                    aspect-[16/10]
                    overflow-hidden
                    bg-slate-100
                    text-left
                    cursor-zoom-in
                  "
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />

                  {/* Dark hover overlay */}
                  <div
                    className="
                      absolute inset-0
                      flex items-center justify-center
                      bg-black/0
                      transition
                      duration-300
                      group-hover:bg-black/30
                    "
                  >
                    <span
                      className="
                        rounded-full
                        bg-white/95
                        px-4 py-2
                        text-sm
                        font-semibold
                        text-slate-900
                        opacity-0
                        shadow-lg
                        transition
                        duration-300
                        group-hover:opacity-100
                      "
                    >
                      {t.projects.viewImage || "View image"}
                    </span>
                  </div>

                  {/* YEAR */}
                  <span
                    className="
                      absolute
                      left-4
                      top-4
                      rounded-full
                      bg-white/95
                      px-3
                      py-1.5
                      text-xs
                      font-bold
                      text-red-700
                      shadow-sm
                    "
                  >
                    {project.year}
                  </span>
                </button>

                {/* CONTENT */}
                <div className="p-6">
                  <p
                    className="
                      text-xs
                      font-semibold
                      uppercase
                      tracking-wider
                      text-slate-500
                    "
                  >
                    {project.location}
                  </p>

                  <h3
                    className="
                      mt-2
                      text-xl
                      font-semibold
                      text-red-700
                    "
                  >
                    {project.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-6
                      text-slate-600
                    "
                  >
                    {project.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => setSelectedImage(project)}
                    className="
                      mt-6
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      font-semibold
                      text-red-700
                      transition
                      hover:text-red-800
                    "
                  >
                    {t.projects.viewGallery}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FULLSCREEN IMAGE VIEWER
      ========================================================= */}
      {selectedImage && (
        <div
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-black/90
            p-4
            sm:p-8
          "
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
          onClick={() => setSelectedImage(null)}
        >
          {/* IMAGE CONTAINER */}
          <div
            className="
              relative
              flex
              h-full
              w-full
              items-center
              justify-center
            "
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="
                max-h-[90vh]
                max-w-[95vw]
                object-contain
                rounded-lg
                shadow-2xl
              "
            />

            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              aria-label={t.projects.closeImage || "Close image"}
              className="
                absolute
                right-2
                top-2
                flex
                size-11
                items-center
                justify-center
                rounded-full
                bg-white/95
                text-slate-900
                shadow-lg
                transition
                hover:bg-white
                hover:scale-105
                sm:right-4
                sm:top-4
              "
            >
              <X className="size-6" />
            </button>

            {/* IMAGE INFORMATION */}
            <div
              className="
                absolute
                bottom-2
                left-1/2
                w-[calc(100%-1rem)]
                max-w-2xl
                -translate-x-1/2
                rounded-xl
                bg-black/70
                px-5
                py-4
                text-center
                backdrop-blur-md
                sm:bottom-4
              "
            >
              <p className="text-xs font-medium uppercase tracking-wider text-white/60">
                {selectedImage.location} · {selectedImage.year}
              </p>

              <h3 className="mt-1 text-base font-semibold text-white sm:text-lg">
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
