import Image from "next/image";

import BorderedSection from "@/components/layout/BorderedSection";
import { Button } from "@/components/ui/Button";
import { PRICING_PLANS } from "@/lib/constants";

export default function Pricing() {
  return (
    <section className="border-t border-gray-700/50">
      <BorderedSection className="!px-0 md:!px-0">
        {/* header */}
        <div className="flex flex-col items-center border-b border-gray-700/50 px-5 py-20 text-center md:px-10">
          <span className="mb-6 inline-flex items-center rounded-sm bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[-0.03em] text-muted-foreground">
            Pricing
          </span>

          <h2 className="font-gambetta max-w-xl text-4xl font-medium leading-[1.05] tracking-[-0.03em] text-white md:text-6xl">
            Ne<em className="font-normal">e</em>d{" "}
            <em className="font-normal">on</em>e template
            <br />o<em className="font-normal">r</em> all{" "}
            <em className="font-normal">o</em>f th
            <em className="font-normal">e</em>m?
          </h2>

          <p className="mt-6 max-w-md text-sm leading-6 text-muted-foreground">
            Perfect for agencies and freelancers looking to deliver high-quality
            results at lightning speed.
          </p>
        </div>

        {/* plans */}
        <div className="grid md:grid-cols-2 md:divide-x md:divide-gray-700/50">
          {PRICING_PLANS.map((plan) => (
            <div key={plan.name} className="relative flex flex-col p-5 md:p-10">
              {/* background gradient - hanya untuk plan yang ditandai */}
              {plan.highlighted && (
                <div className="pointer-events-none bg-red-500 absolute inset-0 -z-10 overflow-hidden">
                  <Image
                    src="/images/gradient.avif"
                    alt=""
                    fill
                    sizes="10vw"
                    className="select-none object-cover opacity-80 blur-3xl"
                  />
                </div>
              )}

              <span className="text-xs font-semibold uppercase tracking-wide text-white/45">
                {plan.badge}
              </span>

              <div className="mt-4 flex items-baseline justify-between gap-4">
                <h3 className="font-gambetta text-3xl font-medium text-white md:text-4xl">
                  {plan.name}
                </h3>

                <div className="flex items-baseline gap-2 whitespace-nowrap">
                  <span className="text-2xl font-semibold text-white md:text-3xl">
                    {plan.price}
                  </span>
                  {plan.originalPrice && (
                    <span className="text-lg text-white/40 line-through">
                      {plan.originalPrice}
                    </span>
                  )}
                </div>
              </div>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {plan.description}
              </p>

              <div className="mt-8">
                <span className="text-xs font-semibold uppercase tracking-wide text-white/45">
                  Included:
                </span>

                <ul className="mt-4 flex flex-col gap-3">
                  {plan.features.map((feature) => {
                    const Icon = feature.icon;
                    return (
                      <li
                        key={feature.label}
                        className="flex items-center gap-3 text-sm text-white"
                      >
                        <Icon className="size-4 shrink-0 text-white" />
                        {feature.label}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <Button
                href={plan.ctaHref}
                variant={plan.highlighted ? "primary" : "secondary"}
                className="mt-10 w-full"
              >
                {plan.ctaLabel}
              </Button>
            </div>
          ))}
        </div>
      </BorderedSection>
    </section>
  );
}
