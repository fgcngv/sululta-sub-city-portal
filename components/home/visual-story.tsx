

// import Link from "next/link";
// import { ArrowRight, Play } from "lucide-react";

// export function VisualStory() {
//   return (
//     <section
//       aria-labelledby="visual-story-heading"
//       className="bg-slate-950 text-white"
//     >
//       <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
//         <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
//           {/* Text */}
//           <div>
//             <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
//               Discover Sululta
//             </p>

//             <h2
//               id="visual-story-heading"
//               className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
//             >
//               See Sululta in motion
//             </h2>

//             <p className="mt-5 text-base leading-7 text-white/70">
//               Explore the people, places, development activities and
//               community life that make Sululta a growing and vibrant area.
//             </p>

//             <Link
//               href="/gallery"
//               className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
//             >
//               Explore more
//               <ArrowRight className="size-4" />
//             </Link>
//           </div>

//           {/* Video */}
//           <div className="relative overflow-hidden rounded-2xl bg-slate-800 shadow-2xl">
//             <div className="relative aspect-video">
//               {/* Temporary video placeholder */}
//               <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-700 via-slate-800 to-slate-950">
//                 <div className="text-center">
//                   <button
//                     type="button"
//                     aria-label="Play Sululta video"
//                     className="mx-auto flex size-16 items-center justify-center rounded-full bg-white text-slate-950 shadow-xl transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-slate-800"
//                   >
//                     <Play className="ml-1 size-6 fill-current" />
//                   </button>

//                   <p className="mt-4 text-sm font-medium text-white/70">
//                     Sululta visual story
//                   </p>

//                   <p className="mt-1 text-xs text-white/50">
//                     Video placeholder
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import Link from "next/link";
import { ArrowRight } from "lucide-react";

type VisualStoryProps = {
  eyebrow: string;
  title: string;
  description: string;
  videoUrl: string;
  posterImage?: string;
  videoTitle: string;
  exploreHref: string;
};

export function VisualStory({
  eyebrow,
  title,
  description,
  videoUrl,
  posterImage,
  videoTitle,
  exploreHref,
}: VisualStoryProps) {
  return (
    <section
      aria-labelledby="visual-story-heading"
      className="bg-slate-950 text-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Text */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
              {eyebrow}
            </p>

            <h2
              id="visual-story-heading"
              className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              {title}
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-white/70">
              {description}
            </p>

            <Link
              href={exploreHref}
              className=" mt-8 inline-flex min-h-11 items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Explore more
              <ArrowRight className="size-4" />
            </Link>
          </div>

          {/* Video */}
          <div className="overflow-hidden rounded-2xl bg-black shadow-2xl">
            <video
              className="block aspect-video w-full object-cover"
              controls
              preload="metadata"
              playsInline
              poster={posterImage}
              aria-label={videoTitle}
            >
              <source src={videoUrl} type="video/mp4" />

              Your browser does not support HTML5 video.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}