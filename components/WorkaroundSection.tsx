import Section from "@/components/Section";
import CodeExample from "@/components/CodeExample";
import Link from "next/link";

const WorkaroundSection = () => (
  <Section
    id="workaround"
    title="Workaround"
    className="py-20"
    center
    maxWidthClass="max-w-3xl"
  >
      <p className="max-w-3xl">
        If your agent doesn't support AGENTS.md natively, you can still configure a workaround to use it.
        Here's how to use AGENTS.md with different agents:
      </p>
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Claude Code
        </h3>
        <div className="text-gray-600 dark:text-gray-400 leading-relaxed">
          <p className="mb-2">
            Add the following{" "}
            <Link
              className="underline hover:no-underline"
              href="https://docs.anthropic.com/en/docs/claude-code/hooks"
              target="_blank"
            >
              hooks
            </Link>{" "}
            to your Claude Code settings file (.claude/settings.json) to
            automatically sync your AGENTS.md with the CLAUDE.md file used by
            Claude Code:
          </p>
          <div className="w-full flex justify-center">
            <CodeExample
              compact
              heightClass="min-h-[48px]"
              centerVertically
              code={`{
  "hooks": {
    "UserPromptSubmit": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "cp AGENTS.md CLAUDE.md 2>/dev/null || true"
          }
        ]
      }
    ],
    "Stop": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "cp CLAUDE.md AGENTS.md 2>/dev/null || true"
          }
        ]
      }
    ]
  }
}`}
            />
          </div>
        </div>
      </div>
  </Section>
);

export default WorkaroundSection;
