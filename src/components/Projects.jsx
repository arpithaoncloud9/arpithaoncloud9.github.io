import { motion } from "framer-motion";
import { FolderGit2, ExternalLink } from "lucide-react";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="scroll-mt-4 mb-10" id="projects">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-sm font-semibold text-gray-500 flex items-center gap-2 uppercase tracking-widest">
          <FolderGit2 size={14} className="text-sky-500" /> Projects
        </h2>
        <span className="text-xs text-gray-400 bg-white border border-gray-200 px-2 py-0.5 rounded-full shadow-sm">
          {projects.length} resources
        </span>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: i * 0.07 }}
            className="rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden bg-white/90 backdrop-blur-sm flex flex-col group"
          >
            {/* Gradient accent bar */}
            <div className={`h-1 w-full bg-gradient-to-r ${project.accent}`} />

            <div className="p-5 flex flex-col flex-1">
              {/* Header row */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-bold text-gray-800 text-sm leading-snug group-hover:text-sky-700 transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 shrink-0">
                  {/* Active status badge */}
                  <span className="flex items-center gap-1 text-[10px] text-green-600 bg-green-50 border border-green-200 rounded-full px-2 py-0.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    Active
                  </span>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[11px] text-sky-600 hover:text-sky-800 font-medium border border-sky-200 rounded-lg px-2 py-0.5 hover:bg-sky-50 transition-colors"
                    >
                      <ExternalLink size={10} />
                      GitHub
                    </a>
                  )}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="text-[11px] font-medium bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bullets */}
              <ul className="space-y-2 flex-1">
                {project.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs text-gray-600 leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
