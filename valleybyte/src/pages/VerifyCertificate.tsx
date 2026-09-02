import { useState, type FormEvent } from "react";
import { ShieldCheck, ShieldX, Loader2, Search, Info } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { verifyCertificate, type CertificateRecord } from "../services/certificateService";
import { useSEO } from "../hooks/useSEO";

type Status = "idle" | "loading" | "found" | "not-found";

export default function VerifyCertificate() {
  useSEO({
    title: "Verify a Certificate | ValleyByte",
    description: "Publicly verify a ValleyByte certificate using its unique certificate ID.",
  });

  const [certificateId, setCertificateId] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [record, setRecord] = useState<CertificateRecord | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!certificateId.trim()) return;
    setStatus("loading");
    const result = await verifyCertificate(certificateId);
    if (result.found && result.record) {
      setRecord(result.record);
      setStatus("found");
    } else {
      setRecord(null);
      setStatus("not-found");
    }
  }

  return (
    <section className="container-page pt-16 pb-24">
      <SectionHeading
        badge="Certificate Verification"
        title="Verify a Certificate"
        description="Enter a certificate ID to confirm whether it was issued by ValleyByte."
      />

      <div className="mt-10 max-w-xl">
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={certificateId}
            onChange={(e) => setCertificateId(e.target.value)}
            placeholder="e.g. VB-QA-2026-000001"
            className="input flex-1 font-mono"
            aria-label="Certificate ID"
          />
          <button type="submit" className="btn-primary" disabled={status === "loading"}>
            {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}
            Verify
          </button>
        </form>

        <p className="flex items-start gap-2 text-xs text-ink-faint mt-4">
          <Info className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" />
          This is a demo verification tool using mock data. Try{" "}
          <span className="font-mono text-electric-300">VB-QA-2026-000001</span>. In production
          this will call a live verification API.
        </p>

        {status === "found" && record && (
          <div className="card p-6 mt-8">
            <div className="flex items-center gap-3 mb-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div>
                <p className="text-ink font-semibold">Certificate Verified</p>
                <p className="text-emerald-400 text-xs">{record.status}</p>
              </div>
            </div>
            <dl className="grid grid-cols-2 gap-y-4 text-sm">
              <div>
                <dt className="text-ink-faint text-xs mb-1">Certificate ID</dt>
                <dd className="text-ink font-mono">{record.certificateId}</dd>
              </div>
              <div>
                <dt className="text-ink-faint text-xs mb-1">Issue Date</dt>
                <dd className="text-ink">{record.issueDate}</dd>
              </div>
              <div className="col-span-2">
                <dt className="text-ink-faint text-xs mb-1">Program</dt>
                <dd className="text-ink">{record.program}</dd>
              </div>
              <div className="col-span-2">
                <dt className="text-ink-faint text-xs mb-1">Participant</dt>
                <dd className="text-ink">{record.participantName}</dd>
              </div>
            </dl>
          </div>
        )}

        {status === "not-found" && (
          <div className="card p-6 mt-8 flex items-start gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 text-red-400 border border-red-500/20 flex-shrink-0">
              <ShieldX className="h-5 w-5" />
            </span>
            <div>
              <p className="text-ink font-semibold mb-1">Certificate Not Found</p>
              <p className="text-ink-muted text-sm">
                We couldn't find a certificate matching that ID. Please check the ID and try
                again.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
