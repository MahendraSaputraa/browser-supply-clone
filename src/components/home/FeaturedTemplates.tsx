"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

import { FEATURED_TEMPLATES } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/assets/icons";
import { cn } from "@/lib/utils";
import { BorderedSection } from "../layout";

export default function FeaturedTemplates() {
  const gridContainer: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };

  const cardVariant: Variants = {
    hidden: {
      opacity: 0,
      rotateX: 20,
    },
    show: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative border-b border-gray-700/50 z-20">
      <BorderedSection className="px-0!">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="section-header-spacing z-10 flex flex-col justify-between gap-8 lg:flex-row md:items-end"
        >
          <div>
            <h2 className="section-heading-2 max-w-xl">
              Pre
              <em className="font-normal">m</em>ium tem
              <em className="font-normal">p</em>lates <br />b
              <em className="font-normal">u</em>ilt to dri
              <em className="font-normal">v</em>e{" "}
              <em className="font-normal">r</em>esul
              <em className="font-normal">t</em>s
            </h2>

            <p className="mt-4 max-w-md paragraph">
              Pick a template, swap in your content, and go live. Your business
              website can be up and running this afternoon.
            </p>
          </div>

          <Button
            href="/templates"
            className="shrink-0 w-full lg:w-fit"
            variant="primary"
          >
            View all
            <ArrowRightIcon className="ml-2 size-4" />
          </Button>
        </motion.div>

        {/* grid */}
        <motion.div
          variants={gridContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid divide-y lg:divide-y-0 divide-gray-700/50 lg:gap-y-12 border-t border-gray-700/50 lg:grid-cols-3"
        >
          {FEATURED_TEMPLATES.map((template, i) => (
            <div key={template.slug} style={{ perspective: 450 }}>
              <motion.div
                variants={cardVariant}
                style={{
                  transformOrigin: "center",
                  transformStyle: "preserve-3d",
                }}
                className={cn(
                  "group block p-5 lg:p-10",
                  "hover:bg-border/50 transition-colors",
                  i == 1 && "lg:border-r lg:border-l lg:border-gray-700/50",
                )}
              >
                <div className="rounded-sm transition-[transform,box-shadow] duration-500 ease-out will-change-transform group-hover:-translate-y-3 group-hover:shadow-2xl group-hover:shadow-black/30">
                  <div className="overflow-hidden rounded-sm border border-gray-700/50">
                    <Image
                      src={template.image}
                      alt={template.name}
                      width={480}
                      height={300}
                      className="w-full transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-2">
                  <h3 className="font-gambetta text-[1.75rem] tracking-[-0.03rem] text-white">
                    {template.name}
                  </h3>
                  {template.isNew && (
                    <span className="rounded-sm bg-emerald-500/15 px-2 py-1.5 text-xs font-semibold uppercase text-emerald-500">
                      New
                    </span>
                  )}
                </div>

                <div className="mt-2 flex items-center gap-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  <span>{template.category}</span>
                  <span className="size-1 rounded-full bg-muted-foreground" />
                  <span>{template.price}</span>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </BorderedSection>
    </section>
  );
}
