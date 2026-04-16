import { readFileSync } from "node:fs";
import path from "node:path";

const mapPath = path.join(process.cwd(), "src", "assets-russia.svg");

const rawSvg = readFileSync(mapPath, "utf-8")
  .replace(/<\?xml[\s\S]*?\?>/, "")
  .replace(/<!DOCTYPE[\s\S]*?>/, "")
  .replace(
    /<svg[^>]*viewBox="([^"]+)"[^>]*>/,
    '<svg viewBox="$1" preserveAspectRatio="xMidYMid meet" aria-hidden="true">'
  )
  .replace(/width="[^"]*"/g, "")
  .replace(/height="[^"]*"/g, "");

const svgMaskDataUrl = `url("data:image/svg+xml;utf8,${encodeURIComponent(rawSvg)}")`;

const mapPoints = [
  { city: "Петрозаводск", x: 260, y: 515 },
  { city: "Волгоград", x: 405, y: 755 },
  { city: "Ижевск", x: 555, y: 610 },
  { city: "Пермь", x: 675, y: 560 },
  { city: "Екатеринбург", x: 780, y: 600 },
  { city: "Челябинск", x: 875, y: 640 },
  { city: "Ульяновск", x: 495, y: 650 },
  { city: "Иркутск", x: 1930, y: 830 },
  { city: "Красноярск", x: 1510, y: 720 },
  { city: "Кызыл", x: 1545, y: 905 },
  { city: "Магадан", x: 2920, y: 410 },
  { city: "Южно-Сахалинск", x: 3050, y: 950 },
  { city: "Томск", x: 1210, y: 700 },
];

export default function HeroRussiaMap() {
  return (
    <div className="relative w-full max-w-[1320px] mx-auto opacity-75">
      <div
        className="w-full [&_svg]:h-auto [&_svg]:w-full [&_svg_path]:fill-sky-200/25 [&_svg_path]:stroke-sky-300/30 [&_svg_path]:[stroke-width:4px]"
        dangerouslySetInnerHTML={{ __html: rawSvg }}
      />

      <svg
        viewBox="0 0 3300 2000"
        className="absolute inset-0 h-full w-full overflow-visible"
        aria-hidden="true"
        style={{
          maskImage: svgMaskDataUrl,
          WebkitMaskImage: svgMaskDataUrl,
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskSize: "contain",
          WebkitMaskSize: "contain",
          maskPosition: "center",
          WebkitMaskPosition: "center",
        }}
      >
        <defs>
          <filter id="hero-map-glow" x="-200%" y="-200%" width="400%" height="400%">
            <feGaussianBlur stdDeviation="10" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {mapPoints.map((point) => (
          <g key={point.city}>
            <circle
              cx={point.x}
              cy={point.y}
              r="26"
              fill="rgba(56, 189, 248, 0.18)"
              filter="url(#hero-map-glow)"
            />
            <circle cx={point.x} cy={point.y} r="9" fill="#0ea5e9" />
            <circle cx={point.x} cy={point.y} r="4" fill="#ffffff" />
          </g>
        ))}
      </svg>
    </div>
  );
}
