# Groundwire

Marketing site for **Groundwire**, an Enterprise AI company operating across three pillars: an **Academy** (cohort-based AI engineering training), **Consulting** (AI transformation, governance, and production deployment), and **Products** (AI SaaS and agent platforms).

Built with Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion, deployed on Vercel.

> **Naming note:** the brand is "Groundwire," but the GitHub repo and `package.json` still carry the name `mind-and-machine` / `man-and-machine` from earlier naming iterations. These weren't renamed to avoid disrupting the existing repo history and CI wiring — the live brand name is authoritative wherever it appears in actual page content.

---

## Live site

- **Production:** https://groundwireai.vercel.app
- **Vercel project:** `groundwire` (org: `avishekroni3-8180s-projects`)
- **GitHub repo:** https://github.com/avishekroni/mind-and-machine

---

## Pages & sections

| Route | Purpose | Key sections |
|---|---|---|
| `/` | Homepage | Hero, Marquee ticker, Programs (3 pillars), Process ("How we work" + animated stats), Enterprise Projects showcase, Why Us, Technology Stack, Contact CTA |
| `/academy` | Enterprise AI Academy detail page | Hero + quick facts, 14-module Curriculum (4 phases), Capstone projects, Certification & Instructors (founder cards), Contact CTA |
| `/consulting` | AI Transformation Consulting detail page | Hero + quick facts, 6 Services, 4-step Engagement Model, Contact CTA |

Global, present on every page: **Nav** (with mobile menu), **Footer**, and a floating **chat bubble** ("Ada") with canned quick-replies and a free-text input that drafts a `mailto:` to the team.

Not yet built (see `ENHANCEMENT_PLAN.md` for the full roadmap): dedicated `/products`, `/about`, `/community`, `/case-studies`, `/blog` pages, and a proper SEO pass.

---

## Running locally

```bash
npm install
npm run dev        # http://localhost:3000, with hot reload
```

Other scripts:

```bash
npm run build       # production build (also runs typecheck + lint)
npm run start        # serve the production build locally
npm run lint          # ESLint only
```

**Important:** don't run `npm run build` while `npm run dev` is also running against the same `.next` directory — a production build overwrites the dev server's build artifacts and breaks hot reload (you'll see 404s on `_next/static/*` in the browser). If that happens, stop the dev server, `rm -rf .next`, and restart `npm run dev`.

---

## Updating content (no code changes needed)

Most of the site's copy lives as JSON in **`/content`**, not hardcoded in components. To add a course, update a service description, or change a stat, edit the relevant JSON file and push — no TypeScript or component code needs to change.

```
content/
├── academy/
│   ├── curriculum.json        # the 14 course modules, grouped into 4 phases
│   └── facts.json             # Academy hero's "at a glance" strip
├── consulting/
│   ├── services.json          # the 6 consulting offerings
│   ├── engagement.json        # the 4-step engagement model
│   └── facts.json             # Consulting hero's "at a glance" strip
├── homepage/
│   ├── pillars.json           # the 3 homepage cards (Academy/Consulting/Products)
│   ├── process-steps.json     # "How we work" 4 steps
│   ├── stats.json             # the animated counter bar (Engineers trained, etc.)
│   └── why-us.json            # "Why Choose Us" 7 points
└── shared/
    ├── contact.json           # the single source of truth for the contact email
    ├── enterprise-projects.json  # 8 example projects — used on homepage AND Academy capstone
    ├── tech-stack.json           # tech logos/badges, grouped by category
    ├── founders.json             # founder bios, titles, LinkedIn URLs, photo paths
    └── marquee.json               # the looping ticker strip text
```

**Example — adding a 15th Academy module:** open `content/academy/curriculum.json`, add a new module object to the appropriate phase's `modules` array (or a new phase), commit, push. That's it — the Academy page picks it up automatically.

**What's *not* in `/content`, and why:** `hero`, `navLinks`, and `brand` stay in [`lib/data.ts`](lib/data.ts) because they encode behavior (routing, CTA variants/styling), not just words — moving them to JSON wouldn't make them meaningfully easier to edit and would separate config from the code that depends on it.

`lib/data.ts` itself is a thin import/re-export layer over `/content` — it's what every component actually imports from (`import { academyCurriculum } from "@/lib/data"`), so component code never needs to change when content does.

### Updating the contact email

Edit `content/shared/contact.json`. Every `mailto:` link sitewide (Nav CTA, Hero, all pillar cards, both dedicated-page heroes, Footer, and the chat bubble's dynamic email) is built from this one value — changing it here updates everywhere.

### Founder photos

Stored in `public/founders/` (referenced by path in `content/shared/founders.json`). To add or replace a photo, drop the image file in that folder and update the `photo` path in the JSON.

---

## Deploying / Vercel integration

The project is connected to Vercel via GitHub — **any push to `main` triggers an automatic production deployment**. No manual deploy step needed for normal changes.

- **Auto-deploy:** push to `main` → Vercel builds → live at https://groundwireai.vercel.app within ~30–60s
- **Manual deploy** (if you ever need to redeploy without a new commit): `npx vercel --prod` from the project root (requires `vercel login` once, interactively)
- **Environment:** static site, no environment variables required for the app itself. `.env.local` (if present) only holds a local Vercel OIDC token used by the CLI — it's gitignored and not needed for the site to function

### Checking deployment status

```bash
npx vercel ls groundwire          # recent deployments + status
npx vercel inspect <deployment-url>  # detailed status of one deployment
```

---

## Project structure

```
app/                  Next.js App Router pages (route = folder path)
components/           React components, one per section/feature
content/              JSON content files (see "Updating content" above)
lib/data.ts           Re-exports /content as typed constants; hero/nav/brand live here directly
public/                Static assets (favicon, founder photos)
```

---

## Tech stack

- **Framework:** Next.js 14 (App Router), TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion (scroll reveals, stagger entrances, animated counters)
- **Icons:** lucide-react (UI icons), simple-icons (tech-stack brand logos, rendered as inline SVG server-side — see `components/TechIcon.tsx`)
- **Fonts:** Space Grotesk (headings) + Inter (body), via `next/font`
- **Hosting:** Vercel
