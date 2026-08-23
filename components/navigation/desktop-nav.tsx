"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ExternalLink } from "lucide-react";
import { navigationItems } from "@/lib/navigation";

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation">
      <ul className="flex items-center gap-1">
        {navigationItems.map((item) => {
          const isServices = "dropdown" in item && item.dropdown;

          const isActive =
            item.href === "/"
              ? pathname === "/"
              : item.href !== "#" && pathname.startsWith(item.href);

          // SERVICES DROPDOWN
          if (isServices) {
            return (
              <li key={item.label} className="group relative">
                <button
                  type="button"
                  className={[
                    "group relative inline-flex min-h-10 items-center gap-1.5 rounded-lg px-3 py-2",
                    "text-sm font-medium text-slate-700",
                    "transition-colors duration-200",
                    "hover:bg-slate-50 hover:text-slate-950",
                    "focus-visible:outline-none focus-visible:ring-2",
                    "focus-visible:ring-slate-900 focus-visible:ring-offset-2",
                  ].join(" ")}
                >
                  <span>{item.label}</span>

                  <ChevronDown
                    className="size-4 transition-transform duration-200 group-hover:rotate-180"
                    aria-hidden="true"
                  />

                  <span
                    aria-hidden="true"
                    className="absolute inset-x-3 bottom-1 h-0.5 origin-left scale-x-0 rounded-full bg-slate-900 transition-transform duration-200 group-hover:scale-x-100"
                  />
                </button>

                {/* Dropdown */}
                <div
                  className="
                    invisible absolute left-1/2 top-full z-50
                    w-64 -translate-x-1/2 translate-y-2
                    pt-2 opacity-0
                    transition-all duration-200
                    group-hover:visible
                    group-hover:translate-y-0
                    group-hover:opacity-100
                  "
                >
                  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-900/10">
                    <div className="px-3 py-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                        Online Services
                      </p>
                    </div>

                    {item.dropdown.map((service) => (
                      <a
                        key={service.label}
                        href={service.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          group/service flex items-center justify-between
                          rounded-xl px-3 py-3
                          text-sm font-medium text-slate-700
                          transition-colors
                          hover:bg-slate-50 hover:text-slate-950
                        "
                      >
                        <span>{service.label}</span>

                        <ExternalLink
                          className="
                            size-4 text-slate-400
                            transition-transform
                            group-hover/service:translate-x-0.5
                            group-hover/service:text-slate-700
                          "
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </li>
            );
          }

          // NORMAL NAVIGATION ITEMS
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={[
                  "group relative inline-flex min-h-10 items-center rounded-lg px-3 py-2",
                  "text-sm font-medium transition-colors duration-200",
                  "focus-visible:outline-none focus-visible:ring-2",
                  "focus-visible:ring-slate-900 focus-visible:ring-offset-2",
                  isActive
                    ? "text-slate-950"
                    : "text-slate-700 hover:bg-slate-50 hover:text-slate-950",
                ].join(" ")}
              >
                <span>{item.label}</span>

                <span
                  aria-hidden="true"
                  className={[
                    "absolute inset-x-3 bottom-1 h-0.5 origin-left rounded-full",
                    "bg-slate-900 transition-transform duration-200",
                    isActive
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100",
                  ].join(" ")}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}