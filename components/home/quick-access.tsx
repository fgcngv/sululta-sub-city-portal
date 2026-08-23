

// import Link from "next/link";
// import { ArrowUpRight } from "lucide-react";

// import { quickAccessItems } from "@/lib/quick-access";

// export function QuickAccess() {
//   return (
//     <section
//       aria-labelledby="quick-access-heading"
//       className="border-b bg-white"
//     >
//       <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
//         {/* Section heading */}
//         <div className="mb-8 max-w-2xl">
//           <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
//             Quick access
//           </p>

//           <h2
//             id="quick-access-heading"
//             className="mt-2 text-2xl font-bold tracking-tight text-red-700 sm:text-3xl"
//           >
//             What are you looking for?
//           </h2>
//         </div>

//         {/* Cards */}
//         <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//           {quickAccessItems.map((item) => {
//             const Icon = item.icon;

//             return (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className="group rounded-2xl border bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2"
//               >
//                 <div className="flex items-start justify-between gap-4">
//                   <div className="flex size-11 items-center justify-center rounded-xl bg-slate-100 text-slate-800 transition-colors group-hover:bg-slate-900 group-hover:text-white">
//                     <Icon className="size-5" />
//                   </div>

//                   <ArrowUpRight
//                     className="size-5 text-slate-400 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 
//                    group-hover:text-slate-900"
//                     aria-hidden="true"
//                   />

//                 </div>

//                 <h3 className="mt-6 text-lg font-semibold text-red-700">
//                   {item.title}
//                 </h3>

//                 <p className="mt-2 text-sm leading-6 text-slate-600">
//                   {item.description}
//                 </p>

//                 <span className="mt-5 inline-block text-sm font-semibold text-red-700">
//                   Explore
//                   <span className="sr-only"> {item.title}</span>
//                 </span>
//               </Link>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }








// // import Link from "next/link";
// // import { ArrowUpRight } from "lucide-react";
// // import { quickAccessItems } from "@/lib/quick-access";

// // export function QuickAccess() {
// //   return (
// //     <section
// //       aria-labelledby="quick-access-heading"
// //       className="relative overflow-hidden border-b border-slate-200 bg-slate-50"
// //     >
// //       {/* Decorative background */}
// //       <div
// //         aria-hidden="true"
// //         className="
// //           pointer-events-none
// //           absolute
// //           -left-32
// //           top-20
// //           size-72
// //           rounded-full
// //           bg-slate-200/50
// //           blur-3xl
// //         "
// //       />

// //       <div
// //         aria-hidden="true"
// //         className="
// //           pointer-events-none
// //           absolute
// //           -right-32
// //           bottom-0
// //           size-80
// //           rounded-full
// //           bg-slate-200/40
// //           blur-3xl
// //         "
// //       />

// //       <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
// //         {/* =========================================================
// //             SECTION HEADER
// //         ========================================================= */}
// //         <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
// //           <div className="max-w-2xl">
// //             <div className="mb-4 flex items-center gap-3">
// //               <span className="h-px w-8 bg-slate-900" />

// //               <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
// //                 Quick access
// //               </p>
// //             </div>

// //             <h2
// //               id="quick-access-heading"
// //               className="
// //                 text-3xl
// //                 font-semibold
// //                 tracking-[-0.035em]
// //                 text-slate-950
// //                 sm:text-4xl
// //               "
// //             >
// //               What are you looking for?
// //             </h2>

// //             <p className="mt-3 max-w-xl text-base leading-7 text-slate-600">
// //               Find the places, services, and information you need to explore
// //               Sululta.
// //             </p>
// //           </div>

// //           {/* Small visual label */}
// //           <div
// //             className="
// //               hidden
// //               items-center
// //               gap-2
// //               rounded-full
// //               border
// //               border-slate-200
// //               bg-white/80
// //               px-4
// //               py-2
// //               text-xs
// //               font-medium
// //               text-slate-500
// //               shadow-sm
// //               backdrop-blur
// //               md:flex
// //             "
// //           >
// //             <span className="size-1.5 rounded-full bg-slate-900" />
// //             Explore Sululta
// //           </div>
// //         </div>

// //         {/* =========================================================
// //             CARDS
// //         ========================================================= */}
// //         <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
// //           {quickAccessItems.map((item) => {
// //             const Icon = item.icon;

