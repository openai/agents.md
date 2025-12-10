import React from "react";
import CodeExample, { HERO_AGENTS_MD } from "@/components/CodeExample";
import GitHubIcon from "@/components/icons/GitHubIcon";
import ThemeToggle from "@/components/ThemeToggle";

export default function Hero() {
  return (
    <header
      className="relative px-6 py-20 bg-[var(--background)] border-b border-[var(--foreground)]"
    >
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
        <ThemeToggle />
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

        <div className="flex flex-col items-start text-left max-w-prose">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight
            text-[var(--foreground)]">
            AGENTS.md
          </h1>

          <p className="mt-2 text-lg leading-relaxed text-[var(--foreground)]">
            A simple, open format for guiding coding agents,
            <br className="hidden sm:block" />
            used by over{" "}
            <a
              href="https://github.com/search?q=path%3AAGENTS.md+NOT+is%3Afork+NOT+is%3Aarchived&type=code"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-medium text-[var(--foreground)] hover:opacity-70"
            >
              60k open-source projects
            </a>
            .
          </p>

          <p className="mt-3 text-lg leading-relaxed text-[var(--foreground)]">
            Think of AGENTS.md as a{" "}
            <strong className="text-[var(--foreground)]">
              README for agents
            </strong>
            : a dedicated, predictable place to provide the context and
            instructions to help AI coding agents work on your project.
          </p>

          <div className="mt-6 flex gap-4 flex-col sm:flex-row w-full sm:w-auto justify-center sm:justify-start">

            <a
  href="#examples"
  className="
    inline-block px-5 py-3 rounded-full
    bg-[var(--foreground)]
    text-[var(--background)]
    dark:bg-[var(--background)]
    dark:text-[var(--foreground)]
    text-sm font-medium text-center
    border border-[var(--foreground)]
    hover:opacity-90
  "
>
  Explore Examples
</a>


            <a
              href="https://github.com/openai/agents.md"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center justify-center gap-2
                px-5 py-3 rounded-full
                border border-[var(--foreground)]
                text-sm font-medium
                text-[var(--foreground)]
                hover:opacity-90
              "
            >
              <GitHubIcon className="w-4 h-4 text-current" />
              View on GitHub
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
  )
}
