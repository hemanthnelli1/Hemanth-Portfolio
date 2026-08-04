import { Cloud, FlaskConical, Shield, Monitor } from "lucide-react";
import { certifications } from "../data/content";

const iconMap = { cloud: Cloud, flask: FlaskConical, shield: Shield, monitor: Monitor };

function CertCard({ cert }) {
  const Icon = iconMap[cert.icon];
  return (
    <div className="background-gradient-card flex w-[280px] shrink-0 items-center gap-4 rounded-xl border border-line bg-panel px-5 py-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line bg-panel-2 text-accent">
        <Icon className="h-5 w-5" strokeWidth={1.8} />
      </div>
      <div className="min-w-0">
        <p className="truncate text-[13.5px] font-medium text-ink">{cert.title}</p>
        <p className="font-mono text-[11px] tracking-wide text-text-faint">{cert.org}</p>
      </div>
    </div>
  );
}

export default function InfiniteMovingCards() {
  const doubled = [...certifications, ...certifications];
  return (
    <div className="overflow-hidden mask-fade-x">
      <div className="flex w-max gap-4 animate-marquee-reverse hover:[animation-play-state:paused]">
        {doubled.map((c, i) => (
          <CertCard key={i} cert={c} />
        ))}
      </div>
    </div>
  );
}
