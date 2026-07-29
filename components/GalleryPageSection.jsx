"use client";
import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { FiEye } from "react-icons/fi";
import { galleryImages, socialActivityImages } from "@/data/galleryData";

export default function GalleryPageSection() {
  const sections = [
    { title: "Explore Our Gallery", images: galleryImages },
    { title: "Social Activities", images: socialActivityImages },
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
                        alt={`${item.title} — ${item.category}`}
                        width={1200}
                        height={900}
                        className="h-full w-full object-cover transition-all duration-1000 ease-in group-hover:scale-110"
                      />

                      <div className="absolute inset-0 flex items-end justify-between gap-4 bg-gradient-to-t from-black/85 via-black/10 to-transparent p-4">
                        <div className="text-left text-white">
                          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                            {item.category}
                          </p>
                          <h3 className="mt-1 font-semibold">{item.title}</h3>
                        </div>
                        <button
                          aria-label={`View ${item.title}`}
                          className="flex shrink-0 translate-y-6 items-center gap-2 rounded-md bg-primary p-3 text-white opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100"
                          type="button"
                        >
                          <FiEye className="text-lg" />
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
            title: image.title,
            description: `${image.category} — ${image.description}`,
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
