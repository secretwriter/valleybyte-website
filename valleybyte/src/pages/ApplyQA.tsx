import SectionHeading from "../components/SectionHeading";
import ApplicationForm from "../components/ApplicationForm";
import { qaProgram } from "../data/programs";
import { useSEO } from "../hooks/useSEO";

export default function ApplyQA() {
  useSEO({
    title: "Apply | QA & Software Testing Internship | ValleyByte",
    description:
      "Apply to ValleyByte's QA & Software Testing Practical Internship. 4 weeks, remote, NPR 5,000.",
  });

  return (
    <section className="container-page pt-16 pb-24">
      <SectionHeading badge="Application" title={qaProgram.name} />

      <div className="grid grid-cols-3 gap-4 mt-8 max-w-lg">
        {[
          ["Duration", qaProgram.duration],
          ["Mode", qaProgram.mode],
          ["Fee", qaProgram.fee],
        ].map(([label, value]) => (
          <div key={label} className="card p-4">
            <p className="text-ink-faint text-xs mb-1">{label}</p>
            <p className="text-ink font-semibold text-sm">{value}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 max-w-2xl">
        <ApplicationForm programName={qaProgram.name} />
      </div>
    </section>
  );
}
