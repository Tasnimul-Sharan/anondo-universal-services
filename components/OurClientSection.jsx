import {
  FaBuilding,
  FaCalendarCheck,
  FaHome,
  FaIndustry,
  FaUniversity,
} from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import { siteConfig } from "@/data/siteConfig";

const clientSectors = [
  { label: "Corporate offices", icon: FaBuilding },
  { label: "Industrial facilities", icon: FaIndustry },
  { label: "Residential communities", icon: FaHome },
  { label: "Financial institutions", icon: FaUniversity },
  { label: "Events and venues", icon: FaCalendarCheck },
];

export default function OurClientSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          subtitle="Client Partnerships"
          title="Security Support Across Key Sectors"
          details={`${siteConfig.companyName} serves organizations and communities across Bangladesh while respecting client confidentiality.`}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {clientSectors.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm"
            >
              <Icon className="mx-auto text-3xl text-primary" />
              <h3 className="mt-4 font-semibold text-secondary">{label}</h3>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl rounded-lg border border-primary/20 bg-primary/5 p-5 text-center text-sm leading-relaxed text-gray-600">
          Client names, logos, and endorsements are published only after written
          authorization. Verified references can be requested through our
          corporate office.
        </p>
      </div>
    </section>
  );
}
