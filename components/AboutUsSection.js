"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutUsSection() {
  const sectionRef = useRef(null);
  const [count, setCount] = useState(0);
  const [startCount, setStartCount] = useState(false);

  const targetValue = 3;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
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
    <section
      ref={sectionRef}
      className="py-24 custom-container mx-auto bg-white flex flex-col lg:flex-row items-center justify-between gap-12"
    >
      <div className="relative w-full max-w-[500px] aspect-square mx-auto">
        <div className="rounded-full overflow-hidden w-full h-full relative z-10">
          <Image
            src="/wellness_center/1.jpg"
            alt="Anondo Baari Wellness"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute w-16 h-16 sm:w-24 sm:h-24 border-[6px] sm:border-[8px] border-primary rounded-full top-0 right-0 -translate-x-1/4 -translate-y-1/4 z-0" />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-primary text-white px-4 py-3 sm:px-6 sm:py-4 rounded-md flex items-center gap-3 sm:gap-4 z-20">
          <div className="border border-white p-2 sm:p-6 rounded-md flex items-center gap-2 sm:gap-3 justify-center">
            <span className="text-2xl sm:text-4xl font-bold leading-none">
              {count}+
            </span>
            <div className="text-xs sm:text-sm leading-tight font-medium">
              Years of <br /> Experience
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 max-w-xl">
        <p className="text-primary font-medium tracking-widest uppercase mb-2">
          About Us
        </p>
        <h2 className="md:text-4xl text-2xl font-bold mb-4 leading-tight text-secondary">
          A Sanctuary of Wellness <br className="hidden md:inline" /> & Dignity
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          At Anondo Baari, we believe aging is not a limitation—it is a
          beautiful phase of life. Our wellness hub blends modern healthcare
          with holistic practices like yoga, meditation, and therapeutic care,
          ensuring every resident lives with peace, purpose, and dignity.
        </p>

        <div className="flex flex-col gap-6 mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-6">
            <div className="flex flex-col gap-6 flex-1">
              <div className="flex items-start gap-6">
                <Image
                  src="/wellness_center/icons/healthcare.png"
                  alt="24/7 Healthcare"
                  width={70}
                  height={70}
                  className="mt-1"
                />
                <div>
                  <h4 className="font-bold text-primary text-lg mb-2">
                    24/7 Healthcare
                  </h4>
                  <p className="text-sm text-secondary_two">
                    On-site doctors, nurses & emergency support
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <Image
                  src="/wellness_center/icons/meditation.png"
                  alt="Holistic Wellness"
                  width={70}
                  height={70}
                  className="mt-1"
                />
                <div>
                  <h4 className="font-bold text-primary text-lg mb-2">
                    Holistic Wellness
                  </h4>
                  <p className="text-sm text-secondary_two">
                    Yoga, meditation, physiotherapy & nutrition care
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 md:w-[150px] md:h-[150px] w-full rounded overflow-hidden">
              <Image
                src="/wellness_center/yoga-room.jpg"
                alt="Peaceful Living"
                width={1000}
                height={668}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <Link href="/contact">
            <button className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded font-semibold transition-all transform duration-500 w-fit">
              Book a Visit
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}