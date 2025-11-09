// export default function TrainingVisuals() {
//   const visuals = [
//     { title: "Parade Squad", caption: "A guard squad in parade formation" },
//     { title: "Self-defence", caption: "Practical self-defence training session" },
//     { title: "CCTV Room", caption: "CCTV monitoring control room" },
//     { title: "Trainer", caption: "Trainer instructing recruits on metal detector use" },
//   ];

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-4 gap-6 custom-container mx-auto py-12">
//       {visuals.map((v) => (
//         <figure key={v.title} className="rounded-lg border p-4 bg-white/60">
//           <div className="h-36 rounded-md bg-gradient-to-br from-slate-100 to-white flex items-center justify-center text-sm text-gray-500">
//             Image: {v.title}
//           </div>
//           <figcaption className="text-gray-600 text-sm mt-3">{v.caption}</figcaption>
//         </figure>
//       ))}
//     </div>
//   );
// }

"use client";
import Image from "next/image";

export default function TrainingVisuals() {
  const visuals = [
    {
      title: "Parade Squad",
      caption: "A guard squad in parade formation",
      img: "/training/parade.jpg",
    },
    {
      title: "Self-defence",
      caption: "Practical self-defence training session",
      img: "/training/self-defence.jpg",
    },
    {
      title: "CCTV Room",
      caption: "CCTV monitoring control room",
      img: "/training/cctv.png",
    },
    {
      title: "Trainer",
      caption: "Trainer instructing recruits on metal detector use",
      img: "/training/trainer.jpg",
    },
  ];

  return (
    <div className="custom-container mx-auto py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
      {visuals.map((v) => (
        <figure
          key={v.title}
          className="rounded-lg border p-4 bg-white/60 shadow-sm hover:shadow-md transition-all duration-300"
        >
          <div className="relative w-full h-40 md:h-96 rounded-md overflow-hidden">
            <Image
              src={v.img}
              alt={v.title}
              fill
              className="object-cover hover:scale-110 transition-all transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]"
            />
          </div>
          <figcaption className="text-gray-600 text-sm mt-3 text-center">
            {v.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
