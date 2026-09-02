import { QrCode, ShieldCheck } from "lucide-react";

export default function CertificatePreview() {
  return (
    <div className="card p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-fade pointer-events-none" />
      <div className="relative flex flex-col gap-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-ink-faint text-xs uppercase tracking-wide mb-1">Certificate of Completion</p>
            <h3 className="text-ink font-semibold text-xl">QA & Software Testing</h3>
          </div>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-electric-500/10 border border-electric-500/20 text-electric-400">
            <ShieldCheck className="h-4.5 w-4.5" />
          </span>
        </div>

        <div className="flex items-end justify-between border-t border-white/[0.07] pt-6">
          <div>
            <p className="text-ink-faint text-xs mb-1">Certificate ID</p>
            <p className="font-mono text-electric-300 text-sm">VB-QA-2026-000001</p>
            <p className="text-ink-muted text-xs mt-3">Issued to Participant Name</p>
          </div>
          <div className="h-14 w-14 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-ink-faint">
            <QrCode className="h-7 w-7" />
          </div>
        </div>
      </div>
    </div>
  );
}
