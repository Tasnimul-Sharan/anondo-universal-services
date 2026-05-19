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
import { FiCalendar, FiEye } from "react-icons/fi";

const getGalleryDate = (index) => {
  if ([2, 3, 4].includes(index)) return "09 November 2025";
  if (index === 5) return "20 November 2025";
  if (index === 6) return "24 November 2025";
  if ([7, 12, 34, 35, 36].includes(index)) return "02 December 2025";
  if ([1, 8, 9, 10, 11].includes(index)) return "06 December 2025";
  if ([25, 27, 28].includes(index)) return "27 November 2025";
  if (index === 26) return "29 November 2025";
  return "19 May 2026";
};

const galleryImages = Array.from({ length: 36 }, (_, index) => {
  const imageNumber = index + 1;

  return {
    img: `/gallery/gallery${imageNumber}.jpg`,
    date: getGalleryDate(imageNumber),
  };
});

const socialActivities = Array.from({ length: 4 }, (_, index) => {
  const imageNumber = index + 1;

  return {
    img: `/gallery/social/social${imageNumber}.jpg`,
    date: "19 May 2026",
  };
});

export default function GalleryPageSection() {
  const sections = [
    { title: "Explore Our Gallery", images: galleryImages },
    { title: "Social Activities", images: socialActivities },
  ];
  const allImages = sections.flatMap((section) => section.images);

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpen = (idx) => {
    setCurrentIndex(idx);
    setIsOpen(true);
  };

  let imageOffset = 0;

  return (
    <div className="custom-container mx-auto py-16">
      <div className="space-y-16">
        {sections.map((section) => {
          const sectionOffset = imageOffset;
          imageOffset += section.images.length;

          return (
            <section key={section.title}>
              <div className="mb-8 text-left">
                <h2 className="text-3xl font-bold text-secondary">
                  {section.title}
                </h2>
                <span className="mt-3 block h-[3px] w-16 rounded bg-primary" />
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {section.images.map((item, idx) => {
                  const lightboxIndex = sectionOffset + idx;

                  return (
                    <div
                      key={item.img}
                      onClick={() => handleOpen(lightboxIndex)}
                      className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-md bg-gray-100"
                    >
                      <Image
                        src={item.img}
                        alt={item.date}
                        width={1200}
                        height={900}
                        className="h-full w-full object-cover transition-all duration-1000 ease-in group-hover:scale-110"
                      />

                      <div className="absolute left-4 top-4 flex items-center gap-2 rounded bg-black/55 px-3 py-2 text-sm font-semibold text-white backdrop-blur-sm">
                        <FiCalendar className="text-primary" />
                        {item.date}
                      </div>

                      <div className="absolute inset-0 flex items-end justify-center bg-black/0 p-4 transition duration-500 group-hover:bg-black/35">
                        <button
                          className="flex translate-y-6 items-center gap-2 rounded-md bg-primary px-6 py-4 text-white opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100"
                          type="button"
                        >
                          <FiEye className="text-lg" />
                          View Image
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          index={currentIndex}
          slides={allImages.map((image) => ({
            src: image.img,
            title: image.date,
          }))}
          plugins={[Thumbnails, Captions, Zoom, Fullscreen, Slideshow]}
          thumbnails={{ position: "bottom", width: 100, height: 70 }}
          captions={{ descriptionTextAlign: "center" }}
          zoom={{ maxZoomPixelRatio: 3, scrollToZoom: true }}
          slideshow={{ autoplay: false, delay: 4000 }}
        />
      )}
    </div>
  );
}
