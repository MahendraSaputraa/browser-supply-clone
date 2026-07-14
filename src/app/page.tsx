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
import QuizModal from "@/components/ui/QuizModal";

export default function Home() {
  return (
    <>
      <QuizModal />
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
