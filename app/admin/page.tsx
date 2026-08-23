import {
  ArrowUpRight,
  BriefcaseBusiness,
  FileText,
  FolderKanban,
  Plus,
} from "lucide-react";
import Link from "next/link";

const stats = [
  {
    label: "Published News",
    value: "12",
    description: "Currently published",
    icon: FileText,
  },
  {
    label: "Active Projects",
    value: "8",
    description: "Projects in progress",
    icon: FolderKanban,
  },
  {
    label: "Services",
    value: "14",
    description: "Available services",
    icon: BriefcaseBusiness,
  },
];

const activities = [
  {
    title: "News article published",
    description: "Placeholder activity",
    time: "2 hours ago",
  },
  {
    title: "Project information updated",
    description: "Placeholder activity",
    time: "5 hours ago",
  },
  {
    title: "New service added",
    description: "Placeholder activity",
    time: "Yesterday",
  },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <section>
        <p className="text-sm font-medium text-slate-500">
          Overview
        </p>

        <div className="mt-1 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950">
              Good morning 
            </h2>

            <p className="mt-2 text-slate-600">
              Here&apos;s what&apos;s happening with
              Sululta today.
            </p>
          </div>

          <Link
            href="/admin/news/new"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
          >
            <Plus className="size-4" />
            New News
          </Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div className="flex size-11 items-center justify-center rounded-xl bg-slate-100">
                  <Icon className="size-5 text-slate-700" />
                </div>

                <ArrowUpRight className="size-4 text-slate-400" />
              </div>

              <p className="mt-5 text-sm font-medium text-slate-500">
                {stat.label}
              </p>

              <p className="mt-1 text-3xl font-bold tracking-tight text-slate-950">
                {stat.value}
              </p>

              <p className="mt-1 text-sm text-slate-500">
                {stat.description}
              </p>
            </div>
          );
        })}
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
            <div>
              <h3 className="font-semibold text-slate-950">
                Recent activity
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Latest changes in the portal
              </p>
            </div>
          </div>

          <div className="divide-y divide-slate-100">
            {activities.map((activity) => (
              <div
                key={activity.title}
                className="flex items-center justify-between gap-4 px-5 py-4"
              >
                <div>
                  <p className="text-sm font-medium text-slate-900">
                    {activity.title}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    {activity.description}
                  </p>
                </div>

                <span className="shrink-0 text-xs text-slate-400">
                  {activity.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="font-semibold text-slate-950">
            Quick actions
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Common administration tasks
          </p>

          <div className="mt-5 grid gap-2">
            <Link
              href="/admin/news/new"
              className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
            >
              + Create news
            </Link>

            <Link
              href="/admin/projects/new"
              className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
            >
              + Add project
            </Link>

            <Link
              href="/admin/media/images"
              className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
            >
              + Upload media
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}