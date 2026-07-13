import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { FramerIcon } from "@/assets/icons";
import { BorderedSection } from "../layout";

const stats = [
  { value: "6+", label: "Years building sites" },
  { value: "2,000+", label: "Templates sold" },
  { value: "5/5", label: "Template rating" },
];

export default function Hero() {
  return (
    <section className="relative">
      {/* gradient background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[20%] w-[85vh] h-[85vw] -translate-x-1/2 -translate-y-1/2 rotate-[-90deg]">
          <Image
            src="/images/gradient.avif"
            alt=""
            fill
            priority
            sizes="100vh"
            className="select-none object-cover opacity-90 blur-3xl scale-125"
          />
        </div>
      </div>
      {/* main content */}

      <BorderedSection border="border-gray-900/50" className="grid relative">
        <div className="flex min-h-[540px] items-center justify-center px-6 pb-20 pt-36 text-center md:min-h-[620px] lg:pb-24 lg:pt-40">
          <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
            <div className="mb-8 backdrop-blur-2xl inline-flex  items-center gap-2 rounded-sm  py-1 px-3 text-xs font-medium uppercase tracking-[-0.03em] text-muted-foreground  bg-gray-100/10">
              <FramerIcon className="w-5 h-5 " /> Framer templates
            </div>

            <h1 className="font-gambetta lg:text-[80px] text-[56px] xl:text-[100px] font-medium leading-[0.93] tracking-[-0.03em] text-white">
              Webs<em className="font-normal">i</em>te te
              <em className="font-normal">m</em>pla
              <em className="font-normal">t</em>es
              <br />d<em className="font-normal">e</em>si
              <em className="font-normal">g</em>n
              <em className="font-normal">e</em>d to co
              <em className="font-normal">n</em>
              ve
              <em className="font-normal">r</em>t
            </h1>

            <p className="mt-8 max-w-xl text-sm font-normal leading-7 text-muted-foreground md:text-base">
              Launch your online business today using an easy-to-customize
              Framer website template without writing a single line of code.
            </p>

            <Button href="/templates" className="mt-8">
              Browse templates
            </Button>
          </div>
        </div>
      </BorderedSection>

      {/* vid section */}
      <div className="border-t border-gray-300">
        <BorderedSection
          border="border-gray-700/50"
          className="py-5 md:py-10 grid relative"
        >
          <div className="mx-auto rounded-[4px] border-2 border-gray-900/50 shadow-2xl shadow-black/70">
            <video
              className="block w-full"
              autoPlay
              muted
              loop
              playsInline
              poster="/images/gradient.avif"
            >
              <source src="/videos/hero-vid.mp4" type="video/mp4" />
            </video>
          </div>
        </BorderedSection>
      </div>
      {/* stats section */}
      <div className="border-y border-gray-700/50">
        <BorderedSection border="border-gray-700/50" className="px-0">
          <div className="grid grid-cols-2 md:grid-cols-3">
            {stats.map((item, index) => (
              <div
                key={item.label}
                className={[
                  "flex min-h-32 flex-col items-center justify-center py-10 text-center",
                  index == stats.length - 1 &&
                    "col-span-2 sm:col-span-1 border-gray-700/50 border-t sm:border-t-0",
                  index == 0 && " border-gray-700/50 border-r sm:border-r-0",
                  index > 0
                    ? " border-gray-700/50 md:border-l md:border-t-0"
                    : "",
                ].join(" ")}
              >
                <div className="font-gambetta text-4xl font-medium leading-none text-white md:text-[44px]">
                  {item.value}
                </div>
                <div className="mt-4 text-base font-normal text-muted-foreground tracking-[-0.04em]">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </BorderedSection>
      </div>
    </section>
  );
}
