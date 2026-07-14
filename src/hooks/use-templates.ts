import { useQuery } from "@tanstack/react-query";
import { fetcher } from "@/lib/fetcher";
import type { Template } from "@/types/template";
import { queryKeys } from "@/lib/query-key";

export function useTemplates() {
  return useQuery({
    queryKey: queryKeys.templates,
    queryFn: () => fetcher<Template[]>("/api/templates"),
    staleTime: 5 * 60 * 1000,
  });
}
