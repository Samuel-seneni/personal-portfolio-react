import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import collabImg from "../assets/collabboard.png";
import rentalImg from "../assets/portfolio.png";
import studentImg from "../assets/studentlearning.png";

/* Projects Data */
const projects = [
  {
    title: "Collaboration Board",
    description:
      "A collaborative workspace where teams can share ideas, tasks, and updates in real time.",
    image: collabImg,
    tech: ["React", "Tailwind", "JavaScript" , "HTML"],
    github: "https://github.com/Samuel-seneni/collabboard",
    live: "https://collabboard-jet.vercel.app/",
  },

  {
    title: "Samuel Seneni's Portfolio",
    description:
      "This porfolio describe what i have done as Frontend Engineer and i will updating other projects.",
    image: rentalImg,
    tech: ["React", "Node.js", "Tailwind CSS"],
    github: "https://github.com/Samuel-seneni/personal-portfolio-react",
    live: "https://personal-portfolio-react-gamma-amber.vercel.app/",
  },

  {
    title: "Student Learning Platform",
    description:
      "An online learning platform where students can access courses and track progress.",
    image: studentImg,
    tech: ["React", "Tailwind", "JavaScript", "HTML"],
    github: "https://github.com/Samuel-seneni/interactive-elearning-platform/tree/main/interactive-elearning-platform",
    live: "https://samuel-seneni.github.io/interactive-elearning-platform/",
  },
];

/* Animation variants */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const card = {
  hidden: { y: 60, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-8 bg-gradient-to-r from-black via-[#020617] to-[#071a2f] text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 border border-cyan-400 px-4 py-1 rounded-full text-sm">
            My Work
          </span>

          <h2 className="text-4xl font-bold mt-4">Featured Projects</h2>

          <p className="text-gray-400 mt-3">
            A selection of projects showcasing my skills and experience
          </p>
        </div>

        {/* Project Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={card}
              className="bg-[#0f172a] rounded-xl border border-gray-700 overflow-hidden hover:border-cyan-400 transition"
            >

              {/* Project Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">

                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-6 text-sm">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-cyan-400"
                  >
                    <FaGithub /> Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-cyan-400"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>

                </div>

              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}