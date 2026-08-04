import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { experience } from "../data/content";

export default function Timeline() {
  return (
    <div className="relative">
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line sm:left-[9px]" />
      <div className="space-y-10">
        {experience.map((job, i) => (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative pl-8 sm:pl-10"
          >
            <span className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-bg sm:h-5 sm:w-5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            </span>

            <div className="mb-1 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] tracking-wide text-text-faint">
              <span>{job.date}</span>
              <span className="flex items-center gap-1">
                <MapPin className="h-3 w-3" /> {job.location}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-ink">{job.title}</h3>
            <p className="mb-3 font-mono text-[12.5px] tracking-wide text-accent">{job.company}</p>
            <ul className="space-y-2">
              {job.points.map((pt, j) => (
                <li key={j} className="flex gap-2 text-[13.5px] leading-relaxed text-text-dim">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-text-faint" />
                  {pt}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
