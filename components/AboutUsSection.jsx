"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaUserTie, FaHeadset } from "react-icons/fa";

export default function AboutSecuritySection() {
  const sectionRef = useRef(null);
  const [count, setCount] = useState(0);
  const [startCount, setStartCount] = useState(false);

  const targetValue = 10;
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStartCount(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    if (!startCount) return;

    const duration = 2000;
    const start = performance.now();

    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.floor(progress * targetValue));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [startCount]);

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50 w-full">
      <div className="custom-container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Image */}
        <div className="relative w-full h-96 lg:h-[32rem] flex-1">
          <Image
            src="/about.jpg"
            alt="Professional Security Guard"
            fill
            className="object-cover rounded-md"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 max-w-xl">
          <p className="bg-primary/20 text-primary rounded-full text-xs font-semibold px-4 py-2 uppercase tracking-wide inline-block mb-4">
            About Us
          </p>

          <h2 className="md:text-4xl text-2xl font-bold mb-4 leading-tight text-secondary">
            Professional Security <br className="hidden md:inline" /> Services
            You Can Trust
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            At{" "}
            <span className="font-semibold">
              Anondo Universal Services Limited
            </span>
            , we provide world-class security and facility solutions to protect
            lives, businesses, and assets. With highly trained personnel, modern
            technology, and round-the-clock support, we deliver trust,
            reliability, and peace of mind. Our mission is clear —{" "}
            <em>your safety, our responsibility</em>.
          </p>

          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary text-white p-3 rounded-md">
                <FaUserTie className="text-2xl" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-secondary mb-1">
                  Expert Guards
                </h4>
                <p className="text-sm text-gray-600">
                  Skilled, disciplined, and professional security officers for
                  every situation.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary text-white p-3 rounded-md">
                <FaHeadset className="text-2xl" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-secondary mb-1">
                  24/7 Support
                </h4>
                <p className="text-sm text-gray-600">
                  Continuous monitoring and rapid response whenever you need it.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded font-semibold transition-all duration-500">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
