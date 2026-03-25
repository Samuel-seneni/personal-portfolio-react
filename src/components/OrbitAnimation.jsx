import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJsSquare, FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import profile from "../assets/Profile.jpeg"; // <-- add your image

export default function OrbitAnimation() {
  return (
    <div className="relative flex items-center justify-center w-[280px] sm:w-[340px] md:w-[400px] aspect-square">

      {/* OUTER ORBIT */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute w-[85%] h-[85%] border border-cyan-500/30 rounded-full"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-cyan-400 text-xl sm:text-2xl">
          <FaGithub />
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-yellow-400 text-xl sm:text-2xl">
          <FaJsSquare />
        </div>
      </motion.div>

      {/* MIDDLE ORBIT */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute w-[65%] h-[65%] border border-purple-500/30 rounded-full"
      >
        <div className="absolute left-0 top-1/2 -translate-y-1/2 text-blue-400 text-xl sm:text-2xl">
          <FaReact />
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-green-400 text-xl sm:text-2xl">
          <FaNodeJs />
        </div>
      </motion.div>

      {/* INNER ORBIT */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute w-[40%] h-[40%] border border-blue-400/30 rounded-full"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-cyan-300 text-lg sm:text-xl">
          <SiTailwindcss />
        </div>
      </motion.div>

      {/* GLOW (BACKGROUND) */}
      <div className="absolute w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 blur-2xl opacity-60"></div>

      {/* PROFILE IMAGE (CENTER) */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="relative z-10 w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg"
      >
        <img
          src={profile}
          alt="Samuel Seneni"
          className="w-full h-full object-cover"
        />
      </motion.div>

    </div>
  );
}