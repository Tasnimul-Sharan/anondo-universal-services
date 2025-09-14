"use client";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white relative">
      <div className="absolute inset-0 bg-center bg-no-repeat opacity-20 pointer-events-none">
        <Image
          src="/footer-background.jpg"
          alt="Background Pattern"
          fill
          className="object-cover"
        />
      </div>

      <div className="custom-container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
        <div>
          <div className="bg-white px-4 py-4 rounded-lg w-48 h-28 mb-4">
            <Image
              src="/anondo-baari-logo.png"
              width={1200}
              height={1200}
              alt="Anondo Baari Logo"
              className="object-cover w-full h-full z-10"
            />
          </div>

          <p className="text-sm leading-relaxed text-gray-200 mb-4">
            A Sanctuary of Wellness and Dignity for Senior Citizens
          </p>

          <div className="flex gap-3">
            {[
              { Icon: FaFacebookF, link: "https://facebook.com/anondobari" },
              { Icon: FaXTwitter, link: "https://twitter.com/anondobari" },
              { Icon: FaInstagram, link: "https://instagram.com/anondobari" },
              {
                Icon: FaLinkedinIn,
                link: "https://linkedin.com/company/anondobari",
              },
            ].map(({ Icon, link }, idx) => (
              <a
                key={idx}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary p-3 rounded-full hover:bg-white hover:text-primary transition-all transform duration-500"
              >
                <Icon className="md:text-lg text-base" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="md:text-xl text-lg font-semibold mb-4">Explore</h3>
          <ul className="space-y-3 md:text-base text-sm text-gray-200">
            {[
              { name: "About", href: "/about" },
              { name: "Services", href: "/services" },
              { name: "Gallery", href: "/gallery" },
              { name: "Blogs", href: "/blogs" },
              { name: "Contact", href: "/contact" },
            ].map(({ name, href }, idx) => (
              <li key={idx}>
                <Link href={href} className="relative group inline-block">
                  <span className="hover:text-primary transition-all">
                    {name}
                  </span>
                  <span className="hover-line"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="md:text-xl text-lg font-semibold mb-4">
            Recent Posts
          </h3>
          <ul className="space-y-4 md:text-base text-sm text-gray-200">
            <li>
              <Link
                href="/blogs/staying-fit-after-60"
                className="hover:text-primary cursor-pointer transition-all transform duration-500"
              >
                Staying Fit After 60: Gentle Exercises...
                <span className="text-xs block mt-1">August 20, 2025</span>
              </Link>
            </li>
            <li>
              <Link
                href="/blogs/art-music-therapy"
                className="hover:text-primary cursor-pointer transition-all transform duration-500"
              >
                Healing Through Art and Music Therapy
                <span className="text-xs block mt-1">August 25, 2025</span>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="md:text-xl text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 md:text-base text-sm text-gray-200">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-primary mt-1 text-sm md:text-xl" />
              <span>
                Printers Building, 12-14th Floor, 5 Rajuk Avenue, Motijheel,
                Dhaka
              </span>
            </li>

            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-primary text-sm md:text-xl" />
              <a
                href="tel:+8801234567890"
                className="hover:text-primary transition-colors transform duration-500"
              >
                +880 1313775333
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-primary text-sm md:text-xl" />
              <a
                href="mailto:info@anondobari.com"
                className="hover:text-primary transition-colors transform duration-500"
              >
                info@anondobari.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-600 custom-container mx-auto py-6 text-center text-sm text-gray-400">
        Copyright © {new Date().getFullYear()} by{" "}
        <span className="text-primary">Anondo Baari</span>. All rights reserved.
      </div>
    </footer>
  );
}
