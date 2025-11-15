import React from "react";
import Section from "@/components/Section";
import CodeExample from "@/components/CodeExample";
import ExampleListSection from "@/components/ExampleListSection";
import { useTranslations } from 'next-intl';

interface ExamplesSectionProps {
  contributorsByRepo: Record<string, { avatars: string[]; total: number }>;
}

export default function ExamplesSection({ contributorsByRepo }: ExamplesSectionProps) {
  const t = useTranslations('examples');

  return (
    <Section id="examples" title={t('title')} className="py-12" center>
      {/* Wide code example */}
      <div className="mb-4">
        <CodeExample compact />
      </div>

      {/* Repo cards */}
      <ExampleListSection contributorsByRepo={contributorsByRepo} standalone />
    </Section>
  );
}
