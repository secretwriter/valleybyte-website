import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  index: string;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, index, title, description }: FeatureCardProps) {
  return (
    <div className="card p-6 group hover:border-electric-500/30 transition-colors duration-300">
      <div className="flex items-center justify-between mb-5">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric-500/10 text-electric-400 border border-electric-500/20 group-hover:bg-electric-500/15 transition-colors">
          <Icon className="h-5 w-5" strokeWidth={2} />
        </span>
        <span className="font-mono text-xs text-ink-faint">{index}</span>
      </div>
      <h3 className="text-ink font-semibold text-lg mb-2">{title}</h3>
      <p className="text-ink-muted text-sm leading-relaxed">{description}</p>
    </div>
  );
}
