import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    icon: <FaGithub />,
    name: "GitHub",
    href: "https://github.com/Samuel-seneni",
  },
  {
    icon: <FaLinkedin />,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/samuel-seneni",
  },
  {
    icon: <FaTwitter />,
    name: "Twitter",
    href: "https://twitter.com/SamuelSeneni",
  },
];

const contactDetails = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "samuelmunialo2005@gmail.com",
    href: "mailto:samuelmunialo2005@gmail.com",
  },
  {
    icon: <FaPhoneAlt />,
    label: "Phone",
    value: "+254 792 529 532",
    href: "tel:+254792529532",
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "Location",
    value: "Nairobi, Kenya",
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black via-[#020617] to-[#071a2f] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          
          {/* Brand / Intro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-cyan-400">Samuel Seneni</h3>
            <p className="text-gray-400 mt-4 leading-7">
              Front-End Developer passionate about building responsive,
              user-friendly, and high-performance web applications.
            </p>

            <div className="flex gap-4 mt-6">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="w-11 h-11 rounded-xl border border-gray-700 bg-white/5 flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:border-cyan-400 transition"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h4 className="text-xl font-semibold mb-5 text-cyan-400">
              Portfolio Sections
            </h4>

            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-xl font-semibold mb-5 text-cyan-400">
              Contact Details
            </h4>

            <div className="space-y-4">
              {contactDetails.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-start gap-4 text-gray-400 hover:text-cyan-400 transition"
                >
                  <span className="mt-1 text-cyan-400">{item.icon}</span>
                  <div>
                    <p className="text-sm text-gray-500">{item.label}</p>
                    <p>{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom line */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Samuel Seneni. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}