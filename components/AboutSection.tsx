import Section from "@/components/Section";

const AboutSection = () => (
  <Section
    title="About"
    className="pb-0"
    center
    maxWidthClass="max-w-3xl"
  >
    <p className="max-w-3xl text-foreground/90">
      AGENTS.md emerged from collaborative efforts across the AI software
      development ecosystem, including{" "}
      <a
        href="https://openai.com/codex/"
        className="underline decoration-foreground/50 hover:decoration-foreground"
        target="_blank"
        rel="noopener noreferrer"
      >
        OpenAI Codex
      </a>
      ,{" "}
      <a
        href="https://ampcode.com"
        className="underline decoration-foreground/50 hover:decoration-foreground"
        target="_blank"
        rel="noopener noreferrer"
      >
        Amp
      </a>
      ,{" "}
      <a
        href="https://jules.google"
        className="underline decoration-foreground/50 hover:decoration-foreground"
        target="_blank"
        rel="noopener noreferrer"
      >
        Jules from Google
      </a>
      ,{" "}
      <a
        href="https://cursor.com"
        className="underline decoration-foreground/50 hover:decoration-foreground"
        target="_blank"
        rel="noopener noreferrer"
      >
        Cursor
      </a>
      , and{" "}
      <a
        href="https://factory.ai"
        className="underline decoration-foreground/50 hover:decoration-foreground"
        target="_blank"
        rel="noopener noreferrer"
      >
        Factory
      </a>.
    </p>

    <p className="max-w-3xl mt-4 text-foreground/90">
      We&rsquo;re committed to helping maintain and evolve this as an open format that
      benefits the entire developer community,
      regardless of which coding agent you use.
    </p>
  </Section>
);

export default AboutSection;
