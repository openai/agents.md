# AGENTS.md

<p align="center">
  <img src="https://agents.md/og.png">
</p>

[AGENTS.md](https://agents.md) అనేది కోడింగ్ ఏజెంట్లకు మార్గనిర్దేశనం అందించే సులభమైన, ఓపెన్ ఫార్మాట్.

AGENTS.md ను ఏజెంట్ల కోసం README అని పరిగణించండి: ఒక ప్రత్యేక, ఊహించదగిన స్థలం
ఇక్కడ మీరు ప్రాజెక్ట్ కోసం AI కోడింగ్ ఏజెంట్లకు సహాయ సూచనలు మరియు సమాచారం ఇవ్వవచ్చు.

క్రింద AGENTS.md ఫైల్ యొక్క ఒక చిన్న ఉదాహరణ ఉంది:

```markdown
# Sample AGENTS.md file

## Dev environment సూచనలు
- ఒక ప్యాకేజీకి వెళ్ళ `pnpm dlx turbo run where <project_name>` ఉపయోగించండి.
- Vite, ESLint, TypeScript చూడటానికి `pnpm install --filter <project_name>` రన్ చేయండి.
- కొత్త React + Vite ప్యాకేజీ సృష్టించడానికి: `pnpm create vite@latest <project_name> -- --template react-ts`
- ప్రతి package.json లో name ఫీల్డ్ తనిఖీ చేయండి—top-level వదిలేయండి.

## టెస్టింగ్ సూచనలు
- CI ప్లాన్ ను .github/workflows ఫోల్డర్ లో చూడండి.
- `pnpm turbo run test --filter <project_name>` రన్ చేయండి.
- ప్యాకేజీ రూట్ నుండి కేవలం `pnpm test` రన్ చేయవచ్చు.
- ఒకే టెస్ట్ మీద ఫోకస్ కావాలంటే: `pnpm vitest run -t "<test name>"`
- టెస్ట్ లేదా టైప్ లోపాలను సరిచేయండి.
- ఫైల్స్ మార్చిన తర్వాత లేదా imports మార్చిన తర్వాత: `pnpm lint --filter <project_name>` రన్ చేయండి.
- మీ మార్పులకు టెస్టులను జోడించండి లేదా అప్‌డేట్ చేయండి.

## PR సూచనలు
- టైటిల్ ఫార్మాట్: [<project_name>] <Title>
- commit చేయడానికి ముందు ఎల్లప్పుడూ `pnpm lint` మరియు `pnpm test` రన్ చేయండి.