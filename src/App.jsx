import { motion } from "framer-motion";
import { Mail, Globe, ArrowUpRight } from "lucide-react";
import Hero from "./components/Hero";
import { Analytics } from "@vercel/analytics/react";
import FloatingDock from "./components/FloatingDock";
import SectionHeading from "./components/SectionHeading";
import TextGenerateEffect from "./components/TextGenerateEffect";
import TracingBeam from "./components/TracingBeam";
import Timeline from "./components/Timeline";
import BentoGrid from "./components/BentoGrid";
import ProjectsGrid from "./components/ProjectsGrid";
import InfiniteMovingCards from "./components/InfiniteMovingCards";
import BackgroundBeams from "./components/BackgroundBeams";
import Sparkles from "./components/Sparkles";
import Footer from "./components/Footer";
import AuroraGlow from "./components/AuroraGlow";
import FlipBoardSection from "./components/Flipboardsection";
import GrainPhoto from "./components/GrainPhoto";
import LanguageName from "./components/LanguageName";
import ExperienceGlobe from "./components/ExperienceGlobe";
import MysteryVault from "./components/MysteryVault";
import portraitPhoto from "./assets/hemanth-photo.jpg";
import { about, achievements, experience, profile } from "./data/content";

function StatCard({ value, label, i = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.4, delay: i * 0.06 }}
      whileHover={{ y: -3 }}
      className="rounded-xl border border-line bg-panel px-5 py-4 text-center shadow-[0_1px_0_rgba(0,0,0,0.03)]"
    >
      <div className="font-mono text-2xl font-bold text-ink">{value}</div>
      <div className="mt-1 font-mono text-[10.5px] tracking-wide text-text-faint">{label}</div>
    </motion.div>
  );
}

function AchievementCard({ item, i = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      whileHover={{ y: -4 }}
      className="background-gradient-card relative overflow-hidden rounded-2xl border border-line bg-panel p-6 shadow-[0_1px_0_rgba(0,0,0,0.03)] transition-colors hover:border-accent-dim"
    >
      <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-accent-dim font-mono text-sm font-bold text-accent">
        {item.tag}
      </span>
      <h3 className="mb-2 text-[15px] font-semibold leading-snug text-ink">{item.title}</h3>
      <p className="text-[13px] leading-relaxed text-text-dim">{item.body}</p>
    </motion.div>
  );
}

export default function App() {
  return (
    <div className="relative">
      <AuroraGlow />
      <Hero />

      {/* ABOUT + EXPERIENCE */}
      <section id="about" className="about-reference relative border-y border-line px-6 py-20 sm:px-10 sm:py-24 lg:px-14">
        <div className="mx-auto max-w-[88rem]">
          <p className="about-eyebrow">01 / ABOUT</p>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_.7fr] lg:gap-20">
            <div>
              <h2 className="about-title">Who I am.</h2>
              <p className="about-lead">
                I&apos;m <LanguageName />, based in Visakhapatnam, India. I&apos;m a Computer Science student and full-stack developer drawn to the systems behind technology: how they work, where they break, and how they can be made more useful.
              </p>
              <p className="about-copy">I build clean web experiences, practical AI projects, and software that solves real problems. I enjoy taking an idea from its first sketch to something people can actually use.</p>
              <p className="about-copy">When I&apos;m away from a screen, I&apos;m usually exploring new tech, following cricket, finding a good café, or planning the next journey.</p>

              <div className="reach-box">
                <span className="reach-label">LET&apos;S CONNECT</span>
                <p>I&apos;m open to internships, collaborations, and interesting problems. Reach me out at</p>
                <div className="reach-actions">
                  <a href="mailto:hemanthnelli1@gmail.com"><Mail size={16} /> hemanthnelli1@gmail.com</a>
                  <a href="https://www.linkedin.com/in/hemanthnelli/" target="_blank" rel="noreferrer"><Globe size={16} /> LinkedIn <ArrowUpRight size={14} /></a>
                </div>
              </div>
            </div>

            <aside className="about-side">
              <div className="about-photo-frame">
                <GrainPhoto src={portraitPhoto} alt={profile.name} className="aspect-square w-full" />
              </div>
              <dl className="profile-facts">
                <div><dt>EDUCATION</dt><dd>B.Tech CSE · 2027</dd></div>
                <div><dt>INTERESTS</dt><dd>Systems · AI · Web</dd></div>
                <div><dt>OFF THE CLOCK</dt><dd>Cricket · Travel · Music</dd></div>
              </dl>
            </aside>
          </div>
        </div>
      </section>

      <section id="experience" className="experience-reference relative border-b border-line px-6 py-20 sm:px-10 sm:py-24 lg:px-14">
        <div className="mx-auto grid max-w-[88rem] grid-cols-1 gap-14 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-20">
          <div>
            <p className="about-eyebrow">02 / EXPERIENCE</p>
            <h2 className="experience-title">Learning by building.</h2>
            <div className="experience-list">
              {experience.map((item, index) => (
                <article key={item.company} className="experience-item">
                  <span className="experience-index">0{index + 1}</span>
                  <div>
                    <p className="experience-date">{item.date} · {item.location}</p>
                    <h3>{item.title}</h3>
                    <p className="experience-company">{item.company}</p>
                    <p className="experience-summary">{item.points[0]}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="globe-column section-card-border">
            <p className="globe-kicker">EXPERIENCE / CONNECTED</p>
            <ExperienceGlobe />
            <p className="globe-note">Drag the globe to explore the points behind my work.</p>
          </div>
        </div>
      </section>

      {/* SPLIT-FLAP MESSAGE BOARD */}
      <section className="section-frame relative border-t border-line bg-bg px-6 py-20">
        <div className="mx-auto flex max-w-6xl justify-center">
          <FlipBoardSection />
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section-frame section-paper relative border-t border-line px-6 py-28">
        <div className="relative mx-auto max-w-6xl">
          <div className="pointer-events-none absolute -top-10 left-1/2 h-40 w-full -translate-x-1/2 opacity-30">
            <Sparkles density={40} color="#5c7a52" />
          </div>
          <SectionHeading number="02" label="Skills" title="What I work with" />
          <BentoGrid />
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section-frame section-warm relative border-t border-line px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading number="04" label="Projects" title="Things I've built" />
          <ProjectsGrid />
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" className="section-frame section-blue relative border-t border-line px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading number="05" label="Achievements" title="Milestones along the way" />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {achievements.map((item, i) => (
              <AchievementCard key={item.tag} item={item} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="section-frame section-paper relative border-t border-line py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading number="06" label="Certifications" title="Continuous learning" />
        </div>
        <InfiniteMovingCards />
      </section>

      <MysteryVault />

      {/* CONTACT */}
      <section id="contact" className="section-frame section-warm relative overflow-hidden border-t border-line px-6 py-32">
        <BackgroundBeams />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="mb-4 font-mono text-[12px] tracking-[0.2em] text-accent">07 · CONNECT</p>
          <h2 className="mb-6 text-3xl font-bold text-ink sm:text-5xl">
            Let's build <span className="font-serif-italic text-accent">something great</span>
          </h2>
          <p className="mb-10 font-mono text-[14px] text-text-dim">{profile.email}</p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="shine-sweep inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-mono text-[12.5px] font-medium text-cream transition hover:brightness-110"
            >
              <Mail className="h-4 w-4" /> Send Email
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-6 py-3 font-mono text-[12.5px] text-ink transition hover:border-accent-dim"
            >
              <Globe className="h-4 w-4" /> LinkedIn <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>

     <Footer />
<FloatingDock />
<Analytics />
    </div>
  );
}
