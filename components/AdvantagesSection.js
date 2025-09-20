// "use client";
// import { FaHeadset, FaStar, FaTimesCircle, FaShieldAlt, FaUserTie, FaLock } from "react-icons/fa";

// const advantages = [
//   {
//     id: 1,
//     icon: <FaHeadset className="text-white text-xl" />,
//     title: "24/7 Constant Support",
//     desc: "The Love Boat promises something for the beat every of just one drum.",
//     img: "/security.jpg",
//   },
//   {
//     id: 2,
//     icon: <FaStar className="text-white text-xl" />,
//     title: "Trusted Security",
//     desc: "Your safety is always our top priority with professional guards.",
//     img: "/security.jpg",
//   },
//   {
//     id: 3,
//     icon: <FaTimesCircle className="text-white text-xl" />,
//     title: "Quick Response",
//     desc: "Fast action and instant response to any situation or request.",
//     img: "/security.jpg",
//   },
//   {
//     id: 4,
//     icon: <FaShieldAlt className="text-white text-xl" />,
//     title: "Advanced Protection",
//     desc: "Modern equipment and strategies to ensure top-level security.",
//     img: "/security.jpg",
//   },
//   {
//     id: 5,
//     icon: <FaUserTie className="text-white text-xl" />,
//     title: "Professional Team",
//     desc: "Highly trained staff dedicated to providing the best services.",
//     img: "/security.jpg",
//   },
//   {
//     id: 6,
//     icon: <FaLock className="text-white text-xl" />,
//     title: "Complete Privacy",
//     desc: "We respect and maintain confidentiality in every case.",
//     img: "/security.jpg",
//   },
// ];

// export default function AdvantagesSection() {
//   return (
//     <section className="bg-gray-50 py-20">
//       <div className="max-w-7xl mx-auto text-center px-6 md:px-0">
//         <h2 className="text-secondary text-3xl md:text-4xl font-bold uppercase">
//           Our Advantages
//         </h2>
//         <p className="text-gray-500 mt-2">
//           The Love Boat promises something for everyone now to beat every of just one
//         </p>

//         {/* Grid */}
//         <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {advantages.map((adv) => (
//             <div
//               key={adv.id}
//               className="bg-white rounded-lg overflow-hidden"
//             >
//               <div className="relative">
//                 <img
//                   src={adv.img}
//                   alt={adv.title}
//                   className="w-full h-60 object-cover"
//                 />
//                 <div className="absolute -bottom-6 left-6 bg-primary w-12 h-12 flex items-center justify-center">
//                   {adv.icon}
//                 </div>
//               </div>
//               <div className="p-6 text-left">
//                 <h3 className="font-bold text-lg text-gray-900">
//                   {adv.title}
//                 </h3>
//                 <p className="text-gray-600 mt-2">{adv.desc}</p>
//                 <a
//                   href="#"
//                   className="mt-4 inline-block text-sm font-semibold text-gray-900 hover:text-primary"
//                 >
//                   READ MORE →
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import {
  FaHeadset,
  FaStar,
  FaTimesCircle,
  FaShieldAlt,
  FaUserTie,
  FaLock,
} from "react-icons/fa";
import SectionHeader from "./SectionHeader";
const advantages = [
  {
    id: 1,
    icon: <FaHeadset className="text-white text-xl" />,
    title: "24/7 Constant Support",
    desc: "The Love Boat promises something for the beat every of just one drum.",
    img: "/security.jpg",
  },
  {
    id: 2,
    icon: <FaStar className="text-white text-xl" />,
    title: "Trusted Security",
    desc: "Your safety is always our top priority with professional guards.",
    img: "/security.jpg",
  },
  {
    id: 3,
    icon: <FaTimesCircle className="text-white text-xl" />,
    title: "Quick Response",
    desc: "Fast action and instant response to any situation or request.",
    img: "/security.jpg",
  },
  {
    id: 4,
    icon: <FaShieldAlt className="text-white text-xl" />,
    title: "Advanced Protection",
    desc: "Modern equipment and strategies to ensure top-level security.",
    img: "/security.jpg",
  },
  {
    id: 5,
    icon: <FaUserTie className="text-white text-xl" />,
    title: "Professional Team",
    desc: "Highly trained staff dedicated to providing the best services.",
    img: "/security.jpg",
  },
  {
    id: 6,
    icon: <FaLock className="text-white text-xl" />,
    title: "Complete Privacy",
    desc: "We respect and maintain confidentiality in every case.",
    img: "/security.jpg",
  },
];

export default function AdvantagesSection() {
  return (
    <section className="bg-off_white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <SectionHeader
          subtitle="Why Choose Us"
          title="Our Advantages"
          details="We ensure your safety, privacy, and peace of mind with professional services and advanced solutions."
        />

        {/* Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {advantages.map((adv) => (
            <div
              key={adv.id}
              className="group rounded-lg transition-transform duration-500 hover:scale-105 bg-white"
            >
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <img
                  src={adv.img}
                  alt={adv.title}
                  className="w-full h-60 object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                {/* Icon box overlapping */}
                <div className="absolute -bottom-6 left-6 bg-primary w-14 h-14 flex items-center justify-center shadow-lg transition-colors duration-300 group-hover:bg-secondary">
                  {adv.icon}
                </div>
              </div>

              {/* Text Section */}
              <div className="pt-12 pb-6 px-6 text-left">
                <h3 className="font-bold text-lg text-gray-900">{adv.title}</h3>
                <p className="text-gray-600 mt-2">{adv.desc}</p>
                <a
                  href="#"
                  className="mt-4 inline-block text-sm font-semibold text-primary hover:text-secondary transition-colors"
                >
                  READ MORE →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
