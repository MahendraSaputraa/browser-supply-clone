import { useQuery } from "@tanstack/react-query";
import { fetcher } from "@/lib/fetcher";
import { queryKeys } from "@/lib/query-key";
import type { TestimonialRows } from "@/types/testimonial";

export function useTestimonials() {
  return useQuery({
    queryKey: queryKeys.testimonials,
    queryFn: () => fetcher<TestimonialRows>("/api/testimonials"),
    staleTime: 5 * 60 * 1000,
  });
}
