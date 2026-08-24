// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import {
//   ArrowRight,
//   Building2,
//   GraduationCap,
//   MapPin,
//   Users,
// } from "lucide-react";

// const overviewItems = [
//   {
//     icon: Building2,
//     label: "Development",
//     title: "Projects & Infrastructure",
//     description:
//       "Explore development activities and infrastructure initiatives across Sululta.",
//     href: "/projects",
//     image: "/images/development.jpg",
//   },
//   {
//     icon: GraduationCap,
//     label: "Education",
//     title: "Education",
//     description:
//       "Discover schools, educational services and community learning initiatives.",
//     href: "/services/education",
//     image: "/images/education2.jpg",
//   },
//   {
//     icon: Users,
//     label: "Community",
//     title: "Our Community",
//     description:
//       "Learn about the people, communities and activities that make Sululta unique.",
//     href: "/community",
//     image: "/images/comunity.jpg",
//   },
//   {
//     icon: Users,
//     label: "Agriculture",
//     title: "Agricultural Works",
//     description:
//       "Encouraging farmers to increase productivity and strengthen agricultural development.",
//     href: "/agriculture",
//     image: "/images/agriculture.jpg",
//   },
// ];

// export function SulultaOverview() {
//   return (
//     <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         {/* Section heading */}
//         <div className="mx-auto max-w-3xl text-center">
//           <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
//             <MapPin className="size-3.5" />
//             Sululta Sub-City
//           </span>

//           <h2 className="mt-5 text-3xl font-bold tracking-tight text-red-700 sm:text-4xl lg:text-5xl">
//             Serving a growing community
//           </h2>

//           <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
//             Access information about public services, development,
//             community initiatives and the work of the Sululta Sub-City
//             Administration.
//           </p>
//         </div>

//         {/* Main feature */}
//         <div className="mt-14 grid overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm lg:grid-cols-[1.05fr_1fr]">

//           {/* LEFT — Administrator Message */}
// <div className="bg-white p-6 sm:p-8 lg:p-10">
//   <div className="flex h-full flex-col">
//     {/* Large Administrator Image */}
//     <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100">
//       <Image
//         src="/images/administrator.jpg"
//         alt="Science and Technology Administrator of Sululta Sub-City"
//         fill
//         sizes="(min-width: 1024px) 45vw, 100vw"
//         className="object-cover transition-transform duration-500 hover:scale-[1.02]"
//         priority
//       />
//     </div>

//     {/* Administrator Information */}
//     <div className="mt-7">
//       <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
//         Message from the Sululta Sub-City Science and Technology Administration
//       </p>

//       <h3 className="mt-2 text-2xl font-bold tracking-tight text-red-700 sm:text-3xl">
//        [MR. Tarekegn]
//       </h3>

//       <p className="mt-2 text-sm font-medium text-slate-600">
//         Science & Technology Administrator
//       </p>

//       <div className="mt-6">
//         <h4 className="text-xl font-bold text-red-700 sm:text-2xl">
//           Welcome to Sululta Sub-City
//         </h4>

//         <p className="mt-4 text-base leading-7 text-slate-700">
//           We are committed to using science, technology and innovation
//           to support the development of our community. Through
//           collaboration, knowledge sharing and improved access to
//           technology, we are working to create opportunities for our
//           citizens and contribute to sustainable development.
//         </p>

//         <p className="mt-4 text-base leading-7 text-slate-700">
//           We invite citizens, institutions, businesses and development
//           partners to work together in building a more innovative,
//           productive and inclusive Sululta.
//         </p>
//       </div>

//     </div>
//   </div>
// </div>

//           {/* RIGHT — Image Cards */}
//           <div className="grid border-t border-slate-200 bg-white sm:grid-cols-2 lg:border-l lg:border-t-0">
//             {overviewItems.map((item, index) => {
//               const Icon = item.icon;

