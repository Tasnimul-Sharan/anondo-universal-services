"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaClock,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
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
    { name: "Gallery", path: "/gallery" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="w-full">
      <div className="w-full bg-black text-white text-sm py-4">
        <div className="custom-container mx-auto flex justify-between items-center px-4">
          {/* Left Social */}
          <div className="flex gap-3">
            <Link href="https://facebook.com" target="_blank">
              <FaFacebookF className="hover:text-primary transition w-4 h-4" />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <FaXTwitter className="hover:text-primary transition w-4 h-4" />
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <FaLinkedinIn className="hover:text-primary transition w-4 h-4" />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <FaInstagram className="hover:text-primary transition w-4 h-4" />
            </Link>
          </div>
          {/* Right Links */}
          <div className="flex gap-4">
            <Link href="#">FAQ'S</Link>
            <Link href="#">Support</Link>
            <Link href="#">English</Link>
          </div>
        </div>
      </div>

      {/* 🔹 Middle Bar */}
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
              <h1 className="text-2xl font-bold">BRISTOL</h1>
              <p className="text-xs tracking-widest text-gray-600">
                SECURITY GUARD
              </p>
            </div>
          </Link>

          {/* Info Section */}
          <div className="flex flex-col sm:flex-row gap-8 text-sm">
            <div className="flex items-center gap-3">
              <FaClock className="text-white p-1 bg-primary text-3xl rounded-lg" />
              <div>
                <p className="font-semibold uppercase">WORKING HOURS</p>
                <p className="text-gray-600">Monday - Sunday: 8.00am to 10.30pm</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-white p-1 bg-primary text-3xl rounded-lg" />
              <div>
                <p className="font-semibold uppercase">CALL US</p>
                <p className="text-gray-600">+1-234-678-8900</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-white p-1 bg-primary text-3xl rounded-lg" />
              <div>
                <p className="font-semibold uppercase">MAIL US</p>
                <p className="text-gray-600">bristol@support.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Navigation Menu */}
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
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full transform duration-500"></span>
              </li>
            ))}
          </ul>

          {/* Inquiry Button */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <button className="bg-primary text-white px-6 py-2 font-bold hover:bg-secondary transition">
                GET FREE INQUIRY
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

        {/* Mobile Menu */}
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
                GET FREE INQUIRY
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
