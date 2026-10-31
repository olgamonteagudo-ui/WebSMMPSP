import { cn } from "@/utils/cn";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
}: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <span
        className={cn(
          "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]",
          dark ? "text-brand-200" : "text-brand-800",
        )}
      >
        <span className={cn("h-px w-8", dark ? "bg-brand-300" : "bg-brand-800")} aria-hidden="true" />
        {eyebrow}
      </span>
      <h2
        className={cn(
          "mt-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl",
          dark ? "text-white" : "text-stone-900",
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4 text-lg leading-relaxed text-pretty", dark ? "text-brand-100/80" : "text-stone-600")}>
          {description}
        </p>
      )}
    </div>
  );
}
