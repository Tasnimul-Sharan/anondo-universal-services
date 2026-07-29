import {
  FaClipboardCheck,
  FaGraduationCap,
  FaHeadset,
  FaUserShield,
} from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import { siteConfig } from "@/data/siteConfig";

const standards = [
  {
    title: "30-Day Training",
    description:
      "Personnel complete structured physical, professional, theoretical, and personal-development training.",
    icon: FaGraduationCap,
  },
  {
    title: "Deployment Readiness",
    description:
      "Pre-deployment checks assess discipline, fitness, conduct, and role-specific preparedness.",
    icon: FaUserShield,
  },
  {
    title: "Service Supervision",
    description:
      "Operational supervision and site inspections support consistent service delivery.",
    icon: FaClipboardCheck,
  },
  {
    title: "Responsive Support",
    description:
      "The corporate team receives service feedback and coordinates timely follow-up.",
    icon: FaHeadset,
  },
];

export default function ProfessionalStandards() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          subtitle="Professional Standards"
          title="How We Build Confidence"
          details={`${siteConfig.companyName} supports dependable security service through training, evaluation, supervision, and responsive coordination.`}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {standards.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="rounded-xl border border-gray-100 bg-white p-6 text-left shadow-sm"
            >
              <Icon className="text-3xl text-primary" />
              <h3 className="mt-5 text-lg font-semibold text-secondary">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
