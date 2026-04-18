import Image from "next/image";

export default function HeroRussiaMap() {
  const mapSrc = `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/russia-hero.svg`;

  return (
    <div className="relative mx-auto flex w-full max-w-[2320px] justify-center opacity-75">
      <Image
        src={mapSrc}
        alt=""
        aria-hidden="true"
        width={3300}
        height={2000}
        className="h-auto w-[min(132vw,1880px)] max-w-none md:w-[min(138vw,2010px)] lg:w-[min(145vw,2140px)] xl:w-[min(151vw,2280px)] 2xl:w-[min(158vw,2460px)] max-h-[86vh] lg:max-h-[88vh] xl:max-h-[90vh] object-contain"
        unoptimized
      />
    </div>
  );
}
