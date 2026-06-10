"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const TrainingOutcome = () => {
  return (
    <div className="mt-6 rounded-2xl border border-primary/10 bg-white p-6 shadow-lg">
      <h5 className="text-lg font-bold text-soft_black">Training Outcome</h5>

      <p className="mt-3 leading-7 text-gray-600">
        Graduates emerge as physically fit, legally aware, professionally
        skilled, and ethically grounded guards — ready to inspire trust and
        confidence.
      </p>

      <div className="mt-4 h-1 w-16 rounded-full bg-primary"></div>
    </div>
  );
};

export default TrainingOutcome;
