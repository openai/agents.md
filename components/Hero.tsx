import React from "react";
import CodeExample, { HERO_AGENTS_MD } from "@/components/CodeExample";
import GitHubIcon from "@/components/icons/GitHubIcon";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <header className="px-6 py-20 bg-gray-50 dark:bg-gray-900/40 border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto mb-6 flex justify-end">
        <LanguageSwitcher />
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/*
          On large screens we want the primary CTA buttons to align with the
          bottom edge of the code block rendered in the right column. Making
          the left column a full-height flex container and pushing the CTA row
          to the bottom (via `lg:justify-between`) achieves this without
          disturbing the natural flow on small screens where the layout stacks
          vertically.
        */}
        <div className="flex flex-col items-start text-left sm:items-start max-w-prose">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">{t('title')}</h1>

          <p className="mt-2 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            {t.rich('subtitle', {
              br: () => <br className="hidden sm:block" />,
              link: (chunks) => (
                <a
                  href="https://github.com/search?q=path%3AAGENTS.md&type=code"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:no-underline"
                >
                  {t('link20k')}
                </a>
              )
            })}
          </p>

          <p className="mt-3 text-lg leading-relaxed text-gray-700 dark:text-gray-300 pr-4">
            {t.rich('description', {
              strong: (chunks) => <strong>{t('readmeForAgents')}</strong>
            })}
          </p>

        <div className="mt-6 flex gap-4 flex-col sm:flex-row w-full sm:w-auto justify-center sm:justify-start">
          {/* Primary CTA — scroll to the Examples section */}
          <a
            href="#examples"
            className="inline-block px-5 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black text-sm font-medium text-center hover:opacity-80"
          >
            {t('exploreExamples')}
          </a>
          {/* Secondary CTA — view on GitHub */}
          <a
            href="https://github.com/openai/agents.md"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-gray-300 dark:border-gray-600 text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <GitHubIcon className="w-4 h-4 text-current" />
            {t('viewOnGitHub')}
          </a>
        </div>
        </div>
        <div className="w-full md:max-w-none">
          <CodeExample
            compact
            heightClass="min-h-[160px] max-h-[300px]"
            code={HERO_AGENTS_MD}
            href="https://github.com/openai/codex/blob/main/AGENTS.md"
          />
        </div>
      </div>
    </header>
  );
}
