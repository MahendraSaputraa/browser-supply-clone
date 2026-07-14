export type PricingIconKey =
  | "creditCard"
  | "refresh"
  | "framer"
  | "video"
  | "globe"
  | "infinity"
  | "mail";

export type PricingFeature = {
  iconKey: PricingIconKey;
  label: string;
};

export type PricingPlan = {
  name: string;
  badge: string;
  price: string;
  originalPrice: string | null;
  description: string;
  features: PricingFeature[];
  ctaLabel: string;
  ctaHref: string;
  highlighted: boolean;
};
