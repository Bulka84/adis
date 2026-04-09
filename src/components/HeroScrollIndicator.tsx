import { ChevronDown } from "lucide-react";

interface HeroScrollIndicatorProps {
  targetId: string;
}

export default function HeroScrollIndicator({
  targetId,
}: HeroScrollIndicatorProps) {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2]">
      <a
        href={`#${targetId}`}
        className="group inline-flex flex-col items-center text-white/70 hover:text-white transition-colors"
        aria-label="Прокрутить к следующему блоку"
      >
        <span className="flex items-center justify-center w-12 h-12 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm group-hover:bg-white/15 group-hover:border-white/35 transition-all">
          <ChevronDown
            size={24}
            className="animate-[bounce-gentle_2s_ease-in-out_infinite]"
          />
        </span>
      </a>
    </div>
  );
}
