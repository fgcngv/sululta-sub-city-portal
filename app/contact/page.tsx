"use client";

import { FormEvent, useState } from "react";
import { toast } from "sonner";
import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    title: "Visit our office",
    value: "Sululta Sub-City Administration",
    description: "Sululta, Oromia, Ethiopia",
  },
  {
    icon: Phone,
    title: "Call us",
    value: "+251 11 XXX XXXX",
    description: "Monday – Friday, during office hours",
  },
  {
    icon: Mail,
    title: "Email us",
    value: "info@sululta.gov.et",
    description: "For general inquiries and public information",
  },
  {
    icon: Clock3,
    title: "Office hours",
    value: "Monday – Friday",
    description: "8:30 AM – 5:30 PM",
  },
];

export default function ContactPage() {

const [submitting, setSubmitting] = useState(false);

async function handleSubmit(event: FormEvent<HTMLFormElement>) {
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
        data.error || "Unable to send your message."
      );
    }

    toast.success("Message sent successfully", {
      description:
        "Thank you for contacting Sululta Administration.",
    });

    form.reset();
  } catch (error) {
    console.error(error);

    toast.error("Message could not be sent", {
      description:
        error instanceof Error
          ? error.message
          : "Please try again later.",
    });
  } finally {
    setSubmitting(false);
  }
}


  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Contact Sululta Administration
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              We’re here to help.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Have a question, need information about a public service, or
              want to get in touch with the administration? Reach out to us.
            </p>
          </div>
        </div>
      </section>

      {/* Contact details */}
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

      {/* Main contact area */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Information */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Get in touch
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Send us a message
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Use the form to send an inquiry to the administration. Please
              provide enough information for our team to understand and respond
              to your request.
            </p>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-semibold text-slate-950">
                Looking for a public service?
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                You may find the information you need directly through our
                public services directory.
              </p>

              <Link
                href="/services"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-950"
              >
                Browse services
                <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <h3 className="font-semibold text-amber-950">
                Urgent matters
              </h3>

              <p className="mt-2 text-sm leading-6 text-amber-900/80">
                This contact form is intended for general administrative
                inquiries. For emergencies or matters requiring immediate
                assistance, contact the appropriate emergency authority.
              </p>
            </div>
          </div>

          {/* Form */}
          <form
  onSubmit={handleSubmit}
  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-slate-900"
                >
                  Full name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your full name"
                  className="mt-2 h-11 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-950 focus:ring-2 focus:ring-slate-950/10"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-slate-900"
                >
                  Email address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="mt-2 h-11 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-950 focus:ring-2 focus:ring-slate-950/10"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-slate-900"
                >
                  Phone number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+251 ..."
                  className="mt-2 h-11 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-950 focus:ring-2 focus:ring-slate-950/10"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-slate-900"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="What can we help with?"
                  className="mt-2 h-11 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-950 focus:ring-2 focus:ring-slate-950/10"
                />
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="message"
                className="text-sm font-medium text-slate-900"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows={7}
                placeholder="Write your message..."
                className="mt-2 w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-950 focus:ring-2 focus:ring-slate-950/10"
              />
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs leading-5 text-slate-500">
                Please do not include sensitive personal information unless it
                is necessary for your inquiry.
              </p>

<button
  type="submit"
  disabled={submitting}
  className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
>
  {submitting ? (
    <>
      <span className="size-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
      Sending...
    </>
  ) : (
    <>
      Send message
      <Send className="size-4" />
    </>
  )}
</button>

            </div>
          </form>
        </div>
      </section>

      {/* Location */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-stretch">
            <div className="rounded-3xl bg-slate-950 p-8 text-white sm:p-10">
              <MapPin className="size-7 text-slate-300" />

              <h2 className="mt-7 text-2xl font-bold">
                Visit the administration
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                Sululta Sub-City Administration
                <br />
                Sululta, Oromia, Ethiopia
              </p>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-sm font-semibold text-white">
                  Office hours
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Monday – Friday
                  <br />
                  8:30 AM – 5:30 PM
                </p>
              </div>
            </div>

            <div className="flex min-h-[360px] items-center justify-center overflow-hidden rounded-3xl border border-slate-200 bg-slate-200">
              <div className="text-center">
                <MapPin className="mx-auto size-10 text-slate-500" />

                <p className="mt-4 font-semibold text-slate-700">
                  Sululta Administration
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Interactive map will be added here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
