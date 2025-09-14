"use client";
import { FaLock, FaUsers, FaHandshake, FaChartLine } from "react-icons/fa";

export default function HelpSection() {
  const stats = [
    { number: "325", label: "PEOPLE GUARDED", icon: <FaUsers size={24} /> },
    { number: "500", label: "Lock Installed", icon: <FaLock size={24} /> },
    { number: "255", label: "Satisfie customer", icon: <FaHandshake size={24} /> },
    { number: "325", label: "PEOPLE GUARDED", icon: <FaChartLine size={24} /> },
  ];

  return (
    <section className="py-16 bg-white text-center relative">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-2">We Will Help You</h2>
      <div className="flex items-center justify-center mb-6">
        <span className="w-12 h-0.5 bg-black"></span>
        <FaLock className="mx-2 text-green-500" />
        <span className="w-12 h-0.5 bg-black"></span>
      </div>   
      <p className="text-gray-600 max-w-3xl mx-auto px-4 mb-12">
        Thusiastically mesh long-term high-impact infrastructures vis-a-vis efficient customer service.
        Professionally fashion wireless leadership rather than prospective experiences. Energistically
        myocardinate c
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-gray-100 md:p-12 p-10 rounded relative text-center"
          >
            <h3 className="text-3xl font-bold">{stat.number}</h3>
            <p className="uppercase text-sm font-semibold mt-1">{stat.label}</p>

            {/* Overlapping Icon */}
            <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2">
              <div className="w-16 h-16 flex items-center justify-center rounded-full border bg-white shadow">
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-20 text-gray-600">
        With over 5 decades of experience, We deliver
      </p>
      <h3 className="text-xl font-bold mt-2">
        PREMIUM SECURITY SOLUTIONS AT BEST PRICE
      </h3>
    </section>
  );
}
