import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Building2,
  CheckCircle2,
  GraduationCap,
  Library,
  School,
  Users,
} from "lucide-react";

import { getCurrentDictionary } from "@/lib/i18n/index";

const publicSchools = [
  {
    image: "/images/projects/img53.png",
  },
  {
    image: "/images/projects/img54.png",
  },
  {
    image: "/images/projects/img55.png",
  },
];

const privateSchools = [
  {
    image: "/education/private-school-1.jpg",
    fallbackImage: "/education/success-2.png",
  },
  {
    image: "/education/private-school-2.jpg",
    fallbackImage: "/education/school-of-success.png",
  },
  {
    image: "/education/private-school-3.jpg",
    fallbackImage: "/education/success-2.png",
  },
];

const educationGallery = [
  {
    image: "/images/projects/img62.png",
  },
  {
    image: "/education/success-2.png",
  },
  {
    image: "/images/projects/img61.png",
  },
  {
    image: "/education/school-of-success.png",
  },
  {
    image: "/images/projects/img63.png",
  },
  {
    image: "/images/projects/img61.png",
  },
];

export default async function EducationPage() {
  const t = await getCurrentDictionary();

  const education = t.education;

  const educationLevels = [
    {
      icon: School,
      title: education.levels.prePrimary.title,
      description: education.levels.prePrimary.description,
    },
    {
      icon: BookOpen,
      title: education.levels.primary.title,
      description: education.levels.primary.description,
    },
    {
      icon: GraduationCap,
      title: education.levels.secondary.title,
      description: education.levels.secondary.description,
    },
    {
      icon: Library,
      title: education.levels.higher.title,
      description: education.levels.higher.description,
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
            src="/images/projects/img44.png"
            alt={education.hero.imageAlt}
            fill
            priority
            className="object-cover opacity-100"
            sizes="100vw"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/20 via-slate-950/80 to-slate-950/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-[580px] max-w-7xl items-end px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur">
              <GraduationCap className="size-4 text-[#ed1c24]" />
              {education.hero.badge}
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl ">
              {education.hero.title}
              <span className="block text-slate-300">
                {education.hero.subtitle}
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              {education.hero.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#schools"
                className="inline-flex items-center gap-2 rounded-lg bg-[#087443] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#07653a]"
              >
                {education.hero.exploreSchools}
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href="#gallery"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                {education.hero.viewGallery}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="border-b border-black/5 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#087443]">
                {education.introduction.eyebrow}
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                {education.introduction.title}
              </h2>
            </div>

            <div className="space-y-4 text-base leading-7 text-[#231f20]/65">
              {education.introduction.paragraphs.map((paragraph: string) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          EDUCATION STATISTICS
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#ed1c24]">
            {education.statistics.eyebrow}
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            {education.statistics.title}
          </h2>

          <p className="mt-4 leading-7 text-[#231f20]/60">
            {education.statistics.description}
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {education.statistics.items.map(
            (item: { value: string; label: string; description: string }) => (
              <div
                key={item.label}
                className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm"
              >
                <div className="text-4xl font-bold tracking-tight">
                  {item.value}
                </div>

                <h3 className="mt-3 font-semibold">{item.label}</h3>

                <p className="mt-2 text-sm leading-6 text-[#231f20]/55">
                  {item.description}
                </p>
              </div>
            )
          )}
        </div>

        <div className="mt-5 flex items-start gap-3 rounded-xl border border-[#087443]/15 bg-[#087443]/5 p-4 text-sm text-[#231f20]/65">
          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#087443]" />

          <p>{education.statistics.source}</p>
        </div>
      </section>

      {/* =========================================================
          EDUCATION LEVELS
      ========================================================= */}
      <section className="border-y border-black/5 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#087443]">
              {education.levels.eyebrow}
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              {education.levels.title}
            </h2>

            <p className="mt-4 leading-7 text-[#231f20]/60">
              {education.levels.description}
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {educationLevels.map((level) => {
              const Icon = level.icon;

              return (
                <article
                  key={level.title}
                  className="group rounded-2xl border border-black/5 bg-[#f7f7f5] p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg"
                >
                  <div className="flex size-12 items-center justify-center rounded-xl bg-white text-[#087443] shadow-sm ring-1 ring-black/5 transition group-hover:bg-[#087443] group-hover:text-white">
                    <Icon className="size-6" />
                  </div>

                  <h3 className="mt-5 font-semibold">{level.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-[#231f20]/60">
                    {level.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          PUBLIC / GOVERNMENT SCHOOLS
      ========================================================= */}
      <section id="schools" className="bg-[#f7f7f5]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#087443]">
                {education.publicSchools.eyebrow}
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                {education.publicSchools.title}
              </h2>
            </div>

            <p className="leading-7 text-[#231f20]/60">
              {education.publicSchools.description}
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {publicSchools.map((school, index) => (
              <article
                key={index}
                className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                  <Image
                    src={school.image}
                    alt={`${education.publicSchools.imageAlt} ${index + 1}`}
                    fill
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-[#087443]/10 text-[#087443]">
                    <Building2 className="size-5" />
                  </div>
{/* 
                  <h3 className="mt-5 text-xl font-bold">
                    {education.publicSchools.cardTitle}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#231f20]/60">
                    {education.publicSchools.cardDescription}
                  </p> */}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-[#087443]/15 bg-white p-6">
            <div className="flex gap-4">
              <School className="mt-1 size-6 shrink-0 text-[#087443]" />

              <div>
                <h3 className="font-semibold">
                  {education.publicSchools.noteTitle}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#231f20]/60">
                  {education.publicSchools.noteDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PRIVATE SCHOOLS
      ========================================================= */}
      <section className="border-y border-black/5 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#ed1c24]">
                {education.privateSchools.eyebrow}
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                {education.privateSchools.title}
              </h2>

              <p className="mt-4 max-w-3xl leading-7 text-[#231f20]/60">
                {education.privateSchools.description}
              </p>
            </div>

            <div className="flex justify-start lg:justify-end">
              <div className="inline-flex items-center gap-3 rounded-xl bg-[#f7f7f5] px-5 py-4">
                <Users className="size-5 text-[#ed1c24]" />

                <span className="text-sm font-semibold">
                  {education.privateSchools.badge}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {privateSchools.map((school, index) => (
              <article
                key={index}
                className="group overflow-hidden rounded-2xl border border-black/5 bg-[#f7f7f5]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={school.image}
                    alt={`${education.privateSchools.imageAlt} ${index + 1}`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                    <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold">
                      {education.privateSchools.imageLabel}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold">
                    {education.privateSchools.cardTitle}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#231f20]/60">
                    {education.privateSchools.cardDescription}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Featured private school */}
          <div className="mt-10 overflow-hidden rounded-3xl bg-[#231f20]">
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[360px] lg:min-h-[480px]">
                <Image
                  src="/education/school-of-success.png"
                  alt={education.privateSchools.featured.imageAlt}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#ed1c24]">
                  {education.privateSchools.featured.eyebrow}
                </p>

                <h3 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                  {education.privateSchools.featured.title}
                </h3>

                <p className="mt-5 leading-7 text-white/60">
                  {education.privateSchools.featured.description}
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {education.privateSchools.featured.features.map(
                    (feature: string) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white/70"
                      >
                        <CheckCircle2 className="size-4 text-[#087443]" />
                        {feature}
                      </div>
                    )
                  )}
                </div>

                {education.privateSchools.featured.href && (
                  <Link
                    href={education.privateSchools.featured.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex w-fit items-center gap-2 rounded-lg bg-[#ed1c24] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#d91820]"
                  >
                    {education.privateSchools.featured.button}
                    <ArrowRight className="size-4" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          EDUCATION INITIATIVES
      ========================================================= */}
      <section className="bg-[#f7f7f5]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#ed1c24]">
              {education.initiatives.eyebrow}
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              {education.initiatives.title}
            </h2>

            <p className="mt-4 leading-7 text-[#231f20]/60">
              {education.initiatives.description}
            </p>
          </div>

          <div className="mt-10 grid gap-7 lg:grid-cols-2">
            {education.initiatives.items.map(
              (initiative: {
                title: string;
                date: string;
                description: string;
                image: string;
                imageAlt: string;
                source: string;
              }) => (
                <article
                  key={initiative.title}
                  className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-200">
                    <Image
                      src={initiative.image}
                      alt={initiative.imageAlt}
                      fill
                      className="object-cover transition duration-500 hover:scale-105"
                    />
                  </div>

                  <div className="p-7">
                    <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide">
                      <span className="text-[#ed1c24]">{initiative.date}</span>

                      <span className="size-1 rounded-full bg-black/20" />

                      <span className="text-black/40">
                        {education.initiatives.category}
                      </span>
                    </div>

                    <h3 className="mt-4 text-2xl font-bold">
                      {initiative.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-black/60">
                      {initiative.description}
                    </p>

                    <p className="mt-5 border-t border-black/5 pt-5 text-xs text-black/40">
                      {education.initiatives.sourceLabel}: {initiative.source}
                    </p>
                  </div>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      {/* =========================================================
          GALLERY
      ========================================================= */}
      <section id="gallery" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#087443]">
                {education.gallery.eyebrow}
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                {education.gallery.title}
              </h2>

              <p className="mt-4 leading-7 text-[#231f20]/60">
                {education.gallery.description}
              </p>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
            {educationGallery.map((item, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-2xl bg-slate-200 ${
                  index === 0
                    ? "col-span-2 row-span-2 aspect-square md:aspect-auto"
                    : "aspect-square"
                }`}
              >
                <Image
                  src={item.image}
                  alt={`${education.gallery.imageAlt} ${index + 1}`}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          RESEARCH
      ========================================================= */}
      <section className="border-y border-black/5 bg-[#f7f7f5]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#087443]">
                {education.research.eyebrow}
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                {education.research.title}
              </h2>

              <p className="mt-5 leading-7 text-[#231f20]/60">
                {education.research.description}
              </p>
            </div>

            <div className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#ed1c24]/10 text-[#ed1c24]">
                  <Users className="size-6" />
                </div>

                <div>
                  <h3 className="font-semibold">
                    {education.research.study.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-black/60">
                    {education.research.study.description}
                  </p>

                  {education.research.study.href && (
                    <Link
                      href={education.research.study.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#087443] hover:text-[#ed1c24]"
                    >
                      {education.research.study.button}
                      <ArrowRight className="size-4" />
                    </Link>
                  )}
                </div>
              </div>
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
            <GraduationCap className="mx-auto size-10 text-white/90" />

            <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
              {education.cta.title}
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
              {education.cta.description}
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#087443] transition hover:bg-white/90"
            >
              {education.cta.button}
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
