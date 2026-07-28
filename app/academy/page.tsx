import type { Metadata } from "next";
import Nav from "@/components/Nav";
import AcademyHero from "@/components/AcademyHero";
import Curriculum from "@/components/Curriculum";
import Capstone from "@/components/Capstone";
import Mentors from "@/components/Mentors";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Enterprise AI Academy — Man & Machine",
  description:
    "A 12-week, live cohort-based program teaching production-first AI engineering — from LLM fundamentals to agentic systems, LLMOps and deployment.",
};

export default function AcademyPage() {
  return (
    <>
      <Nav />
      <main>
        <AcademyHero />
        <Curriculum />
        <Capstone />
        <Mentors />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
