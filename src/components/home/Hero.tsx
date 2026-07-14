"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { FramerIcon } from "@/assets/icons";
import { BorderedSection } from "../layout";
import { useRef } from "react";
import LazyVideo from "../ui/LazyVideo";

const stats = [
  { value: "6+", label: "Years building sites" },
  { value: "2,000+", label: "Templates sold" },
  { value: "5/5", label: "Template rating" },
];

export default function Hero() {
  const videoWrapRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: videoWrapRef,
    offset: ["start end", "center center"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [10, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <section className="relative">
      {/* gradient background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[20%] -translate-x-1/2 -translate-y-1/2 rotate-[-90deg] w-[120vmax] h-[120vmax] sm:w-[85vh] sm:h-[85vw] md:w-[85vh] md:h-[85vw] lg:w-[85vh] lg:h-[85vw]">
          <Image
            src="/images/gradient.avif"
            alt=""
            fill
            priority
            sizes="100vh"
            className="select-none object-cover opacity-90 blur-3xl scale-100 sm:scale-125"
          />
        </div>
      </div>
      {/* main content */}

      <BorderedSection border="border-gray-900/50" className="grid relative">
        <div className="flex min-h-[540px] items-center justify-center px-6 pb-20 pt-36 text-center md:min-h-[620px] lg:pb-24 lg:pt-40">
          <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
            <div className="mb-8 backdrop-blur-2xl inline-flex  items-center gap-2 rounded-sm  py-1 px-3 text-xs font-medium uppercase tracking-[-0.03em] text-muted-foreground  bg-gray-100/10">
              <FramerIcon className="w-5 h-5 " /> Framer templates
            </div>

            <h1 className="section-hero-heading">
              Webs<em className="font-medium">i</em>te te
              <em className="font-normal">m</em>pla
              <em className="font-normal">t</em>es
              <br />d<em className="font-normal">e</em>si
              <em className="font-normal">g</em>n
              <em className="font-normal">e</em>d to co
              <em className="font-normal">n</em>
              ve
              <em className="font-normal">r</em>t
            </h1>

            <p className="mt-5 section-hero-paragraph">
              Launch your online business today using an easy-to-customize
              Framer <br /> website template without writing a single line of
              code.
            </p>

            <Button href="/templates" className="mt-8" withAnimation>
              Browse templates
            </Button>
          </div>
        </div>
      </BorderedSection>

      {/* vid section */}
      <div className="border-t border-gray-300">
        <BorderedSection
          border="border-zinc-600/50"
          className="py-5 md:py-10 grid relative"
        >
          <div
            ref={videoWrapRef}
            style={{ perspective: "1500px" }}
            className="mx-auto w-full"
          >
            <motion.div
              style={{
                rotateX,
                scale,
                opacity,
                transformOrigin: "center",
              }}
              className="rounded-lg border-2 border-zinc-600/50 shadow-2xl shadow-black/70 overflow-hidden"
            >
              <LazyVideo src="/videos/hero-vid.mp4" eager />
            </motion.div>
          </div>
        </BorderedSection>
      </div>

      {/* stats section */}
      <div className="border-y border-zinc-600/50">
        <BorderedSection border="border-zinc-600/50" className="px-0!">
          <div className="grid grid-cols-2 lg:grid-cols-3">
            {stats.map((item, index) => (
              <motion.div
                key={item.label}
                className={[
                  "flex min-h-32 flex-col items-center justify-center py-10 text-center",
                  "flex min-h-32 flex-col items-center justify-center py-10 text-center",

                  // order
                  index === 0 && "order-1",
                  index === 1 && "order-3",
                  index === 2 && "order-2",

                  // span
                  index === 1 && "col-span-2 lg:col-span-1",

                  // reset order
                  index === 0 && "lg:order-1",
                  index === 1 && "lg:order-2",
                  index === 2 && "lg:order-3",
                  index === 1 &&
                    "col-span-2 lg:col-span-1 border-zinc-600/50 border-t lg:border-t-0",
                  index == 0 && " border-zinc-600/50 border-r lg:border-r-0",
                  index > 0
                    ? " border-zinc-600/50 lg:border-l lg:border-t-0"
                    : "",
                ].join(" ")}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <div className="font-gambetta text-4xl font-medium leading-none text-white lg:text-[44px]">
                  {item.value}
                </div>
                <div className="mt-4 text-base font-normal text-muted-foreground tracking-[-0.04em]">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </BorderedSection>
      </div>
    </section>
  );
}
