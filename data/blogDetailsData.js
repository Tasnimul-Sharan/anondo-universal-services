import { FaInstagram } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const blogDetailsData = {
  meta: {
    title: "Blogs | Anondo Universal Services Limited",
    description:
      "Explore insightful blogs from Anondo Universal Services Limited on security solutions, risk management, residential safety, industrial site protection, corporate event security, and modern security technologies in Bangladesh.",
    keywords:
      "Anondo Universal Services blog, security Bangladesh, risk management, residential security, industrial site security, corporate event safety, modern security technology, professional guards",
    author: "Anondo Universal Services Limited",
    url: "https://anondouniversalserviceslimited.com/blogs",
    image: "https://anondouniversalserviceslimited.com/blogs/blogs-og.jpg",
  },
  blogDetails: [
    {
      slug: "latest-security-techniques",
      blogPost: {
        title: "Latest Security Techniques",
        image: "/blogs/security/security-1.jpg",
        author: "Anondo Universal Team",
        date: "20 SEPTEMBER, 2025",
        description:
          "Explore the latest advancements in security technology and strategies that ensure maximum protection for your business and property. From AI-powered surveillance to advanced alarm systems, modern solutions are transforming security in Bangladesh.",
        checklist: [
          "Integration of AI and CCTV for real-time monitoring.",
          "Advanced alarm and access control systems.",
          "Tailored security strategies for residential and commercial needs.",
        ],
        subImages: [
          "/blogs/security/security-1a.jpg",
          "/blogs/security/security-1b.jpg",
        ],
        quote:
          "Effective security combines technology, expertise, and vigilance.",
        postTags: ["Security Technology", "AI Surveillance", "Protection"],
      },
      socialIcons: [
        {
          icon: FaFacebookF,
          link: (url) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        },
        {
          icon: FaXTwitter,
          link: (url, title) =>
            `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
        },
        {
          icon: FaLinkedinIn,
          link: (url, title) =>
            `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
        },
      ],
    },
    {
      slug: "risk-management-strategies",
      blogPost: {
        title: "Effective Risk Management Strategies",
        image: "/blogs/security/security-2.jpg",
        author: "Anondo Universal Team",
        date: "15 SEPTEMBER, 2025",
        description:
          "Learn how professional security services implement risk assessment and management to prevent potential threats effectively. Prioritizing risk planning ensures safety for employees, assets, and operations.",
        checklist: [
          "Conduct comprehensive risk assessments.",
          "Implement proactive mitigation measures.",
          "Regular audits and monitoring to reduce vulnerabilities.",
        ],
        subImages: [
          "/blogs/security/security-2a.jpg",
          "/blogs/security/security-2b.jpg",
        ],
        quote:
          "Preparedness is the first step towards effective security.",
        postTags: ["Risk Management", "Threat Prevention", "Security Planning"],
      },
      socialIcons: [
        {
          icon: FaFacebookF,
          link: (url) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        },
        {
          icon: FaXTwitter,
          link: (url, title) =>
            `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
        },
        {
          icon: FaLinkedinIn,
          link: (url, title) =>
            `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
        },
      ],
    },
    {
      slug: "corporate-event-security",
      blogPost: {
        title: "Ensuring Safety in Corporate Events",
        image: "/blogs/security/security-3.jpg",
        author: "Anondo Universal Team",
        date: "10 SEPTEMBER, 2025",
        description:
          "Understand best practices for event security, from crowd management to VIP protection, ensuring a safe and smooth experience for attendees and organizers alike.",
        checklist: [
          "Strategic planning and risk assessment for events.",
          "Trained personnel for crowd and VIP management.",
          "Emergency preparedness and contingency measures.",
        ],
        subImages: [
          "/blogs/security/security-3a.jpg",
          "/blogs/security/security-3b.jpg",
        ],
        quote:
          "A safe event is a successful event.",
        postTags: ["Event Security", "VIP Protection", "Crowd Management"],
      },
      socialIcons: [
        {
          icon: FaFacebookF,
          link: (url) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        },
        {
          icon: FaXTwitter,
          link: (url, title) =>
            `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
        },
        {
          icon: FaLinkedinIn,
          link: (url, title) =>
            `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
        },
      ],
    },
    {
      slug: "residential-security-tips",
      blogPost: {
        title: "Residential Security: Protecting Your Home",
        image: "/blogs/security/security-4.jpg",
        author: "Anondo Universal Team",
        date: "05 SEPTEMBER, 2025",
        description:
          "Tips and strategies for securing residential properties, including surveillance systems, trained personnel, and emergency protocols to safeguard families and assets.",
        checklist: [
          "Install smart surveillance and alarm systems.",
          "Hire trained residential security personnel.",
          "Establish emergency response protocols.",
        ],
        subImages: [
          "/blogs/security/security-4a.jpg",
          "/blogs/security/security-4b.jpg",
        ],
        quote:
          "Home safety is the cornerstone of peace of mind.",
        postTags: ["Residential Security", "Home Protection", "Surveillance"],
      },
      socialIcons: [
        {
          icon: FaFacebookF,
          link: (url) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        },
        {
          icon: FaXTwitter,
          link: (url, title) =>
            `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
        },
        {
          icon: FaLinkedinIn,
          link: (url, title) =>
            `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
        },
      ],
    },
    {
      slug: "industrial-site-security",
      blogPost: {
        title: "Industrial Site Security Best Practices",
        image: "/blogs/security/security-5.jpg",
        author: "Anondo Universal Team",
        date: "01 SEPTEMBER, 2025",
        description:
          "A comprehensive guide to maintaining safety and operational continuity in factories, warehouses, and large industrial facilities through modern security protocols.",
        checklist: [
          "24/7 monitoring and patrolling.",
          "Access control and perimeter security.",
          "Emergency preparedness for industrial hazards.",
        ],
        subImages: [
          "/blogs/security/security-5a.jpg",
          "/blogs/security/security-5b.jpg",
        ],
        quote:
          "Industrial security protects not just assets, but livelihoods.",
        postTags: ["Industrial Security", "Workplace Safety", "Access Control"],
      },
      socialIcons: [
        {
          icon: FaFacebookF,
          link: (url) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        },
        {
          icon: FaXTwitter,
          link: (url, title) =>
            `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
        },
        {
          icon: FaLinkedinIn,
          link: (url, title) =>
            `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
        },
      ],
    },
    {
      slug: "technology-in-security",
      blogPost: {
        title: "Technology in Modern Security Services",
        image: "/blogs/security/security-6.jpg",
        author: "Anondo Universal Team",
        date: "28 AUGUST, 2025",
        description:
          "How CCTV, biometric access, alarm systems, and AI monitoring are transforming security operations in Bangladesh, making them more effective and responsive.",
        checklist: [
          "AI-driven CCTV monitoring for real-time alerts.",
          "Biometric and smart access control systems.",
          "Integration of alarm and communication systems for quick response.",
        ],
        subImages: [
          "/blogs/security/security-6a.jpg",
          "/blogs/security/security-6b.jpg",
        ],
        quote:
          "Modern security relies on technology, training, and vigilance.",
        postTags: ["Security Technology", "AI Monitoring", "Biometric Access"],
      },
      socialIcons: [
        {
          icon: FaFacebookF,
          link: (url) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        },
        {
          icon: FaXTwitter,
          link: (url, title) =>
            `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
        },
        {
          icon: FaLinkedinIn,
          link: (url, title) =>
            `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
        },
      ],
    },
  ],
};