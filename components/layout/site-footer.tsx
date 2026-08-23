import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { footerData } from "@/lib/footer-data";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="grid gap-12 py-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:py-16">
          {/* Brand */}
          <div className="max-w-sm">
            <Link
              href="/"
              className="inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              <Image
                src="/images/shaggar-logo.png"
                alt="Sululta Sub-City Administration"
                width={180}
                height={60}
                className="h-12 rounded-lg w-auto object-contain"
              />
            </Link>

            <p className="mt-5 text-sm leading-6 text-white/60">
              {footerData.description}
            </p>
          </div>

          {/* Navigation */}
          {footerData.navigation.map((group) => (
            <div key={group.title}>
              <h2 className="text-sm font-semibold">{group.title}</h2>

              <ul className="mt-5 space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h2 className="text-sm font-semibold">Contact</h2>

            <div className="mt-5 space-y-4">
              <a
                href={`tel:${footerData.contact.phone}`}
                className="flex gap-3 text-sm text-white/60 transition-colors hover:text-white"
              >
                <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />

                <span>{footerData.contact.phone}</span>
              </a>

              <a
                href={`mailto:${footerData.contact.email}`}
                className="flex gap-3 text-sm text-white/60 transition-colors hover:text-white"
              >
                <Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" />

                <span className="break-all">{footerData.contact.email}</span>
              </a>

              <div className="flex gap-3 text-sm text-white/60">
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />

                <span>{footerData.contact.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-5 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} {footerData.copyright}
          </p>

          <div className="flex items-center gap-5">
            {footerData.socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-white/60 transition-colors hover:text-white"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
