"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const recentPosts = [
  {
    id: 1,
    title: "What Planning Process Needs?",
    date: "06 June 2018",
    img: "/blogs/blog-1.jpg",
    slug: "planning-process",
  },
  {
    id: 2,
    title: "Tips To Move Your Project More Forward.",
    date: "06 June 2018",
    img: "/blogs/blog-2.jpg",
    slug: "move-project-forward",
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
  <span className="text-primary text-xl font-bold block">Anondo</span>
  Universal Services
</span>

          </div>
          <p className="text-sm leading-relaxed mb-6">
            Enthusiastically mesh long-term high-impact infrastructures vis-a-vis
            service. Leverage agile frameworks to provide a robust synopsis for
            high-level overviews.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 text-gray-400">
            <Link href="#"><FaTwitter className="hover:text-white transition" /></Link>
            <Link href="#"><FaFacebookF className="hover:text-white transition" /></Link>
            <Link href="#"><FaLinkedinIn className="hover:text-white transition" /></Link>
            <Link href="#"><FaInstagram className="hover:text-white transition" /></Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-6 relative">
            Quick Links
            <span className="block w-10 h-[2px] bg-primary mt-2"></span>
          </h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/about" className="hover:text-white transition">About</Link></li>
            <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
            <li><Link href="/portfolio" className="hover:text-white transition">Gallery</Link></li>
            <li><Link href="/blogs" className="hover:text-white transition">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        {/* Recent Posts */}
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
          <p className="text-sm mb-2">
            Phone: <span className="text-white">+987 654 3210</span>
          </p>
          <p className="text-sm">
            Email:{" "}
            <span className="text-primary">security@support.com</span>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-400 py-6 text-center md:flex md:items-center md:justify-between max-w-7xl mx-auto px-6 lg:px-12">
        <p className="text-sm">
          Copyright © 2025{" "}
          <span className="text-primary font-semibold">Anondo
Universal Services</span>. All
          rights reserved.
        </p>
        <div className="flex items-center gap-6 text-sm mt-4 md:mt-0">
          <Link href="/privacy-policy" className="hover:text-white transition">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-white transition">
            Terms & Condition
          </Link>
        </div>
      </div>
    </footer>
  );
}
