import BorderedSection from "@/components/layout/BorderedSection";
import { PROCESS_STEPS } from "@/lib/constants";

export default function Process() {
  return (
    <section className="border-t border-gray-700/50">
      <BorderedSection className="!px-0 md:!px-0">
        {/* header */}
        <div className="flex flex-col items-center border-b border-gray-700/50 px-5 pt-20 pb-10 text-center md:px-10">
          <span className="mb-6 inline-flex items-center rounded-sm bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[-0.03em] text-muted-foreground">
            Process
          </span>

          <h2 className="font-gambetta max-w-2xl text-[4.5rem] text-4xl font-medium leading-[1.05] tracking-[-0.03em] text-white ">
            Go li<em className="font-normal">v</em>e i
            <em className="font-normal">n</em> ho
            <em className="font-normal">u</em>rs, <br /> not{" "}
            <em className="font-normal">m</em>ont
            <em className="font-normal">h</em>s
          </h2>

          <p className="mt-6 paragraph">
            Three steps. That&apos;s all it takes to get your website online.{" "}
            <br />
            Pick a template, add your content, and hit publish.
          </p>
        </div>

        {/* steps */}
        <div className="grid divide-y divide-gray-700/50 md:grid-cols-3 md:divide-x md:divide-y-0">
          {PROCESS_STEPS.map((step) => (
            <div key={step.step} className="relative min-h-[520px]">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={step.video} type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />

              <div className="absolute inset-x-0 top-0 p-5 md:p-8">
                <span className="text-xs font-semibold uppercase tracking-wide text-white/45">
                  Step {step.step}
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-5 md:p-8">
                <h3 className="font-gambetta text-2xl font-medium leading-tight text-white md:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </BorderedSection>
    </section>
  );
}
