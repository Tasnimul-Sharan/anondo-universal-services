"use client";
import {
  FaShieldAlt,
  FaUserSecret,
  FaBroadcastTower,
  FaEye,
  FaLock,
  FaExclamationTriangle,
  FaHome,
  FaBuilding,
  FaIndustry,
  FaMoneyBillWave,
  FaCalendarCheck,
  FaUserShield,
  FaUserTie,
} from "react-icons/fa";
import SectionHeader from "./SectionHeader";

// const services = [
//   {
//     title: "Manned Guarding",
//     icon: <FaShieldAlt className="w-5 h-5" />,
//     description:
//       "Trained and uniformed security guards ensuring 24/7 protection for residential, commercial, and industrial sites.",
//   },
//   {
//     title: "VIP & Event Security",
//     icon: <FaUserSecret className="w-5 h-5" />,
//     description:
//       "Specialized teams for VIP escort, event management, and emergency response with maximum professionalism.",
//   },
//   {
//     title: "Surveillance & Monitoring",
//     icon: <FaBroadcastTower className="w-5 h-5" />,
//     description:
//       "Advanced CCTV, alarm systems, and remote monitoring to keep your premises under constant watch.",
//   },
//   {
//     title: "Access Control",
//     icon: <FaEye className="w-5 h-5" />,
//     description:
//       "Biometric access, visitor management, and entry-point security to safeguard sensitive facilities.",
//   },
//   {
//     title: "Corporate & Office Security",
//     icon: <FaLock className="w-5 h-5" />,
//     description:
//       "Lobby management, asset protection, and disciplined staff to ensure a safe and secure work environment.",
//   },
//   {
//     title: "Emergency Response",
//     icon: <FaExclamationTriangle className="w-5 h-5" />,
//     description:
//       "Rapid response teams trained in fire safety, first aid, and crisis management for urgent situations.",
//   },
// ];

const services = [
  {
    title: "Household Security",
    icon: <FaHome className="w-5 h-5" />,
    description:
      "Deployment of professional guards for residential houses, apartments, and housing societies. Trained to maintain safety with polite etiquette.",
  },
  {
    title: "Office Security",
    icon: <FaBuilding className="w-5 h-5" />,
    description:
      "Round-the-clock vigilance for corporate offices. Guards handle access control, visitor screening, and CCTV monitoring with professionalism.",
  },
  {
    title: "Factory & Industrial Security",
    icon: <FaIndustry className="w-5 h-5" />,
    description:
      "Specialized factory guards trained in access control, theft prevention, shift-change management, and goods verification.",
  },
  {
    title: "Money Transfer Security",
    icon: <FaMoneyBillWave className="w-5 h-5" />,
    description:
      "Armed escorts for safe transfer of cash and valuables. Guards trained in convoy protection and high-risk vigilance.",
  },
  {
    title: "Event Management & Security",
    icon: <FaCalendarCheck className="w-5 h-5" />,
    description:
      "Security for concerts, rallies, and corporate events. Guards trained in crowd control, VIP protection, and evacuation protocols.",
  },
  {
    title: "Armed & Unarmed Guards",
    icon: <FaUserShield className="w-5 h-5" />,
    description:
      "Deployment of licensed armed guards and unarmed guards skilled in martial arts and self-defence, based on client needs.",
  },
  {
    title: "Bodyguard Services",
    icon: <FaUserTie className="w-5 h-5" />,
    description:
      "Close protection for VIPs, executives, and public figures. Bodyguards trained in tactical positioning and emergency response.",
  },
];

export default function Services() {
  return (
    <section className="relative py-20 bg-white">
      <div className="custom-container mx-auto">
        <SectionHeader
          subtitle="Our Services"
          title="Professional Security Solutions"
          details="We deliver tailored security and protection services with highly trained personnel and modern technology to safeguard people, assets, and businesses."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="flex flex-col gap-10">
            {services.slice(0, 3).map((service, i) => (
              <div key={i} className="flex items-start gap-4 text-left">
                <div className="p-3 border-2 border-primary rounded-md text-primary">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{service.title}</h3>
                  <p className="text-gray-500 text-sm mt-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <img
              src="/services/security-guard.jpeg"
              alt="Security Guard"
              className="w-full h-full object-cover rounded-md shadow-lg"
            />
          </div>

          <div className="flex flex-col gap-10">
            {services.slice(3).map((service, i) => (
              <div key={i} className="flex items-start gap-4 text-left">
                <div className="p-3 border-2 border-primary rounded-md text-primary">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{service.title}</h3>
                  <p className="text-gray-500 text-sm mt-2">
                    {service.description}
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
