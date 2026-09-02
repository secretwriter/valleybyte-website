import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "../data/faq";

export default function FAQ({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question} className="card overflow-hidden">
            <button
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
            >
              <span className="text-ink font-medium text-[15px]">{item.question}</span>
              <ChevronDown
                className={`h-4 w-4 text-ink-muted flex-shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-electric-400" : ""
                }`}
              />
            </button>
            <div
              id={`faq-panel-${i}`}
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-4 text-sm text-ink-muted leading-relaxed">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
