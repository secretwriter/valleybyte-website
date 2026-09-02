import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-fade pointer-events-none" />
      <div className="container-page pt-16 pb-20 sm:pt-24 sm:pb-28 relative">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="flex flex-col gap-6">
            <span className="badge-pill w-fit">Practical Technology Experience</span>
            <h1 className="text-4xl sm:text-5xl font-semibold text-ink leading-[1.1] tracking-tight">
              Turn Your Skills Into Real-World Experience.
            </h1>
            <p className="text-ink-muted text-lg leading-relaxed max-w-xl">
              ValleyByte helps students and fresh graduates build practical technology skills
              through structured projects, real-world tasks, mentorship, and performance-based
              certification.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <Link to="/programs" className="btn-primary">
                Explore Programs <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/apply/qa-software-testing" className="btn-secondary">
                Apply Now
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4 text-sm text-ink-muted">
              {["Practical Projects", "Mentorship", "Performance Evaluation", "Verifiable Certificates"].map(
                (item) => (
                  <span key={item} className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-electric-400" />
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="relative">
            <div className="card p-5 sm:p-6 shadow-glow">
              <div className="flex items-center gap-1.5 mb-4">
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="ml-2 flex items-center gap-1.5 text-ink-faint text-xs font-mono">
                  <Terminal className="h-3 w-3" /> qa-suite — test_runner.py
                </span>
              </div>
              <div className="rounded-lg bg-void/60 border border-white/[0.06] p-4 font-mono text-[13px] leading-relaxed">
                <p className="text-ink-faint">$ pytest test_checkout_flow.py -v</p>
                <p className="text-electric-300 mt-2">test_add_to_cart .......... <span className="text-emerald-400">PASSED</span></p>
                <p className="text-electric-300">test_apply_coupon ......... <span className="text-emerald-400">PASSED</span></p>
                <p className="text-electric-300">test_invalid_payment ...... <span className="text-red-400">FAILED</span></p>
                <p className="text-ink-faint mt-2">→ Bug logged: BUG-0241, Severity: High</p>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="rounded-lg bg-white/[0.03] border border-white/[0.06] p-3.5">
                  <p className="text-ink-faint text-xs mb-1">API Requests</p>
                  <p className="text-ink font-semibold text-lg">POST /api/orders</p>
                  <p className="text-emerald-400 text-xs mt-1">200 OK · 142ms</p>
                </div>
                <div className="rounded-lg bg-white/[0.03] border border-white/[0.06] p-3.5">
                  <p className="text-ink-faint text-xs mb-1">Coverage</p>
                  <p className="text-ink font-semibold text-lg">87%</p>
                  <p className="text-ink-muted text-xs mt-1">24 test cases</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 card px-4 py-3 hidden sm:flex items-center gap-2.5 shadow-card">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-xs text-ink-muted">Mentor reviewed your submission</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
