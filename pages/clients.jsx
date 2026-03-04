import HeroSection from "@/components/HeroSection";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import GalleryPageSection from "@/components/GalleryPageSection";
import OurClientSection from "@/components/OurClientSection";
export default function OurClientPage() {
  const meta = {
    title: "Our Clients | Anondo Universal Services Limited",
    description:
      "Discover the organizations and corporate partners that trust Anondo Universal Services Limited for professional security solutions, trained personnel deployment, and advanced surveillance services across Bangladesh.",
    keywords:
      "Anondo Universal Services clients, security company clients Bangladesh, corporate security partners, trusted security service provider Bangladesh, industrial security clients, residential security partnerships",
    author: "Anondo Universal Services Limited",
    url: "https://www.anondouniversalserviceslimited.com/our-clients",
    image: "https://www.anondouniversalserviceslimited.com/og/clients-og.jpg",
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
          title: "Our Clients",
          background: "/hero/clients-bg.jpg",
          breadcrumb: [{ label: "Home", href: "/" }, { label: "Our Clients" }],
        }}
      />
      <OurClientSection />
    </div>
  );
}
