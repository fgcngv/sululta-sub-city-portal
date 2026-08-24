import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  HardHat,
  MapPin,
} from "lucide-react";

const projects = [
  {
    title: "Fitesha – Sululta Road Project",
    description:
      "Road infrastructure development connecting Fitesha and Sululta, supporting improved mobility, traffic flow and urban connectivity.",
    category: "Roads & Transport",
    status: "Ongoing",
    location: "Sululta",
    image: "/images/projects/img25.png",
  },
  {
    title: "Electricity Network Rehabilitation & Expansion",
    description:
      "Rehabilitation and expansion of electricity distribution infrastructure to improve reliability and support the growing urban area.",
    category: "Electricity",
    status: "Ongoing",
    location: "Sululta",
    image: "/images/projects/img24.png",
  },
  {
    title: "Water Supply & Distribution Improvements",
    description:
      "Investment in water transmission, distribution and public water access to improve reliable water services for residents.",
    category: "Water & Sanitation",
    status: "Ongoing",
    location: "Sululta",
    image: "/images/projects/img47.png",
  },
];

const priorities = [
  "Better road connectivity",
  "Reliable water services",
  "Improved electricity access",
  "Modern public facilities",
  "Green and clean urban spaces",
  "Planned urban expansion",
];

const statusStyles = {
  Ongoing:
    "bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-600/20",
  Completed:
    "bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-600/20",
  Planned:
    "bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-600/20",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
   {/* Introduction */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-700">
              Our Development Work
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Building infrastructure for a better future
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-slate-600">
            <p>
              Development projects play an important role in improving public
              services, supporting economic activity and creating better
              living conditions for residents.
            </p>

            <p>
              Our work focuses on practical infrastructure improvements
              including transportation, water, electricity and other
              essential public services.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="border-y border-slate-200 bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-2xl">

            <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
              Current development projects
            </h2>

            <p className="mt-4 text-slate-600">
              Explore some of the major development projects currently
              supporting infrastructure and public services.
            </p>
          </div>

          {/* Project cards */}
          <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image */}
                <Link
                  href="/gallery"
                  className="relative block aspect-[16/10] overflow-hidden bg-slate-100"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-red-700 shadow-sm">
                    View project images
                  </span>
                </Link>

                {/* Content */}
                <div className="p-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs font-semibold uppercase tracking-wide text-red-700">
                      {project.category}
                    </span>

                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                        statusStyles[
                          project.status as keyof typeof statusStyles
                        ]
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-semibold text-slate-950">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {project.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-5 text-sm text-slate-500">
                    <MapPin className="size-4" />
                    {project.location}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Gallery link */}
          <div className="mt-10 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 rounded-lg bg-red-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-800"
            >
              Explore project gallery
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Priorities */}
      <section id="priorities" className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-400">
                Development Priorities
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                Investing in the future
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-slate-400">
                Our development agenda focuses on practical improvements that
                create a more connected, accessible, sustainable and
                productive community.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {priorities.map((priority) => (
                <div
                  key={priority}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <CheckCircle2 className="size-5 shrink-0 text-emerald-400" />

                  <span className="text-sm font-medium text-slate-200">
                    {priority}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="overflow-hidden rounded-3xl bg-red-700 px-6 py-12 text-center sm:px-12">
          <Clock3 className="mx-auto size-10 text-red-100" />

          <h2 className="mt-5 text-3xl font-bold text-white">
            Have a project or infrastructure concern?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-red-100">
            Share your feedback or report an infrastructure issue to help
            improve services and development across Sululta.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-red-700 transition hover:bg-red-50"
            >
              Contact the Administration
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}