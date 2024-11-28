"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Code,  Briefcase, Camera, Lightbulb } from "lucide-react";
import Tree from "../image/Tree.jpeg";
export default function About() {
  return (
    <section id="about" className="bg-[#1E1E1E] px-4 py-16 sm:px-6 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          className="text-center text-3xl font-bold text-white sm:text-4xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About <span className="text-[#00FF8C]">Me</span>
        </motion.h2>
        <div className="mt-12 flex flex-col-reverse items-center gap-10 lg:flex-row">
          {/* Left: Image */}
          <motion.div
            className="relative w-full max-w-sm overflow-hidden rounded-lg shadow-lg lg:max-w-md"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src={Tree}
              alt="About me image"
              width={400}
              height={480}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>

          {/* Right: Text */}
          <motion.div
            className="flex flex-col gap-6 text-gray-300 lg:max-w-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p>
              I'm Khadar Eid, a versatile professional passionate about
              technology, storytelling, and innovation. As a Full Stack
              Developer, I specialize in building robust and scalable
              applications using modern technologies like React, Node.js, and
              Prisma.
            </p>
            <p>
              Beyond development, I thrive in Project Management, leading teams
              to deliver high-quality results on time while fostering
              collaboration and creativity. My background in Photojournalism and
              Videography allows me to tell compelling stories that capture
              moments and inspire audiences.
            </p>
            <ul className="grid grid-cols-2 gap-4 text-sm">
              {[
                { icon: Code, text: "Tech Enthusiast" },
                { icon: Camera, text: "Creative Storyteller" },
                { icon: Briefcase, text: "Experienced Leader" },
                { icon: Lightbulb, text: "Problem Solver" },
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <item.icon className="h-5 w-5 text-[#00FF8C]" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#00FF8C]">
              I'm always eager to explore new challenges and collaborations.
              Let's connect and create something amazing together!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
