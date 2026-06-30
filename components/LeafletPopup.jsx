"use client";

import { useEffect, useState } from "react";
import {
  HiOutlineDownload,
  HiOutlineExternalLink,
  HiOutlineX,
} from "react-icons/hi";

const leafletPages = [
  "/leaflet/universal-leaflet-page-1.png",
  "/leaflet/universal-leaflet-page-2.png",
];

const leafletPdf = "/universal%20leaflet.pdf";

export default function LeafletPopup() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-2 backdrop-blur-sm sm:p-4 md:p-6"
      onClick={() => setIsOpen(false)}
      role="presentation"
    >
      <div
        className="relative flex max-h-[78dvh] w-[88vw] max-w-[350px] flex-col overflow-hidden rounded-lg bg-white shadow-[0_30px_90px_rgba(0,0,0,0.45)] sm:max-h-[86dvh] sm:w-[92vw] sm:max-w-3xl md:h-[92dvh] md:max-h-[calc(100dvh-3rem)] md:w-full md:max-w-7xl"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Universal leaflet"
      >
        <div className="flex min-h-14 items-center justify-between gap-3 border-b border-gray-100 bg-white px-3 py-2 sm:px-4 md:px-6">
          <div className="min-w-0">
            <p className="truncate text-[10px] font-semibold uppercase tracking-widest text-primary sm:text-xs">
              Anondo Universal Services
            </p>
            <h2 className="text-sm font-bold text-secondary sm:text-base md:text-lg">
              Universal Leaflet
            </h2>
          </div>

          <button
            type="button"
            aria-label="Close leaflet"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-xl text-white shadow-lg transition hover:bg-secondary sm:h-10 sm:w-10 sm:text-2xl"
            onClick={() => setIsOpen(false)}
          >
            <HiOutlineX />
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto bg-gray-100 p-2 sm:p-3 md:hidden">
          <div className="mx-auto flex w-full max-w-3xl flex-col gap-3">
            {leafletPages.map((page, index) => (
              <img
                key={page}
                src={page}
                alt={`Universal leaflet page ${index + 1}`}
                className="h-auto w-full rounded-md bg-white shadow"
              />
            ))}
          </div>
        </div>

        <iframe
          src={leafletPdf}
          title="Universal leaflet"
          className="hidden min-h-0 flex-1 border-0 bg-gray-100 md:block"
        />

        <div className="flex flex-wrap items-center justify-center gap-2 border-t border-gray-100 bg-white px-3 py-2 sm:justify-end md:px-6">
          <a
            href={leafletPdf}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-secondary px-3 text-sm font-semibold text-secondary transition hover:bg-secondary hover:text-white"
          >
            <HiOutlineExternalLink className="text-lg" />
            Open PDF
          </a>
          <a
            href={leafletPdf}
            download
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md bg-primary px-3 text-sm font-semibold text-white transition hover:bg-secondary"
          >
            <HiOutlineDownload className="text-lg" />
            Download
          </a>
        </div>
      </div>
    </div>
  );
}
