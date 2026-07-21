import { marqueeItems } from "@/lib/data";

export default function Marquee() {
  const text = marqueeItems.join(" ✦ ") + " ✦ ";

  return (
    <div className="overflow-hidden border-y border-line bg-bg-soft py-4">
      <div className="flex w-max animate-marquee">
        <span className="whitespace-nowrap pr-2 font-head text-lg text-ink-dim">
          {text}
        </span>
        <span className="whitespace-nowrap pr-2 font-head text-lg text-ink-dim">
          {text}
        </span>
      </div>
    </div>
  );
}
