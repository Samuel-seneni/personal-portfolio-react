import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import { SkillsSection } from "./components/Skills";
import { TestimonialsSection } from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AIChatWidget from "./components/AIChatWidget";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <SkillsSection />
      <TestimonialsSection />
      <Contact />
      <Footer />
      <AIChatWidget />
      

    </>
  );
}

export default App;