//               return (
//                 <Link
//                   key={item.title}
//                   href={item.href}
//                   className={[
//                     "group relative min-h-[300px] overflow-hidden p-6 sm:p-7",
//                     "flex flex-col justify-end",
//                     "transition-all duration-300",
//                     index % 2 === 0
//                       ? "sm:border-r sm:border-slate-200"
//                       : "",
//                     index < 2
//                       ? "border-b border-slate-200"
//                       : "",
//                   ].join(" ")}
//                 >
//                   {/* Background image */}
//                   <div
//                     className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
//                     style={{
//                       backgroundImage: `url(${item.image})`,
//                     }}
//                   />

//                   {/* Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/10 transition-all duration-300 group-hover:from-black/90 group-hover:via-black/50" />

//                   {/* Content */}
//                   <div className="relative z-10">
//                     <div className="inline-flex size-10 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-md ring-1 ring-white/20 transition-all duration-300 group-hover:bg-white group-hover:text-slate-900">
//                       <Icon className="size-5" />
//                     </div>

//                     <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
//                       {item.label}
//                     </p>

//                     <h4 className="mt-2 text-xl font-bold text-white">
//                       {item.title}
//                     </h4>

//                     <p className="mt-2 max-w-sm text-sm leading-6 text-white/80">
//                       {item.description}
//                     </p>

//                     <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-white">
//                       Explore
//                       <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
//                     </span>
//                   </div>
//                 </Link>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import {
  ArrowRight,
  Building2,
  ChevronUp,
  GraduationCap,
  MapPin,
  MessageSquareText,
} from "lucide-react";
import { useState } from "react";

const overviewItems = [
  {
    icon: Building2,
    label: "Development",
    title: "Projects & Infrastructure",
    description:
      "Explore development activities and infrastructure initiatives across Sululta.",
    href: "/projects",
    image: "/images/projects/img4.png",
  },
  {
    icon: GraduationCap,
    label: "Education",
    title: "Education",
    description:
      "Discover schools, educational services and community learning initiatives.",
    href: "/services/education",
    image: "/images/projects/img46.png",
  },
];

