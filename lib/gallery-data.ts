

export type GalleryItem = {
    id: string;
    title: string;
    image: string;
    category: string;
    href: string;
    placeholder?: boolean;
  };
  
  export const galleryItems: GalleryItem[] = [
    {
      id: "gallery-01",
      title: "Sululta Development",
      image: "/images/gallery/gallery-placeholder-1.jpg",
      category: "Development",
      href: "/gallery",
      placeholder: true,
    },
    {
      id: "gallery-02",
      title: "Community Activities",
      image: "/images/gallery/gallery-placeholder-2.jpg",
      category: "Community",
      href: "/gallery",
      placeholder: true,
    },
    {
      id: "gallery-03",
      title: "Education",
      image: "/images/gallery/gallery-placeholder-3.jpg",
      category: "Education",
      href: "/gallery",
      placeholder: true,
    },
    {
      id: "gallery-04",
      title: "Infrastructure",
      image: "/images/gallery/gallery-placeholder-4.jpg",
      category: "Infrastructure",
      href: "/gallery",
      placeholder: true,
    },
    {
      id: "gallery-05",
      title: "Health Services",
      image: "/images/gallery/gallery-placeholder-5.jpg",
      category: "Health",
      href: "/gallery",
      placeholder: true,
    },
  ];