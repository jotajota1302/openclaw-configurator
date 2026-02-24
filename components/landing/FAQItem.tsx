"use client";

import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
  delay?: number;
}

export default function FAQItem({ question, answer, delay = 0 }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="glass-card overflow-hidden animate-fadeInUp"
      style={{ animationDelay: `${delay}s`, animationFillMode: "backwards" }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left hover:bg-slate-800/30 transition-colors"
      >
        <span className="font-semibold text-lg text-white">{question}</span>
        <svg
          className={`w-5 h-5 text-cyan-400 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-6 pb-5 text-slate-300 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}
