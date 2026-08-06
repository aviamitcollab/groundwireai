"use client";

import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowUp } from "lucide-react";
import { contactEmail } from "@/lib/data";

type Message = {
  id: number;
  role: "bot" | "user";
  text: string;
  mailto?: { href: string; label: string };
};

const quickReplies: { id: string; label: string; response: string }[] = [
  {
    id: "bootcamp",
    label: "I want to join the Bootcamp",
    response:
      "Great — our Enterprise AI Bootcamp is a live, cohort-based program covering production-first AI engineering, from Python and LLM fundamentals through agentic AI and deployment. Want me to connect you with a program lead?",
  },
  {
    id: "consulting",
    label: "I need AI consulting",
    response:
      "We help enterprises with AI strategy, architecture, implementation and governance. I can have someone scope your engagement — want me to send an intro?",
  },
  {
    id: "explore",
    label: "Just exploring",
    response:
      "No rush! Feel free to browse our Bootcamp, Consulting and Products above, or ask me anything about how GroundwireAI works.",
  },
];

let idCounter = 1;

export default function ChatBubble() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, role: "bot", text: "Hi! I'm Ada 👋 What are you looking to set up?" },
  ]);
  const [input, setInput] = useState("");
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const pushMessage = (msg: Omit<Message, "id">) => {
    idCounter += 1;
    setMessages((prev) => [...prev, { ...msg, id: idCounter }]);
  };

  const handleQuickReply = (reply: (typeof quickReplies)[number]) => {
    pushMessage({ role: "user", text: reply.label });
    setTimeout(() => {
      pushMessage({ role: "bot", text: reply.response });
    }, 400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    pushMessage({ role: "user", text: trimmed });
    setInput("");
    setTimeout(() => {
      const subject = encodeURIComponent("Question for GroundwireAI");
      const body = encodeURIComponent(trimmed);
      pushMessage({
        role: "bot",
        text: "Thanks — I've drafted that as an email to our program team so a real human can follow up.",
        mailto: {
          href: `mailto:${contactEmail}?subject=${subject}&body=${body}`,
          label: `Send to ${contactEmail}`,
        },
      });
    }, 500);
  };

  return (
    <>
      <motion.button
        aria-label="Chat with Ada"
        data-cursor="hover"
        onClick={() => setOpen((v) => !v)}
        whileHover={{ y: -3 }}
        className="fixed bottom-5 right-5 z-[90] flex h-12 w-12 items-center justify-center gap-2.5 rounded-full bg-ink text-[0.85rem] font-medium text-bg shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-colors hover:bg-accent hover:text-white sm:bottom-7 sm:right-7 sm:h-auto sm:w-auto sm:px-5 sm:py-3.5"
      >
        <span className="hidden sm:inline">Ada · AI assistant</span>
        <span className="text-base">✦</span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "bottom right" }}
            className="fixed bottom-5 right-5 z-[95] flex max-h-[min(520px,calc(100vh-100px))] w-[min(360px,calc(100vw-40px))] flex-col overflow-hidden rounded-[20px] border border-line bg-bg-soft shadow-[0_30px_80px_rgba(0,0,0,0.5)] sm:bottom-7 sm:right-7"
          >
            <div className="flex items-center justify-between border-b border-line px-5 py-4">
              <div>
                <p className="font-head text-base font-semibold">Ada</p>
                <p className="mt-0.5 flex items-center gap-1.5 text-[0.75rem] text-ink-dim">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Program assistant · replies in a moment
                </p>
              </div>
              <button
                aria-label="Close chat"
                data-cursor="hover"
                onClick={() => setOpen(false)}
                className="p-1 text-ink-dim transition-colors hover:text-ink"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div
              ref={bodyRef}
              className="flex min-h-[120px] flex-1 flex-col gap-2.5 overflow-y-auto px-5 py-4"
            >
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[0.85rem] leading-[1.45] ${
                    msg.role === "bot"
                      ? "self-start rounded-bl-[4px] bg-ink/[0.06] text-ink"
                      : "self-end rounded-br-[4px] bg-accent text-white"
                  }`}
                >
                  {msg.text}
                  {msg.mailto && (
                    <a
                      href={msg.mailto.href}
                      data-cursor="hover"
                      className="mt-2 block underline underline-offset-2 opacity-90 hover:opacity-100"
                    >
                      {msg.mailto.label}
                    </a>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 px-5 pb-3.5">
              {quickReplies.map((reply) => (
                <button
                  key={reply.id}
                  data-cursor="hover"
                  onClick={() => handleQuickReply(reply)}
                  className="rounded-full border border-line px-3.5 py-2 text-[0.76rem] text-ink-dim transition-colors hover:border-accent hover:bg-accent/10 hover:text-ink"
                >
                  {reply.label}
                </button>
              ))}
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex gap-2 border-t border-line p-3.5"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message…"
                autoComplete="off"
                className="flex-1 rounded-full border border-line bg-ink/[0.04] px-4 py-2.5 text-[0.85rem] text-ink outline-none transition-colors focus:border-accent"
              />
              <button
                type="submit"
                aria-label="Send"
                data-cursor="hover"
                className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-ink text-bg transition-all hover:scale-105 hover:bg-accent hover:text-white"
              >
                <ArrowUp className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
