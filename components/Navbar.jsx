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
          {/* <div className="w-full bg-secondary text-white text-sm py-4"> */}
          <div className="hidden lg:block w-full bg-secondary text-white text-sm py-4">
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
                  className="w-8 h-8 flex items-center justify-center rounded border border-gray-400 hover:bg-primary hover:border-transparent hover:text-white transition-all transform duration-500"
                >
                  <FaFacebookF className="w-4 h-4" />
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  className="w-8 h-8 flex items-center justify-center rounded border border-gray-400 hover:bg-primary hover:border-transparent hover:text-white transition-all transform duration-500"
                >
                  <FaXTwitter className="w-4 h-4" />
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  className="w-8 h-8 flex items-center justify-center rounded border border-gray-400 hover:bg-primary hover:border-transparent hover:text-white transition-all transform duration-500"
                >
                  <FaLinkedinIn className="w-4 h-4" />
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  className="w-8 h-8 flex items-center justify-center rounded border border-gray-400 hover:bg-primary hover:border-transparent hover:text-white transition-all transform duration-500"
                >
                  <FaInstagram className="w-4 h-4" />
                </Link>
              </div>

              {/* Right Links */}
            </div>
          </div>

          <div className="hidden lg:block w-full bg-white py-4 border-b border-gray-200">
            <div className="custom-container mx-auto flex flex-col lg:flex-row justify-between items-center px-4 gap-6">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src="/anondo-universal-services-logo.jpg"
                  alt="Logo"
                  width={60}
                  height={60}
                  className="object-cover"
                />
                <div className="text-left">
                  <h1 className="text-2xl font-bold text-primary">Anondo</h1>
                  <p className="text-xs tracking-widest text-gray-600">
                    Universal Services
                  </p>
                </div>
              </Link>

              {/* Info Section */}
              <div className="hidden lg:flex flex-col sm:flex-row gap-8 text-sm">
                {/* Working Hours */}
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 text-primary p-3 rounded-full">
                    <FiClock className="text-2xl" />
                  </div>
                  <div>
                    <p className="font-semibold">Working Hours</p>
                    <p className="text-gray-600">
                      Saturday - Thursday: 10.00am to 7.00pm
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 text-primary p-3 rounded-full">
                    <FiPhoneCall className="text-2xl" />
                  </div>
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <p className="text-gray-600">+880 1313775333</p>
                  </div>
                </div>

                {/* Mail */}
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 text-primary p-3 rounded-full">
                    <FiMail className="text-2xl" />
                  </div>
                  <div>
                    <p className="font-semibold">Mail Us</p>
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
            <div className="custom-container mx-auto hidden lg:flex justify-between items-center h-16">
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

              <div className="hidden lg:block">
                <Link href="/contact">
                  <button className="bg-primary text-white px-6 py-2 rounded font-bold hover:bg-secondary transition-all transform duration-500">
                    Contact US
                  </button>
                </Link>
              </div>

            </div>
            <div className="custom-container mx-auto flex justify-between items-center py-6 lg:hidden ">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/anondo-universal-services-logo.jpg"
                  alt="Logo"
                  width={60}
                  height={60}
                  className="object-cover transition-all duration-500"
                />
                <div className="flex flex-col leading-tight">
                  <span className="text-2xl font-bold text-primary transition-all duration-500">
                    Anondo
                  </span>
                  <span className="text-xs tracking-widest text-gray-600 transition-all duration-500">
                    Universal Services
                  </span>
                </div>
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                className=" z-50 text-3xl text-primary"
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
            <div className="custom-container mx-auto flex justify-between items-center">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/anondo-universal-services-logo.jpg"
                  alt="Logo"
                  width={60}
                  height={60}
                  className="object-cover transition-all duration-500"
                />
                <div className="flex flex-col leading-tight">
                  <span className="text-2xl font-bold text-primary transition-all duration-500">
                    Anondo
                  </span>
                  <span className="text-xs tracking-widest text-gray-600 transition-all duration-500">
                    Universal Services
                  </span>
                </div>
              </Link>
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

              <div className="hidden lg:block">
                <Link href="/contact">
                  <button className="bg-primary text-white px-6 py-2 font-bold rounded hover:bg-secondary transition-all transform duration-500">
                    Contact US
                  </button>
                </Link>
              </div>
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

      <div
        ref={menuRef}
        className="lg:hidden fixed top-0 left-0 bg-white text-black z-40 overflow-y-auto flex flex-col"
        style={{ width: 0, height: 0, opacity: 0 }}
      >
        <div className="flex justify-end px-6 py-6">
          <button
            className="text-3xl text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            <HiOutlineX />
          </button>
        </div>

        <ul className="flex flex-col px-6 space-y-6 text-lg font-semibold w-full">
          {menuItems.map((item, index) => (
            <li key={index} className="relative group">
              <Link
                href={item.path}
                className="block py-2 transition-all duration-500 group-hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
              <span className="absolute bottom-0 left-0 h-[2px] bg-primary w-0 transition-all duration-500 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        <div className="p-6 flex flex-col min-h-full">
          <div className="border-t pt-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 text-primary p-2 rounded-full">
                  <FiClock className="text-xl" />
                </div>
                <div>
                  <p className="font-semibold">Working Hours</p>
                  <p className="text-sm text-gray-600">
                    Sat - Thu: 10.00am to 7.00pm
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary/10 text-primary p-2 rounded-full">
                  <FiPhoneCall className="text-xl" />
                </div>
                <div>
                  <p className="font-semibold">Call Us</p>
                  <a
                    href="tel:+8801313775333"
                    className="text-sm text-gray-600 block mt-0.5"
                  >
                    +880 1313775333
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary/10 text-primary p-2 rounded-full">
                  <FiMail className="text-xl" />
                </div>
                <div>
                  <p className="font-semibold">Mail Us</p>
                  <a
                    href="mailto:contact@anondouniversalserviceslimited.com"
                    className="text-sm text-gray-600 block mt-0.5"
                  >
                    contact@anondouniversalserviceslimited.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full bg-primary text-white py-3 rounded-md font-bold">
                  Contact US
                </button>
              </Link>
            </div>

            <div className="mt-6 flex gap-3">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="p-2 border rounded"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="p-2 border rounded"
              >
                <FaXTwitter />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="p-2 border rounded"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="p-2 border rounded"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>

          <div className="mt-auto pt-6 text-xs text-gray-400">
            © {new Date().getFullYear()} Anondo Universal Services
          </div>
        </div>
      </div>
    </header>
  );
}
