import { useEffect, useRef } from "react";
import { cn } from "../lib/utils";

export default function Sparkles({ className, density = 60, color = "#5c7a52" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;
    let particles = [];
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      const count = Math.floor((rect.width * rect.height) / (10000 / (density / 60)));
      particles = Array.from({ length: Math.min(count, 140) }, () => ({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        r: Math.random() * 1.3 + 0.3,
        a: Math.random(),
        da: (Math.random() * 0.015 + 0.004) * (Math.random() < 0.5 ? 1 : -1),
        vy: Math.random() * 0.08 + 0.02,
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.a += p.da;
        if (p.a <= 0 || p.a >= 1) p.da *= -1;
        p.y -= p.vy;
        if (p.y < -2) p.y = canvas.height + 2;
        ctx.globalAlpha = Math.max(0, Math.min(1, p.a));
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      if (!reduced) raf = requestAnimationFrame(draw);
    }

    resize();
    draw();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [density, color]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
      aria-hidden="true"
    />
  );
}
