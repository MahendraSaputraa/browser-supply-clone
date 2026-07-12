import Benefits from "@/components/home/Benefits";
import CustomerSuccess from "@/components/home/CustomerSuccess";
import FeaturedTemplates from "@/components/home/FeaturedTemplates";
import Founder from "@/components/home/Founder";
import Hero from "@/components/home/Hero";
import PoweredByFramer from "@/components/home/PoweredByFramer";
import Pricing from "@/components/home/Pricing";
import Process from "@/components/home/Process";
import QuizCTA from "@/components/home/QuizCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedTemplates />
      <Benefits />
      <PoweredByFramer />
      <Process />
      <CustomerSuccess />
      <Pricing />
      <QuizCTA />
      <Founder />
    </>
  );
}
