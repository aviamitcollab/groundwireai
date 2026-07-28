"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-[100] flex items-center justify-between border-b px-5 py-5 backdrop-blur-md transition-colors duration-300 sm:px-8 md:px-16 ${
          scrolled ? "border-line bg-bg/55" : "border-transparent bg-bg/55"
        }`}
      >
        <a
          href="#top"
          data-cursor="hover"
          className="font-head text-lg font-semibold tracking-tight"
        >
          Man<span className="font-head italic text-accent">&amp;</span>Machine
        </a>

        <nav className="hidden gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-cursor="hover"
              className="whitespace-nowrap text-[0.92rem] text-ink-dim transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          data-cursor="hover"
          className="hidden whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium text-ink transition-all hover:-translate-y-0.5 hover:bg-accent hover:text-white hover:shadow-[0_10px_30px_rgba(51,87,232,0.25)] lg:inline-flex lg:bg-ink lg:text-bg"
        >
          Talk to an AI Expert
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="flex flex-col gap-[5px] p-1.5 lg:hidden"
        >
          {menuOpen ? (
            <X className="h-5 w-5 text-ink" />
          ) : (
            <Menu className="h-5 w-5 text-ink" />
          )}
        </button>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[99] flex flex-col items-center justify-center gap-7 bg-bg lg:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-head text-2xl"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-full bg-ink px-6 py-3 font-body text-base font-medium text-bg"
            >
              Talk to an AI Expert
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