export function SulultaOverview() {
  const [showAllMessages, setShowAllMessages] = useState(false);

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            SECTION HEADER
        ===================================================== */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
            <MapPin className="size-3.5" />
            Sululta Sub-City
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-red-700 sm:text-4xl lg:text-5xl">
            Serving a growing community
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Access information about public services, development, community
            initiatives and the work of the Sululta Sub-City Administration.
          </p>
        </div>

        {/* =====================================================
            ADMINISTRATOR — ONE ROW
        ===================================================== */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="grid lg:grid-cols-2">
            {/* =================================================
                ADMINISTRATOR IMAGE — FIRST COLUMN
            ================================================= */}
            <div className="relative min-h-[320px] overflow-hidden bg-slate-100 sm:min-h-[400px] lg:min-h-[500px]">
              <Image
                src="/images/projects/img50.png"
                alt="Science and Technology Administrator of Sululta Sub-City"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-[1.02]"
              />

              {/* Image overlay */}

              {/* Image label */}
              <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
                <span className="relative inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-md ring-1 ring-white/20 bottom-20">
                  <MessageSquareText className="size-4" />
                  Administrator
                </span>
              </div>
            </div>

            {/* =================================================
                ADMINISTRATOR MESSAGE — SECOND COLUMN
            ================================================= */}
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Message from the Sululta Sub-City Science & Technology
                Administration
              </p>

              <h3 className="mt-3 text-3xl font-bold tracking-tight text-red-700">
                [MR. Tarekegn]
              </h3>

              <p className="mt-1 text-sm font-medium text-slate-500">
                Science & Technology Administrator
              </p>

              <div className="mt-7">
                <h4 className="text-2xl font-bold tracking-tight text-slate-950">
                  Welcome to Sululta Sub-City
                </h4>

                {!showAllMessages ? (
                  <>
                    {/* Short preview */}
                    <p className="mt-4 line-clamp-3 text-base leading-7 text-slate-600 sm:text-lg">
                      First of all, greetings and respect to you. Using science
                      and technology to modernize public services, deliver
                      faster and more quality work, and encourage innovation and
                      new ideas is at the heart of our vision. The Sultanate
                      Science and Technology Office is working to strengthen
                      executive capacity, create innovative opportunities for
                      youth and professionals, introduce new technologies and
                      expand digital services. Success in our work cannot be
                      complete without public participation, cooperation and
                      input. Therefore, let us all do our part by using science,
                      technology and innovation as opportunities for development
                      and lasting change. “Science and Technology – The
                      Foundation for Change and Development in Our City!” Thank
                      you. Head of the Office of Science and Technology
                      Sultanate of Sulu
                    </p>

                    {/* Explore button */}
                    <button
                      type="button"
                      onClick={() => setShowAllMessages(true)}
                      className="group mt-7 inline-flex w-fit items-center gap-2 rounded-xl bg-red-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-red-800 hover:shadow-md"
                    >
                      <MessageSquareText className="size-4" />
                      Expand Message
                      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </>
                ) : (
                  <>
                    {/* Full message */}
                    <div className="space-y-4">
                      <p className="text-base leading-7 text-slate-600 sm:text-lg">
                        First of all, greetings and respect to you. Using
                        science and technology to modernize public services,
                        deliver faster and more quality work, and encourage
                        innovation and new ideas is at the heart of our vision.
                        The Sultanate Science and Technology Office is working
                        to strengthen executive capacity, create innovative
                        opportunities for youth and professionals, introduce new
                        technologies and expand digital services. Success in our
                        work cannot be complete without public participation,
                        cooperation and input. Therefore, let us all do our part
                        by using science, technology and innovation as
                        opportunities for development and lasting change.
                        “Science and Technology – The Foundation for Change and
                        Development in Our City!” Thank you. Head of the Office
                        of Science and Technology Sultanate of Sulu
                      </p>

                      <p className="text-base leading-7 text-slate-600 sm:text-lg">
                        We invite citizens, institutions, businesses and
                        development partners to work together in building a more
                        innovative, productive and inclusive Sululta.
                      </p>

                      <p className="text-base leading-7 text-slate-600 sm:text-lg">
                        Our administration believes that technology, education
                        and community participation are essential to creating
                        sustainable opportunities for everyone.
                      </p>
                    </div>

                    {/* Show less */}
                    <button
                      type="button"
                      onClick={() => setShowAllMessages(false)}
                      className="mt-7 inline-flex w-fit items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                    >
                      <ChevronUp className="size-4" />
                      Show Less
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            DEVELOPMENT + EDUCATION
            DESKTOP: ONE ROW
            MOBILE: ONE COLUMN
        ===================================================== */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {overviewItems.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.title}
                href={item.href}
                className="group relative min-h-[320px] overflow-hidden rounded-3xl border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:min-h-[360px]"
              >
                {/* =================================================
                    FULL BACKGROUND IMAGE
                ================================================= */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overall image protection */}
                <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/30" />

                {/* Strong bottom gradient */}
                <div className="absolute inset-x-0 bottom-0 h-[75%] bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                {/* Card content */}
                <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8">
                  {/* Icon */}
                  <div className="inline-flex size-11 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-md ring-1 ring-white/25 transition-all duration-300 group-hover:bg-white group-hover:text-slate-900">
                    <Icon className="size-5" />
                  </div>

                  {/* Label */}
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-white/75">
                    {item.label}
                  </p>

                  {/* Title */}
                  <h4 className="mt-2 text-2xl font-bold text-white">
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="mt-2 max-w-xl line-clamp-2 text-sm leading-6 text-white/85 sm:text-base">
                    {item.description}
                  </p>

                  {/* Explore */}
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">
                    Explore
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
