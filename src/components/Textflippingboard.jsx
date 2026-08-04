import { AnimatePresence, motion } from "framer-motion";

function FlapChar({ char, delay }) {
  const isSpace = char === " ";
  return (
    <span className={`flap-tile ${isSpace ? "is-space" : ""}`}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={char + delay}
          initial={{ rotateX: -90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: 90, opacity: 0 }}
          transition={{ duration: 0.45, delay, ease: "easeInOut" }}
          className="flap-char"
        >
          {isSpace ? "\u00A0" : char}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function TextFlippingBoard({ text }) {
  const lines = text.split("\n");

  return (
    <div className="flap-board">
      {lines.map((line, li) => (
        <div key={li} className="flap-line">
          {line.split("").map((ch, ci) => (
            <FlapChar key={`${li}-${ci}`} char={ch} delay={(li * line.length + ci) * 0.02} />
          ))}
        </div>
      ))}
    </div>
  );
}