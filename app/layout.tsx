import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import ChatBubble from "@/components/ChatBubble";

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

export const metadata: Metadata = {
  title: "Groundwire — Build Production-Ready Enterprise AI Systems",
  description:
    "Groundwire is an Enterprise AI company. We help organizations adopt AI through our Enterprise AI Academy, AI Transformation Consulting, and AI Products.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="bg-bg text-ink font-body antialiased">
        <CustomCursor />
        <ScrollProgress />
        {children}
        <ChatBubble />
      </body>
    </html>
  );
}
