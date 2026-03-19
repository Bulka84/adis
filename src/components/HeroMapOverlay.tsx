export default function HeroMapOverlay() {
  return (
    <object
      data="/hero-map-overlay.svg"
      type="image/svg+xml"
      className="absolute w-[85%] max-w-[1200px] h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-[47%] z-[1] pointer-events-none"
      aria-hidden="true"
    />
  );
}
