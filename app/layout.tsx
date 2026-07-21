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
  title: "Mind & Machine — We train the builders of tomorrow",
  description:
    "Mind & Machine designs and delivers hands-on AI workshops for colleges and enterprise AI cohorts — from first lecture to production-ready skills.",
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
