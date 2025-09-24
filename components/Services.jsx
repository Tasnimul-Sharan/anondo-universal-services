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
  FaChalkboardTeacher,
  FaArrowRight,
} from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import Image from "next/image";

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
    title: "30-Day Training Curriculum",
    icon: <FaChalkboardTeacher className="w-5 h-5" />,
    description:
      "The program is structured around four major components — Field, Professional, Theoretical, and Personal Development.",
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
            {services.slice(0, 4).map((service, i) => (
              <div key={i} className="flex items-start gap-4 text-left group">
                <div className="p-3 border-2 border-primary rounded-md text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-white">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{service.title}</h3>
                  <p className="text-gray-500 text-sm mt-2">
                    {service.description}
                  </p>
                  <div className="relative mt-4 inline-flex items-center gap-1 text-primary text-sm font-semibold transition-all transform duration-500 group cursor-pointer">
                    See Details <FaArrowRight className="w-3 h-3" />
                    <span className="hover-line absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full"></span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Image
              src="/services/security-guard.jpeg"
              alt="Security Guard"
              width={1200}
              height={1600}
              priority
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          <div className="flex flex-col gap-10">
            {services.slice(4).map((service, i) => (
              <div key={i} className="flex items-start gap-4 text-left group">
                <div className="p-3 border-2 border-primary rounded-md text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-white">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{service.title}</h3>
                  <p className="text-gray-500 text-sm mt-2">
                    {service.description}
                  </p>
                  <div className="relative mt-4 inline-flex items-center gap-1 text-primary text-sm font-semibold transition-all transform duration-500 group cursor-pointer">
                    See Details <FaArrowRight className="w-3 h-3" />
                    <span className="hover-line absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full"></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
