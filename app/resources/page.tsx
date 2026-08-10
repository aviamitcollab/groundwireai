import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import BlogList from "@/components/company/BlogList";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { siteUrl } from "@/lib/data";

const title = "Resources — GroundwireAI";
const description = "Our leaders, thinking in public — writing from GroundwireAI, straight from dev.to.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${siteUrl}/resources` },
  openGraph: {
    title,
    description,
    url: `${siteUrl}/resources`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function ResourcesPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Resources"
          heading={
            <>
              Our leaders, thinking in <em>public</em>.
            </>
          }
          sub="Writing from the people building GroundwireAI — straight from dev.to."
        />
        <BlogList />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
