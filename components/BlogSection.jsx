// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { FaArrowRight, FaRegCalendarAlt, FaRegUser } from "react-icons/fa";
// import SectionHeader from "./SectionHeader";

// const blogs = [
//   {
//     id: 1,
//     img: "/blogs/wellness/wellness-1.jpg",
//     date: "July 2, 2023",
//     author: "Admin",
//     title: "Latest Security Techniques",
//     excerpt:
//       "The Love Boat promises something for every the beat of very best to make the...",
//     slug: "latest-security-techniques",
//   },
//   {
//     id: 2,
//     img: "/blogs/nutrition/nutrition-1.jpg",
//     date: "July 2, 2023",
//     author: "Admin",
//     title: "Tropic Port Aboard This Tiny Ship",
//     excerpt:
//       "The Love Boat promises something for every the beat of very best to make the...",
//     slug: "tropic-port-aboard",
//   },
//   {
//     id: 3,
//     img: "/blogs/community/community-1.jpg",
//     date: "July 2, 2023",
//     author: "Admin",
//     title: "Everybody Pulled His Weight",
//     excerpt:
//       "The Love Boat promises something for every the beat of very best to make the...",
//     slug: "everybody-pulled-weight",
//   },
// ];

// export default function BlogSection() {
//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-6 md:px-0">
//        <SectionHeader
//           subtitle="Our Blog"
//           title="Latest News"
//           details="The Love Boat promises something for everyone now to beat every of just one"
//         />

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {blogs.map((blog) => (
//             <Link href={`/blogs/${blog.slug}`}>
//             <div key={blog.id} className="group rounded overflow-hidden">
//               <div className="relative w-full h-64 overflow-hidden">
//                 <Image
//                   src={blog.img}
//                   alt={blog.title}
//                   fill
//                   // className="object-cover rounded transform transition-all duration-700 group-hover:scale-125"
//                     className="object-cover rounded transform transition-transform duration-1000 ease-in-out group-hover:scale-125"
//                 />
//               </div>
//               <div className="mt-4">
//                 <div className="flex items-center gap-4 text-gray-500 text-sm mb-2">
//                   <span className="flex items-center gap-2">
//                     <FaRegCalendarAlt className="text-primary" /> {blog.date}
//                   </span>
//                   <span className="flex items-center gap-2">
//                     <FaRegUser className="text-primary" /> By: {blog.author}
//                   </span>
//                 </div>

//                 <h3 className="text-lg font-bold text-secondary mb-2 hover:text-primary transition-colors duration-500">
//                   {blog.title}     
//                 </h3>

//                 <p className="text-gray-600 text-sm">{blog.excerpt}</p>
//               </div>
//                <div
//                     href={`/blogs/${blog.slug}`}
//                     className="relative mt-4 inline-flex items-center gap-1 text-primary text-sm font-semibold transition-all transform duration-500 group"
//                   >
//                     Read More <FaArrowRight />
//                     <span className="hover-line absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full"></span>
//                   </div>
//             </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaRegCalendarAlt, FaRegUser } from "react-icons/fa";
import SectionHeader from "./SectionHeader";

const blogs = [
  {
    id: 1,
    img: "/blogs/blog-1.jpg",
    date: "September 20, 2025",
    author: "Admin",
    title: "Latest Security Techniques",
    excerpt:
      "Explore the latest advancements in security technology and strategies that ensure maximum protection for your business and property.",
    slug: "latest-security-techniques",
  },
  {
    id: 2,
    img: "/blogs/blog-2.jpg",
    date: "September 15, 2025",
    author: "Admin",
    title: "Effective Risk Management Strategies",
    excerpt:
      "Learn how professional security services implement risk assessment and management to prevent potential threats effectively.",
    slug: "risk-management-strategies",
  },
  {
    id: 3,
    img: "/blogs/blog-3.jpg",
    date: "September 10, 2025",
    author: "Admin",
    title: "Ensuring Safety in Corporate Events",
    excerpt:
      "Understand best practices for event security, from crowd management to VIP protection, ensuring a safe and smooth experience.",
    slug: "corporate-event-security",
  },
];

export default function BlogSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <SectionHeader
          subtitle="Our Blog"
          title="Latest Security Insights"
          details="Stay informed with expert advice, industry trends, and updates from Anondo Universal Services Limited."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link key={blog.id} href={`/blogs/${blog.slug}`}>
              <div className="group rounded overflow-hidden cursor-pointer">
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={blog.img}
                    alt={blog.title}
                    fill
                    className="object-cover rounded transform transition-transform duration-1000 ease-in-out group-hover:scale-125"
                  />
                </div>
                <div className="mt-4">
                  <div className="flex items-center gap-4 text-gray-500 text-sm mb-2">
                    <span className="flex items-center gap-2">
                      <FaRegCalendarAlt className="text-primary" /> {blog.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaRegUser className="text-primary" /> By: {blog.author}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-secondary mb-2 hover:text-primary transition-colors duration-500">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 text-sm">{blog.excerpt}</p>
                </div>
                <div
                  className="relative mt-4 inline-flex items-center gap-1 text-primary text-sm font-semibold transition-all transform duration-500 group"
                >
                  Read More <FaArrowRight />
                  <span className="hover-line absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full"></span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
