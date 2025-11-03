"use client";

import Projects from "@/components/Porjects";
import Skills from "@/components/skill";
import { motion } from "framer-motion";

export default function Home() {
  return (
     <>
    <div className="mt-28 space-y-24">
      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, I'm <span className="text-blue-400">Zainab Ali Khan</span>
        </h1>

        <p className="mt-4 text-xl md:text-2xl text-gray-300">
          Full Stack Developer
        </p>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          I build modern web applications using MERN Stack, Next.js, and TailwindCSS
          with clean, elegant UI and efficient backend systems.
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <a
            href="/ZAINAB RESUME.pdf"
            download
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
          >
            Download Resume
          </a>
          <a
            href="https://github.com/zainutaibu/"
            className="px-6 py-3 border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white rounded-lg font-semibold transition"
          >
            View Projects
          </a>
        </div>
      </motion.section>


    </div>
      <Skills/>
    <Projects/>
  
   </>
  );
}
