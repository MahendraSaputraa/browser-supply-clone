import Image from "next/image";

// Decorative background gradient shared between FeaturedTemplates and Benefits sections
export default function SharedGradientBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-[20%] sm:left-[30%] md:left-[40%] -top-[100px] sm:-top-[80px] md:-top-70 h-[100vw] sm:h-[85vw] md:h-[85vw] w-[100vw] sm:w-[85vh] md:w-[85vh] rotate-70">
        <Image
          src="/images/gradient.avif"
          alt=""
          fill
          priority
          sizes="100vh"
          className="select-none object-cover opacity-90 blur-3xl scale-100 sm:scale-120"
        />
      </div>
    </div>
  );
}
