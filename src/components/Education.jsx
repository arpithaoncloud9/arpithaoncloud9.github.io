import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export default function Education() {
  return (
    <section className="scroll-mt-4 mb-10" id="education">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-sm font-semibold text-gray-500 flex items-center gap-2 uppercase tracking-widest">
          <GraduationCap size={14} className="text-sky-500" /> Education
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="relative ml-2"
      >
        {/* Dot */}
        <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full bg-violet-500 ring-2 ring-violet-200 border-2 border-white shadow-md" />

        <div className="pl-10">
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 mb-0.5">
            <span className="font-bold text-gray-800 text-sm">JSS Academy of Technical Education</span>
            <span className="text-violet-600 font-medium text-xs">@ JSSATE, Bengaluru, India</span>
            <span className="text-[11px] font-mono text-gray-400 ml-auto">2013 – 2017</span>
          </div>
          <div className="text-[11px] text-gray-400 mb-3">Bengaluru, India · On-site</div>

          <Card className="shadow-sm bg-white/90 backdrop-blur-sm border-gray-200">
            <CardContent className="p-5">
              <div className="font-medium text-gray-700 text-sm">
                Bachelor of Engineering — Information Science & Engineering
              </div>
              <div className="text-gray-500 text-xs mt-2">
                Foundation in computer networks, operating systems, database systems, and software engineering.
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}
