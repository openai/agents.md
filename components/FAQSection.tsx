import React from "react";
import Section from "@/components/Section";
import CodeExample from "@/components/CodeExample";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

export default function FAQ() {
  const faqItems: FAQItem[] = [
    {
      question: "Are there required fields?",
      answer:
        "No. AGENTS.md is just standard Markdown. Use any headings you like; the agent simply parses the text you provide.",
    },
    {
      question: "What if instructions conflict?",
      answer:
        "The closest AGENTS.md to the edited file wins; explicit user chat prompts override everything.",
    },
    {
      question: "Will the agent run testing commands found in AGENTS.md automatically?",
      answer:
        "Yes—if you list them. The agent will attempt to execute relevant programmatic checks and fix failures before finishing the task.",
    },
    {
      question: "Can I update it later?",
      answer: "Absolutely. Treat AGENTS.md as living documentation.",
    },
    {
      question: "How do I migrate existing docs to AGENTS.md?",
      answer: (
        <>
          <p className="mb-2">
            Rename existing files to AGENTS.md and create symbolic links for backward compatibility:
          </p>
          <div className="w-full flex justify-center">
            <CodeExample
              code="mv AGENT.md AGENTS.md && ln -s AGENTS.md AGENT.md"
              compact
              heightClass="min-h-[48px]"
              centerVertically
            />
          </div>
        </>
      ),
    },
    { question: "What if my agent doesn't support AGENTS.md natively?",
      answer: (<>
        <p className="mb-2">
        If your agent doesn't use AGENTS.md per default, you can still {" "}
        <Link className="underline hover:no-underline" href="#configuration">configure your agent</Link> to use it.
        </p>
      </>
    )
    },
  ];

  return (
    <Section
      id="faq"
      title="FAQ"
      className="py-20"
      center
      maxWidthClass="max-w-3xl"
    >
      <div className="space-y-8 max-w-4xl mx-auto">
        {faqItems.map((item, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {item.question}
            </h3>
            <div className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
