"use client";

import Image from "next/image";
import SectionHeader from "./SectionHeader";

const clientLogos = [
  "/logo/logo-1.jpg",
  "/logo/logo-2.jpg",
  "/logo/logo-3.jpg",
  "/logo/logo-4.jpg",
  "/logo/logo-5.png",
  "/logo/logo-6.jpg",
  "/logo/logo-7.png",
  "/logo/logo-8.png",
  "/logo/logo-9.png",
];

export default function OurClientSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          subtitle="Corporate Alliances"
          title="Trusted by Industry Leaders"
          details="Our commitment to precision, compliance, and service excellence has earned the confidence of established organizations across multiple sectors."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 items-center">
          {clientLogos.map((logo, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl border border-gray-100 
                         p-6 flex items-center justify-center 
                         transition-all duration-300
                         hover:shadow-lg hover:-translate-y-1"
            >
              <Image
                src={logo}
                alt={`Client Logo ${idx + 1}`}
                width={1200}
                height={1200}
                className="object-cover h-full w-full
                           transition-all duration-500
                           group-hover:opacity-100 
                           group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
