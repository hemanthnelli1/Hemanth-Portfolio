import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Home, User, Briefcase, FolderGit2, Award, Mail } from "lucide-react";

const items = [
  { title: "Home", href: "#home", icon: Home },
  { title: "About", href: "#about", icon: User },
  { title: "Experience", href: "#experience", icon: Briefcase },
  { title: "Projects", href: "#projects", icon: FolderGit2 },
  { title: "Achievements", href: "#achievements", icon: Award },
  { title: "Contact", href: "#contact", icon: Mail },
];

function DockIcon({ item }) {
  const [hovered, setHovered] = useState(false);
  const Icon = item.icon;
  return (
    <a
      href={item.href}
      aria-label={item.title}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex aspect-square items-center justify-center rounded-full bg-[#f6f2ea] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)] text-ink outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      {hovered && (
        <motion.span
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-ink px-2.5 py-1 font-mono text-[10px] tracking-wide text-cream-2"
        >
          {item.title}
        </motion.span>
      )}
      <Icon className="h-[45%] w-[45%]" strokeWidth={2} />
    </a>
  );
}

function DockItemMotion({ mouseX, item }) {
  const ref = useRef(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-140, 0, 140], [40, 62, 40]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 200, damping: 14 });

  return (
    <motion.div ref={ref} style={{ width }} className="aspect-square">
      <DockIcon item={item} />
    </motion.div>
  );
}

export default function FloatingDock() {
  const mouseX = useMotionValue(Infinity);

  return (
    <div className="fixed inset-x-0 bottom-6 z-50 flex justify-center px-4 sm:bottom-8">
      <motion.nav
        onMouseMove={(e) => mouseX.set(e.clientX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        aria-label="Primary"
        className="dock-noise glossy-border flex items-end gap-2.5 rounded-[22px] bg-cream/95 px-3 py-2.5 shadow-[0_10px_30px_rgba(20,18,12,0.14),0_0_0_1px_rgba(0,0,0,0.06)] backdrop-blur-md"
      >
        {items.map((item) => (
          <DockItemMotion key={item.title} mouseX={mouseX} item={item} />
        ))}
      </motion.nav>
    </div>
  );
}
