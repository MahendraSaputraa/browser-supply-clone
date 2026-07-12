import BorderedSection from "@/components/layout/BorderedSection";
import { Button } from "@/components/ui/Button";

export default function PoweredByFramer() {
  return (
    <section className="border-t border-gray-700/50">
      <BorderedSection className="!px-0 md:!px-0">
        <div className="grid md:grid-cols-2 md:divide-x md:divide-gray-700/50">
          {/* left: kosong, nanti diisi visual */}
          <div className="min-h-[300px] md:min-h-[600px]" />

          {/* right: content */}
          <div className="flex flex-col justify-center px-5 py-16 md:px-10 md:py-0">
            <span className="mb-6 inline-flex w-fit items-center rounded-sm bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[-0.03em] text-muted-foreground">
              Framer
            </span>

            <h2 className="font-gambetta max-w-lg text-4xl font-medium leading-[1.05] tracking-[-0.03em] text-white md:text-6xl">
              <span className="px-1">Powered</span> by a{" "}
              <em className="font-normal">si</em>mp
              <em className="font-normal">l</em>e &amp;
              <br />
              fle<em className="font-normal">x</em>ibl
              <em className="font-normal">e</em> we
              <em className="font-normal">bs</em>ite b
              <em className="font-normal">u</em>ilder
            </h2>

            <p className="mt-6 max-w-md text-sm leading-6 text-muted-foreground">
              Packed with speed and powerful tools to help your site stand out.
              Design, personalize, and launch. All in one place with Framer.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <Button href="/templates" variant="secondary">
                Browse templates
              </Button>
              <Button href="https://framer.com" variant="tertiary" outline>
                Explore Framer
              </Button>
            </div>
          </div>
        </div>
      </BorderedSection>
    </section>
  );
}
