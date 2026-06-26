import { motion } from "framer-motion";
import { Terminal, Cloud, Zap, ShieldCheck } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "4+", icon: Terminal, bg: "bg-sky-50", text: "text-sky-600" },
  { label: "Certifications", value: "7", icon: Cloud, bg: "bg-indigo-50", text: "text-indigo-600" },
  { label: "Projects Built", value: "6", icon: Zap, bg: "bg-emerald-50", text: "text-emerald-600" },
  { label: "Cloud Providers", value: "3", icon: ShieldCheck, bg: "bg-amber-50", text: "text-amber-600" },
];

export default function Hero() {
  return (
    <div id="top" className="mb-10">
      {/* Breadcrumb */}
      <div className="text-xs text-gray-400 mb-5 font-mono">
        Cloud Console &rsaquo; Dashboard
      </div>

      {/* Welcome banner */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-sky-600 to-indigo-600 rounded-xl p-6 text-white mb-6 shadow-sm"
      >
        <div className="text-xs font-mono text-sky-200 mb-1 uppercase tracking-widest">
          Active Resource
        </div>
        <h1 className="text-2xl font-bold mb-1">Maria Arpitha</h1>
        <p className="text-sky-100 text-sm">
          Cloud & DevOps Engineer &nbsp;·&nbsp; us-east-1 &nbsp;·&nbsp; H4 EAD — No Sponsorship Required
        </p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {stats.map(({ label, value, icon: Icon, bg, text }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07 }}
            className="bg-white rounded-xl border border-gray-200 p-4 flex items-center gap-3 shadow-sm"
          >
            <div className={`w-9 h-9 rounded-lg ${bg} flex items-center justify-center shrink-0`}>
              <Icon size={17} className={text} />
            </div>
            <div>
              <div className="text-xl font-bold text-gray-800 leading-tight">{value}</div>
              <div className="text-[11px] text-gray-500 leading-tight">{label}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Intro */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-xl border border-gray-200 p-6 space-y-3 text-gray-700 text-sm leading-relaxed shadow-sm"
      >
        <p>
          My background includes provisioning and managing AWS infrastructure using Terraform,
          building CI/CD pipelines with GitHub Actions and Jenkins, and designing secure multi-AZ
          architectures — gained through real production work at an EdTech SaaS company serving
          clients across the US, UK, and Southeast Asia.
        </p>
        <p>
          Based in Bristol, CT — open to remote and hybrid roles.
          Fully authorized to work in the US (H4 EAD, no sponsorship required).
        </p>
      </motion.div>
    </div>
  );
}
