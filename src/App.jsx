
import Portfolio from './Portfolio';
import { motion } from "framer-motion";
import FloatingClouds from './components/FloatingClouds';
import { Linkedin, Github } from 'lucide-react';

export default function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-sky-50 to-white overflow-hidden font-sans scroll-smooth">
      {/* Floating clouds background */}
      <FloatingClouds />

      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-slate-100 shadow-sm flex justify-center py-2 gap-8 text-sm font-medium">
        <a href="#profile" className="hover:text-sky-600 transition-colors">Profile</a>
        <a href="#certifications" className="hover:text-sky-600 transition-colors">Certifications</a>
        <a href="#toolbox" className="hover:text-sky-600 transition-colors">Tech Toolbox</a>
        <a href="#career" className="hover:text-sky-600 transition-colors">Career</a>
      </nav>

      {/* Profile Section */}
      <section id="profile" className="flex flex-col items-center my-16 z-10 relative scroll-mt-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <img
            src="./images/profile.jpg"
            alt="Maria Arpitha"
            className="w-40 h-40 rounded-full shadow-lg border-4 border-gray-200 object-cover"
          />
          <h1 className="text-3xl font-bold mt-6">Maria Arpitha</h1>
          <motion.h4
            className="text-lg font-semibold mt-2 text-sky-700"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            Cloud Engineering & Solutioning
          </motion.h4>
          <div className="flex space-x-6 mt-4">
            <a href="https://www.linkedin.com/in/maria-arpitha/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <Linkedin className="w-7 h-7 text-gray-500 hover:text-blue-700 transition-colors" />
            </a>
            <a href="https://github.com/arpithaoncloud9" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              <Github className="w-7 h-7 text-gray-500 hover:text-black transition-colors" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Portfolio Sections */}
      <Portfolio />
    </div>
  );
}
