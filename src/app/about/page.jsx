"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function page() {
  return (
    <div className="mt-28 space-y-24">
      {/* ABOUT SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 max-w-6xl mx-auto"
      >
        {/* LEFT: IMAGE */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/zainab.jpeg" // 👈 put your actual image file name here (in public folder)
            alt="Zainab Ali Khan"
            className="w-50 h-74 md:w-72 md:h-90 object-cover rounded-full shadow-lg border border-gray -700 hover:border-blue-400 transition-all duration-300"
          />
        </div>

        {/* RIGHT: ABOUT TEXT */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0">
            I'm <span className="text-blue-400 font-semibold">Zainab Ali Khan</span>, 
            a passionate Full Stack Developer who loves building responsive, 
            scalable, and visually engaging web applications. I specialize in 
            React, Next.js, Node.js, and TailwindCSS, and I enjoy transforming 
            ideas into functional digital experiences.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex justify-center md:justify-start mt-6 space-x-6 text-3xl">
            <a
              href="https://github.com/zainutaibu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/zainabali0420/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:zainutaibu@gmail.com"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </motion.section>

      {/* EDUCATION + EXPERIENCE SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto"
      >
        {/* LEFT - EDUCATION */}
        <div className="bg-gray-900/70 border border-gray-800 hover:border-blue-400/50 transition-all p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-400">
            Education
          </h2>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-200">
              Bachelor of Science in Information Technology
            </h3>
            <p className="text-gray-400 mt-1">
              Shri Mahadev Babu Rao Chaughle College
            </p>
            <p className="text-gray-300 mt-2">
              CGPA: <span className="font-medium text-gray-100">8.7</span>
            </p>
            <p className="text-gray-500 text-sm mt-1">Graduated — 2025</p>
          </div>
        </div>

        {/* RIGHT - WORK EXPERIENCE */}
        <div className="bg-gray-900/70 border border-gray-800 hover:border-blue-400/50 transition-all p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-400">
            Work Experience
          </h2>
          <div className="text-center space-y-3">
            <h3 className="text-xl font-semibold text-gray-200">
              Full Stack Developer Intern
            </h3>
            <p className="text-gray-400">Nexcore Alliance • July 03 – Present</p>
            <p className="text-gray-400 leading-relaxed">
              Completed <span className="text-gray-100 font-medium">Imagify</span> — 
              a full-featured project built using the{" "}
              <span className="text-gray-100 font-medium">MERN stack</span>, 
              focused on image generation and management.
            </p>
          
                <p className="text-gray-400 leading-relaxed">
              Completed <span className="text-gray-100 font-medium">Chat Hub</span> — 
              a real-time <span className="text-gray-100 font-medium">MERN stack</span> chat application with secure authentication and instant messaging using Socket.io{" "}
              , 
            </p>

          <p className="text-gray-400 leading-relaxed">
              Currently working on{" "}
              <span className="text-gray-100 font-medium">Zoe Beauty</span>of skin care product
            </p>



          </div>
        </div>
      </motion.section>
    </div>
  );
}
