"use client";
import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { FiEye } from "react-icons/fi";
import { motion } from "framer-motion";
import Link from "next/link";
import { galleryImages } from "@/data/galleryData";

export default function Gallery() {
  const gallery = galleryImages.slice(0, 9);

  const subtitle = "Our Works";
  const title = "Explore Our Gallery";

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpen = (idx) => {
    setCurrentIndex(idx);
    setIsOpen(true);
  };

  // Animation Variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <div className="custom-container mx-auto py-16">
      {/* Title Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="uppercase font-medium text-primary tracking-[0.15em] text-sm">
          {subtitle}
        </p>
        <h2 className="text-secondary text-3xl md:text-4xl font-bold mt-2">
          {title}
        </h2>
      </motion.div>

      {/* Gallery Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {gallery.map((itemData, idx) => (
          <motion.div
            key={idx}
            variants={item}
            className="relative overflow-hidden rounded-md group cursor-pointer"
            onClick={() => handleOpen(idx)}
          >
            <Image
              src={itemData.img}
              alt={`${itemData.title} — ${itemData.category}`}
              width={1200}
              height={1200}
              className="w-full h-full object-cover transition-all transform duration-1000 ease-in group-hover:scale-125"
            />

            <div className="absolute inset-0 flex items-end justify-between gap-4 bg-gradient-to-t from-black/80 via-black/10 to-transparent p-4">
              <div className="text-left text-white">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {itemData.category}
                </p>
                <h3 className="mt-1 font-semibold">{itemData.title}</h3>
              </div>
              <button
                type="button"
                aria-label={`View ${itemData.title}`}
                className="shrink-0 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0
                transition-all duration-500 ease-out bg-primary text-white p-3 rounded-md
                flex items-center gap-2"
              >
                <FiEye className="text-lg" />
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
      {/* See All Button */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Link href="/gallery">
          <button
            className="px-8 py-3 bg-primary text-white font-medium rounded-md shadow-md
      hover:bg-secondary transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]
      hover:scale-105"
          >
            See All
          </button>
        </Link>
      </motion.div>

      {/* Lightbox */}
      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          index={currentIndex}
          slides={gallery.map((g) => ({
            src: g.img,
            title: g.title,
            description: `${g.category} — ${g.description}`,
          }))}
          plugins={[Thumbnails, Captions, Zoom, Fullscreen, Slideshow]}
          animation={{ fade: 500, swipe: 400 }}
          carousel={{ finite: false, transitionDuration: 1000 }}
          slideshow={{ autoplay: false, delay: 4000 }}
          thumbnails={{ position: "bottom", width: 100, height: 70 }}
          captions={{ descriptionTextAlign: "center" }}
          zoom={{ maxZoomPixelRatio: 3, scrollToZoom: true }}
        />
      )}
    </div>
  );
}
