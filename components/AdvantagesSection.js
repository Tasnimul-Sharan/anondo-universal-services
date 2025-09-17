"use client";
import { FaHeadset, FaStar, FaTimesCircle, FaShieldAlt, FaUserTie, FaLock } from "react-icons/fa";

const advantages = [
  {
    id: 1,
    icon: <FaHeadset className="text-white text-xl" />,
    title: "24/7 Constant Support",
    desc: "The Love Boat promises something for the beat every of just one drum.",
    img: "/security.jpg",
  },
  {
    id: 2,
    icon: <FaStar className="text-white text-xl" />,
    title: "Trusted Security",
    desc: "Your safety is always our top priority with professional guards.",
    img: "/security.jpg",
  },
  {
    id: 3,
    icon: <FaTimesCircle className="text-white text-xl" />,
    title: "Quick Response",
    desc: "Fast action and instant response to any situation or request.",
    img: "/security.jpg",
  },
  {
    id: 4,
    icon: <FaShieldAlt className="text-white text-xl" />,
    title: "Advanced Protection",
    desc: "Modern equipment and strategies to ensure top-level security.",
    img: "/security.jpg",
  },
  {
    id: 5,
    icon: <FaUserTie className="text-white text-xl" />,
    title: "Professional Team",
    desc: "Highly trained staff dedicated to providing the best services.",
    img: "/security.jpg",
  },
  {
    id: 6,
    icon: <FaLock className="text-white text-xl" />,
    title: "Complete Privacy",
    desc: "We respect and maintain confidentiality in every case.",
    img: "/security.jpg",
  },
];

export default function AdvantagesSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto text-center px-6 md:px-0">
        <h2 className="text-white text-3xl md:text-4xl font-bold uppercase">
          Our Advantages
        </h2>
        <p className="text-gray-300 mt-2">
          The Love Boat promises something for everyone now to beat every of just one
        </p>

        {/* Grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((adv) => (
            <div
              key={adv.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative">
                <img
                  src={adv.img}
                  alt={adv.title}
                  className="w-full h-60 object-cover"
                />
                <div className="absolute -bottom-6 left-6 bg-yellow-400 w-12 h-12 flex items-center justify-center shadow-md">
                  {adv.icon}
                </div>
              </div>
              <div className="p-6 text-left">
                <h3 className="font-bold text-lg text-gray-900">
                  {adv.title}
                </h3>
                <p className="text-gray-600 mt-2">{adv.desc}</p>
                <a
                  href="#"
                  className="mt-4 inline-block text-sm font-semibold text-gray-900 hover:text-yellow-500"
                >
                  READ MORE →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
