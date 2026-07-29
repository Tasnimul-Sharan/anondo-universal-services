"use client";
import { FaLock, FaUsers, FaHandshake, FaChartLine } from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import { siteConfig } from "@/data/siteConfig";

export default function HelpSection() {
  const stats = [
    {
      number: siteConfig.approvedStatistics.peopleProtected,
      label: "PEOPLE PROTECTED",
      icon: <FaUsers size={24} />,
    },
    {
      number: siteConfig.approvedStatistics.securityMembers,
      label: "TOTAL SECURITY MEMBERS",
      icon: <FaLock size={24} />,
    },
    {
      number: siteConfig.approvedStatistics.clientsServed,
      label: "CLIENTS SERVED",
      icon: <FaHandshake size={24} />,
    },
    {
      number: siteConfig.approvedStatistics.successfulProjects,
      label: "SUCCESSFUL PROJECTS",
      icon: <FaChartLine size={24} />,
    },
  ];

  return (
    <section className="py-16 bg-white text-center relative">
      <SectionHeader
        subtitle="Our Commitment"
        title="Trusted Security Support"
        details="With a professional team, modern technology, and years of proven experience, we provide reliable security solutions that ensure safety and peace of mind."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-6 md:px-0">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-off_white hover:bg-primary hover:text-white md:p-12 p-10 rounded relative text-center 
                       transition-all duration-500 transform hover:scale-105 hover:shadow-xl group"
          >
            <h3 className="text-3xl font-bold">
              {stat.number.toLocaleString("en-US")}
            </h3>
            <p className="uppercase text-sm font-semibold mt-1">{stat.label}</p>

            {/* Overlapping Icon */}
            <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2">
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full border bg-white 
                           transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-white"
              >
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-20 text-gray-600">
        Over a decade of proven expertise in safeguarding people and businesses.
      </p>
      <h3 className="text-xl font-bold mt-2">
        DELIVERING PREMIUM SECURITY SOLUTIONS AT THE BEST VALUE
      </h3>
    </section>
  );
}
