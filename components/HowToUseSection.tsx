import Section from "@/components/Section";
import React from "react";

export default function HowToUseSection() {
  const steps = [
    {
      title: "Add AGENTS.md",
      body: (
        <>
          Create an AGENTS.md file at the root of the repository. Most
          coding agents can even scaffold one for you if you ask nicely.
        </>
      ),
    },
    {
      title: "Cover what matters",
      body: (
        <>
          <p className="mb-2">Add sections that help an agent work effectively with your project. Popular choices:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Project overview</li>
            <li>Build and test commands</li>
            <li>Code style guidelines</li>
            <li>Testing instructions</li>
            <li>Security considerations</li>
          </ul>
        </>
      ),
    },
    {
      title: "Add extra instructions",
      body: "Commit messages or pull request guidelines, security gotchas, large datasets, deployment steps: anything you’d tell a new teammate belongs here too.",
    },
    {
      title: "Large monorepo? Use nested AGENTS.md files for subprojects",
      body: (
        <>
          Place another AGENTS.md inside each package. Agents automatically read the nearest file in the directory tree, so the closest one takes precedence and every subproject can ship tailored instructions. For example, at time of writing the main OpenAI repo has 88 AGENTS.md files.
        </>
      ),
    },
  ];


  return (
    <Section
      title="How to use AGENTS.md?"
      className="py-32"
      center
      maxWidthClass="max-w-5xl"
    >
      <div className="grid gap-8 md:gap-6">
        {steps.map((s, idx) => (
          <div key={idx} className="glass-card p-8 rounded-2xl hover-lift group transition-all duration-300 animate-scale-in" style={{animationDelay: `${idx * 0.1}s`}}>
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                {idx + 1}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                  {s.title}
                </h3>
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {s.body}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
