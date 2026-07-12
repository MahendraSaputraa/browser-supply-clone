import BorderedSection from "@/components/layout/BorderedSection";
import { Button } from "@/components/ui/Button";

export default function CustomerSuccess() {
  return (
    <section className="border-t border-gray-700/50">
      <BorderedSection className="!px-0 md:!px-0">
        <div className="grid md:grid-cols-2 md:divide-x md:divide-gray-700/50">
          {/* left: content */}
          <div className="flex flex-col justify-center px-5 py-16 md:px-10 md:py-0">
            <span className="mb-6 inline-flex w-fit items-center rounded-sm bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[-0.03em] text-muted-foreground">
              Customer success
            </span>

            <h2 className="font-gambetta max-w-lg text-4xl font-medium leading-[1.05] tracking-[-0.03em] text-white md:text-5xl">
              <em className="font-normal">Ma</em>tt la
              <em className="font-normal">un</em>ched h
              <em className="font-normal">is</em> new
              <br />w<em className="font-normal">e</em>bs
              <em className="font-normal">i</em>te i
              <em className="font-normal">n</em> j
              <em className="font-normal">u</em>st 1 ho
              <em className="font-normal">u</em>r
            </h2>

            <p className="mt-6 max-w-md text-sm leading-6 text-muted-foreground">
              From burning out on 12-hour gym shifts to running his own online
              coaching business, on his own terms.
            </p>

            <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
              Matt had tried the agency route before. Thousands of dollars
              later, he had a terrible site and zero control over it.
            </p>

            <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
              I showed him the right template. We sat in a caf&eacute;, he made
              the edits himself, and launched in 1 hour.
            </p>

            <blockquote className="mt-6 max-w-sm border-l-2 border-white/30 pl-4 text-sm leading-6 text-white">
              No design skills. No coding. Barely any laptop experience.
              Didn&apos;t need any.
            </blockquote>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="/templates" variant="secondary">
                View template Matt used
              </Button>
              <Button href="/customers" variant="tertiary" outline>
                View other customers&apos; sites
              </Button>
            </div>
          </div>

          {/* right: video, full-bleed */}
          <div className="relative min-h-[400px] md:min-h-[600px]">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/videos/customer-matt.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </BorderedSection>
    </section>
  );
}
