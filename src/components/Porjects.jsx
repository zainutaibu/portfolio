import { motion } from "framer-motion";


const projects = [
  {
    title: "IMAGIFY – Image Gallery App",
    desc: "A responsive image upload and gallery built using the MERN stack.",
    link: "https://imagify-1-npp7.onrender.com//",
    image: "/imagify.png"
  },
];

export default function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="mt-24"
    >
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((proj, i) => (
          <div key={i} className="bg-gray-900 rounded-xl overflow-hidden shadow hover:shadow-blue-500/40 transition">
            <img src={proj.image} alt={proj.title} className="w-full h-52 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-gray-400 mb-4">{proj.desc}</p>
              <a
                href={proj.link}
                target="_blank"
                className="inline-block px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
