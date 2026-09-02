import SectionHeading from "../components/SectionHeading";
import { useSEO } from "../hooks/useSEO";

export default function Terms() {
  useSEO({
    title: "Terms & Conditions | ValleyByte",
    description: "Read the terms and conditions for participating in ValleyByte's programs.",
  });

  return (
    <section className="container-page pt-16 pb-24">
      <SectionHeading badge="Legal" title="Terms & Conditions" />
      <div className="card p-8 mt-10 max-w-3xl flex flex-col gap-6 text-sm text-ink-muted leading-relaxed">
        <p>
          By applying to or participating in a ValleyByte program, you agree to the following
          terms.
        </p>
        <div>
          <h2 className="text-ink font-semibold text-base mb-2">Program Access & Fees</h2>
          <p>
            Program fees provide access to structured learning materials, tasks, and mentorship.
            Fees do not guarantee successful completion or certification.
          </p>
        </div>
        <div>
          <h2 className="text-ink font-semibold text-base mb-2">Certification</h2>
          <p>
            Certification is awarded based on successful completion of program requirements and
            mentor evaluation. Payment alone does not entitle a participant to a certificate.
          </p>
        </div>
        <div>
          <h2 className="text-ink font-semibold text-base mb-2">No Guarantee of Employment</h2>
          <p>
            ValleyByte provides practical learning and internship experience. We do not guarantee
            employment, job placement, or any specific career outcome as a result of participating
            in our programs.
          </p>
        </div>
        <div>
          <h2 className="text-ink font-semibold text-base mb-2">Conduct</h2>
          <p>
            Participants are expected to submit their own original work and engage respectfully
            with mentors and staff throughout the program.
          </p>
        </div>
        <div>
          <h2 className="text-ink font-semibold text-base mb-2">Changes to These Terms</h2>
          <p>
            ValleyByte may update these terms from time to time. Continued participation after
            changes constitutes acceptance of the revised terms.
          </p>
        </div>
        <p className="text-xs text-ink-faint">Last updated: August 2026</p>
      </div>
    </section>
  );
}
