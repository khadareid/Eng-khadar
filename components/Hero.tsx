"use client";
import One from "../image/One.jpg";
import Two from "../image/Two.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-[#1E1E1E] overflow-hidden">
      {/* Geometric shapes background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-10 top-20 h-20 w-20 rotate-45 border border-[#2A2A2A]" />
        <div className="absolute right-40 bottom-40 h-40 w-40 rounded-full border border-[#2A2A2A]" />
        <div className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 transform opacity-10">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#00FF8C"
              d="M45.7,-78.2C58.9,-71.3,69.3,-58.6,76.4,-44.2C83.5,-29.9,87.3,-14.9,86.6,-0.4C85.9,14.1,80.7,28.2,73.1,41.2C65.5,54.2,55.5,66,42.8,74.8C30.1,83.6,15.1,89.3,-0.7,90.5C-16.5,91.7,-33,88.4,-47.1,80.3C-61.2,72.2,-72.9,59.4,-79.8,44.4C-86.7,29.4,-88.8,12.2,-86.7,-4.1C-84.6,-20.4,-78.3,-36.7,-67.8,-48.7C-57.3,-60.7,-42.7,-68.3,-28.5,-74.4C-14.3,-80.5,-0.4,-85,13.8,-83.8C28,-82.6,56,-85.1,45.7,-78.2Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center">
            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
              Full Stack Developer,{" "}
              <span className="text-[#00FF8C]">
                Project Management Specialist,
              </span>
              Photojournalism &{" "}
              <span className="text-[#00FF8C]">Videography.</span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              Hi, I'm Khadar Eid, A Passionate Full Stack Developer, Project
              Management Specialist, And Expert In Photojournalism And
              Videography. With A Deep Commitment To Innovation, I Bring
              Creative Solutions To Every Project, Blending Technical Expertise
              With A Unique Artistic Perspective. Welcome To My Portfolio World!
            </p>

            <div className="mt-8 flex gap-4">
              <Button className="bg-[#00FF8C] text-black hover:bg-[#00FF8C]/90">
                View Portfolio
              </Button>
              {/* <SocialMedia />?\ */}
            </div>
          </div>

          <div className="relative mx-auto max-w-md lg:mx-0">
            <div className="relative">
              {/* Green gradient background */}
              <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#00FF8C]/20 to-transparent" />

              {/* Main image */}
              <Image
                src={Two}
                alt="Designer portrait"
                width={500}
                height={600}
                priority
                className="relative z-10 object-cover"
              />

              {/* Decorative elements */}
              <div className="absolute -right-4 top-1/4 h-24 w-24 rounded-full bg-[#00FF8C]/20 blur-xl" />
              <div className="absolute -left-4 bottom-1/4 h-32 w-32 rounded-full bg-[#00FF8C]/10 blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
