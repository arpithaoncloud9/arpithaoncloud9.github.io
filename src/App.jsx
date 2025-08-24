import Portfolio from './Portfolio'
import { motion } from "framer-motion"
import FloatingClouds from './components/FloatingClouds'
import { Linkedin, Github } from 'lucide-react'

export default function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-sky-50 to-white overflow-hidden font-sans">
      {/* Floating clouds background */}
      <FloatingClouds />

      {/* Profile Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center my-12 z-10 relative"
      >
        <img
          src="/profile.jpg"
          alt="Maria Arpitha"
          className="w-40 h-40 rounded-full shadow-lg border-4 border-gray-200"
        />
        <h1 className="text-2xl font-bold mt-4">Maria Arpitha</h1>
        <h4 className="text-l font-bold mt-4">Cloud Engineering & Solutioning</h4>
        <div className="flex space-x-6 mt-4">
          <a href="https://www.linkedin.com/in/maria-arpitha/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
            <Linkedin className="w-6 h-6 text-gray-500 hover:text-blue-700 transition-colors" />
          </a>
          <a href="https://github.com/arpithaoncloud9" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
            <Github className="w-6 h-6 text-gray-500 hover:text-black transition-colors" />
          </a>
        </div>
      </motion.div>

      {/* Portfolio Sections */}
      <Portfolio />
    </div>
  )
}
