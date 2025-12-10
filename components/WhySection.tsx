import Section from "@/components/Section";
import React from "react";
import ClipboardIcon from "@/components/icons/ClipboardIcon";
import UserIcon from "@/components/icons/UserIcon";
import LinkIcon from "@/components/icons/LinkIcon";

export default function WhySection() {
  return (
    <Section
      id="why"
      title="Why AGENTS.md?"
      className="pt-24 pb-12"
      center
      maxWidthClass="max-w-3xl"
    >
      <div className="space-y-6 text-[var(--foreground)]">

        <p>
          README.md files are for humans: quick starts, project descriptions,
          and contribution guidelines.
        </p>

        <p>
          AGENTS.md complements this by containing the extra, sometimes detailed
          context coding agents need: build steps, tests, and conventions that
          might clutter a README or aren't relevant to human contributors.
        </p>

        <p>We intentionally kept it separate to:</p>

        <div className="space-y-5">

          <div className="flex items-start gap-3">
            <ClipboardIcon className="w-6 h-6 text-[var(--foreground)] opacity-70" />
            <p className="font-medium">
              Give agents a clear, predictable place for instructions.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <UserIcon className="w-6 h-6 text-[var(--foreground)] opacity-70" />
            <p className="font-medium">
              Keep READMEs concise and focused on human contributors.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <LinkIcon className="w-6 h-6 text-[var(--foreground)] opacity-70" />
            <p className="font-medium">
              Provide precise, agent-focused guidance that complements
              existing README and docs.
            </p>
          </div>

        </div>

        <p>
          Rather than introducing another proprietary file, we chose a name and
          format that could work for anyone. If you're building or using
          coding agents and find this helpful, feel free to adopt it.
        </p>

      </div>
    </Section>
  );
}
