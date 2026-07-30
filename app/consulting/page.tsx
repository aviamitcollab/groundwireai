import type { Metadata } from "next";
import Nav from "@/components/Nav";
import ConsultingHero from "@/components/ConsultingHero";
import ConsultingServices from "@/components/ConsultingServices";
import EngagementModel from "@/components/EngagementModel";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Transformation Consulting — GroundwireAI",
  description:
    "Enterprise AI consulting from readiness assessment through governance, architecture, production deployment, and managed AI services.",
};

export default function ConsultingPage() {
  return (
    <>
      <Nav />
      <main>
        <ConsultingHero />
        <ConsultingServices />
        <EngagementModel />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
