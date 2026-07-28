export const contactEmail = "avi.amit.collab@gmail.com";

export const brand = {
  name: "Man & Machine",
  statement: "Build. Transform. Scale. Enterprise AI.",
};

export const founders = [
  {
    name: "Amit Kayal",
    title: "Co-Founder",
    bio: "Technology leader focused on AI-first, cloud-native enterprise platforms — architecture, agentic AI, and AWS-native systems. Has deployed production AI agent fleets, cut AI operating cost 30% through model routing, and driven AI-based CPQ automation that cut quote turnaround time 30% while achieving SOC 2 certification for the platforms he's led.",
    linkedin: "https://www.linkedin.com/in/amit-kayal-ab8aa7/",
  },
  {
    name: "Avishek Das",
    title: "Co-Founder",
    bio: "QA Architect with 13+ years building test architecture and automation at scale, now focused on quality engineering for LLM-powered products. Built the QA function and a Playwright-based evaluation framework for an AI-native SaaS platform from the ground up — golden datasets, LLM-as-judge scoring, prompt regression gates, and agent trajectory testing.",
    linkedin: "https://www.linkedin.com/in/dasavishek/",
  },
];

export const marqueeItems = [
  "Enterprise AI Academy",
  "AI Transformation Consulting",
  "AI Products",
  "Agentic AI",
  "MCP",
  "Multi-Agent Systems",
  "LLMOps",
];

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

export const pillars = [
  {
    id: "academy",
    num: "01",
    title: "Enterprise AI Academy",
    description:
      "Live, cohort-based programs that teach production-first AI engineering — not just prompt engineering.",
    bullets: [
      "Live Cohort Programs",
      "Production-first learning",
      "Certification",
      "Career support",
    ],
    cta: { label: "Join Next Cohort", href: `mailto:${contactEmail}?subject=Enterprise%20AI%20Academy` },
  },
  {
    id: "consulting",
    num: "02",
    title: "AI Transformation Consulting",
    description:
      "We help enterprises adopt AI responsibly — from strategy and architecture through to governed, production implementation.",
    bullets: [
      "AI Strategy",
      "Architecture",
      "Enterprise AI Adoption",
      "Implementation",
      "AI Governance",
    ],
    cta: { label: "Book AI Strategy Call", href: `mailto:${contactEmail}?subject=AI%20Strategy%20Call` },
  },
  {
    id: "products",
    num: "03",
    title: "AI Products",
    description:
      "AI SaaS products and agent platforms built with the same production standards we teach and consult on.",
    bullets: ["AI SaaS products", "Agent Platforms", "Enterprise AI Solutions"],
    cta: { label: "Explore Products", href: `mailto:${contactEmail}?subject=AI%20Products` },
  },
];

export const processSteps = [
  {
    num: "01",
    title: "Assess",
    description:
      "We learn your organization's AI readiness, goals and constraints, then map the right path — academy, consulting, or product.",
  },
  {
    num: "02",
    title: "Design",
    description:
      "Architecture, curriculum, or product scope — designed against production standards from day one, not just proof-of-concept.",
  },
  {
    num: "03",
    title: "Build & Deploy",
    description:
      "Real systems shipped to real infrastructure — cloud deployment, observability and governance built in, not bolted on.",
  },
  {
    num: "04",
    title: "Support & Scale",
    description:
      "We certify, monitor and iterate — whether that's a cohort's next module or a production system's next release.",
  },
];

export const stats = [
  { target: 12000, suffix: "+", label: "Engineers trained" },
  { target: 60, suffix: "+", label: "Enterprises & institutions served" },
  { target: 97, suffix: "%", label: "Would recommend" },
  { target: 12, suffix: "wk", label: "Avg. cohort length" },
];

export const enterpriseProjects = [
  {
    name: "Customer Support Agent",
    tag: "Agentic AI",
    meta: "Multi-turn support automation with human handoff",
  },
  {
    name: "HR Agent",
    tag: "Agentic AI",
    meta: "Policy Q&A, onboarding and internal HR workflows",
  },
  {
    name: "Sales Copilot",
    tag: "Agent Platform",
    meta: "Deal research, outreach drafting and CRM actions",
  },
  {
    name: "AI Knowledge Assistant",
    tag: "RAG",
    meta: "Enterprise knowledge base search and synthesis",
  },
  {
    name: "Contract Review Agent",
    tag: "Agentic AI",
    meta: "Clause extraction, risk flagging and redlines",
  },
  {
    name: "Multi-Agent Workflow",
    tag: "Multi-Agent Systems",
    meta: "Orchestrated agents across a multi-step business process",
  },
  {
    name: "AI Test Automation Agent",
    tag: "LLMOps",
    meta: "Autonomous test generation and regression coverage",
  },
  {
    name: "AI Coding Assistant",
    tag: "Agentic AI",
    meta: "Codebase-aware assistant for internal engineering teams",
  },
];

