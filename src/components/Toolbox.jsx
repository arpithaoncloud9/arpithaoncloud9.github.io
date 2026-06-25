import { motion } from "framer-motion";
import { Wrench } from "lucide-react";
import { toolboxCategories } from "../data/toolbox";

export default function Toolbox() {
  return (
    <section className="flex-1 scroll-mt-4" id="toolbox">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-sm font-semibold text-gray-500 flex items-center gap-2 uppercase tracking-widest">
          <Wrench size={14} className="text-sky-500" /> Tech Toolbox
        </h2>
        <span className="text-xs text-gray-400 bg-white border border-gray-200 px-2 py-0.5 rounded-full shadow-sm">
          {toolboxCategories.length} categories
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {toolboxCategories.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: i * 0.06 }}
            className={`rounded-xl border ${cat.color} p-4 hover:shadow-md transition-all duration-200 bg-white/80 backdrop-blur-sm`}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">{cat.icon}</span>
              <span className="font-semibold text-sm text-gray-700">{cat.label}</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {cat.tools.map((tool, j) => (
                <span
                  key={j}
                  className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${cat.badge}`}
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
