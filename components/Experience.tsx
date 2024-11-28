"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { experiences } from "@/constants";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#1E1E1E] px-4 py-16 sm:px-6 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mt-12 flex flex-col items-center gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {experiences.map(({ id, platformLogo, role, from, to, tasks }) => (
            <motion.div
              key={id}
              className="w-full max-w-4xl overflow-hidden rounded-lg bg-[#2A2A2A] shadow-lg transition-all duration-300 hover:shadow-[#00FF8C]/20"
              variants={itemVariants}
            >
              <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-[auto,1fr] lg:grid-cols-[auto,1fr,auto]">
                <div className="flex items-center justify-center sm:justify-start">
                  <Image
                    src={platformLogo}
                    width={102}
                    height={28}
                    alt="Company logo"
                    className="h-12 w-auto object-contain"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold text-[#00FF8C]">{role}</h3>
                  <ul className="space-y-2">
                    {tasks.map((task, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-gray-300"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#00FF8C]" />
                        <span className="text-sm">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-start text-sm text-gray-400 sm:justify-end lg:flex-col lg:items-end">
                  <Calendar className="mr-2 h-4 w-4 text-[#00FF8C]" />
                  <span>
                    {from} - {to}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
