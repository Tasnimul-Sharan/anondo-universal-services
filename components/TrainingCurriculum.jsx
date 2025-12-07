// "use client";
// import { FaCheckCircle } from "react-icons/fa";

// export default function TrainingCurriculum() {
//   return (
//     <section className="bg-white rounded-2xl py-12">
//       <div className="custom-container mx-auto">
//         <h3 className="text-2xl font-semibold mb-4">
//           30-day Training Curriculum
//         </h3>
//         <p className="text-gray-600 mb-6">
//           The program is structured around four major components — Field,
//           Professional, Theoretical, and Personal Development.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* A. Field Training */}
//           <article className="p-5 border rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all transform hover:-translate-y-1 duration-700">
//             <h4 className="text-lg font-medium mb-3">A. Field Training</h4>
//             <div className="space-y-3">
//               <div className="flex items-start gap-2">
//                 <FaCheckCircle className="w-5 h-5 text-primary mt-1" />
//                 <p>
//                   <strong>Physical Fitness:</strong> Daily routines (running,
//                   push-ups, rope-climbing) and nutrition guidance.
//                 </p>
//               </div>
//               <div className="flex items-start gap-2">
//                 <FaCheckCircle className="w-5 h-5 text-primary mt-1" />
//                 <p>
//                   <strong>Parade & Drill:</strong> Marching, formations and
//                   ceremonial readiness.
//                 </p>
//               </div>
//               <div className="flex items-start gap-2">
//                 <FaCheckCircle className="w-5 h-5 text-primary mt-1" />
//                 <p>
//                   <strong>Discipline:</strong> Punctuality, responsibility and
//                   professional accountability.
//                 </p>
//               </div>
//               <div className="flex items-start gap-2">
//                 <FaCheckCircle className="w-5 h-5 text-primary mt-1" />
//                 <p>
//                   <strong>Self-Defence & Martial Arts:</strong> Safe restraint
//                   techniques and unarmed combat basics.
//                 </p>
//               </div>
//             </div>
//           </article>

//           {/* B. Professional Training */}
//           <article className="p-5 border rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all transform hover:-translate-y-1 duration-700">
//             <h4 className="text-lg font-medium mb-3">
//               B. Professional Training
//             </h4>
//             <div className="space-y-3">
//               <div className="flex items-start gap-2">
//                 <FaCheckCircle className="w-5 h-5 text-primary mt-1" />
//                 <p>
//                   <strong>Access Control & Visitor Checks:</strong> respectful
//                   frisking, screening and entry management.
//                 </p>
//               </div>
//               <div className="flex items-start gap-2">
//                 <FaCheckCircle className="w-5 h-5 text-primary mt-1" />
//                 <p>
//                   <strong>Object & Vehicle Screening:</strong> practical use of
//                   scanners and under-vehicle checks.
//                 </p>
//               </div>
//               <div className="flex items-start gap-2">
//                 <FaCheckCircle className="w-5 h-5 text-primary mt-1" />
//                 <p>
//                   <strong>Crowd Control & Event Security:</strong> safe crowd
//                   management and coordination with authorities.
//                 </p>
//               </div>
//               <div className="flex items-start gap-2">
//                 <FaCheckCircle className="w-5 h-5 text-primary mt-1" />
//                 <p>
//                   <strong>CCTV Surveillance:</strong> monitoring, detection and
//                   reporting workflows.
//                 </p>
//               </div>
//             </div>
//           </article>

//           {/* C. Theoretical Courses */}
//           <article className="p-5 border rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all transform hover:-translate-y-1 duration-700">
//             <h4 className="text-lg font-medium mb-3">C. Theoretical Courses</h4>
//             <div className="space-y-3">
//               <div className="flex items-start gap-2">
//                 <FaCheckCircle className="w-5 h-5 text-primary mt-1" />
//                 <p>
//                   Right of Private Defence & right of protection of property
//                   (existing laws of Bangladesh)
//                 </p>
//               </div>
//               <div className="flex items-start gap-2">
//                 <FaCheckCircle className="w-5 h-5 text-primary mt-1" />
//                 <p>
//                   Right of Arrest for Civil Persons & suspect-handling protocols
//                 </p>
//               </div>
//               <div className="flex items-start gap-2">
//                 <FaCheckCircle className="w-5 h-5 text-primary mt-1" />
//                 <p>Police Rules, Reporting, and Liaison with law enforcement</p>
//               </div>
//             </div>
//           </article>

//           {/* D. Personal Development */}
//           <article className="p-5 border rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all transform hover:-translate-y-1 duration-700">
//             <h4 className="text-lg font-medium mb-3">
//               D. Personal Development
//             </h4>
//             <div className="space-y-3">
//               <div className="flex items-start gap-2">
//                 <FaCheckCircle className="w-5 h-5 text-primary mt-1" />
//                 <p>Behaviour, Etiquette, and Communication skills</p>
//               </div>
//               <div className="flex items-start gap-2">
//                 <FaCheckCircle className="w-5 h-5 text-primary mt-1" />
//                 <p>Hygiene & Grooming, Uniform maintenance</p>
//               </div>
//               <div className="flex items-start gap-2">
//                 <FaCheckCircle className="w-5 h-5 text-primary mt-1" />
//                 <p>
//                   Training on basic household tools to support domestic/office
//                   assignments
//                 </p>
//               </div>
//             </div>
//           </article>
//         </div>

//         {/* Outcome */}
//         <div className="mt-6 p-4 bg-slate-50 rounded-lg">
//           <h5 className="font-semibold">Training Outcome</h5>
//           <p className="text-gray-700 mt-2">
//             Graduates emerge as physically fit, legally aware, professionally
//             skilled, and ethically grounded guards — ready to inspire trust and
//             confidence.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }


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
              {/* Fully Dynamic Responsive Image */}
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
