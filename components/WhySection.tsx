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
      className="py-32"
      center
      maxWidthClass="max-w-4xl"
    >
      <div className="space-y-12">
        <div className="space-y-8 text-lg leading-relaxed">
          <p className="text-gray-700 dark:text-gray-300">
            README.md files are for humans: quick starts, project descriptions,
            and contribution guidelines.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            AGENTS.md complements this by containing the extra, sometimes detailed
            context coding agents need: build steps, tests, and conventions that
            might clutter a README or aren&rsquo;t relevant to human contributors.
          </p>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-8">
            We intentionally kept it separate to:
          </h3>
          <div className="grid gap-8 md:gap-6">
            <div className="glass-card p-6 rounded-2xl hover-lift group transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <ClipboardIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Give agents a clear, predictable place for instructions.
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    A standardized location that AI tools can reliably find and parse.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl hover-lift group transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <UserIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Keep READMEs concise and focused on human contributors.
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    Maintain clean, readable documentation for developers.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl hover-lift group transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <LinkIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Provide precise, agent-focused guidance.
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    Complement existing documentation with technical specifics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="glass-card p-8 rounded-2xl bg-gradient-to-r from-gray-50/50 to-white/50 dark:from-gray-800/50 dark:to-gray-900/50 border border-gray-200/50 dark:border-gray-700/50">
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-center">
            Rather than introducing another proprietary file, we chose a name and
            format that could work for anyone. If you&rsquo;re building or using
            coding agents and find this helpful, feel free to adopt it.
          </p>
        </div>
      </div>
    </Section>
  );
}
