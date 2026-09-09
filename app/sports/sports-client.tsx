
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import {
  ArrowRight,
  Award,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Dumbbell,
  Trophy,
  Users,
  X,
} from "lucide-react";

const sportsImages = [
  {
    image: "/images/projects/img2.png",
    titleKey: "stadium",
  },
  {
    image: "/images/projects/img102.png",
    titleKey: "football",
  },
  {
    image: "/images/projects/img101.png",
    titleKey: "athletes",
  },
  {
    image: "/images/projects/img104.png",
    titleKey: "competition",
  },
  {
    image: "/images/projects/img105.png",
    titleKey: "community",
  },
  {
    image: "/images/projects/img106.png",
    titleKey: "youth",
  },
  {
    image: "/images/projects/img107.png",
    titleKey: "training",
  },
  {
    image: "/images/projects/img108.png",
    titleKey: "sportsFacility",
  },
  {
    image: "/images/projects/img109.png",
    titleKey: "football",
  },
  {
    image: "/images/projects/img110.png",
    titleKey: "community",
  },
  {
    image: "/images/projects/img111.png",
    titleKey: "competition",
  },
  {
    image: "/images/projects/img112.png",
    titleKey: "youth",
  },
];

export default function SportsClient({ dictionary }: { dictionary: any }) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const sports = dictionary.sports;


  const nextImage = () => {
    if (selectedImage === null) return;

    setSelectedImage((selectedImage + 1) % sportsImages.length);
  };

  const previousImage = () => {
    if (selectedImage === null) return;

    setSelectedImage(
      (selectedImage - 1 + sportsImages.length) % sportsImages.length
    );
  };
   return (
     <main className="min-h-screen bg-[#f7f7f5] text-[#231f20]">
       {/* =====================================================
           HERO
       ===================================================== */}
 
       <section className="relative isolate overflow-hidden bg-slate-950">
         <div className="absolute inset-0 -z-10 h-full w-full">
           <Image
             src="/images/projects/img103.png"
             alt={sports.hero.imageAlt}
             fill
             priority
             className="object-cover"
             sizes="100vw"
           />
 
           <div className="absolute inset-0 bg-slate-400/5" />
 
           <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/50 to-slate-950/20" />
 
           <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
         </div>
 
         <div className="relative mx-auto flex min-h-[600px] max-w-7xl items-end px-6 py-20 lg:px-8 lg:py-28">
           <div className="max-w-4xl">
             <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur">
               <Trophy className="size-4 text-[#ed1c24]" />
 
               {sports.hero.badge}
             </div>
 
             <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl">
               {sports.hero.title}
 
               <span className="block text-slate-300">
                 {sports.hero.subtitle}
               </span>
             </h1>
 
             <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
               {sports.hero.description}
             </p>
 
             <div className="mt-8 flex flex-wrap gap-3">
               <a
                 href="#sports-gallery"
                 className="inline-flex items-center gap-2 rounded-lg bg-[#087443] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#07653a]"
               >
                 {sports.hero.viewGallery}
 
                 <ArrowRight className="size-4" />
               </a>
 
               <a
                 href="#development"
                 className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
               >
                 {sports.hero.learnMore}
               </a>
             </div>
           </div>
         </div>
       </section>
 
       {/* =====================================================
           INTRODUCTION
       ===================================================== */}
 
       <section className="border-b border-black/5 bg-white">
         <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
           <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
             <div>
               <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#087443]">
                 {sports.introduction.eyebrow}
               </p>
 
               <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                 {sports.introduction.title}
               </h2>
             </div>
 
             <div className="space-y-4 text-base leading-7 text-[#231f20]/65">
               {sports.introduction.paragraphs.map((paragraph: string) => (
                 <p key={paragraph}>{paragraph}</p>
               ))}
             </div>
           </div>
         </div>
       </section>
 
       {/* =====================================================
           SPORTS AREAS
       ===================================================== */}
 
       <section className="bg-[#f7f7f5]">
         <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
           <div className="max-w-3xl">
             <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#ed1c24]">
               {sports.areas.eyebrow}
             </p>
 
             <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
               {sports.areas.title}
             </h2>
 
             <p className="mt-4 leading-7 text-[#231f20]/60">
               {sports.areas.description}
             </p>
           </div>
 
           <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
             {sports.areas.items.map(
               (
                 item: {
                   title: string;
                   description: string;
                 },
                 index: number
               ) => {
                 const icons = [Dumbbell, Trophy, Users, Award];
 
                 const Icon = icons[index % icons.length];
 
                 return (
                   <article
                     key={item.title}
                     className="group rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                   >
                     <div className="flex size-12 items-center justify-center rounded-xl bg-[#087443]/10 text-[#087443] transition group-hover:bg-[#087443] group-hover:text-white">
                       <Icon className="size-6" />
                     </div>
 
                     <h3 className="mt-5 font-semibold">{item.title}</h3>
 
                     <p className="mt-2 text-sm leading-6 text-[#231f20]/60">
                       {item.description}
                     </p>
                   </article>
                 );
               }
             )}
           </div>
         </div>
       </section>
 
       {/* =====================================================
           SPORTS FACILITIES
       ===================================================== */}
 
       <section id="development" className="border-y border-black/5 bg-white">
         <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
           <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
             <div>
               <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#087443]">
                 {sports.facilities.eyebrow}
               </p>
 
               <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                 {sports.facilities.title}
               </h2>
 
               <p className="mt-5 leading-7 text-[#231f20]/60">
                 {sports.facilities.description}
               </p>
 
               <div className="mt-7 space-y-3">
                 {sports.facilities.items.map((item: string) => (
                   <div key={item} className="flex items-center gap-3">
                     <CheckCircle2 className="size-5 shrink-0 text-[#087443]" />
 
                     <span className="text-sm font-medium text-[#231f20]/75">
                       {item}
                     </span>
                   </div>
                 ))}
               </div>
             </div>
 
             <div className="relative overflow-hidden rounded-3xl bg-slate-200">
               <button
                 type="button"
                 onClick={() => setSelectedImage(0)}
                 className="group relative block aspect-[4/3] w-full cursor-zoom-in"
                 aria-label={sports.gallery.clickView}
               >
                 <Image
                   src={sportsImages[0].image}
                   alt={sportsImages[0].titleKey}
                   fill
                   className="object-cover transition duration-500 group-hover:scale-105"
                   sizes="(min-width: 1024px) 50vw, 100vw"
                 />
 
                 <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />
 
                 <div className="absolute bottom-5 left-5 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-slate-900 shadow-lg">
                   {sports.gallery.clickView}
                 </div>
               </button>
             </div>
           </div>
         </div>
       </section>
 
       {/* =====================================================
           SPORTS GALLERY
       ===================================================== */}
 
       <section id="sports-gallery" className="bg-[#f7f7f5]">
         <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
           <div className="max-w-3xl">
             <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#087443]">
               {sports.gallery.eyebrow}
             </p>
 
             <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
               {sports.gallery.title}
             </h2>
 
             <p className="mt-4 leading-7 text-[#231f20]/60">
               {sports.gallery.description}
             </p>
           </div>
 
           {/* -------------------------------------------------
               IMAGE GRID
           ------------------------------------------------- */}
 
           <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
             {sportsImages.map((item, index) => (
               <button
                 key={`${item.image}-${index}`}
                 type="button"
                 onClick={() => setSelectedImage(index)}
                 className={`group relative overflow-hidden rounded-2xl bg-slate-200 text-left ${
                   index === 0
                     ? "col-span-2 row-span-2 aspect-square"
                     : "aspect-square"
                 }`}
                 aria-label={`${sports.gallery.clickView}: ${index + 1}`}
               >
                 <Image
                   src={item.image}
                   alt={`${sports.gallery.imageAlt} ${index + 1}`}
                   fill
                   sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                   className="object-cover transition duration-500 group-hover:scale-110"
                 />
 
                 {/* Hover overlay */}
 
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
 
                 <div className="absolute inset-x-0 bottom-0 translate-y-3 p-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                   <span className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-900">
                     {sports.gallery.clickView}
                   </span>
                 </div>
               </button>
             ))}
           </div>
         </div>
       </section>
 
       {/* =====================================================
           COMMUNITY & YOUTH
       ===================================================== */}
 
       <section className="border-y border-black/5 bg-white">
         <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
           <div className="grid gap-10 lg:grid-cols-2">
             <div>
               <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#ed1c24]">
                 {sports.community.eyebrow}
               </p>
 
               <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                 {sports.community.title}
               </h2>
 
               <p className="mt-5 leading-7 text-[#231f20]/60">
                 {sports.community.description}
               </p>
             </div>
 
             <div className="rounded-2xl border border-black/5 bg-[#f7f7f5] p-7">
               <div className="flex items-start gap-4">
                 <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#087443]/10 text-[#087443]">
                   <Users className="size-6" />
                 </div>
 
                 <div>
                   <h3 className="font-semibold">
                     {sports.community.cardTitle}
                   </h3>
 
                   <p className="mt-2 text-sm leading-6 text-[#231f20]/60">
                     {sports.community.cardDescription}
                   </p>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>
 
       {/* =====================================================
           CTA
       ===================================================== */}
 
       <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
         <div className="relative overflow-hidden rounded-3xl bg-[#087443] px-6 py-14 text-center sm:px-12">
           <div className="absolute -right-20 -top-20 size-64 rounded-full bg-white/10" />
 
           <div className="absolute -bottom-24 -left-20 size-72 rounded-full bg-black/10" />
 
           <div className="relative">
             <Trophy className="mx-auto size-10 text-white/90" />
 
             <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
               {sports.cta.title}
             </h2>
 
             <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
               {sports.cta.description}
             </p>
 
             <a
               href="/contact"
               className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#087443] transition hover:bg-white/90"
             >
               {sports.cta.button}
 
               <ArrowRight className="size-4" />
             </a>
           </div>
         </div>
       </section>
 
       {/* =====================================================
           FULL SCREEN IMAGE VIEWER
       ===================================================== */}
 
       {selectedImage !== null && (
         <div
           className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4"
           role="dialog"
           aria-modal="true"
           aria-label={sports.gallery.viewerTitle}
           onClick={() => setSelectedImage(null)}
         >
           {/* CLOSE */}
 
           <button
             type="button"
             onClick={(event) => {
               event.stopPropagation();
               setSelectedImage(null);
             }}
             className="absolute right-4 top-4 z-20 flex size-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
             aria-label={sports.gallery.close}
           >
             <X className="size-6" />
           </button>
 
           {/* PREVIOUS */}
 
           <button
             type="button"
             onClick={(event) => {
               event.stopPropagation();
               previousImage();
             }}
             className="absolute left-3 top-1/2 z-20 flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20 sm:left-6"
             aria-label={sports.gallery.previous}
           >
             <ChevronLeft className="size-7" />
           </button>
 
           {/* NEXT */}
 
           <button
             type="button"
             onClick={(event) => {
               event.stopPropagation();
               nextImage();
             }}
             className="absolute right-3 top-1/2 z-20 flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20 sm:right-6"
             aria-label={sports.gallery.next}
           >
             <ChevronRight className="size-7" />
           </button>
 
           {/* IMAGE */}
 
           <div
             className="relative flex h-[85vh] w-full max-w-7xl items-center justify-center"
             onClick={(event) => event.stopPropagation()}
           >
             <Image
               src={sportsImages[selectedImage].image}
               alt={`${sports.gallery.imageAlt} ${selectedImage + 1}`}
               fill
               sizes="100vw"
               className="object-contain"
               priority
             />
           </div>
 
           {/* IMAGE COUNTER */}
 
           <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur">
             {selectedImage + 1} / {sportsImages.length}
           </div>
         </div>
       )}
     </main>
   );
}