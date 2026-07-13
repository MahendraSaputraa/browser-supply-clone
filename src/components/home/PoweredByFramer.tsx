import { Button } from "@/components/ui/Button";
import { BorderedSection } from "../layout";

export default function PoweredByFramer() {
  return (
    <section className="border-t border-gray-700/50">
      <BorderedSection className="!px-0 md:!px-0">
        <div className="grid lg:grid-cols-2 md:divide-x md:divide-gray-700/50">
          {/* left: video */}
          <div className="order-2 lg:order-1 h-[306px] xl:h-[770px]">
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/videos/framer-vid-1.mp4" type="video/mp4" />
            </video>
          </div>

          {/* right: content */}
          <div className="order-1 lg:border-0 border-b border-gray-700/50 lg:order-2 flex flex-col justify-center px-5 pt-10 lg:pt-15 xl:pt-20 lg:px-10 pb-10 lg:py-0">
            <span className="mb-6 inline-flex w-fit items-center rounded-sm bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[-0.03em] text-muted-foreground">
              Framer
            </span>

            <h2 className="section-heading-2 font-medium leading-[1.15]">
              Po<em className="font-normal">w</em>ered b
              <em className="font-normal">y</em> a si
              <em className="font-normal">m</em>p
              <em className="font-normal">l</em>e &amp;
              <br />f<em className="font-normal">l</em>e
              <em className="font-normal">x</em>ibl
              <em className="font-normal">e</em>{" "}
              <em className="font-normal">w</em>e
              <em className="font-normal">b</em>si
              <em className="font-normal">t</em>e b
              <em className="font-normal">u</em>ilder
            </h2>

            <p className="mt-6 paragraph">
              Packed with speed and powerful tools to help your site stand out.{" "}
              <br />
              Design, personalize, and launch. All in one place with Framer.
            </p>

            <div className="mt-8 lg:flex-row flex-col w-full flex items-center gap-3">
              <Button
                href="/templates"
                className="w-full lg:w-auto"
                variant="primary"
              >
                Browse templates
              </Button>
              <Button
                href="https://framer.com"
                className="w-full lg:w-auto"
                variant="secondary"
              >
                Explore Framer
              </Button>
            </div>
          </div>
        </div>
      </BorderedSection>
    </section>
  );
}
