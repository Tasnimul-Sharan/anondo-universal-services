"use client";
import {
  FaHome,
  FaBuilding,
  FaIndustry,
  FaMoneyBillWave,
  FaUsers,
  FaUserShield,
  FaUserTie,
} from "react-icons/fa";

const services = [
  {
    icon: <FaHome className="w-6 h-6" />,
    title: "Household Security",
    description:
      "Deployment of professional guards for residential houses, apartments, and housing societies. Guards trained to maintain safety and polite etiquette for a secure family environment.",
  },
  {
    icon: <FaBuilding className="w-6 h-6" />,
    title: "Office Security",
    description:
      "Round-the-clock vigilance for corporate offices. Access control, visitor screening, CCTV monitoring, and lobby/front-desk duty with professional behavior.",
  },
  {
    icon: <FaIndustry className="w-6 h-6" />,
    title: "Factory & Industrial Security",
    description:
      "Specialized in factory gate access, worker entry/exit, shift-change management, and goods-in-transit verification. Prepared for high-risk hours during opening and closing.",
  },
  {
    icon: <FaMoneyBillWave className="w-6 h-6" />,
    title: "Money Transfer Security",
    description:
      "Armed escorts for banks and institutions handling cash or assets. Guards trained in convoy protection, armed defense, and instant law enforcement coordination.",
  },
  {
    icon: <FaUsers className="w-6 h-6" />,
    title: "Event Management & Security",
    description:
      "Concerts, sports, political rallies, or corporate programs—trained teams handle crowd control, VIP protection, and emergency evacuation with CCTV monitoring.",
  },
  {
    icon: <FaUserShield className="w-6 h-6" />,
    title: "Armed & Unarmed Guards",
    description:
      "Licensed armed guards for high-risk areas, and unarmed guards skilled in martial arts & self-defense for general deployments.",
  },
  {
    icon: <FaUserTie className="w-6 h-6" />,
    title: "Bodyguard Services",
    description:
      "Close protection for VIPs, executives, and public figures. Trained in defensive driving, tactical positioning, and etiquette for professional interactions.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-100">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        {/* <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Services
        </h2>
        <p className="text-center max-w-3xl mx-auto text-gray-600 mb-14">
          Anondo Universal Security Services Ltd offers a comprehensive portfolio
          of solutions tailored to individuals, corporations, industries, and
          institutions. Every service is backed by rigorously trained personnel
          and strict quality control.
        </p> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border transition-all hover:shadow-xl bg-white transform duration-500"
            >
              <div className="flex items-center gap-3 mb-3 text-primary">
                <span className="p-3 border-2 border-primary rounded-lg">
                  {service.icon}
                </span>
                <h3 className="font-semibold text-lg">{service.title}</h3>
              </div>
              <p className="text-gray-600 text-sm">{service.description}</p>
              {/* <button className="mt-5 inline-block px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition">
                Learn More
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
