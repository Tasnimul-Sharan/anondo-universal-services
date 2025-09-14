// "use client";
// import Slider from "react-slick";
// import { motion } from "framer-motion";
// import { useState } from "react";
// import Button from "./Button";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import Image from "next/image";
// import Link from "next/link";

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.3 },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
// };

// export default function LandingPage() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     {
//       heading: "Sanctuary of Wellness",
//       subheading: "Peace, care & joy for every senior life",
//       image: "/hero-section/1.jpg",
//     },
//     {
//       heading: "Holistic Healing",
//       subheading: "Yoga, nutrition & therapies for total well-being",
//       image: "/hero-section/2.jpg",
//     },
//     {
//       heading: "Life with Dignity",
//       subheading: "Celebrate aging with freedom & community",
//       image: "/hero-section/3.jpg",
//     },
//   ];

//   const settings = {
//     dots: false,
//     infinite: true,
//     fade: true,
//     speed: 500,
//     arrows: true,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     beforeChange: (_, next) => setCurrentSlide(next),
//   };

//   return (
//     <section className="bg-primary bg-opacity-5 md:py-32 py-20 relative group overflow-hidden">
//       <Slider {...settings}>
//         {slides.map((slide, index) => (
//           <div key={index}>
//             <div className="flex flex-col lg:flex-row justify-between items-center custom-container mx-auto">
//               <motion.div
//                 key={
//                   currentSlide === index
//                     ? `slide-${index}-${Date.now()}`
//                     : `slide-${index}`
//                 }
//                 className="max-w-2xl"
//                 variants={containerVariants}
//                 initial="hidden"
//                 animate="visible"
//               >
//                 <motion.p
//                   variants={itemVariants}
//                   className="text-primary tracking-widest font-medium mb-2 uppercase"
//                 >
//                   {slide.heading}
//                 </motion.p>

//                 <motion.h1
//                   variants={itemVariants}
//                   className="text-3xl md:text-5xl font-bold text-secondary mb-6"
//                 >
//                   {slide.subheading}
//                 </motion.h1>

//                 <motion.div variants={itemVariants} className="flex gap-4">
//                   <Link href="/services">
//                     <Button variant="primary" size="md">
//                       Explore More
//                     </Button>
//                   </Link>
//                   <Link href="/contact">
//                     <Button variant="outline" size="md">
//                       Book a Visit
//                     </Button>
//                   </Link>
//                 </motion.div>
//               </motion.div>

//               {/* Image Section */}
//               <motion.div
//                 key={`img-${currentSlide === index ? Date.now() : index}`}
//                 className="relative mt-12 lg:mt-0 lg:w-1/2 w-full"
//                 initial={{ opacity: 0, x: 50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 1 }}
//               >
//                 <Image
//                   src={slide.image}
//                   width={1200}
//                   height={1200}
//                   alt="Anondo Baari Wellness"
//                   className="w-full h-full object-cover rounded-md"
//                 />
//               </motion.div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </section>
//   );
// }

// const PrevArrow = ({ onClick }) => (
//   <div
//     className="absolute z-10 top-1/2 left-6 -translate-y-1/2 bg-primary text-white p-4 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
//     onClick={onClick}
//   >
//     <FaArrowLeft />
//   </div>
// );

// const NextArrow = ({ onClick }) => (
//   <div
//     className="absolute z-10 top-1/2 right-6 -translate-y-1/2 bg-primary text-white p-4 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
//     onClick={onClick}
//   >
//     <FaArrowRight />
//   </div>
// );






// "use client";
// import React, { useRef, useState, useEffect } from "react";
// import Slider from "react-slick";
// import { gsap } from "gsap";
// import { motion } from "framer-motion";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Button from "./Button";
// import Link from "next/link";
// const LandingPage = ({ sliderData }) => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const progressBar = useRef(null);
//   const sliderRef = useRef(null);
//   const textRefs = useRef([]);
//   useEffect(() => {
//     const currentText = textRefs.current[activeIndex];
//     if (currentText) {
//       gsap.fromTo(
//         currentText,
//         { opacity: 0, y: 50 },
//         { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
//       );
//     }
//   }, [activeIndex]);

