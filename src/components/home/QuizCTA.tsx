import { Button } from "@/components/ui/Button";
import { QUIZ_BACKGROUND_IMAGES } from "@/lib/constants";
import MarqueeBackground from "../shared/MarqueeBackground";
import { ArrowRightIcon } from "@/assets/icons";

export default function QuizCTA() {
  return (
    <section className="relative overflow-hidden border-t border-gray-700/50 bg-black">
      <MarqueeBackground
        images={QUIZ_BACKGROUND_IMAGES}
        columnGapClassName="gap-10"
        imageGapClassName="gap-8"
        duration={60}
      />
      {/* overlay */}
      <div className="pointer-events-none absolute inset-0 bg-black/45" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/10" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b top-0 from-black via-black/20 to-black/10" />

      {/* content */}
      <div className="relative z-10 flex min-h-[880px] flex-col justify-end px-5 py-16 md:min-h-[960px] md:px-10">
        <div className="mx-auto flex w-full max-w-360 md:px-10 px-5 flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="mb-6 inline-flex w-fit items-center rounded-sm bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[-0.03em] text-white/70">
              60-second quiz
            </span>

            <h2 className="font-gambetta max-w-2xl text-[4.5rem] text-4xl font-medium leading-[1.25] tracking-[-0.03em] text-white ">
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

          <Button href="/quiz" variant="primary" className="shrink-0">
            Take the quiz
            <ArrowRightIcon className="ml-2 size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
