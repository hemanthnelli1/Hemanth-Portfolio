import { motion } from "framer-motion";
import { Code2, Server, Brain, Shield } from "lucide-react";
import { cn } from "../lib/utils";
const groupedSkills = [
  { icon: "code", title: "Web foundations", subtitle: "Languages & Frontend", items: ["Python", "JavaScript", "React", "HTML", "CSS", "Bootstrap"] },
  { icon: "server", title: "Backend systems", subtitle: "Server, Data & Tools", items: ["Node.js", "Flask", "FastAPI", "MySQL", "SQLite", "Git", "GitHub"] },
  { icon: "brain", title: "Algorithms & AI", subtitle: "Problem Solving & ML", items: ["Sliding Window", "Segment Trees", "Dynamic Programming", "Graph Algorithms", "Scikit-learn"] },
  { icon: "shield", title: "Security", subtitle: "Security Tooling", items: ["Wireshark", "Nmap", "Ethical Hacking"] },
];
const iconMap = { code: Code2, server: Server, brain: Brain, shield: Shield };

function BentoCard({ item, i }) {
  const Icon = iconMap[item.icon];
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -9, scale: 1.015 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
      className={cn(
        "background-gradient-card group relative overflow-hidden rounded-2xl border border-line bg-panel p-6",
        "transition-shadow hover:shadow-[0_16px_32px_rgba(45,56,66,0.16)]",
      )}
    >
      <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/5 blur-2xl transition-opacity group-hover:opacity-100 opacity-0" />
      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-panel-2 text-accent">
        <Icon className="h-5 w-5" strokeWidth={1.8} />
      </div>
      <h3 className="text-[15px] font-semibold text-ink">{item.title}</h3>
      <p className="mb-4 font-mono text-[11px] tracking-wide text-text-faint">{item.subtitle}</p>
      <div className="flex flex-wrap gap-2">
        {item.items.map((s) => (
          <span
            key={s}
            className="rounded-md border border-line bg-bg/60 px-2.5 py-1 font-mono text-[11px] text-text-dim"
          >
            {s}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function BentoGrid() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {groupedSkills.map((item, i) => (
        <BentoCard key={item.title} item={item} i={i} />
      ))}
    </div>
  );
}
