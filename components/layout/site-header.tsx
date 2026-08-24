// components/layout/site-header.tsx

import { SiteHeaderClient } from "@/components/layout/site-header-client";
import { getLanguage } from "@/lib/i18n/index";

export async function SiteHeader() {
  const language = await getLanguage();

  return (
    <SiteHeaderClient language={language} />
  );
}
