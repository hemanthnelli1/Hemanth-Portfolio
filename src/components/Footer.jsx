import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 pb-32 pt-8 sm:pb-10">
      <div className="footer-layout mx-auto max-w-7xl font-mono text-[11px] tracking-wide text-text-faint">
        <span>{profile.name} · Software Engineer · {profile.location}</span>
        <span>B.Tech CSE · Expected 2027</span>
      </div>
    </footer>
  );
}
