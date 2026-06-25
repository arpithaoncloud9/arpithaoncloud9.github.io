import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "../data/certifications";

export default function Certifications() {
  return (
    <section className="flex-1 scroll-mt-4" id="certifications">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-sm font-semibold text-gray-500 flex items-center gap-2 uppercase tracking-widest">
          <Award size={14} className="text-yellow-500" /> Certifications
        </h2>
        <span className="text-xs text-gray-400 bg-white border border-gray-200 px-2 py-0.5 rounded-full shadow-sm">
          {certifications.length} active
        </span>
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        {certifications.map((cert, i) => (
          <motion.a
            key={i}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ scale: 1.08, y: -4 }}
            className="block"
          >
            <img
              src={cert.src}
              alt={cert.alt}
              className="w-36 h-36 rounded-2xl shadow-md bg-white/90 object-contain p-3 border border-gray-100 hover:shadow-xl transition-shadow duration-200"
            />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
