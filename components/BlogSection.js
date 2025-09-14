"use client";
import Image from "next/image";
import { FaArrowRight, FaRegUser } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import Button from "./Button";

const blogs = [
  {
    id: 1,
    img: "/blogs/wellness/wellness-1.jpg",
    date: "05 AUGUST, 2025",
    author: "BY ANONDO BAARI",
    title: "The Healing Power of Yoga and Meditation for Seniors",
    slug: "healing-power-of-yoga",
  },
  {
    id: 2,
    img: "/blogs/nutrition/nutrition-1.jpg",
    date: "10 AUGUST, 2025",
    author: "BY ANONDO BAARI",
    title: "Nutrition After 60: Building Strength Through Food",
    slug: "nutrition-after-60",
  },
  {
    id: 3,
    img: "/blogs/community/community-1.jpg",
    date: "15 AUGUST, 2025",
    author: "BY ANONDO BAARI",
    title: "Why Community Living Enhances Happiness in Aging",
    slug: "community-living-happiness",
  },
];

// Framer Motion animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function BlogSection() {
  return (
    <section className="py-20 bg-white relative">
      <div className="custom-container mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="uppercase text-primary tracking-[0.15em] text-sm font-medium">
              Latest News
            </p>
            <h2 className="md:text-4xl text-3xl font-bold text-gray-900 mt-2">
              Our Insights & Articles
            </h2>
          </div>
          <Link href="/blogs">
            <Button variant="primary" size="md" className="animate-ripple">
              See All
            </Button>
          </Link>
        </div>

        {/* Blog Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              variants={cardVariants}
              // whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="rounded-lg overflow-hidden group"
            >
              {/* Image */}
              <div className="relative w-full h-64 overflow-hidden rounded-t-lg">
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={blog.img}
                    alt={blog.title}
                    fill
                    className="object-cover"
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

                <Link href={`/blogs/${blog.slug}`}>
                  <motion.button
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.3 }}
                    className="relative inline-flex items-center gap-1 text-primary text-sm font-semibold transition-colors duration-300"
                  >
                    Read More <FaArrowRight />
                    <span className="hover-line absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full"></span>
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
