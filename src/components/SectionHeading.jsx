import { motion } from "framer-motion";

export default function SectionHeading({ number, label, title }) {
  const words = title.split(" ");
  const last = words.pop();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <div className="mb-3 flex items-center gap-3 font-mono text-[12px] tracking-[0.2em] text-accent">
        <span className="text-text-faint">{number}</span>
        <span className="h-px w-8 bg-line" />
        {label.toUpperCase()}
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {words.length ? `${words.join(" ")} ` : ""}
        <span className="font-serif-italic">{last}</span>
      </h2>
    </motion.div>
  );
}
