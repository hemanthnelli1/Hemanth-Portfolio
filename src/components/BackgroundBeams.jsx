export default function BackgroundBeams() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <svg
        className="absolute left-1/2 top-0 h-full w-[140%] -translate-x-1/2 opacity-25"
        viewBox="0 0 800 600"
        fill="none"
      >
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <path
            key={i}
            d={`M ${-100 + i * 90} 0 C ${150 + i * 60} 200, ${250 - i * 40} 400, ${400 + i * 70} 600`}
            stroke="url(#beam-gradient)"
            strokeWidth="1"
            strokeDasharray="20 20"
            className="animate-[dash_6s_linear_infinite]"
            style={{ animationDelay: `${i * 0.6}s` }}
          />
        ))}
        <defs>
          <linearGradient id="beam-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5c7a52" stopOpacity="0" />
            <stop offset="50%" stopColor="#5c7a52" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#5c7a52" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,transparent,var(--color-bg)_75%)]" />
    </div>
  );
}
