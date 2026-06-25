import Hero from "./components/Hero";
import Toolbox from "./components/Toolbox";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Career from "./components/Career";
import Education from "./components/Education";
import Footer from "./components/Footer";

export default function Portfolio() {
  return (
    <div className="text-gray-800 p-6 max-w-6xl mx-auto">
      <Hero />
      <div className="flex flex-col md:flex-row gap-12 mb-16">
        <Toolbox />
        <Certifications />
      </div>
      <Projects />
      <Career />
      <Education />
      <Footer />
    </div>
  );
}
