import React from "react";
import CodeExample, { HERO_AGENTS_MD } from "@/components/CodeExample";
import GitHubIcon from "@/components/icons/GitHubIcon";

export default function Hero() {
  return (
    <header className="relative px-6 py-24 md:py-32 overflow-hidden">
      {/* Apple-inspired gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-black dark:to-blue-900/20"></div>
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]" style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23000000' fill-opacity='1'%3e%3ccircle cx='7' cy='7' r='1'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`
      }}></div>
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/*
          On large screens we want the primary CTA buttons to align with the
          bottom edge of the code block rendered in the right column. Making
          the left column a full-height flex container and pushing the CTA row
          to the bottom (via `lg:justify-between`) achieves this without
          disturbing the natural flow on small screens where the layout stacks
          vertically.
        */}
        <div className="flex flex-col items-start text-left sm:items-start max-w-prose animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30 mb-6">
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Open Source Format</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent leading-none mb-6 relative">
            AGENTS.md
          </h1>

          <p className="text-xl md:text-2xl leading-relaxed text-gray-600 dark:text-gray-300 font-light mb-4">
            A simple, open format for guiding coding agents,{" "}
            <br className="hidden sm:block" />
            used by over{" "}
            <a
              href="https://github.com/search?q=path%3AAGENTS.md&type=code"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 font-medium"
            >
              20k open-source projects
            </a>
            .
          </p>

          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400 mb-8 pr-4">
            Think of AGENTS.md as a <strong className="text-gray-900 dark:text-white font-semibold">README for agents</strong>: a dedicated,
            predictable place to provide the context and instructions to help AI coding agents work on your project.
          </p>

          <div className="flex gap-4 flex-col sm:flex-row w-full sm:w-auto">
            {/* Primary CTA — scroll to the Examples section */}
            <a
              href="#examples"
              className="btn-primary px-8 py-4 text-base font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200"
            >
              Explore Examples
            </a>
            {/* Secondary CTA — view on GitHub */}
            <a
              href="https://github.com/openai/agents.md"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-8 py-4 text-base font-medium inline-flex items-center gap-3 backdrop-blur-sm"
            >
              <GitHubIcon className="w-5 h-5 text-current" />
              View on GitHub
            </a>
          </div>
        </div>
        
        <div className="w-full md:max-w-none animate-slide-up">
          <div className="glass-card p-0 overflow-hidden shadow-2xl">
            <CodeExample
              compact
              heightClass="min-h-[200px] max-h-[400px]"
              code={HERO_AGENTS_MD}
              href="https://github.com/openai/codex/blob/main/AGENTS.md"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
