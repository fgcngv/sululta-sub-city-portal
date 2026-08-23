"use client";

import Link from "next/link";
import {
  BriefcaseBusiness,
  ChevronLeft,
  FileText,
  FolderKanban,
  Image as ImageIcon,
  LayoutDashboard,
  Megaphone,
  Settings,
  Users,
  Video,
  type LucideIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";

type NavigationItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

type NavigationSection =
  | NavigationItem
  | {
      label: string;
      items: NavigationItem[];
    };

const navigation: NavigationSection[] = [
  {
    label: "Overview",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    label: "Content",
    items: [
      {
        label: "News",
        href: "/admin/news",
        icon: FileText,
      },
      {
        label: "Services",
        href: "/admin/services",
        icon: BriefcaseBusiness,
      },
      {
        label: "Projects",
        href: "/admin/projects",
        icon: FolderKanban,
      },
      {
        label: "Announcements",
        href: "/admin/announcements",
        icon: Megaphone,
      },
    ],
  },
  {
    label: "Media",
    items: [
      {
        label: "Images",
        href: "/admin/media/images",
        icon: ImageIcon,
      },
      {
        label: "Videos",
        href: "/admin/media/videos",
        icon: Video,
      },
    ],
  },
  {
    label: "Administration",
    items: [
      {
        label: "Users",
        href: "/admin/users",
        icon: Users,
      },
      {
        label: "Settings",
        href: "/admin/settings",
        icon: Settings,
      },
    ],
  },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 shrink-0 border-r border-slate-200 bg-white lg:flex lg:flex-col">
      <div className="flex h-20 items-center border-b border-slate-200 px-5">
        <Link
          href="/admin"
          className="flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
        >
          <div className="flex size-10 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-white">
            S
          </div>

          <div>
            <p className="text-sm font-bold text-slate-950">
              Sululta
            </p>

            <p className="text-xs text-slate-500">
              Administration Portal
            </p>
          </div>
        </Link>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-5">
        {navigation.map((section) => {
          /*
           * Single navigation item
           */
          if ("href" in section) {
            const Icon = section.icon;

            const active =
              pathname === section.href;

            return (
              <Link
                key={section.href}
                href={section.href}
                className={[
                  "mb-2 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                  active
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-950",
                ].join(" ")}
              >
                <Icon className="size-4.5" />
                {section.label}
              </Link>
            );
          }

          /*
           * Navigation section
           */
          return (
            <div
              key={section.label}
              className="mt-6 first:mt-0"
            >
              <p className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                {section.label}
              </p>

              <div className="space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon;

                  const active =
                    pathname === item.href ||
                    pathname.startsWith(`${item.href}/`);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={[
                        "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                        active
                          ? "bg-slate-900 text-white"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-950",
                      ].join(" ")}
                    >
                      <Icon className="size-4.5" />
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </nav>

      <div className="border-t border-slate-200 p-3">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950"
        >
          <ChevronLeft className="size-4" />
          Back to website
        </Link>
      </div>
    </aside>
  );
}