# AGENTS.md

<p align="center">
  <img src="https://agents.md/og.png">
</p>

[AGENTS.md](https://agents.md) ಎಂದರೆ ಕೋಡಿಂಗ್ ಏಜೆಂಟ್‌ಗಳಿಗೆ ಮಾರ್ಗದರ್ಶನ ನೀಡಲು ಸುಲಭವಾದ, ಓಪನ್ ಫಾರ್ಮ್ಯಾಟ್.

AGENTS.md ಅನ್ನು ಏಜೆಂಟ್‌ಗಳಿಗಾಗಿ README ಎಂದು ಪರಿಗಣಿಸಿ: ಒಂದು ನಿರ್ದಿಷ್ಟ, ನಿರೀಕ್ಷಿತ ಸ್ಥಳ
ಇಲ್ಲಿ ನೀವು ನಿಮ್ಮ ಪ್ರಾಜೆಕ್ಟ್‌ಗಾಗಿ AI ಕೋಡಿಂಗ್ ಏಜೆಂಟ್‌ಗಳಿಗೆ ಸಹಾಯ ನೀಡುವ ಸೂಚನೆಗಳು ಮತ್ತು ಮಾಹಿತಿ ನೀಡಬಹುದು.

ಕೆಳಗೆ AGENTS.md ಫೈಲ್‌ನ ಸಣ್ಣ ಉದಾಹರಣೆ ನೀಡಲಾಗಿದೆ:

```markdown
# Sample AGENTS.md file

## Dev environment ಸಲಹೆಗಳು
- ಒಂದು ಪ್ಯಾಕೇಜ್‌ಗೆ ಹೋಗಲು `pnpm dlx turbo run where <project_name>` ಬಳಸಿ.
- Vite, ESLint ಮತ್ತು TypeScript ನೋಡಲು `pnpm install --filter <project_name>` ಓಡಿಸಿ.
- ಹೊಸ React + Vite ಪ್ಯಾಕೇಜ್ ಸೃಷ್ಟಿಸಲು: `pnpm create vite@latest <project_name> -- --template react-ts`
- ಪ್ರತಿ package.json ನಲ್ಲಿ name ಫೀಲ್ಡ್ ಪರಿಶೀಲಿಸಿ—top-level ಕಡೆಗೆ ನೋಡಬೇಡಿ.

## ಟೆಸ್ಟಿಂಗ್ ಸೂಚನೆಗಳು
- CI ಪ್ಲ್ಯಾನ್ ಅನ್ನು .github/workflows ಫೋಲ್ಡರ್‌ನಲ್ಲಿ ನೋಡಿ.
- `pnpm turbo run test --filter <project_name>` ಓಡಿಸಿ.
- ಪ್ಯಾಕೇಜ್ ರೂಟ್‌ನಿಂದ ಕೇವಲ `pnpm test` ಓಡಿಸಬಹುದು.
- ಒಂದು ಟೆಸ್ಟ್‌ನಲ್ಲಿ ಗಮನಹರಿಸಲು: `pnpm vitest run -t "<test name>"`
- ಟೆಸ್ಟ್ ಅಥವಾ ಟೈಪ್ ದೋಷಗಳನ್ನು ಸರಿಪಡಿಸಿ.
- ಫೈಲ್‌ಗಳನ್ನು ಸ್ಥಳಾಂತರಿಸಿದ ನಂತರ ಅಥವಾ ಇಂಪೋರ್ಟ್‌ಗಳನ್ನು ಬದಲಿಸಿದ ನಂತರ: `pnpm lint --filter <project_name>` ಓಡಿಸಿ.
- ನಿಮ್ಮ ಬದಲಾವಣೆಗಳಿಗೆ ಟೆಸ್ಟ್‌ಗಳನ್ನು ಸೇರಿಸಿ ಅಥವಾ ಅಪ್ಡೇಟ್ ಮಾಡಿ.

## PR ಸೂಚನೆಗಳು
- ಶೀರ್ಷಿಕೆ ಫಾರ್ಮ್ಯಾಟ್: [<project_name>] <Title>
- commit ಮಾಡುವ ಮೊದಲು ಎల్లೊಮ್ಮೆ `pnpm lint` ಮತ್ತು `pnpm test` ಓಡಿಸಿ.