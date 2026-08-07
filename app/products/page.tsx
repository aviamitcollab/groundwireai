import type { Metadata } from "next";
import Nav from "@/components/Nav";
import ProductsHero from "@/components/ProductsHero";
import ProductList from "@/components/ProductList";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { siteUrl } from "@/lib/data";

const title = "AI Products — GroundwireAI";
const description =
  "AI-native products built by GroundwireAI, with the same production standards we teach and consult on — a Shopify AI app suite and Buddhi Health, an AI clinical co-pilot.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${siteUrl}/products` },
  openGraph: {
    title,
    description,
    url: `${siteUrl}/products`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function ProductsPage() {
  return (
    <>
      <Nav />
      <main>
        <ProductsHero />
        <ProductList />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
