import type { Metadata } from "next";
import Nav from "@/components/Nav";
import BootcampHero from "@/components/BootcampHero";
import CohortList from "@/components/CohortList";
import Capstone from "@/components/Capstone";
import Mentors from "@/components/Mentors";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { siteUrl } from "@/lib/data";

const title = "Enterprise AI Bootcamp — GroundwireAI";
const description =
  "A 12-week, live cohort-based program teaching production-first AI engineering — from LLM fundamentals to agentic systems, LLMOps and deployment.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${siteUrl}/bootcamp` },
  openGraph: {
    title,
    description,
    url: `${siteUrl}/bootcamp`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function BootcampPage() {
  return (
    <>
      <Nav />
      <main>
        <BootcampHero />
        <CohortList />
        <Capstone />
        <Mentors />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
