import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "../lib/utils";

export default function TextGenerateEffect({ words, className, wordClassName }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const parts = words.split(" ");

  return (
    <p ref={ref} className={cn("flex flex-wrap", className)}>
      {parts.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: "blur(6px)", y: 8 }}
          animate={inView ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
          transition={{ duration: 0.5, delay: i * 0.045, ease: "easeOut" }}
          className={cn("mr-[0.28em] inline-block", wordClassName)}
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
}
