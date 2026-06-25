import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LINES = [
  { text: "Connecting to portfolio.arpithaoncloud9.github.io...", type: "info", at: 0 },
  { text: "", type: "blank", at: 220 },
  { text: "$ terraform init", type: "cmd", at: 380 },
  { text: "  Initializing provider plugins...", type: "out", at: 540 },
  { text: "  - Installing hashicorp/aws v5.83.0...", type: "out", at: 700 },
  { text: "  ✓ Terraform initialized successfully.", type: "ok", at: 880 },
  { text: "", type: "blank", at: 1020 },
  { text: "$ terraform apply -auto-approve", type: "cmd", at: 1120 },
  { text: "  aws_vpc.main: Creating...                  ✓  [id=vpc-0a3f1c2d9e4b]", type: "out", at: 1260 },
  { text: "  aws_subnet.public[0]: Creating...          ✓", type: "out", at: 1390 },
  { text: "  aws_eks_cluster.main: Creating...          ✓", type: "out", at: 1520 },
  { text: "  aws_db_instance.rds_mysql: Creating...     ✓", type: "out", at: 1650 },
  { text: "  aws_lb.alb_main: Creating...               ✓", type: "out", at: 1780 },
  { text: "  Apply complete! Resources: 12 added, 0 changed, 0 destroyed.", type: "ok", at: 1930 },
  { text: "", type: "blank", at: 2080 },
  { text: "$ kubectl get pods -n production", type: "cmd", at: 2180 },
  { text: "  NAME                         READY   STATUS    RESTARTS   AGE", type: "out", at: 2330 },
  { text: "  portfolio-deploy-7d4f-xk2p   1/1     Running   0          3s", type: "out", at: 2480 },
  { text: "  portfolio-deploy-7d4f-m7rq   1/1     Running   0          3s", type: "out", at: 2630 },
  { text: "", type: "blank", at: 2780 },
  { text: "Launching Cloud Management Console...", type: "info", at: 2880 },
];

const BAR_AT = 2960;
const DONE_AT = 3500;
const COMPLETE_AT = 3750;

export default function TerminalBoot({ onComplete }) {
  const [shown, setShown] = useState([]);
  const [showBar, setShowBar] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timers = LINES.map((line) =>
      setTimeout(() => setShown((p) => [...p, line]), line.at)
    );
    const t1 = setTimeout(() => setShowBar(true), BAR_AT);
    const t2 = setTimeout(() => setDone(true), DONE_AT);
    const t3 = setTimeout(onComplete, COMPLETE_AT);

    const skip = () => onComplete();
    const skipTimer = setTimeout(() => {
      window.addEventListener("keydown", skip);
      window.addEventListener("pointerdown", skip);
    }, 600);

    return () => {
      [...timers, t1, t2, t3, skipTimer].forEach(clearTimeout);
      window.removeEventListener("keydown", skip);
      window.removeEventListener("pointerdown", skip);
    };
  }, [onComplete]);

  const colorClass = {
    cmd: "text-yellow-300",
    ok: "text-green-400",
    info: "text-sky-400",
    out: "text-gray-300",
    blank: "text-gray-300",
  };

  return (
    <div className="fixed inset-0 bg-[#0d1117] flex items-center justify-center p-6 font-mono">
      <div className="w-full max-w-2xl">
        {/* Terminal window */}
        <div className="bg-[#161b22] rounded-xl border border-gray-700/60 shadow-2xl overflow-hidden">
          {/* Traffic lights */}
          <div className="flex items-center gap-1.5 px-4 py-3 bg-[#1c2128] border-b border-gray-700/60">
            <span className="w-3 h-3 rounded-full bg-red-500/90" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/90" />
            <span className="w-3 h-3 rounded-full bg-green-500/90" />
            <span className="ml-3 text-xs text-gray-500 select-none">
              arpithaoncloud9 — zsh — 120×36
            </span>
          </div>

          {/* Output */}
          <div className="p-5 text-[13px] leading-[1.65] min-h-72">
            {shown.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1 }}
                className={colorClass[line.type] ?? "text-gray-300"}
              >
                {line.text || " "}
              </motion.div>
            ))}

            {showBar && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="mt-3 space-y-1.5"
              >
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-sky-500 to-sky-400 rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.55, ease: "easeInOut" }}
                    />
                  </div>
                  <span className="text-sky-400 text-xs tabular-nums">100%</span>
                </div>
                {done && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="text-green-400"
                  >
                    ✓ All systems operational. Welcome, Maria Arpitha.
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* Blinking cursor */}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
              className="inline-block w-[7px] h-[13px] bg-gray-400 align-middle ml-0.5"
            />
          </div>
        </div>

        <p className="text-center text-gray-600 text-xs mt-3 select-none">
          Click or press any key to skip
        </p>
      </div>
    </div>
  );
}
