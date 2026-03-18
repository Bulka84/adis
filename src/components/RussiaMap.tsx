const regions = [
  { name: "Иркутская обл.", x: 57, y: 55, count: 100 },
  { name: "Свердловская обл.", x: 32, y: 50, count: 70 },
  { name: "Красноярский край", x: 50, y: 42, count: 59 },
  { name: "Пермский край", x: 30, y: 47, count: 52 },
  { name: "Челябинская обл.", x: 33, y: 55, count: 49 },
  { name: "Волгоградская обл.", x: 23, y: 63, count: 38 },
  { name: "Томская обл.", x: 44, y: 50, count: 38 },
  { name: "Удмуртская Респ.", x: 28, y: 48, count: 32 },
  { name: "Ульяновская обл.", x: 25, y: 55, count: 32 },
  { name: "Архангельская обл.", x: 21, y: 33, count: 25 },
  { name: "Респ. Хакасия", x: 49, y: 60, count: 20 },
  { name: "Респ. Тыва", x: 52, y: 64, count: 18 },
  { name: "Сахалинская обл.", x: 86, y: 55, count: 18 },
  { name: "Магаданская обл.", x: 82, y: 35, count: 14 },
  { name: "Респ. Карелия", x: 14, y: 38, count: 2 },
  { name: "НАО", x: 27, y: 24, count: 1 },
  { name: "ЯНАО", x: 37, y: 25, count: 1 },
];

function getRadius(count: number): number {
  return Math.max(8, Math.sqrt(count) * 4);
}

export default function RussiaMap({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/russia-map.png"
        alt="Карта внедрений ПК АДИС по России"
        className="w-full h-auto"
      />
      {regions.map((region) => {
        const r = getRadius(region.count);
        return (
          <div
            key={region.name}
            className="absolute -translate-x-1/2 -translate-y-1/2 group"
            style={{ left: `${region.x}%`, top: `${region.y}%` }}
          >
            <div
              className="rounded-full bg-[#C41E3A]/30 border border-[#C41E3A]/50 flex items-center justify-center"
              style={{ width: `${r * 2}px`, height: `${r * 2}px` }}
            >
              <span className="text-[9px] font-bold text-white leading-none">
                {region.count}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
