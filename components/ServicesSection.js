// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import Button from "./Button";
// import Link from "next/link";

// const services = [
//   {
//     title: "24/7 Medical Care",
//     description:
//       "On-site physicians, nurses, physiotherapists, psychologists, dieticians, diagnostic labs, pharmacy, emergency care, and even a medical helicopter.",
//     img: "/services/medical.jpg",
//     slug: "medical-care",
//   },
//   {
//     title: "Wellness & Fitness Programs",
//     description:
//       "Active aging through yoga, aerobics, aqua gym, supervised training, group walks, tai chi, massage, hydrotherapy, and meditation practices.",
//     img: "/services/wellness.jpg",
//     slug: "wellness-fitness",
//   },
//   {
//     title: "Sustainability & Green Living",
//     description:
//       "Eco-friendly practices such as solar-powered lighting, rainwater harvesting, organic gardens, recycling, and green transportation for a healthier planet.",
//     img: "/services/green.jpg",
//     slug: "sustainability-green",
//   },
//   {
//     title: "Dining: Nourishment That Heals",
//     description:
//       "Freshly prepared, dietitian-approved meals. Options include vegetarian, diabetic-friendly, heart-healthy, and high-protein diets with community feasts.",
//     number: "07",
//     img: "/services/dining.jpg",
//     slug: "dining",
//   },
//   {
//     title: "Recreation & Engagement",
//     description:
//       "A vibrant calendar of cultural evenings, art workshops, gardening clubs, music, dance, religious prayer, movie nights, and intergenerational programs.",
//     number: "08",
//     img: "/services/recreation.jpg",
//     slug: "recreation",
//   },
//   {
//     title: "Security And Safety",
//     description:
//       "Smart emergency buttons, AI-powered health monitoring, telemedicine, resident wellness app, digital noticeboards, and Wi-Fi in every suite.",
//     number: "05",
//     img: "/services/security.jpg",
//     slug: "security-safety",
//   },
//   {
//     title: "Technology Integration",
//     description:
//       "Smart emergency buttons, AI-powered health monitoring, telemedicine, resident wellness app, digital noticeboards, and Wi-Fi in every suite.",
//     number: "05",
//     img: "/services/technology.jpg",
//     slug: "technology",
//   },
//   {
//     title: "Landscaping & Environment",
//     description:
//       "25 acres of serene gardens, jogging tracks, swimming pool, open-air pavilions, orchards, koi ponds, and bird-watching zones.",
//     number: "06",
//     img: "/services/landscaping.jpg",
//     slug: "landscaping",
//   },
//   {
//     title: "Seminars, Learning & Contribution",
//     description:
//       "Lectures, workshops, and senior-led sessions in partnership with universities. Residents can learn, teach, and publish, nurturing lifelong growth.",
//     number: "04",
//     img: "/services/seminars.jpg",
//     slug: "seminars",
//   },
//   {
//     title: "Compassionate Staff",
//     description:
//       "A 1063-member professional team including physicians, nurses, dieticians, trainers, and cultural coordinators — all trained in empathy and eldercare.",
//     number: "03",
//     img: "/services/staff.jpg",
//     slug: "compassionate-staff",
//   },
//   {
//     title: "Admission & Residency Options",
//     description:
//       "We offer flexible residency packages – permanent, seasonal, and short-term recovery stays. Begin your journey of healing and harmony with ease.",
//     number: "01",
//     img: "/services/admission.jpg",
//     slug: "admission",
//   },
// ];

// export default function Services() {
//   const serviceRefs = useRef([]);

//   useEffect(() => {
//     serviceRefs.current.forEach((service) => {
//       const border = service.querySelector(".hover-border");
//       gsap.set(border, { scaleX: 0, transformOrigin: "left" });

//       service.addEventListener("mouseenter", () => {
//         gsap.to(border, { scaleX: 1, duration: 0.6, ease: "power3.out" });
//       });

//       service.addEventListener("mouseleave", () => {
//         gsap.to(border, { scaleX: 0, duration: 0.6, ease: "power3.out" });
//       });
//     });
//   }, []);

