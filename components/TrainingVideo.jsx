"use client";

export default function TrainingVideo() {
  return (
    <div className="w-full py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto rounded-xl overflow-hidden bg-black">
        <div className="relative w-full" style={{ paddingBottom: "177%" }}>
          <iframe
            src="https://www.youtube.com/embed/rOAvP4xRRf0?autoplay=1&mute=1&controls=0&loop=1&playlist=rOAvP4xRRf0"
            title="Training Video"
            className="absolute top-0 left-0 w-full h-full"
            allow="autoplay; encrypted-media"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
