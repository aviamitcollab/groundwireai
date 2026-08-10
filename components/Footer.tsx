import { companyLinks, contactEmail, navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-5 border-t border-line px-5 py-10 text-[0.85rem] text-ink-dim sm:px-8 md:px-16">
      <a href="/" className="font-head text-lg font-semibold text-ink">
        Groundwire<span className="text-accent">AI</span>
      </a>
      <a href={`mailto:${contactEmail}`} data-cursor="hover" className="hover:text-ink">
        {contactEmail}
      </a>
      <nav className="flex flex-wrap gap-6">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="hover:text-ink">
            {link.label}
          </a>
        ))}
      </nav>
      <nav className="flex flex-wrap gap-6">
        {companyLinks.map((link) => (
          <a key={link.href} href={link.href} className="hover:text-ink">
            {link.label}
          </a>
        ))}
      </nav>
      <p className="w-full text-center text-[0.78rem] text-ink-dim">
        © 2026 GroundwireAI. All rights reserved.
      </p>
    </footer>
  );
}
