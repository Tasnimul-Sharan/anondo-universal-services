"use client";
import { useRouter } from "next/router";
import Head from "next/head";
import { RiLoader2Fill } from "react-icons/ri";
import HeroSection from "@/components/HeroSection";
import { blogDetailsData } from "@/data/blogDetailsData";
import BlogDetails from "@/components/BlogDetails";

export default function BlogDetailsDataPage() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) {
    return (
      <div className="flex flex-col gap-2 justify-center items-center min-h-screen text-secondary">
        <RiLoader2Fill className="animate-spin w-6 h-6" />
        <p className="font-medium text-xl">Loading...</p>
      </div>
    );
  }

  const { blogDetails } = blogDetailsData;

  const blog = blogDetails.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-secondary font-medium text-xl">
          Blog detail not found.
        </p>
      </div>
    );
  }

  const meta = {
    title: `${blog.blogPost.title} | Anondo Universal Services Limited`,
    description:
      blog.blogPost.description ||
      `Read "${blog.blogPost.title}" – an insightful article from Anondo Universal Services Limited about professional security services, training programs, and industry insights in Bangladesh.`,
    keywords: `${blog.blogPost.postTags.join(
      ", ",
    )}, Anondo Universal Services Limited blog, security services Bangladesh, security training, professional guards`,
    author: blog.blogPost.author || "Anondo Universal Services Limited",
    url: `https://www.anondouniversalserviceslimited.com/blogs/${blog.slug}`,
    image:
      blog.blogPost.image ||
      "https://www.anondouniversalserviceslimited.com/blogs/blogs-og.jpg",
  };

  return (
    <div>
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
          title: blog.blogPost.title,
          background: blog.blogPost.image,
          // breadcrumb: [{ label: "Home", href: "/" }, { label: "About Us" }],
        }}
      />
      <BlogDetails blogsData={blog} />
    </div>
  );
}
