



import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
  items?: Project[];
  showViewAll?: boolean;
};

const recentProjects: Project[] = [
  {
    id: "project-1",
    title: "Gamoo Waajjira Bulchiinsa Kutaa Magaalaa Sulultaa",
    year: 2026,
    location: "Addis Ababa",
    description:
      "",
    image: "/images/projects/img-1.png",
    href: "/projects/community-development",
  },
  {
    id: "project-2",
    title: "Kutaa Magaalaa sulultaatti Staadiyeemii spoortii",
    year: 2025,
    location: "Ethiopia",
    description:
      "",
    image: "/images/projects/img2.png",
    href: "/projects/urban-infrastructure",
  },
  {
    id: "project-3",
    title: "Kutaa Magaalaa sulultaatti Gamoo Buufata Fayyaa",
    year: 2024,
    location: "Ethiopia",
    description:
      "A rural development initiative focused on strengthening local communities and improving essential infrastructure.",
    image: "/images/projects/img4.png",
    href: "/projects/rural-development",
  },
  {
    id: "project-4",
    title: "Kutaa magaalaa sulultaatti Gamoo Giddugala Gabaa",
    year: 2023,
    location: "Ethiopia",
    description:
      "Construction and development of public facilities supporting communities and improving access to public services.",
    image: "/images/projects/img3.png",
    href: "/projects/public-facility",
  },
  {
    id: "project-5",
    title: "Karaa Keessa Keessaa",
    year: 2022,
    location: "Ethiopia",
    description:
      "",
    image: "/images/projects/img5.png",
    href: "/projects/infrastructure-improvement",
  },
];

export function ProjectsPreview({
  items = recentProjects,
  showViewAll = true,
}: ProjectsPreviewProps) {
  const currentYear = new Date().getFullYear();

  // Projects completed during the most recent five years
  const recentFiveYears = items.filter(
    (project) =>
      project.year >= currentYear - 4 && project.year <= currentYear
  );

  return (
    <section
      aria-labelledby="projects-preview-heading"
      className="bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {/* Heading */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Our Projects
            </p>

            <h2
              id="projects-preview-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-red-700 sm:text-4xl"
            >
              Projects completed in the last five years
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Explore some of the development projects completed in recent
              years and their impact on communities and infrastructure.
            </p>
          </div>

          {showViewAll && (
            <Link
              href="/projects"
              className="inline-flex min-h-11 shrink-0 items-center gap-2 text-sm font-semibold text-red-700 transition-colors hover:text-slate-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-4"
            >
              View all projects
              <ArrowRight className="size-4" />
            </Link>
          )}
        </div>

        {/* Project cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recentFiveYears.map((project) => (
            <Link
              key={project.id}
              href={"/gallery"}
              className="group overflow-hidden rounded-2xl border bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2"
            >
              {/* Project image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Year badge */}
                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-red-700 shadow-sm">
                </span>
              </div>

              {/* Project information */}
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {project.location}
                </p>

                <h3 className="mt-2 text-xl font-semibold text-red-700">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {project.description}
                </p>

                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-red-700">
                  View Galleries
                  {/* <ExternalLink
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  /> */}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}