"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiMail, FiMapPin, FiPhoneCall } from "react-icons/fi";

const recentPosts = [
  {
    id: 1,
    title: "Inside Our State of the Art Training Academy",
    date: "06 June 2018",
    img: "/blogs/blog-1.jpg",
    slug: "training-academy-overview",
  },
  {
    id: 2,
    title: "Why Training Defines Reliable Security",
    date: "06 June 2018",
    img: "/blogs/blog-2.jpg",
    slug: "importance-of-security-training",
  },
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-gray-300">
      <div className="custom-container mx-auto py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo + About */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/anondo-universal-services-logo.jpg"
              alt="Logo"
              width={100}
              height={100}
              className="object-cover rounded-full"
            />
            <span className="text-sm text-white inline-block">
              <span className="text-primary text-xl font-bold block">
                Anondo
              </span>
              Universal Services
            </span>
          </div>
          <p className="text-sm leading-relaxed mb-6 text-off_white">
            Enthusiastically mesh long-term high-impact infrastructures
            vis-a-vis service. Leverage agile frameworks to provide a robust
            synopsis for high-level overviews.
          </p>
          <div className="flex space-x-3">
            <Link
              href="https://www.facebook.com/AnondoUniversalServices.ltd"
              target="_blank"
              className="group"
            >
              <div
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-primary/20 text-white  
    group-hover:bg-primary group-hover:text-white group-hover:border-primary 
    transform group-hover:-translate-y-1 group-hover:scale-110 
    transition-all duration-300 ease-in-out"
              >
                <FaFacebookF />
              </div>
            </Link>

            <Link
              href="https://www.linkedin.com/company/anondo-universal-services-ltd/"
              target="_blank"
              className="group"
            >
              <div
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-primary/20 text-white 
    group-hover:bg-primary group-hover:text-white group-hover:border-primary 
    transform group-hover:-translate-y-1 group-hover:scale-110 
    transition-all duration-300 ease-in-out"
              >
                <FaLinkedinIn />
              </div>
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-6 relative">
            Quick Links
            <span className="block w-10 h-[2px] bg-primary mt-2"></span>
          </h3>
          <ul className="space-y-3 text-sm text-off_white">
            <li>
              <Link href="/about" className="hover:text-white transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-white transition">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:text-white transition">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold text-lg mb-6 relative">
            Recent Posts
            <span className="block w-10 h-[2px] bg-primary mt-2"></span>
          </h3>
          <div className="space-y-6">
            {recentPosts.map((post) => (
              <Link
                href={`/blogs/${post.slug}`}
                key={post.id}
                className="flex items-center gap-4 group"
              >
                <div className="relative w-16 h-16 flex-shrink-0">
                  <Image
                    src={post.img}
                    alt={post.title}
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <div>
                  <p className="text-sm text-white group-hover:text-primary transition">
                    {post.title}
                  </p>
                  <span className="text-xs text-primary">{post.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold text-lg mb-6 relative">
            Contact Us
            <span className="block w-10 h-[2px] bg-primary mt-2"></span>
          </h3>
          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/20 text-primary">
                <FiMapPin className="text-lg" />
              </span>
              <p className="leading-relaxed text-white">
                Printers Building, 14th Floor, 5 Rajuk Avenue, Motijheel, 1000
                Dhaka
              </p>
            </div>

            <a
              href="tel:+8801313775333"
              className="flex items-center gap-3 transition hover:text-primary"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/20 text-primary">
                <FiPhoneCall className="text-lg" />
              </span>
              <span className="text-white">+880 1313775333</span>
            </a>

            <a
              href="mailto:anondo.ausl@gmail.com"
              className="flex items-center gap-3 transition hover:text-primary"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/20 text-primary">
                <FiMail className="text-lg" />
              </span>
              <span className="text-primary">anondo.ausl@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-400 py-6 text-center md:flex md:items-center md:justify-center max-w-7xl mx-auto px-6 lg:px-12">
        <p className="text-sm text-off_white">
          Copyright © {new Date().getFullYear()}{" "}
          <span className="text-primary font-semibold">
            Anondo Universal Services
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
