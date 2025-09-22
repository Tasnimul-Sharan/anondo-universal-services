"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaRegCalendarAlt, FaRegUser } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

const blogs = [
  {
    id: 1,
    img: "/blogs/security/security-1.jpg",
    date: "September 20, 2025",
    author: "Admin",
    title: "Latest Security Techniques",
    excerpt:
      "Explore the latest advancements in security technology and strategies that ensure maximum protection for your business and property.",
    slug: "latest-security-techniques",
  },
  {
    id: 2,
    img: "/blogs/security/security-2.jpg",
    date: "September 15, 2025",
    author: "Admin",
    title: "Effective Risk Management Strategies",
    excerpt:
      "Learn how professional security services implement risk assessment and management to prevent potential threats effectively.",
    slug: "risk-management-strategies",
  },
  {
    id: 3,
    img: "/blogs/security/security-3.jpg",
    date: "September 10, 2025",
    author: "Admin",
    title: "Ensuring Safety in Corporate Events",
    excerpt:
      "Understand best practices for event security, from crowd management to VIP protection, ensuring a safe and smooth experience.",
    slug: "corporate-event-security",
  },
  {
    id: 4,
    img: "/blogs/security/security-4.jpg",
    date: "September 5, 2025",
    author: "Admin",
    title: "Residential Security: Protecting Your Home",
    excerpt:
      "Tips and strategies for securing residential properties, including surveillance systems, trained personnel, and emergency protocols.",
    slug: "residential-security-tips",
  },
  {
    id: 5,
    img: "/blogs/security/security-5.jpg",
    date: "September 1, 2025",
    author: "Admin",
    title: "Industrial Site Security Best Practices",
    excerpt:
      "A comprehensive guide to maintaining safety and operational continuity in factories, warehouses, and large industrial facilities.",
    slug: "industrial-site-security",
  },
  {
    id: 6,
    img: "/blogs/security/security-6.jpg",
    date: "August 28, 2025",
    author: "Admin",
    title: "Technology in Modern Security Services",
    excerpt:
      "How CCTV, biometric access, alarm systems, and AI monitoring are transforming security operations in Bangladesh.",
    slug: "technology-in-security",
  },
];

export default function BlogPageSection() {
  return (
    <section className="py-20 bg-white relative">
      <div className="custom-container mx-auto">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog) => {
            const [hovered, setHovered] = useState(false);

            return (
              <div
                key={blog.id}
                className="rounded-lg overflow-hidden group"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <div className="relative w-full h-96 overflow-hidden rounded-t-lg">
                  <motion.div
                    animate={{ scale: hovered ? 1.2 : 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={blog.img}
                      alt={blog.title}
                      width={1200}
                      height={800}
                      className="object-cover w-full h-full"
                    />
                  </motion.div>
                </div>
                <div className="bg-white relative z-0 mx-4 rounded-md px-6 py-6 -mt-10">
                  <span className="bg-primary bg-opacity-10 text-primary font-semibold px-3 py-1 text-xs uppercase inline-block mb-4">
                    {blog.date}
                  </span>
                  <div className="flex items-center gap-4 text-gray-500 text-xs mb-3">
                    <span className="flex items-center gap-1">
                      <FaRegUser className="text-gray-400" /> {blog.author}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {blog.title}
                  </h3>

                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="relative inline-flex items-center gap-1 text-primary text-sm font-semibold transition-all transform duration-500 group"
                  >
                    Read More <FaArrowRight />
                    <span className="hover-line absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full"></span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <Link href={`/blogs/${blog.slug}`}>
            <div key={blog.id} className="group rounded overflow-hidden">
              <div className="relative w-full h-96 overflow-hidden">
                <Image
                  src={blog.img}
                  alt={blog.title}
                  fill
                  className="object-cover rounded transform transition-all duration-1000 group-hover:scale-125"
                />
              </div>
              <div className="mt-4">
                <div className="flex items-center gap-4 text-gray-500 text-sm mb-2">
                  <span className="flex items-center gap-2">
                    <FaRegCalendarAlt className="text-primary" /> {blog.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaRegUser className="text-primary" /> By: {blog.author}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-secondary mb-2 hover:text-primary transition-colors duration-500">
                  {blog.title}     
                </h3>

                <p className="text-gray-600 text-sm">{blog.excerpt}</p>
              </div>
               <div
                    href={`/blogs/${blog.slug}`}
                    className="relative mt-2 inline-flex items-center gap-1 text-primary text-sm font-semibold transition-all transform duration-500 group"
                  >
                    Read More <FaArrowRight />
                    <span className="hover-line absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full"></span>
                  </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
