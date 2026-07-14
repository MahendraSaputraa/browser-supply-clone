import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/assets/icons";
import MarqueeBackground from "@/components/shared/MarqueeBackground";
import { QUIZ_BACKGROUND_IMAGES } from "@/lib/constants";

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background">
      {/* moving background */}
      <MarqueeBackground
        images={QUIZ_BACKGROUND_IMAGES}
        duration={70}
        imageWidthClassName="w-[240px] sm:w-[300px] md:w-[380px] lg:w-[480px]"
      />

      {/* darken overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-black/80" />

      {/* content */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-5 text-center">
        <span className="inline-flex w-fit items-center rounded-sm bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.05em] text-white">
          404 Error
        </span>

        <h1 className="section-heading-1 max-w-2xl leading-[1.05]">
          Th<em className="font-normal">i</em>s pa
          <em className="font-normal">g</em>e do
          <em className="font-normal">e</em>sn&apos;t{" "}
          <em className="font-normal">e</em>xist
        </h1>

        <p className="paragraph max-w-md">
          The page you&apos;re looking for may have been moved, renamed, or
          never existed. Let&apos;s get you back on track.
        </p>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <Button href="/" variant="primary" withAnimation>
            Back to homepage
            <ArrowRightIcon className="ml-2 size-4" />
          </Button>

          <Button href="/templates" variant="secondary" withAnimation>
            Browse templates
          </Button>
        </div>

        <Link
          href="/support"
          className="mt-2 text-sm text-muted-foreground underline underline-offset-4 transition hover:text-white"
        >
          Need help? Contact support
        </Link>
      </div>
    </section>
  );
}
