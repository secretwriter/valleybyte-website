import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, UploadCloud, FileText } from "lucide-react";
import { submitApplication, type ApplicationPayload } from "../services/applicationService";

type FormState = Omit<ApplicationPayload, "cvFile">;

const initialState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  institution: "",
  degree: "",
  graduationYear: "",
  skillLevel: "",
  motivation: "",
};

const skillLevels = ["Beginner", "Some Exposure", "Intermediate"];
const acceptedTypes = [".pdf", ".doc", ".docx"];

export default function ApplicationForm({ programName }: { programName: string }) {
  const [form, setForm] = useState<FormState>(initialState);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [referenceId, setReferenceId] = useState("");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.fullName.trim()) next.fullName = "Full name is required.";
    if (!form.email.trim()) next.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email address.";
    if (!form.phone.trim()) next.phone = "Phone number is required.";
    if (!form.institution.trim()) next.institution = "College/University is required.";
    if (!form.degree.trim()) next.degree = "Degree is required.";
    if (!form.graduationYear.trim()) next.graduationYear = "Graduation year is required.";
    if (!form.skillLevel) next.skillLevel = "Please select your current skill level.";
    if (!form.motivation.trim()) next.motivation = "Please tell us why you want to join.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) setCvFile(file);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    const result = await submitApplication({ ...form, cvFile });
    if (result.success) {
      setStatus("success");
      setReferenceId(result.referenceId ?? "");
    } else {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card p-8 sm:p-10 flex flex-col items-center text-center gap-4">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-electric-500/10 border border-electric-500/25 text-electric-400">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="text-ink font-semibold text-xl">Application Received</h3>
        <p className="text-ink-muted text-sm max-w-md leading-relaxed">
          Thank you for applying to ValleyByte. Your application has been received. Further
          enrollment and payment instructions will be provided through the contact information
          you submitted.
        </p>
        {referenceId && (
          <p className="font-mono text-xs text-electric-300 bg-electric-500/[0.06] border border-electric-500/20 rounded-lg px-3 py-1.5">
            Reference: {referenceId}
          </p>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="card p-6 sm:p-8 flex flex-col gap-5">
      <div>
        <p className="text-ink font-semibold text-lg">Application & Enrollment</p>
        <p className="text-ink-muted text-sm mt-1">Applying for: {programName}</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Full Name" error={errors.fullName}>
          <input
            type="text"
            value={form.fullName}
            onChange={(e) => update("fullName", e.target.value)}
            className="input"
          />
        </Field>
        <Field label="Email" error={errors.email}>
          <input
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className="input"
          />
        </Field>
        <Field label="Phone" error={errors.phone}>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="input"
          />
        </Field>
        <Field label="College / University" error={errors.institution}>
          <input
            type="text"
            value={form.institution}
            onChange={(e) => update("institution", e.target.value)}
            className="input"
          />
        </Field>
        <Field label="Degree" error={errors.degree}>
          <input
            type="text"
            value={form.degree}
            onChange={(e) => update("degree", e.target.value)}
            className="input"
            placeholder="e.g. BSc. Computer Science"
          />
        </Field>
        <Field label="Graduation Year" error={errors.graduationYear}>
          <input
            type="text"
            value={form.graduationYear}
            onChange={(e) => update("graduationYear", e.target.value)}
            className="input"
            placeholder="e.g. 2026"
          />
        </Field>
      </div>

      <Field label="Current Skill Level" error={errors.skillLevel}>
        <div className="flex flex-wrap gap-2">
          {skillLevels.map((level) => (
            <button
              type="button"
              key={level}
              onClick={() => update("skillLevel", level)}
              className={`rounded-lg border px-3.5 py-2 text-sm transition-colors ${
                form.skillLevel === level
                  ? "border-electric-500/50 bg-electric-500/10 text-electric-200"
                  : "border-white/10 bg-white/[0.03] text-ink-muted hover:text-ink"
              }`}
            >
              {level}
            </button>
          ))}
        </div>
      </Field>

      <Field label="Why do you want to join?" error={errors.motivation}>
        <textarea
          rows={4}
          value={form.motivation}
          onChange={(e) => update("motivation", e.target.value)}
          className="input resize-none"
        />
      </Field>

      <div>
        <label className="block text-sm text-ink-muted mb-1.5">CV Upload</label>
        <label className="flex items-center gap-3 rounded-lg border border-dashed border-white/15 bg-white/[0.02] px-4 py-4 cursor-pointer hover:border-electric-500/40 transition-colors">
          <UploadCloud className="h-5 w-5 text-ink-faint flex-shrink-0" />
          <span className="text-sm text-ink-muted flex-1">
            {cvFile ? (
              <span className="flex items-center gap-2 text-ink">
                <FileText className="h-4 w-4 text-electric-400" /> {cvFile.name}
              </span>
            ) : (
              "Upload your CV (PDF, DOC, or DOCX)"
            )}
          </span>
          <input
            type="file"
            accept={acceptedTypes.join(",")}
            onChange={handleFile}
            className="sr-only"
          />
        </label>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-400">Something went wrong. Please check your details and try again.</p>
      )}

      <button type="submit" className="btn-primary self-start" disabled={status === "submitting"}>
        {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" />}
        {status === "submitting" ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm text-ink-muted mb-1.5">{label}</label>
      {children}
      {error && <p className="text-xs text-red-400 mt-1.5">{error}</p>}
    </div>
  );
}
