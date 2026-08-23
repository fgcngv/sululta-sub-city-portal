
import {
    BriefcaseBusiness,
    Contact,
    Images,
    Newspaper,
  } from "lucide-react";
  
  export const quickAccessItems = [
    {
      title: "Services",
      description: "Explore public services and useful information.",
      href: "/services",
      icon: BriefcaseBusiness,
    },
    {
      title: "News",
      description: "Stay informed about the latest activities and announcements.",
      href: "/news",
      icon: Newspaper,
    },
    {
      title: "Gallery",
      description: "Explore photos and visual stories from Sululta.",
      href: "/gallery",
      icon: Images,
    },
    {
      title: "Contact",
      description: "Find contact information and ways to reach the administration.",
      href: "/contact",
      icon: Contact,
    },
  ] as const;