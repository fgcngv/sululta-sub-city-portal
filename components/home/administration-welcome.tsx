// // components/home/administration-welcome.tsx

// import Image from "next/image";

// type Administrator = {
//   name: string;
//   role: string;
//   message: string;
// };

// type AdministrationWelcomeProps = {
//   t: {
//     administration: {
//       eyebrow: string;
//       title: string;
//       description: string;
//       administrationLabel: string;
//       mainAdministrator: string;
//       fromAdministration: string;
//       welcomeTitle: string;
//       welcomeParagraph1: string;
//       welcomeParagraph2: string;
//       welcomeParagraph3: string;
//       governorName: string;
//       governorRole: string;
//       administrators: Administrator[];
//     };
//   };
// };

// const ADMINISTRATOR_IMAGES = [
//   "/images/projects/img51.png",
//   "/administrations/img6.png",
//   "/administrations/img1.png",
//   "/administrations/img2.png",
//   "/images/projects/img48.png",
//   "/administrations/img3.png",
//   "/administrations/img4.png",
//   "/administrations/img5.png",
// ];

// export function AdministrationWelcome({
//   t,
// }: AdministrationWelcomeProps) {
//   const administrators = t.administration.administrators.map(
//     (administrator, index) => ({
//       ...administrator,
//       image:
//         ADMINISTRATOR_IMAGES[index] ??
//         "/images/administration/administrator-placeholder.jpg",
//       main: index === 0,
//     })
//   );

//   return (
//     <section
//       aria-labelledby="administration-welcome-heading"
//       className="bg-slate-50"
//     >
//       <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
//         <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">

//           {/* =====================================================
//               LEFT — ADMINISTRATION
//           ===================================================== */}

//           <div>
//             <div className="mb-8">
//               <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
//                 {t.administration.eyebrow}
//               </p>

//               <h2 className="mt-3 text-3xl font-bold tracking-tight text-red-700 sm:text-4xl">
//                 {t.administration.title}
//               </h2>

//               <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
//                 {t.administration.description}
//               </p>
//             </div>

//             {/* =================================================
//                 ADMINISTRATOR CARDS
//             ================================================= */}

//             <div className="grid gap-5 sm:grid-cols-2 ">
//               {administrators.map((administrator) => (
//                 <article
//                   key={administrator.name}
//                   className={`group overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
//                     administrator.main
//                       ? "border-red-200 ring-2 ring-red-100 sm:col-span-2"
//                       : "border-slate-200"
//                   }`}
//                 >
//                   <div
//                     className={`grid ${
//                       administrator.main
//                         ? "md:grid-cols-[220px_1fr]"
//                         : "grid-cols-1"
//                     }`}
//                   >
//                     {/* =================================================
//                         IMAGE
//                     ================================================= */}

//                     <div
//                       className={`relative overflow-hidden bg-slate-200 ${
//                         administrator.main
//                           ? "aspect-4/3 md:aspect-auto md:min-h-60"
//                           : "aspect-4/3"
//                       }`}
//                     >
//                       <img
//                         src={administrator.image}
//                         alt={administrator.name}
//                         sizes={
//                           administrator.main
//                             ? "(min-width: 1024px) 220px, 100vw"
//                             : "(min-width: 640px) 40vw, 100vw"
//                         }
//                         className="object-cover transition-transform duration-500 group-hover:scale-105 w-full h-full"
//                       />

//                       {administrator.main && (
//                         <div className="absolute left-3 top-3 rounded-full bg-red-700 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
//                           {t.administration.mainAdministrator}
//                         </div>
//                       )}
//                     </div>

//                     {/* =================================================
//                         INFORMATION
//                     ================================================= */}

//                     <div className="p-5">
//                       <p className="text-xs font-semibold uppercase tracking-wider text-red-700">
//                         {t.administration.administrationLabel}
//                       </p>

//                       <h3 className="mt-1 text-2xl font-bold  text-red-700">
//                         {administrator.name}
//                       </h3>

//                       {administrator.role && (
//                         <p className="mt-1 text-sm font-medium text-slate-500">
//                           {administrator.role}
//                         </p>
//                       )}

//                       {administrator.message && (
//                         <p className="mt-4 text-sm leading-6 text-slate-600">
//                           {administrator.message}
//                         </p>
//                       )}
//                     </div>
//                   </div>
//                 </article>
//               ))}
//             </div>
//           </div>

//           {/* =====================================================
//               RIGHT — WELCOME MESSAGE
//           ===================================================== */}

//           <div className="lg:sticky lg:top-8">
//             <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
//               {t.administration.fromAdministration}
//             </p>

//             <h2
//               id="administration-welcome-heading"
//               className="mt-3 text-3xl font-bold tracking-tight text-red-700 sm:text-4xl"
//             >
//               {t.administration.welcomeTitle}
//             </h2>

