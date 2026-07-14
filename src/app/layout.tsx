import { Footer, Navbar } from "@/components/layout";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";
import { QueryProviders } from "@/providers/QueryProviders";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const gambetta = localFont({
  src: [
    {
      path: "../assets/fonts/Gambetta-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Gambetta-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/fonts/Gambetta-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Gambetta-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../assets/fonts/Gambetta-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/Gambetta-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-gambetta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Premium Framer Website Templates for Business | Browser Supply",
  description:
    "Launch your online business today using an easy-to-customize Framer website template without writing a single line of code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${gambetta.variable} h-full antialiased`}
    >
      <body>
        <QueryProviders>
          <SmoothScrollProvider>
            <Navbar />
            {children}
            <Footer />
          </SmoothScrollProvider>
        </QueryProviders>
      </body>
    </html>
  );
}
