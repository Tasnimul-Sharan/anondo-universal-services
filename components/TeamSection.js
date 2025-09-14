// import Image from "next/image";
// import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// const team = [
//   {
//     name: "Md Mozammel Haque",
//     role: "Managing Director",
//     img: "/team/ceo.jpg",
//     socials: {
//       facebook: "https://facebook.com/",
//       linkedin: "https://linkedin.com/",
//       instagram: "https://instagram.com/",
//     },
//   },
//   {
//     name: "Masud Khan",
//     role: "Operations Manager",
//     img: "/team/operations.jpg",
//     socials: {
//       facebook: "https://facebook.com/",
//       linkedin: "https://linkedin.com/",
//       instagram: "https://instagram.com/",
//     },
//   },
//   {
//     name: "Mahmud Hasan",
//     role: "Community & Wellness Coordinator",
//     img: "/team/community.jpg",
//     socials: {
//       facebook: "https://facebook.com/",
//       linkedin: "https://linkedin.com/",
//       instagram: "https://instagram.com/",
//     },
//   },
// ];
// export default function TeamSection() {
//   return (
//     <section className="relative">
//       <div className="bg-primary/50 pt-20 pb-32 relative overflow-hidden">
//         <div className="max-w-[1280px] mx-auto px-4 relative z-0">
//           <div className="text-center mb-12">
//             <p className="uppercase text-white/80 tracking-[0.15em] text-sm">
//               Meet Our Team
//             </p>
//             <h2 className="text-white text-4xl font-bold mt-2">Our Team</h2>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
//             {team.map((member, idx) => (
//               <div
//                 key={idx}
//                 className="group relative rounded-lg overflow-hidden max-w-full text-center bg-primary/20"
//               >
//                 {/* Image */}
//                 <div className="w-full relative">
//                   <Image
//                     src={member.img}
//                     alt={member.name}
//                     width={1200}
//                     height={800}
//                     className="object-cover w-full h-[300px] group-hover:scale-105 transition duration-500"
//                   />
//                   {/* Hover Social Icons */}
//                   <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition duration-500">
//                     <a
//                       href={member.socials.facebook}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="bg-white text-primary p-2 rounded-full hover:bg-primary hover:text-white transition"
//                     >
//                       <FaFacebookF />
//                     </a>
//                     <a
//                       href={member.socials.linkedin}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="bg-white text-primary p-2 rounded-full hover:bg-primary hover:text-white transition"
//                     >
//                       <FaLinkedinIn />
//                     </a>
//                     <a
//                       href={member.socials.instagram}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="bg-white text-primary p-2 rounded-full hover:bg-primary hover:text-white transition"
//                     >
//                       <FaInstagram />
//                     </a>
//                   </div>
//                 </div>

//                 {/* Text */}
//                 <div className="py-4">
//                   <h3 className="text-white text-lg font-semibold">
//                     {member.name}
//                   </h3>
//                   <p className="text-white/70 text-sm">{member.role}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



// import Image from "next/image";

// const team = [
//   {
//     name: "Md Mozammel Haque",
//     role: "Managing Director",
//     img: "/team/ceo.jpg",
//   },
//   {
//     name: "Masud Khan",
//     role: "Operations Manager",
//     img: "/team/operations.jpg",
//   },
//   {
//     name: "Mahmud Hasan",
//     role: "Community & Wellness Coordinator",
//     img: "/team/community.jpg",
//   },
// ];

// export default function TeamSection() {
//   return (
//     <section className="bg-white py-20">
//       <div className="max-w-[1280px] mx-auto px-4">
//         {/* Heading */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//             Our Team
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto mt-4">
//             Thusiastically mesh long-term high-impact infrastructures vis-a-vis
//             efficient customer service. Professionally fashion wireless
//             leadership rather than prospective experiences. Energistically
//             myocardinate c
//           </p>
//         </div>

//         {/* Team Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
//           {team.map((member, idx) => (
//             <div key={idx} className="text-center">
//               {/* Image */}
//               <div className="w-[250px] h-[300px] mx-auto overflow-hidden">
//                 <Image
//                   src={member.img}
//                   alt={member.name}
//                   width={400}
//                   height={500}
//                   className="object-cover w-full h-full"
//                 />
//               </div>

//               {/* Text */}
//               <div className="mt-4">
//                 <h3 className="text-gray-900 font-bold uppercase">
//                   {member.name}
//                 </h3>
//                 <p className="text-gray-600 text-sm">{member.role}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const team = [
  {
    name: "Md Mozammel Haque",
    role: "Managing Director",
    img: "/team/ceo.jpg",
    socials: {
      facebook: "https://facebook.com/",
      linkedin: "https://linkedin.com/",
      instagram: "https://instagram.com/",
    },
  },
  {
    name: "Masud Khan",
    role: "Operations Manager",
    img: "/team/operations.jpg",
    socials: {
      facebook: "https://facebook.com/",
      linkedin: "https://linkedin.com/",
      instagram: "https://instagram.com/",
    },
  },
  {
    name: "Mahmud Hasan",
    role: "Community & Wellness Coordinator",
    img: "/team/community.jpg",
    socials: {
      facebook: "https://facebook.com/",
      linkedin: "https://linkedin.com/",
      instagram: "https://instagram.com/",
    },
  },
];

export default function TeamSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1280px] mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Thusiastically mesh long-term high-impact infrastructures vis-a-vis
            efficient customer service. Professionally fashion wireless
            leadership rather than prospective experiences. Energistically
            myocardinate c
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
          {team.map((member, idx) => (
            <div key={idx} className="text-center group">
              {/* Image Wrapper */}
              <div className="relative w-[250px] h-[300px] mx-auto overflow-hidden rounded-md">
                {/* Image */}
                <Image
                  src={member.img}
                  alt={member.name}
                  width={400}
                  height={500}
                  className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
                />

                {/* Overlay with Social Icons */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition duration-500">
                  <a
                    href={member.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-gray-800 p-2 rounded-full hover:bg-primary hover:text-white transition"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-gray-800 p-2 rounded-full hover:bg-primary hover:text-white transition"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href={member.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-gray-800 p-2 rounded-full hover:bg-primary hover:text-white transition"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>

              {/* Text */}
              <div className="mt-4">
                <h3 className="text-gray-900 font-bold uppercase">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
