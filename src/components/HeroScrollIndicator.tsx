import { ChevronDown } from "lucide-react";

interface HeroScrollIndicatorProps {
  targetId: string;
  variant?: "dark" | "light";
}

export default function HeroScrollIndicator({
  targetId,
  variant = "dark",
}: HeroScrollIndicatorProps) {
  const isLight = variant === "light";

  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2]">
      <a
        href={`#${targetId}`}
        className={`group inline-flex flex-col items-center transition-colors ${
          isLight ? "text-slate-500 hover:text-slate-800" : "text-white/70 hover:text-white"
        }`}
        aria-label="Прокрутить к следующему блоку"
      >
        <span
          className={`flex items-center justify-center w-12 h-12 rounded-full backdrop-blur-sm transition-all ${
            isLight
              ? "border border-slate-200 bg-white/90 shadow-[0_12px_30px_rgba(148,163,184,0.18)] group-hover:border-sky-300 group-hover:bg-white"
              : "border border-white/20 bg-white/10 group-hover:bg-white/15 group-hover:border-white/35"
          }`}
        >
          <ChevronDown
            size={24}
            className="animate-[bounce-gentle_2s_ease-in-out_infinite]"
          />
        </span>
      </a>
    </div>
  );
}
