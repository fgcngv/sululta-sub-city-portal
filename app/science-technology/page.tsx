

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Database,
  Globe2,
  Lightbulb,
  MonitorSmartphone,
  Network,
  Rocket,
  Satellite,
  Users,
  Wifi,
  Zap,
} from "lucide-react";

import { getCurrentDictionary } from "@/lib/i18n/index";
import ScienceGallery from "@/components/science-technology/science-gallery";

const scienceImages = [
  {
    image: "/images/projects/img71.png",
  },
  {
    image: "/images/projects/img68.png",
  },
  {
    image: "/images/projects/img65.png",
  },
  {
    image: "/images/projects/img66.png",
  },
  {
    image: "/images/projects/img67.png",
  },
  {
    image: "/images/projects/img69.png",
  },
  {
    image: "/images/projects/img64.png",
  },
];

export default async function ScienceTechnologyPage() {
  const t = await getCurrentDictionary();

  const science = t.scienceTechnology;

  const focusIcons = [
    MonitorSmartphone,
    Lightbulb,
    Users,
    Globe2,
    Network,
    Wifi,
  ];

  const initiativeIcons = [
    Database,
    Lightbulb,
    Rocket,
    Satellite,
  ];

  return (
    <main className="min-h-screen bg-[#f7f7f5] text-[#231f20]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative isolate overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <Image
            src="/images/projects/img71.png"
            alt={science.hero.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-slate-950/20" />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-[600px] max-w-7xl items-end px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur">
              <Cpu className="size-4 text-[#ed1c24]" />
              {science.hero.badge}
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl">
              {science.hero.title}

              <span className="block text-slate-300">
                {science.hero.subtitle}
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              {science.hero.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#focus"
                className="inline-flex items-center gap-2 rounded-lg bg-[#087443] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#07653a]"
              >
                {science.hero.explore}
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href="#gallery"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                {science.hero.gallery}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================= */}
      <section className="border-b border-black/5 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#087443]">
                {science.introduction.eyebrow}
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                {science.introduction.title}
              </h2>
            </div>

            <div className="space-y-4 text-base leading-7 text-[#231f20]/65">
              {science.introduction.paragraphs.map(
                (paragraph: string) => (
                  <p key={paragraph}>{paragraph}</p>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOCUS AREAS
      ========================================================= */}
      <section
        id="focus"
        className="border-y border-black/5 bg-[#f7f7f5]"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#ed1c24]">
              {science.focusAreas.eyebrow}
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              {science.focusAreas.title}
            </h2>

            <p className="mt-4 leading-7 text-[#231f20]/60">
              {science.focusAreas.description}
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {science.focusAreas.items.map(
              (
                item: {
                  title: string;
                  description: string;
                },
                index: number
              ) => {
                const Icon = focusIcons[index];

                return (
                  <article
                    key={item.title}
                    className="group rounded-2xl border border-black/5 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex size-12 items-center justify-center rounded-xl bg-[#087443]/10 text-[#087443] transition group-hover:bg-[#087443] group-hover:text-white">
                      <Icon className="size-6" />
                    </div>

                    <h3 className="mt-5 text-lg font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#231f20]/60">
                      {item.description}
                    </p>
                  </article>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* =========================================================
          OFFICE FEATURE
      ========================================================= */}
      <section className="bg-[#231f20]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src="/images/projects/img67.png"
                alt={science.office.title}
                width={1200}
                height={900}
                className="h-auto w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5">
                <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-[#231f20]">
                  {science.office.eyebrow}
                </span>
              </div>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#ed1c24]">
                {science.office.eyebrow}
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {science.office.title}
              </h2>

              <p className="mt-5 leading-7 text-white/60">
                {science.office.description}
              </p>

              <div className="mt-7 rounded-2xl border border-white/10 bg-white/5 p-6">
                <Zap className="size-7 text-[#ed1c24]" />

                <p className="mt-4 text-lg leading-8 text-white/80">
                  “{science.office.quote}”
                </p>

                <div className="mt-5 border-t border-white/10 pt-5">
                  <p className="font-semibold text-white">
                    {science.office.officer}
                  </p>

                  <p className="mt-1 text-sm text-white/45">
                    {science.office.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INITIATIVES
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#087443]">
              {science.initiatives.eyebrow}
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              {science.initiatives.title}
            </h2>

            <p className="mt-4 leading-7 text-[#231f20]/60">
              {science.initiatives.description}
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {science.initiatives.items.map(
              (
                item: {
                  title: string;
                  description: string;
                },
                index: number
              ) => {
                const Icon = initiativeIcons[index];

                return (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-black/5 bg-[#f7f7f5] p-7"
                  >
                    <div className="flex items-start gap-5">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#087443]/10 text-[#087443]">
                        <Icon className="size-6" />
                      </div>

                      <div>
                        <h3 className="text-xl font-bold">
                          {item.title}
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-[#231f20]/60">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* =========================================================
          GALLERY
      ========================================================= */}
      <section id="gallery" className="bg-[#f7f7f5]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#ed1c24]">
              {science.gallery.eyebrow}
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              {science.gallery.title}
            </h2>

            <p className="mt-4 leading-7 text-[#231f20]/60">
              {science.gallery.description}
            </p>
          </div>

          <div className="mt-10">
            <ScienceGallery
              items={scienceImages.map((item, index) => ({
                image: item.image,
                alt: `${science.gallery.imageAlt} ${index + 1}`,
              }))}
              clickToView={science.gallery.clickToView}
              close={science.gallery.close}
              previous={science.gallery.previous}
              next={science.gallery.next}
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          OPPORTUNITIES
      ========================================================= */}
      <section className="border-y border-black/5 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#087443]">
                {science.opportunities.eyebrow}
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                {science.opportunities.title}
              </h2>

              <p className="mt-5 leading-7 text-[#231f20]/60">
                {science.opportunities.description}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {science.opportunities.items.map(
                (item: string) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-black/5 bg-[#f7f7f5] px-5 py-4"
                  >
                    <CheckCircle2 className="size-5 shrink-0 text-[#087443]" />

                    <span className="text-sm font-medium">
                      {item}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FUTURE
      ========================================================= */}
      <section className="bg-[#231f20]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#ed1c24]">
                {science.future.eyebrow}
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {science.future.title}
              </h2>

              <p className="mt-5 leading-7 text-white/60">
                {science.future.description}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {science.future.points.map(
                (point: string) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-4"
                  >
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#087443]" />

                    <span className="text-sm text-white/70">
                      {point}
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
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="relative overflow-hidden rounded-3xl bg-[#087443] px-6 py-14 text-center sm:px-12">
          <div className="absolute -right-20 -top-20 size-64 rounded-full bg-white/10" />

          <div className="absolute -bottom-24 -left-20 size-72 rounded-full bg-black/10" />

          <div className="relative">
            <Cpu className="mx-auto size-10 text-white/90" />

            <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
              {science.cta.title}
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
              {science.cta.description}
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#087443] transition hover:bg-white/90"
            >
              {science.cta.button}

              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}