import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { submitContactMessage } from "../services/contactService";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialState: FormState = { name: "", email: "", phone: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function validate(): boolean {
    const next: Partial<FormState> = {};
    if (!form.name.trim()) next.name = "Name is required.";
    if (!form.email.trim()) next.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email address.";
    if (!form.message.trim()) next.message = "Message is required.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    const result = await submitContactMessage(form);
    if (result.success) {
      setStatus("success");
      setForm(initialState);
    } else {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card p-8 flex flex-col items-center text-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-electric-500/10 border border-electric-500/25 text-electric-400">
          <CheckCircle2 className="h-6 w-6" />
        </span>
        <h3 className="text-ink font-semibold text-lg">Message Sent</h3>
        <p className="text-ink-muted text-sm max-w-sm">
          Thanks for reaching out. We'll get back to you as soon as possible.
        </p>
        <button className="btn-ghost mt-2" onClick={() => setStatus("idle")}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="card p-6 sm:p-8 flex flex-col gap-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm text-ink-muted mb-1.5">Name</label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-lg bg-white/[0.03] border border-white/10 px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-electric-500/50 outline-none transition-colors"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && <p id="name-error" className="text-xs text-red-400 mt-1.5">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-ink-muted mb-1.5">Email</label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-lg bg-white/[0.03] border border-white/10 px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-electric-500/50 outline-none transition-colors"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && <p id="email-error" className="text-xs text-red-400 mt-1.5">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm text-ink-muted mb-1.5">Phone (optional)</label>
        <input
          id="phone"
          type="tel"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full rounded-lg bg-white/[0.03] border border-white/10 px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-electric-500/50 outline-none transition-colors"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-ink-muted mb-1.5">Message</label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full rounded-lg bg-white/[0.03] border border-white/10 px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-electric-500/50 outline-none transition-colors resize-none"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && <p id="message-error" className="text-xs text-red-400 mt-1.5">{errors.message}</p>}
      </div>

      {status === "error" && (
        <p className="text-sm text-red-400">Something went wrong. Please try again.</p>
      )}

      <button type="submit" className="btn-primary self-start" disabled={status === "submitting"}>
        {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" />}
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
