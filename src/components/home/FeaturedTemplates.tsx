import Image from "next/image";
import Link from "next/link";

import { FEATURED_TEMPLATES } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import BorderedSection from "@/components/layout/BorderedSection";
import { ArrowRightIcon } from "@/assets/icons";

export default function FeaturedTemplates() {
  return (
    <section className="border-b border-gray-700/50">
      <BorderedSection className="!px-0 ">
        {/* header */}
        <div className="flex px-5 md:px-10 flex-col justify-between gap-8 py-16 md:flex-row md:items-end">
          <div>
            <h2 className="font-gambetta max-w-xl text-4xl font-medium leading-[1.05] tracking-[-0.03em] text-white md:text-5xl">
              <em className="font-normal">Pre</em>mium templates{" "}
              <em className="font-normal">b</em>uilt to dr
              <em className="font-normal">i</em>ve{" "}
              <em className="font-normal">re</em>sul
              <em className="font-normal">t</em>s
            </h2>

            <p className="mt-6 max-w-md text-sm leading-6 text-muted-foreground">
              Pick a template, swap in your content, and go live. Your business
              website can be up and running this afternoon.
            </p>
          </div>

          <Button href="/templates" className="shrink-0">
            View all
            <ArrowRightIcon className="ml-2 size-4" />
          </Button>
        </div>

        {/* grid */}
        <div className="grid px-5 md:px-10 gap-x-6 gap-y-12 border-t border-gray-700/50 py-16 md:grid-cols-3">
          {FEATURED_TEMPLATES.map((template) => (
            <Link
              key={template.slug}
              href={`/templates/${template.slug}`}
              className="group block"
            >
              <div className="overflow-hidden rounded-sm border border-gray-700/50">
                <Image
                  src={template.image}
                  alt={template.name}
                  width={480}
                  height={300}
                  className="w-full transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>

              <div className="mt-5 flex items-center gap-2">
                <h3 className="font-gambetta text-xl font-medium text-white">
                  {template.name}
                </h3>
                {template.isNew && (
                  <span className="rounded-sm bg-emerald-500/15 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-emerald-400">
                    New
                  </span>
                )}
              </div>

              <div className="mt-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-white/45">
                <span>{template.category}</span>
                <span className="size-1 rounded-full bg-white/30" />
                <span>{template.price}</span>
              </div>
            </Link>
          ))}
        </div>
      </BorderedSection>
    </section>
  );
}
