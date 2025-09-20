"use client";
import { FaHourglassHalf, FaLightbulb, FaAnchor } from "react-icons/fa";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhyUsSection() {
  const features = [
    {
      icon: <FaHourglassHalf size={20} />,
      title: "25 YEARS OF EXPERIENCES",
      desc: "The Love Boat promises something for every the beat of very best to make the others comfortable.",
    },
    {
      icon: <FaLightbulb size={20} />,
      title: "SELF MOTIVATED GUARDS",
      desc: "The Love Boat promises something for every the beat of very best to make the others comfortable.",
    },
    {
      icon: <FaAnchor size={20} />,
      title: "LATEST SECURITY TECHNIQUES",
      desc: "The Love Boat promises something for every the beat of very best to make the others comfortable.",
    },
  ];

  const stats = [
    { number: 3500, label: "Total Guards" },
    { number: 2340, label: "Happy Clients" },
    { number: 38, label: "Awards" },
    { number: 35, label: "Branches" },
  ];

  const statRefs = useRef([]);

  useEffect(() => {
    statRefs.current.forEach((el, i) => {
      if (!el) return;

      gsap.fromTo(
        el,
        { innerText: 0 },
        {
          innerText: stats[i].number,
          duration: 2,
          ease: "power3.out",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          onUpdate: function () {
            el.innerText = Math.floor(el.innerText);
          },
        }
      );
    });
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-12 items-center">
        <div>
           <span className="bg-primary/20 text-primary rounded-full text-xs font-semibold px-4 py-2 uppercase tracking-wide inline-block mb-4">
         WHY US
        </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            WHY CHOOSE US
          </h2>
          <p className="text-gray-600 mb-12 max-w-lg">
            The Love Boat promises something for everyone now to beat every of one
          </p>

          <div className="space-y-10">
            {features.map((f, i) => (
              <div key={i} className="flex items-start space-x-5">
                <div className="w-12 h-12 border-2 border-primary flex items-center justify-center shrink-0">
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{f.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <Image
            src="/security-1.jpg"
            alt="Security Guard"
            width={700}
            height={500}
            className="w-full h-full object-cover"
          />
          
          {/* <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-2 grid-rows-2 bg-[#1d3557]/95 text-white text-center divide-x divide-y divide-white/20">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="px-12 py-10 flex flex-col items-center justify-center"
                >
                  <h3
                    ref={(el) => (statRefs.current[i] = el)}
                    className="text-3xl md:text-4xl font-bold"
                  >
                    0
                  </h3>
                  <p className="text-sm md:text-base mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
