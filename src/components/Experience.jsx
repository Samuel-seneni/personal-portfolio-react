import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";

export default function Experience() {

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section
      id="experience"
      className="py-24 px-8 bg-gradient-to-r from-black via-[#020617] to-[#071a2f] text-white"
    >

      <div className="max-w-6xl mx-auto">

        {/* Section Header */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <span className="text-cyan-400 text-sm border border-cyan-400 px-4 py-1 rounded-full">
            Career Journey
          </span>

          <h2 className="text-4xl font-bold mt-4">
            Professional Experience
          </h2>

          <p className="text-gray-400 mt-3">
            A timeline of my professional growth and key contributions
          </p>

        </motion.div>


        {/* Timeline */}

        <div className="relative border-l border-cyan-400 pl-10 space-y-16">

          {/* Experience 1 */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative"
          >

            <div className="absolute -left-[22px] top-2 w-3 h-3 bg-cyan-400 rounded-full"></div>

            <div className="bg-[#0f172a] p-6 rounded-xl border border-gray-700">

              <div className="flex justify-between items-center">

                <h3 className="text-xl font-semibold">
                  Front-End Developer
                </h3>

                <span className="flex items-center text-sm text-gray-400">
                  <FaCalendarAlt className="mr-2" />
                  2023 — Present
                </span>

              </div>

              <p className="text-cyan-400 mt-1">
                Freelance / Personal Projects
              </p>

              <ul className="mt-4 space-y-2 text-gray-400 list-disc ml-4">

                <li>
                  Developed responsive web applications using React and Tailwind CSS
                </li>

                <li>
                  Built modern UI interfaces with clean and scalable component architecture
                </li>

                <li>
                  Integrated APIs and optimized application performance
                </li>

              </ul>

              {/* Tech stack */}

              <div className="flex flex-wrap gap-3 mt-5">

                <span className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-md text-sm">
                  React
                </span>

                <span className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-md text-sm">
                  JavaScript
                </span>

                <span className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-md text-sm">
                  Tailwind CSS
                </span>

                <span className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-md text-sm">
                  Git
                </span>

              </div>

            </div>

          </motion.div>

           <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative"
          >

            <div className="absolute -left-[22px] top-2 w-3 h-3 bg-cyan-400 rounded-full"></div>

            <div className="bg-[#0f172a] p-6 rounded-xl border border-gray-700">

              <div className="flex justify-between items-center">

                <h3 className="text-xl font-semibold">
                  Front-End Developer
                </h3>

                <span className="flex items-center text-sm text-gray-400">
                  <FaCalendarAlt className="mr-2" />
                  2023 — Present
                </span>

              </div>

              <p className="text-cyan-400 mt-1">
                Education and Training 
              </p>

              <ul className="mt-4 space-y-2 text-gray-400 list-disc ml-4">

                <li>
                  Developed responsive web applications using React and Tailwind CSS
                </li>

                <li>
                  Built modern UI interfaces with clean and scalable component architecture
                </li>

                <li>
                  Integrated APIs and optimized application performance
                </li>

              </ul>

              {/* Tech stack */}

              <div className="flex flex-wrap gap-3 mt-5">

                <span className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-md text-sm">
                  React
                </span>

                <span className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-md text-sm">
                  JavaScript
                </span>

                <span className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-md text-sm">
                  Tailwind CSS
                </span>

                <span className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-md text-sm">
                  Git
                </span>

              </div>

            </div>

          </motion.div>


          {/* Experience 3 */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative"
          >

            <div className="absolute -left-[22px] top-2 w-3 h-3 bg-cyan-400 rounded-full"></div>

            <div className="bg-[#0f172a] p-6 rounded-xl border border-gray-700">

              <div className="flex justify-between items-center">

                <h3 className="text-xl font-semibold">
                  Junior Frontend Developer
                </h3>

                <span className="flex items-center text-sm text-gray-400">
                  <FaCalendarAlt className="mr-2" />
                  2022 — 2023
                </span>

              </div>

              <p className="text-cyan-400 mt-1">
                Training & Education
              </p>

              <ul className="mt-4 space-y-2 text-gray-400 list-disc ml-4">

                <li>
                  Delivered training sessions on digital skills and Website Development
                </li>

                <li>
                  Guided students in software development fundamentals
                </li>

                <li>
                  Assisted learners in building web development projects
                </li>

              </ul>

              <div className="flex flex-wrap gap-3 mt-5">

                <span className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-md text-sm">
                  HTML
                </span>

                <span className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-md text-sm">
                  CSS
                </span>

                <span className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-md text-sm">
                  JavaScript
                </span>

                <span className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-md text-sm">
                  Training
                </span>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}