//   useEffect(() => {
//     if (progressBar.current) {
//       progressBar.current.style.transition = "none";
//       progressBar.current.style.width = "0%";
//       setTimeout(() => {
//         progressBar.current.style.transition = "width 6000ms linear";
//         progressBar.current.style.width = "100%";
//       }, 50);
//     }
//     const timeout = setTimeout(() => {
//       if (sliderRef.current) {
//         sliderRef.current.slickNext();
//       }
//     }, 6000);
//     return () => clearTimeout(timeout);
//   }, [activeIndex]);
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 0,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     fade: true,
//     autoplay: false,
//     arrows: false,
//     beforeChange: (_, next) => setActiveIndex(next),
//   };
//   return (
//     <div className="relative w-full min-h-full overflow-hidden">
//       <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 z-10">
//         <div
//           ref={progressBar}
//           className="h-full bg-primary transition-all"
//           style={{ width: "0%" }}
//         ></div>
//       </div>
//       <Slider ref={sliderRef} {...settings}>
//         {sliderData.slides.map((slide, index) => (
//           <div
//             key={index}
//             className="relative w-full md:min-h-screen h-96 py-72 md:py-0 overflow-hidden"
//           >
//             <motion.div
//               key={`bg-${index}-${activeIndex}`}
//               initial={{ scale: 1.5 }}
//               animate={{ scale: 1 }}
//               transition={{ duration: 4, ease: "easeOut" }}
//               className="absolute inset-0 bg-cover bg-center"
//               style={{ backgroundImage: `url(${slide.image})` }}
//             ></motion.div>
//             <div className="absolute inset-0 bg-soft_black bg-opacity-50"></div>
//             <div
//               ref={(el) => (textRefs.current[index] = el)}
//               className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-6"
//             >
//               <motion.p
//                 className="uppercase tracking-widest text-sm"
//                 key={`subtitle-${index}-${activeIndex}`}
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1, ease: "easeOut" }}
//               >
//                 {slide.subtitle}
//               </motion.p>
//               <motion.h1
//                 className="text-3xl md:text-6xl font-serif italic font-semibold mt-4"
//                 key={`title-${index}-${activeIndex}`}
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1, ease: "easeOut" }}
//               >
//                 <span className="text-primary">
//                   {slide.title.split(" ")[0]}
//                 </span>{" "}
//                 {slide.title.split(" ").slice(1).join(" ")}
//               </motion.h1>
//               <motion.p
//                 className="mt-4 text-base md:text-lg max-w-xl text-gray-200"
//                 key={`desc-${index}-${activeIndex}`}
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1, ease: "easeOut" }}
//               >
//                 {slide.description}
//               </motion.p>
//               <motion.div
//                 className="mt-6 flex gap-4"
//                 key={`button-${index}-${activeIndex}`}
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
//               >
//                 {slide.buttonTexts.map((text, btnIndex) => (
//                   <Link
//                     key={btnIndex}
//                     href={slide.buttonLinks[btnIndex]}
//                     passHref
//                   >
//                     <Button
//                       title={text}
//                       className={`w-full sm:w-auto font-semibold rounded-md transition ${
//                         btnIndex === 0
//                           ? "bg-primary text-off_white hover:bg-Secound_primary"
//                           : "bg-secondary text-white hover:bg-soft_black"
//                       }`}
//                     />
//                   </Link>
//                 ))}
//               </motion.div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };
// export default LandingPage;


"use client";
import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Button from "./Button";
import Link from "next/link";

