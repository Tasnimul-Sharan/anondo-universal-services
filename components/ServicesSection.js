"use client";
import {
  FaShieldAlt,
  FaUserSecret,
  FaBroadcastTower,
  FaEye,
  FaLock,
  FaExclamationTriangle,
} from "react-icons/fa";

const services = [
  {
    title: "Manned Guarding",
    icon: <FaShieldAlt className="w-5 h-5" />,
    description:
      "Trained and uniformed security guards ensuring 24/7 protection for residential, commercial, and industrial sites.",
  },
  {
    title: "VIP & Event Security",
    icon: <FaUserSecret className="w-5 h-5" />,
    description:
      "Specialized teams for VIP escort, event management, and emergency response with maximum professionalism.",
  },
  {
    title: "Surveillance & Monitoring",
    icon: <FaBroadcastTower className="w-5 h-5" />,
    description:
      "Advanced CCTV, alarm systems, and remote monitoring to keep your premises under constant watch.",
  },
  {
    title: "Access Control",
    icon: <FaEye className="w-5 h-5" />,
    description:
      "Biometric access, visitor management, and entry-point security to safeguard sensitive facilities.",
  },
  {
    title: "Corporate & Office Security",
    icon: <FaLock className="w-5 h-5" />,
    description:
      "Lobby management, asset protection, and disciplined staff to ensure a safe and secure work environment.",
  },
  {
    title: "Emergency Response",
    icon: <FaExclamationTriangle className="w-5 h-5" />,
    description:
      "Rapid response teams trained in fire safety, first aid, and crisis management for urgent situations.",
  },
];

export default function Services() {
  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-0">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="flex flex-col gap-10">
            {services.slice(0, 3).map((service, i) => (
              <div key={i} className="flex items-center gap-4 text-left">
                <div className="p-3 border-2 border-primary rounded-md text-primary">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{service.title}</h3>
                  <p className="text-gray-500 text-sm">
                    The Love Boat promises something for every the beat of just one drum.
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <img
              src="/services/security-guard.jpeg"
              alt="Security Guard"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="flex flex-col gap-10">
            {services.slice(3).map((service, i) => (
              <div key={i} className="flex items-center gap-4 text-left">
                <div className="p-3 border-2 border-primary rounded-md text-primary">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{service.title}</h3>
                  <p className="text-gray-500 text-sm">
                    The Love Boat promises something for every the beat of just one drum.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
