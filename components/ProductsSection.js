"use client";
import Image from "next/image";

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
];
// const products = [
//   {
//     id: 1,
//     name: "GUARD VEST",
//     img: "/products/guard-vest.png",
//   },
//   {
//     id: 2,
//     name: "METAL DETECTOR",
//     img: "/products/metal-detector.png",
//   },
//   {
//     id: 3,
//     name: "ARCHWAY SCANNER",
//     img: "/products/archway-scanner.png",
//   },
// ];

export default function ProductsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <div className="text-center mb-12">
          <span className="bg-primary text-white text-xs font-semibold px-4 py-1 uppercase tracking-wide inline-block mb-4">
            Our Equipment
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 uppercase">
            Our Security Products
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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