import { TwitterIcon, YoutubeIcon } from "@/assets/icons";

export const NAV_LINKS = [
  { href: "/templates", label: "Templates" },
  { href: "/live-examples", label: "Live examples" },
  { href: "/support", label: "Support" },
  { href: "/blog", label: "Blog" },
];

export const SOCIAL_LINKS = [
  {
    href: "https://twitter.com",
    icon: TwitterIcon,
    alt: "X (Twitter)",
    size: "size-4",
  },
  {
    href: "https://youtube.com",
    icon: YoutubeIcon,
    alt: "YouTube",
    size: "size-6",
  },
];

export const FOOTER_LINK_COLUMNS = [
  [
    { href: "/templates", label: "Templates" },
    { href: "/live-examples", label: "Live examples" },
    { href: "/bundle", label: "Bundle" },
    { href: "/blog", label: "Blog" },
  ],
  [
    { href: "/quiz", label: "Quiz" },
    { href: "/support", label: "Support" },
    { href: "/privacy", label: "Privacy" },
  ],
];

export const PAYMENT_ICONS = [
  { icon: "/images/payment-1.avif", alt: "Payment provider 1" },
  { icon: "/images/paypal.avif", alt: "PayPal" },
  { icon: "/images/cal-payment.avif", alt: "Payment provider 3" },
  { icon: "/images/s-payment.avif", alt: "Stripe" },
  { icon: "/images/g-payment.avif", alt: "Payment provider 5" },
];

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Select a template",
    description: "Choose from the range of\nexpert-crafted templates.",
    video: "/videos/process-1-vid.mp4",
  },
  {
    step: 2,
    title: "Make it yours",
    description: "Change text, customize colors,\n and swap images with ease.",
    video: "/videos/process-1-vid.mp4",
  },
  {
    step: 3,
    title: "Go live instantly",
    description:
      "Launch your site in seconds with just\n one click. Fast, simple, and code-free.",
    video: "/videos/process-2-vid.mp4",
  },
];

export const QUIZ_BACKGROUND_IMAGES = {
  left: [
    "/images/image-mockup-1.avif",
    "/images/image-mockup-2.avif",
    "/images/image-mockup-3.avif",
  ],
  right: [
    "/images/image-mockup-4.avif",
    "/images/image-mockup-5.avif",
    "/images/image-mockup-6.avif",
  ],
};
