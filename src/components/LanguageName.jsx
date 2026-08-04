import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const names = ["Hemanth Nelli", "హేమంత్ నెల్లి"];

export default function LanguageName() {
  const [index, setIndex] = useState(0);
  return (
    <span
      className="language-name"
      aria-label="Hemanth in English and Telugu"
      onMouseEnter={() => setIndex(1)}
      onMouseLeave={() => setIndex(0)}
      onFocus={() => setIndex(1)}
      onBlur={() => setIndex(0)}
      tabIndex="0"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={names[index]}
          initial={{ y: 16, opacity: 0, rotateX: -65 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          exit={{ y: -16, opacity: 0, rotateX: 65 }}
          transition={{ duration: 0.38, ease: "easeOut" }}
        >
          <span className={index === 1 ? "language-name-telugu" : undefined}>{names[index]}</span>
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
