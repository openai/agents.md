import React from "react";

// GitHub language colors for badge backgrounds
const LANG_BG_COLORS: Record<string, string> = {
  "TypeScript": "#3178c6",
  "Java": "#b07219",
  "Python": "#3572a5",
  "Rust": "#dea584",
  "C++": "#f34b7d",
};

interface RepoCardProps {
  /** e.g. "openai/codex" */
  name: string;
  /** Short 1-2 line summary */
  description: string;
  /** Primary language */
  language: string;
}

/** Hard-coded examples used for the marketing page. */
const REPOS: RepoCardProps[] = [
  {
    name: "openai/codex",
    description: "General-purpose CLI tooling for AI coding agents.",
    language: "Rust",
  },
  {
    name: "apache/airflow",
    description:
      "Platform to programmatically author, schedule, and monitor workflows.",
    language: "Python",
  },
  {
    name: "temporalio/sdk-java",
    description:
      "Java SDK for Temporal, workflow orchestration defined in code.",
    language: "Java",
  },
  {
    name: "PlutoLang/Pluto",
    description: "A superset of Lua 5.4 with a focus on general-purpose programming.",
    language: "C++",
  },
];

interface ExampleListSectionProps {
  contributorsByRepo?: Record<string, { avatars: string[]; total: number }>;
  standalone?: boolean; // if false wraps with its own section
}

const InnerGrid = ({
  contributorsByRepo = {},
}: {
  contributorsByRepo: Record<string, { avatars: string[]; total: number }>;
}) => (
  <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {REPOS.map((repo, key) => (
        <ExampleCard
          key={repo.name}
          repo={repo}
          avatars={contributorsByRepo[repo.name]?.avatars ?? []}
          hideOnSmall={key > 3}
          hideOnMedium={key > 2}
          totalContributors={
            contributorsByRepo[repo.name]?.total ??
            contributorsByRepo[repo.name]?.avatars.length ??
            0
          }
        />
      ))}
    </div>
    <div className="flex justify-center mt-6">
      <a
        href="https://github.com/search?q=path%3AAGENTS.md&type=code"
        className="btn-secondary inline-flex items-center gap-2 text-base font-medium transition-all duration-300 hover:scale-105"
      >
        <span>View 20k+ examples on GitHub</span>
        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </div>
  </>
);

const ExampleListSection = ({
  contributorsByRepo = {},
  standalone = false,
}: ExampleListSectionProps) => {
  if (standalone) {
    return (
      <div className="max-w-6xl mx-auto">
        <InnerGrid contributorsByRepo={contributorsByRepo} />
      </div>
    );
  }

  return (
    <section className="px-6 pb-12 -mt-36">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Who uses AGENTS.md?</h2>
        <InnerGrid contributorsByRepo={contributorsByRepo} />
      </div>
    </section>
  );
};

interface ExampleCardPropsExtended {
  repo: RepoCardProps;
  avatars?: string[];
  totalContributors?: number;
  hideOnSmall?: boolean;
  hideOnMedium?: boolean;
}

function ExampleCard({
  repo,
  avatars = [],
  totalContributors = 0,
  hideOnSmall = false,
  hideOnMedium = false,
}: ExampleCardPropsExtended) {
  // Show top 3 contributors; ensure highest-ranked appears rightmost.
  const orderedAvatars = avatars.slice(0, 3).reverse();
  // Badge background color based on GitHub language colors
  const badgeBg = LANG_BG_COLORS[repo.language] ?? "#6b7280";

  return (
    <a
      href={`https://github.com/${repo.name}/blob/main/AGENTS.md`}
      target="_blank"
      rel="noopener noreferrer"
      className={`lg:aspect-video glass-card hover:glass-card-hover rounded-2xl flex flex-col justify-between p-5 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 group shadow-apple hover-lift hover-glow animate-scale-in ${
        hideOnSmall
          ? "hidden lg:flex"
          : hideOnMedium
          ? "flex md:hidden lg:flex"
          : ""
      }`}
    >
      <div>
        <h3
          className="font-semibold text-lg leading-snug truncate group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors duration-300"
          title={repo.name}
        >
          {repo.name}
        </h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
          {repo.description}
        </p>
      </div>

      <div className="flex items-end justify-between mt-4">
        <span
          className="text-xs font-semibold px-3 py-1 rounded-full transition-all duration-300 group-hover:scale-105"
          style={{ backgroundColor: badgeBg, color: "#fff" }}
        >
          {repo.language}
        </span>
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center -space-x-2">
            {orderedAvatars.length > 0
              ? orderedAvatars.map((url, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={i}
                    src={url}
                    alt="Contributor avatar"
                    className="w-6 h-6 rounded-full ring-2 ring-white dark:ring-gray-900 object-cover block shrink-0"
                  />
                ))
              : Array.from({ length: 3 }).map((_, i) => (
                  <span
                    key={i}
                    aria-hidden
                    className="w-6 h-6 rounded-full bg-gray-300 dark:bg-gray-700 ring-2 ring-white dark:ring-gray-900 block shrink-0"
                  />
                ))}
          </div>
          <span className="ml-2 text-xs font-semibold px-3 py-1 rounded-full bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 translate-y-[1px] transition-all duration-300 group-hover:bg-accent-200 dark:group-hover:bg-accent-800/40">
            + {totalContributors}
          </span>
        </div>
      </div>
    </a>
  );
}

export default ExampleListSection;