// //             return (
// //               <Link
// //                 key={item.href}
// //                 href={item.href}
// //                 className="
// //                   group
// //                   relative
// //                   overflow-hidden
// //                   rounded-3xl
// //                   border
// //                   border-slate-200
// //                   bg-white
// //                   p-6
// //                   shadow-[0_2px_10px_rgba(15,23,42,0.03)]
// //                   transition-all
// //                   duration-300
// //                   hover:-translate-y-1.5
// //                   hover:border-slate-300
// //                   hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)]
// //                   focus-visible:outline-none
// //                   focus-visible:ring-2
// //                   focus-visible:ring-slate-950
// //                   focus-visible:ring-offset-2
// //                 "
// //               >
// //                 {/* Hover gradient */}
// //                 <div
// //                   aria-hidden="true"
// //                   className="
// //                     pointer-events-none
// //                     absolute
// //                     -right-16
// //                     -top-16
// //                     size-32
// //                     rounded-full
// //                     bg-slate-100
// //                     opacity-0
// //                     blur-2xl
// //                     transition-opacity
// //                     duration-500
// //                     group-hover:opacity-100
// //                   "
// //                 />

// //                 {/* Top row */}
// //                 <div className="relative flex items-start justify-between gap-4">
// //                   {/* Icon */}
// //                   <div
// //                     className="
// //                       flex
// //                       size-12
// //                       items-center
// //                       justify-center
// //                       rounded-2xl
// //                       bg-slate-100
// //                       text-slate-800
// //                       ring-1
// //                       ring-slate-200/80
// //                       transition-all
// //                       duration-300
// //                       group-hover:scale-105
// //                       group-hover:bg-slate-950
// //                       group-hover:text-white
// //                       group-hover:ring-slate-950
// //                     "
// //                   >
// //                     <Icon
// //                       className="size-5 transition-transform duration-300 group-hover:scale-110"
// //                       aria-hidden="true"
// //                     />
// //                   </div>

// //                   {/* Arrow */}
// //                   <div
// //                     className="
// //                       flex
// //                       size-9
// //                       items-center
// //                       justify-center
// //                       rounded-full
// //                       border
// //                       border-slate-200
// //                       bg-white
// //                       text-slate-400
// //                       transition-all
// //                       duration-300
// //                       group-hover:border-slate-900
// //                       group-hover:bg-slate-950
// //                       group-hover:text-white
// //                     "
// //                   >
// //                     <ArrowUpRight
// //                       className="
// //                         size-4
// //                         transition-transform
// //                         duration-300
// //                         group-hover:-translate-y-0.5
// //                         group-hover:translate-x-0.5
// //                       "
// //                       aria-hidden="true"
// //                     />
// //                   </div>
// //                 </div>

// //                 {/* Content */}
// //                 <div className="relative mt-7">
// //                   <h3
// //                     className="
// //                       text-lg
// //                       font-semibold
// //                       tracking-tight
// //                       text-slate-950
// //                       transition-colors
// //                       duration-200
// //                     "
// //                   >
// //                     {item.title}
// //                   </h3>

// //                   <p className="mt-2 text-sm leading-6 text-slate-600">
// //                     {item.description}
// //                   </p>
// //                 </div>

// //                 {/* Bottom link */}
// //                 <div className="relative mt-6 flex items-center gap-2">
// //                   <span className="text-sm font-semibold text-slate-900">
// //                     Explore
// //                   </span>

// //                   <span
// //                     className="
// //                       h-px
// //                       w-5
// //                       bg-slate-300
// //                       transition-all
// //                       duration-300
// //                       group-hover:w-8
// //                       group-hover:bg-slate-900
// //                     "
// //                   />

// //                   <span className="sr-only"> {item.title}</span>
// //                 </div>

// //                 {/* Bottom hover line */}
// //                 <div
// //                   aria-hidden="true"
// //                   className="
// //                     absolute
// //                     inset-x-6
// //                     bottom-0
// //                     h-0.5
// //                     origin-left
// //                     scale-x-0
// //                     bg-slate-950
// //                     transition-transform
// //                     duration-300
// //                     group-hover:scale-x-100
// //                   "
// //                 />
// //               </Link>
// //             );
// //           })}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

