"use client";
import {
  FaHeadset,
  FaStar,
  FaTimesCircle,
  FaShieldAlt,
  FaUserTie,
  FaLock,
} from "react-icons/fa";
import SectionHeader from "./SectionHeader";

// const advantages = [
//   {
//     id: 1,
//     icon: <FaHeadset className="text-white text-xl" />,
//     title: "24/7 Dedicated Support",
//     desc: "Round-the-clock assistance and monitoring to keep you safe anytime, anywhere.",
//     img: "/security.jpg",
//   },
//   {
//     id: 2,
//     icon: <FaStar className="text-white text-xl" />,
//     title: "Trusted & Reliable",
//     desc: "A proven track record of excellence with trusted security solutions nationwide.",
//     img: "/security.jpg",
//   },
//   {
//     id: 3,
//     icon: <FaTimesCircle className="text-white text-xl" />,
//     title: "Rapid Response Team",
//     desc: "Quick mobilization of highly trained teams for emergencies and urgent situations.",
//     img: "/security.jpg",
//   },
//   {
//     id: 4,
//     icon: <FaShieldAlt className="text-white text-xl" />,
//     title: "Advanced Protection",
//     desc: "Cutting-edge technology and modern strategies to ensure complete security.",
//     img: "/security.jpg",
//   },
//   {
//     id: 5,
//     icon: <FaUserTie className="text-white text-xl" />,
//     title: "Professional Workforce",
//     desc: "Disciplined, well-trained personnel dedicated to safeguarding people and assets.",
//     img: "/security.jpg",
//   },
//   {
//     id: 6,
//     icon: <FaLock className="text-white text-xl" />,
//     title: "Guaranteed Confidentiality",
//     desc: "We maintain the highest level of privacy and integrity for every client.",
//     img: "/security.jpg",
//   },
// ];


const advantages = [
  {
    id: 1,
    icon: <FaHeadset className="text-white text-xl" />,
    title: "24/7 Dedicated Support",
    desc: "Round-the-clock assistance and monitoring to keep you safe anytime, anywhere.",
    img: "/advantage/support.jpg", // headset/supervisor type image
  },
  {
    id: 2,
    icon: <FaStar className="text-white text-xl" />,
    title: "Trusted & Reliable",
    desc: "A proven track record of excellence with trusted security solutions nationwide.",
    img: "/advantage/trusted.jpg", // award, star, handshake type image
  },
  {
    id: 3,
    icon: <FaTimesCircle className="text-white text-xl" />,
    title: "Rapid Response Team",
    desc: "Quick mobilization of highly trained teams for emergencies and urgent situations.",
    img: "/advantage/rapid-response.jpg", // police, guard, running team
  },
  {
    id: 4,
    icon: <FaShieldAlt className="text-white text-xl" />,
    title: "Advanced Protection",
    desc: "Cutting-edge technology and modern strategies to ensure complete security.",
    img: "/advantage/protection.jpg",
  },
  {
    id: 5,
    icon: <FaUserTie className="text-white text-xl" />,
    title: "Professional Workforce",
    desc: "Disciplined, well-trained personnel dedicated to safeguarding people and assets.",
    img: "/advantage/workforce.jpeg", // guards, officers in uniform
  },
  {
    id: 6,
    icon: <FaLock className="text-white text-xl" />,
    title: "Guaranteed Confidentiality",
    desc: "We maintain the highest level of privacy and integrity for every client.",
    img: "/advantage/confidential.jpg", // lock, privacy, document
  },
];


export default function AdvantagesSection() {
  return (
    <section className="bg-off_white py-20">
      <div className="max-w-7xl mx-auto text-center px-6 md:px-0">
        <SectionHeader
  subtitle="Dedicated to Excellence in Security"
  title="Our Advantages"
  details="We ensure your safety, privacy, and peace of mind with professional services and advanced solutions."
/>


        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((adv) => (
            <div
              key={adv.id}
              className="bg-white rounded overflow-hidden"
            >
              <div className="relative">
                <img
                  src={adv.img}
                  alt={adv.title}
                  className="w-full h-60 object-cover"
                />
                {/* Icon box overlapping image and content */}
                <div className="absolute -bottom-6 left-6 bg-primary w-14 h-14 flex items-center justify-center">
                  {adv.icon}
                </div>
              </div>

              {/* Text content */}
              <div className="p-6 pt-10 text-left">
                <h3 className="font-bold text-lg text-gray-900">
                  {adv.title}
                </h3>
                <p className="text-gray-600 mt-2">{adv.desc}</p>
                <a
                  href="#"
                  className="mt-4 inline-block text-sm font-semibold text-gray-900 hover:text-primary"
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