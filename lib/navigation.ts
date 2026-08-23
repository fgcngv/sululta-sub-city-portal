

export const navigationItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Services",
    href: "#",
    dropdown: [
      {
        label: "E-Service",
        href: "https://eservice.shaggarcity.et/",
      },
      {
        label: "E-Trade",
        href: "https://etrade.gov.et/",
      },
      {
        label: "E-Investment",
        href: "https://investment.shaggarcity.et/login",
      },
      {
        label: "E-Conference",
        href: "https://shaggarcity.oo.et/?module=login",
      },
    ],
  },
  {
    label: "News",
    href: "/news",
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "Contact",
    href: "/contact",
  },
] as const;