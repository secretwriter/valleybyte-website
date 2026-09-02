const steps = [
  {
    n: "01",
    title: "Register",
    description: "Create your ValleyByte account.",
  },
  {
    n: "02",
    title: "Choose a Program",
    description: "Select the practical internship that matches your career goals.",
  },
  {
    n: "03",
    title: "Learn & Work",
    description: "Complete structured tasks using real-world projects.",
  },
  {
    n: "04",
    title: "Get Evaluated",
    description: "Mentors review your work and provide feedback.",
  },
  {
    n: "05",
    title: "Earn Your Certificate",
    description: "Successfully complete the requirements and receive a verifiable certificate.",
  },
];

export default function ProcessSteps() {
  return (
    <div className="relative">
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {steps.map((step, i) => (
          <div key={step.n} className="relative">
            <div className="card p-6 h-full">
              <span className="font-mono text-electric-400 text-sm">{step.n}</span>
              <h3 className="text-ink font-semibold text-base mt-3 mb-2">{step.title}</h3>
              <p className="text-ink-muted text-sm leading-relaxed">{step.description}</p>
            </div>
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-white/10" />
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-electric-500/25 bg-electric-500/[0.06] px-5 py-4 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
        <p className="text-sm text-ink">
          Payment does not automatically guarantee a certificate.
        </p>
        <p className="text-sm text-ink-muted">
          Certificate eligibility depends on successful completion and evaluation.
        </p>
      </div>
    </div>
  );
}
