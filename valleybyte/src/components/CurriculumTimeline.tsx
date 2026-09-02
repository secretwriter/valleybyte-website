import { qaCurriculum } from "../data/curriculum";

export default function CurriculumTimeline() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {qaCurriculum.map((week) => (
        <div key={week.week} className="card p-6 relative overflow-hidden">
          <div className="flex items-baseline gap-3 mb-4">
            <span className="font-mono text-3xl font-semibold text-electric-500/40">
              W{week.week}
            </span>
            <h3 className="text-ink font-semibold text-lg">{week.title}</h3>
          </div>
          <ul className="flex flex-col gap-2.5">
            {week.topics.map((topic) => (
              <li key={topic} className="flex items-center gap-2.5 text-sm text-ink-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-electric-500/60 flex-shrink-0" />
                {topic}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
