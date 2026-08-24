import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { newsItems } from "@/lib/news-data";
import { NewsCard } from "@/components/news/news-card";


type NewsPreviewProps = {
  t: {
    news: {
      label: string;
      title: string;
      description: string;
      viewAll: string;
    };
  };

  items?: typeof newsItems;
};



export function NewsPreview({
  t,
  items = newsItems,
}: NewsPreviewProps) {


  return (

    <section
      aria-labelledby="latest-news-heading"
      className="bg-slate-50"
    >


      <div
        className="
          mx-auto max-w-7xl
          px-4 py-16
          sm:px-6
          lg:px-8
          lg:py-24
        "
      >



        {/* HEADER */}

        <div
          className="
            flex flex-col gap-6
            sm:flex-row
            sm:items-end
            sm:justify-between
          "
        >



          <div className="max-w-2xl">


            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.18em]
                text-slate-500
              "
            >

              {t.news.label}

            </p>




            <h2
              id="latest-news-heading"
              className="
                mt-3
                text-3xl
                font-bold
                tracking-tight
                text-red-700
                sm:text-4xl
              "
            >

              {t.news.title}

            </h2>





            <p
              className="
                mt-4
                text-base
                leading-7
                text-slate-600
              "
            >

              {t.news.description}

            </p>



          </div>





          <Link
            href="/news"
            className="
              inline-flex
              min-h-11
              shrink-0
              items-center
              gap-2
              text-sm
              font-semibold
              text-red-700
              transition-colors
              hover:text-slate-600
            "
          >

            {t.news.viewAll}


            <ArrowRight className="size-4"/>


          </Link>



        </div>





        {/* NEWS CARDS */}


        <div
          className="
            mt-10
            grid
            gap-5
            md:grid-cols-2
            lg:grid-cols-3
          "
        >

          {items
            .slice(0,3)
            .map((article)=>(

              <NewsCard
                key={article.id}
                article={article}
              />

          ))}


        </div>




      </div>


    </section>


  );

}