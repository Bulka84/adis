import Image from "next/image";

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
  const mapSrc = `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/russia-hero.svg`;
  const maskImage = `url("${mapSrc}")`;

  return (
    <div className="relative mx-auto w-[min(108vw,1540px)] max-w-none opacity-75 lg:w-[min(114vw,1680px)] xl:w-[min(120vw,1840px)] 2xl:w-[min(126vw,2080px)]">
      <Image
        src={mapSrc}
        alt=""
        aria-hidden="true"
        width={3300}
        height={2000}
        className="h-auto w-full"
        unoptimized
      />

      <svg
        viewBox="0 0 3300 2000"
        className="absolute inset-0 h-full w-full overflow-visible"
        aria-hidden="true"
        style={{
          maskImage,
          WebkitMaskImage: maskImage,
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
