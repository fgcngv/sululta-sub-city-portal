

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

const educationStats = [
  {
    value: "37:1",
    label: "KG student–teacher ratio",
    description: "Reported for public schools in Sululta Sub-City.",
  },
  {
    value: "37:1",
    label: "Primary student–teacher ratio",
    description: "Grades 1–8 in public schools.",
  },
  {
    value: "34:1",
    label: "Secondary student–teacher ratio",
    description: "Grades 9–12 in public schools.",
  },
];

const educationAreas = [
  {
    icon: School,
    title: "Pre-Primary & Kindergarten",
    description:
      "Early learning forms the foundation for children&apos;s transition into primary education.",
  },
  {
    icon: BookOpen,
    title: "Primary Education",
    description:
      "Primary education covers grades 1–8 within the general education structure.",
  },
  {
    icon: GraduationCap,
    title: "Secondary Education",
    description:
      "Sululta has public secondary education serving students in the upper grades.",
  },
  {
    icon: Library,
    title: "Reading & Learning Spaces",
    description:
      "Learning environments are being complemented by initiatives such as the reading park opened at Sululta Secondary School.",
  },
];

const initiatives = [
  {
    title: "Reading Park at Sululta Secondary School",
    date: "2024",
    description:
      "The Gudina Tumsa Foundation reported the unveiling of a reading park at Sululta Secondary School, providing students with a dedicated place for reading.",
    image:
      "https://gudinatumsafoundation.org/wp-content/uploads/2024/12/reading-park.jpg",
    imageAlt:
      "Reading park initiative at Sululta Secondary School",
    source:
      "Gudina Tumsa Foundation, December 2024",
  },
  {
    title: "Improved WASH Facilities at Babo Wale Ilu Primary School",
    date: "2024",
    description:
      "An eight-seat latrine equipped with handwashing basins and a water storage system was inaugurated at Babo Wale Ilu Primary School.",
    image:
      "https://gudinatumsafoundation.org/wp-content/uploads/2024/12/babo-wale-ilu.jpg",
    imageAlt:
      "WASH facility initiative at Babo Wale Ilu Primary School",
    source:
      "Gudina Tumsa Foundation, December 2024",
  },
];

