import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import ResourcesList from "@/components/company/ResourcesList";
import BlogList from "@/components/company/BlogList";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { siteUrl } from "@/lib/data";

const title = "Resources — GroundwireAI";
const description =
  "Courses, products, and services from GroundwireAI — the Bootcamp curriculum, AI products, and consulting services, in one place.";

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
          heading="Courses, products, and services — in one place."
          sub="Everything GroundwireAI has shipped so far, across the Bootcamp, Products, and Consulting."
        />
        <ResourcesList />
        <BlogList />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
