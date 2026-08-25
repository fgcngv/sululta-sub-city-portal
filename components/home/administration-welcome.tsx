// components/home/administration-welcome.tsx

import Image from "next/image";

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
  "/administrations/waaziraa.jpg",
  "/administrations/img1.png",
  "/administrations/img2.png",
  "/images/projects/img48.png",
  "/administrations/img3.png",
  "/administrations/img4.png",
  "/administrations/img5.png",
];

export function AdministrationWelcome({
  t,
}: AdministrationWelcomeProps) {
  const administrators = t.administration.administrators.map(
    (administrator, index) => ({
      ...administrator,
      image:
        ADMINISTRATOR_IMAGES[index] ??
        "/images/administration/administrator-placeholder.jpg",
      main: index === 0,
    })
  );

  return (
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

            <div className="grid gap-5 sm:grid-cols-2 ">
              {administrators.map((administrator) => (
                <article
                  key={administrator.name}
                  className={`group overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                    administrator.main
                      ? "border-red-200 ring-2 ring-red-100 sm:col-span-2"
                      : "border-slate-200"
                  }`}
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
                          ? "aspect-[4/3] md:aspect-auto md:min-h-[240px]"
                          : "aspect-[4/3]"
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

                      {administrator.main && (
                        <div className="absolute left-3 top-3 rounded-full bg-red-700 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                          {t.administration.mainAdministrator}
                        </div>
                      )}
                    </div>

                    {/* =================================================
                        INFORMATION
                    ================================================= */}

                    <div className="p-5">
                      <p className="text-xs font-semibold uppercase tracking-wider text-red-700">
                        {t.administration.administrationLabel}
                      </p>

                      <h3 className="mt-1 text-2xl font-bold  text-red-700">
                        {administrator.name}
                      </h3>

                      {administrator.role && (
                        <p className="mt-1 text-sm font-medium text-slate-500">
                          {administrator.role}
                        </p>
                      )}

                      {administrator.message && (
                        <p className="mt-4 text-sm leading-6 text-slate-600">
                          {administrator.message}
                        </p>
                      )}
                    </div>
                  </div>
                </article>
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
  );
}