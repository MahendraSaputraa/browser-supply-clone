"use client";
import { motion } from "framer-motion";

import { PROCESS_STEPS, QUIZ_BACKGROUND_IMAGES } from "@/lib/constants";
import { BorderedSection } from "../layout";
import MarqueeBackground from "../shared/MarqueeBackground";
import LazyVideo from "../ui/LazyVideo";

export default function Process() {
  return (
    <section className="border-t border-gray-700/50">
      <BorderedSection className="!px-0 md:!px-0">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="section-header-spacing flex flex-col items-center border-b border-gray-700/50 text-center"
        >
          <span className="mb-6 inline-flex items-center rounded-sm bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[-0.03em] text-muted-foreground">
            Process
          </span>

          <h2 className="section-heading-1 max-w-2xl leading-[1.25]">
            Go li<em className="font-normal">v</em>e i
            <em className="font-normal">n</em> ho
            <em className="font-normal">u</em>rs, <br /> not{" "}
            <em className="font-normal">m</em>ont
            <em className="font-normal">h</em>s
          </h2>

          <p className="mt-6 paragraph">
            Three steps. That&apos;s all it takes to get your website online.{" "}
            <br />
            Pick a template, add your content, and hit publish.
          </p>
        </motion.div>

        {/* steps */}
        <div className="grid divide-y divide-gray-700/50 lg:grid-cols-3 md:divide-x md:divide-y-0">
          {PROCESS_STEPS.map((step, index) => (
            <div
              key={step.step}
              className="relative min-h-[280px] xl:min-h-[420px]"
            >
              {index != 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <LazyVideo
                    src={step.video}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </motion.div>
              )}
              {index == 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <MarqueeBackground
                    images={QUIZ_BACKGROUND_IMAGES}
                    columnGapClassName="gap-4"
                    imageGapClassName="gap-4"
                    imageWidthClassName="w-42 sm:w-50 md:w-58 lg:w-64 xl:w-70"
                    duration={20}
                  />
                </motion.div>
              )}

              <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black/10" />

              <motion.div
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="absolute inset-x-0 top-0 p-5 "
              >
                <span className="text-xs font-semibold uppercase -tracking-wide text-muted-foreground">
                  Step {step.step}
                </span>

                <h3 className="font-gambetta mt-8 text-1xl font-medium tracking-['-0.03em'] leading-tight text-white md:text-[1.75rem]">
                  {step.title}
                </h3>
                <p className="mt-3 paragraph whitespace-pre-line ">
                  {step.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </BorderedSection>
    </section>
  );
}
