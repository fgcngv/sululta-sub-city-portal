


import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Droplets,
  Leaf,
  Tractor,
  Trees,
  Users,
} from "lucide-react";

import { getCurrentDictionary } from "@/lib/i18n/index";
import AgricultureGallery from "./AgricultureGallery";
// import AgricultureGallery from "./AgricultureGallery";

const agricultureImages = [
  "/images/projects/img7.png",
  "/images/projects/img6.png",
  "/images/projects/img33.png",
  "/images/projects/img32.png",
  "/images/projects/img35.png",
  "/images/projects/img30.png",
];

export default async function AgriculturePage() {
  const t = await getCurrentDictionary();

  const agriculture = t.agricultures;

  const focusAreas = [
    {
      icon: Leaf,
      title: agriculture.focus.areas.production.title,
      description: agriculture.focus.areas.production.description,
    },
    {
      icon: Droplets,
      title: agriculture.focus.areas.irrigation.title,
      description: agriculture.focus.areas.irrigation.description,
    },
    {
      icon: Tractor,
      title: agriculture.focus.areas.mechanization.title,
      description: agriculture.focus.areas.mechanization.description,
    },
    {
      icon: Trees,
      title: agriculture.focus.areas.sustainable.title,
      description: agriculture.focus.areas.sustainable.description,
    },
  ];

  return (
    <main className="min-h-screen bg-[#f7f7f5] text-[#231f20]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative isolate overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <Image
            src="/images/projects/img73.png"
            alt={agriculture.hero.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/55 to-slate-950/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-[580px] max-w-7xl items-end px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur">
              <Leaf className="size-4 text-[#087443]" />
              {agriculture.hero.badge}
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl">
              {agriculture.hero.title}

              <span className="block text-slate-300">
                {agriculture.hero.subtitle}
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              {agriculture.hero.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#initiatives"
                className="inline-flex items-center gap-2 rounded-lg bg-[#087443] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#07653a]"
              >
                {agriculture.hero.exploreButton}
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href="#gallery"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                {agriculture.hero.galleryButton}
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
                {agriculture.introduction.eyebrow}
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                {agriculture.introduction.title}
              </h2>
            </div>

            <div className="space-y-4 text-base leading-7 text-[#231f20]/65">
              {agriculture.introduction.paragraphs.map(
                (paragraph: string) => (
                  <p key={paragraph}>{paragraph}</p>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          AGRICULTURE FOCUS AREAS
      ========================================================= */}
      <section className="border-y border-black/5 bg-[#f7f7f5]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#ed1c24]">
              {agriculture.focus.eyebrow}
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              {agriculture.focus.title}
            </h2>

            <p className="mt-4 leading-7 text-[#231f20]/60">
              {agriculture.focus.description}
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.title}
                  className="group rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex size-12 items-center justify-center rounded-xl bg-[#087443]/10 text-[#087443] transition group-hover:bg-[#087443] group-hover:text-white">
                    <Icon className="size-6" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold">
                    {area.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#231f20]/60">
                    {area.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          AGRICULTURAL INITIATIVES
      ========================================================= */}
      <section id="initiatives" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#087443]">
                {agriculture.initiatives.eyebrow}
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                {agriculture.initiatives.title}
              </h2>
            </div>

            <p className="leading-7 text-[#231f20]/60">
              {agriculture.initiatives.description}
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {agriculture.initiatives.items.map(
              (
                initiative: {
                  title: string;
                  description: string;
                  image: string;
                  imageAlt: string;
                  category: string;
                },
                index: number
              ) => (
                <article
                  key={`${initiative.title}-${index}`}
                  className="group overflow-hidden rounded-2xl border border-black/5 bg-[#f7f7f5] shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={initiative.image}
                      alt={initiative.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                      <span className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-[#087443]">
                        {initiative.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold">
                      {initiative.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#231f20]/60">
                      {initiative.description}
                    </p>

                    <button
                      type="button"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#087443]"
                    >
                      {agriculture.learnMore}
                      <ArrowRight className="size-4" />
                    </button>
                  </div>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      {/* =========================================================
          FARMERS / COMMUNITY
      ========================================================= */}
      <section className="bg-green-950">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#ed1c24]">
                {agriculture.community.eyebrow}
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {agriculture.community.title}
              </h2>

              <p className="mt-5 leading-7 text-white/60">
                {agriculture.community.description}
              </p>

              <div className="mt-8 space-y-3">
                {agriculture.community.items.map((item: string) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
                  >
                    <CheckCircle2 className="size-5 shrink-0 text-[#0fcd77]" />

                    <span className="text-sm font-medium text-white/80">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[420px] overflow-hidden rounded-3xl">
              <Image
                src="/images/projects/img30.png"
                alt={agriculture.community.imageAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-black/50 p-5 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <Users className="size-6 text-white" />

                  <p className="text-sm font-semibold text-white">
                    {agriculture.community.imageCaption}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          GALLERY
      ========================================================= */}
      <section id="gallery" className="bg-[#f7f7f5]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#087443]">
              {agriculture.gallery.eyebrow}
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              {agriculture.gallery.title}
            </h2>

            <p className="mt-4 leading-7 text-[#231f20]/60">
              {agriculture.gallery.description}
            </p>
          </div>

          <div className="mt-10">
            <AgricultureGallery
              images={agricultureImages.map((image, index) => ({
                image,
                alt: `${agriculture.gallery.imageAlt} ${index + 1}`,
              }))}
              clickLabel={agriculture.clickView}
              closeLabel={agriculture.close}
              previousLabel={agriculture.previous}
              nextLabel={agriculture.next}
            />
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
            <Tractor className="mx-auto size-10 text-white/90" />

            <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
              {agriculture.cta.title}
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
              {agriculture.cta.description}
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#087443] transition hover:bg-white/90"
            >
              {agriculture.cta.button}

              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}


