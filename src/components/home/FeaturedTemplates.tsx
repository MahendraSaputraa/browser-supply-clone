import Image from "next/image";
import Link from "next/link";

import { FEATURED_TEMPLATES } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/assets/icons";
import { cn } from "@/lib/utils";
import { BorderedSection } from "../layout";

export default function FeaturedTemplates() {
  return (
    <section className="relative border-b border-gray-700/50 z-20">
      <BorderedSection className="px-0!">
        {/* header */}
        <div className="flex px-5 z-10 md:px-10 flex-col justify-between gap-8 pt-16 pb-10 md:flex-row md:items-end">
          <div>
            <h2 className="font-gambetta max-w-xl text-4xl font-medium leading-[1.05] tracking-[-0.03em] text-white md:text-[3.5rem]">
              Pre
              <em className="font-normal">m</em>ium tem
              <em className="font-normal">p</em>lates <br />b
              <em className="font-normal">u</em>ilt to dri
              <em className="font-normal">v</em>e{" "}
              <em className="font-normal">r</em>esul
              <em className="font-normal">t</em>s
            </h2>

            <p className="mt-6 max-w-md text-base font-normal tracking-[-0.03rem] leading-6 text-muted-foreground">
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
        <div className="grid  gap-y-12 border-t border-gray-700/50  md:grid-cols-3">
          {FEATURED_TEMPLATES.map((template, i) => (
            <Link
              key={template.slug}
              href={`/templates/${template.slug}`}
              className={cn(
                "group block p-10",
                "hover:bg-border/50 transition-all",
                i == 1 && "border-r border-l border-gray-700/50",
              )}
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
                <h3 className="font-gambetta text-[1.75rem] tracking-[-0.03rem] font-medium text-white">
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
            </Link>
          ))}
        </div>
      </BorderedSection>
    </section>
  );
}
