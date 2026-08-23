// components/navigation/language-switcher.tsx

"use client";

import { Check, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const languages = [
  {
    code: "en",
    label: "English",
    nativeLabel: "English",
  },
  {
    code: "am",
    label: "Amharic",
    nativeLabel: "አማርኛ",
  },
  {
    code: "om",
    label: "Afaan Oromoo",
    nativeLabel: "Afaan Oromoo",
  },
];

type LanguageSwitcherProps = {
  variant?: "desktop" | "mobile";
};

export function LanguageSwitcher({
  variant = "desktop",
}: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const selectedLanguage =
    languages.find(
      (language) => language.code === currentLanguage,
    ) ?? languages[0];

  if (variant === "mobile") {
    return (
      <div ref={containerRef} className="w-full">
        <button
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="
            flex w-full items-center justify-between
            rounded-xl px-3 py-3
            text-left text-sm font-medium text-slate-700
            transition-colors
            hover:bg-slate-50 hover:text-slate-950
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-slate-900
          "
        >
          <span className="flex items-center gap-3">
            <span className="inline-flex size-8 items-center justify-center rounded-lg bg-slate-100 text-xs font-bold text-slate-700">
              {selectedLanguage.code.toUpperCase()}
            </span>

            <span>
              <span className="block font-semibold text-slate-900">
                {selectedLanguage.nativeLabel}
              </span>

              <span className="block text-xs text-slate-500">
                Language
              </span>
            </span>
          </span>

          <ChevronDown
            className={[
              "size-4 transition-transform duration-200",
              open ? "rotate-180" : "",
            ].join(" ")}
            aria-hidden="true"
          />
        </button>

        {open && (
          <div className="mt-1 space-y-1 px-1">
            {languages.map((language) => {
              const isSelected =
                language.code === currentLanguage;

              return (
                <button
                  key={language.code}
                  type="button"
                  onClick={() => {
                    setCurrentLanguage(language.code);
                    setOpen(false);
                  }}
                  className={[
                    "flex w-full items-center justify-between",
                    "rounded-lg px-3 py-3",
                    "text-left text-sm",
                    "transition-colors",
                    isSelected
                      ? "bg-slate-100 text-slate-950"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-950",
                  ].join(" ")}
                >
                  <span className="flex flex-col">
                    <span className="font-medium">
                      {language.nativeLabel}
                    </span>

                    <span className="text-xs text-slate-500">
                      {language.label}
                    </span>
                  </span>

                  {isSelected && (
                    <Check
                      className="size-4"
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="
          inline-flex min-h-10 items-center gap-1.5
          rounded-lg px-3
          text-sm font-medium text-slate-700
          transition-colors
          hover:bg-slate-50 hover:text-slate-950
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-slate-900
          focus-visible:ring-offset-2
        "
      >
        <span>{selectedLanguage.code.toUpperCase()}</span>

        <ChevronDown
          className={[
            "size-4 transition-transform duration-200",
            open ? "rotate-180" : "",
          ].join(" ")}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div
          role="menu"
          aria-label="Select language"
          className="
            absolute right-0 top-[calc(100%+0.5rem)]
            z-50 w-52
            overflow-hidden rounded-xl
            border border-slate-200
            bg-white p-1.5
            shadow-xl shadow-slate-900/10
          "
        >
          {languages.map((language) => {
            const isSelected =
              language.code === currentLanguage;

            return (
              <button
                key={language.code}
                type="button"
                role="menuitemradio"
                aria-checked={isSelected}
                onClick={() => {
                  setCurrentLanguage(language.code);
                  setOpen(false);
                }}
                className="
                  flex w-full items-center justify-between
                  rounded-lg px-3 py-2.5
                  text-left text-sm
                  transition-colors
                  hover:bg-slate-50
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-slate-900
                "
              >
                <span className="flex flex-col">
                  <span className="font-medium text-slate-900">
                    {language.nativeLabel}
                  </span>

                  <span className="text-xs text-slate-500">
                    {language.label}
                  </span>
                </span>

                {isSelected && (
                  <Check
                    className="size-4 text-slate-900"
                    aria-hidden="true"
                  />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}