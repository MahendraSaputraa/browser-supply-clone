"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/assets/icons";
import { BorderedSection } from "../layout";

export const FOUNDER_STATS = [
  { value: "6+", label: "Years building sites" },
  { value: "100+", label: "Websites made" },
  { value: "$100k", label: "Revenue made in Framer" },
  { value: "2k+", label: "Customers worldwide" },
];

export default function Founder() {
  return (
    <section className="border-t border-gray-700/50">
      <BorderedSection className="px-0!">
        <div className="grid lg:grid-cols-2 lg:divide-x lg:divide-gray-700/50">
          {/* left: photo/video, full-bleed */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            className="relative min-h-[298px] lg:min-h-[888px]"
          >
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/videos/founder-1-vid.mp4" type="video/mp4" />
            </video>
          </motion.div>

          {/* right: content */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            className="flex flex-col"
          >
            {/* bio */}
            <div className="section-header-spacing border-b border-gray-700/50 pb-9 pr-0 lg:pr-0">
              <span className="mb-6 inline-flex items-center rounded-sm bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[-0.03em] text-muted-foreground">
                Founder
              </span>

              <h2 className="section-heading-2 font-medium leading-[1.15]">
                Hey, I&apos;m Ramish
                <br />
                Designer &amp; Creator
              </h2>

              <div className="mt-3 flex flex-col paragraph gap-3">
                <p>
                  When I started my business, I realised speed was everything.{" "}
                  <br />
                  Getting a website live meant getting customers through the
                  door.
                </p>
                <p>
                  Luckily, I knew how to design and build sites, so what could
                  have taken weeks only took me hours.
                </p>
                <p>
                  That first week, I had my website live, and sales rolling in.
                </p>
                <p>
                  Now, I&apos;m sharing my unfair advantage with other creative
                  entrepreneurs so they can do the same.
                </p>
                <p>Launch faster without the cost or complexity.</p>
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
                  <span className="font-gambetta lg:text-[2.25rem] text-[2rem] font-medium text-white xl:text-[2.75rem]">
                    {stat.value}
                  </span>
                  <span className="paragraph">{stat.label}</span>
                </div>
              ))}
            </div>
            {/* full-width CTA */}

            <Button
              href="/book-a-call"
              variant="primary"
              className="rounded-none"
            >
              Book a call with me
              <ArrowRightIcon className="ml-2 size-4" />
            </Button>
          </motion.div>
        </div>
      </BorderedSection>
    </section>
  );
}
