import AboutUsSection from "@/components/AboutUsSection";
import HeroSection from "@/components/HeroSection";
import TeamSection from "@/components/TeamSection";
import Testimonials from "@/components/Testimonials";
import WorkProcess from "@/components/WorkProcess";
import WhyUsSection from "@/components/WhyUsSection";
import Head from "next/head";
import FAQ from "@/components/FAQ";
import Navbar from "@/components/Navbar";
import VisionMissionGoals from "@/components/VisionMissionGoals";
export default function AboutPage() {
  const meta = {
    title:
      "About Us | Anondo Baari - Senior Wellness & Assisted Living in Bangladesh",
    description:
      "Learn about Anondo Baari, a senior citizen wellness and living center in Purbachal, Dhaka. Discover our vision, mission, world-class facilities, wellness programs, medical support, and commitment to dignity, independence, and joy for the elderly.",
    keywords:
      "About Anondo Baari, senior wellness Bangladesh, assisted living Dhaka, elderly care Bangladesh, retirement home, wellness center for seniors, holistic healthcare, senior living community, Purbachal senior care",
    author: "Anondo Baari",
    url: "https://www.anondobari.com/about",
    image: "https://www.anondobari.com/about/about-og.jpg",
  };

 const faqData = {
  title: "Frequently Asked Questions",
  faqs: [
    {
      question: "What is Anondo Universal Services Limited?",
      answer:
        "Anondo Universal Services Limited (AUSL) is a multidisciplinary service provider specializing in safety & security, engineering & real estate, and logistics & business support solutions. We are committed to ensuring safety, efficiency, and growth for individuals, businesses, and communities.",
    },
    {
      question: "Where is Anondo Universal Services Limited located?",
      answer:
        "Our head office is located in Bangladesh, with operations spanning residential, commercial, and industrial sectors nationwide. We also provide 24/7 support and rapid response services across the country.",
    },
    {
      question: "What is the vision of AUSL?",
      answer:
        "To be the most trusted security and service provider in South Asia, delivering innovative, reliable, and people-focused solutions.",
    },
    {
      question: "What is the mission of AUSL?",
      answer:
        "To ensure safety, efficiency, and peace of mind through professionalism, modern technology, and uncompromising integrity.",
    },
    {
      question: "What types of services do you provide?",
      answer:
        "We provide a wide range of services including security guards, armed guards, caretakers, supervisors, peons, drivers, courier & cargo services, ERP & digital solutions, CCTV installation, event management, office management, digital marketing, and media & advertising services.",
    },
    {
      question: "How many security professionals are employed by AUSL?",
      answer:
        "We have over 2000+ trained security professionals deployed nationwide, supported by supervisors, caretakers, drivers, and specialized teams.",
    },
    {
      question: "How is safety and quality ensured?",
      answer:
        "Our personnel undergo rigorous training in crisis response, fire safety, first aid, customer service, and advanced security protocols. We operate a Central Command & Monitoring Center with 24/7 oversight and rapid response teams.",
    },
    {
      question: "Do you provide customized solutions?",
      answer:
        "Yes, AUSL offers tailored solutions for corporate offices, industrial sites, residential complexes, events, and high-risk facilities, ensuring every client receives the protection and support they need.",
    },
    {
      question: "What technology-enabled services do you offer?",
      answer:
        "We provide CCTV surveillance, biometric access control, remote monitoring, ERP solutions, e-commerce platforms, and integrated alarm systems for businesses and individuals.",
    },
    {
      question: "How can I contact Anondo Universal Services Limited?",
      answer:
        "📍 Head Office: [Insert Full Address Here]. 📞 Phone: [Insert Phone Number]. 📧 Email: [Insert Email Address]. 🌐 Website: [Insert Website URL].",
    },
  ],
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
          title: "About",
          //   subtitle: "About",
          backgroundImage: "/about-bg.jpg",
        }}
      />
      <AboutUsSection />
      <VisionMissionGoals />
      {/* <WorkProcess /> */}
      <TeamSection />
      <Testimonials />
      <WhyUsSection />
      <FAQ faqData={faqData} />
    </div>
  );
}
