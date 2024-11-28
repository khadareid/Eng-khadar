'use client'
import React from "react"
import { motion } from "framer-motion"
import {
  UserCheck as ProjectManagementIcon,
  Camera as PhotojournalismIcon,
  Video as VideographyIcon,
  Code as FullStackIcon,
} from "lucide-react"

const skillsList = [
  { id: 9, Icon: FullStackIcon, title: "Full Stack Development" },
  { id: 10, Icon: ProjectManagementIcon, title: "Project Management" },
  { id: 11, Icon: PhotojournalismIcon, title: "Photojournalism" },
  { id: 12, Icon: VideographyIcon, title: "Videography" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

function Skills() {
  return (
    <section className="bg-[#1E1E1E] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            My <span className="text-[#00FF8C]">Skills</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            The technologies and expertise I excel at:
          </p>
        </div>

        {/* Skills Grid */}
        <motion.div
          className="mt-12 grid grid-cols-2 justify-center items-center gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skillsList.map(({ id, Icon, title }) => (
            <motion.div
              key={id}
              className="group relative justify-center items-center  overflow-hidden rounded-lg bg-[#2A2A2A] p-4 transition-all duration-300 hover:bg-[#00FF8C]/10"
              variants={itemVariants}
            >
              <div className="flex  aspect-square items-center justify-center">
                <Icon className="h-16  w-16 text-[#00FF8C] transition-all duration-300 group-hover:scale-110" />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <span className="text-center text-sm font-medium text-white">
                  {title}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
