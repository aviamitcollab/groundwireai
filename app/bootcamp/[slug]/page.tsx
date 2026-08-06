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
import { cohorts } from "@/lib/data";

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

  return {
    title: `${cohort.title} — GroundwireAI Bootcamp`,
    description: cohort.summary,
  };
}

export default function CohortPage({ params }: { params: { slug: string } }) {
  const cohort = cohorts.find((c) => c.slug === params.slug);
  if (!cohort) notFound();

  return (
    <>
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
