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
      image: "/slider/security1.jpeg",
      subtitle: "Your Safety, Our Responsibility",
      title: "Professional Security Services",
      description:
        "Uniformed guards, armed protection, caretakers, and supervisors ensuring round-the-clock safety for homes, offices, and industries.",
      primaryButton: { text: "Explore Services", link: "/services" },
      secondaryButton: { text: "Contact Us", link: "/contact" },
    },
    {
      image: "/slider/security2.jpeg",
      subtitle: "Trusted by Leading Businesses",
      title: "Corporate & Industrial Protection",
      description:
        "From corporate offices to large factories, we provide tailored security, supervision, access control, and fire-safety compliance.",
      primaryButton: { text: "Our Clients", link: "/clients" },
      secondaryButton: { text: "Get Quote", link: "/quote" },
    },
    {
      image: "/slider/security3.jpeg",
      subtitle: "Smart & Modern Solutions",
      title: "Technology-Enabled Surveillance",
      description:
        "CCTV, biometric access, alarm systems, and 24/7 central monitoring—combining people with technology for maximum protection.",
      primaryButton: { text: "See Technology", link: "/services" },
      secondaryButton: { text: "Contact Us", link: "/contact" },
    },
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
        { opacity: 0, y: 0 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }
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

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 },
    },
  };

  return (
    <div className="relative w-full overflow-hidden group">
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

            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <motion.div
              ref={(el) => (textRefs.current[index] = el)}
              className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-6 mt-40"
              variants={containerVariants}
              initial="hidden"
              animate={activeIndex === index ? "visible" : "hidden"}
            >
              <motion.p
                className="uppercase tracking-widest text-sm"
                variants={textVariants}
              >
                {slide.subtitle}
              </motion.p>

              <motion.h1
                className="text-3xl md:text-6xl font-serif italic font-semibold mt-4"
                variants={textVariants}
              >
                <span className="text-primary">
                  {slide.title.split(" ")[0]}
                </span>{" "}
                {slide.title.split(" ").slice(1).join(" ")}
              </motion.h1>

              <motion.p
                className="mt-4 text-base md:text-lg max-w-xl text-gray-200"
                variants={textVariants}
              >
                {slide.description}
              </motion.p>

              <motion.div className="mt-6 flex gap-4" variants={textVariants}>
                <Link href="/services">
                  <Button variant="primary">Services</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline">Contact Us</Button>
                </Link>
              </motion.div>
            </motion.div>
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
