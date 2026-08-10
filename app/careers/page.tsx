import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import ValuesGrid from "@/components/company/ValuesGrid";
import CareersRoles from "@/components/company/CareersRoles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { careers, siteUrl } from "@/lib/data";

const title = "Careers — GroundwireAI";
const description = careers.description;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${siteUrl}/careers` },
  openGraph: {
    title,
    description,
    url: `${siteUrl}/careers`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function CareersPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero eyebrow={careers.eyebrow} heading={careers.heading} sub={careers.description} />
        <ValuesGrid heading="What it's like building here." />
        <CareersRoles />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
