"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { QUIZ_BACKGROUND_IMAGES } from "@/lib/constants";
import MarqueeBackground from "../shared/MarqueeBackground";
import { ArrowRightIcon } from "@/assets/icons";

export default function QuizCTA() {
  return (
    <section className="relative overflow-hidden border-t border-zinc-600/50 bg-black">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <MarqueeBackground
          images={QUIZ_BACKGROUND_IMAGES}
          columnGapClassName="gap-10"
          imageGapClassName="gap-8"
          duration={60}
        />
      </motion.div>
      {/* overlay */}
      <div className="pointer-events-none absolute inset-0 bg-black/45" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/10" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b top-0 from-black via-black/20 to-black/10" />

      {/* content */}
      <motion.div
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10 flex min-h-[814px] flex-col justify-end px-5 xl:py-20 lg:py-15 py-10 lg:min-h-[890px] lg:px-10"
      >
        <div className="mx-auto flex w-full max-w-100 lg:max-w-360 lg:px-10 px-5 flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="mb-6 inline-flex w-fit items-center rounded-sm bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[-0.03em] text-white/70">
              60-second quiz
            </span>

            <h2 className="section-heading-1 max-w-2xl leading-[1.25]">
              Not sure which
              <br />
              template is for you?
            </h2>

            <p className="mt-3 paragraph">
              Answer a few short questions and get matched with a <br /> website
              template perfect for your business, with{" "}
              <span className="font-semibold text-white">30% off</span>.
            </p>
          </div>

          <Button
            href="/quiz"
            variant="primary"
            className="shrink-0 lg:w-fit w-full"
            withAnimation
          >
            Take the quiz
            <ArrowRightIcon className="ml-2 size-4" />
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
