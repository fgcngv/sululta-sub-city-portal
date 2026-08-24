import Link from "next/link";
import { ArrowRight } from "lucide-react";


type Project = {
  id: string;
  title: string;
  year: number;
  location: string;
  description: string;
  image: string;
  href: string;
};


type ProjectsPreviewProps = {
  t: {
    projects: {
      label: string;
      title: string;
      description: string;
      viewAll: string;
      viewGallery: string;

      items: Project[];
    };
  };

  showViewAll?: boolean;
};



export function ProjectsPreview({
  t,
  showViewAll = true,
}: ProjectsPreviewProps) {


  const currentYear = new Date().getFullYear();


  const recentFiveYears =
    t.projects.items.filter(
      (project) =>
        project.year >= currentYear - 4 &&
        project.year <= currentYear
    );



  return (

    <section
      aria-labelledby="projects-preview-heading"
      className="bg-white"
    >

      <div className="
        mx-auto max-w-7xl
        px-4 py-16
        sm:px-6
        lg:px-8
        lg:py-24
      ">



        {/* HEADER */}

        <div className="
          flex flex-col gap-6
          sm:flex-row
          sm:items-end
          sm:justify-between
        ">


          <div className="max-w-2xl">


            <p className="
              text-sm font-semibold
              uppercase tracking-[0.18em]
              text-slate-500
            ">

              {t.projects.label}

            </p>



            <h2
              id="projects-preview-heading"
              className="
                mt-3
                text-3xl font-bold
                tracking-tight
                text-red-700
                sm:text-4xl
              "
            >

              {t.projects.title}

            </h2>



            <p className="
              mt-4
              text-base
              leading-7
              text-slate-600
            ">

              {t.projects.description}

            </p>


          </div>




          {showViewAll && (

            <Link
              href="/projects"
              className="
                inline-flex
                min-h-11
                items-center
                gap-2
                text-sm
                font-semibold
                text-red-700
                hover:text-slate-600
              "
            >

              {t.projects.viewAll}


              <ArrowRight className="size-4"/>


            </Link>

          )}



        </div>





        {/* PROJECT CARDS */}


        <div className="
          mt-10
          grid gap-6
          sm:grid-cols-2
          lg:grid-cols-3
        ">


          {recentFiveYears.map((project)=>(


            <Link

              key={project.id}

              href="/gallery"

              className="
                group
                overflow-hidden
                rounded-2xl
                border
                bg-white
                transition-all
                hover:-translate-y-1
                hover:shadow-xl
              "
            >


              <div className="
                relative
                aspect-[16/10]
                overflow-hidden
                bg-slate-100
              ">


                <img

                  src={project.image}

                  alt={project.title}

                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "

                />



                <span
                  className="
                    absolute
                    left-4
                    top-4
                    rounded-full
                    bg-white/95
                    px-3
                    py-1.5
                    text-xs
                    font-bold
                    text-red-700
                    shadow-sm
                  "
                >

                  {project.year}

                </span>


              </div>





              <div className="p-6">


                <p className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-slate-500
                ">

                  {project.location}

                </p>




                <h3 className="
                  mt-2
                  text-xl
                  font-semibold
                  text-red-700
                ">

                  {project.title}

                </h3>





                <p className="
                  mt-3
                  text-sm
                  leading-6
                  text-slate-600
                ">

                  {project.description}

                </p>




                <div className="
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  text-red-700
                ">


                  {t.projects.viewGallery}



                </div>



              </div>


            </Link>


          ))}



        </div>



      </div>


    </section>


  );

}