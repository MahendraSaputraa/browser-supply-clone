"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { PRICING_PLANS } from "@/lib/constants";
import { BorderedSection } from "../layout";

export default function Pricing() {
  return (
    <section className="border-t overflow-hidden border-gray-700/50">
      <BorderedSection className="!px-0 md:!px-0">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="section-header-spacing flex flex-col items-center border-b border-gray-700/50 text-center"
        >
          <span className="mb-6 inline-flex items-center rounded-sm bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[-0.03em] text-muted-foreground">
            Pricing
          </span>

          <h2 className="section-heading-1 max-w-2xl leading-[1.25]">
            Nee<em className="font-normal">d</em> o
            <em className="font-normal">n</em>e te
            <em className="font-normal">m</em>pl
            <em className="font-normal">a</em>te <br /> o
            <em className="font-normal">r</em> all o
            <em className="font-normal">f</em> t
            <em className="font-normal">h</em>em?
          </h2>

          <p className="mt-6 paragraph">
            Perfect for agencies and freelancers looking to <br /> deliver
            high-quality results at lightning speed.
          </p>
        </motion.div>

        {/* plans */}
        <div className="relative grid overflow-hidden lg:grid-cols-2 lg:divide-x lg:divide-gray-700/50">
          {PRICING_PLANS.map((plan) => (
            <motion.div
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1 }}
              key={plan.name}
              className="relative overflow-hidden flex flex-col  p-5 "
            >
              {plan.highlighted && (
                <div className="pointer-events-none absolute inset-0 -z-10 -bottom-32 sm:-bottom-64 lg:-bottom-250 -right-10 sm:-right-32 lg:-right-50 overflow-hidden">
                  <div className="absolute inset-0 rotate-160 w-[200%] sm:w-[150%] lg:w-full h-[200%] sm:h-[150%] lg:h-full">
                    <Image
                      src="/images/gradient.avif"
                      alt=""
                      fill
                      sizes="300px"
                      className="select-none object-cover opacity-90 blur-2xl"
                    />
                  </div>
                </div>
              )}

              <span className="text-xs font-semibold uppercase text-muted-foreground tracking-[-0.02rem]">
                {plan.badge}
              </span>

              <div className="mt-8 flex items-baseline justify-between gap-4">
                <h3 className="font-gambetta font-medium text-white tracking-[-0.03rem] text-[2rem] lg:text-[2.25rem] xl:text-[2.75rem]">
                  {plan.name}
                </h3>

                <div className="flex items-baseline gap-4 whitespace-nowrap font-gambetta text-[2rem] lg:text-[2.25rem] xl:text-[2.75rem]">
                  <span className=" font-medium text-white">{plan.price}</span>
                  {plan.originalPrice && (
                    <span className="text-muted-foreground/70 font-medium line-through">
                      {plan.originalPrice}
                    </span>
                  )}
                </div>
              </div>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {plan.description}
              </p>

              <div className="mt-8">
                <span className="text-xs font-semibold uppercase text-muted-foreground tracking-[-0.02rem]">
                  Included:
                </span>

                <ul className="mt-4 flex flex-col gap-4">
                  {plan.features.map((feature) => {
                    const Icon = feature.icon;
                    return (
                      <li
                        key={feature.label}
                        className="flex items-center gap-3 text-sm lg:text-base text-white"
                      >
                        <Icon className="size-6 shrink-0 text-white" />
                        {feature.label}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="mt-auto">
                <Button
                  href={plan.ctaHref}
                  variant={plan.highlighted ? "primary" : "secondary"}
                  className="mt-8 w-full"
                >
                  {plan.ctaLabel}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </BorderedSection>
    </section>
  );
}
