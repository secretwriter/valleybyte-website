interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  badge,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";
  return (
    <div className={`flex flex-col gap-4 max-w-2xl ${alignment}`}>
      {badge && <span className="badge-pill">{badge}</span>}
      <h2 className="text-3xl sm:text-4xl font-semibold text-ink leading-tight">{title}</h2>
      {description && <p className="text-ink-muted text-base leading-relaxed">{description}</p>}
    </div>
  );
}
