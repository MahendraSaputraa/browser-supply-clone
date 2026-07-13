"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TrendUpIcon } from "@/assets/icons";
import BorderedSection from "@/components/layout/BorderedSection";
import { PAYMENT_ICONS } from "@/lib/constants";

export default function Benefits() {
  return (
    <section className="relative ">
      <BorderedSection className="!px-0 md:!px-0">
        {/* header */}
        <div className="flex flex-col items-center border-b border-gray-700/50 px-5 pb-10 pt-20 text-center md:px-10">
          <span className="mb-6 inline-flex items-center rounded-sm bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[-0.03em] text-muted-foreground">
            Benefits
          </span>

          <h2 className="font-gambetta max-w-3xl md:text-[4.5rem] font-medium leading-[1.05] tracking-[-0.03em] text-white ">
            P<em>r</em>ofess<em>i</em>o<em>n</em>al we<em>b</em>si<em>t</em>e
            <br />l<em>i</em>ve be<em>f</em>o<em>r</em>e t<em>h</em>e w
            <em>ee</em>ke
            <em>n</em>d
          </h2>

          <p className="mt-3 max-w-sm paragraph">
            Go live with a website that&apos;s premium just like your business.
            No code, no budget, just a few hours.
          </p>
        </div>

        <div className="grid divide-y divide-gray-700/50 md:grid-cols-3 md:divide-x md:divide-y-0">
          {/* left*/}
          <div className="flex flex-col">
            <div className="p-5 pb-9">
              <h3 className="font-gambetta text-[1.75rem] tracking-[-0.03rem] font-medium leading-tight text-white">
                No coding or design <br /> experience required
              </h3>
              <p className="mt-4 paragraph">
                Easily make edits, customize colors, and swap <br /> content so
                you don&apos;t have to start from scratch.
              </p>
            </div>

            <div className="border-t border-gray-700/50">
              <video
                className="h-full max-h-[240px] object-cover w-full"
                autoPlay
                muted
                loop
                playsInline
                poster=""
              >
                <source src="/videos/benefits-1-vid.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* middle: payments / convert more / pricing */}
          <div className="flex flex-col">
            <div className="flex flex-col gap-9">
              <div className="flex items-center gap-4 p-5 pb-0">
                {PAYMENT_ICONS.map((item, index) => {
                  const isEvenGroup = index % 2 === 1;

                  return (
                    <motion.div
                      key={item.alt}
                      animate={{
                        scale: isEvenGroup
                          ? [1, 1.5, 1, 1.5, 1]
                          : [1.5, 1, 1.5, 1, 1.5],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Image
                        width={0}
                        height={0}
                        src={item.icon}
                        alt={item.alt}
                        className="size-6 rounded-md"
                      />
                    </motion.div>
                  );
                })}
              </div>

              <div className="p-5 pt-0 border-b border-gray-700/50">
                <div className="flex items-center gap-1.5 text-xs  font-semibold uppercase text-muted-foreground -tracking-wide">
                  <TrendUpIcon className="size-7 text-emerald-500" />
                  Convert more
                </div>
                <p className="mt-3 paragraph text-white!">
                  Designed to turn web visitors into customers.
                </p>
              </div>
            </div>

            <div className="p-5 ">
              <p className="paragraph text-white!">
                Building a high-quality website <br /> shouldn&apos;t cost you a
                fortune.
              </p>

              <div className="mt-5 rounded-sm bg-secondary px-3 py-2 text-xs font-semibold text-white">
                $5,000 &ndash; $20,000
              </div>
              <div className="mt-2 text-xs font-semibold  uppercase -tracking-wide text-muted-foreground">
                Web designer / agency
              </div>

              <div className="mt-4 rounded-sm bg-muted-foreground/50 w-fit px-3 py-2 text-xs font-semibold text-white">
                Starting at $99
              </div>
              <div className="mt-2 text-xs font-medium uppercase -tracking-wide text-muted-foreground">
                Framer template
              </div>
            </div>
          </div>

          {/* right: video tutorials */}
          <div className="relative h-full max-h-[430px] overflow-hidden">
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster=""
            >
              <source src="/videos/benefits-2-vid.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            <div className="absolute inset-x-0 pb-0 bottom-0 p-5 md:p-8">
              <h3 className="font-gambetta text-2xl font-medium leading-tight text-white md:text-3xl">
                Step-by-step video <br /> tutorials included
              </h3>
              <p className="mt-3 paragraph text-sm!">
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
