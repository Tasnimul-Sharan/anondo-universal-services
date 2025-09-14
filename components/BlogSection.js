"use client";
import Image from "next/image";
import Link from "next/link";
import { FaRegCalendarAlt, FaRegUser } from "react-icons/fa";

const blogs = [
  {
    id: 1,
    img: "/blogs/wellness/wellness-1.jpg",
    date: "July 2, 2023",
    author: "Admin",
    title: "Latest Security Techniques",
    excerpt:
      "The Love Boat promises something for every the beat of very best to make the...",
    slug: "latest-security-techniques",
  },
  {
    id: 2,
    img: "/blogs/nutrition/nutrition-1.jpg",
    date: "July 2, 2023",
    author: "Admin",
    title: "Tropic Port Aboard This Tiny Ship",
    excerpt:
      "The Love Boat promises something for every the beat of very best to make the...",
    slug: "tropic-port-aboard",
  },
  {
    id: 3,
    img: "/blogs/community/community-1.jpg",
    date: "July 2, 2023",
    author: "Admin",
    title: "Everybody Pulled His Weight",
    excerpt:
      "The Love Boat promises something for every the beat of very best to make the...",
    slug: "everybody-pulled-weight",
  },
];

export default function BlogSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 uppercase">
            Latest News
          </h2>
          <p className="text-gray-500 mt-2">
            The Love Boat promises something for everyone now to beat every of just one
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link href={`/blogs/${blog.slug}`}>
            <div key={blog.id} className="group rounded overflow-hidden">
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src={blog.img}
                  alt={blog.title}
                  fill
                  className="object-cover rounded transform transition-all duration-700 group-hover:scale-125"
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
            </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
