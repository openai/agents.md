# AI Agent Instructions for agents.md

## Project Overview

This is a Next.js marketing website for the AGENTS.md format specification. The site is a single-page application showcasing examples and documentation for the AGENTS.md convention—a README-like file format that helps AI coding agents understand project structure and conventions.

**Architecture:** Classic Next.js Pages Router app with:
- Static Site Generation (SSG) with `getStaticProps` for contributor data fetching
- Component-based UI using TypeScript + Tailwind CSS v4
- OpenAI Sans custom font loaded from CDN
- Vercel Analytics integration

## Development Workflow

### Critical: Always Use Dev Server
**NEVER run `npm run build` or `pnpm build` during development.** Production builds break HMR and leave the `.next` folder in an inconsistent state.

**Always use:** `pnpm dev` (with Turbopack enabled via `--turbopack` flag in package.json)

This project uses **pnpm** as the package manager (see `packageManager` field in package.json).

### Common Commands
```bash
pnpm dev          # Start dev server on http://localhost:3000
pnpm lint         # Run ESLint checks
```

## Code Conventions

### TypeScript Patterns
- **Strict mode enabled** in tsconfig.json
- Use `.tsx` for components, `.ts` for utilities
- Path alias `@/*` maps to workspace root (e.g., `@/components/Hero`)
- Props interfaces defined inline above component exports (see `Hero.tsx`, `Section.tsx`)

### Component Architecture

**Structural Pattern:** All page sections are composed from reusable components in `/components`:
- `Section.tsx` - Base section wrapper with consistent spacing and typography
- Page-specific sections like `Hero.tsx`, `ExamplesSection.tsx` use the `Section` component
- Component props often include layout control flags like `compact`, `center`, `standalone`

**Example from `Section.tsx`:**
```tsx
export type SectionProps = React.PropsWithChildren<{
  center?: boolean;           // Center heading/content
  maxWidthClass?: string;     // Override container width
  // ...
}>;
```

### Styling Guidelines

**Tailwind CSS v4** (using `@tailwindcss/postcss` plugin):
- Use utility classes directly in JSX (no CSS modules or styled-components)
- Dark mode classes with `dark:` prefix (e.g., `dark:bg-gray-900`)
- Responsive design with breakpoints: `sm:`, `md:`, `lg:` prefixes
- Custom OpenAI Sans font is the default (`font-sans` in globals.css)

**Color Palette:** Gray scale for most UI, black/white for CTAs
- Light mode: `bg-gray-50`, `text-gray-700`, `border-gray-100`
- Dark mode: `dark:bg-gray-900`, `dark:text-gray-300`, `dark:border-gray-800`

**Layout Pattern:** Most sections follow max-width container pattern:
```tsx
<section className="px-6 py-12">
  <div className="max-w-6xl mx-auto">
    {/* content */}
  </div>
</section>
```

### Data Fetching

**GitHub API Integration** in `pages/index.tsx`:
- `getStaticProps` fetches contributor data for example repos at build time
- **In-memory caching** (12-hour window) prevents rate limit issues during dev
- Optional `GH_AUTH_TOKEN` env var increases rate limits (60 → 5000 req/hr)
- ISR revalidation set to 24 hours in production

**Sync requirement:** Repo list in `getStaticProps` must match `REPOS` constant in `ExampleListSection.tsx`

### Component Patterns

**Code Examples** (`CodeExample.tsx`):
- Custom lightweight Markdown parser (no external lib)
- Supports inline code with backticks, headers, list items
- Copy-to-clipboard functionality with state transitions

**SVG Icons** (`components/icons/`):
- Loaded as React components via `@svgr/webpack`
- Accept `className` prop for Tailwind styling
- Example: `<GitHubIcon className="w-4 h-4 text-current" />`

**Theme-aware Images** (`CompatibilitySection.tsx`):
- Some logos have light/dark variants using `imageSrcLight`/`imageSrcDark`
- Use Next.js `Image` component for optimization

## File Organization

```
components/          # All UI components (sections, icons)
pages/
  _app.tsx          # Global layout + metadata in <Head>
  _document.tsx     # HTML document wrapper
  index.tsx         # Single landing page with getStaticProps
styles/
  globals.css       # Tailwind import + OpenAI Sans font faces
public/
  logos/            # SVG logos for compatibility section
```

**Component Naming:** PascalCase for files/exports, descriptive names (e.g., `HowToUseSection.tsx`)

## Key Integration Points

- **Vercel Analytics:** Configured in `_app.tsx` with `<Analytics />` component
- **Social Meta Tags:** All OG/Twitter meta tags defined in `_app.tsx` <Head> block
- **External Links:** Most CTAs link to GitHub search, example repos, or docs

## Testing & Quality

- ESLint configured via `next lint` (extends Next.js defaults)
- No test suite present (pure marketing site)
- TypeScript strict mode catches type errors at dev time

## When Adding Features

1. **New section components:** Follow the `Section` wrapper pattern for consistency
2. **New icons:** Add SVGs to `components/icons/` as React components
3. **Styling changes:** Prefer Tailwind utilities; avoid custom CSS
4. **Data fetching:** Keep `getStaticProps` logic, update cache as needed
5. **Dependencies:** After `pnpm install`, restart dev server for HMR to pick up changes
