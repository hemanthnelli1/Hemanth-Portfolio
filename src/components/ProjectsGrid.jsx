import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/content";

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -9, scale: 1.012 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.32, delay: index * 0.06 }}
      className="background-gradient-card project-card relative flex flex-col justify-between rounded-2xl border border-line bg-panel p-7"
    >
      <div>
        <span className="mb-5 block font-mono text-3xl font-bold text-line">{project.index}</span>
        <h3 className="mb-2.5 text-xl font-semibold text-ink">{project.title}</h3>
        <p className="mb-5 text-[13.5px] leading-relaxed text-text-dim">{project.description}</p>
      </div>
      <div>
        <div className="mb-5 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-md border border-line bg-bg/60 px-2.5 py-1 font-mono text-[10.5px] text-text-dim">{tag}</span>)}</div>
        <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 font-mono text-[12px] tracking-wide text-accent">Live Demo <ArrowUpRight className="h-3.5 w-3.5" /></a>
      </div>
    </motion.article>
  );
}

export default function ProjectsGrid() {
  return <div className="grid grid-cols-1 gap-5 md:grid-cols-3">{projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</div>;
}
