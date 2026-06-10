"use client";
import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { FiEye } from "react-icons/fi";

const galleryImageNumbers = [
 2, 3, 4, 5, 7, 8, 10, 11, 12, 13, 15, 16, 17, 19, 21, 25, 26, 31, 32, 33, 34,
  36, 37, 38,
];

const galleryImages = galleryImageNumbers.map((imageNumber) => ({
  img: `/gallery/gallery${imageNumber}.jpg`,
  alt: `Gallery image ${imageNumber}`,
}));

const socialActivities = Array.from({ length: 6 }, (_, index) => {
  const imageNumber = index + 1;

  return {
    img: `/gallery/social/social${imageNumber}.jpg`,
    alt: `Social activity ${imageNumber}`,
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
                        alt={item.alt}
                        width={1200}
                        height={900}
                        className="h-full w-full object-cover transition-all duration-1000 ease-in group-hover:scale-110"
                      />

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
            alt: image.alt,
          }))}
          plugins={[Thumbnails, Zoom, Fullscreen, Slideshow]}
          thumbnails={{ position: "bottom", width: 100, height: 70 }}
          zoom={{ maxZoomPixelRatio: 3, scrollToZoom: true }}
          slideshow={{ autoplay: false, delay: 4000 }}
        />
      )}
    </div>
  );
}