//   return (
//     <section className="py-16">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 custom-container mx-auto">
//         {services.map((service, index) => (
//           <Link href={`/services/${service.slug}`}>
//             <div
//               key={index}
//               ref={(el) => (serviceRefs.current[index] = el)}
//               className="relative cursor-pointer group px-6 py-8 md:h-[35rem] h-[32rem] border rounded service-item hover:scale-105 transition-all transform duration-500 overflow-hidden"
//             >
//               <div
//                 className="absolute top-0 left-0 w-full h-1 bg-primary hover-border"
//                 style={{ transform: "scaleX(1)", transition: "none" }}
//               ></div>
//               <div className="overflow-hidden rounded-md mb-4">
//                 <img
//                   src={service.img}
//                   alt={service.title}
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
//               </div>
//               <h3 className="text-secondary md:text-xl text-lg mb-3 font-semibold transition-colors duration-500">
//                 {service.title}
//               </h3>
//               <p className="text-secondary_two text-base transition-colors duration-500 ease-in-out">
//                 {service.description}
//               </p>
//               <div className="absolute bottom-6 right-6">
//                 <Button variant="primary" size="md">
//                   Read More
//                 </Button>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// }



// "use client";
// import {
//   FaShieldAlt,
//   FaUserShield,
//   FaVideo,
//   FaLock,
//   FaExclamationTriangle,
//   FaBroadcastTower,
// } from "react-icons/fa";

// const services = [
//   {
//     title: "Security Consulting",
//     description:
//       "We provide expert advice and tailored security solutions to protect your business and property.",
//     icon: FaShieldAlt,
//   },
//   {
//     title: "Corporate Security",
//     description:
//       "Professional guards and systems to ensure complete safety in offices, banks, and industries.",
//     icon: FaUserShield,
//   },
//   {
//     title: "24/7 Surveillance",
//     description:
//       "Advanced CCTV monitoring and remote surveillance for round-the-clock protection.",
//     icon: FaVideo,
//   },
//   {
//     title: "Access Control",
//     description:
//       "Biometric and digital access systems to safeguard entry points effectively.",
//     icon: FaLock,
//   },
//   {
//     title: "Emergency Response",
//     description:
//       "Quick and reliable security team for handling emergency and crisis situations.",
//     icon: FaExclamationTriangle,
//   },
//   {
//     title: "Communication Support",
//     description:
//       "Two-way radio communication ensuring real-time coordination for field teams.",
//     icon: FaBroadcastTower,
//   },
// ];

// export default function ServicesSection() {
//   return (
//     <section className="relative py-20 bg-white">
//       {/* Heading */}
//       <div className="text-center mb-16">
//         <h2 className="text-3xl md:text-4xl font-bold uppercase">
//           Our Best <span className="text-primary">Services</span>
//         </h2>
//         <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
//           We promise comprehensive protection with tailored solutions to meet every security need.
//         </p>
//       </div>

//       {/* Services Grid */}
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center text-center p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition"
//           >
//             <div className="w-16 h-16 flex items-center justify-center rounded-xl border-2 border-primary text-primary mb-6">
//               <service.icon size={28} />
//             </div>
//             <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
//             <p className="text-gray-600 text-sm">{service.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


// "use client";

// import {
//   FaShieldAlt,
//   FaUserSecret,
//   // FaWalkieTalkie,
//   FaBroadcastTower,
//   FaEye,
//   FaLock,
//   FaExclamationTriangle,
// } from "react-icons/fa";

// const services = [
//   { title: "SECURITY CONSULTING", icon: <FaShieldAlt className="w-5 h-5" /> },
//   { title: "SECURITY CONSULTING", icon: <FaUserSecret className="w-5 h-5" /> },
//   { title: "SECURITY CONSULTING", icon: <FaBroadcastTower className="w-5 h-5" /> },
//   { title: "SECURITY CONSULTING", icon: <FaEye className="w-5 h-5" /> },
//   { title: "SECURITY CONSULTING", icon: <FaLock className="w-5 h-5" /> },
//   {
//     title: "SECURITY CONSULTING",
//     icon: <FaExclamationTriangle className="w-5 h-5" />,
//   },
// ];

