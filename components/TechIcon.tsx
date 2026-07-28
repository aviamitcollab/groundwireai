import * as simpleIcons from "simple-icons";

type SimpleIcon = { path: string; title: string };

function getIcon(slug: string): SimpleIcon | undefined {
  const key = `si${slug.charAt(0).toUpperCase()}${slug.slice(1)}`;
  return (simpleIcons as unknown as Record<string, SimpleIcon>)[key];
}

export default function TechIcon({ slug, className }: { slug: string; className?: string }) {
  const icon = getIcon(slug);
  if (!icon) return null;

  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path d={icon.path} />
    </svg>
  );
}
