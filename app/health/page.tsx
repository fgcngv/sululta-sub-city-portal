

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Baby,
  CheckCircle2,
  Clock3,
  FlaskConical,
  HeartPulse,
  Hospital,
  MapPin,
  Pill,
  ShieldCheck,
  Stethoscope,
  Users,
  Waves,
} from "lucide-react";

import { getCurrentDictionary } from "@/lib/i18n/index";

const publicHealthImages = [
  "/images/projects/img75.png",
  "/images/projects/img74.png",
  "/images/health/public-health-3.jpg",
];

const privateHealthImages = [
  "/images/health/private-health-1.jpg",
  "/images/health/private-health-2.jpg",
  "/images/health/private-health-3.jpg",
];

const healthGallery = [
  "/images/health/health-1.jpg",
  "/images/health/health-2.jpg",
  "/images/health/health-3.jpg",
  "/images/health/health-4.jpg",
  "/images/health/health-5.jpg",
  "/images/health/health-6.jpg",
];

const serviceIcons = [
  Stethoscope,
  Baby,
  HeartPulse,
  ShieldCheck,
  FlaskConical,
  Pill,
];

const maternalIcons = [
  HeartPulse,
  Baby,
  Stethoscope,
  Users,
];

export default async function HealthPage() {
  const t = await getCurrentDictionary();
  const health = t.health;

  return (
    <main className="min-h-screen bg-[#f7f7f5] text-[#231f20]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative isolate overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <Image
            src="/images/projects/img72.png"
            alt={health.hero.imageAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-slate-950/20" />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-[600px] max-w-7xl items-end px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur">
              <HeartPulse className="size-4 text-[#ed1c24]" />
              {health.hero.badge}
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl">
              {health.hero.title}

              <span className="block text-slate-300">
                {health.hero.subtitle}
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              {health.hero.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#services"
                className="inline-flex items-center gap-2 rounded-lg bg-[#087443] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#07653a]"
              >
                {health.hero.exploreServices}
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href="#gallery"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                {health.hero.viewGallery}
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
                {health.introduction.eyebrow}
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                {health.introduction.title}
              </h2>
            </div>

            <div className="space-y-4 text-base leading-7 text-[#231f20]/65">
              {health.introduction.paragraphs.map((paragraph: string) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}
      <section id="services" className="border-b border-black/5 bg-[#f7f7f5]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#ed1c24]">
              {health.services.eyebrow}
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              {health.services.title}
            </h2>

            <p className="mt-4 leading-7 text-[#231f20]/60">
              {health.services.description}
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {health.services.items.map(
              (
                item: {
                  title: string;
                  description: string;
                },
                index: number
              ) => {
                const Icon = serviceIcons[index];

                return (
                  <article
                    key={item.title}
                    className="group rounded-2xl border border-black/5 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
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
          PUBLIC HEALTH
      ========================================================= */}
      <section id="public-health" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#087443]">
                {health.publicHealth.eyebrow}
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                {health.publicHealth.title}
              </h2>
            </div>

            <p className="leading-7 text-[#231f20]/60">
              {health.publicHealth.description}
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {health.publicHealth.cards.map(
              (
                card: {
                  title: string;
                  description: string;
                  imageAlt: string;
                },
                index: number
              ) => (
                <article
                  key={card.title}
                  className="overflow-hidden rounded-2xl border border-black/5 bg-[#f7f7f5] shadow-sm"
                >
                  <a
                    href={publicHealthImages[index]}
                    target="_blank"
                    rel="noreferrer"
                    className="group block"
                    aria-label={`${card.title} - ${health.gallery.clickToView}`}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                      <Image
                        src={publicHealthImages[index]}
                        alt={card.imageAlt}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />

                      <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold">
                        {health.gallery.clickToView}
                      </div>
                    </div>
                  </a>

                  <div className="p-6">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-[#087443]/10 text-[#087443]">
                      <Hospital className="size-5" />
                    </div>

                    <h3 className="mt-5 text-xl font-bold">
                      {card.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#231f20]/60">
                      {card.description}
                    </p>
                  </div>
                </article>
              )
            )}
          </div>

          <div className="mt-8 rounded-2xl border border-[#087443]/15 bg-[#087443]/5 p-6">
            <div className="flex gap-4">
              <Hospital className="mt-1 size-6 shrink-0 text-[#087443]" />

              <div>
                <h3 className="font-semibold">
                  {health.publicHealth.noteTitle}
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#231f20]/60">
                  {health.publicHealth.noteDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PRIVATE HEALTH
      ========================================================= */}
      <section className="border-y border-black/5 bg-[#f7f7f5]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#ed1c24]">
                {health.privateHealth.eyebrow}
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                {health.privateHealth.title}
              </h2>

              <p className="mt-4 max-w-3xl leading-7 text-[#231f20]/60">
                {health.privateHealth.description}
              </p>
            </div>

            <div className="flex justify-start lg:justify-end">
              <div className="inline-flex items-center gap-3 rounded-xl bg-white px-5 py-4 shadow-sm">
                <Stethoscope className="size-5 text-[#ed1c24]" />

                <span className="text-sm font-semibold">
                  {health.privateHealth.badge}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {health.privateHealth.cards.map(
              (
                card: {
                  title: string;
                  description: string;
                  imageAlt: string;
                },
                index: number
              ) => (
                <article
                  key={card.title}
                  className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm"
                >
                  <a
                    href={privateHealthImages[index]}
                    target="_blank"
                    rel="noreferrer"
                    className="group block"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={privateHealthImages[index]}
                        alt={card.imageAlt}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />

                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                        <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold">
                          {health.privateHealth.badge}
                        </span>
                      </div>
                    </div>
                  </a>

                  <div className="p-6">
                    <h3 className="text-xl font-bold">
                      {card.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#231f20]/60">
                      {card.description}
                    </p>
                  </div>
                </article>
              )
            )}
          </div>

          <div className="mt-8 rounded-2xl border border-[#ed1c24]/10 bg-white p-6">
            <div className="flex gap-4">
              <ShieldCheck className="mt-1 size-6 shrink-0 text-[#ed1c24]" />

              <div>
                <h3 className="font-semibold">
                  {health.privateHealth.noteTitle}
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#231f20]/60">
                  {health.privateHealth.noteDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MATERNAL & CHILD HEALTH
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#087443]">
                {health.maternalChild.eyebrow}
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                {health.maternalChild.title}
              </h2>

              <p className="mt-5 leading-7 text-[#231f20]/60">
                {health.maternalChild.description}
              </p>

              <div className="mt-8 overflow-hidden rounded-3xl">
                <a
                  href="/images/health/maternal-child.jpg"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="/images/health/maternal-child.jpg"
                    alt={health.maternalChild.title}
                    width={1200}
                    height={800}
                    className="h-auto w-full object-cover transition duration-500 hover:scale-105"
                  />
                </a>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {health.maternalChild.items.map(
                (
                  item: {
                    title: string;
                    description: string;
                  },
                  index: number
                ) => {
                  const Icon = maternalIcons[index];

                  return (
                    <article
                      key={item.title}
                      className="rounded-2xl border border-black/5 bg-[#f7f7f5] p-7"
                    >
                      <div className="flex size-12 items-center justify-center rounded-xl bg-[#ed1c24]/10 text-[#ed1c24]">
                        <Icon className="size-6" />
                      </div>

                      <h3 className="mt-5 font-bold">
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
        </div>
      </section>

      {/* =========================================================
          COMMUNITY HEALTH
      ========================================================= */}
      <section className="border-y border-black/5 bg-[#231f20]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#ed1c24]">
                {health.community.eyebrow}
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {health.community.title}
              </h2>

              <p className="mt-5 leading-7 text-white/60">
                {health.community.description}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {health.community.items.map((item: string) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-white/75"
                >
                  <CheckCircle2 className="size-5 shrink-0 text-[#087443]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          HEALTH INITIATIVES
      ========================================================= */}
      <section className="bg-[#f7f7f5]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#ed1c24]">
              {health.initiatives.eyebrow}
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              {health.initiatives.title}
            </h2>

            <p className="mt-4 leading-7 text-[#231f20]/60">
              {health.initiatives.description}
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {health.initiatives.items.map(
              (
                item: {
                  title: string;
                  description: string;
                  imageAlt: string;
                },
                index: number
              ) => (
                <article
                  key={item.title}
                  className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm"
                >
                  <a
                    href={`/images/health/initiative-${index + 1}.jpg`}
                    target="_blank"
                    rel="noreferrer"
                    className="group block"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={`/images/health/initiative-${index + 1}.jpg`}
                        alt={item.imageAlt}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                  </a>

                  <div className="p-7">
                    <h3 className="text-xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#231f20]/60">
                      {item.description}
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
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#087443]">
              {health.gallery.eyebrow}
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              {health.gallery.title}
            </h2>

            <p className="mt-4 leading-7 text-[#231f20]/60">
              {health.gallery.description}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
            {healthGallery.map((image, index) => (
              <a
                key={image}
                href={image}
                target="_blank"
                rel="noreferrer"
                className={`group relative overflow-hidden rounded-2xl bg-slate-200 ${
                  index === 0
                    ? "col-span-2 row-span-2 aspect-square md:aspect-auto"
                    : "aspect-square"
                }`}
                title={health.gallery.clickToView}
              >
                <Image
                  src={image}
                  alt={`${health.gallery.imageAlt} ${index + 1}`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />

                <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold opacity-0 transition group-hover:opacity-100">
                  {health.gallery.clickToView}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          HEALTH INFORMATION
      ========================================================= */}
      <section className="border-y border-black/5 bg-[#f7f7f5]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
            <div className="rounded-3xl bg-[#087443] p-8 sm:p-10">
              <div className="flex size-12 items-center justify-center rounded-xl bg-white/10 text-white">
                <HeartPulse className="size-6" />
              </div>

              <p className="mt-6 text-sm font-bold uppercase tracking-[0.16em] text-white/60">
                {health.information.eyebrow}
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                {health.information.title}
              </h2>

              <p className="mt-5 max-w-2xl leading-7 text-white/70">
                {health.information.description}
              </p>
            </div>

            <div className="rounded-3xl border border-[#ed1c24]/10 bg-white p-8 shadow-sm">
              <div className="flex size-12 items-center justify-center rounded-xl bg-[#ed1c24]/10 text-[#ed1c24]">
                <Clock3 className="size-6" />
              </div>

              <h3 className="mt-6 text-xl font-bold">
                {health.information.emergencyTitle}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#231f20]/60">
                {health.information.emergencyDescription}
              </p>
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
            <HeartPulse className="mx-auto size-10 text-white/90" />

            <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
              {health.cta.title}
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
              {health.cta.description}
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#087443] transition hover:bg-white/90"
            >
              {health.cta.button}
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}