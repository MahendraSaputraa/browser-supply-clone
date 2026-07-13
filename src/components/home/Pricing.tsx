import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { PRICING_PLANS } from "@/lib/constants";
import { BorderedSection } from "../layout";

export default function Pricing() {
  return (
    <section className="border-t overflow-hidden border-gray-700/50">
      <BorderedSection className="!px-0 md:!px-0">
        {/* header */}
        <div className="flex flex-col items-center border-b border-gray-700/50 px-5 pt-20 pb-10 text-center md:px-10">
          <span className="mb-6 inline-flex items-center rounded-sm bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[-0.03em] text-muted-foreground">
            Pricing
          </span>

          <h2 className="font-gambetta max-w-2xl text-[4.5rem] text-4xl font-medium leading-[1.25] tracking-[-0.03em] text-white ">
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
        </div>

        {/* plans */}
        <div className="relative grid overflow-hidden md:grid-cols-2 md:divide-x md:divide-gray-700/50">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.name}
              className="relative overflow-hidden flex flex-col  p-5 "
            >
              {plan.highlighted && (
                <div className="pointer-events-none absolute inset-0 -z-10 -bottom-250 -right-50 overflow-hidden">
                  <div className="absolute inset-0 rotate-160">
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
                <h3 className="font-gambetta text-3xl font-medium text-white tracking-[-0.03rem] md:text-[2.75rem]">
                  {plan.name}
                </h3>

                <div className="flex items-baseline gap-4 whitespace-nowrap  font-gambetta md:text-[2.75rem]">
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
                        className="flex items-center gap-3 text-base text-white"
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
            </div>
          ))}
        </div>
      </BorderedSection>
    </section>
  );
}
