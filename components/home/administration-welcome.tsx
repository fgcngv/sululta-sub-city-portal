import Image from "next/image";


const administrators = [
  {
    name: "Mr. Kuma Hundee",
    role: "Governor of Sululta Sub-City",
    image: "/images/administration/administrator-placeholder.jpg",
    message:
      "We are committed to building a modern, inclusive, and prosperous Sululta Sub-City through strong leadership and community participation.",
    main: true,
  },
  {
    name: "Aadde Waaziraa Jamaal I/A Bulchaa Kutaa Magaalaa Sulultaa",
    role: "Deputy Administrator",
    image: "/administrations/waaziraa.jpg",
    message:
      "Working together with our communities to improve services and create better opportunities for every resident.",
  },  {
    name: "Obbo Taarrakeny _______ Administreetara Saayinsii Fi Teeknoolojii Kutaan Magaalaa Sulultaa",
    role: "",
    image: "/images/administrator.jpg",
    message:
      "Working together with our communities to improve digital transformation.",
  },
  {
    name: "Bulchaa Aanaa Abbaa Gadaa",
    role: "Bulchaa Aanaa Abbaa Gadaa",
    image: "/administrations/img1.png",
    message:
      "",
  },
  {
    name: "Bulchaa Aanaa Wasarbii",
    role: "Bulchaa Aanaa Wasarbii",
    image: "/administrations/img2.png",
    message:
      "",
  },
  {
    name: "I/G Kominikeeshinii Kutaa Magaalaa Sulultaa",
    role: "I/G Kominikeeshinii Kutaa Magaalaa Sulultaa",
    image: "/administrations/img3.png",
    message:
      "",
  },
  {
    name: "I/G Waajjira Kadastaraa Kutaa Magaalaa Sulultaa",
    role: "I/G Waajjira Kadastaraa Kutaa Magaalaa Sulultaa",
    image: "/administrations/img4.png",
    message:
      "",
  },  {
    name: "I/G Waajjira Maallaqaa Kutaa Magaalaa Sulultaa",
    role: "I/G Waajjira Maallaqaa Kutaa Magaalaa Sulultaa",
    image: "/administrations/img5.png",
    message:
      "",
  },
];

export function AdministrationWelcome() {
  return (
    <section
      aria-labelledby="administration-welcome-heading"
      className="bg-slate-50"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* LEFT - Administration Grid */}
          <div>
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Our Leadership
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-red-700 sm:text-4xl">
                Administration
              </h2>

              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                Meet the administrators working together to serve the people
                of Sululta Sub-City and advance our community.
              </p>
            </div>

            {/* Administrator Cards */}
            <div className="grid gap-5 sm:grid-cols-2">
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
                    {/* Administrator Image */}
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
                          Main Administrator
                        </div>
                      )}
                    </div>

                    {/* Administrator Information */}
                    <div className="p-5">
                      <p className="text-xs font-semibold uppercase tracking-wider text-red-700">
                        Administration
                      </p>

                      <h3 className="mt-1 text-xl font-bold text-slate-900">
                        {administrator.name}
                      </h3>

                      <p className="mt-1 text-sm font-medium text-slate-500">
                        {administrator.role}
                      </p>

                      <p className="mt-4 text-sm leading-6 text-slate-600">
                        {administrator.message}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* RIGHT - Welcome Message */}
          <div className="lg:sticky lg:top-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              From the Administration
            </p>

            <h2
              id="administration-welcome-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-red-700 sm:text-4xl"
            >
              Welcome to Sululta Sub-City
            </h2>

            <div className="mt-6 space-y-4 text-base leading-7 text-slate-600">
              <p>
                <strong>Shaggar City Administration</strong> is pleased to
                share our strong goal to move our community forward. We are
                strongly committed to transforming <strong>Shaggar</strong>{" "}
                into an exemplary Smart City—a city that is competitive,
                offers a good life, and is responsive to all of its
                communities.
              </p>

              <p>
                Our goal is to make Shaggar a <strong>compact city</strong>{" "}
                and a <strong>polycentric economic hub</strong>. This will be
                achieved by strengthening community participation, strategic
                linkages, and environmental stewardship.
              </p>

              <p>
                Furthermore, we will work on{" "}
                <strong>coordinated strategy development</strong> and focused
                investment in <strong>new and smart infrastructure</strong>{" "}
                that our communities need.
              </p>

              <p className="pt-3 text-center text-xl font-bold leading-8 text-red-700">
                Mr. Kuma Hundee
                <span className="block text-sm font-medium text-slate-500">
                  Governor of Sululta Sub-City
                </span>
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}