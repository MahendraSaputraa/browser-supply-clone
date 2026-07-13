"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import BorderedSection from "@/components/layout/BorderedSection";
import { Button } from "@/components/ui/Button";
import { TESTIMONIAL_ROWS } from "@/lib/constants";

type Testimonial = {
  quote: string;
  name: string;
  avatar: string;
  rating: number;
};

function TestimonialCard({ quote, name, avatar, rating }: Testimonial) {
  return (
    <div className="flex w-[340px] shrink-0 flex-col gap-6 rounded-lg border border-gray-700/50 bg-white/[0.03] p-6 md:w-[380px]">
      <span className="font-gambetta text-3xl leading-none text-white/20">
        &rdquo;
      </span>
      <p className="text-sm leading-6 text-white/90">{quote}</p>
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            viewBox="0 0 20 20"
            className={`h-4 w-4 ${i < rating ? "fill-white" : "fill-white/20"}`}
          >
            <path d="M10 1l2.6 5.9 6.4.6-4.8 4.3 1.4 6.2L10 15l-5.6 3 1.4-6.2L1 8.5l6.4-.6L10 1z" />
          </svg>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full bg-white/10">
          <Image src={avatar} alt={name} fill className="object-cover" />
        </div>
        <span className="text-sm font-medium text-white">{name}</span>
      </div>
    </div>
  );
}

function MarqueeRow({
  items,
  direction,
  duration,
}: {
  items: Testimonial[];
  direction: "left" | "right";
  duration: number;
}) {
  // duplikat data supaya loop-nya mulus tanpa jeda
  const looped = [...items, ...items];

  return (
    <div className="flex w-full overflow-hidden">
      <motion.div
        className="flex gap-4 pr-4 md:gap-6 md:pr-6"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {looped.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} {...t} />
        ))}
      </motion.div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden border-t border-gray-700/50 bg-black">
      <BorderedSection className="!px-0 md:!px-0">
        {/* header */}
        <div className="flex flex-col gap-10 px-5 py-16 md:flex-row md:items-end md:justify-between md:px-10">
          <div className="max-w-2xl">
            <h2 className="font-gambetta text-4xl font-medium leading-[1.05] tracking-[-0.03em] text-white md:text-6xl">
              Tr<em className="font-normal">us</em>ted by 2
              <em className="font-normal">k</em>+ c
              <em className="font-normal">us</em>tomers
              <br />
              ar<em className="font-normal">oun</em>d t
              <em className="font-normal">he</em> globe
            </h2>
            <p className="mt-6 max-w-md text-sm leading-6 text-muted-foreground">
              Speed, simplicity, and results. That&apos;s what customers achieve
              with my Framer website templates.
            </p>
          </div>

          <Button href="/customers" variant="primary" className="shrink-0">
            See real customer websites
          </Button>
        </div>

        {/* marquee rows */}
        <div className="flex flex-col gap-4 border-t border-gray-700/50 py-10 md:gap-6 md:py-16">
          <MarqueeRow
            items={TESTIMONIAL_ROWS.row1}
            direction="left"
            duration={40}
          />
          <MarqueeRow
            items={TESTIMONIAL_ROWS.row2}
            direction="right"
            duration={45}
          />
          <MarqueeRow
            items={TESTIMONIAL_ROWS.row3}
            direction="left"
            duration={38}
          />
        </div>
      </BorderedSection>
    </section>
  );
}
