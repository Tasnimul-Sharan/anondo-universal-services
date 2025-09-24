"use client";
import SectionHeader from "./SectionHeader";
import {
  FaHome,
  FaBuilding,
  FaIndustry,
  FaCalendarAlt,
  FaUserShield,
} from "react-icons/fa";

const clients = [
  {
    icon: <FaHome className="text-primary size-8" />,
    title: "Residential Clients",
    desc: "Houses, apartments, and gated communities.",
  },
  {
    icon: <FaBuilding className="text-primary size-8" />,
    title: "Corporate Clients",
    desc: "Banks, offices, IT parks, and business centers.",
  },
  {
    icon: <FaIndustry className="text-primary size-8" />,
    title: "Industrial Clients",
    desc: "Factories, warehouses, and production facilities.",
  },
  {
    icon: <FaCalendarAlt className="text-primary size-8" />,
    title: "Event Clients",
    desc: "Sports arenas, festivals, rallies, and conferences.",
  },
  {
    icon: <FaUserShield className="text-primary size-8" />,
    title: "VIP & High-Risk",
    desc: "Executives, diplomats, celebrities, and politicians.",
  },
];

export default function ClientFocusSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          subtitle="Client Focus"
          title="Tailored Protection for Every Need"
          details="From residential homes to corporate offices, factories, and special events, we design security solutions that match each client’s unique requirements."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {clients.map((client, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl border border-gray-100
                         hover:border-primary hover:shadow-xl hover:-translate-y-2
                         transition-all transform duration-700 ease-in-out"
            >
              <div className="flex items-center gap-3 mb-3">
                {client.icon}
                <h3 className="font-semibold text-lg">{client.title}</h3>
              </div>
              <p className="text-gray-600">{client.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
