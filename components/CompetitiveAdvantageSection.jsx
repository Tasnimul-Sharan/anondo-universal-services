// import SectionHeader from "./SectionHeader";

// export default function CompetitiveAdvantageSection() {
//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-6 md:px-0">
//         <SectionHeader
//           subtitle="Competitive Advantage"
//           title="Why Choose Anondo Universal"
//           details="We go beyond basic security services by combining skilled personnel, advanced technology, and client-focused solutions."
//         />
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700">
//           <div className="space-y-4">
//             <p>
//               Unlike most companies that focus only on manpower deployment, we
//               offer a premium, holistic security solution.
//             </p>
//             <ul className="list-disc pl-6 space-y-2">
//               <li>
//                 <strong>Own Training Academy:</strong> A 2-acre facility with
//                 300+ capacity, ensuring in-house quality.
//               </li>
//               <li>
//                 <strong>Professional Trainers:</strong> Retired army officers,
//                 law enforcement experts, and certified instructors.
//               </li>
//               <li>
//                 <strong>Holistic Training:</strong> Legal knowledge, etiquette,
//                 hygiene, and personal development.
//               </li>
//             </ul>
//           </div>
//           <div className="space-y-4">
//             <ul className="list-disc pl-6 space-y-2">
//               <li>
//                 <strong>Cutting-Edge Practices:</strong> CCTV, metal detectors,
//                 and real-world event security drills.
//               </li>
//               <li>
//                 <strong>Regular Monitoring:</strong> Our own surveillance team
//                 checks guard performance during duty.
//               </li>
//               <li>
//                 <strong>Strong Values:</strong> Loyalty, honesty, and integrity
//                 guide everything we do.
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import SectionHeader from "./SectionHeader";

const advantages = [
  {
    title: "Own Training Academy",
    desc: "A 2-acre facility with 300+ capacity, ensuring in-house quality.",
  },
  {
    title: "Professional Trainers",
    desc: "Retired army officers, law enforcement experts, and certified instructors.",
  },
  {
    title: "Holistic Training",
    desc: "Legal knowledge, etiquette, hygiene, and personal development.",
  },
  {
    title: "Cutting-Edge Practices",
    desc: "CCTV, metal detectors, and real-world event security drills.",
  },
  {
    title: "Regular Monitoring",
    desc: "Our own surveillance team checks guard performance during duty.",
  },
  {
    title: "Strong Values",
    desc: "Loyalty, honesty, and integrity guide everything we do.",
  },
];

export default function CompetitiveAdvantageSection() {
  // Split array into two halves for 2-column layout
  const midpoint = Math.ceil(advantages.length / 2);
  const leftColumn = advantages.slice(0, midpoint);
  const rightColumn = advantages.slice(midpoint);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <SectionHeader
          subtitle="Competitive Advantage"
          title="Why Choose Anondo Universal"
          details="We go beyond basic security services by combining skilled personnel, advanced technology, and client-focused solutions."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700 mt-8">
          <div className="space-y-4">
            <p>
              Unlike most companies that focus only on manpower deployment, we
              offer a premium, holistic security solution.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              {leftColumn.map((item, index) => (
                <li key={index}>
                  <strong>{item.title}:</strong> {item.desc}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <ul className="list-disc pl-6 space-y-2">
              {rightColumn.map((item, index) => (
                <li key={index}>
                  <strong>{item.title}:</strong> {item.desc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
