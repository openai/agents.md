import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Section from "@/components/Section";

type AgentEntry = {
  name: string;
  url: string;
  from?: string;
  imageSrc?: string;
  imageSrcLight?: string;
  imageSrcDark?: string;
};

const agents: AgentEntry[] = [ /* ...same as before... */ ];

const shuffleAgents = (items: AgentEntry[]) => {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

type LogoItemProps = AgentEntry & {
  variant?: "marquee" | "grid";
};

function LogoItem({
  name,
  url,
  from,
  imageSrc,
  imageSrcLight,
  imageSrcDark,
  variant = "marquee",
}: LogoItemProps) {
  const baseClasses =
    variant === "grid"
      ? "flex h-full w-full min-w-0 items-center gap-4"
      : "flex h-20 min-w-[280px] items-center gap-4 pr-10";

  const maskColorLight = "var(--foreground)"; // dark in light mode
  const maskColorDark = "var(--foreground)"; // light in dark mode (CSS var changes automatically)

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={baseClasses}>
      <div className="flex h-16 w-16 items-center justify-center">
        {imageSrcLight && imageSrcDark ? (
          <>
            <Image
              src={imageSrcLight}
              alt={`${name} logo`}
              width={64}
              height={64}
              className="block h-16 w-16 dark:hidden"
            />
            <Image
              src={imageSrcDark}
              alt={`${name} logo`}
              width={64}
              height={64}
              className="hidden h-16 w-16 dark:block"
            />
          </>
        ) : imageSrc ? (
          <span
            aria-hidden
            className="block h-16 w-16"
            style={{
              WebkitMaskImage: `url(${imageSrc})`,
              maskImage: `url(${imageSrc})`,
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskPosition: "center",
              maskPosition: "center",
              backgroundColor: maskColorLight,
            }}
          >
            <span className="hidden dark:block" style={{ backgroundColor: maskColorDark }} />
          </span>
        ) : null}
      </div>
      <div className="flex flex-col justify-center text-left">
        <span className="text-xl font-semibold leading-tight" style={{ color: "var(--foreground)" }}>
          {name}
        </span>
        {from && (
          <span className="text-sm" style={{ color: "var(--foreground)" }}>
            <span className="font-light">from</span>{" "}
            <span className="font-semibold">{from}</span>
          </span>
        )}
      </div>
    </a>
  );
}

function LogoMarqueeRow({ agents, isActive, duration, offset }: { agents: AgentEntry[]; isActive: boolean; duration: number; offset?: number; }) {
  const doubledAgents = useMemo(() => [...agents, ...agents], [agents]);
  if (!doubledAgents.length) return null;

  const trackStyle = {
    animationPlayState: isActive ? "running" : "paused",
    animationDelay: offset ? `${offset}s` : undefined,
    "--marquee-duration": `${duration}s`,
  } as React.CSSProperties;

  return (
    <div className="w-full overflow-hidden">
      <div className="logo-marquee-track flex items-center gap-8 py-3" style={trackStyle}>
        {doubledAgents.map((agent, idx) => (
          <LogoItem key={`${agent.name}-${idx}`} {...agent} />
        ))}
      </div>
    </div>
  );
}

export default function CompatibilitySection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [shuffledAgents, setShuffledAgents] = useState<AgentEntry[]>(agents);
  const [showGrid, setShowGrid] = useState(false);

  useEffect(() => setShuffledAgents(shuffleAgents(agents)), []);

  useEffect(() => {
    if (showGrid) { setIsInView(false); return; }
    const node = containerRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => setIsInView(entry.isIntersecting), { threshold: 0 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [showGrid]);

  const [topRow, bottomRow] = useMemo(() => {
    const first: AgentEntry[] = [], second: AgentEntry[] = [];
    shuffledAgents.forEach((agent, i) => (i % 2 === 0 ? first : second).push(agent));
    return [first, second];
  }, [shuffledAgents]);

  return (
    <Section
      id="compatibility"
      title="One AGENTS.md works across many agents"
      className={`py-12 px-0 ${showGrid ? "" : "!px-0"}`}
      center
      maxWidthClass={showGrid ? "max-w-3xl" : "max-w-none"}
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xl px-8" style={{ color: "var(--foreground)" }}>
          Your agent definitions are compatible with a growing ecosystem of AI coding agents and tools:
        </p>
      </div>

      {showGrid ? (
        <div className="mt-6 grid w-full grid-cols-2 gap-8 md:grid-cols-3">
          {agents.map(a => <LogoItem key={a.name} {...a} variant="grid" />)}
        </div>
      ) : (
        <div ref={containerRef} className="mt-6 flex w-full flex-col gap-6">
          <LogoMarqueeRow agents={topRow} isActive={isInView} duration={70} />
          <LogoMarqueeRow agents={bottomRow} isActive={isInView} duration={80} offset={-35} />
        </div>
      )}

      <div className="mt-4 text-center">
        <button
          onClick={() => setShowGrid(prev => !prev)}
          className="mt-4 text-base font-medium underline hover:no-underline cursor-pointer"
          style={{ color: "var(--foreground)" }}
        >
          {showGrid ? "Collapse supported agents" : "View all supported agents"}
        </button>
      </div>
    </Section>
  );
}
