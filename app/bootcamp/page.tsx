import type { Metadata } from "next";
import Nav from "@/components/Nav";
import BootcampHero from "@/components/BootcampHero";
import CohortList from "@/components/CohortList";
import Capstone from "@/components/Capstone";
import Mentors from "@/components/Mentors";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Enterprise AI Bootcamp — GroundwireAI",
  description:
    "A 12-week, live cohort-based program teaching production-first AI engineering — from LLM fundamentals to agentic systems, LLMOps and deployment.",
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
