import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroBg from "../assets/7.png";
import { profile } from "../data/content";

export default function Hero() {
  return (
    <header id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden text-center">
      {/* Deliberately static: neither this image nor its crop is animated. */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})`, backgroundPosition: "center 38%" }}
      />

      {/* The only hero effects: a stationary dot field and a gentle light sweep. */}
      <div className="hero-pixels" />
      <div className="hero-shine" />
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,.55)_100%)]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="hero-content relative z-20 w-full px-6"
      >
        <h1 className="text-[13vw] font-black leading-none tracking-tight text-white sm:text-[9vw] md:text-[6vw] lg:text-[100px]">
          hi, i&apos;m hemanth.
        </h1>
        <p className="mt-6 font-mono uppercase tracking-[0.22em] text-white">{profile.role}</p>
        <p className="mt-2 font-mono text-white/70">{profile.location}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.2, duration: 2.4, repeat: Infinity }}
        className="absolute bottom-8 right-8 z-30 hidden items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-white/70 sm:flex"
      >
        Scroll to explore
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/30 backdrop-blur-md">
          <ArrowDown size={15} />
        </div>
      </motion.div>
    </header>
  );
}
