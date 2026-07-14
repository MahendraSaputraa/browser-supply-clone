import Image from "next/image";
import { cn } from "@/lib/utils";

interface SharedGradientBackgroundProps {
  src?: string;
  containerClassName?: string;
  className?: string;
  imageClassName?: string;
}

export default function SharedGradientBackground({
  src = "/images/gradient.avif",
  containerClassName,
  className = "absolute left-[20%] sm:left-[30%] md:left-[40%] -top-[100px] sm:-top-[80px] md:-top-70 h-[100vw] sm:h-[85vw] md:h-[85vw] w-[100vw] sm:w-[85vh] md:w-[85vh] rotate-70",
  imageClassName,
}: SharedGradientBackgroundProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        containerClassName,
      )}
    >
      <div className={cn(className)}>
        <Image
          src={src}
          alt=""
          fill
          priority
          sizes="100vh"
          className={cn(
            "select-none object-cover opacity-90 blur-3xl scale-100 sm:scale-120",
            imageClassName,
          )}
        />
      </div>
    </div>
  );
}
