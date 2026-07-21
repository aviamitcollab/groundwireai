"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const dotX = useMotionValue(0);
  const dotY = useMotionValue(0);
  const ringX = useMotionValue(0);
  const ringY = useMotionValue(0);
  const springRingX = useSpring(ringX, { damping: 30, stiffness: 300, mass: 0.5 });
  const springRingY = useSpring(ringY, { damping: 30, stiffness: 300, mass: 0.5 });

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mq.matches) return;

    const handleMove = (e: MouseEvent) => {
      setIsVisible(true);
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor='hover']")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
    };
  }, [dotX, dotY, ringX, ringY]);

  if (typeof window !== "undefined") {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mq.matches) return null;
  }

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[1000] hidden h-1.5 w-1.5 rounded-full bg-ink md:block"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[1000] hidden rounded-full border md:block"
        style={{
          x: springRingX,
          y: springRingY,
          translateX: "-50%",
          translateY: "-50%",
          width: isHovering ? 64 : 36,
          height: isHovering ? 64 : 36,
          borderColor: isHovering ? "#3357e8" : "rgba(23,26,43,0.35)",
          backgroundColor: isHovering ? "rgba(51,87,232,0.1)" : "transparent",
          opacity: isVisible ? 1 : 0,
          transition: "width .25s ease, height .25s ease, border-color .25s ease, background-color .25s ease",
        }}
      />
    </>
  );
}
