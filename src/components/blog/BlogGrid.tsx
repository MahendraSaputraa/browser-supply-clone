"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BorderedSection } from "@/components/layout";

const posts = [
  {
    title: "Squarespace vs Framer: Which Should a Business Owner Actually Pick",
    category: "Online Business",
    date: "Jun 10, 2026",
    image: "/images/image-mockup-7.avif",
    excerpt:
      "A practical guide for business owners choosing between Squarespace and Framer.",
  },
  {
    title:
      "Webflow vs Framer: A Comparison for Business Owners (Not Designers)",
    category: "Online Business",
    date: "Jun 5, 2026",
    image: "/images/image-mockup-8.avif",
    excerpt:
      "A no-nonsense comparison that helps business owners pick the right website tool.",
  },
  {
    title:
      "How to Build a Website With AI (That Doesn’t Look Like Everyone Else’s)",
    category: "Web Design",
    date: "May 31, 2026",
    image: "/images/image-mockup-3.avif",
    excerpt:
      "Keep your site distinct while using AI to speed up design and content decisions.",
  },
  {
    title:
      "How to Improve Your AEO Score (So AI Actually Recommends Your Website)",
    category: "Online Business",
    date: "May 15, 2026",
    image: "/images/image-mockup-4.avif",
    excerpt:
      "Practical AEO tactics for business websites that need more visibility and conversions.",
  },
  {
    title:
      "How to Build a Professional Website in Under an Hour (No Designer, No Code)",
    category: "Web Design",
    date: "May 9, 2026",
    image: "/images/image-mockup-1.avif",
    excerpt:
      "A short workflow for launching a polished business site fast, without extra help.",
  },
  {
    title: "5 Personal Trainer Website Mistakes That Cost You Online Clients",
    category: "Web Design",
    date: "Apr 27, 2026",
    image: "/images/image-mockup-2.avif",
    excerpt:
      "Avoid the common design and content mistakes that make fitness websites feel cheap.",
  },
  {
    title: "Common template mistakes",
    category: "Framer",
    date: "Oct 12, 2025",
    image: "/images/image-mockup-5.avif",
    excerpt:
      "A visual guide to the most frequent template errors and how to fix them cleanly.",
  },
  {
    title: "How Framer Just Became a True Design Tool with Design Pages",
    category: "Framer",
    date: "Sep 26, 2025",
    image: "/images/image-mockup-6.avif",
    excerpt:
      "Why Design Pages changed the way designers and businesses build websites in Framer.",
  },
];

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

export default function BlogGrid() {
  return (
    <section className="border-b relative border-gray-700/50">
      <BorderedSection className="!px-0">
        <div className="mx-auto max-w-100 lg:max-w-360 ">
          <div className="overflow-hidden border border-gray-700/50">
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
                    key={post.title}
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
          </div>
        </div>
      </BorderedSection>
    </section>
  );
}
