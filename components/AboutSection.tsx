import Section from "@/components/Section";
import { useTranslations } from 'next-intl';

const AboutSection = () => {
  const t = useTranslations('about');

  return (
    <Section title={t('title')} className="pb-0" center maxWidthClass="max-w-3xl">
      <p className="max-w-3xl">
        {t.rich('paragraph1', {
          openai: () => <a href="https://openai.com/codex/" className="underline hover:no-underline" target="_blank" rel="noopener noreferrer">OpenAI Codex</a>,
          amp: () => <a href="https://ampcode.com" className="underline hover:no-underline" target="_blank" rel="noopener noreferrer">Amp</a>,
          jules: () => <a href="https://jules.google" className="underline hover:no-underline" target="_blank" rel="noopener noreferrer">Jules from Google</a>,
          cursor: () => <a href="https://cursor.com" className="underline hover:no-underline" target="_blank" rel="noopener noreferrer">Cursor</a>,
          factory: () => <a href="https://factory.ai" className="underline hover:no-underline" target="_blank" rel="noopener noreferrer">Factory</a>
        })}
      </p>

      <p className="max-w-3xl mt-4">
        {t('paragraph2')}
      </p>


    </Section>
  );
};

export default AboutSection;
