import {
  Benefits,
  CustomerSuccess,
  FeaturedTemplates,
  Founder,
  Hero,
  PoweredByFramer,
  Pricing,
  Process,
  QuizCTA,
  Testimonials,
} from "@/components/home";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="relative">
        {/* gradient background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[40%] -top-70 w-[85vh] rotate-70  h-[85vw]  ">
            <Image
              src="/images/gradient.avif"
              alt=""
              fill
              priority
              sizes="100vh"
              className="select-none object-cover opacity-90 scale-120 blur-3xl "
            />
          </div>
        </div>
        <FeaturedTemplates />
        <Benefits />
      </div>
      <PoweredByFramer />
      <Process />
      <CustomerSuccess />
      <Pricing />
      <QuizCTA />
      <Founder />
      <Testimonials />
    </>
  );
}
