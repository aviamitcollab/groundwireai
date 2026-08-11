# GroundwireAI

Marketing site for **GroundwireAI**, an Enterprise AI company operating across three pillars: a **Bootcamp** (cohort-based AI and QA engineering training), **Consulting** (AI transformation, governance, and production deployment), and **Products** (AI SaaS and agent platforms).

Built with Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion, deployed on Vercel.

---

## Live site

- **Production:** https://groundwireai.vercel.app
- **Vercel project:** `groundwireai` (org: `avishekroni3-8180s-projects`)
- **GitHub repo:** https://github.com/avishekroni/groundwireai

---

## Pages & sections

| Route | Purpose | Key sections |
|---|---|---|
| `/` | Homepage | Hero, Marquee ticker, Programs (3 pillars), Process ("How we work" + animated stats), Enterprise Projects showcase, Why Us, Technology Stack, Founder quote, Contact CTA |
| `/bootcamp` | Bootcamp anchor page | Hero + quick facts, dynamic Cohort list grouped by track (cards linking to each cohort's page), Capstone projects, Certification & Instructors (founder cards), Contact CTA |
| `/bootcamp/[slug]` | Individual cohort page (one per entry in `cohorts.json`) | Hero, stats, "What you'll build" + program arc, fit check, why-us, format + closing CTA, shared Contact CTA |
| `/consulting` | AI Transformation Consulting detail page | Hero + quick facts, 6 Services, 4-step Engagement Model, Contact CTA |
| `/products` | AI Products index | Hero, dynamic Product list (cards linking to each product's page), Contact CTA |
| `/products/[slug]` | Individual product page (one per entry in `products.json`) | Hero, pain/solution narrative, features, compliance/security section, facts, closing CTA |
| `/company` | Company / About page | Hero, Company overview, Values grid, Founders (Mentors component), links out to Careers and Resources, Contact CTA |
| `/careers` | Careers page | Hero, Values grid, open roles (currently none — see `content/company/careers.json`), Contact CTA |
| `/resources` | Blog/resources index | Hero, live blog feed pulled from dev.to (`lib/devto.ts`), Contact CTA |

Global, present on every page: **Nav** (with mobile menu), **Footer**, and a floating **chat bubble** ("Ada") with canned quick-replies and a free-text input that drafts a `mailto:` to the team.

Also present: `app/sitemap.ts` and `app/robots.ts` for SEO, and `public/llms.txt` for AI-discoverability.

Not yet built (see `ENHANCEMENT_PLAN.md` for the original roadmap, though it now predates most of the above): `/community`, `/case-studies`.

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
├── bootcamp/
│   ├── cohorts.json           # one entry per cohort — hero copy, stats, program arc, fit check, why-us, format
│   ├── tracks.json            # groups cohorts under a named track (e.g. "QA Track") on /bootcamp
│   └── facts.json             # Bootcamp hero's "at a glance" strip
├── consulting/
│   ├── services.json          # the 6 consulting offerings
│   ├── engagement.json        # the 4-step engagement model
│   └── facts.json             # Consulting hero's "at a glance" strip
├── products/
│   └── products.json          # one entry per product — hero copy, pain/solution, features, compliance, facts
├── company/
│   ├── about.json              # /company hero + overview copy
│   ├── careers.json            # /careers hero copy + open roles list
│   └── values.json             # shared Values grid used on /company and /careers
├── homepage/
│   ├── pillars.json           # the 3 homepage cards (Bootcamp/Consulting/Products)
│   ├── process-steps.json     # "How we work" 4 steps
│   ├── founder-quote.json     # homepage founder quote block
│   └── why-us.json            # "Why Choose Us" 7 points
└── shared/
    ├── contact.json           # the single source of truth for the contact email
    ├── enterprise-projects.json  # 8 example projects — used on homepage AND Bootcamp capstone
    ├── tech-stack.json           # tech logos/badges, grouped by category
    ├── founders.json             # founder bios, titles, LinkedIn URLs, photo paths
    └── marquee.json               # the looping ticker strip text
```

`/resources` isn't content-driven — its blog feed is fetched live from dev.to at request time via `lib/devto.ts`, not stored as JSON.

**Example — adding a new cohort:** open `content/bootcamp/cohorts.json`, add a new object to the array with a unique `slug` (see existing entries for the full field shape), commit, push. `generateStaticParams` in `app/bootcamp/[slug]/page.tsx` picks it up automatically — no component or route code needs to change, and it appears as a new card on `/bootcamp` and a new page at `/bootcamp/<slug>`.

**What's *not* in `/content`, and why:** `hero`, `navLinks`, and `brand` stay in [`lib/data.ts`](lib/data.ts) because they encode behavior (routing, CTA variants/styling), not just words — moving them to JSON wouldn't make them meaningfully easier to edit and would separate config from the code that depends on it.

`lib/data.ts` itself is a thin import/re-export layer over `/content` — it's what every component actually imports from (`import { cohorts } from "@/lib/data"`), so component code never needs to change when content does.

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
npx vercel ls groundwireai          # recent deployments + status
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
