// components/navigation/mobile-nav.tsx

"use client";

import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { useEffect, useState } from "react";

import { navigationItems } from "@/lib/navigation";
import { LanguageSwitcher } from "./language-switcher";

type MobileNavProps = {
  onSearch: () => void;
};

export function MobileNav({ onSearch }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="
          inline-flex size-10 items-center justify-center
          rounded-full text-slate-700
          transition-colors
          hover:bg-slate-100 hover:text-slate-950
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-slate-900
          focus-visible:ring-offset-2
        "
      >
        {open ? (
          <X className="size-5" aria-hidden="true" />
        ) : (
          <Menu className="size-5" aria-hidden="true" />
        )}
      </button>

      {open && (
        <div className="fixed inset-0 top-16 z-40 bg-slate-950/30 backdrop-blur-sm">
          <button
            type="button"
            aria-label="Close navigation"
            onClick={closeMenu}
            className="absolute inset-0 cursor-default"
          />

          <div className="relative z-10 max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-slate-200 bg-white shadow-2xl">
            <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
              <nav aria-label="Mobile navigation">
                <ul className="space-y-1">
                  {navigationItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className="
                          flex min-h-12 items-center
                          rounded-xl px-4
                          text-base font-medium text-slate-700
                          transition-colors
                          hover:bg-slate-50 hover:text-slate-950
                          focus-visible:outline-none
                          focus-visible:ring-2
                          focus-visible:ring-slate-900
                        "
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-5 border-t border-slate-200 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    closeMenu();
                    onSearch();
                  }}
                  className="
                    flex w-full items-center gap-3
                    rounded-xl px-3 py-3
                    text-left text-sm font-medium text-slate-700
                    transition-colors
                    hover:bg-slate-50 hover:text-slate-950
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-slate-900
                  "
                >
                  <span className="inline-flex size-8 items-center justify-center rounded-lg bg-slate-100">
                    <Search className="size-4" aria-hidden="true" />
                  </span>

                  <span>Search</span>
                </button>

                <div className="mt-2">
                  <LanguageSwitcher variant="mobile" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}