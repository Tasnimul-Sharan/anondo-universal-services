"use client";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import TrainingOutcome from "./TrainingOutcome";

const trainingData = [
  {
    title: "A. Field Training",
    image: "/training/field-training.jpg",
    items: [
      "<strong>Physical Fitness:</strong> Daily routines (running, push-ups, rope-climbing) and nutrition guidance.",
      "<strong>Parade & Drill:</strong> Marching, formations and ceremonial readiness.",
      "<strong>Discipline:</strong> Punctuality, responsibility and professional accountability.",
      "<strong>Self-Defence & Martial Arts:</strong> Safe restraint techniques and unarmed combat basics.",
    ],
  },
  {
    title: "B. Professional Training",
    image: "/training/professional-training.jpg",
    items: [
      "<strong>Access Control & Visitor Checks:</strong> respectful frisking, screening and entry management.",
      "<strong>Object & Vehicle Screening:</strong> practical use of scanners and under-vehicle checks.",
      "<strong>Crowd Control & Event Security:</strong> safe crowd management and coordination.",
      "<strong>CCTV Surveillance:</strong> monitoring, detection, and reporting workflows.",
    ],
  },
  {
    title: "C. Theoretical Courses",
    image: "/training/theory.jpg",
    items: [
      "Right of Private Defence & property protection laws (Bangladesh).",
      "Right of Arrest for Civil Persons & suspect handling rules.",
      "Police Rules, Reporting, and Liaison with law enforcement.",
    ],
  },
  {
    title: "D. Personal Development",
    image: "/training/personal-development.jpg",
    items: [
      "Behaviour, Etiquette, and Communication skills",
      "Hygiene & Grooming, Uniform maintenance",
      "Training on basic household/office tools",
    ],
  },
];

export default function TrainingCurriculum() {
  return (
    <section className="bg-white rounded-2xl py-12">
      <div className="custom-container mx-auto">
        <h3 className="text-2xl font-semibold mb-4">
          30-day Training Curriculum
        </h3>
        <p className="text-gray-600 mb-6">
          The program is structured around four major components — Field,
          Professional, Theoretical, and Personal Development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trainingData.map((section, index) => (
            <article
              key={index}
              className="p-5 border rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all transform hover:-translate-y-1 duration-700"
            >
              <div className="w-full aspect-video relative mb-4">
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="rounded-lg object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <h4 className="text-lg font-medium mb-3">{section.title}</h4>

              <div className="space-y-3">
                {section.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <FaCheckCircle className="w-5 h-5 text-primary mt-1" />
                    <p
                      className="text-gray-700"
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <TrainingOutcome />
      </div>
    </section>
  );
}
