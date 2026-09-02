import { Link } from "react-router-dom";
import { ArrowRight, Lock } from "lucide-react";
import type { Program } from "../data/programs";

export default function ProgramCard({ program }: { program: Program }) {
  const isAvailable = program.status === "available";

  return (
    <div
      className={`card p-6 flex flex-col justify-between min-h-[220px] ${
        isAvailable ? "hover:border-electric-500/30 transition-colors" : "opacity-70"
      }`}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-ink font-semibold text-lg">{program.shortName}</h3>
          {isAvailable ? (
            <span className="badge-pill !py-1 !text-[11px]">Available</span>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] text-ink-faint text-[11px] font-medium px-3 py-1">
              <Lock className="h-3 w-3" /> Coming Soon
            </span>
          )}
        </div>
        <p className="text-ink-muted text-sm leading-relaxed">{program.description}</p>
      </div>

      {isAvailable ? (
        <div className="flex items-center gap-4 mt-6">
          <Link
            to={`/programs/${program.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-electric-400 hover:text-electric-200 transition-colors"
          >
            View Program <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <Link
            to={`/apply/${program.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted hover:text-ink transition-colors"
          >
            Apply Now
          </Link>
        </div>
      ) : (
        <div className="mt-6">
          <span className="text-sm text-ink-faint">Applications not yet open</span>
        </div>
      )}
    </div>
  );
}
