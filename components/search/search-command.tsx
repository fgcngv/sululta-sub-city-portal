

"use client";

import Link from "next/link";
import {
  ArrowRight,
  FileText,
  Newspaper,
  Search,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

type SearchItem = {
  id: string;
  title: string;
  description: string;
  href: string;
  type: "page" | "service" | "news";
};

const searchItems: SearchItem[] = [
  {
    id: "services",
    title: "Public Services",
    description: "Explore services provided by Sululta Sub-City.",
    href: "/services",
    type: "service",
  },
  {
    id: "about",
    title: "About Sululta",
    description: "Learn more about the administration and the sub-city.",
    href: "/about",
    type: "page",
  },
  {
    id: "news",
    title: "Latest News",
    description: "Read the latest news and announcements.",
    href: "/news",
    type: "news",
  },
  {
    id: "projects",
    title: "Development Projects",
    description: "Explore development activities and completed projects.",
    href: "/projects",
    type: "page",
  },
  {
    id: "gallery",
    title: "Gallery",
    description: "View photos and visual stories from Sululta.",
    href: "/gallery",
    type: "page",
  },
  {
    id: "contact",
    title: "Contact",
    description: "Find contact and location information.",
    href: "/contact",
    type: "page",
  },
];

function getIcon(type: SearchItem["type"]) {
  if (type === "service") {
    return FileText;
  }

  if (type === "news") {
    return Newspaper;
  }

  return ArrowRight;
}

type SearchCommandProps = {
  open: boolean;
  onClose: () => void;
};

export function SearchCommand({
  open,
  onClose,
}: SearchCommandProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) {
      setQuery("");
      return;
    }

    const timer = window.setTimeout(() => {
      inputRef.current?.focus();
    }, 50);

    return () => window.clearTimeout(timer);
  }, [open]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  if (!open) {
    return null;
  }

  const normalizedQuery = query.trim().toLowerCase();

  const results = normalizedQuery
    ? searchItems.filter((item) =>
        `${item.title} ${item.description} ${item.type}`
          .toLowerCase()
          .includes(normalizedQuery),
      )
    : searchItems.slice(0, 5);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[10vh] sm:px-6"
      role="dialog"
      aria-modal="true"
      aria-label="Search Sululta"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close search"
        onClick={onClose}
        className="fixed inset-0 cursor-default bg-slate-950/50 backdrop-blur-sm"
      />

      {/* Search panel */}
      <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-950/20">
        {/* Search input */}
        <div className="flex items-center gap-3 border-b border-slate-200 px-4">
          <Search
            className="size-5 shrink-0 text-slate-400"
            aria-hidden="true"
          />

          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search Sululta..."
            aria-label="Search Sululta"
            className="
              h-16 min-w-0 flex-1 bg-transparent
              text-base text-slate-950
              outline-none
              placeholder:text-slate-400
            "
          />

          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="
              inline-flex size-9 shrink-0 items-center justify-center
              rounded-lg text-slate-500
              transition-colors
              hover:bg-slate-100 hover:text-slate-900
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-slate-900
            "
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto p-2">
          {results.length > 0 ? (
            <div className="space-y-1">
              {!normalizedQuery && (
                <p className="px-3 pb-2 pt-2 text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                  Popular
                </p>
              )}

              {results.map((item) => {
                const Icon = getIcon(item.type);

                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={onClose}
                    className="
                      group flex items-center gap-3
                      rounded-xl p-3
                      transition-colors
                      hover:bg-slate-50
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-slate-900
                    "
                  >
                    <span
                      className="
                        inline-flex size-10 shrink-0 items-center
                        justify-center rounded-lg
                        bg-slate-100 text-slate-600
                        transition-colors
                        group-hover:bg-slate-900
                        group-hover:text-white
                      "
                    >
                      <Icon className="size-4" aria-hidden="true" />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-semibold text-slate-900">
                        {item.title}
                      </span>

                      <span className="mt-0.5 block truncate text-sm text-slate-500">
                        {item.description}
                      </span>
                    </span>

                    <ArrowRight
                      className="
                        size-4 shrink-0
                        text-slate-300
                        transition-all
                        group-hover:translate-x-0.5
                        group-hover:text-slate-700
                      "
                      aria-hidden="true"
                    />
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="px-6 py-12 text-center">
              <span className="mx-auto inline-flex size-12 items-center justify-center rounded-full bg-slate-100">
                <Search
                  className="size-5 text-slate-400"
                  aria-hidden="true"
                />
              </span>

              <h2 className="mt-4 text-sm font-semibold text-slate-900">
                No results found
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Try searching for a service, news article, or page.
              </p>
            </div>
          )}
        </div>

        {/* Footer hint */}
        <div className="hidden border-t border-slate-100 bg-slate-50 px-4 py-2.5 sm:flex sm:items-center sm:justify-between">
          <span className="text-xs text-slate-400">
            Search services, news and information
          </span>

          <button
            type="button"
            onClick={onClose}
            className="text-xs font-medium text-slate-500"
          >
            ESC to close
          </button>
        </div>
      </div>
    </div>
  );
}