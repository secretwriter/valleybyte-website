import SectionHeading from "../components/SectionHeading";
import ProcessSteps from "../components/ProcessSteps";
import CTASection from "../components/CTASection";
import { useSEO } from "../hooks/useSEO";

export default function HowItWorks() {
  useSEO({
    title: "How It Works | ValleyByte",
    description:
      "Learn how the ValleyByte practical internship process works — from registration to earning a verifiable certificate.",
  });

  return (
    <>
      <section className="container-page pt-16 pb-20">
        <SectionHeading
          badge="How It Works"
          title="A clear, five-step process"
          description="From registration to certification, here's exactly what to expect."
        />
        <div className="mt-14">
          <ProcessSteps />
        </div>
      </section>

      <section className="container-page py-20">
        <CTASection
          heading="Ready to Build Real-World Experience?"
          subtitle="Stop learning only through theory. Start building, testing, and proving your skills."
          primaryLabel="Explore QA Internship"
          primaryTo="/programs/qa-software-testing"
          secondaryLabel="Apply Now"
          secondaryTo="/apply/qa-software-testing"
        />
      </section>
    </>
  );
}
