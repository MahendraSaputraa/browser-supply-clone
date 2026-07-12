import Image from "next/image";

import BorderedSection from "@/components/layout/BorderedSection";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/assets/icons";

export const FOUNDER_STATS = [
  { value: "6+", label: "Years building sites" },
  { value: "100+", label: "Websites made" },
  { value: "$100k", label: "Revenue made in Framer" },
  { value: "2k+", label: "Customers worldwide" },
];

export default function Founder() {
  return (
    <section className="border-t border-gray-700/50">
      <BorderedSection className="!px-0 md:!px-0">
        <div className="grid md:grid-cols-2 md:divide-x md:divide-gray-700/50">
          {/* left: photo/video, full-bleed */}
          <div className="relative min-h-[400px] md:min-h-[760px]">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/videos/founder-ramish.mp4" type="video/mp4" />
            </video>
          </div>

          {/* right: content */}
          <div className="flex flex-col">
            {/* bio */}
            <div className="border-b border-gray-700/50 px-5 py-16 md:px-10">
              <span className="mb-6 inline-flex w-fit items-center rounded-sm bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[-0.03em] text-muted-foreground">
                Founder
              </span>

              <h2 className="font-gambetta max-w-md text-4xl font-medium leading-[1.05] tracking-[-0.03em] text-white md:text-5xl">
                Hey, I&apos;m Ramish
                <br />
                Designer &amp; Creator
              </h2>

              <div className="mt-6 flex flex-col gap-4">
                <p className="max-w-md text-sm leading-6 text-muted-foreground">
                  When I started my business, I realised speed was everything.
                  Getting a website live meant getting customers through the
                  door.
                </p>
                <p className="max-w-md text-sm leading-6 text-muted-foreground">
                  Luckily, I knew how to design and build sites, so what could
                  have taken weeks only took me hours.
                </p>
                <p className="max-w-md text-sm leading-6 text-muted-foreground">
                  That first week, I had my website live, and sales rolling in.
                </p>
                <p className="max-w-md text-sm leading-6 text-muted-foreground">
                  Now, I&apos;m sharing my unfair advantage with other creative
                  entrepreneurs so they can do the same. Launch faster without
                  the cost or complexity.
                </p>
              </div>
            </div>

            {/* stats */}
            <div className="grid grow grid-cols-2 divide-x divide-y-0 divide-gray-700/50">
              {FOUNDER_STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className={
                    i >= 2
                      ? "flex flex-col items-center justify-center gap-2 border-t border-gray-700/50 px-5 py-10 text-center"
                      : "flex flex-col items-center justify-center gap-2 px-5 py-10 text-center"
                  }
                >
                  <span className="font-gambetta text-3xl font-medium text-white md:text-4xl">
                    {stat.value}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
            {/* full-width CTA */}

            <Button
              href="/book-a-call"
              variant="secondary"
              className="w-full !rounded-none border-t border-gray-700/50 py-8 !bg-white !text-black hover:!opacity-90"
            >
              Book a call with me
              <ArrowRightIcon className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </BorderedSection>
    </section>
  );
}
