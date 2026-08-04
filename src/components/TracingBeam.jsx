import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "../lib/utils";

export default function TracingBeam({ children, className }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.4"],
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 260, damping: 40, mass: 0.4 });
  const heightPercent = useTransform(pathLength, (v) => `${v * 100}%`);

  return (
    <div ref={ref} className={cn("relative", className)}>
      <div className="absolute left-0 top-0 hidden h-full w-px sm:block md:-left-8">
        <div className="sticky top-24 h-[calc(100vh-6rem)] w-px">
          <div className="absolute inset-0 bg-line" />
          <motion.div
            style={{ height: heightPercent }}
            className="absolute left-0 top-0 w-px bg-gradient-to-b from-accent via-accent to-transparent shadow-[0_0_10px_var(--color-accent)]"
          />
        </div>
      </div>
      {children}
    </div>
  );
}
