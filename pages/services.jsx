import HeroSection from "@/components/HeroSection";
import Head from "next/head";
import Navbar from "@/components/Navbar";

import ServicesSection from "@/components/ServicesSection";
import QualityAssuranceSection from "@/components/QualityAssuranceSection";
import CompetitiveAdvantageSection from "@/components/CompetitiveAdvantageSection";
import ClientFocusSection from "@/components/ClientFocusSection";

export default function ServicesPage() {
  const meta = {
    title:
      "Services | Anondo Universal Security Services Ltd - Professional Security Solutions",
    description:
      "Discover Anondo Universal’s wide range of services including manned guarding, office security, industrial safety, event protection, and VIP bodyguard services. Backed by training, monitoring, and quality assurance.",
    keywords:
      "security services Bangladesh, manned guarding Dhaka, VIP security, event security, factory guards, bodyguards",
    author: "Anondo Universal Security Services Ltd",
    url: "https://www.anondouniversalserviceslimited.com/services",
    image: "https://www.anondouniversalserviceslimited.com/services-og.jpg",
  };

  return (
    <div className="w-full relative">
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="author" content={meta.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={meta.url} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>

      <Navbar hasBackground={true} />
      <HeroSection
        hero={{
          title: "Services",
          backgroundImage: "/services/services-bg.jpg",
        }}
      />

      <ServicesSection />
      <QualityAssuranceSection />
      <CompetitiveAdvantageSection />
      <ClientFocusSection />
    </div>
  );
}