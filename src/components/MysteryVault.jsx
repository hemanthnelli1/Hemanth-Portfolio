import { AnimatePresence, motion } from "framer-motion";
import { Car, Coffee, Headphones, LockKeyhole, MapPin, Music2, Palette, Plane, Sparkles, Watch, X } from "lucide-react";
import { useEffect, useState } from "react";
import japanImage from "../assets/vault-japan.webp";
import porscheImage from "../assets/vault-porsche.webp";
import setupImage from "../assets/vault-setup.png";
import favoriteImage from "../assets/vault-favorite.jpeg";

const rewards = [
  { icon: Music2, label: "Current Favorite Song", title: "One Name (From Jailer 2)", detail: "Currently on repeat.", href: "https://open.spotify.com/track/4NMe76giWnRILo6nTfvPeP?si=aed5e280b35d4442", action: "Open Spotify" },
  { icon: Coffee, label: "Coffee Order", title: "Spanish Latte", detail: "No sugar." },
  { icon: MapPin, label: "Dream Destination", title: "Japan", detail: "A place I want to experience slowly.", image: japanImage },
  { icon: Car, label: "Dream Car", title: "Porsche 911 GT3", detail: "Built for the long way home.", image: porscheImage },
  { icon: Sparkles, label: "Dream Bike", title: "Kawasaki Z900", detail: "Fast, focused, unforgettable." },
  { icon: Watch, label: "Dream Watch", title: "Tissot Le Locle", detail: "Swiss Automatic Watch." },
  { icon: Headphones, label: "Current Phone", title: "iPhone 16 Pro", detail: "Always within reach." },
  { icon: Headphones, label: "My Setup", title: "After hours", detail: "Where the ideas get built.", image: setupImage },
  { icon: Music2, label: "Playlist I'm Listening To", title: "Current rotation", detail: "A playlist for focused work.", href: "https://open.spotify.com/playlist/2UZEIhThoEHvOFhuzdJXcJ", action: "Open Spotify" },
  { icon: Sparkles, label: "Favorite Photo I've Taken", title: "Palms and open sky", detail: "A quiet moment on the road.", image: favoriteImage },
  { icon: Sparkles, label: "Favorite Movie", title: "Inception", detail: "Dream deeper." },
  { icon: Sparkles, label: "Favorite Series", title: "Money Heist", detail: "A perfect binge." },
  { icon: Coffee, label: "Favorite Food", title: "Chicken Biryani", detail: "No debate." },
  { icon: Sparkles, label: "Night or Morning?", title: "Definitely Night", detail: "The best ideas arrive after dark." },
  { icon: Palette, label: "Favorite Palette", title: "Midnight / blue / violet / pearl", detail: "A glossy colour study." },
  { icon: Plane, label: "Next Place I Want to Visit", title: "Mumbai", detail: "Next stop." },
  { icon: Sparkles, label: "Random Fun Fact", title: "Wallpaper collector", detail: "I've changed my wallpaper more than 200 times." },
  { icon: Car, label: "Something Most People Don't Know", title: "Night drives", detail: "I enjoy long night drives." },
  { icon: Sparkles, label: "Favorite Quote", title: "Show Must Go on!!", detail: "Keep moving forward." },
];

