"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Play } from "lucide-react";
import { useEffect, useState } from "react";

const TEXTS = [
  "Welcome to Sululta Sub-City",
  "Discover the beauty of Sululta",
  "Experience something different",
  "Your journey starts here",
  "We are Building a Better Sululta",
  "Science & Technology",
];

const TYPING_SPEED = 70;
const DELETING_SPEED = 40;
const HOLD_DURATION = 2200;
const BETWEEN_TEXTS = 500;

function useLoopingTypewriter(texts: string[]) {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [phase, setPhase] = useState<
    "typing" | "holding" | "deleting" | "waiting"
  >("typing");

  const currentText = texts[textIndex];

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (displayText.length < currentText.length) {
        timer = setTimeout(() => {
          setDisplayText(
            currentText.slice(0, displayText.length + 1)
          );
        }, TYPING_SPEED);
      } else {
        setPhase("holding");
      }
    } else if (phase === "holding") {
      timer = setTimeout(() => {
        setPhase("deleting");
      }, HOLD_DURATION);
    } else if (phase === "deleting") {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(
            currentText.slice(0, displayText.length - 1)
          );
        }, DELETING_SPEED);
      } else {
        setPhase("waiting");
      }
    } else if (phase === "waiting") {
      timer = setTimeout(() => {
        setTextIndex((current) =>
          current === texts.length - 1 ? 0 : current + 1
        );
        setPhase("typing");
      }, BETWEEN_TEXTS);
    }

    return () => clearTimeout(timer);
  }, [currentText, displayText, phase, texts]);

  return {
    displayText,
    isDeleting: phase === "deleting",
  };
}