const sliderData = {
  slides: [
    {
      image: "/slider/security1.jpg",
      subtitle: "Professional Security",
      title: "24/7 Protection Services",
      description:
        "Our highly trained guards and advanced technology ensure complete safety for your home, office, and business around the clock.",
      primaryButton: { text: "Services", link: "/services" },
      secondaryButton: { text: "Contact Us", link: "/contact" },
    },
    {
      image: "/slider/security2.jpg",
      subtitle: "Corporate Solutions",
      title: "Trusted By Leading Companies",
      description:
        "We provide reliable security services for banks, offices, and corporate establishments with years of proven experience.",
      primaryButton: { text: "Our Clients", link: "/clients" },
      secondaryButton: { text: "Get Quote", link: "/quote" },
    },
    {
      image: "/slider/security3.jpg",
      subtitle: "Smart Technology",
      title: "Modern Surveillance Systems",
      description:
        "From CCTV to biometric access control and digital monitoring, we integrate the latest security technology for your safety.",
      primaryButton: { text: "Explore Services", link: "/services" },
      secondaryButton: { text: "Contact Us", link: "/contact" },
    },
    // {
    //   image: "/images/security4.jpg",
    //   subtitle: "Event & VIP Security",
    //   title: "Specialized Protection",
    //   description:
    //     "Our professional team provides tailored security for concerts, corporate events, and VIP movements with complete discretion.",
    //   primaryButton: { text: "Book Now", link: "/booking" },
    //   secondaryButton: { text: "Contact Us", link: "/contact" },
    // },
    // {
    //   image: "/images/security5.jpg",
    //   subtitle: "Commitment to Safety",
    //   title: "Your Safety, Our Priority",
    //   description:
    //     "We don’t just offer services, we deliver trust and peace of mind through uncompromised protection.",
    //   primaryButton: { text: "Learn More", link: "/about" },
    //   secondaryButton: { text: "Join Us", link: "/careers" },
    // },
  ],
};


const LandingPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const progressBar = useRef(null);
  const sliderRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    const currentText = textRefs.current[activeIndex];
    if (currentText) {
      gsap.fromTo(
        currentText,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }
  }, [activeIndex]);

  useEffect(() => {
    if (progressBar.current) {
      progressBar.current.style.transition = "none";
      progressBar.current.style.width = "0%";
      setTimeout(() => {
        progressBar.current.style.transition = "width 6000ms linear";
        progressBar.current.style.width = "100%";
      }, 50);
    }
    const timeout = setTimeout(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 6000);
    return () => clearTimeout(timeout);
  }, [activeIndex]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: false,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (_, next) => setActiveIndex(next),
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden group">
      {/* Progress bar */}
      {/* <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 z-20">
        <div
          ref={progressBar}
          className="h-full bg-primary transition-all"
          style={{ width: "0%" }}
        ></div>
      </div> */}

      <Slider ref={sliderRef} {...settings}>
        {sliderData.slides.map((slide, index) => (
          <div
            key={index}
            className="relative w-full min-h-screen overflow-hidden"
          >
            <motion.div
              key={`bg-${index}-${activeIndex}`}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 4, ease: "easeOut" }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></motion.div>

            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div
              ref={(el) => (textRefs.current[index] = el)}
              className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-6"
            >
              <motion.p
                className="uppercase tracking-widest text-sm"
                key={`subtitle-${index}-${activeIndex}`}
              >
                {slide.subtitle}
              </motion.p>

              <motion.h1
                className="text-3xl md:text-6xl font-serif italic font-semibold mt-4"
                key={`title-${index}-${activeIndex}`}
              >
                <span className="text-primary">
                  {slide.title.split(" ")[0]}
                </span>{" "}
                {slide.title.split(" ").slice(1).join(" ")}
              </motion.h1>

              <motion.p
                className="mt-4 text-base md:text-lg max-w-xl text-gray-200"
                key={`desc-${index}-${activeIndex}`}
              >
                {slide.description}
              </motion.p>

              {/* <motion.div
                className="mt-6 flex gap-4"
                key={`button-${index}-${activeIndex}`}
              >
                {slide.buttonTexts.map((text, btnIndex) => (
                  <Link
                    key={btnIndex}
                    href={slide.buttonLinks[btnIndex]}
                    passHref
                  >
                    <Button
                      title={text}
                      className={`w-full sm:w-auto font-semibold rounded-md transition ${
                        btnIndex === 0
                          ? "bg-primary text-off_white hover:bg-Secound_primary"
                          : "bg-secondary text-white hover:bg-soft_black"
                      }`}
                    />
                  </Link>
                ))}
              </motion.div> */}

<motion.div className="mt-6 flex gap-4">
  <Link href="/services">
    <Button variant="primary">services</Button>
  </Link>
  <Link href="/contact">
    <Button variant="outline">Contact Us</Button>
  </Link>
</motion.div>


            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute z-20 top-1/2 left-6 -translate-y-1/2 bg-black/60 text-white p-4 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-500"
    onClick={onClick}
  >
    <FaArrowLeft />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    className="absolute z-20 top-1/2 right-6 -translate-y-1/2 bg-black/60 text-white p-4 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-500"
    onClick={onClick}
  >
    <FaArrowRight />
  </div>
);

export default LandingPage;
