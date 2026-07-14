"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/assets/icons";
import MarqueeBackground from "../shared/MarqueeBackground";
import { QUIZ_BACKGROUND_IMAGES } from "@/lib/constants";

const OPEN_DELAY_MS = 800;

export default function QuizModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), OPEN_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/85 backdrop-blur-sm"
            onClick={close}
            aria-hidden="true"
          />

          {/* modal card */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="quiz-modal-heading"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-[1000px] overflow-hidden rounded-xl border border-zinc-600/50 bg-background"
          >
            {/* moving background */}
            <div className="absolute inset-0">
              <MarqueeBackground
                images={QUIZ_BACKGROUND_IMAGES}
                duration={50}
                imageWidthClassName="w-[320px]  lg:w-[420px]"
              />
            </div>

            {/* readability overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />

            {/* close button */}
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-5 top-5 z-20 flex size-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L15 15M15 1L1 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {/* content */}
            <div className="relative z-10 flex min-h-[550px] flex-col justify-start gap-6 p-5  py-5 lg:py-10">
              <span className="inline-flex w-fit items-center rounded-sm bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.05em] text-white">
                60-Second Quiz
              </span>

              <h2
                id="quiz-modal-heading"
                className="section-heading-2 font-medium leading-[1.1]"
              >
                Get 30% off the perfect <br /> template for your business
              </h2>

              <p className="paragraph max-w-md">
                Answer a few short questions and get matched with a website
                template perfect for your business, with 30% off.
              </p>

              <Button
                href="/quiz"
                variant="primary"
                className="mt-auto w-full lg:w-fit"
                withAnimation
              >
                Take the quiz
                <ArrowRightIcon className="ml-2 size-4" />
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
