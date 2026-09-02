import { Mail, Phone, MapPin } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import ContactForm from "../components/ContactForm";
import { useSEO } from "../hooks/useSEO";

export default function Contact() {
  useSEO({
    title: "Contact | ValleyByte",
    description: "Get in touch with ValleyByte for questions about our practical technology internships.",
  });

  return (
    <section className="container-page pt-16 pb-24">
      <SectionHeading badge="Contact" title="Get in Touch" description="Have a question? Send us a message." />

      <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 mt-12">
        <div className="flex flex-col gap-4">
          <div className="card p-5 flex items-center gap-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric-500/10 text-electric-400 border border-electric-500/20 flex-shrink-0">
              <Mail className="h-4.5 w-4.5" />
            </span>
            <div>
              <p className="text-ink-faint text-xs mb-0.5">Email</p>
              <p className="text-ink text-sm">hello@valleybyte.com <span className="text-ink-faint">(placeholder)</span></p>
            </div>
          </div>
          <div className="card p-5 flex items-center gap-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric-500/10 text-electric-400 border border-electric-500/20 flex-shrink-0">
              <Phone className="h-4.5 w-4.5" />
            </span>
            <div>
              <p className="text-ink-faint text-xs mb-0.5">Phone</p>
              <p className="text-ink text-sm">+977-0000000 <span className="text-ink-faint">(placeholder)</span></p>
            </div>
          </div>
          <div className="card p-5 flex items-center gap-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric-500/10 text-electric-400 border border-electric-500/20 flex-shrink-0">
              <MapPin className="h-4.5 w-4.5" />
            </span>
            <div>
              <p className="text-ink-faint text-xs mb-0.5">Location</p>
              <p className="text-ink text-sm">Nepal</p>
            </div>
          </div>
          <p className="text-xs text-ink-faint mt-2">
            Contact details shown are placeholders and should be replaced with ValleyByte's real
            information before launch.
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
