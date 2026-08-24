// import Link from "next/link";
// import { Mail, MapPin, Phone } from "lucide-react";

// import { footerData } from "@/lib/footer-data";
// import Image from "next/image";

// export function SiteFooter() {
//   return (
//     <footer className="bg-slate-950 text-white">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         {/* Main footer */}
//         <div className="grid gap-12 py-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:py-16">
//           {/* Brand */}
//           <div className="max-w-sm">
//             <Link
//               href="/"
//               className="inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
//             >
//               <Image
//                 src="/images/shaggar-logo.png"
//                 alt="Sululta Sub-City Administration"
//                 width={180}
//                 height={60}
//                 className="h-12 rounded-lg w-auto object-contain"
//               />
//             </Link>

//             <p className="mt-5 text-sm leading-6 text-white/60">
//               {footerData.description}
//             </p>
//           </div>

//           {/* Navigation */}
//           {footerData.navigation.map((group) => (
//             <div key={group.title}>
//               <h2 className="text-sm font-semibold">{group.title}</h2>

//               <ul className="mt-5 space-y-3">
//                 {group.links.map((link) => (
//                   <li key={link.href}>
//                     <Link
//                       href={link.href}
//                       className="text-sm text-white/60 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
//                     >
//                       {link.label}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}

//           {/* Contact */}
//           <div>
//             <h2 className="text-sm font-semibold">Contact</h2>

//             <div className="mt-5 space-y-4">
//               <a
//                 href={`tel:${footerData.contact.phone}`}
//                 className="flex gap-3 text-sm text-white/60 transition-colors hover:text-white"
//               >
//                 <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />

//                 <span>{footerData.contact.phone}</span>
//               </a>

//               <a
//                 href={`mailto:${footerData.contact.email}`}
//                 className="flex gap-3 text-sm text-white/60 transition-colors hover:text-white"
//               >
//                 <Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" />

//                 <span className="break-all">{footerData.contact.email}</span>
//               </a>

//               <div className="flex gap-3 text-sm text-white/60">
//                 <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />

//                 <span>{footerData.contact.address}</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom */}
//         <div className="flex flex-col gap-5 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
//           <p className="text-xs text-white/50">
//             © {new Date().getFullYear()} {footerData.copyright}
//           </p>

//           <div className="flex items-center gap-5">
//             {footerData.socialLinks.map((social) => (
//               <a
//                 key={social.label}
//                 href={social.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-xs font-medium text-white/60 transition-colors hover:text-white"
//               >
//                 {social.label}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

import Link from "next/link";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { footerData } from "@/lib/footer-data";
import Image from "next/image";

function SocialIcon({ label }: { label: string }) {
  switch (label.toLowerCase()) {
    case "facebook":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-5"
          aria-hidden="true"
        >
          <path d="M13.5 21v-8h2.75l.41-3h-3.16V8.08c0-.87.24-1.46 1.5-1.46h1.8V3.94c-.31-.04-1.38-.14-2.62-.14-2.59 0-4.36 1.58-4.36 4.49V10H7v3h2.82v8h3.68Z" />
        </svg>
      );

    case "instagram":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="size-5"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      );

    case "telegram":
      return <Send className="size-5" aria-hidden="true" />;

    case "tiktok":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-5"
          aria-hidden="true"
        >
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.24V2h-3.45v13.67a2.9 2.9 0 1 1-2-2.74V9.4a6.4 6.4 0 1 0 5.45 6.33V8.18a8.16 8.16 0 0 0 4.77 1.52V6.69h-1Z" />
        </svg>
      );

    default:
      return null;
  }
}

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
                className="h-12 w-auto rounded-lg object-contain"
              />
            </Link>

            <p className="mt-5 text-sm leading-6 text-white/60">
              {footerData.description}
            </p>

            {/* Social Media */}
            <div className="mt-6">
              <h2 className="text-sm font-semibold">Follow Us</h2>

              <div className="mt-4 flex items-center gap-3">
                {footerData.socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-all duration-200 hover:border-white/20 hover:bg-white/10 hover:text-white"
                  >
                    <SocialIcon label={social.label} />
                  </a>
                ))}
              </div>
            </div>
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
