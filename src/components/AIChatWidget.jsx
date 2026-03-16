import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot } from "lucide-react";

const predefinedAnswers = {
  hello: "Hello. Welcome to Samuel Seneni's portfolio. How can I help you today?",
  skills:
    "Samuel is skilled in HTML, CSS, JavaScript, React, responsive design, and front-end development.",
  projects:
    "You can explore the projects section to view Samuel's recent work, technologies used, and key achievements.",
  contact:
    "You can reach Samuel through the contact section, LinkedIn, GitHub, or email.",
  experience:
    "Samuel has experience building responsive, user-friendly, and performance-focused front-end applications.",
  resume:
    "You can download Samuel's resume using the Download Resume button in the hero section.",
  default:
    "I can help with questions about Samuel's skills, projects, experience, contact details, and resume.",
};

function getBotReply(message) {
  const text = message.toLowerCase();

  if (text.includes("hello") || text.includes("hi")) {
    return predefinedAnswers.hello;
  }
  if (text.includes("skill") || text.includes("technology")) {
    return predefinedAnswers.skills;
  }
  if (text.includes("project") || text.includes("work")) {
    return predefinedAnswers.projects;
  }
  if (text.includes("contact") || text.includes("email") || text.includes("reach")) {
    return predefinedAnswers.contact;
  }
  if (text.includes("experience") || text.includes("background")) {
    return predefinedAnswers.experience;
  }
  if (text.includes("resume") || text.includes("cv")) {
    return predefinedAnswers.resume;
  }

  return predefinedAnswers.default;
}

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello. I am Samuel's portfolio assistant. Ask me about skills, projects, experience, or contact details.",
    },
  ]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    const botMessage = { sender: "bot", text: getBotReply(input) };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="w-[320px] sm:w-[360px] h-[480px] bg-[#081120]/95 backdrop-blur-xl border border-cyan-500/20 rounded-2xl shadow-2xl overflow-hidden mb-4"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Bot size={18} />
                </div>
                <div>
                  <h3 className="text-white text-sm font-semibold">AI Assistant</h3>
                  <p className="text-white/50 text-xs">Portfolio helper</p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white transition"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="h-[360px] overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-2 rounded-2xl text-sm leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-cyan-500 text-white"
                        : "bg-white/10 text-white border border-white/10"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-white/10 bg-black/20">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask a question..."
                  className="flex-1 bg-white/10 border border-white/10 text-white placeholder:text-white/40 px-4 py-2 rounded-xl outline-none focus:border-cyan-400 text-sm"
                />
                <button
                  onClick={handleSend}
                  className="w-10 h-10 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition flex items-center justify-center text-white"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-14 h-14 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white shadow-xl flex items-center justify-center"
        aria-label="Open AI Chat"
      >
        <MessageCircle size={24} />
      </motion.button>
    </div>
  );
}