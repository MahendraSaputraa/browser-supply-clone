"use client";

import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@/assets/icons/menu.svg";

import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className }: NavbarProps) {
  return (
    <header className={cn("fixed z-20 w-full", className)}>
      {/* progressive blur */}
      <div className="pointer-events-none absolute inset-0 -z-10 h-[160%]">
        <div
          className="absolute inset-0 backdrop-blur-[20px]"
          style={{
            maskImage:
              "linear-gradient(to bottom, black 0%, black 15%, transparent 30%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 15%, transparent 30%)",
          }}
        />
        <div
          className="absolute inset-0 backdrop-blur-[10px]"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent 10%, black 25%, black 40%, transparent 55%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 10%, black 25%, black 40%, transparent 55%)",
          }}
        />
        <div
          className="absolute inset-0 backdrop-blur-[5px]"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent 35%, black 50%, black 65%, transparent 80%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 35%, black 50%, black 65%, transparent 80%)",
          }}
        />
        <div
          className="absolute inset-0 backdrop-blur-[2px]"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent 60%, black 75%, black 85%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 60%, black 75%, black 85%, transparent 100%)",
          }}
        />
      </div>

      <div
        className={cn(
          "mx-auto tracking-[-0.03em] py-5 relative max-w-360 px-5 xl:px-10",
          "flex items-center justify-between",
          "lg:grid lg:grid-cols-[1fr_auto_1fr]",
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.avif"
            alt="Browser Supply"
            width={0}
            height={0}
            className="h-4.5 w-4.5"
          />

          <span className="text-base font-bold  ">Browser.supply</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-4 lg:flex">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base font-semibold transition-opacity hover:opacity-70"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-5 lg:justify-self-end">
          <div className="hidden items-center gap-4 lg:flex">
            {SOCIAL_LINKS.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-opacity hover:opacity-70"
                >
                  <Icon
                    className={`${item.size} text-white`}
                    aria-label={item.alt}
                  />
                </Link>
              );
            })}
          </div>

          <Button
            href="/bundle"
            variant="secondary"
            className="hidden lg:inline-flex"
          >
            Bundle
          </Button>

          <button className="lg:hidden">
            <MenuIcon className="size-10 text-white" />
          </button>
        </div>
      </div>
    </header>
  );
}
