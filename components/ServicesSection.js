"use client";
import {
  FaShieldAlt,
  FaUserSecret,
  FaBroadcastTower,
  FaEye,
  FaLock,
  FaExclamationTriangle,
} from "react-icons/fa";
import SectionHeader from "./SectionHeader";

const services = [
  { title: "SECURITY CONSULTING", icon: <FaShieldAlt className="w-5 h-5" /> },
  { title: "SECURITY CONSULTING", icon: <FaUserSecret className="w-5 h-5" /> },
  { title: "SECURITY CONSULTING", icon: <FaBroadcastTower className="w-5 h-5" /> },
  { title: "SECURITY CONSULTING", icon: <FaEye className="w-5 h-5" /> },
  { title: "SECURITY CONSULTING", icon: <FaLock className="w-5 h-5" /> },
  { title: "SECURITY CONSULTING", icon: <FaExclamationTriangle className="w-5 h-5" /> },
];

export default function Services() {
  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-0">
          {/* <SectionHeader
          subtitle="Our Services"
          title="OUR BEST SERVICES"
          details="The Love Boat promises something for everyone now to beat every of just one"
        /> */}

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
