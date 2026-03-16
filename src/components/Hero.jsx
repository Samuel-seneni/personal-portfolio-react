import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import OrbitAnimation from "./OrbitAnimation";

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const slideLeft = {
    hidden: { x: -120, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.9 } },
  };

  const slideRight = {
    hidden: { x: 120, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.9 } },
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-r from-black via-[#020617] to-[#071a2f] text-white px-4 sm:px-6 md:px-8 overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-10 items-center z-10 py-16 sm:py-20"
      >
        {/* LEFT SIDE */}
        <motion.div
          variants={slideLeft}
          className="text-center md:text-left order-2 md:order-1"
        >
          <span className="inline-block bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-xs sm:text-sm">
            Hi, I&apos;m Samuel Seneni
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-6 leading-tight">
            Front-end Developer
          </h1>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-cyan-400 mt-2 leading-tight">
            & Designer
          </h2>

          <p className="text-gray-400 mt-6 max-w-xl mx-auto md:mx-0 text-sm sm:text-base leading-relaxed">
            I am a Front-End Developer skilled in HTML, CSS, JavaScript, and
            React, passionate about building responsive, user-friendly, and
            high-performance web applications.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
            <a
              href="/Samuel-Seneni-Resume.pdf"
              download
              className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg transition text-white font-medium text-center"
            >
              Download Resume
            </a>

            <a
              href="#projects"
              className="border border-gray-600 px-6 py-3 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition text-center"
            >
              View Projects →
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 sm:gap-6 mt-10 text-xl text-gray-400 justify-center md:justify-start">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>

            <a
              href="mailto:youremail@example.com"
              className="hover:text-cyan-400 transition"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          variants={slideRight}
          className="flex justify-center order-1 md:order-2"
        >
          <div className="w-full max-w-[260px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[450px]">
            <OrbitAnimation />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}