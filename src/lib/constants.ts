import {
  CreditCardIcon,
  FramerIcon,
  GlobeIcon,
  InfinityIcon,
  MailIcon,
  RefreshIcon,
  TwitterIcon,
  VideoIcon,
  YoutubeIcon,
} from "@/assets/icons";

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

export const FEATURED_TEMPLATES = [
  {
    slug: "selene",
    name: "Selene",
    category: "AI SaaS",
    price: "$129 USD",
    image: "/images/image-mockup-8.avif",
    isNew: true,
  },
  {
    slug: "zenna",
    name: "Zenna",
    category: "Yoga studio",
    price: "$129 USD",
    image: "/images/image-mockup-7.avif",
    isNew: false,
  },
  {
    slug: "traction",
    name: "Traction",
    category: "SMMA",
    price: "$129 USD",
    image: "/images/image-mockup-3.avif",
    isNew: false,
  },
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

export const PRICING_PLANS = [
  {
    name: "Single template",
    badge: "One-time payment",
    price: "$99",
    originalPrice: null,
    description: "Choose a template best suited for you.",
    features: [
      { icon: CreditCardIcon, label: "Instant access to chosen template" },
      { icon: RefreshIcon, label: "Lifetime template updates" },
      { icon: FramerIcon, label: "3 months Framer Pro" },
      { icon: VideoIcon, label: "Step-by-step video tutorials" },
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
      { icon: CreditCardIcon, label: "All current templates" },
      { icon: GlobeIcon, label: "Early access to all future templates" },
      { icon: RefreshIcon, label: "Lifetime template updates" },
      { icon: InfinityIcon, label: "Use on unlimited sites" },
      { icon: FramerIcon, label: "3 months Framer Pro" },
      { icon: VideoIcon, label: "Step-by-step video tutorials" },
      { icon: MailIcon, label: "Priority support" },
    ],
    ctaLabel: "Get the bundle",
    ctaHref: "/bundle",
    highlighted: true,
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

export const TESTIMONIAL_ROWS = {
  row1: [
    {
      quote:
        "The best part is it's aesthetically pleasing and business focused.",
      name: "Emon",
      avatar: "/images/testi-1.avif",
      rating: 3,
    },
    {
      quote:
        "This Framer template is excellent at elevating your online presence!",
      name: "Nic",
      avatar: "/images/testi-2.avif",
      rating: 5,
    },
    {
      quote:
        "Beautiful design and is easy to set up! The tutorial helped me a lot.",
      name: "Widya",
      avatar: "/images/testi-3.avif",
      rating: 5,
    },
    {
      quote: "Super easy to use and customise and also beautifully designed.",
      name: "Dávid",
      avatar: "/images/testi-4.avif",
      rating: 5,
    },
  ],
  row2: [
    {
      quote: "Intentional and distinct design makes them fun to look at.",
      name: "Ian",
      avatar: "/images/testi-4.avif",
      rating: 5,
    },
    {
      quote: "The templates is so well designed and has a unique look to them.",
      name: "Samar",
      avatar: "/images/testi-3.avif",
      rating: 5,
    },
    {
      quote:
        "The design is clean, easy to customize, professional, and versatile.",
      name: "Mark",
      avatar: "/images/testi-2.avif",
      rating: 5,
    },
    {
      quote: "The template is super easy to work with and very beautiful.",
      name: "Aba",
      avatar: "/images/testi-1.avif",
      rating: 5,
    },
  ],
  row3: [
    {
      quote:
        "Super easy to customize and looked visually stunning at the same time!",
      name: "Tarun",
      avatar: "/images/testi-2.avif",
      rating: 5,
    },
    {
      quote: "Brilliant template. Super well designed and easy to customise!",
      name: "Jacob",
      avatar: "/images/testi-1.avif",
      rating: 5,
    },
    {
      quote: "An excellent template in terms of design & customizability.",
      name: "Seyed",
      avatar: "/images/testi-4.avif",
      rating: 5,
    },
    {
      quote: "Very well-built template. Made with an excellent design.",
      name: "Roni",
      avatar: "/images/testi-3.avif",
      rating: 5,
    },
  ],
};
