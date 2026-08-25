import { getCurrentDictionary } from "@/lib/i18n/index";
import ContactPageClient from "@/components/contact/contact-page-client";

export default async function ContactPage() {
  const t = await getCurrentDictionary();

  return <ContactPageClient t={t} />;
} 