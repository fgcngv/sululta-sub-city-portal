import { Hero } from "@/components/hero/hero";

import { AdministrationWelcome } from "@/components/home/administration-welcome";
import { ProjectsPreview } from "@/components/home/services-preview";
import { NewsPreview } from "@/components/home/news-preview";
import { GalleryPreview } from "@/components/home/gallery-preview";
import { VisualStory } from "@/components/home/visual-story";
import { visualStory } from "@/lib/visual-story-data";
import { ContactLocation } from "@/components/home/contact-location";
import { contactInformation } from "@/lib/contact-data";
import { SulultaOverview } from "@/components/home/sululta-overview";
import { cookies } from "next/headers";
import { getCurrentDictionary, getDictionary, Language } from "@/lib/i18n/index";

export default async function Home() {
  const cookieStore = await cookies();

  const language =
    (cookieStore.get("language")?.value as Language) ?? "EN";


    const t = await getCurrentDictionary();

  return (
    <>
      <main>
        <Hero  t={t} />
        <AdministrationWelcome t={t} />
        {/* <QuickAccess /> */}
        <SulultaOverview t={t}/>
        <ProjectsPreview t={t} />
        <NewsPreview t={t}/>
        <GalleryPreview t={t}/>
        <VisualStory  {...visualStory} />
        <ContactLocation
          {...contactInformation}

          eyebrow={t.contact.eyebrow}
          title={t.contact.title}
          description={t.contact.description}

          address={t.contact.address}
          phone={t.contact.phone}
          email={t.contact.email}
          officeHours={t.contact.officeHours}

          mapTitle={t.contact.mapTitle}
          mapHeading={t.contact.mapHeading}
          mapDescription={t.contact.mapDescription}
        />
      </main>
    </>
  );
}