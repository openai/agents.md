# AGENTS.md

<p align="center">
  <img src="https://agents.md/og.png">
</p>

[AGENTS.md](https://agents.md) ਇੱਕ ਸਧਾਰਣ, ਓਪਨ ਫਾਰਮੈਟ ਹੈ ਜੋ ਕੋਡਿੰਗ ਏਜੈਂਟਸ ਨੂੰ ਮਾਰਗਦਰਸ਼ਨ ਦੇਣ ਲਈ ਹੈ।

AGENTS.md ਨੂੰ ਏਜੈਂਟਸ ਲਈ README ਵਾਂਗ ਸੋਚੋ: ਇੱਕ ਨਿਰਧਾਰਤ, ਪੂਰਨ ਤੌਰ ਤੇ ਪੇਸ਼ਗੀ ਜਾਣਿਆ ਹੋਇਆ ਸਥਾਨ
ਜਿੱਥੇ ਤੁਸੀਂ ਆਪਣੇ ਪ੍ਰੋਜੈਕਟ ਲਈ AI ਕੋਡਿੰਗ ਏਜੈਂਟਸ ਨੂੰ ਸਹਾਇਤਾ ਦੇਣ ਲਈ ਸੰਦਰਭ ਅਤੇ ਹਦਾਇਤਾਂ ਦੇ ਸਕਦੇ ਹੋ।

ਹੇਠਾਂ AGENTS.md ਫਾਇਲ ਦਾ ਇੱਕ ਲਘੁ ਉਦਾਹਰਨ ਦਿੱਤਾ ਗਿਆ ਹੈ:

```markdown
# Sample AGENTS.md file

## Dev environment ਸੁਝਾਅ
- ਕਿਸੇ ਪੈਕੇਜ ਤੇ ਜਾਣ ਲਈ `pnpm dlx turbo run where <project_name>` ਵਰਤੋਂ ਕਰੋ।
- Vite, ESLint ਅਤੇ TypeScript ਨੂੰ ਵੇਖਣ ਲਈ `pnpm install --filter <project_name>` ਚਲਾਓ।
- ਨਵਾਂ React + Vite ਪੈਕੇਜ ਬਣਾਉਣ ਲਈ: `pnpm create vite@latest <project_name> -- --template react-ts`
- ਹਰ package.json ਵਿੱਚ name ਫੀਲਡ ਚੈੱਕ ਕਰੋ—top-level ਨੂੰ ਛੱਡੋ।

## ਟੈਸਟਿੰਗ ਹਦਾਇਤਾਂ
- CI ਯੋਜਨਾ .github/workflows ਫੋਲਡਰ ਵਿੱਚ ਵੇਖੋ।
- `pnpm turbo run test --filter <project_name>` ਚਲਾਓ।
- ਪੈਕੇਜ ਰੂਟ ਤੋਂ ਸਿਰਫ਼ `pnpm test` ਚਲਾਇਆ ਜਾ ਸਕਦਾ ਹੈ।
- ਕਿਸੇ ਇੱਕ ਟੈਸਟ 'ਤੇ ਧਿਆਨ ਕੇਂਦਰਿਤ ਕਰਨ ਲਈ: `pnpm vitest run -t "<test name>"`
- ਕਿਸੇ ਵੀ ਟੈਸਟ ਜਾਂ ਟਾਈਪ ਦੀਆਂ ਗਲਤੀਆਂ ਠੀਕ ਕਰੋ।
- ਫਾਇਲਾਂ ਹਿਲਾਉਣ ਜਾਂ imports ਬਦਲਣ ਤੋਂ ਬਾਅਦ: `pnpm lint --filter <project_name>` ਚਲਾਓ।
- ਆਪਣੇ ਬਦਲਾਵਾਂ ਲਈ ਟੈਸਟ ਸ਼ਾਮਿਲ ਕਰੋ ਜਾਂ ਅੱਪਡੇਟ ਕਰੋ।

## PR ਹਦਾਇਤਾਂ
- ਸਿਰਲੇਖ ਫਾਰਮੈਟ: [<project_name>] <Title>
- commit ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਹਮੇਸ਼ਾ `pnpm lint` ਅਤੇ `pnpm test` ਚਲਾਓ।