import { getDevToArticles } from "@/lib/devto";
import Reveal from "@/components/Reveal";

export default async function BlogList() {
  const articles = await getDevToArticles("amitkayal", 6);
  if (articles.length === 0) return null;

  return (
    <section className="mx-auto max-w-content border-t border-line px-5 py-24 sm:px-8 md:px-16 md:py-32">
      <Reveal className="mb-16 max-w-[680px]">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.14em] text-accent">
          From the blog
        </p>
        <h2 className="font-head text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
          Writing on <em>dev.to</em>, from our founders.
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, i) => (
          <Reveal key={article.url} delay={i * 0.05}>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="flex h-full flex-col rounded-card border border-line bg-bg-soft p-7 transition-all hover:-translate-y-0.5 hover:border-accent"
            >
              <span className="mb-4 text-[0.78rem] text-ink-dim">
                {article.publishedAt} · {article.readingTimeMinutes} min read
              </span>
              <h3 className="mb-2 font-head text-base font-semibold">{article.title}</h3>
              {article.tags.length > 0 && (
                <p className="mt-auto pt-4 text-[0.78rem] text-ink-dim">
                  {article.tags.map((tag) => `#${tag}`).join("  ")}
                </p>
              )}
            </a>
          </Reveal>
        ))}
      </div>

      <p className="mt-8 text-[0.85rem] text-ink-dim">
        <a
          href="https://dev.to/amitkayal"
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="hover"
          className="underline underline-offset-2 hover:text-accent"
        >
          See all posts on dev.to →
        </a>
      </p>
    </section>
  );
}
