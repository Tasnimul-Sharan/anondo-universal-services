"use client";

import { motion } from "framer-motion";
import { FaAward, FaPlay, FaShieldAlt, FaUsers } from "react-icons/fa";

export default function TrainingVideo() {
  const reveal = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: "easeOut" },
    },
  };

  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-gray-100 to-white" />

      <div className="custom-container relative mx-auto">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary">
            <FaShieldAlt className="h-3.5 w-3.5" />
            Training Academy Video
          </span>

          <h2 className="mt-5 text-2xl font-bold text-gray-900 md:text-4xl">
            See Our Training Standards in Action
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600">
            A closer look at Anondo Universal Services Limited, our disciplined
            training environment, professional instructors, and the practical
            preparation behind every security team we deploy.
          </p>

          <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              { label: "Disciplined Drills", icon: FaUsers },
              { label: "Expert Guidance", icon: FaAward },
              { label: "Duty Ready", icon: FaShieldAlt },
            ].map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-md border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-800"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/15 text-primary">
                  <Icon className="h-3.5 w-3.5" />
                </span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto max-w-5xl mt-10 w-full scroll-mt-28"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* <div className="absolute -left-4 -top-4 h-24 w-24 rounded-md bg-primary" />
          <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-md bg-secondary" /> */}

          <div className="relative overflow-hidden rounded-md bg-gray-950 p-2 shadow-2xl shadow-gray-900/20">
            <div className="aspect-video overflow-hidden rounded-md bg-black">
              <iframe
                src="https://www.youtube.com/embed/uNToBCBY9Us?autoplay=1&mute=1&controls=1&loop=1&playlist=uNToBCBY9Us&rel=0&modestbranding=1&playsinline=1&vq=hd1080"
                title="Anondo Universal Services Limited training academy video"
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="eager"
              />
            </div>
          </div>
        </motion.div>

        <div className="mt-16">
          <div className="mb-6 text-center">
            <span className="inline-block rounded-full bg-secondary/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-secondary">
              Training Footage
            </span>
            <h3 className="mt-4 text-2xl font-bold text-gray-900">
              Academy Practice Session
            </h3>
          </div>

          <div className="mx-auto max-w-5xl overflow-hidden rounded-md bg-gray-950 p-2 shadow-xl shadow-gray-900/15">
            <div className="aspect-video overflow-hidden rounded-md bg-black">
              <iframe
                src="https://www.youtube.com/embed/rOAvP4xRRf0?autoplay=1&mute=1&controls=0&loop=1&playlist=rOAvP4xRRf0"
                title="Training practice session video"
                className="h-full w-full"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
