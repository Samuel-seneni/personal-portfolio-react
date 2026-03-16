import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaPaperPlane,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "samuelmunialo2005@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "Location",
    value: "Nairobi, Kenya",
  },
  {
    icon: <FaClock />,
    label: "Availability",
    value: "Open to opportunities",
  },
];

const socials = [
  { icon: <FaGithub />, link: "https://github.com/Samuel-seneni" },
  { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/samuel-seneni" },
  { icon: <FaTwitter />, link: "https://twitter.com/SamuelSeneni" },
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [messageStatus, setMessageStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessageStatus("");

    emailjs
      .sendForm(
        "service_dwyoij2",
        "template_9wka6iw",
        form.current,
        {
          publicKey: "5Ge-dmztrmXYqAK3a",
        }
      )
      .then(
        () => {
          setLoading(false);
          setMessageStatus("Message sent successfully.");
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          setMessageStatus("Failed to send message. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-8 bg-gradient-to-r from-black via-[#020617] to-[#071a2f] text-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 border border-cyan-400 px-4 py-1 rounded-full text-sm">
            Get In Touch
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Let's Work Together
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing together
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          <div className="space-y-8">
            <div className="space-y-5">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl border border-cyan-500/40 bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-lg shrink-0">
                    {item.icon}
                  </div>

                  <div>
                    <p className="text-gray-400 text-sm">{item.label}</p>
                    <p className="text-white font-medium mt-1">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={itemVariants}
              className="rounded-2xl border border-gray-700 bg-white/5 backdrop-blur-sm p-6"
            >
              <h3 className="text-cyan-400 font-semibold mb-3">Fun Fact</h3>
              <p className="text-gray-300 leading-7">
                When I'm not coding, you'll find me building projects, learning
                new technologies, and improving my design skills.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-gray-400 mb-4">Connect with me</p>

              <div className="flex gap-4">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl border border-gray-700 bg-white/5 flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:border-cyan-400 transition"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants}>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label className="block text-sm text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your name"
                  required
                  className="w-full rounded-xl border border-gray-700 bg-white/5 px-4 py-4 text-white placeholder:text-gray-500 outline-none focus:border-cyan-400 transition"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="your.email@example.com"
                  required
                  className="w-full rounded-xl border border-gray-700 bg-white/5 px-4 py-4 text-white placeholder:text-gray-500 outline-none focus:border-cyan-400 transition"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Tell me about your project..."
                  required
                  className="w-full rounded-xl border border-gray-700 bg-white/5 px-4 py-4 text-white placeholder:text-gray-500 outline-none focus:border-cyan-400 transition resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-4 rounded-xl transition flex items-center justify-center gap-3 disabled:opacity-70"
              >
                <FaPaperPlane />
                {loading ? "Sending..." : "Send Message"}
              </button>

              {messageStatus && (
                <p className="text-sm text-gray-300">{messageStatus}</p>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}