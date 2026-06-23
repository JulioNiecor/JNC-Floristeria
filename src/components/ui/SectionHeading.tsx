import { FadeUp } from "./FadeUp";
import { cn } from "@/lib/utils";

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  invert?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  invert,
  className,
}: Props) {
  return (
    <FadeUp
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "flex items-center gap-3 text-xs uppercase tracking-[0.2em] mb-4",
            align === "center" && "justify-center",
            invert ? "text-primary-foreground/70" : "text-accent",
          )}
        >
          <span className={cn("h-px w-6", invert ? "bg-primary-foreground/40" : "bg-accent/50")} />
          {eyebrow}
          <span className={cn("h-px w-6", invert ? "bg-primary-foreground/40" : "bg-accent/50")} />
        </div>
      )}
      <h2
        className={cn(
          "font-display text-4xl md:text-5xl leading-[1.1]",
          invert ? "text-primary-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-base md:text-lg leading-relaxed",
            invert ? "text-primary-foreground/75" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </FadeUp>
  );
}
