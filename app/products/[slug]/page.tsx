import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ProductHero from "@/components/product/ProductHero";
import ProductPain from "@/components/product/ProductPain";
import ProductFeatures from "@/components/product/ProductFeatures";
import ProductVision from "@/components/product/ProductVision";
import ProductFacts from "@/components/product/ProductFacts";
import { products, siteUrl } from "@/lib/data";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return {};

  const title = `${product.title} ${product.titleEmphasis} — GroundwireAI`;
  const url = `${siteUrl}/products/${product.slug}`;

  return {
    title,
    description: product.summary,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: product.summary,
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: product.summary,
    },
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) notFound();

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${product.title} ${product.titleEmphasis}`,
    description: product.description,
    category: product.category,
    brand: {
      "@type": "Organization",
      name: "GroundwireAI",
      sameAs: siteUrl,
    },
    url: `${siteUrl}/products/${product.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <Nav />
      <main>
        <ProductHero product={product} />
        <ProductPain product={product} />
        <ProductFeatures product={product} />
        <ProductVision product={product} />
        <ProductFacts product={product} />
      </main>
      <Footer />
    </>
  );
}