const learningStories = [
  {
    title: "School of Success",
    description:
      "School of Success states that it was established in Sululta town in 2014. Its published information describes open-plan classrooms, smart-board technology, literacy and numeracy programs, sports activities, IT training, and Afaan Oromo and Amharic curriculum.",
    image: "https://www.ethioharvardschool.com/gallary/g1.jpg",
    imageAlt:
      "Outdoor learning session at School of Success in Sululta",
    source: "School of Success",
  },
];

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f5] text-[#231f20]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative isolate overflow-hidden bg-slate-">
        <div className="absolute inset-0">
          <Image
            src="/images/projects/img44.png"
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
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur">
              <GraduationCap className="size-4 text-[#ed1c24]" />
              Education & Learning
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl">
            Education in Sululta
            <span className="block text-slate-300">
                Building our future.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Supporting learning, knowledge and opportunity for children and young people across Sululta Sub-City.
            </p>

          </div>
        </div>
      </section>

      {/*  */}


      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="border-b border-black/5 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#087443]">
                Education & opportunity
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Building stronger learning environments
              </h2>
            </div>

            <div className="space-y-4 text-base leading-7 text-[#231f20]/65">
              <p>
                Education is an important part of Sululta&apos;s development.
                Public schools in the sub-city serve learners across
                kindergarten, primary and secondary levels.
              </p>

              <p>
                Available planning and research documents also highlight the
                importance of teacher capacity, learning environments,
                parental engagement and educational infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FACTUAL STATISTICS
      ========================================================= */}
      <section
        id="education-data"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
      >
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#ed1c24]">
            Public education data
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Education at a glance
          </h2>

          <p className="mt-4 leading-7 text-[#231f20]/60">
            The following figures come from the Shaggar City Plan and
            Development Office&apos;s 2024 planning document.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {educationStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm"
            >
              <div className="text-4xl font-bold tracking-tight text-[#231f20]">
                {stat.value}
              </div>

              <h3 className="mt-3 font-semibold">{stat.label}</h3>

              <p className="mt-2 text-sm leading-6 text-[#231f20]/55">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-start gap-3 rounded-xl border border-[#087443]/15 bg-[#087443]/5 p-4 text-sm text-[#231f20]/65">
          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#087443]" />

          <p>
            Source: Shaggar City Plan and Development Office, 2024.
            The figures refer specifically to public schools in Sululta
            Sub-City.
          </p>
        </div>
      </section>

      {/* =========================================================
          EDUCATION LEVELS
      ========================================================= */}
      <section className="border-y border-black/5 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#087443]">
              Learning pathway
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Education across different stages
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {educationAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.title}
                  className="group rounded-2xl border border-black/5 bg-[#f7f7f5] p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg"
                >
                  <div className="flex size-12 items-center justify-center rounded-xl bg-white text-[#087443] shadow-sm ring-1 ring-black/5 transition group-hover:bg-[#087443] group-hover:text-white">
                    <Icon className="size-6" />
                  </div>

                  <h3 className="mt-5 font-semibold">{area.title}</h3>

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
          SULULTA EDUCATION PHOTO
      ========================================================= */}
            <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="overflow-hidden rounded-3xl bg-[#231f20]">
          <div className="grid lg:grid-cols-1">
            <div className="relative min-h-[360px] lg:min-h-[500px]">
              <Image
                src="/images/projects/img44.png"
                alt="Outdoor learning session at School of Success in Sululta"
                fill
                unoptimized
                className="object-cover"
              />

              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" /> */}

              <div className="absolute bottom-5 left-5 right-5">
                <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#231f20]">
                  Sululta
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="overflow-hidden rounded-3xl bg-[#231f20]">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[360px] lg:min-h-[500px]">
              <Image
                src="/education/success-2.png"
                alt="Outdoor learning session at School of Success in Sululta"
                fill
                unoptimized
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5">
                <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#231f20]">
                  Sululta
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#ed1c24]">
                Local learning
              </p>

              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Learning beyond the classroom
              </h2>

              <p className="mt-5 leading-7 text-white/65">
                School of Success, located in Sululta town, publishes
                information about open-plan classrooms, attractive school
                grounds, smart-board technology, literacy and numeracy
                programs, sports activities and IT training.
              </p>

              <p className="mt-5 text-sm leading-6 text-white/45">
                The photograph shows an outdoor learning session at the
                school&apos;s Sululta campus.
              </p>

              <div className="mt-7">
                <Link
                  href="https://www.ethioharvardschool.com/schoolofsuccess.php"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-[#ed1c24]"
                >
                  View school information
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INITIATIVES
      ========================================================= */}
      <section
        id="initiatives"
        className="border-y border-black/5 bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#ed1c24]">
              Education initiatives
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Recent education-related developments
            </h2>

            <p className="mt-4 leading-7 text-[#231f20]/60">
              These are documented initiatives reported by organizations
              working in Sululta. They are presented here as factual examples,
              not as claims that they are government projects.
            </p>
          </div>

          <div className="mt-10 grid gap-7 lg:grid-cols-2">
            {initiatives.map((initiative) => (
              <article
                key={initiative.title}
                className="overflow-hidden rounded-2xl border border-black/5 bg-[#f7f7f5]"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-[#e9e9e6]">
                  {initiative.image ? (
                    <Image
                      src={initiative.image}
                      alt={initiative.imageAlt}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <Building2 className="size-12 text-black/20" />
                    </div>
                  )}
                </div>

                <div className="p-7">
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide">
                    <span className="text-[#ed1c24]">
                      {initiative.date}
                    </span>

                    <span className="size-1 rounded-full bg-black/20" />

                    <span className="text-black/40">
                      Education
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl font-bold">
                    {initiative.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-black/60">
                    {initiative.description}
                  </p>

                  <p className="mt-5 border-t border-black/5 pt-5 text-xs text-black/40">
                    Source: {initiative.source}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          RESEARCH / SECONDARY EDUCATION
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#087443]">
              Research & learning
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Understanding secondary education in Sululta
            </h2>

            <p className="mt-5 leading-7 text-[#231f20]/60">
              Recent academic research has examined parental engagement and
              student achievement in secondary schools in Sululta Sub-City.
            </p>
          </div>

          <div className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#ed1c24]/10 text-[#ed1c24]">
                <Users className="size-6" />
              </div>

              <div>
                <h3 className="font-semibold">
                  Secondary-school study
                </h3>

                <p className="mt-2 text-sm leading-6 text-black/60">
                  A peer-reviewed 2025 study on Sululta Sub-City secondary
                  schools used questionnaires, interviews and document review.
                  The study included 307 students, 65 teachers, 4 principals
                  and 28 PTA members.
                </p>

                <Link
                  href="https://journals.wgu.edu.et/index.php/star/article/view/1952"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#087443] hover:text-[#ed1c24]"
                >
                  Read the research
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURED SCHOOL
      ========================================================= */}
      <section className="bg-[#231f20]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/education/school-of-success.png"
                alt="Students participating in an outdoor lesson at School of Success in Sululta"
                width={1200}
                height={800}
                unoptimized
                className="h-auto w-full object-cover"
              />
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#ed1c24]">
                School profile
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                School of Success
              </h2>

              <p className="mt-5 leading-7 text-white/60">
                According to its published history, School of Success was
                established in Sululta town in 2014. The school describes its
                learning environment as multicultural and reports open-plan
                teaching spaces, a library, smart-board technology and
                activities including sports and IT training.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Established in 2014",
                  "Open-plan classrooms",
                  "Smart-board technology",
                  "Literacy & numeracy",
                  "Sports activities",
                  "IT training",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white/70"
                  >
                    <CheckCircle2 className="size-4 text-[#087443]" />
                    {item}
                  </div>
                ))}
              </div>

              <Link
                href="https://www.ethioharvardschool.com/schoolofsuccess.php"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#ed1c24] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#d91820]"
              >
                School information
                <ArrowRight className="size-4" />
              </Link>
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
              Education shapes Sululta&apos;s future
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
              Strong schools, supportive learning environments and community
              participation all contribute to better educational
              opportunities.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#087443] transition hover:bg-white/90"
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