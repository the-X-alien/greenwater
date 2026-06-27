import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
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
      className={`${inter.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
