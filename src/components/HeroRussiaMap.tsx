import Image from "next/image";

export default function HeroRussiaMap() {
  const mapSrc = `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/russia-hero.svg`;

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
    </div>
  );
}
