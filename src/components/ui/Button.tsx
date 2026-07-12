import { cn } from "@/lib/utils";
import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "tertiary";
  outline?: boolean;
};

const baseClasses =
  "inline-flex h-12 items-center justify-center rounded-[4px] px-4 border text-base font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

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

export function Button({
  children,
  className,
  href,
  type = "button",
  variant = "primary",
  outline = false,
}: ButtonProps) {
  const classes = cn(
    baseClasses,
    outline ? variants[variant].outline : variants[variant].solid,
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
