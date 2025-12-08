"use client";
import Image from "next/image";

export default function TrainingVisuals() {
  const visuals = [
    {
      title: "Trainer",
      caption: "Trainer instructing recruits on metal detector use",
      img: "/training/trainer.jpg",
    },
    {
      title: "Field Practice",
      caption: "Recruits practicing real-time field operations",
      img: "/training/practice1.jpg",
    },
    {
      title: "Parade Squad",
      caption: "A guard squad in parade formation",
      img: "/training/parade.jpg",
    },
    {
      title: "CCTV Room",
      caption: "CCTV monitoring control room",
      img: "/training/cctv.png",
    },
    {
      title: "Running",
      caption: "Recruits improving stamina through daily running drills",
      img: "/training/running.jpg",
    },
    {
      title: "Push-Ups",
      caption: "Strength-building push-up sessions during physical training",
      img: "/training/pushups.jpg",
    },
    {
      title: "Rope Climbing",
      caption:
        "Rope climbing practice to build endurance and upper body strength",
      img: "/training/rope-climbing.jpg",
    },
    {
      title: "Self-defence",
      caption: "Practical self-defence training session",
      img: "/training/self-defence.jpg",
    },
    {
      title: "Fire Extinguisher Training",
      caption:
      "Hands-on training on using different types of fire extinguishers",
      img: "/training/fire-extinguisher.jpg",
    },
    {
      title: "Personal Development",
      caption:
      "Sessions focused on communication, discipline, and confidence building",
      img: "/training/personal-development.jpg",
    },
    {
      title: "Health Exercise",
      caption:
        "Daily health exercises designed to improve overall fitness, flexibility, and well-being",
      img: "/training/health-exercise.jpg",
    },
    {
      title: "Belly Fat Reduction",
      caption:
        "Daily abdominal workouts focused on reducing belly fat and improving core strength",
      img: "/training/belly-fat-exercise.jpg",
    },
  ];

  return (
    <div className="custom-container mx-auto py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
      {visuals.map((v) => (
        <figure
          key={v.title}
          className="rounded-lg border p-4 bg-white/60 shadow-sm hover:shadow-md transition-all transform duration-1000"
        >
          <div className="relative w-full rounded-md overflow-hidden">
            <Image
              src={v.img}
              alt={v.title}
              width={1920}
              height={1080}
              className="object-cover hover:scale-110 w-full h-full transition-all transform duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)]"
              priority
            />
          </div>
          <figcaption className="text-gray-600 text-base mt-3 text-center">
            {v.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
