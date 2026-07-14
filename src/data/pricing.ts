import type { PricingPlan } from "@/types/pricing";

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Single template",
    badge: "One-time payment",
    price: "$99",
    originalPrice: null,
    description: "Choose a template best suited for you.",
    features: [
      { iconKey: "creditCard", label: "Instant access to chosen template" },
      { iconKey: "refresh", label: "Lifetime template updates" },
      { iconKey: "framer", label: "3 months Framer Pro" },
      { iconKey: "video", label: "Step-by-step video tutorials" },
    ],
    ctaLabel: "Browse templates",
    ctaHref: "/templates",
    highlighted: false,
  },
  {
    name: "Bundle",
    badge: "One-time payment",
    price: "$399",
    originalPrice: "$1,881",
    description: "Every template, unlimited sites. Build however you want.",
    features: [
      { iconKey: "creditCard", label: "All current templates" },
      { iconKey: "globe", label: "Early access to all future templates" },
      { iconKey: "refresh", label: "Lifetime template updates" },
      { iconKey: "infinity", label: "Use on unlimited sites" },
      { iconKey: "framer", label: "3 months Framer Pro" },
      { iconKey: "video", label: "Step-by-step video tutorials" },
      { iconKey: "mail", label: "Priority support" },
    ],
    ctaLabel: "Get the bundle",
    ctaHref: "/bundle",
    highlighted: true,
  },
];
