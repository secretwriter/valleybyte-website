import SectionHeading from "../components/SectionHeading";
import FAQ from "../components/FAQ";
import CTASection from "../components/CTASection";
import { generalFaq } from "../data/faq";
import { useSEO } from "../hooks/useSEO";

export default function FAQPage() {
  useSEO({
    title: "FAQ | ValleyByte",
    description:
      "Frequently asked questions about ValleyByte's practical technology internships, fees, evaluation, and certification.",
  });

  return (
    <>
      <section className="container-page pt-16 pb-20">
        <SectionHeading badge="FAQ" title="Frequently Asked Questions" />
        <div className="mt-10 max-w-3xl">
          <FAQ items={generalFaq} />
        </div>
      </section>

      <section className="container-page py-20">
        <CTASection
          heading="Still have questions?"
          subtitle="Reach out and our team will get back to you."
          primaryLabel="Contact Us"
          primaryTo="/contact"
        />
      </section>
    </>
  );
}
