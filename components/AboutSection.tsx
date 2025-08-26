import Section from "@/components/Section";

const AboutSection = () => (
  <Section title="About" className="py-32" center maxWidthClass="max-w-4xl">
    <div className="glass-card p-8 rounded-2xl animate-scale-in">
      <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
        AGENTS.md emerged from collaborative efforts across the AI software
        development ecosystem, including{" "}
        <a href="https://openai.com/codex/" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors duration-200 font-medium" target="_blank" rel="noopener noreferrer">OpenAI Codex</a>,{" "}
        <a href="https://ampcode.com" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors duration-200 font-medium" target="_blank" rel="noopener noreferrer">Amp</a>,{" "}
        <a href="https://jules.google" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors duration-200 font-medium" target="_blank" rel="noopener noreferrer">Jules from Google</a>,{" "}
        <a href="https://cursor.com" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors duration-200 font-medium" target="_blank" rel="noopener noreferrer">Cursor</a>, and{" "}
        <a href="https://factory.ai" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors duration-200 font-medium" target="_blank" rel="noopener noreferrer">Factory</a>.
      </p>

      <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        We&rsquo;re committed to helping maintain and evolve this as an open format that benefits the entire developer community,
        regardless of which coding agent you use.
      </p>
    </div>
  </Section>
);

export default AboutSection;
