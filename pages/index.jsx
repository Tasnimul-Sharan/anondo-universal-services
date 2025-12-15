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
import ProductsSection from "@/components/ProductsSection";
import AdvisorSection from "@/components/AdvisorSection";
export default function Home() {
  const meta = {
    title:
      "Anondo Universal Services Limited | Trusted Security & Training in Bangladesh",
    description:
      "Anondo Universal Services Limited is a leading private security provider in Bangladesh. Offering household, corporate, industrial, event, and VIP protection services backed by a state-of-the-art training academy and professional monitoring.",
    keywords:
      "Anondo Universal Security, security services Bangladesh, private security Dhaka, armed guards Bangladesh, bodyguard services Dhaka, event security Bangladesh, factory security, money transfer security, residential security, professional guards Bangladesh",
    author: "Anondo Universal Security Services Limited",
    url: "https://www.anondouniversalserviceslimited.com/",
    image: "https://www.anondouniversalserviceslimited.com/og-image.jpg",
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
      <Services />
      <HelpSection />
      <WhyUsSection />
      <AdvisorSection />
      {/* <TeamSection /> */}
      <Gallery />
      <Testimonials />
      <ContactSection />
      <BlogSection />
    </div>
  );
}
