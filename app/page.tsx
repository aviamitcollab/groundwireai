import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Programs from "@/components/Programs";
import Process from "@/components/Process";
import FounderQuote from "@/components/FounderQuote";
import ProgramFormats from "@/components/ProgramFormats";
import WhyUs from "@/components/WhyUs";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Programs />
        <Process />
        <FounderQuote />
        <ProgramFormats />
        <WhyUs />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
