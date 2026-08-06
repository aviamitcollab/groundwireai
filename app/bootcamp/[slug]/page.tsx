import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CohortHero from "@/components/cohort/CohortHero";
import CohortStats from "@/components/cohort/CohortStats";
import CohortBuild from "@/components/cohort/CohortBuild";
import CohortWhoFor from "@/components/cohort/CohortWhoFor";
import CohortWhyUs from "@/components/cohort/CohortWhyUs";
import CohortFormat from "@/components/cohort/CohortFormat";
import { cohorts, siteUrl } from "@/lib/data";

export function generateStaticParams() {
  return cohorts.map((cohort) => ({ slug: cohort.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const cohort = cohorts.find((c) => c.slug === params.slug);
  if (!cohort) return {};

  const title = `${cohort.title} — GroundwireAI Bootcamp`;
  const url = `${siteUrl}/bootcamp/${cohort.slug}`;

  return {
    title,
    description: cohort.summary,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: cohort.summary,
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: cohort.summary,
    },
  };
}

export default function CohortPage({ params }: { params: { slug: string } }) {
  const cohort = cohorts.find((c) => c.slug === params.slug);
  if (!cohort) notFound();

  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: cohort.title,
    description: cohort.description,
    provider: {
      "@type": "Organization",
      name: "GroundwireAI",
      sameAs: siteUrl,
    },
    url: `${siteUrl}/bootcamp/${cohort.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      <Nav />
      <main>
        <CohortHero cohort={cohort} />
        <CohortStats cohort={cohort} />
        <CohortBuild cohort={cohort} />
        <CohortWhoFor cohort={cohort} />
        <CohortWhyUs cohort={cohort} />
        <CohortFormat cohort={cohort} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
