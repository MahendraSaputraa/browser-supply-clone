import { useQuery } from "@tanstack/react-query";

import { fetcher } from "@/lib/fetcher";
import { queryKeys } from "@/lib/query-key";
import { BlogPost } from "@/types/blog";

export function useBlog() {
  return useQuery({
    queryKey: queryKeys.blog,
    queryFn: () => fetcher<BlogPost[]>("/api/blog"),
    staleTime: 5 * 60 * 1000,
  });
}
