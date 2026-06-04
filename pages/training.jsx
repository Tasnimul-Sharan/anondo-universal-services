import HeroSection from "@/components/HeroSection";
import Head from "next/head";
import TrainingOverview from "@/components/TrainingOverview";
import TrainingKeyFeatures from "@/components/TrainingKeyFeatures";
import TrainingCurriculum from "@/components/TrainingCurriculum";
import TrainingCTA from "@/components/TrainingCTA";
import TrainingVisuals from "@/components/TrainingVisuals";
import ProductsSection from "@/components/ProductsSection";
import TrainingVideo from "@/components/TrainingVideo";
export default function TrainingPage() {
  const meta = {
    title:
      "Training | Anondo Universal Services Limited - Security Guard Training Academy in Bangladesh",
    description:
      "Discover Anondo Universal’s state-of-the-art Security Training Academy in Bangladesh. Our 45-day intensive program covers physical drills, legal awareness, professional skills, personal development, and modern surveillance techniques to prepare disciplined and reliable security personnel.",
    keywords:
      "Anondo Universal Services training, security guard training Bangladesh, 45-day security program, security training academy, guard training Dhaka, physical drills, legal awareness, professional security skills, CCTV training, personal development",
    author: "Anondo Universal Services Limited",
    url: "https://www.anondouniversalserviceslimited.com/training",
    image:
      "https://www.anondouniversalserviceslimited.com/training/training-og.jpg",
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
      <HeroSection
        hero={{
          title: "Training",
          background: "/hero/training-bg.jpg",
          breadcrumb: [{ label: "Home", href: "/" }, { label: "Training" }],
        }}
      />
      <TrainingOverview />
      <ProductsSection />
      {/* <TrainingKeyFeatures /> */}
      <TrainingCurriculum />
      <TrainingVideo />
      <TrainingVisuals />
      <TrainingCTA />
    </div>
  );
}
