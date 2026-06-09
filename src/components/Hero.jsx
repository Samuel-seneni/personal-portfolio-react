import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";
import OrbitAnimation from "./OrbitAnimation";

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const fadeUp = {
    hidden: { y: 40, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  const fadeRight = {
    hidden: { x: 80, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.9 } },
  };

  return (
    <section className="relative min-h-screen flex items-center bg-[#05070d] text-white overflow-hidden px-6">

      {/* 🌌 Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-blue-500/20 blur-[140px] rounded-full"></div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-14 items-center"
      >
        {/* LEFT CONTENT */}
        <motion.div variants={fadeUp} className="text-center md:text-left">

          {/* Badge */}
          <div className="inline-flex items-center px-5 py-2 rounded-full border border-cyan-500/30 bg-white/5 backdrop-blur-md text-cyan-300 text-xs tracking-widest uppercase">
            Available for opportunities
          </div>

          {/* Title */}
          <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
            Frontend Developer
            <span className="block text-cyan-400">
              & UI Engineer
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-gray-400 max-w-xl text-sm md:text-base leading-relaxed">
            I build modern, scalable, and high-performance web applications
            using React, Tailwind, and modern JavaScript frameworks.
            Focused on clean UI, UX, and real-world product thinking.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

            <a
              href="/SAMUEL SENENI FRONTEND RESUME.pdf"
              download
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90 transition font-medium text-white shadow-lg shadow-cyan-500/20"
            >
              Download Resume
            </a>

            <a
              href="#projects"
              className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-cyan-400 hover:text-cyan-300 transition"
            >
              Explore Projects →
            </a>
          </div>

          {/* Socials */}
          <div className="mt-10 flex gap-5 justify-center md:justify-start text-xl text-gray-400">

            <a
              href="https://github.com/Samuel-seneni"
              target="_blank"
              className="hover:text-cyan-400 transition hover:scale-110"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/samuel-seneni"
              target="_blank"
              className="hover:text-cyan-400 transition hover:scale-110"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              className="hover:text-cyan-400 transition hover:scale-110"
            >
              <FaTwitter />
            </a>

            <a
              href="mailto:youremail@example.com"
              className="hover:text-cyan-400 transition hover:scale-110"
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          variants={fadeRight}
          className="flex justify-center relative"
        >
          <div className="relative">

            {/* Glow ring */}
            <div className="absolute inset-0 blur-3xl bg-cyan-500/10 rounded-full scale-110"></div>

            {/* Main animation container */}
            <div className="relative z-10 w-[280px] sm:w-[340px] md:w-[420px]">
              <OrbitAnimation />
            </div>

          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}