import Section from "@/components/Section";
import CodeExample from "@/components/CodeExample";
import Link from "next/link";

interface Agent {
  name: string;
  install: React.ReactNode;
  code: string;
}

const ConfigurationSection = () => {
  const agents: Agent[] = [
    {
      name: "Aider",
      install: (
        <>
          Configure Aider to use AGENTS.md in <code>.aider.conf.yml</code>:
        </>
      ),
      code: "read: AGENTS.md"
    },
    {
      name: "Claude Code",
      install: (
        <>
          Add the following{" "}
          <Link
            className="underline hover:no-underline"
            href="https://docs.anthropic.com/en/docs/claude-code/hooks"
            target="_blank"
          >
            hooks
          </Link>{" "}
          to your Claude Code settings file (<code>.claude/settings.json</code>) to
          automatically sync your AGENTS.md with the CLAUDE.md file used by
          Claude Code:
        </>
      ),
      code: `{
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
}`
    },
   
    {
      name: "Gemini CLI",
      install: (<>Configure Gemini CLI to use AGENTS.md in <code>.gemini/settings.json</code>:</>),
      code: `{
  "contextFileName": "AGENTS.md"
}`
    }
  ];

  return (
    <Section
      id="configuration"
      title="Configuration"
      className="py-20"
      center
      maxWidthClass="max-w-3xl"
    >
      <p className="max-w-3xl">
        If your agent doesn't use AGENTS.md per default, you can still configure your agent to use it.
        Here's how to use AGENTS.md with different agents:
      </p>
      {agents.map((agent) => (
        <div key={agent.name} className="mt-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {agent.name}
          </h3>
          <div className="text-gray-600 dark:text-gray-400 leading-relaxed">
            <p className="mb-2">
              {agent.install}
            </p>
            <div className="w-full flex justify-center">
              <CodeExample
                code={agent.code}
                compact
                heightClass="min-h-[48px]"
                centerVertically
              />
            </div>
          </div>
        </div>
      ))}
    </Section>
  );
};

export default ConfigurationSection;
