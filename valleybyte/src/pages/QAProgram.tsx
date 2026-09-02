import { Link } from "react-router-dom";
import { ArrowRight, AlertCircle } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import CurriculumTimeline from "../components/CurriculumTimeline";
import FAQ from "../components/FAQ";
import CTASection from "../components/CTASection";
import { qaProgram } from "../data/programs";
import { generalFaq } from "../data/faq";
import { useSEO } from "../hooks/useSEO";

const programFaq = generalFaq.filter((item) =>
  [
    "Is the program online?",
    "How long is the QA internship?",
    "What is the program fee?",
    "Does payment guarantee a certificate?",
    "How is the intern evaluated?",
    "Can employers verify certificates?",
  ].includes(item.question)
);

export default function QAProgram() {
  useSEO({
    title: "QA & Software Testing Internship in Nepal | ValleyByte",
    description:
      "Join ValleyByte's practical QA & Software Testing internship in Nepal. Learn manual testing, API testing, SQL, Selenium, and automation with mentorship and a verifiable certificate.",
  });

  return (
    <>
      <section className="container-page pt-16 pb-16">
        <SectionHeading badge="Featured Program" title={qaProgram.name} description={qaProgram.description} />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 max-w-2xl">
          {[
            ["Duration", qaProgram.duration],
            ["Mode", qaProgram.mode],
            ["Level", qaProgram.level],
            ["Fee", qaProgram.fee],
          ].map(([label, value]) => (
            <div key={label} className="card p-4">
              <p className="text-ink-faint text-xs mb-1">{label}</p>
              <p className="text-ink font-semibold text-sm">{value}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <Link to={`/apply/${qaProgram.slug}`} className="btn-primary">
            Apply for QA Internship <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="container-page py-16">
        <SectionHeading badge="Skills Covered" title="What you'll practice" />
        <div className="flex flex-wrap gap-2 mt-6">
          {qaProgram.skills.map((skill) => (
            <span
              key={skill}
              className="text-sm font-medium text-ink-muted bg-white/[0.04] border border-white/[0.07] rounded-full px-4 py-2"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="container-page py-16">
        <SectionHeading badge="Curriculum" title="Weekly Curriculum" />
        <div className="mt-8">
          <CurriculumTimeline />
        </div>
      </section>

      <section className="container-page py-16">
        <SectionHeading badge="Outcomes" title="What You'll Walk Away With" />
        <div className="grid sm:grid-cols-2 gap-3 mt-8 max-w-2xl">
          {qaProgram.outcomes.map((outcome) => (
            <div key={outcome} className="flex items-center gap-2.5 text-sm text-ink-muted card px-4 py-3">
              <span className="text-electric-400">✓</span> {outcome}
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-16">
        <SectionHeading badge="Evaluation & Certification" title="How completion and certification work" />
        <div className="card p-7 mt-8 max-w-3xl flex gap-4 items-start">
          <AlertCircle className="h-5 w-5 text-electric-400 flex-shrink-0 mt-0.5" />
          <p className="text-ink-muted text-sm leading-relaxed">
            Mentors evaluate your work throughout the program based on the tasks and projects you
            submit. Completion of the program does not automatically result in certification.
            Participants must satisfy the applicable completion and evaluation requirements.
            Successful participants receive a certificate with a unique certificate ID and QR
            code that can be verified publicly.
          </p>
        </div>
      </section>

      <section className="container-page py-16">
        <SectionHeading badge="FAQ" title="Program Questions" />
        <div className="mt-8 max-w-3xl">
          <FAQ items={programFaq} />
        </div>
      </section>

      <section className="container-page py-20">
        <CTASection
          heading="Ready to start testing real software?"
          subtitle="Apply to the QA & Software Testing Practical Internship and start building your portfolio."
          primaryLabel="Apply for QA Internship"
          primaryTo={`/apply/${qaProgram.slug}`}
        />
      </section>
    </>
  );
}
