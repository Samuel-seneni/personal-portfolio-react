import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt, FaCode, FaBriefcase } from "react-icons/fa";

export default function About() {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const fadeUp = {
    hidden: { y: 60, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8 } }
  };

  return (
    <section
      id="about"
      className="pt-14 pb-10 px-8 bg-gradient-to-r from-black via-[#020617] to-[#071a2f] text-white"
    >

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >

        {/* Title */}
        <motion.div variants={fadeUp} className="text-center mb-16">
           
           {/* About Me Button */}
          <motion.div variants={fadeUp} className="mt-6">
            <a
              href="#about"
              className="inline-block px-6 py-3 bg-cyan-400 text-black font-semibold rounded-lg hover:bg-cyan-500 transition"
            >
              About Me
            </a>
          </motion.div>

          <h2 className="text-4xl font-bold">
            Building Digital Products
          </h2>

          <p className="text-gray-400 mt-4">
            Passionate about creating seamless user experiences and scalable systems
          </p>

         

        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT CONTENT */}
          <motion.div variants={fadeUp} className="space-y-8">

            <div className="border-l-2 border-cyan-400 pl-6 text-gray-400 leading-relaxed">
              I'm a front-end developer passionate about building beautiful,
              performant web applications and modern user interfaces.
            </div>

            <div className="border-l-2 border-cyan-400 pl-6 text-gray-400 leading-relaxed">
              I specialize in modern JavaScript frameworks and have strong
              experience creating responsive and interactive web apps using
              React and Tailwind CSS.
            </div>

            <div className="border-l-2 border-cyan-400 pl-6 text-gray-400 leading-relaxed">
              Currently I'm focused on building accessible products and
              improving user experience through clean design and scalable code.
            </div>

          </motion.div>

          {/* RIGHT INFO CARDS */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-2 gap-6"
          >

            {/* Card 1 */}
            <div className="bg-[#0f172a] p-6 rounded-xl border border-gray-700 hover:border-cyan-400 transition">
              <FaCalendarAlt className="text-cyan-400 text-xl mb-3" />
              <p className="text-gray-400 text-sm">Experience</p>
              <h3 className="text-lg font-semibold mt-1">2+ Years</h3>
            </div>

            {/* Card 2 */}
            <div className="bg-[#0f172a] p-6 rounded-xl border border-gray-700 hover:border-cyan-400 transition">
              <FaMapMarkerAlt className="text-cyan-400 text-xl mb-3" />
              <p className="text-gray-400 text-sm">Location</p>
              <h3 className="text-lg font-semibold mt-1">Nairobi, Kenya</h3>
            </div>

            {/* Card 3 */}
            <div className="bg-[#0f172a] p-6 rounded-xl border border-gray-700 hover:border-cyan-400 transition">
              <FaCode className="text-cyan-400 text-xl mb-3" />
              <p className="text-gray-400 text-sm">Main Stack</p>
              <h3 className="text-lg font-semibold mt-1">React / Tailwind</h3>
            </div>

            {/* Card 4 */}
            <div className="bg-[#0f172a] p-6 rounded-xl border border-gray-700 hover:border-cyan-400 transition">
              <FaBriefcase className="text-cyan-400 text-xl mb-3" />
              <p className="text-gray-400 text-sm">Current Role</p>
              <h3 className="text-lg font-semibold mt-1">Front-End Developer</h3>
            </div>

          </motion.div>

        </div>

      </motion.div>

    </section>
  );
}