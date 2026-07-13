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
    image: "/images/templates/selene.png",
    isNew: true,
  },
  {
    slug: "zenna",
    name: "Zenna",
    category: "Yoga studio",
    price: "$129 USD",
    image: "/images/templates/zenna.png",
    isNew: false,
  },
  {
    slug: "traction",
    name: "Traction",
    category: "SMMA",
    price: "$129 USD",
    image: "/images/templates/traction.png",
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
    description: "Choose from the range of expert-crafted templates.",
    video: "/videos/process-step-1.mp4",
  },
  {
    step: 2,
    title: "Make it yours",
    description: "Change text, customize colors, and swap images with ease.",
    video: "/videos/process-step-2.mp4",
  },
  {
    step: 3,
    title: "Go live instantly",
    description:
      "Launch your site in seconds with just one click. Fast, simple, and code-free.",
    video: "/videos/process-step-3.mp4",
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
    "/images/image-mockup-1.avif",
    "/images/image-mockup-2.avif",
    "/images/image-mockup-3.avif",
  ],
  right: [
    "/images/image-mockup-4.avif",
    "/images/image-mockup-5.avif",
    "/images/image-mockup-6.avif",
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
      avatar: "/avatars/emon.jpg",
      rating: 3,
    },
    {
      quote:
        "This Framer template is excellent at elevating your online presence!",
      name: "Nic",
      avatar: "/avatars/nic.jpg",
      rating: 5,
    },
    {
      quote:
        "Beautiful design and is easy to set up! The tutorial helped me a lot.",
      name: "Widya",
      avatar: "/avatars/widya.jpg",
      rating: 5,
    },
    {
      quote: "Super easy to use and customise and also beautifully designed.",
      name: "Dávid",
      avatar: "/avatars/david.jpg",
      rating: 5,
    },
  ],
  row2: [
    {
      quote: "Intentional and distinct design makes them fun to look at.",
      name: "Ian",
      avatar: "/avatars/ian.jpg",
      rating: 5,
    },
    {
      quote: "The templates is so well designed and has a unique look to them.",
      name: "Samar",
      avatar: "/avatars/samar.jpg",
      rating: 5,
    },
    {
      quote:
        "The design is clean, easy to customize, professional, and versatile.",
      name: "Mark",
      avatar: "/avatars/mark.jpg",
      rating: 5,
    },
    {
      quote: "The template is super easy to work with and very beautiful.",
      name: "Aba",
      avatar: "/avatars/aba.jpg",
      rating: 5,
    },
  ],
  row3: [
    {
      quote:
        "Super easy to customize and looked visually stunning at the same time!",
      name: "Tarun",
      avatar: "/avatars/tarun.jpg",
      rating: 5,
    },
    {
      quote: "Brilliant template. Super well designed and easy to customise!",
      name: "Jacob",
      avatar: "/avatars/jacob.jpg",
      rating: 5,
    },
    {
      quote: "An excellent template in terms of design & customizability.",
      name: "Seyed",
      avatar: "/avatars/seyed.jpg",
      rating: 5,
    },
    {
      quote: "Very well-built template. Made with an excellent design.",
      name: "Roni",
      avatar: "/avatars/roni.jpg",
      rating: 5,
    },
  ],
};
