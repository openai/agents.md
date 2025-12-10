# AGENTS.md

<p align="center">
  <img src="https://agents.md/og.png">
</p>

[AGENTS.md](https://agents.md) കോഡിംഗ് ഏജന്റുകൾക്ക് മാർഗ്ഗനിർദ്ദേശം നൽകുന്ന ഒരു ലളിതമായ, ഓപ്പൺ ഫോർമാറ്റ് ആണ്.

AGENTS.md-നെ ഏജന്റുകൾക്കുള്ള README എന്ന് കരുതുക: ഒരു പ്രത്യേക, മുൻകൂട്ടി പ്രവചിക്കാവുന്ന സ്ഥലം
ഇവിടെ നിങ്ങൾ നിങ്ങളുടെ പ്രോജക്റ്റിനായി AI കോഡിംഗ് ഏജന്റുകൾക്ക് സഹായത്തിനുള്ള നിർദ്ദേശങ്ങളും വിവരങ്ങളും നൽകാം.

താഴെ AGENTS.md ഫയലിന്റെ ഒരു ലളിതമായ ഉദാഹരണം:

```markdown
# Sample AGENTS.md file

## Dev environment സൂചനകൾ
- ഒരു പാക്കേജിലേക്ക് പോകാൻ `pnpm dlx turbo run where <project_name>` ഉപയോഗിക്കുക.
- Vite, ESLint, TypeScript കാണാൻ `pnpm install --filter <project_name>` ഓടിക്കുക.
- പുതിയ React + Vite പാക്കേജ് സൃഷ്ടിക്കാൻ: `pnpm create vite@latest <project_name> -- --template react-ts`
- ഓരോ package.json ലും name ഫീൽഡ് പരിശോധിക്കുക—top-level ഒഴിവാക്കുക.

## ടെസ്റ്റിംഗ് നിർദ്ദേശങ്ങൾ
- CI പ്ലാൻ .github/workflows ഫോൾഡറിൽ കാണുക.
- `pnpm turbo run test --filter <project_name>` ഓടിക്കുക.
- പാക്കേജ് റൂട്ട് നിന്ന് `pnpm test` മാത്രം ഓടിക്കാം.
- ഒരു ടെസ്റ്റിൽ ശ്രദ്ധ കേന്ദ്രീകരിക്കാൻ: `pnpm vitest run -t "<test name>"`
- ടെസ്റ്റ് അല്ലെങ്കിൽ ടൈപ്പ് പിഴവുകൾ ശരിയാക്കുക.
- ഫയലുകൾ മാറ്റിയ ശേഷം അല്ലെങ്കിൽ ഇമ്പോർട്ടുകൾ മാറ്റിയ ശേഷം: `pnpm lint --filter <project_name>` ഓടിക്കുക.
- നിങ്ങളുടെ മാറ്റങ്ങൾക്ക് ടെസ്റ്റുകൾ ചേർക്കുക അല്ലെങ്കിൽ അപ്ഡേറ്റ് ചെയ്യുക.

## PR നിർദ്ദേശങ്ങൾ
- തലക്കെട്ട് ഫോർമാറ്റ്: [<project_name>] <Title>
- commit ചെയ്യുന്നതിനുമുമ്പ് എപ്പോഴും `pnpm lint` & `pnpm test` ഓടിക്കുക.