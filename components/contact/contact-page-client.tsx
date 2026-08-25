

"use client";

import dynamic from "next/dynamic";
import { FormEvent, useState } from "react";
import { toast } from "sonner";
import {
  Clock3,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

const SulultaMap = dynamic(
  () => import("@/components/contact/sululta-map"),
  {
    ssr: false,
    loading: () => (
      <div className="flex min-h-[360px] items-center justify-center rounded-3xl border border-slate-200 bg-slate-100">
        <div className="text-center">
          <MapPin className="mx-auto size-10 text-slate-400" />

          <p className="mt-4 font-semibold text-slate-700">
            Loading map...
          </p>
        </div>
      </div>
    ),
  }
);

type ContactDictionary = {
  contactUs: {
    hero: {
      eyebrow: string;
      title: string;
      description: string;
    };

    details: {
      office: {
        title: string;
        value: string;
        description: string;
      };

      phone: {
        title: string;
        value: string;
        description: string;
      };

      email: {
        title: string;
        value: string;
        description: string;
      };

      hours: {
        title: string;
        value: string;
        description: string;
      };
    };

    form: {
      name: string;
      namePlaceholder: string;

      email: string;
      emailPlaceholder: string;

      phone: string;
      phonePlaceholder: string;

      subject: string;
      subjectPlaceholder: string;

      message: string;
      messagePlaceholder: string;

      send: string;
      sending: string;

      successTitle: string;
      successDescription: string;

      errorTitle: string;
      errorDescription: string;

      getInTouch: string;
      sendMessage: string;
      sendMessageDescription: string;

      urgentTitle: string;
      urgentDescription: string;

      privacyNotice: string;
    };

    location: {
      title: string;
      address: string;
      city: string;
      officeHours: string;
      weekdays: string;
      time: string;
    };
  };
};

type ContactPageClientProps = {
  t: ContactDictionary;
};

export default function ContactPageClient({
  t,
}: ContactPageClientProps) {
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (submitting) {
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    setSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || t.contactUs.form.errorDescription
        );
      }

      toast.success(t.contactUs.form.successTitle, {
        description:
          t.contactUs.form.successDescription,
      });

      form.reset();
    } catch (error) {
      console.error(error);

      toast.error(t.contactUs.form.errorTitle, {
        description:
          error instanceof Error
            ? error.message
            : t.contactUs.form.errorDescription,
      });
    } finally {
      setSubmitting(false);
    }
  }

  const contactDetails = [
    {
      icon: MapPin,
      ...t.contactUs.details.office,
    },
    {
      icon: Phone,
      ...t.contactUs.details.phone,
    },
    {
      icon: Mail,
      ...t.contactUs.details.email,
    },
    {
      icon: Clock3,
      ...t.contactUs.details.hours,
    },
  ];

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/images/contact-hero.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/75">
              {t.contactUs.hero.eyebrow}
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t.contactUs.hero.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
              {t.contactUs.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactDetails.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <div className="flex size-11 items-center justify-center rounded-xl bg-slate-950 text-white">
                    <Icon className="size-5" />
                  </div>

                  <h2 className="mt-5 text-sm font-semibold text-slate-500">
                    {item.title}
                  </h2>

                  <p className="mt-2 font-semibold text-slate-950">
                    {item.value}
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          {/* INFORMATION */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              {t.contactUs.form.getInTouch}
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              {t.contactUs.form.sendMessage}
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              {t.contactUs.form.sendMessageDescription}
            </p>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <h3 className="font-semibold text-amber-950">
                {t.contactUs.form.urgentTitle}
              </h3>

              <p className="mt-2 text-sm leading-6 text-amber-900/80">
                {t.contactUs.form.urgentDescription}
              </p>
            </div>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              {/* NAME */}
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-slate-900"
                >
                  {t.contactUs.form.name}
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder={
                    t.contactUs.form.namePlaceholder
                  }
                  className="mt-2 h-11 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-950 focus:ring-2 focus:ring-slate-950/10"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-slate-900"
                >
                  {t.contactUs.form.email}
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder={
                    t.contactUs.form.emailPlaceholder
                  }
                  className="mt-2 h-11 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-950 focus:ring-2 focus:ring-slate-950/10"
                />
              </div>

              {/* PHONE */}
              <div>
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-slate-900"
                >
                  {t.contactUs.form.phone}
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder={
                    t.contactUs.form.phonePlaceholder
                  }
                  className="mt-2 h-11 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-950 focus:ring-2 focus:ring-slate-950/10"
                />
              </div>

              {/* SUBJECT */}
              <div>
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-slate-900"
                >
                  {t.contactUs.form.subject}
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder={
                    t.contactUs.form.subjectPlaceholder
                  }
                  className="mt-2 h-11 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-950 focus:ring-2 focus:ring-slate-950/10"
                />
              </div>
            </div>

            {/* MESSAGE */}
            <div className="mt-6">
              <label
                htmlFor="message"
                className="text-sm font-medium text-slate-900"
              >
                {t.contactUs.form.message}
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows={7}
                placeholder={
                  t.contactUs.form.messagePlaceholder
                }
                className="mt-2 w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-950 focus:ring-2 focus:ring-slate-950/10"
              />
            </div>

            {/* SUBMIT */}
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs leading-5 text-slate-500">
                {t.contactUs.form.privacyNotice}
              </p>

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? (
                  <>
                    <span className="size-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    {t.contactUs.form.sending}
                  </>
                ) : (
                  <>
                    {t.contactUs.form.send}
                    <Send className="size-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* LOCATION */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-stretch">
            <div className="rounded-3xl bg-slate-950 p-8 text-white sm:p-10">
              <MapPin className="size-7 text-slate-300" />

              <h2 className="mt-7 text-2xl font-bold">
                {t.contactUs.location.title}
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                {t.contactUs.location.address}
                <br />
                {t.contactUs.location.city}
              </p>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-sm font-semibold text-white">
                  {t.contactUs.location.officeHours}
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {t.contactUs.location.weekdays}
                  <br />
                  {t.contactUs.location.time}
                </p>
              </div>
            </div>

            <SulultaMap />
          </div>
        </div>
      </section>
    </main>
  );
}