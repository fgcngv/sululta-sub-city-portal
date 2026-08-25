

"use client";

import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { Send } from "lucide-react";

type ContactFormDictionary = {
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

  sending: string;
  send: string;

  successTitle: string;
  successDescription: string;

  errorTitle: string;
  errorDescription: string;

  privacyNotice: string;
};

type ContactFormProps = {
  dictionary: ContactFormDictionary;
};

export default function ContactForm({
  dictionary: t,
}: ContactFormProps) {
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
          data.error || t.errorDescription
        );
      }

      toast.success(t.successTitle, {
        description: t.successDescription,
      });

      form.reset();

    } catch (error) {
      console.error(error);

      toast.error(t.errorTitle, {
        description:
          error instanceof Error
            ? error.message
            : t.errorDescription,
      });

    } finally {
      setSubmitting(false);
    }
  }

  return (
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
            {t.name}
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder={t.namePlaceholder}
            className="mt-2 h-11 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-950 focus:ring-2 focus:ring-slate-950/10"
          />

        </div>


        {/* EMAIL */}
        <div>

          <label
            htmlFor="email"
            className="text-sm font-medium text-slate-900"
          >
            {t.email}
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder={t.emailPlaceholder}
            className="mt-2 h-11 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-950 focus:ring-2 focus:ring-slate-950/10"
          />

        </div>


        {/* PHONE */}
        <div>

          <label
            htmlFor="phone"
            className="text-sm font-medium text-slate-900"
          >
            {t.phone}
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder={t.phonePlaceholder}
            className="mt-2 h-11 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-950 focus:ring-2 focus:ring-slate-950/10"
          />

        </div>


        {/* SUBJECT */}
        <div>

          <label
            htmlFor="subject"
            className="text-sm font-medium text-slate-900"
          >
            {t.subject}
          </label>

          <input
            id="subject"
            name="subject"
            type="text"
            required
            placeholder={t.subjectPlaceholder}
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
          {t.message}
        </label>

        <textarea
          id="message"
          name="message"
          required
          rows={7}
          placeholder={t.messagePlaceholder}
          className="mt-2 w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-950 focus:ring-2 focus:ring-slate-950/10"
        />

      </div>


      {/* SUBMIT */}
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <p className="text-xs leading-5 text-slate-500">
          {t.privacyNotice}
        </p>

        <button
          type="submit"
          disabled={submitting}
          className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
        >

          {submitting ? (
            <>
              <span className="size-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />

              {t.sending}
            </>
          ) : (
            <>
              {t.send}

              <Send className="size-4" />
            </>
          )}

        </button>

      </div>

    </form>
  );
}