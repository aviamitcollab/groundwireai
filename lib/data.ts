import contactData from "@/content/shared/contact.json";
import foundersData from "@/content/shared/founders.json";
import marqueeItemsData from "@/content/shared/marquee.json";
import pillarsData from "@/content/homepage/pillars.json";
import processStepsData from "@/content/homepage/process-steps.json";
import statsData from "@/content/homepage/stats.json";
import enterpriseProjectsData from "@/content/shared/enterprise-projects.json";
import whyUsData from "@/content/homepage/why-us.json";
import techStackData from "@/content/shared/tech-stack.json";
import academyFactsData from "@/content/academy/facts.json";
import academyCurriculumData from "@/content/academy/curriculum.json";
import consultingFactsData from "@/content/consulting/facts.json";
import consultingServicesData from "@/content/consulting/services.json";
import consultingEngagementData from "@/content/consulting/engagement.json";

export const contactEmail = contactData.email;

export const brand = {
  name: "GroundwireAI",
  statement: "Build. Transform. Scale. Enterprise AI.",
};

export const founders = foundersData;

export const marqueeItems = marqueeItemsData;

export const hero = {
  eyebrow: brand.statement,
  headlineBefore: "Build ",
  headlineEm: "Production-Ready",
  headlineAfter: " Enterprise AI Systems",
  sub: "Learn, build and deploy enterprise AI applications with production-grade architecture.",
  ctas: [
    { label: "Join Next Cohort", href: "/academy", variant: "primary" as const },
    {
      label: "Book AI Strategy Call",
      href: `mailto:${contactEmail}?subject=AI%20Strategy%20Call`,
      variant: "ghost" as const,
    },
    { label: "Explore Products", href: "#products", variant: "text" as const },
  ],
};

export const pillars = pillarsData.map((pillar) => ({
  ...pillar,
  cta: {
    label: pillar.cta.label,
    href: `mailto:${contactEmail}?subject=${encodeURIComponent(pillar.cta.subject)}`,
  },
}));

export const processSteps = processStepsData;

export const stats = statsData;

export const enterpriseProjects = enterpriseProjectsData;

export const whyUs = whyUsData;

export const techStack = techStackData;

export const academyFacts = academyFactsData;

export const academyCurriculum = academyCurriculumData;

export const consultingFacts = consultingFactsData;

export const consultingServices = consultingServicesData;

export const consultingEngagement = consultingEngagementData;

export const navLinks = [
  { href: "/academy", label: "Academy" },
  { href: "/consulting", label: "Consulting" },
  { href: "/#products", label: "Products" },
  { href: "/#why-us", label: "Why Us" },
  { href: "/#contact", label: "Contact" },
];
