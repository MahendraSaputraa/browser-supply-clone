"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/Button";
import { QUIZ_BACKGROUND_IMAGES } from "@/lib/constants";

export default function QuizCTA() {
  return (
    <section className="relative  overflow-hidden border-t border-gray-700/50 bg-black ">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            animate={{ y: ["10%", "20%"] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex flex-col rotate-[20deg] scale-110 gap-8 -translate-x-[-100px]"
          >
            {QUIZ_BACKGROUND_IMAGES.left.map((src, i) => (
              <div
                key={i + src}
                className="shrink-0 overflow-hidden rounded-lg border border-white/10 shadow-2xl"
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
          <motion.div
            animate={{ y: ["-10%", "-20%"] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex flex-col rotate-[20deg] scale-110 gap-8 translate-x-[-100px]"
          >
            {QUIZ_BACKGROUND_IMAGES.right.map((src, i) => (
              <div
                key={i + src}
                className="shrink-0 overflow-hidden rounded-lg border border-white/10 shadow-2xl"
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
        </div>
      </div>

      {/* overlay */}
      <div className="pointer-events-none absolute inset-0 bg-black/45" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />

      {/* content */}
      <div className="relative z-10 flex min-h-[880px] flex-col justify-end px-5 py-16 md:min-h-[960px] md:px-10">
        <div className="mx-auto flex w-full max-w-360 flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div className="max-w-lg">
            <span className="mb-6 inline-flex w-fit items-center rounded-sm bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[-0.03em] text-white/70">
              60-second quiz
            </span>

            <h2 className="font-gambetta text-4xl font-medium leading-[1.05] tracking-[-0.03em] text-white md:text-6xl">
              Not sure which
              <br />
              template is for you?
            </h2>

            <p className="mt-6 max-w-md text-sm leading-6 text-white/60">
              Answer a few short questions and get matched with a website
              template perfect for your business, with{" "}
              <span className="font-semibold text-white">30% off</span>.
            </p>
          </div>

          <Button href="/quiz" variant="primary" className="shrink-0">
            Take the quiz
          </Button>
        </div>
      </div>
    </section>
  );
}
