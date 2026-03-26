import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import your images
import htmlIcon from "../assets/icons/html.png";
import cssIcon from "../assets/icons/css.png";
import jsIcon from "../assets/icons/javascript.png";
import tsIcon from "../assets/icons/typescript.png";
import reactIcon from "../assets/icons/react.png";
import nextjsIcon from "../assets/icons/nextjs.png";
import nodejsIcon from "../assets/icons/nodejs.png";
import mongodbIcon from "../assets/icons/mongodb.png";
import gitIcon from "../assets/icons/git.png";
import githubIcon from "../assets/icons/github.png";
import vscodeIcon from "../assets/icons/vscode.png";
import SQLIcon from "../assets/icons/sql.png";
import MySQLIcon from "../assets/icons/mysql.png";

// Icon mapping object
const iconImages = {
  html: htmlIcon,
  css: cssIcon,
  javascript: jsIcon,
  typescript: tsIcon,
  react: reactIcon,
  nextjs: nextjsIcon,
  nodejs: nodejsIcon,
  mongodb: mongodbIcon,
  java: javaIcon,
  python: pythonIcon,
  git: gitIcon,
  github: githubIcon,
  vscode: vscodeIcon,
};

// Categories data
const categories = [
  { id: "all", label: "All", color: "bg-gradient-to-r from-blue-500 to-cyan-500" },
  { id: "frontend", label: "Frontend", color: "bg-gradient-to-r from-purple-500 to-pink-500" },
  { id: "backend", label: "Backend", color: "bg-gradient-to-r from-green-500 to-emerald-500" },
  { id: "database", label: "Database", color: "bg-gradient-to-r from-yellow-500 to-amber-500" },
  { id: "tools", label: "Tools", color: "bg-gradient-to-r from-orange-500 to-red-500" }
];

// Skills data
const skills = [
  // Frontend
  { name: "HTML", icon: "html", level: 95, category: "frontend" },
  { name: "CSS", icon: "css", level: 90, category: "frontend" },
  { name: "JavaScript", icon: "javascript", level: 90, category: "frontend" },
  { name: "TypeScript", icon: "typescript", level: 85, category: "frontend" },
  { name: "React", icon: "react", level: 88, category: "frontend" },
  { name: "Next.js", icon: "nextjs", level: 82, category: "frontend" },
  
  // Backend
  { name: "Node.js", icon: "nodejs", level: 85, category: "backend" },
  { name: "Java", icon: "java", level: 75, category: "backend" },
  { name: "Python", icon: "python", level: 70, category: "backend" },
  
  // Database
  { name: "MongoDB", icon: "mongodb", level: 75, category: "database" },
  { name: "SQL", icon: "sql", level: 70, category: "database" },
  { name: "MySQL", icon: "mysql", level: 70, category: "database" },
  
  // Tools
  { name: "Git", icon: "git", level: 88, category: "tools" },
  { name: "GitHub", icon: "github", level: 90, category: "tools" },
  { name: "VS Code", icon: "vscode", level: 92, category: "tools" },
];

// Skill bar component
const SkillBar = ({ level }) => (
  <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: `${level}%` }}
      transition={{ duration: 1.5, delay: 0.2 }}
      className={`h-full rounded-full ${
        level > 75 ? 'bg-gradient-to-r from-green-400 to-emerald-500' : 
        level > 50 ? 'bg-gradient-to-r from-yellow-400 to-amber-500' : 
        'bg-gradient-to-r from-red-400 to-pink-500'
      }`}
    />
  </div>
);

// Infinite scroll component
const InfiniteScrollSkills = ({ skills }) => {
  const duplicatedSkills = [...skills, ...skills, ...skills];
  
  return (
    <div className="overflow-hidden py-8">
      <motion.div
        className="flex gap-6 mb-8"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {duplicatedSkills.map((skill, index) => (
          <div key={`${skill.name}-${index}`} className="flex-shrink-0 flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-gray-900 border-2 border-white/20 flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <img src={iconImages[skill.icon]} alt={skill.name} className="w-8 h-8 object-contain" />
            </div>
            <span className="text-xs sm:text-sm font-medium text-center">{skill.name}</span>
          </div>
        ))}
      </motion.div>
      
      <motion.div
        className="flex gap-6"
        animate={{ x: ["-100%", "0%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {[...duplicatedSkills].reverse().map((skill, index) => (
          <div key={`${skill.name}-reverse-${index}`} className="flex-shrink-0 flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-gray-900 border-2 border-white/20 flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <img src={iconImages[skill.icon]} alt={skill.name} className="w-8 h-8 object-contain" />
            </div>
            <span className="text-xs sm:text-sm font-medium text-center">{skill.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// Main Skills Section component
export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(skill => 
    activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-8 bg-gradient-to-r from-black via-[#020617] to-[#071a2f] text-white">
      <div className="container mx-auto max-w-6xl">
        {/* Section header with "Tech Stack" heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-20"
        >
          {/* Tech Stack heading */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="px-6 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold text-sm sm:text-base uppercase tracking-wider">
              Tech Stack
            </span>
          </motion.div>
          
          {/* Main heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            Skills & Technologies
          </h2>
          
          {/* Subheading */}
          <p className="text-white/80 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-lg">
            Technologies I've mastered and my proficiency levels
          </p>
        </motion.div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 sm:mb-16">
          {categories.map(category => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 sm:px-6 py-2.5 rounded-full font-medium border border-transparent hover:shadow-lg transition-all ${
                activeCategory === category.id
                  ? `${category.color} text-white shadow-md`
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        {/* Skills Display */}
        {activeCategory === "all" ? (
          <InfiniteScrollSkills skills={skills} />
        ) : (
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredSkills.length > 0 ? (
                filteredSkills.map(skill => (
                  <motion.div
                    key={skill.name}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white/10 p-4 sm:p-6 rounded-2xl border border-white/20 hover:border-blue-400/50 transition-all duration-300 shadow-sm hover:shadow-lg group"
                  >
                    <div className="flex items-start gap-4 mb-4 sm:mb-5">
                      <div className="w-12 h-12 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center flex-shrink-0">
                        <img src={iconImages[skill.icon]} alt={skill.name} className="w-6 h-6 object-contain" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-semibold text-base sm:text-lg group-hover:text-blue-400 transition-colors truncate">
                            {skill.name}
                          </h3>
                          <span className={`text-xs sm:text-sm font-medium px-2 py-1 rounded-full flex-shrink-0 ml-2 ${
                            skill.level > 75 ? 'bg-emerald-500/20 text-emerald-400' : 
                            skill.level > 50 ? 'bg-amber-500/20 text-amber-400' : 
                            'bg-pink-500/20 text-pink-400'
                          }`}>
                            {skill.level}%
                          </span>
                        </div>
                        <SkillBar level={skill.level} />
                        <div className="mt-2 flex justify-between text-[10px] sm:text-xs text-white/70">
                          <span>Basic</span>
                          <span>Advanced</span>
                          <span>Expert</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full text-center py-12"
                >
                  <p className="text-white/60 text-lg">No skills found in this category</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
};