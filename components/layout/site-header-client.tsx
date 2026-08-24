

"use client";

import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

import { MobileNav } from "@/components/navigation/mobile-nav";
import { DesktopNav } from "@/components/navigation/desktop-nav";
import { LanguageSwitcher } from "@/components/navigation/language-switcher";
import { SearchCommand } from "@/components/search/search-command";

import type { Language } from "@/lib/i18n/index";

type SiteHeaderClientProps = {
  language: Language;
};

export function SiteHeaderClient({
  language,
}: SiteHeaderClientProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const isShortcut =
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === "k";

      if (isShortcut) {
        event.preventDefault();
        setSearchOpen(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <header
        className={[
          "sticky top-0 z-50 w-full",
          "border-b border-slate-200/50 bg-white/75 backdrop-blur-lg",
          "transition-all duration-300",
        ].join(" ")}
      >
        <div
          className={[
            "mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8",
            "transition-[height] duration-300",
            isScrolled ? "h-16" : "h-20",
          ].join(" ")}
        >
          {/* =====================================================
              LOGO
          ===================================================== */}

          <Link
            href="/"
            aria-label="Sululta Sub-City Administration home"
            className="
              shrink-0 rounded-md
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-slate-900
              focus-visible:ring-offset-2
            "
          >
            <Image
              src="/images/shaggar-logo.png"
              alt="Shaggar City Administration"
              width={150}
              height={70}
              priority
              className={[
                "w-auto object-contain transition-all duration-300 rounded-2xl",
                isScrolled
                  ? "h-10 sm:h-11"
                  : "h-12 sm:h-14",
              ].join(" ")}
            />
          </Link>

          {/* =====================================================
              DESKTOP
          ===================================================== */}

          <div className="hidden lg:flex lg:items-center lg:gap-6">
            <DesktopNav />

            <div className="flex items-center gap-1 border-l border-slate-200 pl-4">
              {/* Search */}

              <button
                type="button"
                aria-label="Search"
                onClick={() => setSearchOpen(true)}
                className="
                  inline-flex size-10 items-center justify-center
                  rounded-full text-slate-700
                  transition-all duration-200
                  hover:bg-slate-100
                  hover:text-slate-950
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-slate-900
                  focus-visible:ring-offset-2
                "
              >
                <Search
                  className="size-[18px]"
                  aria-hidden="true"
                />
              </button>

              {/* Language */}

              <LanguageSwitcher
                variant="desktop"
                currentLanguage={language}
              />
            </div>
          </div>

          {/* =====================================================
              MOBILE
          ===================================================== */}

          <div className="lg:hidden">
            <MobileNav
              onSearch={() => setSearchOpen(true)}
            />
          </div>
        </div>
      </header>

      {/* =====================================================
          SEARCH
      ===================================================== */}

      <SearchCommand
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
    </>
  );
}
