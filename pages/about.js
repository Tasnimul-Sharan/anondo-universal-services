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
        question: "What is Anondo Baari?",
        answer:
          "Anondo Baari is a wellness and senior citizen living center that combines modern healthcare with holistic healing practices, offering a sanctuary for body, mind, and soul.",
      },
      {
        question: "Where is Anondo Baari located?",
        answer:
          "It is situated in Ulukhola, Purbachal New Town—just 20 minutes from Hazrat Shahjalal International Airport—on the south bank of the River Turag, spread over 25 acres of landscaped land.",
      },
      {
        question: "What is the vision of Anondo Baari?",
        answer:
          "To be the most trusted and respected wellness centre for senior citizens in South Asia, providing world-class facilities, healthcare, and compassionate living.",
      },
      {
        question: "What is the mission of Anondo Baari?",
        answer:
          "To deliver exceptional wellness services and support systems that help senior residents live with joy, independence, and dignity.",
      },
      {
        question: "How many residents can live here?",
        answer:
          "Anondo Baari accommodates up to 5,000 residents in 2,500 centrally air-conditioned suites.",
      },
      {
        question: "What types of suites are available?",
        answer:
          "Standard Suites (modern décor, cozy bed, serene views), Executive Suites (luxury furnishings & premium interiors), Garden-View Suites (lush garden view, natural light), and Assisted Living Units (with medical support).",
      },
      {
        question: "What medical facilities are provided?",
        answer:
          "24/7 in-house healthcare with physicians, nurses, physiotherapists, dieticians, and psychologists. Services include chronic disease management, physiotherapy, cognitive therapy, emergency helicopter evacuation, on-site diagnostics, and pharmacy.",
      },
      {
        question: "What wellness programs are offered?",
        answer:
          "Yoga, meditation, tai chi, aerobics, aqua gym, massage, hydrotherapy, and stress-relief therapies.",
      },
      {
        question: "What recreational activities are available?",
        answer:
          "Cultural evenings, art & craft workshops, gardening & cooking clubs, movie nights, intergenerational programs, and prayer sessions.",
      },
      {
        question: "How is nutrition managed?",
        answer:
          "Meals are freshly prepared and dietitian-approved with special menus like vegetarian, diabetic-friendly, heart-healthy, and high-protein options. Residents enjoy dining halls, buffets, in-room dining, and herbal beverages.",
      },
      {
        question: "What eco-friendly and sustainability initiatives exist?",
        answer:
          "Solar-powered lighting, rainwater harvesting, organic gardens, waste recycling, and eco-transport facilities inside the campus.",
      },
      {
        question: "How is resident safety ensured?",
        answer:
          "300+ CCTV cameras, RFID-based entry, emergency response teams, wellness app, AI-based monitoring, telemedicine, and smart emergency buttons.",
      },
      {
        question: "What learning and contribution opportunities are available?",
        answer:
          "Workshops, resident-led sessions, university partnerships, memoir writing support, and volunteering opportunities.",
      },
      {
        question: "What is the admission process?",
        answer:
          "Inquiry & virtual tour, Application & health evaluation, Personal interview & suite selection, Contract & onboarding, Welcome & orientation.",
      },
      {
        question: "How can I contact Anondo Baari?",
        answer:
          "📍 Ulukhola, Purbachal New Town, Dhaka (20 minutes from Airport). Correspondence:📍 Printers’ Building, 5 RAJUK Avenue, Dilkusha, Dhaka. 📞 Phone: +880 1313775333 . 📧 Email: info@anondobari.com . 🌐 Website: https://www.anondobari.com/.",
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
      <WorkProcess />
      {/* <TeamSection /> */}
      <Testimonials />
      <WhyUsSection />
      <FAQ faqData={faqData} />
    </div>
  );
}