//             <div className="mt-6 space-y-4 text-base leading-7 text-slate-600">
//               <p>{t.administration.welcomeParagraph1}</p>

//               <p>{t.administration.welcomeParagraph2}</p>

//               <p>{t.administration.welcomeParagraph3}</p>

//               <p className="pt-3 text-center text-xl font-bold leading-8 text-red-700">
//                 {t.administration.governorName}

//                 <span className="block text-sm font-medium text-slate-500">
//                   {t.administration.governorRole}
//                 </span>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }















"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight, X } from "lucide-react";

type Administrator = {
  name: string;
  role: string;
  message: string;
};

type AdministrationWelcomeProps = {
  t: {
    administration: {
      eyebrow: string;
      title: string;
      description: string;
      administrationLabel: string;
      mainAdministrator: string;
      fromAdministration: string;
      welcomeTitle: string;
      welcomeParagraph1: string;
      welcomeParagraph2: string;
      welcomeParagraph3: string;
      governorName: string;
      governorRole: string;
      administrators: Administrator[];
    };
  };
};

const ADMINISTRATOR_IMAGES = [
  "/images/projects/img51.png",
  "/images/projects/img90.png",
  "/administrations/img6.png",
  "/images/projects/img91.png",
  "/images/projects/img92.png",
  "/administrations/img1.png",
  "/administrations/img2.png",
  "/images/projects/img93.png",

    "/images/projects/img95.png",
  "/images/projects/img96.png",
  "/images/projects/img98.png",
  "/images/projects/img97.png",
  "/images/projects/img99.png",

  "/images/projects/img48.png",
  "/administrations/img3.png",
  "/administrations/img4.png",
  "/administrations/img5.png",
];

