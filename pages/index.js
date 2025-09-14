import AboutUsSection from "@/components/AboutUsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import WorkProcess from "@/components/WorkProcess";
import WhyUsSection from "@/components/WhyUsSection";
import Head from "next/head";
import { useEffect, useState } from "react";
// import Services from "@/components/Services";
import LandingPage from "@/components/LandingPage";
import SuitesSection from "@/components/SuitesSection";
import Navbar from "@/components/Navbar";
import TeamSection from "@/components/TeamSection";
import Services from "@/components/Services";
import AdvantagesSection from "@/components/AdvantagesSection";
import HelpSection from "@/components/HelpSection";
export default function Home() {
  const meta = {
    title:
      "Anondo Baari | A Sanctuary of Wellness & Dignity for Senior Citizens",
    description:
      "Anondo Baari is a world-class senior wellness & living center in Purbachal, Dhaka. Offering holistic healthcare, assisted living, therapeutic care, luxury suites, and vibrant community life with dignity and respect.",
    keywords:
      "Anondo Baari, senior living Bangladesh, assisted living Dhaka, wellness center, retirement home, holistic healthcare, elderly care Bangladesh, Purbachal wellness, senior citizen dignity",
    author: "Anondo Baari",
    url: "https://www.anondobari.com/",
    image: "https://www.anondobari.com/og-image.jpg",
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
      <Navbar />
      <LandingPage />
      {/* <AboutUsSection /> */}
      <Services />
      <AdvantagesSection />
      {/* <SuitesSection /> */}
      <TeamSection />
      <Gallery />
      <Testimonials />
      <HelpSection />
      <WhyUsSection />
      {/* <WorkProcess /> */}
      <ContactSection />
      <BlogSection />
    </div>
  );
}
