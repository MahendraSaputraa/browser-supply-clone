import { BorderedSection } from "@/components/layout";

export default function BlogHero() {
  return (
    <section className="relative border-b border-gray-700/50">
      <BorderedSection border="border-gray-900/50" className="relative">
        <div className="mx-auto max-w-100 lg:max-w-360 px-5 md:px-10 pt-20 pb-10 lg:pt-40 lg:pb-20">
          <div className="relative z-10 flex flex-col items-center text-center ">
            <span className="mb-8 backdrop-blur-2xl inline-flex  items-center gap-2 rounded-sm  py-1 px-3 text-xs font-medium uppercase tracking-[-0.03em] text-muted-foreground  bg-gray-100/10">
              Blog
            </span>
            <h1 className="section-hero-heading">
              W<em className="font-normal">h</em>e
              <em className="font-normal">r</em>e Fra
              <em className="font-normal">m</em>er <br />m
              <em className="font-normal">ee</em>ts bus
              <em className="font-normal">i</em>ness
            </h1>
            <p className="mt-5 section-hero-paragraph">
              Weekly posts by the creator behind 2,000+ template sales.
            </p>
          </div>
        </div>
      </BorderedSection>
    </section>
  );
}