export function Hero() {
  const { displayText, isDeleting } =
    useLoopingTypewriter(TEXTS);

  return (
    <section
      aria-label="Sululta highlights"
      className="relative isolate min-h-screen overflow-hidden bg-slate-950 text-white"
    >
      {/* =====================================================
          VIDEO BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0 -z-30">

                    <video
              className="block aspect-video w-full object-cover"
              controls
              preload="metadata"
              playsInline
              poster="/images/hero/sululta-img-1.jpg"
              aria-label="Sululta documentary"
            >
              <source src="/videos/sululta documetaries.mp4"
               type="video/mp4" />

              Your browser does not support HTML5 video.
            </video>
      </div>

      {/* =====================================================
          CINEMATIC OVERLAYS
      ===================================================== */}

      {/* Base darkening */}
      <div className="absolute inset-0 -z-20 bg-black/30" />

      {/* Left cinematic gradient */}
      <div
        className="
          absolute inset-0 -z-20
          bg-gradient-to-r
          from-black/90
          via-black/55
          to-black/10
        "
      />

      {/* Bottom cinematic gradient */}
      <div
        className="
          absolute inset-x-0 bottom-0 -z-20 h-[75%]
          bg-gradient-to-t
          from-black
          via-black/60
          to-transparent
        "
      />

      {/* Mobile readability */}
      <div
        className="
          absolute inset-0 -z-20
          bg-gradient-to-t
          from-black/95
          via-black/45
          to-black/20
          md:hidden
        "
      />

      {/* =====================================================
          AMBIENT LIGHT
      ===================================================== */}

      <div
        className="
          pointer-events-none absolute
          -right-32 top-1/4 -z-10
          h-[420px] w-[420px]
          rounded-full
          bg-emerald-400/10
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none absolute
          -left-32 bottom-1/4 -z-10
          h-[350px] w-[350px]
          rounded-full
          bg-cyan-400/10
          blur-[120px]
        "
      />

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div
        className="
          relative z-10
          mx-auto flex min-h-screen
          max-w-7xl
          items-center
          px-5 py-24
          sm:px-8
          md:px-10
          lg:px-12
        "
      >
        <div className="w-full max-w-5xl">

          {/* =================================================
              TOP BADGE
          ================================================= */}

          <div className="mb-7">
            <div
              className="
                inline-flex items-center
                gap-3 rounded-full
                border border-white/15
                bg-white/[0.08]
                px-4 py-2
                backdrop-blur-xl
                shadow-2xl shadow-black/20
              "
            >
              <span className="relative flex size-2.5">
                <span
                  className="
                    absolute inline-flex
                    size-full animate-ping
                    rounded-full
                    bg-emerald-400
                    opacity-75
                  "
                />

                <span
                  className="
                    relative inline-flex
                    size-2.5
                    rounded-full
                    bg-emerald-400
                  "
                />
              </span>

              <span
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-white/85
                "
              >
                Discover Sululta
              </span>
            </div>
          </div>

          {/* =================================================
              MAIN HEADING
          ================================================= */}

          <h1
            aria-live="polite"
            className="
              max-w-5xl
              text-left
              text-[clamp(3rem,8vw,7.5rem)]
              font-semibold
              leading-[0.9]
              tracking-[-0.055em]
              text-white
            "
          >
            {displayText}

            <span
              aria-hidden="true"
              className={[
                `
                ml-2
                inline-block
                h-[0.78em]
                w-[3px]
                translate-y-[0.03em]
                rounded-full
                bg-white
                align-middle
                shadow-[0_0_20px_rgba(255,255,255,0.8)]
                `,
                isDeleting
                  ? "animate-pulse"
                  : "animate-[blink_0.8s_step-end_infinite]",
              ].join(" ")}
            />
          </h1>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <p
            className="
              mt-8
              max-w-2xl
              text-base
              leading-7
              text-white/70
              sm:text-lg
              sm:leading-8
              md:text-xl
            "
          >
            Discover the people, places, innovation, culture,
            and experiences that make Sululta a place to
            explore, connect, and build the future.
          </p>

          {/* =================================================
              ACTIONS
          ================================================= */}

          <div
            className="
              mt-9
              flex flex-col
              gap-3
              sm:flex-row
              sm:items-center
            "
          >
            {/* Primary CTA */}

            {/* Secondary CTA */}

            <Link
              href="/about"
              className="
                inline-flex
                min-h-14
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-white/20
                bg-white/[0.08]
                px-7
                text-sm
                font-semibold
                text-white
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-white/[0.14]
                hover:border-white/30
              "
            >
              <Play className="size-4 fill-current" />
              Discover Sululta
            </Link>
          </div>

          {/* =================================================
              MINI INFO
          ================================================= */}

          <div
            className="
              mt-12
              flex
              flex-wrap
              items-center
              gap-x-8
              gap-y-4
              text-xs
              text-white/50
            "
          >
            <div className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-emerald-400" />
              <span>Nature &amp; Adventure</span>
            </div>

            <div className="hidden h-4 w-px bg-white/20 sm:block" />

            <div className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-cyan-400" />
              <span>Science &amp; Technology</span>
            </div>

            <div className="hidden h-4 w-px bg-white/20 sm:block" />

            <div className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-white/60" />
              <span>Community &amp; Culture</span>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ===================================================== */}

      <div
        className="
          absolute
          bottom-7
          right-6
          z-20
          hidden
          flex-col
          items-center
          gap-3
          text-white/50
          sm:flex
          md:right-10
        "
      >
        <span
          className="
            [writing-mode:vertical-rl]
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.3em]
          "
        >
          Scroll to explore
        </span>

        <div
          className="
            flex size-9
            items-center
            justify-center
            rounded-full
            border
            border-white/15
            bg-white/5
            backdrop-blur-md
          "
        >
          <ArrowDown
            className="
              size-4
              animate-bounce
            "
          />
        </div>
      </div>

      {/* =====================================================
          VIDEO LABEL
      ===================================================== */}

      <div
        className="
          absolute
          bottom-7
          left-5
          z-20
          hidden
          items-center
          gap-3
          text-[10px]
          font-medium
          uppercase
          tracking-[0.25em]
          text-white/40
          sm:flex
          md:left-10
        "
      >
        <span className="h-px w-8 bg-white/30" />
        Sululta · Ethiopia
      </div>

      {/* =====================================================
          ANIMATIONS
      ===================================================== */}

      {/* <style jsx>{`
        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }

          51%,
          100% {
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }

          video {
            display: none;
          }
        }
      `}</style> */}
    </section>
  );
}


// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { ArrowUpRight } from "lucide-react";
// import { useEffect, useState } from "react";

// const TEXTS = [
//   "Welcome to Sululta Sub-City",
//   "Discover the beauty of Sululta",
//   "Experience something different",
//   "Your journey starts here",
//   "We are Building a Better Sululta",
//   "Science & Technology"
// ];

// const TYPING_SPEED = 70;
// const DELETING_SPEED = 40;
// const HOLD_DURATION = 2200;
// const BETWEEN_TEXTS = 500;

// function useLoopingTypewriter(texts: string[]) {
//   const [textIndex, setTextIndex] = useState(0);
//   const [displayText, setDisplayText] = useState("");
//   const [phase, setPhase] = useState<
//     "typing" | "holding" | "deleting" | "waiting"
//   >("typing");

//   const currentText = texts[textIndex];

//   useEffect(() => {
//     let timer: ReturnType<typeof setTimeout>;

//     // =========================================================
//     // TYPING
//     // =========================================================

//     if (phase === "typing") {
//       if (displayText.length < currentText.length) {
//         timer = setTimeout(() => {
//           setDisplayText(
//             currentText.slice(0, displayText.length + 1)
//           );
//         }, TYPING_SPEED);
//       } else {
//         setPhase("holding");
//       }
//     }

