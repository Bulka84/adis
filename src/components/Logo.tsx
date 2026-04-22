import Image from "next/image";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
  height?: number;
  showLabel?: boolean;
}

export default function Logo({
  variant = "dark",
  className = "",
  height = 36,
  showLabel = true,
}: LogoProps) {
  const width = Math.round(height * (278 / 92));

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Image
        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logo-nst-clean.png`}
        alt="НСТ — Новые Системные Технологии"
        width={width}
        height={height}
        className={`h-auto ${variant === "light" ? "brightness-[1.15]" : ""}`}
        style={{ height, width: "auto" }}
        sizes="120px"
        priority
      />
      {showLabel && (
        <span
          className={`text-xl font-extrabold leading-tight ${
            variant === "dark" ? "text-gray-900" : "text-white"
          }`}
        >
          АДИС
        </span>
      )}
    </div>
  );
}
