import { useQuery } from "@tanstack/react-query";
import { fetcher } from "@/lib/fetcher";
import type { PricingPlan } from "@/types/pricing";
import { queryKeys } from "@/lib/query-key";

export function usePricing() {
  return useQuery({
    queryKey: queryKeys.pricing,
    queryFn: () => fetcher<PricingPlan[]>("/api/pricing"),
    staleTime: 5 * 60 * 1000,
  });
}