export const whyUs = [
  {
    title: "Enterprise-first approach",
    description: "Built for organizational adoption, not individual novelty.",
  },
  {
    title: "Production-ready curriculum",
    description: "We teach what ships, not just what demos well.",
  },
  {
    title: "Architects as instructors",
    description: "Learn from people who design the systems, not just present slides.",
  },
  {
    title: "End-to-end AI expertise",
    description: "Strategy, architecture, implementation and training under one roof.",
  },
  {
    title: "Hands-on enterprise projects",
    description: "Real agent systems, not toy examples.",
  },
  {
    title: "AI Governance and Security",
    description: "Compliance and risk built into every engagement.",
  },
  {
    title: "Real-world implementation experience",
    description: "Every recommendation is grounded in production deployments.",
  },
];

export const techStack = [
  { category: "Cloud", tools: ["AWS", "Azure", "GCP"] },
  { category: "Models", tools: ["OpenAI", "Claude", "Gemini", "Llama", "Qwen"] },
  { category: "Frameworks", tools: ["LangGraph", "CrewAI", "AutoGen", "MCP"] },
  { category: "Infrastructure", tools: ["FastAPI", "Kubernetes", "Docker", "Terraform"] },
  { category: "Observability", tools: ["LangFuse", "OpenTelemetry", "MLflow"] },
  { category: "Databases", tools: ["PostgreSQL", "Pinecone", "Neo4j", "Redis"] },
];

export const academyFacts = [
  { label: "Format", value: "Live, cohort-based" },
  { label: "Duration", value: "12 weeks" },
  { label: "Commitment", value: "6–8 hrs/week" },
  { label: "Outcome", value: "Certificate + capstone project" },
];

export const academyCurriculum = [
  {
    phase: "Foundations",
    weeks: "Weeks 1–3",
    modules: [
      {
        num: "01",
        title: "AI & LLM Fundamentals",
        description:
          "How large language models work — tokens, context windows, and the model landscape (OpenAI, Claude, Gemini, Llama, Qwen).",
      },
      {
        num: "02",
        title: "Prompt Engineering & Evaluation",
        description:
          "Structured prompting, few-shot techniques, and building evals — including LLM-as-judge patterns.",
      },
      {
        num: "03",
        title: "Python for AI Engineers",
        description:
          "Async patterns, API design and FastAPI fundamentals for building AI-backed services.",
      },
    ],
  },
  {
    phase: "Building with LLMs",
    weeks: "Weeks 4–6",
    modules: [
      {
        num: "04",
        title: "Retrieval-Augmented Generation",
        description:
          "Embeddings, chunking strategies, and vector search with Pinecone.",
      },
      {
        num: "05",
        title: "Knowledge Graphs & Structured Retrieval",
        description: "Hybrid retrieval patterns and graph-based context with Neo4j.",
      },
      {
        num: "06",
        title: "Tool Use & Function Calling",
        description: "Structured outputs, tool schemas, and reliable function calling.",
      },
      {
        num: "07",
        title: "Introduction to Agentic AI",
        description: "Agent loops, planning strategies, and memory fundamentals.",
      },
    ],
  },
  {
    phase: "Agentic Systems",
    weeks: "Weeks 7–9",
    modules: [
      {
        num: "08",
        title: "Building with LangGraph",
        description: "State machines and control flow for production agent systems.",
      },
      {
        num: "09",
        title: "Multi-Agent Orchestration",
        description: "Coordinating specialized agents with CrewAI and AutoGen.",
      },
      {
        num: "10",
        title: "Model Context Protocol (MCP)",
        description: "Building and connecting MCP servers to extend agent capabilities.",
      },
      {
        num: "11",
        title: "Agent Memory & Context Management",
        description: "Persisting agent state and context with Redis and PostgreSQL.",
      },
    ],
  },
  {
    phase: "Production & Governance",
    weeks: "Weeks 10–12",
    modules: [
      {
        num: "12",
        title: "LLMOps & Observability",
        description: "Tracing, evals in CI, and monitoring with LangFuse, OpenTelemetry and MLflow.",
      },
      {
        num: "13",
        title: "Deployment & Infrastructure",
        description: "Shipping to production with Docker, Kubernetes, Terraform and cloud infra.",
      },
      {
        num: "14",
        title: "AI Governance, Security & Capstone",
        description:
          "Responsible AI, security and compliance — capped off with a capstone project presentation.",
      },
    ],
  },
];

export const navLinks = [
  { href: "/academy", label: "Academy" },
  { href: "/#consulting", label: "Consulting" },
  { href: "/#products", label: "Products" },
  { href: "/#why-us", label: "Why Us" },
  { href: "/#contact", label: "Contact" },
];
