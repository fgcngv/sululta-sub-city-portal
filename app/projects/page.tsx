import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  MapPin,
} from "lucide-react";

import { getCurrentDictionary } from "@/lib/i18n/index";
import { ProjectsPreview } from "@/components/home/services-preview";

const projects = [
  {
    id: "fitesha-sululta-road",
    image: "/images/projects/img2335.png",
  },
  {
    id: "electricity-network",
    image: "/images/projects/img24.png",
  },
  {
    id: "water-supply",
    image: "/images/projects/img47.png",
  },
];

const statusStyles = {
  ongoing:
    "bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-600/20",
  completed:
    "bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-600/20",
  planned:
    "bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-600/20",
};

export default async function ProjectsPage() {
  const t = await getCurrentDictionary();

  const projectsPage = t.projectsPage;

  return (
    <main className="min-h-screen bg-slate-50">
      {/* =========================================================
          INTRODUCTION
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-700">
              {projectsPage.introduction.eyebrow}
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              {projectsPage.introduction.title}
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-slate-600">
            {projectsPage.introduction.paragraphs.map(
              (paragraph: string) => (
                <p key={paragraph}>{paragraph}</p>
              )
            )}
          </div>
        </div>
      </section>

      {/* =========================================================
          PROJECTS
      ========================================================= */}
      <ProjectsPreview t={t} />

      <section
        id="projects"
        className="border-y border-slate-200 bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
              {projectsPage.projects.title}
            </h2>

            <p className="mt-4 text-slate-600">
              {projectsPage.projects.description}
            </p>
          </div>

          {/* Project Cards */}
          <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => {
              const data = projectsPage.projects.items.find(
                (item: {
                  id: string;
                  title: string;
                  description: string;
                  category: string;
                  status: string;
                  location: string;
                }) => item.id === project.id
              );

              if (!data) return null;

              return (
                <article
                  key={project.id}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Image */}
                  <div
                    className="relative block aspect-[16/10] overflow-hidden bg-slate-100"
                  >
                    <Image
                      src={project.image}
                      alt={data.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-red-700 shadow-sm">
                      {projectsPage.projects.viewImages}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="text-xs font-semibold uppercase tracking-wide text-red-700">
                        {data.category}
                      </span>

                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                          statusStyles[
                            data.status.toLowerCase() as keyof typeof statusStyles
                          ] ?? statusStyles.ongoing
                        }`}
                      >
                        {data.status}
                      </span>
                    </div>

                    <h3 className="mt-4 text-xl font-semibold text-slate-950">
                      {data.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {data.description}
                    </p>

                    <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-5 text-sm text-slate-500">
                      <MapPin className="size-4" />
                      {data.location}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Gallery Link */}
          <div className="mt-10 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 rounded-lg bg-red-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-800"
            >
              {projectsPage.projects.galleryButton}
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          PRIORITIES
      ========================================================= */}
      <section id="priorities" className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-400">
                {projectsPage.priorities.eyebrow}
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                {projectsPage.priorities.title}
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-slate-400">
                {projectsPage.priorities.description}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {projectsPage.priorities.items.map(
                (priority: string) => (
                  <div
                    key={priority}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
                  >
                    <CheckCircle2 className="size-5 shrink-0 text-emerald-400" />

                    <span className="text-sm font-medium text-slate-200">
                      {priority}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="overflow-hidden rounded-3xl bg-red-700 px-6 py-12 text-center sm:px-12">
          <Clock3 className="mx-auto size-10 text-red-100" />

          <h2 className="mt-5 text-3xl font-bold text-white">
            {projectsPage.cta.title}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-red-100">
            {projectsPage.cta.description}
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-red-700 transition hover:bg-red-50"
            >
              {projectsPage.cta.button}
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}