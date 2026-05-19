"use client";

import { useEffect, useState } from "react";
import { HiOutlineX } from "react-icons/hi";

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
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-3 py-5 backdrop-blur-sm md:px-6 md:py-8"
      onClick={() => setIsOpen(false)}
      role="presentation"
    >
      <div
        className="relative flex h-[92vh] w-full max-w-7xl flex-col overflow-hidden rounded-lg bg-white shadow-[0_30px_90px_rgba(0,0,0,0.45)]"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Universal leaflet"
      >
        <div className="flex min-h-14 items-center justify-between border-b border-gray-100 bg-white px-4 md:px-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Anondo Universal Services
            </p>
            <h2 className="text-base font-bold text-secondary md:text-lg">
              Universal Leaflet
            </h2>
          </div>

          <button
            type="button"
            aria-label="Close leaflet"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-2xl text-white shadow-lg transition hover:bg-secondary"
            onClick={() => setIsOpen(false)}
          >
            <HiOutlineX />
          </button>
        </div>

        <iframe
          src="/universal%20leaflet.pdf"
          title="Universal leaflet"
          className="min-h-0 flex-1 border-0 bg-gray-100"
        />
      </div>
    </div>
  );
}
