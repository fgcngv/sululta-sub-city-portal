import fs from "fs";
import path from "path";
import GalleryClient from "./GalleryClient";

export default function GalleryPage() {
  const imagesDirectory = path.join(
    process.cwd(),
    "public/images/projects"
  );

  const files = fs
    .readdirSync(imagesDirectory)
    .filter((file) => /^img\d+\.png$/i.test(file))
    .sort((a, b) => {
      const numberA = parseInt(a.match(/\d+/)?.[0] || "0", 10);
      const numberB = parseInt(b.match(/\d+/)?.[0] || "0", 10);

      return numberA - numberB;
    });

  const images = files.map((file) => ({
    src: `/images/projects/${file}`,
    name: file,
  }));

  return <GalleryClient images={images} />;
}