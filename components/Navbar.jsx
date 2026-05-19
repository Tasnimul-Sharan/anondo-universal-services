"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiClock, FiMail, FiMapPin, FiPhoneCall } from "react-icons/fi";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Clients", path: "/clients" },
    { name: "Services", path: "/services" },
    { name: "Training", path: "/training" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blogs", path: "/blogs" },
  ];

  const socialLinks = [
    {
      label: "Facebook",
      href: "https://www.facebook.com/AnondoUniversalServices.ltd",
      icon: FaFacebookF,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/anondo-universal-services-ltd/",
      icon: FaLinkedinIn,
    },
  ];

  const topbarItems = [
    {
      text: "Printers Building, 14th Floor, 5 Rajuk Avenue, Motijheel, 1000 Dhaka",
      icon: FiMapPin,
    },
    {
      text: "+880 1313775333",
      icon: FiPhoneCall,
      href: "tel:+8801313775333",
    },
    {
      text: "anondo.ausl@gmail.com",
      icon: FiMail,
      href: "mailto:anondo.ausl@gmail.com",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;

    const items = menu.querySelectorAll("li");

    if (isMenuOpen) {
      gsap.to(menu, {
        width: "100vw",
        height: "100vh",
        opacity: 1,
        duration: 0.65,
        ease: "power4.out",
      });
      gsap.fromTo(
        items,
        { x: "-100%", opacity: 0 },
        {
          x: "0%",
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "power4.out",
        },
      );
    } else {
      gsap.to(menu, {
        width: 0,
        height: 0,
        opacity: 0,
        duration: 0.45,
        ease: "power4.inOut",
      });
    }
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-sm">
      <div
        className={`hidden w-full overflow-hidden bg-secondary text-white transition-[max-height,opacity,transform] duration-500 ease-in-out lg:block ${
          isScrolled
            ? "pointer-events-none max-h-0 -translate-y-full opacity-0"
            : "max-h-24 translate-y-0 opacity-100"
        }`}
      >
        <div className="mx-auto custom-container flex min-h-11 w-full items-center justify-between gap-5 px-6 py-4 text-[12px] font-normal leading-none xl:text-[13px]">
          <div className="flex min-w-0 flex-1 flex-wrap items-center gap-x-5 gap-y-2 2xl:flex-nowrap">
            {topbarItems.map(({ text, icon: Icon, href }) => {
              const content = (
                <>
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white/10 text-primary">
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  <span className="whitespace-nowrap text-white/95">
                    {text}
                  </span>
                </>
              );

              return href ? (
                <a
                  key={text}
                  href={href}
                  className="flex min-w-0 items-center gap-2 text-base transition hover:text-primary"
                >
                  {content}
                </a>
              ) : (
                <div key={text} className="flex min-w-0 items-center gap-2 text-sm">
                  {content}
                </div>
              );
            })}
          </div>

          <div className="flex shrink-0 items-center gap-2 pl-2">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                aria-label={label}
                className="flex h-8 w-8 items-center justify-center rounded-md border border-white/20 bg-white/10 text-white transition-all duration-300 hover:border-primary hover:bg-primary"
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <nav
        className={`w-full border-b border-gray-100 bg-white transition-all duration-500 ease-in-out ${
          isScrolled ? "py-3 shadow-[0_12px_32px_rgba(15,23,42,0.08)]" : "py-4"
        }`}
      >
        <div className="custom-container mx-auto flex w-full items-center justify-between gap-8 px-6">
          <Link href="/" className="group flex shrink-0 items-center gap-3">
            <span className="flex h-16 w-20 items-center justify-center rounded-md bg-white shadow-sm transition duration-500">
              <Image
                src="/anondo-universal-services-logo.jpg"
                alt="Anondo Universal Services Logo"
                width={1200}
                height={1200}
                className="h-20 w-20 object-cover"
                priority
              />
            </span>
            <div className="leading-tight">
              <span className="block text-[26px] font-extrabold leading-none text-primary">
                Anondo
              </span>
              <span className="mt-1 block text-sm font-medium leading-none text-gray-600">
                Universal Services
              </span>
            </div>
          </Link>

          <div className="hidden items-center justify-end gap-6 lg:flex">
            <ul className="flex items-center gap-5 font-medium xl:gap-7">
              {menuItems.map((item) => (
                <li
                  key={item.path}
                  className="group relative cursor-pointer whitespace-nowrap py-2 text-[15px] font-semibold text-gray-900 transition hover:text-primary"
                >
                  <Link href={item.path}>{item.name}</Link>
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded bg-primary transition-all duration-500 group-hover:w-full" />
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="whitespace-nowrap rounded-md bg-primary px-5 py-3 text-sm font-bold text-white shadow-[0_10px_24px_rgba(242,140,40,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary hover:shadow-[0_12px_26px_rgba(30,115,190,0.22)]"
            >
              Contact US
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            className="text-3xl text-primary lg:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </nav>

      <div
        ref={menuRef}
        className="fixed left-0 top-0 z-40 flex flex-col overflow-y-auto bg-white text-black lg:hidden"
        style={{ width: 0, height: 0, opacity: 0 }}
      >
        <div className="flex justify-end px-6 py-6">
          <button
            type="button"
            aria-label="Close menu"
            className="text-3xl text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            <HiOutlineX />
          </button>
        </div>

        <ul className="flex w-full flex-col space-y-6 px-6 text-lg font-semibold">
          {menuItems.map((item) => (
            <li key={item.path} className="group relative">
              <Link
                href={item.path}
                className="block py-2 transition-all duration-300 group-hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-full" />
            </li>
          ))}
        </ul>

        <div className="flex min-h-full flex-col p-6">
          <div className="border-t pt-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-2 text-primary">
                  <FiMapPin className="text-xl" />
                </div>
                <div>
                  <p className="font-semibold">Our Address</p>
                  <p className="mt-0.5 text-sm text-gray-600">
                    Printers Building, 14th Floor, 5 Rajuk Avenue, Motijheel,
                    1000 Dhaka
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-2 text-primary">
                  <FiPhoneCall className="text-xl" />
                </div>
                <div>
                  <p className="font-semibold">Call Us</p>
                  <a
                    href="tel:+8801313775333"
                    className="mt-0.5 block text-sm text-gray-600"
                  >
                    +880 1313775333
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-2 text-primary">
                  <FiMail className="text-xl" />
                </div>
                <div>
                  <p className="font-semibold">Mail Us</p>
                  <a
                    href="mailto:anondo.ausl@gmail.com"
                    className="mt-0.5 block text-sm text-gray-600"
                  >
                    anondo.ausl@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="mt-6 block w-full rounded-md bg-primary py-3 text-center font-bold text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact US
            </Link>

            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  aria-label={label}
                  className="rounded border p-2 text-gray-700 transition hover:border-primary hover:text-primary"
                >
                  <Icon />
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-auto pt-6 text-xs text-gray-400">
            Copyright {new Date().getFullYear()} Anondo Universal Services
          </div>
        </div>
      </div>
    </header>
  );
}
