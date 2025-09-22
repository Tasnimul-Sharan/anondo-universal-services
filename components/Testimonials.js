"use client";

import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionHeader from "./SectionHeader";

const testimonials = [
  {
    name: "Mahbub Rahman",
    role: "Managing Director, Rahman Textiles Ltd.",
    img: "/clients/client1.jpg",
    text: "Anondo Universal Services has been a reliable partner in safeguarding our factory premises. Their guards are professional, disciplined, and always alert.",
    stars: 5,
  },
  {
    name: "Farzana Ahmed",
    role: "HR Manager, Orion Group",
    img: "/clients/client2.jpg",
    text: "Their corporate security team ensures smooth operations at our head office. The reception and access control management have truly elevated our workplace security.",
    stars: 5,
  },
  {
    name: "Shakil Hossain",
    role: "Event Organizer, Dhaka Event Solutions",
    img: "/clients/client3.jpg",
    text: "We hired Anondo Universal Services for a large corporate event in Dhaka. Their team managed the crowd and VIP security flawlessly. We felt completely at ease.",
    stars: 4,
  },
  {
    name: "Dr. Nusrat Jahan",
    role: "Principal, Greenfield International School",
    img: "/clients/client4.jpg",
    text: "The safety of our students is our top priority. Anondo’s trained guards and quick response team have given us peace of mind every single day.",
    stars: 5,
  },
];

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 600,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0px",
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, centerMode: false } },
      { breakpoint: 640, settings: { slidesToShow: 1, centerMode: false } },
    ],
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-16 bg-gray-50 text-center">
      <SectionHeader
        subtitle="Client Testimonials"
        title="What Our Clients Say"
        details="Hear from our valued clients across Bangladesh who trust us with their safety and security."
      />

      <div className="max-w-7xl mx-auto overflow-hidden">
        <Slider {...settings}>
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              className="px-2 md:px-4"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="bg-white p-6 rounded-lg relative text-left">
                <FaQuoteLeft className="text-primary text-2xl mb-4" />
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{t.text}</p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={t.img}
                      alt={t.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t.name}</h4>
                    <p className="text-gray-500 text-sm">{t.role}</p>
                    <div className="flex mt-1">
                      {Array.from({ length: t.stars }).map((_, i) => (
                        <span key={i} className="text-yellow-500">★</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
}



// "use client";

// import Image from "next/image";
// import Slider from "react-slick";
// import { FaQuoteLeft } from "react-icons/fa";
// import { motion } from "framer-motion";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const testimonials = [
//   {
//     name: "Angel Jones",
//     role: "Execfise",
//     img: "/clients/client1.jpg",
//     text: "The Love Boat promises something for everyone now to beat every of just one and his Skipper too will do their in their tropic island nest.",
//     stars: 4,
//   },
//   {
//     name: "Matt Morgan",
//     role: "Execfise",
//     img: "/clients/client2.jpg",
//     text: "The Love Boat promises something for everyone now to beat every of just one and his Skipper too will do their in their tropic island nest.",
//     stars: 5,
//   },
//   {
//     name: "Paul Vincent",
//     role: "Execfise",
//     img: "/clients/client3.jpg",
//     text: "The Love Boat promises something for everyone now to beat every of just one and his Skipper too will do their in their tropic island nest.",
//     stars: 5,
//   },
// ];

// const brands = [
//   { logo: "/brands/brand1.png" },
//   { logo: "/brands/brand2.png" },
//   { logo: "/brands/brand3.png" },
//   { logo: "/brands/brand4.png" },
// ];

// export default function Testimonials() {
//   const testimonialSettings = {
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     arrows: true,
//     speed: 600,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplaySpeed: 4000,
//   };

//   const brandSettings = {
//     dots: false,
//     infinite: true,
//     autoplay: true,
//     arrows: false,
//     speed: 600,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplaySpeed: 2000,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 2 } },
//       { breakpoint: 640, settings: { slidesToShow: 1 } },
//     ],
//   };

//   return (
//     <section className="bg-gray-900 text-white py-16 overflow-hidden">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//         {/* LEFT SIDE: TESTIMONIALS */}
//         <div>
//           <h2 className="text-2xl md:text-3xl font-bold mb-6 text-left">
//             What our clients say
//           </h2>
//           <Slider {...testimonialSettings}>
//             {testimonials.map((t, idx) => (
//               <div key={idx} className="px-2 ">
//                 <div className="bg-white text-gray-800 p-8 rounded-lg relative shadow-lg">
//                   {/* Quote Icon */}
//                   <FaQuoteLeft className="absolute -top-6 left-1/2 -translate-x-1/2 bg-green-500 text-white p-3 text-3xl rounded-full shadow-md" />

//                   <p className="text-gray-600 text-sm leading-relaxed mb-6">
//                     {t.text}
//                   </p>

//                   <div className="flex items-center gap-4">
//                     <div className="w-12 h-12 rounded-full overflow-hidden">
//                       <Image
//                         src={t.img}
//                         alt={t.name}
//                         width={48}
//                         height={48}
//                         className="object-cover"
//                       />
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-900">{t.name}</h4>
//                       <p className="text-gray-500 text-sm">{t.role}</p>
//                       <div className="flex mt-1">
//                         {Array.from({ length: t.stars }).map((_, i) => (
//                           <span key={i} className="text-yellow-500">
//                             ★
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>

//         {/* RIGHT SIDE: BRANDS */}
//         <div>
//           <h2 className="text-2xl md:text-3xl font-bold mb-6 text-left">
//             Clients & Partners
//           </h2>
//           <p className="text-gray-400 mb-6">
//             Enthusiastically mesh long-term high-impact infrastructures. Client
//             efficient customer service.
//           </p>
//           <Slider {...brandSettings}>
//             {brands.map((b, idx) => (
//               <div key={idx} className="px-4">
//                 <div className="bg-gray-800 rounded-lg flex items-center justify-center h-32 shadow-md">
//                   <Image
//                     src={b.logo}
//                     alt="Brand logo"
//                     width={120}
//                     height={80}
//                     className="object-contain opacity-80 hover:opacity-100 transition"
//                   />
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </section>
//   );
// }