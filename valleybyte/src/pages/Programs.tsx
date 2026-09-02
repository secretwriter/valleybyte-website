import SectionHeading from "../components/SectionHeading";
import ProgramCard from "../components/ProgramCard";
import { qaProgram, futurePrograms } from "../data/programs";
import { useSEO } from "../hooks/useSEO";

export default function Programs() {
  useSEO({
    title: "Programs | ValleyByte Practical Technology Internships",
    description:
      "Explore ValleyByte's practical technology internship programs, starting with QA & Software Testing, with more programs coming soon.",
  });

  return (
    <section className="container-page pt-16 pb-24">
      <SectionHeading
        badge="Programs"
        title="Practical Technology Internships"
        description="Start with QA & Software Testing today. More programs are on the way."
      />

      <div className="mt-12">
        <p className="text-ink-faint text-xs uppercase tracking-wide mb-4">Available</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <ProgramCard program={qaProgram} />
        </div>
      </div>

      <div className="mt-14">
        <p className="text-ink-faint text-xs uppercase tracking-wide mb-4">Coming Soon</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {futurePrograms.map((program) => (
            <ProgramCard key={program.slug} program={program} />
          ))}
        </div>
      </div>
    </section>
  );
}