export function AdministrationWelcome({
  t,
}: AdministrationWelcomeProps) {
  const [selectedAdministrator, setSelectedAdministrator] =
    useState<
      (Administrator & {
        image: string;
        main: boolean;
      }) | null
    >(null);

  const administrators = t.administration.administrators.map(
    (administrator, index) => ({
      ...administrator,
      image:
        ADMINISTRATOR_IMAGES[index] ??
        "/images/administration/administrator-placeholder.jpg",
      main: index === 0,
    })
  );

  // Close dialog with Escape key
  useEffect(() => {
    if (!selectedAdministrator) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedAdministrator(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Prevent background scrolling
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedAdministrator]);

  return (
    <>
      <section
        aria-labelledby="administration-welcome-heading"
        className="bg-slate-50"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">

            {/* =====================================================
                LEFT — ADMINISTRATION
            ===================================================== */}
            <div>
              <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {t.administration.eyebrow}
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-red-700 sm:text-4xl">
                  {t.administration.title}
                </h2>

                <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                  {t.administration.description}
                </p>
              </div>

              {/* =================================================
                  ADMINISTRATOR CARDS
              ================================================= */}
              <div className="grid gap-5 sm:grid-cols-2">
                {administrators.map((administrator) => (
                  <button
                    key={administrator.name}
                    type="button"
                    onClick={() =>
                      setSelectedAdministrator(administrator)
                    }
                    aria-label={`View message from ${administrator.name}`}
                    className={[
                      "group w-full overflow-hidden rounded-2xl border bg-white text-left shadow-sm",
                      "transition-all duration-300",
                      "hover:-translate-y-1 hover:shadow-xl",
                      "focus-visible:outline-none focus-visible:ring-2",
                      "focus-visible:ring-red-600 focus-visible:ring-offset-2 cursor-pointer",
                      administrator.main
                        ? "border-red-200 ring-2 ring-red-100 sm:col-span-2"
                        : "border-slate-200",
                    ].join(" ")}
                    title={`View message from ${administrator.name} :- Click to read the full message`}
                  >
                    <div
                      className={`grid ${
                        administrator.main
                          ? "md:grid-cols-[220px_1fr]"
                          : "grid-cols-1"
                      }`}
                    >
                      {/* =================================================
                          IMAGE
                      ================================================= */}
                      <div
                        className={`relative overflow-hidden bg-slate-200 ${
                          administrator.main
                            ? "aspect-4/3 md:aspect-auto md:min-h-60"
                            : "aspect-4/3"
                        }`}
                      >
                        <Image
                          src={administrator.image}
                          alt={administrator.name}
                          fill
                          sizes={
                            administrator.main
                              ? "(min-width: 1024px) 220px, 100vw"
                              : "(min-width: 640px) 40vw, 100vw"
                          }
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        {/* Image overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70" />

                        {administrator.main && (
                          <div className="absolute left-3 top-3 rounded-full bg-red-700 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-sm">
                            {t.administration.mainAdministrator}
                          </div>
                        )}
                      </div>

                      {/* =================================================
                          CARD INFORMATION
                      ================================================= */}
                      <div className="flex flex-col p-5">
                        <p className="text-xs font-semibold uppercase tracking-wider text-red-700">
                          {t.administration.administrationLabel}
                        </p>

                        <h3 className="mt-1 text-xl font-bold text-red-700 sm:text-2xl">
                          {administrator.name}
                        </h3>

                        {administrator.role && (
                          <p className="mt-1 text-sm font-medium text-slate-500">
                            {administrator.role}
                          </p>
                        )}

                        {/* Short message preview */}
                        {administrator.message && (
                          <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-600">
                            {administrator.message}
                          </p>
                        )}

                        {/* Read message */}
                        <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-red-700">
                          Read message
                          <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* =====================================================
                RIGHT — WELCOME MESSAGE
            ===================================================== */}
            <div className="lg:sticky lg:top-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                {t.administration.fromAdministration}
              </p>

              <h2
                id="administration-welcome-heading"
                className="mt-3 text-3xl font-bold tracking-tight text-red-700 sm:text-4xl"
              >
                {t.administration.welcomeTitle}
              </h2>

              <div className="mt-6 space-y-4 text-base leading-7 text-slate-600">
                <p>{t.administration.welcomeParagraph1}</p>

                <p>{t.administration.welcomeParagraph2}</p>

                <p>{t.administration.welcomeParagraph3}</p>

                <p className="pt-3 text-center text-xl font-bold leading-8 text-red-700">
                  {t.administration.governorName}

                  <span className="block text-sm font-medium text-slate-500">
                    {t.administration.governorRole}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ADMINISTRATOR DIALOG
      ========================================================= */}
      {selectedAdministrator && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="administrator-dialog-name"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedAdministrator(null);
            }
          }}
        >
          <div
            className="
              relative
              max-h-[90vh]
              w-full
              max-w-4xl
              overflow-hidden
              rounded-3xl
              bg-white
              shadow-2xl
              animate-in
              fade-in
              zoom-in-95
              duration-200
            "
          >
            {/* =====================================================
                CLOSE BUTTON
            ===================================================== */}
            <button
              type="button"
              onClick={() => setSelectedAdministrator(null)}
              aria-label="Close dialog"
              className="
                absolute
                right-4
                top-4
                z-20
                inline-flex
                size-10
                items-center
                justify-center
                rounded-full
                bg-black/50
                text-white
                backdrop-blur-sm
                transition-all
                hover:bg-black/70
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-white
              "
            >
              <X className="size-5" />
            </button>

            {/* =====================================================
                DIALOG CONTENT
            ===================================================== */}
            <div className="grid max-h-[90vh] overflow-y-auto md:grid-cols-[0.85fr_1.15fr] md:overflow-hidden">

              {/* =================================================
                  DIALOG IMAGE
              ================================================= */}
              <div className="relative min-h-[280px] bg-slate-200 md:min-h-[560px]">
                <Image
                  src={selectedAdministrator.image}
                  alt={selectedAdministrator.name}
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />

                {/* Image gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Main administrator badge */}
                {selectedAdministrator.main && (
                  <div className="absolute bottom-5 left-5 rounded-full bg-red-700 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-lg">
                    {t.administration.mainAdministrator}
                  </div>
                )}
              </div>

              {/* =================================================
                  DIALOG INFORMATION
              ================================================= */}
              <div className="flex flex-col p-6 sm:p-8 lg:p-10">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-red-700">
                    {t.administration.administrationLabel}
                  </p>

                  <h2
                    id="administrator-dialog-name"
                    className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
                  >
                    {selectedAdministrator.name}
                  </h2>

                  {selectedAdministrator.role && (
                    <p className="mt-2 text-base font-medium text-slate-500">
                      {selectedAdministrator.role}
                    </p>
                  )}
                </div>

                <div className="my-6 h-px bg-slate-200" />

                {/* Full message */}
                <div className="min-h-0 flex-1 overflow-y-auto pr-1">
                  <p className="whitespace-pre-line text-base leading-8 text-slate-600">
                    {selectedAdministrator.message}
                  </p>
                </div>

                {/* =================================================
                    CLOSE BUTTON
                ================================================= */}
                <div className="mt-8 border-t border-slate-200 pt-6">
                  <button
                    type="button"
                    onClick={() => setSelectedAdministrator(null)}
                    className="
                      inline-flex
                      min-h-11
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-slate-900
                      px-5
                      py-3
                      text-sm
                      font-semibold
                      text-white
                      transition-all
                      hover:bg-red-700
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-slate-900
                      focus-visible:ring-offset-2
                      sm:w-auto
                    "
                  >
                    Close
                    <X className="size-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

