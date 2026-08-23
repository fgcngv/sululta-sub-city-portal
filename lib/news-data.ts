

export type NewsItem = {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    image: string;
    href: string;
    placeholder?: boolean;
  };
  
  export const newsItems: NewsItem[] = [
  {
      id: "news-06",
      title: "Daandiwwan Zoonii Baadiyyaa ",
      excerpt:
        "Daandiwwan Zoonii Baadiyyaa keessatti Baajeta Mootummaa fi Hirmaannaa Uummataan Hojjetamaniiru",
      date: "2026-08-15",
      category: "Development",
      image: "/images/projects/img43.png",
      href: "/news/placeholder-development-update",
      placeholder: true,
    },
    {
      id: "news-02",
      title: "Ijaarsa Buufata fayyaa ",
      excerpt:
        "Kutaa magaalaa sulultaa, Buufata fayyaa sulultaatti Guyyaa jalqabsiisa ijaarsa bilookii dabalataa buufata fayyaa aanaa abbaa gadaa",
      date: "2026-08-10",
      category: "Community",
      image: "/images/projects/img39.png",
      href: "/news/placeholder-community-activity",
      placeholder: true,
    },
    {
      id: "news-03",
      title: "Eebba Mandaroota Moodeelaa",
      excerpt:
        "",
      date: "2026-08-05",
      category: "Announcement",
      image: "/images/projects/img40.png",
      href: "/news/placeholder-administration-announcement",
      placeholder: true,
    }, {
      id: "news-04",
      title: " Mandara Moodeelaa kutaa Magaalaa sulultaa",
      excerpt:
        "",
      date: "2026-08-05",
      category: "Announcement",
      image: "/images/projects/img41.png",
      href: "/news/placeholder-administration-announcement",
      placeholder: true,
    },
  ];