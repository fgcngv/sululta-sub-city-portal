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


type SulultaOverviewProps = {
  t: {
    overview: {
      badge: string;
      title: string;
      description: string;

      administrator: {
        label: string;
        heading: string;
        name: string;
        role: string;
        welcome: string;

        shortMessage: string;
        fullMessages: string[];

        expandButton: string;
        collapseButton: string;
      };

      cards: {
        development: {
          label: string;
          title: string;
          description: string;
          button: string;
        };

        education: {
          label: string;
          title: string;
          description: string;
          button: string;
        };
      };
    };
  };
};


const overviewImages = {
  development: "/images/projects/img4.png",
  education: "/images/projects/img46.png",
};


export function SulultaOverview({
  t,
}: SulultaOverviewProps) {

  const [showAllMessages, setShowAllMessages] =
    useState(false);


  const overviewItems = [
    {
      icon: Building2,
      image: overviewImages.development,
      href: "/projects",
      ...t.overview.cards.development,
    },

    {
      icon: GraduationCap,
      image: overviewImages.education,
      href: "/services/education",
      ...t.overview.cards.education,
    },
  ];


  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">


        {/* HEADER */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="
            inline-flex items-center gap-2
            rounded-full bg-slate-100
            px-3 py-1.5
            text-xs font-semibold uppercase
            tracking-[0.18em]
            text-slate-600
          ">
            <MapPin className="size-3.5" />

            {t.overview.badge}

          </span>


          <h2 className="
            mt-5
            text-3xl font-bold
            tracking-tight text-red-700
            sm:text-4xl lg:text-5xl
          ">

            {t.overview.title}

          </h2>


          <p className="
            mx-auto mt-5 max-w-2xl
            text-base leading-7
            text-slate-600
            sm:text-lg
          ">

            {t.overview.description}

          </p>

        </div>



        {/* ADMINISTRATOR MESSAGE */}


        <div className="
          mt-14 overflow-hidden
          rounded-3xl
          border border-slate-200
          bg-white shadow-sm
        ">

          <div className="grid lg:grid-cols-2">


            {/* IMAGE */}

            <div className="
              relative min-h-[320px]
              overflow-hidden bg-slate-100
              sm:min-h-[400px]
              lg:min-h-[500px]
            ">

              <Image
                src="/images/projects/img50.png"
                alt={t.overview.administrator.heading}
                fill
                priority
                sizes="(max-width:1024px) 100vw,50vw"
                className="object-cover"
              />


              <div className="
                absolute bottom-6 left-6
              ">

                <span className="
                  inline-flex items-center gap-2
                  rounded-full
                  bg-white/15
                  px-4 py-2
                  text-xs font-semibold
                  uppercase tracking-wide
                  text-white
                  backdrop-blur-md
                ">

                  <MessageSquareText className="size-4"/>

                  {t.overview.administrator.label}

                </span>

              </div>


            </div>




            {/* MESSAGE */}


            <div className="
              flex flex-col justify-center
              p-7 sm:p-10 lg:p-12
            ">


              <p className="
                text-xs font-semibold
                uppercase tracking-[0.16em]
                text-slate-500
              ">

                {t.overview.administrator.heading}

              </p>


              <h3 className="
                mt-3 text-3xl
                font-bold text-red-700
              ">

                {t.overview.administrator.name}

              </h3>


              <p className="
                mt-1 text-sm
                font-medium text-slate-500
              ">

                {t.overview.administrator.role}

              </p>



              <div className="mt-7">

                <h4 className="
                  text-2xl font-bold
                  text-slate-950
                ">

                  {t.overview.administrator.welcome}

                </h4>



                {!showAllMessages ? (

                  <>

                    <p className="
                      mt-4 line-clamp-3
                      text-base leading-7
                      text-slate-600
                    ">

                      {t.overview.administrator.shortMessage}

                    </p>


                    <button
                      type="button"
                      onClick={() =>
                        setShowAllMessages(true)
                      }
                      className="
                        mt-7 inline-flex
                        items-center gap-2
                        rounded-xl
                        bg-red-700
                        px-5 py-3
                        text-sm font-semibold
                        text-white
                      "
                    >

                      <MessageSquareText className="size-4"/>

                      {t.overview.administrator.expandButton}

                      <ArrowRight className="size-4"/>

                    </button>


                  </>


                ) : (

                  <>

                    <div className="
                      mt-4 space-y-4
                    ">

                      {t.overview.administrator.fullMessages.map(
                        (message,index)=>(
                          <p
                            key={index}
                            className="
                              text-base
                              leading-7
                              text-slate-600
                            "
                          >
                            {message}
                          </p>
                        )
                      )}

                    </div>



                    <button
                      type="button"
                      onClick={() =>
                        setShowAllMessages(false)
                      }
                      className="
                        mt-7 inline-flex
                        items-center gap-2
                        rounded-xl
                        border border-slate-200
                        px-5 py-3
                        text-sm font-semibold
                        text-slate-700
                      "
                    >

                      <ChevronUp className="size-4"/>

                      {t.overview.administrator.collapseButton}

                    </button>


                  </>

                )}


              </div>


            </div>


          </div>

        </div>





        {/* DEVELOPMENT + EDUCATION CARDS */}


        <div className="
          mt-6 grid gap-6 md:grid-cols-2
        ">


          {overviewItems.map((item)=>{

            const Icon=item.icon;


            return (

              <a
                key={item.title}
                href={item.href}
                className="
                  group relative
                  min-h-[320px]
                  overflow-hidden
                  rounded-3xl
                "
              >

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />


                <div className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/90
                  via-black/50
                  to-transparent
                "/>


                <div className="
                  absolute inset-x-0
                  bottom-0
                  p-6 sm:p-8
                ">


                  <Icon className="
                    size-10 text-white
                  "/>


                  <p className="
                    mt-5 text-xs
                    uppercase
                    tracking-wide
                    text-white/70
                  ">

                    {item.label}

                  </p>


                  <h4 className="
                    mt-2 text-2xl
                    font-bold text-white
                  ">

                    {item.title}

                  </h4>


                  <p className="
                    mt-2 text-white/80
                  ">

                    {item.description}

                  </p>


                  <span className="
                    mt-5 inline-flex
                    items-center gap-2
                    text-white font-semibold
                  ">

                    {item.button}

                    <ArrowRight className="size-4"/>

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