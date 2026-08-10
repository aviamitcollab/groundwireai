import contactData from "@/content/shared/contact.json";
import foundersData from "@/content/shared/founders.json";
import marqueeItemsData from "@/content/shared/marquee.json";
import pillarsData from "@/content/homepage/pillars.json";
import processStepsData from "@/content/homepage/process-steps.json";
import founderQuoteData from "@/content/homepage/founder-quote.json";
import enterpriseProjectsData from "@/content/shared/enterprise-projects.json";
import whyUsData from "@/content/homepage/why-us.json";
import techStackData from "@/content/shared/tech-stack.json";
import bootcampFactsData from "@/content/bootcamp/facts.json";
import cohortsData from "@/content/bootcamp/cohorts.json";
import tracksData from "@/content/bootcamp/tracks.json";
import consultingFactsData from "@/content/consulting/facts.json";
import consultingServicesData from "@/content/consulting/services.json";
import consultingEngagementData from "@/content/consulting/engagement.json";
import productsData from "@/content/products/products.json";
import companyAboutData from "@/content/company/about.json";
import companyValuesData from "@/content/company/values.json";
import careersData from "@/content/company/careers.json";

export const siteUrl = "https://groundwireai.vercel.app";

export const contactEmail = contactData.email;

export const brand = {
  name: "GroundwireAI",
  statement: "Build. Transform. Scale. Enterprise AI.",
};

export const founders = foundersData;

export const marqueeItems = marqueeItemsData;

export const hero = {
  eyebrow: brand.statement,
  headlineBefore: "AI that ",
  headlineEm: "ships",
  headlineAfter: ", not just demos.",
  sub: "Bootcamp cohorts, consulting engagements, and AI products — all held to the same production bar: a human signs off, and nothing ships until it survives contact with production.",
  ctas: [
    { label: "Join Next Cohort", href: "/bootcamp", variant: "primary" as const },
    {
      label: "Book AI Strategy Call",
      href: `mailto:${contactEmail}?subject=AI%20Strategy%20Call`,
      variant: "ghost" as const,
    },
  ],
};

export const pillars = pillarsData.map((pillar) => ({
  ...pillar,
  cta: {
    label: pillar.cta.label,
    href:
      pillar.id === "products"
        ? "/products"
        : `mailto:${contactEmail}?subject=${encodeURIComponent(pillar.cta.subject)}`,
  },
}));

export const processSteps = processStepsData;

export const founderQuote = founderQuoteData;

export const enterpriseProjects = enterpriseProjectsData;

export const whyUs = whyUsData;

export const techStack = techStackData;

export const bootcampFacts = bootcampFactsData;

export const cohorts = cohortsData;

export type Cohort = (typeof cohortsData)[number];

export const cohortTracks = tracksData;

export const consultingFacts = consultingFactsData;

export const consultingServices = consultingServicesData;

export const consultingEngagement = consultingEngagementData;

export const products = productsData;

export type Product = (typeof productsData)[number];

export const companyAbout = companyAboutData;

export const companyValues = companyValuesData;

type CareerRole = { title: string; location: string };

export const careers = {
  ...careersData,
  openRoles: careersData.openRoles as CareerRole[],
};

export const navLinks = [
  { href: "/bootcamp", label: "Bootcamp" },
  { href: "/consulting", label: "Consulting" },
  { href: "/products", label: "Products" },
  { href: "/company", label: "Company" },
  { href: "/careers", label: "Careers" },
  { href: "/resources", label: "Resources" },
  { href: "/#contact", label: "Contact" },
];

export const companyLinks = [
  { href: "/company", label: "Company" },
  { href: "/careers", label: "Careers" },
  { href: "/resources", label: "Resources" },
];
