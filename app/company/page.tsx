import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import CompanyOverview from "@/components/company/CompanyOverview";
import ValuesGrid from "@/components/company/ValuesGrid";
import Mentors from "@/components/Mentors";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { companyAbout, siteUrl } from "@/lib/data";

const title = "Company — GroundwireAI";
const description = companyAbout.description;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${siteUrl}/company` },
  openGraph: {
    title,
    description,
    url: `${siteUrl}/company`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function CompanyPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow={companyAbout.eyebrow}
          heading={companyAbout.heading}
          sub={companyAbout.description}
        />
        <CompanyOverview />
        <ValuesGrid heading="What we hold every build to." />
        <Mentors
          eyebrow="Founders"
          heading={
            <>
              Built by people who&rsquo;ve <em>shipped</em> this before.
            </>
          }
          description="Both founders have built and led production AI and quality-engineering functions before GroundwireAI — the same standard applies here."
        />
        <div className="mx-auto flex max-w-content flex-wrap gap-4 border-t border-line px-5 py-10 sm:px-8 md:px-16">
          <a
            href="/careers"
            data-cursor="hover"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-dim transition-colors hover:text-accent"
          >
            See open roles <span aria-hidden>→</span>
          </a>
          <a
            href="/resources"
            data-cursor="hover"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-dim transition-colors hover:text-accent"
          >
            Browse resources <span aria-hidden>→</span>
          </a>
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
