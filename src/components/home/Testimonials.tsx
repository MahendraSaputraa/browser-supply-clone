"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/Button";
import { TESTIMONIAL_ROWS } from "@/lib/constants";
import { ArrowRightIcon, StarIcon } from "@/assets/icons";
import { BorderedSection } from "../layout";

type Testimonial = {
  quote: string;
  name: string;
  avatar: string;
  rating: number;
};

function TestimonialCard({ quote, name, avatar, rating }: Testimonial) {
  return (
    <div className="flex w-[340px] gap-4 shrink-0 flex-col  bg-white/[0.03] p-6 md:w-[400px]">
      <span className="font-gambetta text-4xl leading-none leading-0 text-muted-foreground/50">
        &quot;
      </span>

      <p className="text-[1.75rem] font-gambetta leading-10 font-medium text-white">
        {quote}
      </p>
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon
            key={i}
            className={`size-8 ${i < rating ? "fill-white" : "fill-white/20"}`}
          />
        ))}
      </div>
      <div className="flex items-center mt-2 gap-3">
        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-md shadow-lg bg-white/10">
          <Image src={avatar} alt={name} fill className="object-cover" />
        </div>
        <span className="text-base font-medium text-muted-foreground">
          {name}
        </span>
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
  const looped = [...items, ...items];

  return (
    <div className="flex w-full overflow-hidden">
      <motion.div
        className="flex divide-x divide-gray-700/50"
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
      {/* gradient background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-50%] sm:left-[-40%] md:left-[-30%] lg:left-[-10%] xl:left-[5%] top-[80px] sm:top-[100px] md:top-[120px] lg:top-50 w-[150vw] sm:w-[120vw] md:w-[85vh] lg:w-[85vh] -rotate-140 h-[150vw] sm:h-[120vw] md:h-[85vw] lg:h-[85vw]">
          <Image
            src="/images/gradient.avif"
            alt=""
            fill
            priority
            sizes="100vh"
            className="select-none object-cover opacity-90 scale-100 sm:scale-125 lg:scale-150 blur-3xl"
          />
        </div>
      </div>

      <BorderedSection className="px-0! relative">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="section-header-spacing flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-2xl">
            <h2 className="section-heading-2 font-medium leading-[1.15]">
              Tr<em className="font-normal">u</em>ste
              <em className="font-normal">d</em> b
              <em className="font-normal">y</em> 2
              <em className="font-normal">k</em>+ c
              <em className="font-normal">u</em>sto
              <em className="font-normal">m</em>ers a
              <em className="font-normal">r</em>ou
              <em className="font-normal">n</em>d t
              <em className="font-normal">h</em>e{" "}
              <em className="font-normal">g</em>lobe
            </h2>
            <p className="mt-4 paragraph">
              Speed, simplicity, and results. That&apos;s what customers <br />{" "}
              achieve with my Framer website templates.
            </p>
          </div>

          <Button href="/customers" variant="primary" className="shrink-0">
            See real customer websites
            <ArrowRightIcon className="ml-2 size-4" />
          </Button>
        </motion.div>

        {/* marquee rows */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col  border-t border-gray-700/50 divide-y divide-gray-700/50"
        >
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
        </motion.div>
      </BorderedSection>
    </section>
  );
}
