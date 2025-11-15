import Section from "@/components/Section";
import React from "react";
import ClipboardIcon from "@/components/icons/ClipboardIcon";
import UserIcon from "@/components/icons/UserIcon";
import LinkIcon from "@/components/icons/LinkIcon";
import { useTranslations } from 'next-intl';

export default function WhySection() {
  const t = useTranslations('why');

  return (
    <Section
      id="why"
      title={t('title')}
      className="pt-24 pb-12"
      center
      maxWidthClass="max-w-3xl"
    >
      <div className="space-y-4">
        <p className="mb-4">
          {t('paragraph1')}
        </p>
        <p className="mb-4">
          {t('paragraph2')}
        </p>
        <p className="mb-4">{t('paragraph3')}</p>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <ClipboardIcon />
            <p>
              <span className="font-semibold block">
                {t('reason1Title')}
              </span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <UserIcon />
            <p>
              <span className="font-semibold block">
                {t('reason2Title')}
              </span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <LinkIcon />
            <p>
              <span className="font-semibold block">
                {t('reason3Title')}
              </span>
            </p>
          </div>
        </div>
        <p>
          {t('paragraph4')}
        </p>
      </div>
    </Section>
  );
}
