import SectionHeading from "../components/SectionHeading";
import { useSEO } from "../hooks/useSEO";

export default function PrivacyPolicy() {
  useSEO({
    title: "Privacy Policy | ValleyByte",
    description: "Read ValleyByte's privacy policy covering how we collect, use, and protect your information.",
  });

  return (
    <section className="container-page pt-16 pb-24">
      <SectionHeading badge="Legal" title="Privacy Policy" />
      <div className="card p-8 mt-10 max-w-3xl flex flex-col gap-6 text-sm text-ink-muted leading-relaxed">
        <p>
          This Privacy Policy describes how ValleyByte ("we", "us") collects, uses, and protects
          information submitted through this website, including applications and contact forms.
        </p>
        <div>
          <h2 className="text-ink font-semibold text-base mb-2">Information We Collect</h2>
          <p>
            When you apply to a program or contact us, we collect information you provide
            directly, such as your name, email, phone number, educational background, and any
            files you upload (such as a CV).
          </p>
        </div>
        <div>
          <h2 className="text-ink font-semibold text-base mb-2">How We Use Information</h2>
          <p>
            We use the information you submit to review applications, communicate with you about
            our programs, and respond to inquiries. We do not sell personal information to third
            parties.
          </p>
        </div>
        <div>
          <h2 className="text-ink font-semibold text-base mb-2">Certificate Verification</h2>
          <p>
            Public certificate verification only displays limited information: certificate ID,
            program name, participant name, issue date, and verification status. Internal
            evaluation details, grades, and mentor notes are never publicly displayed.
          </p>
        </div>
        <div>
          <h2 className="text-ink font-semibold text-base mb-2">Data Security</h2>
          <p>
            We take reasonable measures to protect submitted information. However, no method of
            transmission over the internet is completely secure.
          </p>
        </div>
        <div>
          <h2 className="text-ink font-semibold text-base mb-2">Contact</h2>
          <p>
            For questions about this policy, please use the contact information listed on our
            Contact page.
          </p>
        </div>
        <p className="text-xs text-ink-faint">Last updated: August 2026</p>
      </div>
    </section>
  );
}
