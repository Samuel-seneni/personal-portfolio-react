import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJsSquare, FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export default function OrbitAnimation() {
  return (
    <div className="relative flex items-center justify-center w-[400px] h-[400px]">

      {/* Outer Orbit */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute w-[350px] h-[350px] border border-cyan-500/30 rounded-full"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-cyan-400 text-2xl">
          <FaGithub />
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-yellow-400 text-2xl">
          <FaJsSquare />
        </div>
      </motion.div>

      {/* Middle Orbit */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute w-[250px] h-[250px] border border-purple-500/30 rounded-full"
      >
        <div className="absolute left-0 top-1/2 -translate-y-1/2 text-blue-400 text-2xl">
          <FaReact />
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-green-400 text-2xl">
          <FaNodeJs />
        </div>
      </motion.div>

      {/* Inner Orbit */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute w-[160px] h-[160px] border border-blue-400/30 rounded-full"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-cyan-300 text-2xl">
          <SiTailwindcss />
        </div>
      </motion.div>

      {/* Center Glow */}
      <div className="w-28 h-28 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 blur-xl opacity-80"></div>

    </div>
  );
}