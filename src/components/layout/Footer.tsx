"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { SOCIAL_LINKS, FOOTER_LINK_COLUMNS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import BorderedSection from "./BorderedSection";

export default function Footer() {
  return (
    <footer className="border-t border-gray-700/50">
      <BorderedSection className="!px-0">
        {/* main */}
        <div className="lg:px-10 px-5 flex flex-col justify-between py-10 lg:flex-row gap-8">
          {/* left: brand */}
          <div className="lg:text-start text-center">
            <span className="font-gambetta text-[1.75rem] font-medium text-white">
              Browser.supply
            </span>
            <p className="mt-4 paragraph">
              Launch your online business with a <br /> premium Framer website
              template.
            </p>
            <div className="mt-6 flex lg:justify-start justify-center items-center gap-4">
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
                      className={cn(item.size, "text-white")}
                      aria-label={item.alt}
                    />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* right: link columns */}
          <div className="flex lg:flex-row flex-col lg:justify-start justify-center lg:text-start text-center gap-16 sm:gap-14">
            {FOOTER_LINK_COLUMNS.map((column, i) => (
              <ul key={i} className="flex flex-col gap-6">
                {column.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-base font-semibold text-white transition-opacity hover:opacity-70"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* bottom bar */}
        <div className="flex lg:px-10 px-5 flex-col items-center justify-between gap-4 border-t border-gray-700/50 py-5 paragraph lg:flex-row">
          <p>
            © {new Date().getFullYear()} browser.supply.{" "}
            <span className=" text-white">Framer</span> website templates
          </p>

          <div className="flex items-center gap-2">
            <span>Created by</span>
            <motion.div
              animate={{
                rotate: [-20, 20, -20],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/images/footer-image.avif"
                alt="Ramish Aziz"
                width={34}
                height={34}
                className="rounded-full"
              />
            </motion.div>
            <span className=" text-white">Ramish Aziz</span>
          </div>
        </div>
      </BorderedSection>
    </footer>
  );
}
