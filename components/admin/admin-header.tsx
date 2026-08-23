

"use client";

import {
  Bell,
  Menu,
  Search,
} from "lucide-react";

type AdminHeaderProps = {
  onMenuClick?: () => void;
};

export function AdminHeader({
  onMenuClick,
}: AdminHeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white/95 px-4 backdrop-blur-xl sm:px-6 lg:px-8">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          aria-label="Open administration menu"
          className="inline-flex size-10 items-center justify-center rounded-xl text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950 lg:hidden"
        >
          <Menu className="size-5" />
        </button>

        <div>
          <p className="text-xs font-medium text-slate-500">
            Sululta Administration
          </p>

          <h1 className="text-lg font-semibold text-slate-950">
            Administration Portal
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          aria-label="Search administration"
          className="inline-flex size-10 items-center justify-center rounded-xl text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950"
        >
          <Search className="size-5" />
        </button>

        <button
          type="button"
          aria-label="Notifications"
          className="relative inline-flex size-10 items-center justify-center rounded-xl text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950"
        >
          <Bell className="size-5" />

          <span className="absolute right-2.5 top-2.5 size-2 rounded-full bg-red-500 ring-2 ring-white" />
        </button>
      </div>
    </header>
  );
}