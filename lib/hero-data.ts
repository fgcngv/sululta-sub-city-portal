
export type HeroSlide = {
    id: string;
    image: string;
    eyebrow: string;
    title: string;
    description: string;
    cta?: {
      label: string;
      href: string;
    };
  };
  
  export const heroSlides: HeroSlide[] = [
    {
      id: "welcome",
      image: "/images/hero/sululta-placeholder-1.jpg",
      eyebrow: "SULULTA SUB-CITY",
      title: "Welcome to Sululta",
      description:
        "Official information, services, news and development activities.",
      cta: {
        label: "Explore Services",
        href: "/services",
      },
    },
    {
      id: "infrastructure",
      image: "/images/hero/sululta-placeholder-2.jpg",
      eyebrow: "DEVELOPMENT",
      title: "Building a Better Sululta",
      description:
        "Placeholder content for infrastructure and development activities.",
    },
    {
      id: "community",
      image: "/images/hero/sululta-placeholder-1.jpg",
      eyebrow: "COMMUNITY",
      title: "Working Together",
      description:
        "Placeholder content for community-focused activities and initiatives.",
    },
    {
      id: "innovation",
      image: "/images/hero/sululta-placeholder-1.jpg",
      eyebrow: "INNOVATION",
      title: "Science & Technology",
      description:
        "Placeholder content for science, technology and innovation activities.",
    },
  ];