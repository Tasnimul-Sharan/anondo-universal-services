"use client";

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  {
    name: "SARA SMITH",
    role: "Event Manager",
    img: "/team/team1.jpg",
    socials: {
      facebook: "https://facebook.com/",
      linkedin: "https://linkedin.com/",
      instagram: "https://instagram.com/",
    },
  },
  {
    name: "NATTASHA",
    role: "Event Manager",
    img: "/team/team2.jpg",
    socials: {
      facebook: "https://facebook.com/",
      linkedin: "https://linkedin.com/",
      instagram: "https://instagram.com/",
    },
  },
  {
    name: "JOHN DOUE",
    role: "Event Manager",
    img: "/team/team3.jpg",
    socials: {
      facebook: "https://facebook.com/",
      linkedin: "https://linkedin.com/",
      instagram: "https://instagram.com/",
    },
  },
  {
    name: "SARA SANA",
    role: "Event Manager",
    img: "/team/team4.jpg",
    socials: {
      facebook: "https://facebook.com/",
      linkedin: "https://linkedin.com/",
      instagram: "https://instagram.com/",
    },
  },
];

export default function TeamSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Our Team</h2>
        <p className="text-gray-500 mt-2 max-w-xl mx-auto">
          Meet our professional event managers who ensure everything runs
          smoothly and securely.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 custom-container mx-auto px-6 md:px-0">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="rounded-2xl overflow-hidden bg-white"
          >
            <div className="relative group">
              <Image
                src={member.img}
                alt={member.name}
                width={400}
                height={500}
                className="w-full h-[350px] object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition duration-500">
                <a
                  href={member.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-gray-800 p-2 rounded-full hover:bg-primary hover:text-white transition"
                >
                  <FaFacebookF />
                </a>
                <a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-gray-800 p-2 rounded-full hover:bg-primary hover:text-white transition"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href={member.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-gray-800 p-2 rounded-full hover:bg-primary hover:text-white transition"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
