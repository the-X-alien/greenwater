import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const sohne = Inter({
  variable: "--font-sohne",
  subsets: ["latin"],
  display: "swap",
});

const signifier = Source_Serif_4({
  variable: "--font-signifier",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Greenwater — AI-Powered Gray Water Recycling for Your Home",
  description:
    "Save 25,000 gallons a year. Greenwater's AI-driven gray water system diverts shower and sink water back to your garden — no full replumbing, no maintenance, no guilt.",
  openGraph: {
    title: "Greenwater — AI-Powered Gray Water Recycling",
    description:
      "Cut your water use in half with AI-driven gray water recycling.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sohne.variable} ${signifier.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
