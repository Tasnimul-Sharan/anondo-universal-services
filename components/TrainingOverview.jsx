import Image from "next/image";
import {
  FiBookOpen,
  FiCamera,
  FiHome,
  FiMapPin,
  FiShield,
  FiTarget,
  FiUsers,
} from "react-icons/fi";

const academyFeatures = [
  {
    title: "Training Ground",
    detail:
      "Large open fields for parades, fitness drills, and martial arts sessions.",
    meta: "2+ acres",
    icon: FiTarget,
  },
  {
    title: "Dormitory Facilities",
    detail:
      "Long-stay accommodation where trainees live under discipline and supervision throughout the 30-day program.",
    meta: "Supervised stay",
    icon: FiHome,
  },
  {
    title: "Classrooms & Lecture Halls",
    detail:
      "Dedicated spaces for law, rights, police regulations, and reporting protocol instruction.",
    meta: "Theory training",
    icon: FiBookOpen,
  },
  {
    title: "Simulation Areas",
    detail:
      "Practical zones for vehicle checking, visitor screening, and crowd-control drills.",
    meta: "Real scenarios",
    icon: FiShield,
  },
  {
    title: "Surveillance & Monitoring Rooms",
    detail:
      "CCTV systems and detection instruments for hands-on monitoring practice.",
    meta: "CCTV practice",
    icon: FiCamera,
  },
  {
    title: "Hygiene & Grooming Areas",
    detail:
      "Facilities to train recruits on hygiene, cleanliness, and modern household tool handling.",
    meta: "Personal discipline",
    icon: FiUsers,
  },
];

export default function TrainingOverview() {
  return (
    <section className="relative overflow-hidden bg-gray-100 py-16">
      <div className="custom-container mx-auto">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary">
              <FiMapPin className="h-4 w-4" />
              Purbachal New Town, Dhaka
            </span>

            <h2 className="mt-5 text-3xl font-bold text-gray-900 md:text-5xl">
              The Training Academy
            </h2>

            <div className="mt-6 space-y-4 text-base leading-8 text-gray-700">
              <p>
                At the core of Anondo Universal Services Limited lies its
                pride and strength, the <strong>Training Academy</strong>, a
                dedicated facility where men and women are transformed into
                disciplined, skilled, and confident security professionals.
              </p>

              <p>
                The Academy is strategically located in Anondo Housing Society,
                Purbachal New Town, Dhaka, easily accessible yet sufficiently
                spacious for uninterrupted training. Covering more than two
                acres of land, the academy is designed to replicate the
                real-world scenarios that guards will face once deployed.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-md bg-white p-5 shadow-sm">
                <p className="text-3xl font-bold text-primary">300+</p>
                <p className="mt-1 text-sm font-medium text-gray-600">
                  Trainee Capacity
                </p>
              </div>
              <div className="rounded-md bg-white p-5 shadow-sm">
                <p className="text-3xl font-bold text-primary">2+</p>
                <p className="mt-1 text-sm font-medium text-gray-600">
                  Acres of Training Space
                </p>
              </div>
            </div>
 
            <div className="mt-6 overflow-hidden rounded-md bg-white shadow-xl shadow-gray-200">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/training/training-academy.jpg"
                  alt="Anondo Universal Services Limited training academy campus"
                  fill
                  sizes="(min-width: 1024px) 36vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Academy Campus
                </p>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  A dedicated training environment for discipline, practical
                  drills, classroom learning, and professional development.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Key Features of the Academy
              </h3>
              <span className="mt-3 block h-[3px] w-16 rounded bg-primary" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {academyFeatures.map(({ title, detail, meta, icon: Icon }) => (
                <div
                  key={title}
                  className="rounded-md border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary/15 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                        {meta}
                      </p>
                      <h4 className="mt-1 text-lg font-bold text-gray-900">
                        {title}
                      </h4>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-md bg-off_white p-6 shadow-xl shadow-gray-200">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                Academy Philosophy
              </p>

              <blockquote className="mt-3 text-xl font-semibold leading-8 text-soft_black md:text-2xl">
                "Discipline and preparation today ensure security and trust
                tomorrow."
              </blockquote>

              <p className="mt-4 text-sm leading-6 text-gray-600">
                With a training capacity of over 300 trainees at a time, the
                academy functions as a self-contained environment where every
                aspect of a guard's physical, professional, and personal
                development is shaped.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
