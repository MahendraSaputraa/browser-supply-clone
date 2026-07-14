import { cn } from "@/lib/utils";
import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "tertiary";
  outline?: boolean;
  withAnimation?: boolean;
};

const baseClasses =
  "group inline-flex h-12 items-center justify-center rounded-[4px] px-5 border text-base font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const variants = {
  primary: {
    solid: `
      border-[var(--primary)]
      bg-[var(--primary)]
      text-[var(--primary-foreground)]
      hover:opacity-90
      focus-visible:outline-[var(--primary)]
    `,
    outline: `
      border-[var(--primary)]
      bg-transparent
      text-[var(--primary)]
      hover:bg-[var(--primary)]
      hover:text-[var(--primary-foreground)]
      focus-visible:outline-[var(--primary)]
    `,
  },

  secondary: {
    solid: `
      border-[var(--secondary)]
      bg-[var(--secondary)]
      text-[var(--secondary-foreground)]
      hover:bg-[var(--tertiary)]
      hover:border-[var(--tertiary)]
      bg-[var(--secondary)]
      focus-visible:outline-[var(--secondary)]
    `,
    outline: `
      border-[var(--secondary)]
      bg-transparent
      text-[var(--secondary-foreground)]
      hover:bg-[var(--secondary)]
      focus-visible:outline-[var(--secondary)]
    `,
  },

  tertiary: {
    solid: `
      border-transparent
      bg-transparent
      text-[var(--foreground)]
      hover:bg-[var(--tertiary)]
      focus-visible:outline-[var(--tertiary)]
    `,
    outline: `
      border-[var(--border)]
      bg-transparent
      text-[var(--foreground)]
      hover:border-[var(--primary)]
      hover:bg-[var(--tertiary)]
      focus-visible:outline-[var(--tertiary)]
    `,
  },
};

function AnimatedLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-flex h-6 overflow-hidden">
      <span className="flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:-translate-y-6">
        <span className="flex h-6 items-center justify-center">{children}</span>

        <span className="flex h-6 items-center justify-center">{children}</span>
      </span>
    </span>
  );
}
export function Button({
  children,
  className,
  href,
  type = "button",
  variant = "primary",
  outline = false,
  withAnimation = false,
}: ButtonProps) {
  const classes = cn(
    baseClasses,
    outline ? variants[variant].outline : variants[variant].solid,
    className,
  );

  const content = withAnimation ? (
    <AnimatedLabel>{children}</AnimatedLabel>
  ) : (
    children
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {content}
    </button>
  );
}
