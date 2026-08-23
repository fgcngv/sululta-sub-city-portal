


"use client";

import Link from "next/link";
import { ArrowDown, Play } from "lucide-react";
import { useEffect, useState } from "react";



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

type HeroProps = {
  t: {
    hero: {
      badge: string;
      texts: string[];
      description: string;
      button: string;
      nature: string;
      science: string;
      culture: string;
    };
  };
};


export function Hero({ t }: HeroProps) {
  const { displayText, isDeleting } =
  useLoopingTypewriter(t.hero.texts);

  return (
    <section
      aria-label="Sululta highlights"
      className="relative isolate min-h-screen overflow-hidden bg-black text-white"
    >
      {/* =====================================================
          VIDEO BACKGROUND
      ===================================================== */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/hero/sululta-img-1.jpg"
          aria-hidden="true"
        >
          <source
            src="/videos/documentary.mp4"
            type="video/mp4"
          />
          Your browser does not support HTML5 video.
        </video>
      </div>
  
      {/* =====================================================
          CINEMATIC OVERLAYS
      ===================================================== */}
  
      {/* Light overall darkening */}
      <div className="absolute inset-0 -z-20 bg-black/10" />
  
      {/* Left readability gradient */}
      <div
        className="
          absolute inset-0 -z-20
          bg-gradient-to-r
          from-black/65
          via-black/25
          to-transparent
        "
      />
  
      {/* Bottom readability gradient */}
      <div
        className="
          absolute inset-x-0 bottom-0 -z-20 h-[55%]
          bg-gradient-to-t
          from-black/75
          via-black/25
          to-transparent
        "
      />
  
      {/* Mobile readability */}
      <div
        className="
          absolute inset-0 -z-20
          bg-gradient-to-t
          from-black/70
          via-black/15
          to-transparent
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
  
          {/* TOP BADGE */}
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
                {t.hero.badge}
              </span>
            </div>
          </div>
  
          {/* MAIN HEADING */}
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
  
          {/* DESCRIPTION */}
          <p
            className="
              mt-8
              max-w-2xl
              text-base
              leading-7
              text-white/80
              sm:text-lg
              sm:leading-8
              md:text-xl
            "
          >
            {t.hero.description}
          </p>
  
          {/* ACTIONS */}
          <div
            className="
              mt-9
              flex flex-col
              gap-3
              sm:flex-row
              sm:items-center
            "
          >
          </div>
  
          {/* MINI INFO */}
          <div
            className="
              mt-12
              flex
              flex-wrap
              items-center
              gap-x-8
              gap-y-4
              text-xs
              text-white/60
            "
          >
            <div className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-emerald-400" />
              <span>{t.hero.nature}</span>
            </div>
  
            <div className="hidden h-4 w-px bg-white/20 sm:block" />
  
            <div className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-cyan-400" />
              <span>{t.hero.science}</span>
            </div>
  
            <div className="hidden h-4 w-px bg-white/20 sm:block" />
  
            <div className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-white/60" />
              <span>{t.hero.culture}</span>
            </div>
          </div>
        </div>
      </div>
  
      {/* SCROLL INDICATOR */}
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
  
      {/* VIDEO LABEL */}
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
          text-white/50
          sm:flex
          md:left-10
        "
      >
        <span className="h-px w-8 bg-white/30" />
        Sululta · Ethiopia
      </div>
    </section>
  );
}
