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
import SharedGradientBackground from "@/components/shared/SharedGradientBackground";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="relative">
        <SharedGradientBackground />
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
