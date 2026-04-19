import Image from "next/image";

export default function HeroRussiaMap() {
  const mapSrc = `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/russia-hero.svg`;

  return (
    <div className="relative w-full h-full flex items-center justify-center opacity-75">
      <Image
        src={mapSrc}
        alt=""
        aria-hidden="true"
        width={3300}
        height={2000}
        className="h-[82vh] w-auto max-w-full object-contain"
        unoptimized
      />
    </div>
  );
}
