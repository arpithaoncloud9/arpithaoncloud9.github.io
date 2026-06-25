import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TerminalBoot from "./components/TerminalBoot";
import ConsoleHeader from "./components/ConsoleHeader";
import ConsoleSidebar from "./components/ConsoleSidebar";
import FloatingClouds from "./components/FloatingClouds";
import Portfolio from "./Portfolio";

export default function App() {
  const [booted, setBooted] = useState(false);
  const mainRef = useRef(null);
  const handleBootComplete = useCallback(() => setBooted(true), []);

  return (
    <AnimatePresence mode="wait">
      {!booted ? (
        <motion.div
          key="boot"
          className="fixed inset-0"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <TerminalBoot onComplete={handleBootComplete} />
        </motion.div>
      ) : (
        <motion.div
          key="console"
          className="flex flex-col h-screen overflow-hidden font-sans bg-gradient-to-br from-sky-100 via-sky-50 to-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Clouds sit at z-[1] — visible through transparent main, hidden behind opaque cards */}
          <FloatingClouds />

          <ConsoleHeader />

          <div className="flex flex-1 overflow-hidden relative z-[2]">
            <ConsoleSidebar mainRef={mainRef} />
            <main
              ref={mainRef}
              className="flex-1 overflow-y-auto scroll-smooth"
            >
              <Portfolio />
            </main>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
