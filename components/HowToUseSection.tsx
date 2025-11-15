import Section from "@/components/Section";
import React from "react";
import { useTranslations } from 'next-intl';

export default function HowToUseSection() {
  const t = useTranslations('howToUse');

  const steps = [
    {
      title: t('step1Title'),
      body: t('step1Body'),
    },
    {
      title: t('step2Title'),
      body: (
        <>
          <p className="mb-2">{t('step2Body')}</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>{t('step2Items.item1')}</li>
            <li>{t('step2Items.item2')}</li>
            <li>{t('step2Items.item3')}</li>
            <li>{t('step2Items.item4')}</li>
            <li>{t('step2Items.item5')}</li>
          </ul>
        </>
      ),
    },
    {
      title: t('step3Title'),
      body: t('step3Body'),
    },
    {
      title: t('step4Title'),
      body: t('step4Body'),
    },
  ];


  return (
    <Section
      title={t('title')}
      className="py-12"
      center
      maxWidthClass="max-w-3xl"
    >
      <div className="space-y-6 text-left">
        {steps.map((s, idx) => (
          <div key={idx}>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {idx + 1}. {s.title}
            </h3>
            <div className="text-gray-700 dark:text-gray-300">
              {s.body}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
