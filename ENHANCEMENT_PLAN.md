# Enhancement Plan — Repositioning to Enterprise AI Company

Status: **Planning only — no code changed yet**, per request to evaluate first.

## 1. What this feedback actually asks for

The current site is a single-page "AI training for colleges + enterprise cohorts" site (Hero → Marquee → Programs → Process → Program Formats → Contact → Footer, all on `/`).

The feedback document asks for something structurally different: a **multi-page Enterprise AI company site** with three business pillars (Academy, Consulting, Products), plus supporting pages (Case Studies, Blog, Community, About, Contact) and a large amount of trust/credibility content (team, logos, testimonials, tech stack, industries served). This isn't a copy edit — it's closer to a full site rebuild on top of the existing Next.js scaffold.

## 2. Blocking decisions (need your input before I write anything)

**Brand name.** Everything I've built so far says "Mind & Machine." The feedback doc consistently says "**Man & Machine**." I'll treat that as the real/intended name going forward unless you tell me otherwise — but this touches every file (metadata, emails, OG tags, copy), so I want it confirmed once rather than fixing it twice.

**Content I don't have and can't invent responsibly.** A lot of Priority 10 (trust signals) and parts of 4–9 require real facts, not placeholder copy, because presenting fabricated ones would misrepresent the company:
- Founder/leadership names, photos, bios, enterprise backgrounds
- Actual client logos, case studies, testimonials
- Real mentor/instructor names for the Academy
- Actual current AI products (doc separates "Current Products" vs "Future Products" but only lists examples) — what exists today vs. what's aspirational?
- Actual tech stack used (the list in the doc — AWS/Azure/GCP, LangGraph/CrewAI/AutoGen, Pinecone/Neo4j, etc. — reads like a comprehensive "everything" list; is this literally what the company uses, or should it be trimmed to what's true?)
- Community links (Discord/Slack invite), pricing, cohort dates/duration, prerequisites
- Company contact info (address, phone) for enterprise credibility

Where I don't have real content, I'll build the section with clearly-marked placeholders (`[Add founder name]`, `[Add client logo]`) rather than inventing fake names or numbers — same principle I flagged last time with the stat counters.

**Scope for this pass.** Priorities 1–17 amount to roughly 8–9 pages and a dozen content modules. Doing it all before checking direction risks a lot of wasted work if the positioning isn't right yet. I'd suggest confirming Phase 1 (below) reads correctly before I build the rest.

## 3. Gap analysis by priority

| # | Ask | Current state | Effort |
|---|---|---|---|
| 1 | Reposition as Enterprise AI company, new brand statement | Site reads as training-only | Rewrite hero/nav copy sitewide |
| 2 | New hero headline/sub/CTAs | Old headline in place | Direct swap in `Hero.tsx` + `lib/data.ts` |
| 3 | Three pillars section (Academy/Consulting/Products) | `Programs.tsx` has 4 generic cards, not pillar-structured | New section/component |
| 4 | Academy page with 14-module roadmap, duration, mentors, certification | No `/academy` route exists | New page |
| 5 | Enterprise Projects showcase (8 example agent projects) | Doesn't exist | New section, likely on Academy page |
| 6 | Consulting services page (9 services) | Doesn't exist | New `/consulting` route |
| 7 | AI Products showcase | Doesn't exist | New `/products` route |
| 8 | Tech stack display (6 categories, ~25 tools) | Doesn't exist | New section/component, homepage or dedicated |
| 9 | Industries served (8 industries) | Doesn't exist | New section |
| 10 | Trust signals (team, logos, case studies, testimonials, blog, talks) | Doesn't exist | Multiple new sections/pages — **needs real content** |
| 11 | "Why Choose Us" (7 points) | Doesn't exist | New section |
| 12 | Community (Discord/Slack, office hours, hackathons) | Doesn't exist | New `/community` route — **needs real links** |
| 13 | Content strategy (blog publishing) | No blog exists | New `/blog` route + ongoing content, not a one-time build |
| 14 | Repeated CTAs sitewide | Only "Book a workshop"/"See programs" currently | Copy + placement pass across all pages |
| 15 | New nav: Home/Academy/Consulting/Products/Case Studies/Blog/Community/About/Contact | Nav has Programs/Process/Cohorts (in-page anchors) | Rebuild `Nav.tsx` for multi-page routing |
| 16 | SEO (metadata, structured data, keyword pages) | Basic single-page metadata only | Per-page metadata, JSON-LD, sitemap |
| 17 | Differentiators (production AI, governance, LLMOps, etc.) | Not present | Fold into "Why Choose Us" + pillar copy |

## 4. Proposed site map (Priority 15, adapted)

```
/                  Home — repositioned hero, 3-pillar overview, why-us, tech stack strip, CTA
/academy           Curriculum roadmap, projects, mentors, certification, cohort logistics
/consulting        9 services, engagement model, CTA to strategy call
/products          Current + future product showcase
/case-studies      Client stories (needs real content)
/blog              Article index (needs real content / CMS decision)
/community          Discord/Slack, office hours, hackathons, events
/about             Founders, leadership, mission, differentiators
/contact           Unified contact/booking page
```

This is a straightforward extension of the existing Next.js App Router structure — each becomes `app/<route>/page.tsx`. No architectural blockers.

## 5. Suggested phasing

**Phase 1 — Reposition the homepage (highest leverage, lowest risk).** New brand statement, hero headline/sub/CTAs, three-pillars section, tech stack strip, "why choose us," updated nav shell (even before other pages exist, nav can link to placeholder routes). This alone fixes the #1 problem: "site doesn't read as an Enterprise AI company."

**Phase 2 — Build out Academy page.** Highest content-readiness (curriculum, projects, and process are fully specified in your doc — least dependent on facts I don't have).

**Phase 3 — Consulting + Products pages.** Also well-specified in the doc.

**Phase 4 — About, Contact, Community.** Needs real founder/team info and community links from you.

**Phase 5 — Case Studies, Blog, trust signals (logos/testimonials).** Needs real client/content material; likely an ongoing effort rather than a single build.

**Phase 6 — SEO pass.** Metadata, structured data, sitemap, internal linking — best done once page content is stable, not before.

## 6. Open questions

1. Confirm brand name: **Man & Machine** (per this doc) or keep **Mind & Machine**?
2. Okay to start with Phase 1 (homepage reposition) and build outward from there, rather than attempting all 17 priorities at once?
3. For sections needing real facts (team, logos, testimonials, community links, current vs. future products, actual tech stack) — can you supply these, or should I placeholder them clearly for you to fill in later?
4. Where should I make these code changes — here (I can edit the source files directly; you'd run `npm run build`/`dev` in Claude Code or locally to verify), or do you want to feed this plan into your Claude Code session and have it build there?
