"use client";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

const products = [
  {
    id: 1,
    name: "GUARD VEST",
    img: "/products/security-guard.jpg",
  },
  {
    id: 2,
    name: "METAL DETECTOR",
    img: "/products/security-guard.jpg",
  },
  {
    id: 3,
    name: "ARCHWAY SCANNER",
    img: "/products/security-guard.jpg",
  },
  {
    id: 4,
    name: "ENTRY CONTROL",
    img: "/products/security-guard.jpg",
  },
];

export default function ProductsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="custom-container mx-auto">

<SectionHeader
  subtitle="Our Equipment"
  title="Our Security Products"
  details="Explore our wide range of advanced security products designed to ensure safety, reliability, and peace of mind for your home and business."
/>



        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-gray-200 hover:shadow-lg transition-all transform duration-500 rounded p-6 flex flex-col items-center text-center"
            >
              <div className="relative w-full mb-6 flex items-center justify-center">
                <Image
                  src={product.img}
                  alt={product.name}
                  width={800}
                  height={600}
                  className="object-cover w-full h-full rounded"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 uppercase relative inline-block">
                {product.name}
                <span className="block w-10 h-[2px] bg-primary mx-auto mt-2"></span>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}