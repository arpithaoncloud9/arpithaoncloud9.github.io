import { useState } from "react";
import {
  LayoutDashboard, FolderGit2, Briefcase,
  Wrench, Award, GraduationCap, Linkedin, Github,
} from "lucide-react";

const NAV_ITEMS = [
  { id: "top",            label: "Dashboard",      icon: LayoutDashboard },
  { id: "projects",       label: "Projects",       icon: FolderGit2 },
  { id: "career",         label: "Experience",     icon: Briefcase },
  { id: "toolbox",        label: "Tech Toolbox",   icon: Wrench },
  { id: "certifications", label: "Certifications", icon: Award },
  { id: "education",      label: "Education",      icon: GraduationCap },
];

export default function ConsoleSidebar({ mainRef }) {
  const [active, setActive] = useState("top");

  const navigate = (id) => {
    setActive(id);
    const container = mainRef?.current;
    if (!container) return;
    if (id === "top") {
      container.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById(id);
      if (el) {
        container.scrollTo({
          top: el.offsetTop - 16,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <aside className="w-52 bg-[#0f1923] border-r border-[#1a2535] flex flex-col shrink-0">
      {/* Profile */}
      <div className="p-4 border-b border-[#1a2535] flex flex-col items-center text-center gap-1.5">
        <img
          src="./images/profile.jpg"
          alt="Maria Arpitha"
          className="w-14 h-14 rounded-full border-2 border-sky-500/40 object-cover shadow-md"
        />
        <div className="text-white font-semibold text-sm leading-tight mt-0.5">
          Maria Arpitha
        </div>
        <div className="text-sky-400 text-[11px] leading-tight">
          Cloud & DevOps Engineer
        </div>
        <div className="flex gap-3 mt-1">
          <a
            href="https://www.linkedin.com/in/maria-arpitha/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={15} className="text-gray-500 hover:text-sky-400 transition-colors" />
          </a>
          <a
            href="https://github.com/arpithaoncloud9"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github size={15} className="text-gray-500 hover:text-sky-400 transition-colors" />
          </a>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-3">
        <div className="px-4 pb-1.5 text-[10px] font-semibold uppercase tracking-widest text-gray-600">
          Services
        </div>
        {NAV_ITEMS.map(({ id, label, icon: Icon }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              onClick={() => navigate(id)}
              className={`w-full flex items-center gap-2.5 px-4 py-2 text-xs text-left transition-colors border-l-2 ${
                isActive
                  ? "bg-sky-500/10 border-sky-400 text-sky-300"
                  : "border-transparent text-gray-400 hover:text-white hover:bg-[#1a2535]"
              }`}
            >
              <Icon size={14} className="shrink-0" />
              {label}
            </button>
          );
        })}
      </nav>

      {/* Status */}
      <div className="px-4 py-3 border-t border-[#1a2535]">
        <div className="flex items-center gap-2 text-[11px] text-gray-600">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
          All systems operational
        </div>
      </div>
    </aside>
  );
}
