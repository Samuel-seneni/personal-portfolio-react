import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Update active link on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const homeTop = document.getElementById("home")?.offsetTop || 0;
      const aboutTop = document.getElementById("about")?.offsetTop || 0;
      const experienceTop = document.getElementById("experience")?.offsetTop || 0;
      const projectsTop = document.getElementById("projects")?.offsetTop || 0;
      const skillsTop = document.getElementById("skills")?.offsetTop || 0;
      const contactTop = document.getElementById("contact")?.offsetTop || 0;

      if (scrollY >= contactTop - 120) setActive("contact");
      else if (scrollY >= skillsTop - 120) setActive("skills");
      else if (scrollY >= projectsTop - 120) setActive("projects");
      else if (scrollY >= experienceTop - 120) setActive("experience");
      else if (scrollY >= aboutTop - 120) setActive("about");
      else setActive("home");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-xl font-bold text-cyan-400">&lt;Samuel Seneni/&gt;</h1>

        {/* Desktop & Tablet Menu */}
        <ul className="hidden sm:flex gap-8 md:gap-10 text-gray-300">
          {navLinks.map((link) => (
            <li key={link.name} className="relative group">
              <a
                href={link.href}
                onClick={() => setActive(link.id)}
                className={`px-2 py-1 transition-colors ${
                  active === link.id ? "text-cyan-400" : "text-gray-300"
                }`}
              >
                {link.name}

                {/* Sliding underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-1 w-full bg-cyan-400
                  origin-left scale-x-0 transition-transform duration-300
                  ${active === link.id ? "scale-x-100" : "group-hover:scale-x-100"}`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="sm:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="sm:hidden bg-black text-center py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setActive(link.id);
                setOpen(false); // close menu after click
              }}
              className={`block text-gray-300 hover:text-cyan-400 transition text-lg`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
