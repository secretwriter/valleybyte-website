import { Target, Compass, Layers, Building2 } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import { useSEO } from "../hooks/useSEO";

const whyBlocks = [
  { title: "Practical Experience", description: "Work on realistic software projects rather than only watching tutorials." },
  { title: "Structured Learning", description: "Follow a clear task-by-task learning path." },
  { title: "Mentor Feedback", description: "Receive feedback on your actual work." },
  { title: "Portfolio Ready", description: "Create work that can be demonstrated during job applications." },
  { title: "Performance Based", description: "Certificates are based on successful completion and evaluation." },
  { title: "Certificate Verification", description: "Employers can verify certificates online." },
];

export default function About() {
  useSEO({
    title: "About ValleyByte | Practical Technology Training in Nepal",
    description:
      "Learn about ValleyByte's mission to bridge the gap between academic learning and industry expectations through practical, structured, and measurable technology experience.",
  });

  return (
    <>
      <section className="container-page pt-16 pb-20">
        <SectionHeading
          badge="About Us"
          title="Who We Are"
          description="ValleyByte is a technology-focused practical learning and internship platform designed to help students and fresh graduates transform theoretical knowledge into demonstrable skills."
        />

        <div className="grid sm:grid-cols-2 gap-6 mt-14">
          <div className="card p-7">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric-500/10 text-electric-400 border border-electric-500/20 mb-4">
              <Target className="h-5 w-5" />
            </span>
            <h3 className="text-ink font-semibold text-lg mb-2">Our Mission</h3>
            <p className="text-ink-muted text-sm leading-relaxed">
              To help aspiring technology professionals bridge the gap between academic learning
              and industry expectations through practical, structured, and measurable experience.
            </p>
          </div>
          <div className="card p-7">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric-500/10 text-electric-400 border border-electric-500/20 mb-4">
              <Compass className="h-5 w-5" />
            </span>
            <h3 className="text-ink font-semibold text-lg mb-2">Our Approach</h3>
            <p className="text-ink-muted text-sm leading-relaxed">
              We pair every participant with structured, real-world tasks and mentor feedback —
              so progress is measured by what you build, not just what you read.
            </p>
          </div>
          <div className="card p-7">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric-500/10 text-electric-400 border border-electric-500/20 mb-4">
              <Layers className="h-5 w-5" />
            </span>
            <h3 className="text-ink font-semibold text-lg mb-2">Why Practical Experience Matters</h3>
            <p className="text-ink-muted text-sm leading-relaxed">
              Employers look for people who can apply what they know. Practical, project-based
              experience is often the missing piece between a degree and a first role.
            </p>
          </div>
          <div className="card p-7">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric-500/10 text-electric-400 border border-electric-500/20 mb-4">
              <Building2 className="h-5 w-5" />
            </span>
            <h3 className="text-ink font-semibold text-lg mb-2">What We Aim to Build</h3>
            <p className="text-ink-muted text-sm leading-relaxed">
              Starting with QA & Software Testing in Nepal, we're building a growing set of
              practical technology programs — expanding into development, security, data, and
              cloud, with room to grow beyond Nepal over time.
            </p>
          </div>
        </div>
      </section>

      <section id="why" className="container-page py-20 scroll-mt-24">
        <SectionHeading badge="Why ValleyByte" title="What makes the experience practical" align="center" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {whyBlocks.map((block) => (
            <div key={block.title} className="card p-6">
              <h3 className="text-ink font-semibold text-base mb-2">{block.title}</h3>
              <p className="text-ink-muted text-sm leading-relaxed">{block.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-20">
        <CTASection
          heading="Ready to Build Real-World Experience?"
          subtitle="Stop learning only through theory. Start building, testing, and proving your skills."
          primaryLabel="Explore Programs"
          primaryTo="/programs"
          secondaryLabel="Contact Us"
          secondaryTo="/contact"
        />
      </section>
    </>
  );
}
