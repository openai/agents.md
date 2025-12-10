# AGENTS.md

<p align="center">
  <img src="https://agents.md/og.png">
</p>

[AGENTS.md](https://agents.md) என்பது குறியீட்டு ஏஜென்ட்களுக்கு வழிகாட்ட ஒரு எளிய, திறந்த வடிவம்.

AGENTS.md ஐ ஏஜென்ட்களுக்கான README போலக் கருதுங்கள்: ஒரு குறிப்பிட்ட, முன்னறிந்த இடம்
இங்கு நீங்கள் உங்கள் திட்டத்திற்கு AI குறியீட்டு ஏஜென்ட்களுக்கு உதவ வழிகாட்டி மற்றும் தகவல்களை வழங்கலாம்.

கீழே AGENTS.md கோப்பின் ஒரு எளிய எடுத்துக்காட்டு கொடுக்கப்பட்டுள்ளது:

```markdown
# Sample AGENTS.md file

## Dev environment குறிப்பு
- ஒரு பாக்கேஜ் செல்வதற்கு `pnpm dlx turbo run where <project_name>` பயன்படுத்தவும்.
- Vite, ESLint மற்றும் TypeScript பார்க்க `pnpm install --filter <project_name>` ஓட்டவும்.
- புதிய React + Vite பாக்கேஜ் உருவாக்க: `pnpm create vite@latest <project_name> -- --template react-ts`
- ஒவ்வொரு package.json இலும் name புலத்தை சரிபார்க்கவும்—மேல்தரத்தை தவிர்க்கவும்.

## சோதனை வழிமுறைகள்
- CI திட்டத்தை .github/workflows கோப்பகத்தில் பார்வையிடவும்.
- `pnpm turbo run test --filter <project_name>` ஓட்டவும்.
- package root இல் இருந்து `pnpm test` மட்டும் ஓட்டலாம்.
- ஒரே ஒரு டெஸ்ட் மீது கவனம் செலுத்த: `pnpm vitest run -t "<test name>"`
- டெஸ்ட் அல்லது டைப் பிழைகளை சரி செய்யவும்.
- கோப்புகளை மாற்றிய பிறகு அல்லது இறக்குமதிகளை மாற்றிய பிறகு: `pnpm lint --filter <project_name>` ஓட்டவும்.
- உங்கள் மாற்றங்களுக்கு டெஸ்ட்களை சேர்க்கவும் அல்லது புதுப்பிக்கவும்.

## PR வழிமுறைகள்
- தலைப்பு வடிவம்: [<project_name>] <Title>
- commit செய்யும் முன் எப்போதும் `pnpm lint` மற்றும் `pnpm test` ஓட்டவும்.
