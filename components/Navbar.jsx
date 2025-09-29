"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiClock, FiPhoneCall, FiMail } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const menu = menuRef.current;
    const items = menu?.querySelectorAll("li");
    if (isMenuOpen) {
      gsap.to(menu, {
        width: "100vw",
        height: "100vh",
        opacity: 1,
        duration: 0.8,
        ease: "power4.out",
      });
      gsap.fromTo(
        items,
        { x: "-100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.6, stagger: 0.1, ease: "power4.out" }
      );
    } else {
      gsap.to(menu, {
        width: 0,
        height: 0,
        opacity: 0,
        duration: 0.6,
        ease: "power4.inOut",
      });
    }
  }, [isMenuOpen]);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Training", path: "/training" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blogs", path: "/blogs" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 
    ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      {!isScrolled && (
        <>
          {/* Top Bar */}
          <div className="w-full bg-secondary text-white text-sm py-4">
            <div className="custom-container mx-auto flex justify-between items-center px-4">
              {/* Left Social */}

              <div className="flex items-center gap-2 text-off_white text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 text-primary"
                >
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 
                 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 
                 1.12 2.5 2.5S13.38 11.5 12 11.5z"
                  />
                </svg>
                <span>
                  Printers Building, 14th Floor, 5 Rajuk Avenue, Motijheel, 1000
                  Dhaka
                </span>
              </div>
              <div className="flex gap-2">
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  className="w-8 h-8 flex items-center justify-center border border-gray-400 hover:bg-primary hover:border-transparent hover:text-white transition-all transform duration-500"
                >
                  <FaFacebookF className="w-4 h-4" />
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  className="w-8 h-8 flex items-center justify-center border border-gray-400 hover:bg-primary hover:border-transparent hover:text-white transition-all transform duration-500"
                >
                  <FaXTwitter className="w-4 h-4" />
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  className="w-8 h-8 flex items-center justify-center border border-gray-400 hover:bg-primary hover:border-transparent hover:text-white transition-all transform duration-500"
                >
                  <FaLinkedinIn className="w-4 h-4" />
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  className="w-8 h-8 flex items-center justify-center border border-gray-400 hover:bg-primary hover:border-transparent hover:text-white transition-all transform duration-500"
                >
                  <FaInstagram className="w-4 h-4" />
                </Link>
              </div>

              {/* Right Links */}
            </div>
          </div>

          {/* Middle Bar */}
          <div className="w-full bg-white py-6 border-b border-gray-200">
            <div className="custom-container mx-auto flex flex-col lg:flex-row justify-between items-center px-4 gap-6">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src="/anondo-universal-services-logo.jpg"
                  alt="Logo"
                  width={60}
                  height={60}
                  className="object-contain"
                />
                <div className="text-left">
                  <h1 className="text-2xl font-bold text-primary">Anondo</h1>
                  <p className="text-xs tracking-widest text-gray-600">
                    Universal Services
                  </p>
                </div>
              </Link>

              {/* Info Section */}
              <div className="flex flex-col sm:flex-row gap-8 text-sm">
                <div className="flex items-center gap-3">
                  <FiClock className="text-primary text-3xl" />
                  <div>
                    <p className="font-semibold">Working Hours</p>
                    <p className="text-gray-600">
                      Saturday - Thursday: 10.00am to 7.00pm
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <FiPhoneCall className="text-primary text-3xl" />
                  <div>
                    <p className="font-semibold">Call US</p>
                    <p className="text-gray-600">+880 1313775333</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <FiMail className="text-primary text-3xl" />
                  <div>
                    <p className="font-semibold">Mail US</p>
                    <p className="text-gray-600">
                      contact@anondouniversalserviceslimited.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="bg-white relative z-50">
            <div className="custom-container mx-auto flex justify-between items-center px-4 h-16">
              {/* Menu Items */}
              <ul className="hidden lg:flex gap-8 font-medium items-center">
                {menuItems.map((item, index) => (
                  <li
                    key={index}
                    className="relative group cursor-pointer hover:text-primary font-semibold transition"
                  >
                    <Link href={item.path}>{item.name}</Link>
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-500 group-hover:w-full"></span>
                  </li>
                ))}
              </ul>

              {/* Inquiry Button */}
              <div className="hidden lg:block">
                <Link href="/contact">
                  <button className="bg-primary text-white px-6 py-2 font-bold hover:bg-secondary transition-all transform duration-500">
                    Contact US
                  </button>
                </Link>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden z-50 text-3xl text-primary"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
              </button>
            </div>
          </nav>
        </>
      )}

      <AnimatePresence>
        {isScrolled && (
          <motion.div
            // initial={{ opacity: 0, y: -40 }}
            // animate={{ opacity: 1, y: 0 }}
            // exit={{ opacity: 0, y: -40 }}
            // transition={{
            //   duration: 0.6,
            //   ease: "easeOut",
            //   type: "spring",
            //   stiffness: 50,
            // }}

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="bg-white py-6 fixed top-0 left-0 w-full z-50"

            //  initial={{ opacity: 0, y: -40, filter: "blur(10px)" }}
            // animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            // exit={{ opacity: 0, y: -40, filter: "blur(10px)" }}
            // transition={{ duration: 0.6, ease: "easeOut" }}
            // className="bg-white backdrop-blur-md py-6 fixed top-0 left-0 w-full z-50"
          >
            <div className="custom-container mx-auto flex justify-between items-center px-4">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/anondo-universal-services-logo.jpg"
                  alt="Logo"
                  width={50}
                  height={50}
                  className="object-contain transition-all duration-500"
                />
                <div className="flex flex-col leading-tight">
                  <span className="text-xl font-bold text-primary transition-all duration-500">
                    Anondo
                  </span>
                  <span className="text-xs tracking-widest text-gray-600 transition-all duration-500">
                    Universal Services
                  </span>
                </div>
              </Link>

              {/* Right Menu */}
              <ul className="hidden lg:flex gap-8 font-medium items-center">
                {menuItems.map((item, index) => (
                  <li
                    key={index}
                    className="relative group cursor-pointer hover:text-primary font-semibold transition"
                  >
                    <Link href={item.path}>{item.name}</Link>
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-500 group-hover:w-full"></span>
                  </li>
                ))}
              </ul>

              {/* Inquiry Button */}
              <div className="hidden lg:block">
                <Link href="/contact">
                  <button className="bg-primary text-white px-6 py-2 font-bold hover:bg-secondary transition-all transform duration-500">
                    Contact US
                  </button>
                </Link>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden z-50 text-3xl text-primary"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🔹 Single Mobile Menu (Common) */}
      <div
        ref={menuRef}
        className="lg:hidden fixed top-0 left-0 bg-white text-black z-40 overflow-y-auto flex flex-col justify-start"
        style={{ width: 0, height: 0, opacity: 0 }}
      >
        <ul className="flex flex-col justify-start items-start px-6 space-y-8 pt-12 text-xl font-semibold w-full">
          {menuItems.map((item, index) => (
            <li key={index} className="relative group">
              <Link
                href={item.path}
                className="block transition-colors duration-500 group-hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
              <span className="absolute bottom-0 left-0 h-[2px] bg-primary w-0 transition-all duration-500 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
        <div className="px-6 py-10">
          <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
            <button className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-secondary transition">
              Contact US
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

/************************ Transparent Navbar ********************************/

// "use client";
// import { useState, useRef, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import gsap from "gsap";
// import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
// import { FiClock, FiPhoneCall, FiMail } from "react-icons/fi";
// import { FaXTwitter } from "react-icons/fa6";
// import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const menuRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 80);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const menu = menuRef.current;
//     const items = menu?.querySelectorAll("li");
//     if (isMenuOpen) {
//       gsap.to(menu, {
//         width: "100vw",
//         height: "100vh",
//         opacity: 1,
//         duration: 0.8,
//         ease: "power4.out",
//       });
//       gsap.fromTo(
//         items,
//         { x: "-100%", opacity: 0 },
//         { x: "0%", opacity: 1, duration: 0.6, stagger: 0.1, ease: "power4.out" }
//       );
//     } else {
//       gsap.to(menu, {
//         width: 0,
//         height: 0,
//         opacity: 0,
//         duration: 0.6,
//         ease: "power4.inOut",
//       });
//     }
//   }, [isMenuOpen]);

//   const menuItems = [
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/about" },
//     { name: "Gallery", path: "/gallery" },
//     { name: "Services", path: "/services" },
//     { name: "Blog", path: "/blog" },
//     { name: "Contact Us", path: "/contact" },
//   ];

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
//         isScrolled ? "bg-white shadow-md" : "bg-transparent"
//       }`}
//     >
//       {/* 🔹 Full Layout (Before Scroll) */}
//       {!isScrolled && (
//         <>
//           {/* Top Bar */}
//           <div className="w-full bg-black text-white text-sm py-4">
//             <div className="custom-container mx-auto flex justify-between items-center px-4">
//               {/* Left Social */}
//               <div className="flex gap-3">
//                 <Link href="https://facebook.com" target="_blank">
//                   <FaFacebookF className="hover:text-primary transition w-4 h-4" />
//                 </Link>
//                 <Link href="https://twitter.com" target="_blank">
//                   <FaXTwitter className="hover:text-primary transition w-4 h-4" />
//                 </Link>
//                 <Link href="https://linkedin.com" target="_blank">
//                   <FaLinkedinIn className="hover:text-primary transition w-4 h-4" />
//                 </Link>
//                 <Link href="https://instagram.com" target="_blank">
//                   <FaInstagram className="hover:text-primary transition w-4 h-4" />
//                 </Link>
//               </div>
//               {/* Right Links */}
//               <div className="flex gap-4">
//                 <Link href="#">FAQ'S</Link>
//                 <Link href="#">Support</Link>
//                 <Link href="#">English</Link>
//               </div>
//             </div>
//           </div>

//           {/* Middle Bar */}
//           <div
//             className={`w-full py-6 border-b transition-all duration-500 ${
//               isScrolled
//                 ? "bg-white border-gray-200"
//                 : "bg-transparent border-transparent"
//             }`}
//           >
//             <div className="custom-container mx-auto flex flex-col lg:flex-row justify-between items-center px-4 gap-6">
//               {/* Logo */}
//               <Link href="/" className="flex items-center gap-3">
//                 <Image
//                   src="/anondo-universal-services-logo.png"
//                   alt="Logo"
//                   width={60}
//                   height={60}
//                   className="object-contain"
//                 />
//                 <div className="text-left">
//                   <h1 className="text-2xl font-bold text-primary">Anondo</h1>
//                   <p className="text-xs tracking-widest text-off_white">
//                     Universal Services
//                   </p>
//                 </div>
//               </Link>

//               {/* Info Section */}
//               <div className="hidden  sm:flex flex-col sm:flex-row gap-8 text-sm text-white">
//                 <div className="flex items-center gap-3">
//                   <FiClock className="text-primary text-3xl" />
//                   <div>
//                     <p className="font-semibold uppercase">WORKING HOURS</p>
//                     <p className="text-off_white">
//                       Monday - Sunday: 8.00am to 10.30pm
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <FiPhoneCall className="text-primary text-3xl" />
//                   <div>
//                     <p className="font-semibold uppercase">CALL US</p>
//                     <p className="text-off_white">+1-234-678-8900</p>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <FiMail className="text-primary text-3xl" />
//                   <div>
//                     <p className="font-semibold uppercase">MAIL US</p>
//                     <p className="text-off_white">bristol@support.com</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Navigation Menu */}
//           <nav
//             className={`relative z-50 transition-all duration-500 ${
//               isScrolled ? "bg-white" : "bg-transparent"
//             }`}
//           >
//             <div className="custom-container mx-auto flex justify-between items-center px-4 h-16">
//               {/* Menu Items */}
//               <ul className="hidden lg:flex gap-8 font-medium items-center">
//                 {menuItems.map((item, index) => (
//                   <li
//                     key={index}
//                     className="relative group cursor-pointer text-white hover:text-primary font-semibold transition"
//                   >
//                     <Link href={item.path}>{item.name}</Link>
//                     <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-500 group-hover:w-full"></span>
//                   </li>
//                 ))}
//               </ul>

//               {/* Inquiry Button */}
//               <div className="hidden lg:block">
//                 <Link href="/contact">
//                   <button className="bg-primary text-white px-6 py-2 font-bold hover:bg-secondary transition">
//                     Contact US
//                   </button>
//                 </Link>
//               </div>

//               {/* Mobile Menu Toggle */}
//               <button
//                 className="lg:hidden z-50 text-3xl text-primary"
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//               >
//                 {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
//               </button>
//             </div>
//           </nav>
//         </>
//       )}

//       {/* 🔹 Small Sticky Navbar (After Scroll) */}
//       <AnimatePresence>
//         {isScrolled && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0, transition: { duration: 0.6 } }}
//             transition={{ duration: 0.6, ease: "easeInOut" }}
//             className="bg-white shadow-md py-4 fixed top-0 left-0 w-full z-50"
//           >
//             <div className="custom-container mx-auto flex justify-between items-center px-4">
//               {/* Logo */}
//               <Link href="/" className="flex items-center gap-2">
//                 <Image
//                   src="/anondo-universal-services-logo.jpg"
//                   alt="Logo"
//                   width={60}
//                   height={60}
//                   className="object-contain transition-all duration-500"
//                 />
//                 <div className="flex flex-col leading-tight">
//                   <span className="text-xl font-bold text-primary transition-all duration-500">
//                     Anondo
//                   </span>
//                   <span className="text-xs tracking-widest text-off_white transition-all duration-500">
//                     Universal Services
//                   </span>
//                 </div>
//               </Link>

//               {/* Right Menu */}
//               <ul className="hidden lg:flex gap-8 font-medium items-center">
//                 {menuItems.map((item, index) => (
//                   <li
//                     key={index}
//                     className="relative group cursor-pointer hover:text-primary font-semibold transition"
//                   >
//                     <Link href={item.path}>{item.name}</Link>
//                     <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-500 group-hover:w-full"></span>
//                   </li>
//                 ))}
//               </ul>

//               {/* Inquiry Button */}
//               <div className="hidden lg:block">
//                 <Link href="/contact">
//                   <button className="bg-primary text-white px-6 py-2 font-bold hover:bg-secondary transition">
//                     Contact US
//                   </button>
//                 </Link>
//               </div>

//               {/* Mobile Menu Toggle */}
//               <button
//                 className="lg:hidden z-50 text-3xl text-primary"
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//               >
//                 {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* 🔹 Single Mobile Menu (Common) */}
//       <div
//         ref={menuRef}
//         className="lg:hidden fixed top-0 left-0 bg-white text-black z-40 overflow-y-auto flex flex-col justify-start"
//         style={{ width: 0, height: 0, opacity: 0 }}
//       >
//         <ul className="flex flex-col justify-start items-start px-6 space-y-8 pt-12 text-xl font-semibold w-full">
//           {menuItems.map((item, index) => (
//             <li key={index} className="relative group">
//               <Link
//                 href={item.path}
//                 className="block transition-colors duration-500 group-hover:text-primary"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {item.name}
//               </Link>
//               <span className="absolute bottom-0 left-0 h-[2px] bg-primary w-0 transition-all duration-500 group-hover:w-full"></span>
//             </li>
//           ))}
//         </ul>
//         <div className="px-6 py-10">
//           <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
//             <button className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-secondary transition">
//               Contact US
//             </button>
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

// "use client";
// import { useState, useRef, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import gsap from "gsap";
// import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
// import { FiClock, FiPhoneCall, FiMail } from "react-icons/fi";
// import { FaXTwitter } from "react-icons/fa6";
// import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const menuRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 80);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const menu = menuRef.current;
//     const items = menu?.querySelectorAll("li");
//     if (isMenuOpen) {
//       gsap.to(menu, {
//         width: "100vw",
//         height: "100vh",
//         opacity: 1,
//         duration: 0.8,
//         ease: "power4.out",
//       });
//       gsap.fromTo(
//         items,
//         { x: "-100%", opacity: 0 },
//         { x: "0%", opacity: 1, duration: 0.6, stagger: 0.1, ease: "power4.out" }
//       );
//     } else {
//       gsap.to(menu, {
//         width: 0,
//         height: 0,
//         opacity: 0,
//         duration: 0.6,
//         ease: "power4.inOut",
//       });
//     }
//   }, [isMenuOpen]);

//   const menuItems = [
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/about" },
//     { name: "Gallery", path: "/gallery" },
//     { name: "Services", path: "/services" },
//     { name: "Blog", path: "/blog" },
//     { name: "Contact Us", path: "/contact" },
//   ];

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
//         isScrolled ? "bg-white shadow-md" : "bg-transparent"
//       }`}
//     >
//       {/* 🔹 Full Layout (Before Scroll) */}
//       {!isScrolled && (
//         <>
//           {/* Top Bar */}
//           <div className="w-full bg-black text-white text-sm py-4">
//             <div className="custom-container mx-auto flex justify-between items-center px-4">
//               {/* Left Social */}
//               <div className="flex gap-3">
//                 <Link href="https://facebook.com" target="_blank">
//                   <FaFacebookF className="hover:text-primary transition w-4 h-4" />
//                 </Link>
//                 <Link href="https://twitter.com" target="_blank">
//                   <FaXTwitter className="hover:text-primary transition w-4 h-4" />
//                 </Link>
//                 <Link href="https://linkedin.com" target="_blank">
//                   <FaLinkedinIn className="hover:text-primary transition w-4 h-4" />
//                 </Link>
//                 <Link href="https://instagram.com" target="_blank">
//                   <FaInstagram className="hover:text-primary transition w-4 h-4" />
//                 </Link>
//               </div>
//               {/* Right Links */}
//               <div className="flex gap-4">
//                 <Link href="#">FAQ'S</Link>
//                 <Link href="#">Support</Link>
//                 <Link href="#">English</Link>
//               </div>
//             </div>
//           </div>

//           {/* Middle Bar → only desktop */}
//           <div
//             className={`w-full py-6 border-b transition-all duration-500 ${
//               isScrolled
//                 ? "bg-white border-gray-200"
//                 : "bg-transparent border-transparent"
//             }`}
//           >
//             <div className="custom-container mx-auto flex-col lg:flex-row justify-between items-center px-4 gap-6 hidden lg:flex">
//               {/* Logo (desktop only) */}
//               <Link href="/" className="flex items-center gap-3">
//                 <Image
//                   src="/anondo-universal-services-logo.png"
//                   alt="Logo"
//                   width={60}
//                   height={60}
//                   className="object-contain"
//                 />
//                 <div className="text-left">
//                   <h1 className="text-2xl font-bold text-primary">Anondo</h1>
//                   <p className="text-xs tracking-widest text-off_white">
//                     Universal Services
//                   </p>
//                 </div>
//               </Link>

//               {/* Info Section */}
//               <div className="flex gap-8 text-sm text-white">
//                 <div className="flex items-center gap-3">
//                   <FiClock className="text-primary text-3xl" />
//                   <div>
//                     <p className="font-semibold uppercase">WORKING HOURS</p>
//                     <p className="text-off_white">
//                       Monday - Sunday: 8.00am to 10.30pm
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <FiPhoneCall className="text-primary text-3xl" />
//                   <div>
//                     <p className="font-semibold uppercase">CALL US</p>
//                     <p className="text-off_white">+1-234-678-8900</p>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <FiMail className="text-primary text-3xl" />
//                   <div>
//                     <p className="font-semibold uppercase">MAIL US</p>
//                     <p className="text-off_white">bristol@support.com</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Navigation Menu */}
//           <nav
//             className={`relative z-50 transition-all duration-500 ${
//               isScrolled ? "bg-white" : "bg-transparent"
//             }`}
//           >
//             <div className="custom-container mx-auto flex justify-between items-center px-4 h-16">
//               {/* Mobile Logo (only mobile) */}
//               <Link href="/" className="flex items-center gap-2 lg:hidden">
//                 <Image
//                   src="/anondo-universal-services-logo.png"
//                   alt="Logo"
//                   width={45}
//                   height={45}
//                   className="object-contain"
//                 />
//                 <span className="text-lg font-bold text-primary">Anondo</span>
//               </Link>

//               {/* Menu Items (desktop only) */}
//               <ul className="hidden lg:flex gap-8 font-medium items-center">
//                 {menuItems.map((item, index) => (
//                   <li
//                     key={index}
//                     className="relative group cursor-pointer text-white hover:text-primary font-semibold transition"
//                   >
//                     <Link href={item.path}>{item.name}</Link>
//                     <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-500 group-hover:w-full"></span>
//                   </li>
//                 ))}
//               </ul>

//               {/* Inquiry Button (desktop only) */}
//               <div className="hidden lg:block">
//                 <Link href="/contact">
//                   <button className="bg-primary text-white px-6 py-2 font-bold hover:bg-secondary transition">
//                     Contact US
//                   </button>
//                 </Link>
//               </div>

//               {/* Mobile Menu Toggle */}
//               <button
//                 className="lg:hidden z-50 text-3xl text-primary"
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//               >
//                 {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
//               </button>
//             </div>
//           </nav>
//         </>
//       )}

//       {/* 🔹 Small Sticky Navbar (After Scroll) */}
//       <AnimatePresence>
//         {isScrolled && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0, transition: { duration: 0.6 } }}
//             transition={{ duration: 0.6, ease: "easeInOut" }}
//             className="bg-white shadow-md py-4 fixed top-0 left-0 w-full z-50"
//           >
//             <div className="custom-container mx-auto flex justify-between items-center px-4">
//               {/* Logo (all devices after scroll) */}
//               <Link href="/" className="flex items-center gap-2">
//                 <Image
//                   src="/anondo-universal-services-logo.png"
//                   alt="Logo"
//                   width={50}
//                   height={50}
//                   className="object-contain"
//                 />
//                 <div className="flex flex-col leading-tight">
//                   <span className="text-xl font-bold text-primary">
//                     Anondo
//                   </span>
//                   <span className="text-xs tracking-widest text-gray-500">
//                     Universal Services
//                   </span>
//                 </div>
//               </Link>

//               {/* Right Menu (desktop only) */}
//               <ul className="hidden lg:flex gap-8 font-medium items-center">
//                 {menuItems.map((item, index) => (
//                   <li
//                     key={index}
//                     className="relative group cursor-pointer hover:text-primary font-semibold transition"
//                   >
//                     <Link href={item.path}>{item.name}</Link>
//                     <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-500 group-hover:w-full"></span>
//                   </li>
//                 ))}
//               </ul>

//               {/* Inquiry Button (desktop only) */}
//               <div className="hidden lg:block">
//                 <Link href="/contact">
//                   <button className="bg-primary text-white px-6 py-2 font-bold hover:bg-secondary transition">
//                     Contact US
//                   </button>
//                 </Link>
//               </div>

//               {/* Mobile Menu Toggle */}
//               <button
//                 className="lg:hidden z-50 text-3xl text-primary"
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//               >
//                 {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* 🔹 Single Mobile Menu (Common) */}
//       <div
//         ref={menuRef}
//         className="lg:hidden fixed top-0 left-0 bg-white text-black z-40 overflow-y-auto flex flex-col justify-start"
//         style={{ width: 0, height: 0, opacity: 0 }}
//       >
//         <ul className="flex flex-col justify-start items-start px-6 space-y-8 pt-12 text-xl font-semibold w-full">
//           {menuItems.map((item, index) => (
//             <li key={index} className="relative group">
//               <Link
//                 href={item.path}
//                 className="block transition-colors duration-500 group-hover:text-primary"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {item.name}
//               </Link>
//               <span className="absolute bottom-0 left-0 h-[2px] bg-primary w-0 transition-all duration-500 group-hover:w-full"></span>
//             </li>
//           ))}
//         </ul>
//         <div className="px-6 py-10">
//           <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
//             <button className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-secondary transition">
//               Contact US
//             </button>
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }
