"use client";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/Button";
import { BorderedSection } from "../layout";

export default function CustomerSuccess() {
  return (
    <section className="border-t border-gray-700/50">
      <BorderedSection className="!px-0 md:!px-0">
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="grid lg:grid-cols-2 lg:divide-x lg:divide-gray-700/50"
        >
          {/* left: content */}
          <div className="flex flex-col justify-center section-header-spacing">
            <span className="mb-6 inline-flex w-fit items-center rounded-sm bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[-0.03em] text-muted-foreground">
              Customer success
            </span>

            <div className="flex flex-col gap-3">
              <h2 className="section-heading-2 font-medium leading-[1.15]">
                M<em className="font-normal">a</em>tt lau
                <em className="font-normal">n</em>ched h
                <em className="font-normal">i</em>s ne
                <em className="font-normal">w</em> w
                <em className="font-normal">e</em>bs
                <em className="font-normal">i</em>te i
                <em className="font-normal">n</em> j
                <em className="font-normal">u</em>st 1 ho
                <em className="font-normal">u</em>r
              </h2>
              <p className="paragraph">
                From burning out on 12-hour gym shifts to running <br /> his own
                online coaching business, on his own terms.
              </p>

              <p className="paragraph">
                Matt had tried the agency route before. Thousands of <br />{" "}
                dollars later, he had a terrible site and zero control over it.
              </p>

              <p className="paragraph">
                I showed him the right template. We sat in a caf&eacute;, <br />{" "}
                he made the edits himself, and launched in 1 hour.
              </p>
              <blockquote className="lg:text-base text-sm max-w-sm border-l-2 border-white pl-4 leading-6 tracking-[-0.03rem] text-white/80">
                No design skills. No coding. Barely any laptop experience.
                Didn&apos;t need any.
              </blockquote>
            </div>

            <div className="mt-8 lg:flex-row flex-col flex flex-wrap items-center gap-3">
              <Button
                href="/templates"
                className="w-full lg:w-auto"
                variant="primary"
              >
                View template Matt used
              </Button>
              <Button
                href="/customers"
                className="w-full lg:w-auto"
                variant="secondary"
              >
                View other customers&apos; sites
              </Button>
            </div>
          </div>

          {/* right: video, full-bleed */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            className="relative min-h-[298px] xl:min-h-[770px]"
          >
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/videos/customer-success-vid.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </motion.div>
      </BorderedSection>
    </section>
  );
}
