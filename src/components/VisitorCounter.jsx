import { Eye } from "lucide-react";
import { useEffect, useState } from "react";

const counterUrl = "https://counterapi.com/api/hemanthnelli.vercel.app/view/portfolio-visitors?unique=true";

export default function VisitorCounter() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function trackVisit() {
      try {
        const response = await fetch(counterUrl, { signal: controller.signal });
        if (!response.ok) throw new Error("Visitor counter request failed");

        const { value } = await response.json();
        if (Number.isFinite(value)) setCount(value);
      } catch (error) {
        if (error.name !== "AbortError") console.error(error);
      }
    }

    trackVisit();
    return () => controller.abort();
  }, []);

  return (
    <div className="mt-6 flex justify-center" aria-live="polite">
      <div className="inline-flex items-center gap-2.5 rounded-full border border-line bg-panel/85 px-4 py-2 shadow-[0_8px_24px_rgba(45,56,66,0.08)]">
        <Eye className="h-4 w-4 text-accent" aria-hidden="true" />
        <span className="font-mono text-[11px] tracking-wide text-text-dim">Portfolio visitors</span>
        <span className="border-l border-line pl-2.5 font-mono text-sm font-semibold text-ink">
          {count === null ? "—" : count.toLocaleString()}
        </span>
      </div>
    </div>
  );
}