// export default function ServicesSection() {
//   return (
//     <section className="relative py-20 bg-white">
//       <div className="max-w-6xl mx-auto px-4">
//         {/* Heading */}
//         <div className="text-center mb-12">
//           <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
//             OUR BEST SERVICES
//           </h2>
//           <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
//             The Love Boat promises something for everyone now to beat every of just one
//           </p>
//         </div>

//         <div className="relative flex justify-center">
//           {/* Services Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-16 z-10">
//             {/* Left side services */}
//             <div className="flex flex-col gap-10 justify-center">
//               {services.slice(0, 3).map((service, i) => (
//                 <div key={i} className="flex items-center gap-4 text-left">
//                   <div className="p-3 border-2 border-yellow-400 rounded-md">
//                     {service.icon}
//                   </div>
//                   <div>
//                     <h3 className="font-bold text-gray-900">
//                       {service.title}
//                     </h3>
//                     <p className="text-gray-500 text-sm">
//                       The Love Boat promises something for every the beat of just one drum.
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Image */}
//             <div className="flex justify-center">
//               <img
//                 src="/services/security-guard.jpg"
//                 alt="Security Guard"
//                 className="w-full object-cover rounded-lg"
//               />
//             </div>

//             {/* Right side services */}
//             <div className="flex flex-col gap-10 justify-center md:col-start-2 md:row-start-1">
//               {services.slice(3).map((service, i) => (
//                 <div key={i} className="flex items-center gap-4 text-left">
//                   <div className="p-3 border-2 border-yellow-400 rounded-md">
//                     {service.icon}
//                   </div>
//                   <div>
//                     <h3 className="font-bold text-gray-900">
//                       {service.title}
//                     </h3>
//                     <p className="text-gray-500 text-sm">
//                       The Love Boat promises something for every the beat of just one drum.
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import {
  FaShieldAlt,
  FaUserSecret,
  FaBroadcastTower,
  FaEye,
  FaLock,
  FaExclamationTriangle,
} from "react-icons/fa";

const services = [
  { title: "SECURITY CONSULTING", icon: <FaShieldAlt className="w-5 h-5" /> },
  { title: "SECURITY CONSULTING", icon: <FaUserSecret className="w-5 h-5" /> },
  { title: "SECURITY CONSULTING", icon: <FaBroadcastTower className="w-5 h-5" /> },
  { title: "SECURITY CONSULTING", icon: <FaEye className="w-5 h-5" /> },
  { title: "SECURITY CONSULTING", icon: <FaLock className="w-5 h-5" /> },
  { title: "SECURITY CONSULTING", icon: <FaExclamationTriangle className="w-5 h-5" /> },
];

export default function Services() {
  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            OUR BEST SERVICES
          </h2>
          <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
            The Love Boat promises something for everyone now to beat every of just one
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* Left services */}
          <div className="flex flex-col gap-10">
            {services.slice(0, 3).map((service, i) => (
              <div key={i} className="flex items-center gap-4 text-left">
                <div className="p-3 border-2 border-yellow-400 rounded-md text-yellow-500">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{service.title}</h3>
                  <p className="text-gray-500 text-sm">
                    The Love Boat promises something for every the beat of just one drum.
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Middle image */}
          <div className="flex justify-center">
            <img
              src="/services/security-guard.jpg"
              alt="Security Guard"
              className="max-h-[420px] object-contain"
            />
          </div>

          {/* Right services */}
          <div className="flex flex-col gap-10">
            {services.slice(3).map((service, i) => (
              <div key={i} className="flex items-center gap-4 text-left">
                <div className="p-3 border-2 border-yellow-400 rounded-md text-yellow-500">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{service.title}</h3>
                  <p className="text-gray-500 text-sm">
                    The Love Boat promises something for every the beat of just one drum.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
