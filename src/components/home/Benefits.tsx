// components/home/Benefits.tsx
import Image from "next/image";

import BorderedSection from "@/components/layout/BorderedSection";
import { PAYMENT_ICONS } from "@/lib/constants";

export default function Benefits() {
  return (
    <section className="relative border-t border-gray-700/50">
      {/* background - gradient nanti disini, sementara bg polos */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-neutral-950" />

      <BorderedSection className="!px-0 md:!px-0">
        {/* header */}
        <div className="flex flex-col items-center border-b border-gray-700/50 px-5 py-20 text-center md:px-10">
          <span className="mb-6 inline-flex items-center rounded-sm bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[-0.03em] text-muted-foreground">
            Benefits
          </span>

          <h2 className="font-gambetta max-w-3xl text-4xl font-medium leading-[1.05] tracking-[-0.03em] text-white md:text-6xl">
            Pr<em className="font-normal">o</em>fess
            <em className="font-normal">io</em>nal we
            <em className="font-normal">bs</em>ite,
            <br />l<em className="font-normal">i</em>ve bef
            <em className="font-normal">o</em>re th
            <em className="font-normal">e</em> we
            <em className="font-normal">eke</em>nd
          </h2>

          <p className="mt-6 max-w-md text-sm leading-6 text-muted-foreground">
            Go live with a website that&apos;s premium just like your business.
            No code, no budget, just a few hours.
          </p>
        </div>

        {/* bento grid */}
        <div className="grid divide-y divide-gray-700/50 md:grid-cols-3 md:divide-x md:divide-y-0">
          {/* left: no coding required */}
          <div className="flex flex-col">
            <div className="px-5 py-10 md:px-8">
              <h3 className="font-gambetta text-2xl font-medium leading-tight text-white md:text-3xl">
                No coding or design experience required
              </h3>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                Easily make edits, customize colors, and swap content so you
                don&apos;t have to start from scratch.
              </p>
            </div>

            <div className="mt-auto grid grid-cols-3 gap-3 border-t border-gray-700/50 p-5 md:px-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-[4px] border border-gray-700/50"
                >
                  <Image
                    src={`/images/benefits/preview-${i}.png`}
                    alt=""
                    width={200}
                    height={280}
                    className="w-full"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* middle: payments / convert more / pricing */}
          <div className="flex flex-col divide-y divide-gray-700/50">
            <div className="flex items-center gap-3 px-5 py-8 md:px-8">
              {PAYMENT_ICONS.map((item) => {
                return (
                  <div
                    key={item.alt}
                    className="flex size-9 items-center justify-center rounded-sm bg-white/10"
                  >
                    <Image
                      width={0}
                      height={0}
                      src={item.icon}
                      alt={item.alt}
                      className="size-4"
                    />
                  </div>
                );
              })}
            </div>

            <div className="px-5 py-8 md:px-8">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-emerald-400">
                <span aria-hidden>↗</span>
                Convert more
              </div>
              <p className="mt-3 font-gambetta text-xl font-medium leading-snug text-white">
                Designed to turn web visitors into customers.
              </p>
            </div>

            <div className="px-5 py-8 md:px-8">
              <p className="font-gambetta text-xl font-medium leading-snug text-white">
                Building a high-quality website shouldn&apos;t cost you a
                fortune.
              </p>

              <div className="mt-6 rounded-sm bg-white/10 px-4 py-3 text-sm font-semibold text-white">
                $5,000 &ndash; $20,000
              </div>
              <div className="mt-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Web designer / agency
              </div>

              <div className="mt-4 rounded-sm bg-white/10 px-4 py-3 text-sm font-semibold text-white">
                Starting at $99
              </div>
              <div className="mt-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Framer template
              </div>
            </div>
          </div>

          {/* right: video tutorials */}
          <div className="relative min-h-[420px]">
            <Image
              src="/images/benefits/tutorial-photo.jpg"
              alt="Step-by-step video tutorials"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-5 md:p-8">
              <h3 className="font-gambetta text-2xl font-medium leading-tight text-white md:text-3xl">
                Step-by-step video tutorials included
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Each template comes with guided tutorials to help you from
                customization to launch.
              </p>
            </div>
          </div>
        </div>
      </BorderedSection>
    </section>
  );
}
