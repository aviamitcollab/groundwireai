# Playwright Automation Cohort — Curriculum Draft (v5)

## Program Philosophy

Most Playwright content teaches syntax — locators, actions, assertions — and stops there. Very few take learners through what it actually takes to own test automation in a real, production codebase: framework discipline, CI/CD, scale, and increasingly, AI-augmented testing.

This cohort is built around **one evolving application**, carried across both courses — learners don't just learn isolated concepts, they watch (and build) a test suite mature from a well-structured foundation into a production-grade automation system.

Two courses: **Core Playwright & Testing Frameworks** → **Advanced Playwright & Production Automation**.

**A note on the parallelism/flakiness split:** Course 1 teaches parallel execution as a *basic mechanic* (how Playwright runs tests concurrently, and why tests must be independent to do so safely). Course 2 teaches flaky-test *handling* as a production discipline — root-causing shared state, quarantine strategies, smart retries — plus observability at the dashboard/trend level. Different depth, stated explicitly so it doesn't read as repetition.

---

## Course 1 — Core Playwright & Testing Frameworks

**Objective:** Write reliable, well-structured Playwright tests with solid reporting, data-driven design, BDD structure, and an understanding of parallel execution basics.

1. Why Playwright — browser automation fundamentals, install & project setup, running your first test
2. Locators & selectors — priority order (role/text/testid), avoiding brittle selectors; using Codegen to discover and generate locators
3. Page Object Model — structuring tests for maintainability from day one, so every module after this is written the right way, not retrofitted
4. Actions & web-first assertions — Playwright's auto-waiting philosophy
5. Handling real UI — forms, dropdowns, iframes, dialogs, file uploads, basic login (raw UI auth; storage-state optimization deferred to Course 2 deliberately)
6. Structuring tests — specs, fixtures, hooks; test independence & isolation as a principle (the prerequisite for safe parallel execution, taught explicitly rather than assumed)
7. Data-driven testing — fixtures, parameterization, running the same test across datasets
8. Deeper debugging — Inspector, Trace Viewer, screenshots/video (for diagnosing the more complex tests built from module 5 onward)
9. Parallelization & sharding — the basic mechanic of concurrent execution, building directly on module 6's isolation principle (flaky-test *handling* strategies live in Course 2, not here)
10. BDD with Playwright — Gherkin, Cucumber/playwright-bdd, translating specs into scenarios stakeholders can read
11. Reporting fundamentals — HTML reporter, structuring readable test output
12. **Capstone:** a data-driven, parallelized, BDD-structured test suite (with login, a readable spec, and a report) for a real end-to-end flow

*Language track: TypeScript — POM, fixtures, and all code from module 3 onward will be written in TS.*

---

## Course 2 — Advanced Playwright & Production Automation

**Objective:** Take the suite from Course 1 into API coverage, robust CI/CD, and AI-augmented, production-grade territory.

*Recommended prerequisite: basic familiarity with Docker and cloud infrastructure concepts — not taught in this cohort, but assumed going into module 8.*

1. API testing with Playwright's request context; hybrid API+UI tests
2. Auth strategies — storage state, session reuse (the optimized version of Course 1's raw login)
3. Network interception & mocking — testing edge cases and failure states
4. Visual regression testing
5. Component testing (React/Vue/Svelte)
6. Flaky-test handling at production scale — root-causing shared state, quarantine strategies, smart retries (distinct from Course 1's parallelism mechanics)
7. Framework design at scale — monorepo structuring, multi-environment config, test architecture patterns
8. CI/CD pipeline design & reporting, together — GitHub Actions/Jenkins, containerized runners, cloud grids, wiring Allure/dashboards directly into the pipeline as it's built
9. Self-healing test automation — self-healing locators: [decision needed — open-source/LLM-based approach vs. evaluating a commercial tool]
10. Agentic QA workflows — building on Playwright's official MCP server for AI-agent-driven test generation and maintenance
11. Observability & governance — quality gates, ownership models, trend analysis (dashboard/strategic level, distinct from module 6's tactical flaky-test work)
12. Performance testing — how Playwright fits into a broader performance strategy (scoped; not a deep performance-engineering dive)
13. Security testing — how Playwright fits into a broader security strategy
14. **Capstone:** evolve Course 1's suite into a full CI/CD pipeline — pulling in the API tests, mocking, auth, and visual regression built earlier in *this* course, plus self-healing and production monitoring, so nothing taught goes unexercised

---

## Open Questions to Resolve Next

- [ ] Format: live cohort weeks, self-paced, or hybrid?
- [ ] Duration per course (weeks) and total program length
- [ ] Solo-led or co-instructed — and if co-instructed, how modules split
- [ ] The one "evolving application" — what domain (e-commerce, SaaS dashboard, banking demo, etc.)?
- [ ] Baseline prerequisite for Course 1 (programming background assumed? — and given TS, is prior JS/TS exposure a prerequisite?)
- [ ] Prerequisites for entering Course 2 directly (skip Course 1)?
- [ ] BDD tooling choice for Course 1 — Cucumber.js vs playwright-bdd vs another
- [ ] Self-healing approach for Course 2 module 9 — open-source/LLM-based vs commercial tool
