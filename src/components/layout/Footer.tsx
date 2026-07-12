import Link from "next/link";
import Image from "next/image";
import { SOCIAL_LINKS, FOOTER_LINK_COLUMNS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import BorderedSection from "@/components/layout/BorderedSection";

export default function Footer() {
  return (
    <footer className="border-t border-gray-700/50">
      <BorderedSection className="!px-0">
        {/* main */}
        <div className="md:px-10 px-5 flex flex-col justify-between gap-12 py-16 md:flex-row md:gap-6">
          {/* left: brand */}
          <div className="max-w-xs">
            <span className="font-gambetta text-2xl font-medium text-white">
              Browser.supply
            </span>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Launch your online business with a premium Framer website
              template.
            </p>
            <div className="mt-6 flex items-center gap-4">
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
          <div className="flex gap-16 sm:gap-24">
            {FOOTER_LINK_COLUMNS.map((column, i) => (
              <ul key={i} className="flex flex-col gap-5">
                {column.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm font-semibold text-white transition-opacity hover:opacity-70"
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
        <div className="flex md:px-10 px-5 flex-col items-center justify-between gap-4 border-t border-gray-700/50 py-6 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} browser.supply.{" "}
            <span className="font-semibold text-white">Framer</span> website
            templates
          </p>

          <div className="flex items-center gap-2">
            <span>Created by</span>
            <Image
              src="/images/avatar.jpg"
              alt="Ramish Aziz"
              width={24}
              height={24}
              className="rounded-full"
            />
            <span className="font-semibold text-white">Ramish Aziz</span>
          </div>
        </div>
      </BorderedSection>
    </footer>
  );
}
