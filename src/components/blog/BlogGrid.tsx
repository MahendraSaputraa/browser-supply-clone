"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BorderedSection } from "@/components/layout";
import { useBlog } from "@/hooks/use-blog";

function BlogCard({
  title,
  category,
  date,
  image,
  excerpt,
}: {
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
}) {
  return (
    <article className="group overflow-hidden bg-[#0b0b0b] transition hover:opacity-90">
      <div className="relative h-[260px] overflow-hidden sm:h-[320px] lg:h-[340px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
          <span>{category}</span>
          <span className="inline-block h-1 w-1 rounded-full bg-muted-foreground" />
          <span>{date}</span>
        </div>
        <h2 className="mt-4 text-2xl font-gambetta leading-tight tracking-[-0.03em] text-white">
          {title}
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
          {excerpt}
        </p>
      </div>
    </article>
  );
}

function BlogCardSkeleton() {
  return (
    <div className="overflow-hidden bg-[#0b0b0b]">
      <div className="h-[260px] animate-pulse bg-gray-700/30 sm:h-[320px] lg:h-[340px]" />
      <div className="p-6 md:p-8">
        <div className="flex items-center gap-2">
          <div className="h-3 w-24 animate-pulse rounded-sm bg-gray-700/30" />
          <div className="h-3 w-16 animate-pulse rounded-sm bg-gray-700/30" />
        </div>
        <div className="mt-4 space-y-2">
          <div className="h-6 w-full animate-pulse rounded-sm bg-gray-700/30" />
          <div className="h-6 w-3/4 animate-pulse rounded-sm bg-gray-700/30" />
        </div>
        <div className="mt-4 space-y-2">
          <div className="h-4 w-full animate-pulse rounded-sm bg-gray-700/30" />
          <div className="h-4 w-2/3 animate-pulse rounded-sm bg-gray-700/30" />
        </div>
      </div>
    </div>
  );
}

export default function BlogGrid() {
  const { data, isLoading, isError } = useBlog();

  const posts = data ?? [];

  return (
    <section className="border-b relative border-gray-700/50">
      <BorderedSection className="!px-0">
        <div className="mx-auto max-w-100 lg:max-w-360 ">
          <div className="overflow-hidden border border-gray-700/50">
            {isError && (
              <div className="px-5 py-16 text-center lg:px-10">
                <p className="paragraph text-muted-foreground">
                  Failed to load articles. Please try again later.
                </p>
              </div>
            )}

            {isLoading && (
              <div className="grid lg:divide-y-0 divide-y divide-gray-700/50 grid-cols-1 lg:grid-cols-2 gap-0">
                {Array.from({ length: 4 }).map((_, index) => {
                  const cardClasses = [
                    "border-gray-700/50 ",
                    index % 2 === 0 ? "lg:border-r" : "",
                    index < 2 ? "lg:border-b" : "",
                  ]
                    .filter(Boolean)
                    .join(" ");

                  return (
                    <div key={index} className={cardClasses}>
                      <BlogCardSkeleton />
                    </div>
                  );
                })}
              </div>
            )}

            {!isLoading && !isError && (
              <div className="grid lg:divide-y-0 divide-y divide-gray-700/50  grid-cols-1 lg:grid-cols-2 gap-0">
                {posts.map((post, index) => {
                  const cardClasses = [
                    "border-gray-700/50 ",
                    index % 2 === 0 ? "lg:border-r" : "",
                    index < 2 ? "lg:border-b" : "",
                  ]
                    .filter(Boolean)
                    .join(" ");

                  return (
                    <motion.div
                      key={post.slug}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.7, delay: index * 0.05 }}
                      className={cardClasses}
                    >
                      <BlogCard {...post} />
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </BorderedSection>
    </section>
  );
}
