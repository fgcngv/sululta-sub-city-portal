"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigationItems } from "@/lib/navigation";

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation">
      <ul className="flex items-center gap-1">
        {navigationItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

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