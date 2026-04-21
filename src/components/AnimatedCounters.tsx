"use client";

import { useEffect, useRef, useState } from "react";

const counters = [
  { target: 34, suffix: "", label: "года на рынке" },
  { target: 500, suffix: "+", label: "городов внедрений" },
  { target: 3422, suffix: "", label: "рабочих мест" },
  { target: 18, suffix: "M+", label: "населения обслуживается" },
];

export default function AnimatedCounters({
  variant = "dark",
}: {
  variant?: "dark" | "light";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);
  const [values, setValues] = useState(counters.map(() => 0));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animated]);

  useEffect(() => {
    if (!animated) return;

    const duration = 2000;
    const startTime = performance.now();

    function update(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setValues(counters.map((c) => Math.round(eased * c.target)));

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }, [animated]);

  return (
    <div ref={ref} className="flex items-center justify-center gap-10 flex-wrap">
      {counters.map((counter, i) => (
        <div key={counter.label} className="flex items-center gap-10">
          <div className="text-center">
            <div className={`text-4xl font-extrabold tracking-[-0.02em] ${variant === "light" ? "text-slate-900" : "text-white"}`}>
              {values[i]}
              <span className={`text-[28px] font-bold ${variant === "light" ? "text-sky-600" : "text-blue-400"}`}>{counter.suffix}</span>
            </div>
            <div className={`text-sm mt-1 font-medium ${variant === "light" ? "text-slate-500" : "text-white/50"}`}>{counter.label}</div>
          </div>
          {i < counters.length - 1 && (
            <div className={`w-px h-10 hidden sm:block ${variant === "light" ? "bg-slate-200" : "bg-white/15"}`} />
          )}
        </div>
      ))}
    </div>
  );
}