export default function MysteryVault() {
  const [phase, setPhase] = useState("locked"); const [reward, setReward] = useState(null); const [visits, setVisits] = useState(0);
  useEffect(() => { setVisits(Number(localStorage.getItem("hemanth-vault-visits") || 0)); }, []);
  function unlock() {
    if (phase !== "locked") return;
    setPhase("decrypting");
    window.setTimeout(() => setPhase("authenticating"), 850);
    window.setTimeout(() => {
      const seen = JSON.parse(localStorage.getItem("hemanth-vault-seen") || "[]");
      const available = rewards.map((_, index) => index).filter((index) => !seen.includes(index));
      const pool = available.length ? available : rewards.map((_, index) => index);
      const pick = pool[Math.floor(Math.random() * pool.length)];
      localStorage.setItem("hemanth-vault-seen", JSON.stringify(available.length ? [...seen, pick] : [pick]));
      const nextVisits = visits + 1; localStorage.setItem("hemanth-vault-visits", String(nextVisits)); setVisits(nextVisits); setReward(rewards[pick]); setPhase("open");
    }, 1900);
  }
  const busy = phase !== "locked" && phase !== "open";
  return <section id="vault" className="vault-section relative overflow-hidden border-t border-[#26325d] px-6 py-28 text-white">
    <div className="vault-particles" aria-hidden="true" /><p className="vault-side-copy" aria-hidden="true">PRIVATE VAULT / KEEP EXPLORING</p>
    <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_.9fr]">
      <div><p className="mb-5 font-mono text-[11px] tracking-[.24em] text-[#a7b8ff]">09 / PRIVATE VAULT</p><h2 className="max-w-xl text-4xl font-bold leading-[1.04] tracking-[-.05em] sm:text-6xl">Small things worth discovering.</h2><p className="mt-5 max-w-md text-[15px] leading-relaxed text-[#bfc7e5]">Unlock one personal detail at a time. Every reward is new until you have seen them all.</p><div className="mt-8 flex flex-wrap items-center gap-4"><button onClick={unlock} disabled={busy} className="vault-button inline-flex items-center gap-2 rounded-full px-6 py-3 font-mono text-[12px] font-medium disabled:opacity-70"><LockKeyhole className="h-4 w-4" />{busy ? "Decrypting..." : "Reveal something"}</button><span className="font-mono text-[11px] tracking-wide text-[#a8b5d7]">Vault visits: {visits}</span></div>{busy && <div className="mt-5 max-w-sm font-mono text-[11px] tracking-[.12em] text-[#b9c8ff]"><p>{phase === "decrypting" ? "DECRYPTING..." : "AUTHENTICATING..."}</p><div className="vault-progress mt-2"><i className={phase === "authenticating" ? "full" : ""} /></div></div>}</div>
      <motion.button onClick={unlock} whileHover={{ scale: 1.035 }} whileTap={{ scale: .98 }} className={`vault-orb ${busy ? "is-opening" : ""} mx-auto grid aspect-square w-full max-w-[300px] place-items-center rounded-full`}><div className="text-center"><LockKeyhole className="mx-auto h-11 w-11 text-[#c6d0ff]" /><span className="mt-5 block font-mono text-[10px] tracking-[.25em] text-[#d8e0ff]">{busy ? "OPENING" : "ENCRYPTED"}</span><span className="mt-2 block text-4xl text-[#a8e8ff]">{busy ? "✦" : "?"}</span></div></motion.button>
    </div><AnimatePresence>{phase === "open" && reward && <VaultModal reward={reward} close={() => setPhase("locked")} />}</AnimatePresence>
  </section>;
}
function VaultModal({ reward, close }) { const Icon = reward.icon; return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="vault-modal fixed inset-0 z-[70] grid place-items-center p-5" onClick={close}><motion.div initial={{ y: 24, scale: .94 }} animate={{ y: 0, scale: 1 }} exit={{ y: 16, scale: .96 }} onClick={(event) => event.stopPropagation()} className="vault-reward relative w-full max-w-sm overflow-hidden rounded-3xl p-8 text-center"><button onClick={close} className="absolute right-5 top-5 z-10 text-[#cbd4ff]"><X className="h-5 w-5" /></button>{reward.image && <img src={reward.image} alt="" className="-mx-8 -mt-8 mb-6 h-44 w-[calc(100%+4rem)] object-cover" />}<Icon className="mx-auto mb-5 h-10 w-10 text-[#b6c6ff]" /><p className="font-mono text-[10px] tracking-[.18em] text-[#9eafff]">{reward.label}</p><h3 className="mt-3 text-3xl font-semibold text-white">{reward.title}</h3><p className="mt-3 text-sm leading-relaxed text-[#c8d1ed]">{reward.detail}</p>{reward.href ? <a href={reward.href} target="_blank" rel="noreferrer" className="mt-7 inline-block rounded-full border border-[#7b8ee8] px-5 py-2 font-mono text-[11px] text-[#dbe1ff]">{reward.action}</a> : <button onClick={close} className="mt-7 rounded-full border border-[#7b8ee8] px-5 py-2 font-mono text-[11px] text-[#dbe1ff]">Keep this one</button>}</motion.div></motion.div>; }
