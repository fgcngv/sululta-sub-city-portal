

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  Globe2,
  Heart,
  Landmark,
  Mountain,
  Trees,
  Users,
} from "lucide-react";

import { getCurrentDictionary } from "@/lib/i18n/index";
import CultureGallery from "@/components/culture-tourism/CultureGallery";

const galleryImages = [
  {
    image: "/images/projects/img120.png",
    title: "Sululta landscape",
  },
  {
    image: "/images/projects/img119.png",
    title: "Tourism destination",
  },
  {
    image: "/images/projects/img114.png",
    title: "Local culture",
  },
  {
    image: "/images/projects/img115.png",
    title: "Community life",
  },
  {
    image: "/images/projects/img116.png",
    title: "Natural beauty",
  },
  {
    image: "/images/projects/img118.png",
    title: "Cultural heritage",
  },
  {
    image: "/images/projects/img117.png",
    title: "Sululta community",
  },
  {
    image: "/images/projects/img121.png",
    title: "Nature and tourism",
  },
  {
    image: "/images/projects/img122.png",
    title: "Local heritage",
  },
];

export default async function CultureTourismPage() {
  const t = await getCurrentDictionary();

  const cultureTourism = t.cultureTourism;

  const cultureIcons = [
    Landmark,
    Globe2,
    Users,
  ];

  const tourismIcons = [
    Trees,
    Mountain,
    Compass,
  ];

  return (
    <main className="min-h-screen bg-[#f7f7f5] text-[#231f20]">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative isolate min-h-[620px] overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <Image
            src="/images/projects/img113.png"
            alt="{cultureTourism.hero.imageAlt}"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-end px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-4xl">

            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur">
              <Globe2 className="size-4 text-[#ed1c24]" />
              {cultureTourism.hero.badge}
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl">
              {cultureTourism.hero.title}

              <span className="block text-slate-300">
                {cultureTourism.hero.subtitle}
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              {cultureTourism.hero.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <Link
                href="#discover"
                className="inline-flex items-center gap-2 rounded-lg bg-[#087443] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#07653a]"
              >
                {cultureTourism.hero.explore}
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href="#gallery"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                {cultureTourism.hero.viewGallery}
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================= */}
      <section
        id="discover"
        className="border-b border-black/5 bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#087443]">
                {cultureTourism.introduction.eyebrow}
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                {cultureTourism.introduction.title}
              </h2>
            </div>

            <div className="space-y-5 text-base leading-7 text-[#231f20]/65">
              {cultureTourism.introduction.paragraphs.map(
                (paragraph: string) => (
                  <p key={paragraph}>{paragraph}</p>
                )
              )}
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          CULTURE
      ========================================================= */}
      <section className="bg-[#f7f7f5]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">

          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#ed1c24]">
              {cultureTourism.culture.eyebrow}
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              {cultureTourism.culture.title}
            </h2>

            <p className="mt-4 leading-7 text-[#231f20]/60">
              {cultureTourism.culture.description}
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            {cultureTourism.culture.items.map(
              (
                item: {
                  title: string;
                  description: string;
                },
                index: number
              ) => {
                const Icon = cultureIcons[index];

                return (
                  <article
                    key={item.title}
                    className="group rounded-2xl border border-black/5 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex size-12 items-center justify-center rounded-xl bg-[#087443]/10 text-[#087443] transition group-hover:bg-[#087443] group-hover:text-white">
                      <Icon className="size-6" />
                    </div>

                    <h3 className="mt-5 text-xl font-bold">
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
          TOURISM
      ========================================================= */}
      <section className="border-y border-black/5 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">

          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#087443]">
                {cultureTourism.tourism.eyebrow}
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                {cultureTourism.tourism.title}
              </h2>

              <p className="mt-4 max-w-3xl leading-7 text-[#231f20]/60">
                {cultureTourism.tourism.description}
              </p>
            </div>

            <div className="flex justify-start lg:justify-end">
              <div className="inline-flex items-center gap-3 rounded-xl bg-[#f7f7f5] px-5 py-4">
                <Compass className="size-5 text-[#ed1c24]" />

                <span className="text-sm font-semibold">
                  Sululta Tourism
                </span>
              </div>
            </div>

          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            {cultureTourism.tourism.items.map(
              (
                item: {
                  title: string;
                  description: string;
                },
                index: number
              ) => {
                const Icon = tourismIcons[index];

                return (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-black/5 bg-[#f7f7f5] p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg"
                  >
                    <div className="flex size-12 items-center justify-center rounded-xl bg-white text-[#087443] shadow-sm ring-1 ring-black/5">
                      <Icon className="size-6" />
                    </div>

                    <h3 className="mt-5 text-xl font-bold">
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
          GALLERY
      ========================================================= */}
      <section
        id="gallery"
        className="bg-[#f7f7f5]"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">

          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#087443]">
              {cultureTourism.gallery.eyebrow}
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              {cultureTourism.gallery.title}
            </h2>

            <p className="mt-4 leading-7 text-[#231f20]/60">
              {cultureTourism.gallery.description}
            </p>
          </div>

          <CultureGallery
            images={galleryImages}
            imageAlt={cultureTourism.gallery.imageAlt}
            clickToView={cultureTourism.gallery.clickToView}
            close={cultureTourism.gallery.close}
            previous={cultureTourism.gallery.previous}
            next={cultureTourism.gallery.next}
            imageOf={cultureTourism.gallery.imageOf}
            of={cultureTourism.gallery.of}
          />

        </div>
      </section>

      {/* =========================================================
          TOURISM OPPORTUNITIES
      ========================================================= */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#ed1c24]">
                {cultureTourism.opportunities.eyebrow}
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                {cultureTourism.opportunities.title}
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-slate-400">
                {cultureTourism.opportunities.description}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">

              {cultureTourism.opportunities.items.map(
                (item: string) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
                  >
                    <CheckCircle2 className="size-5 shrink-0 text-emerald-400" />

                    <span className="text-sm font-medium text-slate-200">
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
          COMMUNITY
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">

          <div className="mx-auto max-w-3xl text-center">

            <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-[#ed1c24]/10 text-[#ed1c24]">
              <Heart className="size-7" />
            </div>

            <p className="mt-6 text-sm font-bold uppercase tracking-[0.16em] text-[#087443]">
              {cultureTourism.community.eyebrow}
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              {cultureTourism.community.title}
            </h2>

            <p className="mt-5 leading-7 text-[#231f20]/60">
              {cultureTourism.community.description}
            </p>

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

            <Globe2 className="mx-auto size-10 text-white/90" />

            <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
              {cultureTourism.cta.title}
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
              {cultureTourism.cta.description}
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#087443] transition hover:bg-white/90"
            >
              {cultureTourism.cta.button}

              <ArrowRight className="size-4" />
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
}