import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  heading: string;
  subtitle: string;
  primaryLabel: string;
  primaryTo: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}

export default function CTASection({
  heading,
  subtitle,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryTo,
}: CTASectionProps) {
  return (
    <div className="relative rounded-3xl border border-electric-500/20 bg-gradient-to-br from-electric-500/[0.08] via-surface to-violet-500/[0.06] p-10 sm:p-14 text-center overflow-hidden">
      <div className="absolute inset-0 bg-grid-fade pointer-events-none" />
      <div className="relative flex flex-col items-center gap-5">
        <h2 className="text-3xl sm:text-4xl font-semibold text-ink max-w-xl">{heading}</h2>
        <p className="text-ink-muted max-w-lg">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-3 mt-2">
          <Link to={primaryTo} className="btn-primary">
            {primaryLabel} <ArrowRight className="h-4 w-4" />
          </Link>
          {secondaryLabel && secondaryTo && (
            <Link to={secondaryTo} className="btn-secondary">
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
