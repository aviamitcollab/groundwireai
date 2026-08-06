import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import ChatBubble from "@/components/ChatBubble";
import { founders, siteUrl } from "@/lib/data";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-head",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const siteTitle = "GroundwireAI — Build Production-Ready Enterprise AI Systems";
const siteDescription =
  "GroundwireAI is an Enterprise AI company. We help organizations adopt AI through our Enterprise AI Bootcamp, AI Transformation Consulting, and AI Products.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  alternates: { canonical: siteUrl },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "GroundwireAI",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GroundwireAI",
  url: siteUrl,
  logo: `${siteUrl}/icon.svg`,
  description: siteDescription,
  founder: founders.map((founder) => ({
    "@type": "Person",
    name: founder.name,
    jobTitle: founder.title,
    sameAs: founder.linkedin,
  })),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="bg-bg text-ink font-body antialiased">
        <CustomCursor />
        <ScrollProgress />
        {children}
        <ChatBubble />
      </body>
    </html>
  );
}
