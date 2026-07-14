"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Link from "next/link";
import MenuIcon from "@/assets/icons/menu.svg";

import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { CloseIcon } from "@/assets/icons";

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={cn("fixed z-[99] w-full", className)}>
      <div
        className="pointer-events-none absolute inset-0 -z-10 h-[160%]"
        style={{
          contain: "strict",
          transform: "translateZ(0)",
          willChange: "transform",
        }}
      >
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

      {/* z-[102]: harus lebih tinggi dari overlay (z-[101]) supaya logo
          & tombol toggle (X/menu) tetap terlihat & bisa diklik saat menu mobile terbuka */}
      <div className="relative z-[102] px-5 md:px-10">
        <div
          className={cn(
            "mx-auto tracking-[-0.03em] py-5 relative max-w-100 lg:max-w-360 px-5 md:px-10",
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
            <span className="text-base font-medium ">Browser.supply</span>
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
              withAnimation
            >
              Bundle
            </Button>

            <button
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <CloseIcon className="size-10 text-white" />
              ) : (
                <MenuIcon className="size-10 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay  */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[101] lg:hidden backdrop-blur-[10px] bg-black/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              className="pointer-events-none fixed inset-0 z-[101] overflow-hidden lg:hidden"
              initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
              animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
              exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <motion.div
                className="pointer-events-auto relative z-10 flex flex-col items-start justify-start gap-6 px-10 pb-8 pt-28"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {NAV_LINKS.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.15 + index * 0.08 }}
                  >
                    <Link
                      href={item.href}
                      className="text-lg font-semibold text-white transition-opacity hover:opacity-70"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  className="flex items-center gap-6 w-full"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.15 + NAV_LINKS.length * 0.08,
                  }}
                >
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
                </motion.div>

                <motion.div
                  className="w-full"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.15 + (NAV_LINKS.length + 1) * 0.08,
                  }}
                >
                  <Button
                    href="/bundle"
                    variant="primary"
                    className="w-full"
                    withAnimation
                  >
                    Full-kit
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
