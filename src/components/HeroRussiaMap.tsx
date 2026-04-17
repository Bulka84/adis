import Image from "next/image";

export default function HeroRussiaMap() {
  const mapSrc = `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/russia-hero.svg`;

  return (
    <div className="relative mx-auto flex w-full max-w-[1760px] justify-center opacity-75">
      <Image
        src={mapSrc}
        alt=""
        aria-hidden="true"
        width={3300}
        height={2000}
        className="h-auto w-[min(112vw,1560px)] max-w-none md:w-[min(116vw,1660px)] lg:w-[min(120vw,1760px)] xl:w-[min(124vw,1860px)] 2xl:w-[min(128vw,2020px)] max-h-[78vh] lg:max-h-[80vh] xl:max-h-[82vh] object-contain"
        unoptimized
      />
    </div>
  );
}
