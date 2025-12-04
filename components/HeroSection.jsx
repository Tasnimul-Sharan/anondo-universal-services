// import React from "react";
// import Link from "next/link";

// const HeroSection = ({ hero }) => {
//   return (
//     <section className="relative w-full h-[50rem] overflow-hidden flex items-center justify-center">
//       <div
//         className="absolute inset-0 transition bg-cover bg-center bg-no-repeat transform duration-1000 ease-out"
//         style={{
//           backgroundImage: "url('/hero-bg.jpg')",
//         }}
//       >
//         <div className="absolute inset-0 bg-black/50"></div>
//       </div>
//       <div className="relative z-10 text-center custom-container mx-auto md:mt-40">
//         <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
//           {hero.title}
//         </h1>
//         <div className="text-sm text-white flex items-center justify-center gap-1">
//           <Link
//             href="/"
//             className="text-  hover:text-primary text-lg transition-all transform duration-500"
//           >
//             Home
//           </Link>
//           |<span className="text- text-lg">{hero.title}</span>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

"use client";
import React from "react";
import Link from "next/link";

const HeroSection = ({ hero }) => {
  const {
    title,
    background,
    breadcrumb = [{ label: "Home", href: "/" }, { label: title }],
  } = hero;

  return (
    <section className="relative w-full h-[50rem] overflow-hidden flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition duration-1000 ease-out"
        style={{
          backgroundImage: `url('${background}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center custom-container mx-auto md:mt-40">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
          {title}
        </h1>
        {/* Breadcrumb */}
        <div className="text-sm text-white flex items-center justify-center gap-2">
          {breadcrumb.map((item, index) => (
            <span key={index} className="flex items-center gap-2">
              {item.href ? (
                <Link
                  href={item.href}
                  className="hover:text-primary text-lg transition duration-300"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-lg">{item.label}</span>
              )}

              {index < breadcrumb.length - 1 && <span>|</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
