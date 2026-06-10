"use client";

import {
  FiArrowRight,
  FiDownload,
  FiMapPin,
  FiShield,
  FiUsers,
} from "react-icons/fi";

export default function TrainingCTA() {
  const brochureUrl =
    "https://drive.google.com/file/d/18Ax7JZ1eqLYylk7pEksDiCT-on_XqUXS/view?usp=sharing";

  return (
    <section className="relative overflow-hidden bg-off_white py-16">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="custom-container mx-auto">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary">
              <FiShield className="h-4 w-4" />
              Professional Security Training
            </span>

            <h2 className="mt-5 max-w-3xl text-3xl font-bold leading-tight text-soft_black md:text-5xl">
              Ready to Visit Our Training Academy?
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600">
              Request the brochure, review the full training structure, or
              schedule a visit to see how Anondo Universal prepares disciplined,
              duty-ready security professionals.
            </p>

            <div className="mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                { label: "30-Day Program", icon: FiUsers },
                { label: "Academy Visit", icon: FiMapPin },
                { label: "Brochure Ready", icon: FiDownload },
              ].map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-md border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-soft_black shadow-sm"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary text-white">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right CTA Card */}
          <div className="rounded-md border border-primary/15 bg-white p-6 shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Next Step
            </p>

            <h3 className="mt-3 text-2xl font-bold text-soft_black">
              Get the academy details today.
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Download the brochure instantly or contact our team for academy
              visit scheduling and admission guidance.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <a
                href={brochureUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-primary/90"
              >
                <FiDownload className="h-4 w-4" />
                Download Brochure
              </a>

              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-soft_black transition duration-300 hover:border-primary hover:text-primary"
              >
                Contact Us
                <FiArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
