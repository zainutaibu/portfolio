import Image from "next/image";

export default function Skills() {
  const skills = [
    { name: "HTML", logo: "/skills/html.png" },
    { name: "CSS", logo: "/skills/css.png" },
    { name: "JavaScript", logo: "/skills/javascript.png" },
    { name: "Tailwind CSS", logo: "/skills/tailwind.png" },
    { name: "React.js", logo: "/skills/react.png" },
    { name: "Next.js", logo: "/skills/nextjs.png" },
    { name: "Node.js", logo: "/skills/node.png" },
    { name: "Express.js", logo: "/skills/express.png" },
    { name: "MongoDB", logo: "/skills/mongodb.png" },
    { name: "Figma", logo: "/skills/figma.png" },
    { name: "Postman", logo: "/skills/postman.png" },
    { name: "Excel", logo: "/skills/excel.png" },
    {name:"MySql", logo:"/skills/mysql.png"},
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-be from-[#000814] to-[#001d3d] text-white text-center"
    >
      <h2 className="text-4xl font-bold mb-12 tracking-wide">Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 px-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-[#001233] rounded-xl p-5 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
          >
            <div className="w-16 h-16 relative mb-3">
              <Image
                src={skill.logo}
                alt={skill.name}
                fill
                className="object-contain rounded-full"
              />
            </div>
            <p className="text-sm font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
