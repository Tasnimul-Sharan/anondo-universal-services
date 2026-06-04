"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const TrainingOutcome = () => {
  return (
    <div>
      <div className="mt-6 p-6 rounded-xl bg-slate-50 border">
        <h5 className="font-semibold">Training Outcome</h5>
        <p className="text-gray-700 mt-2">
          Graduates emerge as physically fit, legally aware, professionally
          skilled, and ethically grounded guards — ready to inspire trust and
          confidence.
        </p>
      </div>

      {/* <motion.div
        className="mt-4 relative rounded-xl overflow-hidden shadow-lg group"
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >

        <Image
          src="/training/training-outcome.jpg"
          width={1980}
          height={1080}
          alt="Training Outcome Image"
          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.05]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent pointer-events-none"></div>
      </motion.div> */}
    </div>
  );
};

export default TrainingOutcome;