//     // =========================================================
//     // HOLD
//     // =========================================================

//     else if (phase === "holding") {
//       timer = setTimeout(() => {
//         setPhase("deleting");
//       }, HOLD_DURATION);
//     }

//     // =========================================================
//     // DELETING
//     // =========================================================

//     else if (phase === "deleting") {
//       if (displayText.length > 0) {
//         timer = setTimeout(() => {
//           setDisplayText(
//             currentText.slice(0, displayText.length - 1)
//           );
//         }, DELETING_SPEED);
//       } else {
//         setPhase("waiting");
//       }
//     }

//     // =========================================================
//     // WAIT → NEXT TEXT
//     // =========================================================

//     else if (phase === "waiting") {
//       timer = setTimeout(() => {
//         setTextIndex((current) =>
//           current === texts.length - 1 ? 0 : current + 1
//         );

//         setPhase("typing");
//       }, BETWEEN_TEXTS);
//     }

//     return () => clearTimeout(timer);
//   }, [currentText, displayText, phase, texts]);

//   return {
//     displayText,
//     isDeleting: phase === "deleting",
//   };
// }

// export function Hero() {
//   const { displayText, isDeleting } =
//     useLoopingTypewriter(TEXTS);

//   return (
//     <section
//       aria-label="Sululta highlights"
//       className="relative overflow-hidden bg-slate-950"
//     >
//       {/* =======================================================
//           HERO
//       ======================================================= */}

//       <div className="relative min-h-[650px] md:min-h-[720px] lg:min-h-[760px]">

//         {/* =====================================================
//             SINGLE BACKGROUND IMAGE

//             This image NEVER changes.
//         ===================================================== */}

//         <div className="absolute inset-0">
//           <Image
//             src="/images/hero/sululta-img-1.jpg"
//             alt="Sululta landscape"
//             fill
//             priority
//             sizes="100vw"
//             className="object-cover"
//           />
//         </div>

//         {/* =====================================================
//             OVERLAYS
//         ===================================================== */}

//         {/* Overall dark overlay */}
//         <div className="absolute inset-0 bg-black/20" />

//         {/* Desktop cinematic gradient */}
//         <div className="absolute inset-0 hidden bg-gradient-to-r from-black/85 via-black/55 to-black/10 md:block" />

//         {/* Bottom gradient */}
//         <div className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

//         {/* Mobile gradient */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10 md:hidden" />

//         {/* =====================================================
//             CONTENT
//         ===================================================== */}

//         <div className="relative z-10 mx-auto flex min-h-[650px] max-w-7xl items-end px-5 pb-24 sm:px-8 md:min-h-[720px] md:items-center md:px-10 md:pb-0 lg:min-h-[760px]">

//           <div className="max-w-4xl">

//             {/* =================================================
//                 EYEBROW
//             ================================================= */}

//             <div className="mb-6 flex items-center gap-3">
//               <span className="h-px w-10 bg-white/70" />

//               <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80 sm:text-sm">
//                 Explore Sululta
//               </p>
//             </div>

//             {/* =================================================
//                 LOOPING TYPEWRITER TITLE
//             ================================================= */}

//             <h1
//               aria-live="polite"
//               className="min-h-[1.9em] max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-8xl text-center"
//             >
//               {displayText}

//               {/* Cursor */}
//               <span
//                 aria-hidden="true"
//                 className={[
//                   "ml-1 inline-block h-[0.85em] w-[3px] translate-y-[0.05em] bg-white align-middle",
//                   isDeleting
//                     ? "animate-pulse"
//                     : "animate-[blink_0.8s_step-end_infinite]",
//                 ].join(" ")}
//               />
//             </h1>

//             {/* =================================================
//                 DESCRIPTION
//             ================================================= */}

//             <p className="mt-7 max-w-xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
//               Discover places, experiences, and stories that make
//               Sululta special.
//             </p>

//             {/* =================================================
//                 CTA
//             ================================================= */}

//             <div className="mt-8">
//               <Link
//                 href="/explore"
//                 className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-2xl shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-black/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/40"
//               >
//                 Explore Sululta

//                 <span className="flex size-7 items-center justify-center rounded-full bg-slate-950 text-white transition-transform duration-300 group-hover:rotate-45">
//                   <ArrowUpRight className="size-4" />
//                 </span>
//               </Link>
//             </div>

//           </div>
//         </div>
//       </div>

//       {/* =======================================================
//           ANIMATIONS
//       ======================================================= */}

//       <style jsx>{`
//         @keyframes blink {
//           0%,
//           50% {
//             opacity: 1;
//           }

//           51%,
//           100% {
//             opacity: 0;
//           }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           * {
//             animation-duration: 0.01ms !important;
//             animation-iteration-count: 1 !important;
//             transition-duration: 0.01ms !important;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }
