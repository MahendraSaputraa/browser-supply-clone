"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type MarqueeColumnProps = {
  images: string[];
  direction: "down" | "up";
  duration: number;
  imageGapClassName: string;
  imageWidthClassName: string;
};

function MarqueeColumn({
  images,
  direction,
  duration,
  imageGapClassName,
  imageWidthClassName,
}: MarqueeColumnProps) {
  const duplicated = [...images, ...images];
  const animateY = direction === "down" ? ["0%", "-50%"] : ["-50%", "0%"];

  return (
    <motion.div
      key={`${direction}-${duration}`}
      animate={{ y: animateY }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className={`flex flex-col ${imageGapClassName}`}
    >
      {duplicated.map((src, i) => (
        <div
          key={i + src}
          className={`shrink-0 overflow-hidden rounded-lg border border-white/10 shadow-2xl ${imageWidthClassName}`}
        >
          <Image
            src={src}
            alt=""
            width={1200}
            height={800}
            className="w-full"
          />
        </div>
      ))}
    </motion.div>
  );
}

type MarqueeBackgroundProps = {
  images: { left: string[]; right: string[] };
  columnGapClassName?: string;
  imageGapClassName?: string;
  imageWidthClassName?: string;
  rotateClassName?: string;
  scaleClassName?: string;
  duration?: number;
};

export default function MarqueeBackground({
  images,
  columnGapClassName = "gap-10",
  imageGapClassName = "gap-8",
  imageWidthClassName = "w-[280px] sm:w-[340px] md:w-[420px] lg:w-200 xl:w-220",
  rotateClassName = "rotate-[20deg]",
  scaleClassName = "scale-110",
  duration = 60,
}: MarqueeBackgroundProps) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className={`absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 ${columnGapClassName} ${rotateClassName} ${scaleClassName}`}
      >
        <MarqueeColumn
          images={images.left}
          direction="down"
          duration={duration}
          imageGapClassName={imageGapClassName}
          imageWidthClassName={imageWidthClassName}
        />
        <MarqueeColumn
          images={images.right}
          direction="up"
          duration={duration}
          imageGapClassName={imageGapClassName}
          imageWidthClassName={imageWidthClassName}
        />
      </div>
    </div>
  );
}
