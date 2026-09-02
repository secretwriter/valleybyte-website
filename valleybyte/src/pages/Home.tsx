import { Link } from "react-router-dom";
import {
  Briefcase,
  FolderKanban,
  Users,
  ClipboardCheck,
  LayoutGrid,
  BadgeCheck,
  ArrowRight,
  GraduationCap,
  UserCheck,
  TestTube2,
  RefreshCcw,
  Lock,
} from "lucide-react";
import Hero from "../components/Hero";
import SectionHeading from "../components/SectionHeading";
import FeatureCard from "../components/FeatureCard";
import ProcessSteps from "../components/ProcessSteps";
import CertificatePreview from "../components/CertificatePreview";
import CTASection from "../components/CTASection";
import { qaProgram, futurePrograms } from "../data/programs";
import { useSEO } from "../hooks/useSEO";

const offerings = [
  { icon: Briefcase, title: "Practical Internships", description: "Structured programs based around real-world projects." },
  { icon: FolderKanban, title: "Real-World Projects", description: "Participants work on projects designed to simulate professional environments." },
  { icon: Users, title: "Mentorship", description: "Guidance and feedback throughout the program." },
  { icon: ClipboardCheck, title: "Skill Assessment", description: "Participants are evaluated based on their actual work." },
  { icon: LayoutGrid, title: "Portfolio Development", description: "Students finish with practical work they can showcase." },
  { icon: BadgeCheck, title: "Verifiable Certificates", description: "Successful participants receive certificates with unique verification IDs and QR codes." },
];

const audiences = [
  { icon: GraduationCap, title: "University Students", description: "Build practical experience while studying." },
  { icon: UserCheck, title: "Fresh Graduates", description: "Strengthen your CV with demonstrable skills." },
  { icon: TestTube2, title: "Aspiring QA Engineers", description: "Build practical software testing experience." },
  { icon: RefreshCcw, title: "Career Switchers", description: "Develop structured hands-on experience in technology." },
];

export default function Home() {
  useSEO({
    title: "ValleyByte | Practical Technology Internships & Training in Nepal",
    description:
      "ValleyByte helps students and fresh graduates build practical technology skills through structured internships, real-world projects, mentorship, performance evaluation, and verifiable certification.",
  });

  return (
    <>
      <Hero />

      <section className="container-page py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <SectionHeading
            badge="About ValleyByte"
            title="Bridging the Gap Between Learning and Industry"
            description="ValleyByte is a technology-focused practical learning and internship platform designed to help students and fresh graduates transform theoretical knowledge into demonstrable skills."
          />
          <div className="card p-7">
            <p className="text-ink-muted text-sm leading-relaxed mb-4">
              Traditional education provides theoretical foundations. ValleyByte focuses on applying
              those foundations through real work — the same way you'd learn on the job.
            </p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm text-ink-muted">
              {[
                "Practical projects",
                "Structured tasks",
                "Industry-style workflows",
                "Mentorship",
                "Performance evaluation",
                "Portfolio development",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-electric-400" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <SectionHeading
          badge="What ValleyByte Offers"
          title="Everything you need to turn knowledge into skill"
          align="center"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {offerings.map((item, i) => (
            <FeatureCard
              key={item.title}
              icon={item.icon}
              index={String(i + 1).padStart(2, "0")}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>

      <section className="container-page py-20">
        <div className="rounded-3xl border border-electric-500/20 bg-gradient-to-br from-surface via-surface to-violet-500/[0.05] p-8 sm:p-12">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-10">
            <div>
              <span className="badge-pill mb-4">Featured Program</span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-ink max-w-xl leading-tight">
                {qaProgram.name}
              </h2>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <Link to={`/programs/${qaProgram.slug}`} className="btn-secondary">View Program</Link>
              <Link to={`/apply/${qaProgram.slug}`} className="btn-primary">
                Apply Now <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <p className="text-ink-muted leading-relaxed max-w-2xl mb-8">{qaProgram.description}</p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[
              ["Duration", qaProgram.duration],
              ["Mode", qaProgram.mode],
              ["Level", qaProgram.level],
              ["Fee", qaProgram.fee],
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-4">
                <p className="text-ink-faint text-xs mb-1">{label}</p>
                <p className="text-ink font-semibold text-sm">{value}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {qaProgram.skills.map((skill) => (
              <span
                key={skill}
                className="text-xs font-medium text-ink-muted bg-white/[0.04] border border-white/[0.07] rounded-full px-3 py-1.5"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <SectionHeading badge="How It Works" title="A clear, five-step path" align="center" />
        <div className="mt-12">
          <ProcessSteps />
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <SectionHeading
            badge="Certification"
            title="Certificates That Can Be Verified"
            description="Every successful participant receives a certificate with a unique certificate ID and QR code that employers can verify online."
          />
          <CertificatePreview />
        </div>
      </section>

      <section className="container-page py-20">
        <SectionHeading badge="Who Is It For?" title="Built for people ready to do the work" align="center" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {audiences.map((item) => (
            <div key={item.title} className="card p-6 text-center flex flex-col items-center">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-electric-500/10 text-electric-400 border border-electric-500/20 mb-4">
                <item.icon className="h-5 w-5" strokeWidth={2} />
              </span>
              <h3 className="text-ink font-semibold text-base mb-1.5">{item.title}</h3>
              <p className="text-ink-muted text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-20">
        <SectionHeading badge="More Programs" title="More Technology Programs Are Coming" align="center" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {futurePrograms.map((program) => (
            <div key={program.slug} className="card p-6 opacity-70">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-ink font-semibold">{program.shortName}</h3>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] text-ink-faint text-[11px] font-medium px-3 py-1">
                  <Lock className="h-3 w-3" /> Coming Soon
                </span>
              </div>
              <p className="text-ink-muted text-sm leading-relaxed">{program.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-20">
        <CTASection
          heading="Ready to Build Real-World Experience?"
          subtitle="Stop learning only through theory. Start building, testing, and proving your skills."
          primaryLabel="Explore QA Internship"
          primaryTo={`/programs/${qaProgram.slug}`}
          secondaryLabel="Apply Now"
          secondaryTo={`/apply/${qaProgram.slug}`}
        />
      </section>
    </>
  );
}
