import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Programs from "@/components/Programs";
import Process from "@/components/Process";
import ProgramFormats from "@/components/ProgramFormats";
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
        <ProgramFormats />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
