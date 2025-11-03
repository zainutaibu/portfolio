"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleWhatsApp = () => {
    if (!name || !email || !message) {
      setStatus("⚠️ Please fill all fields before sending.");
      return;
    }

    const text = `Hello Zainab! 👋%0A%0AName: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const whatsappURL = `https://wa.me/917084208622?text=${text}`;

    window.open(whatsappURL, "_blank");
    setName("");
    setEmail("");
    setMessage("");
    setStatus("✅ Opening WhatsApp…");
    setTimeout(() => setStatus(""), 4000);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-28 text-gray-100"
      >
        <h1 className="text-4xl font-bold mb-10 text-center text-blue-400">
          Contact Me
        </h1>

        {/* GRID SECTION */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 bg-gray-900 p-10 rounded-2xl shadow-2xl border border-gray-700">
          {/* LEFT SIDE — INFO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold text-blue-400">
              Let's Work Together 🤝
            </h2>
            <p className="text-gray-400">
              I’m always open to new projects, internships, or collaborations.
              Feel free to reach out — I usually reply within a few hours.
            </p>

            <div className="space-y-3 text-gray-300">
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-blue-400" /> zainutaibu@gmail.com
              </p>
              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-400" /> +91 7084208622
              </p>
              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-blue-400" /> Mumbai, India
              </p>
            </div>

            {/* Socials */}
            <div className="flex gap-6 mt-6 text-2xl">
              <a
                href="https://github.com/zainutaibu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/zainabali0420/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:zainutaibu@gmail.com"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaEnvelope />
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE — FORM */}
          <motion.form
            onSubmit={(e) => e.preventDefault()}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-5 bg-gray-800 p-8 rounded-2xl shadow-lg"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-900 text-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-900 text-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-900 text-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />

            <button
              type="button"
              onClick={handleWhatsApp}
              className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold transition-all text-white tracking-wide"
            >
              Send via WhatsApp
            </button>

            {status && (
              <p className="text-sm text-gray-400 mt-2 animate-pulse">{status}</p>
            )}
          </motion.form>
        </div>
      </motion.div>

      {/* FOOTER */}
      <footer className="mt-20 py-6 text-center border-t border-gray-800 text-gray-400 text-sm bg-gray-950">
        <p>
          © {new Date().getFullYear()} Zainab Ali Khan. All rights reserved.
        </p>
      </footer>
    </>
  );
}
