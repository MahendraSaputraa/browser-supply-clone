import { BlogGrid, BlogHero } from "@/components/blog";
import SharedGradientBackground from "@/components/shared/SharedGradientBackground";

export default function BlogPage() {
  return (
    <>
      <div className="relative">
        <SharedGradientBackground className="absolute left-1/2 top-[20%] -translate-x-1/2 -translate-y-1/2 rotate-[-90deg] w-[120vmax] h-[120vmax] sm:w-[85vh] sm:h-[85vw] md:w-[85vh] md:h-[85vw] lg:w-[85vh] lg:h-[85vw]" />
        <BlogHero />
        <BlogGrid />
      </div>
    </>
  );
}
