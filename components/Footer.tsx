import { contactEmail } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-5 border-t border-line px-5 py-10 text-[0.85rem] text-ink-dim sm:px-8 md:px-16">
      <a href="#top" className="font-head text-lg font-semibold text-ink">
        Mind<span className="italic text-accent">&amp;</span>Machine
      </a>
      <a href={`mailto:${contactEmail}`} data-cursor="hover" className="hover:text-ink">
        {contactEmail}
      </a>
      <nav className="flex gap-6">
        <a href="#programs" className="hover:text-ink">
          Programs
        </a>
        <a href="#cohorts" className="hover:text-ink">
          Cohorts
        </a>
        <a href="#contact" className="hover:text-ink">
          Contact
        </a>
      </nav>
      <p className="w-full text-center text-[0.78rem] opacity-60">
        © 2026 Mind &amp; Machine. All rights reserved.
      </p>
    </footer>
  );
}
