import React from "react";
import Section from "@/components/Section";
import CodeExample from "@/components/CodeExample";

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
          <p className="mb-3 text-[var(--foreground)]/90">
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
    {
      question: "How do I configure Aider?",
      answer: (
        <>
          <p className="mb-3 text-[var(--foreground)]/90">
            Configure Aider to use AGENTS.md in <code className="text-[var(--foreground)]/90">.aider.conf.yml</code>:
          </p>
          <div className="w-full flex justify-center">
            <CodeExample
              code="read: AGENTS.md"
              compact
              heightClass="min-h-[48px]"
              centerVertically
            />
          </div>
        </>
      ),
    },
    {
      question: "How do I configure Gemini CLI?",
      answer: (
        <>
          <p className="mb-3 text-[var(--foreground)]/90">
            Configure Gemini CLI to use AGENTS.md in <code className="text-[var(--foreground)]/90">.gemini/settings.json</code>:
          </p>
          <div className="w-full flex justify-center">
            <CodeExample
              code='{
  "contextFileName": "AGENTS.md"
}'
              compact
              heightClass="min-h-[48px]"
              centerVertically
            />
          </div>
        </>
      ),
    },
  ];

  return (
    <Section
      id="faq"
      title="FAQ"
      className="py-20 bg-[#FFFAF1] dark:bg-transparent"
      center
      maxWidthClass="max-w-3xl"
    >
      <div className="space-y-6 max-w-4xl mx-auto">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="bg-white/90 hover:bg-[#FFFAF1] dark:bg-gray-800/50 dark:hover:bg-gray-800/70
                       p-6 rounded-lg shadow-sm transition-colors duration-200 border border-gray-100 dark:border-gray-700"
          >
            <h3 className="text-xl font-semibold text-[var(--foreground)] mb-3">
              {item.question}
            </h3>
            <div className="text-[var(--foreground)]/90 leading-relaxed">
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
