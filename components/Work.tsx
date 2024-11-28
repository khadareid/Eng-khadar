"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { work } from "@/constants";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";

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

export default function Work() {
  return (
    <section id="work" className="bg-[#1E1E1E] px-4 py-16 sm:px-6 lg:px-20">
      <div className="mx-auto max-w-7xl">
        
        <motion.div
          className="mt-12 flex w-full flex-col gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {work.map((project, index) => {
            const { techStacks, desc, name, projectImage } = project;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                className="overflow-hidden rounded-lg bg-[#2A2A2A] shadow-lg transition-all duration-300 hover:shadow-[#00FF8C]/20"
                variants={itemVariants}
              >
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                  <div
                    className={cn(
                      "flex items-center justify-center bg-[#333333] p-6",
                      isEven ? "lg:order-1" : "lg:order-2"
                    )}
                  >
                    <Image
                      src={projectImage}
                      width={400}
                      height={300}
                      alt={`${name} project image`}
                      className="rounded-lg object-cover shadow-md"
                    />
                  </div>
                  <div
                    className={cn(
                      "flex flex-col justify-between gap-4 p-6",
                      !isEven ? "lg:order-1" : "lg:order-2"
                    )}
                  >
                    <div>
                      <h3 className="mb-2 text-2xl font-bold text-[#00FF8C]">
                        {name}
                      </h3>
                      <p className="text-gray-300">{desc}</p>
                    </div>
                    <div>
                      <div className="mb-4 flex flex-wrap gap-2">
                        {techStacks.map((tech, index) => (
                          <span
                            key={index}
                            className="rounded-full bg-[#00FF8C]/10 px-3 py-1 text-sm text-[#00FF8C]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <Button
                        variant="outline"
                        className="group text-[#00FF8C] hover:bg-[#00FF8C] hover:text-[#1E1E1E]"
                      >
                        Visit Project
                        <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
