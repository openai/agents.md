import React from "react";
import Section from "@/components/Section";
import CodeExample from "@/components/CodeExample";
import { useTranslations } from 'next-intl';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

export default function FAQ() {
  const t = useTranslations('faq');

  const faqItems: FAQItem[] = [
    {
      question: t('question1'),
      answer: t('answer1'),
    },
    {
      question: t('question2'),
      answer: t('answer2'),
    },
    {
      question: t('question3'),
      answer: t('answer3'),
    },
    {
      question: t('question4'),
      answer: t('answer4'),
    },
    {
      question: t('question5'),
      answer: (
        <>
          <p className="mb-2">
            {t('answer5Intro')}
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
      question: t('question6'),
      answer: (
        <>
          <p className="mb-2">
            {t.rich('answer6Intro', {
              code: (chunks) => <code>.aider.conf.yml</code>
            })}
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
      question: t('question7'),
      answer: (
        <>
          <p className="mb-2">
            {t.rich('answer7Intro', {
              code: (chunks) => <code>.gemini/settings.json</code>
            })}
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
      title={t('title')}
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
