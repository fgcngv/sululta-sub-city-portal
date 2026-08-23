
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Eye,
  Heart,
  Target,
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Community First",
    description:
      "We put the needs, aspirations, and wellbeing of Sululta's communities at the center of our work.",
  },
  {
    icon: CheckCircle2,
    title: "Accountability",
    description:
      "We are committed to responsible administration, transparency, and delivering meaningful public value.",
  },
  {
    icon: Building2,
    title: "Service Excellence",
    description:
      "We continuously work to make public services more accessible, responsive, and effective.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-slate-">
        <div className="absolute inset-0">
          <Image
            src="/images/about-community.jpg"
            alt="Sululta landscape"
            fill
            priority
            className="object-cover opacity-45"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-450 via-slate-950/85 to-slate-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-[560px] max-w-7xl items-end px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
              <Building2 className="size-4" />
              About Sululta
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl">
              Serving our community.
              <span className="block text-slate-300">
                Building our future.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Sululta Sub-City Administration is committed to creating a
              stronger, more connected, and more prosperous community through
              effective public service and responsible local administration.
            </p>

          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Who we are
            </p>

            <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              A local administration focused on people and progress.
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              <p>
                Sululta is a growing community with a strong sense of identity,
                opportunity, and shared responsibility. Our administration
                works alongside residents and stakeholders to support
                sustainable development and improve everyday life.
              </p>

              <p>
                Through public services, infrastructure development, community
                engagement, and responsible governance, we aim to create an
                environment where individuals, families, businesses, and
                institutions can thrive.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-slate-100">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/about-community.jpg"
                alt="Sululta community"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-slate-950/80 p-5 text-white backdrop-blur-md">
              <p className="text-sm font-semibold">Our commitment</p>
              <p className="mt-1 text-sm leading-6 text-slate-300">
                Better services, stronger communities, and sustainable local
                development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision / Mission */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Our direction
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Guided by a clear purpose.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                <Eye className="size-5" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-950">
                Our Vision
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                To see Sululta become an inclusive, prosperous, well-served,
                and sustainable community where people can live, work, and
                build a better future.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                <Target className="size-5" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-950">
                Our Mission
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                To provide effective, accessible, and accountable public
                services while working with the community to advance local
                development and improve quality of life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            What guides us
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Values behind our work.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            Our approach is grounded in service, responsibility, and a
            commitment to the people of Sululta.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50"
              >
                <div className="flex size-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-950">
                  <Icon className="size-5" />
                </div>

                <h3 className="mt-6 text-lg font-bold text-slate-950">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8 lg:pb-28">
        <div className="overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-12 text-center sm:px-12 lg:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
            Sululta Administration
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Together, we can build a stronger Sululta.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
            Stay informed, access public services, and connect with your local
            administration.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
            >
              Latest news
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
