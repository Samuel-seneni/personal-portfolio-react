import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import collabImg from "../assets/collabboard.png";
import littlespark from "../assets/littlespark.png";
import studentImg from "../assets/studentlearning.png";
import ictticketPNG from "../assets/ictticket.png";
import realestatePNG from "../assets/Realsmart.png";
import pharmacyPNG from "../assets/pharmacydashboard.png";

/* Projects */
const projects = [
  {
    id: 1,
    title: "Collaboration Board",
    description:
      "A real-time collaborative workspace for teams to manage tasks, ideas, and workflow efficiently.",
    image: collabImg,
    tech: ["React", "Tailwind", "JavaScript", "HTML"],
    github: "https://github.com/Samuel-seneni/collabboard",
    live: "https://collabboard-jet.vercel.app/",
  },
  {
    id: 2,
    title: "LittleSpark Wellness Hub",
    description:
      "A modern developer portfolio showcasing projects, engineering skills, and product thinking.",
    image: littlespark,
    tech: ["React", "Node.js", "Tailwind CSS"],
    github: "https://github.com/Samuel-seneni/littlespark-wellness",
    live: "https://littlespark-wellness.vercel.app/",
  },
  {
    id: 3,
    title: "E-Learning System",
    description:
      "An interactive learning platform enabling students to take courses and track progress in real time.",
    image: studentImg,
    tech: ["React", "Tailwind", "JavaScript", "HTML"],
    github:
      "https://github.com/Samuel-seneni/interactive-elearning-platform/tree/main/interactive-elearning-platform",
    live: "https://samuel-seneni.github.io/interactive-elearning-platform/",
  },
  {
    id: 4,
    title: "ICT Support System",
    description:
      "A scalable ticketing system for IT support requests with real-time tracking and management.",
    image: ictticketPNG,
    tech: ["React", "Tailwind", "JavaScript", "MongoDB"],
    github: "https://github.com/Samuel-seneni/ai-ict-support-frontend",
    live: "https://ai-ict-support-frontend.vercel.app/",
  },
  {
    id: 5,
    title: "Smart Real Estate",
    description:
      "AI-powered real estate platform for discovering premium properties and investment opportunities.",
    image: realestatePNG,
    tech: ["React", "Tailwind", "TypeScript", "Python"],
    github: "https://github.com/Samuel-seneni/Smart-real-estate",
    live: "https://smart-real-estate-coral.vercel.app/",
  },
  {
    id: 6,
    title: "Pharmacy Intelligence Dashboard",
    description:
      "AI-driven pharmacy management system for inventory, prescriptions, suppliers, and analytics.",
    image: pharmacyPNG,
    tech: ["React", "Tailwind", "JavaScript", "PostgreSQL"],
    github: "https://github.com/Samuel-seneni/smart-pharmacy-dashboard",
    live: "https://smart-pharmacy-dashboard-rouge.vercel.app/",
  },
];

/* Animations */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const card = {
  hidden: { y: 30, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-28 px-6 text-white bg-[#05070d]"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0ea5e9_0%,transparent_45%)] opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="px-5 py-1 text-xs tracking-widest uppercase border border-cyan-500/40 text-cyan-300 rounded-full bg-cyan-500/10">
            Selected Work
          </span>

          <h2 className="text-5xl font-bold mt-6 tracking-tight">
            Engineering Products That Matter
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A collection of real-world systems built with modern technologies,
            focusing on scalability, UX, and performance.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-10"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={card}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-cyan-500/30 via-transparent to-blue-500/30"
            >
              {/* Card */}
              <div className="bg-[#0b1220]/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/5 shadow-xl">
                
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="h-48 w-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex justify-between mt-6 text-sm">
                    <a
                      href={project.github}
                      target="_blank"
                      className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition"
                    >
                      <FaGithub /> Code
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition"
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}