import { SiteHeader } from "@/components/layout/site-header";
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

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <AdministrationWelcome />
        {/* <QuickAccess /> */}
        <SulultaOverview />
        <ProjectsPreview />
        <NewsPreview />
        <GalleryPreview />
        <VisualStory  {...visualStory} />
        <ContactLocation {...contactInformation} />
      </main>
    </>
  );
}