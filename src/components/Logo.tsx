import Image from "next/image";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
  height?: number;
}

export default function Logo({
  variant = "dark",
  className = "",
  height = 36,
}: LogoProps) {
  const width = Math.round(height * (334 / 108));

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Image
        src="/logo-nst.png"
        alt="НСТ — Новые Системные Технологии"
        width={width}
        height={height}
        className={`h-auto ${variant === "light" ? "brightness-[1.15]" : ""}`}
        style={{ height, width: "auto" }}
        priority
      />
      <span
        className={`text-xl font-bold leading-tight ${
          variant === "dark" ? "text-[#1A1A2E]" : "text-white"
        }`}
      >
        АДИС
      </span>
    </div>
  );
}
