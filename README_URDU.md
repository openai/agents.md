# AGENTS.md

<p align="center">
  <img src="https://agents.md/og.png">
</p>

[AGENTS.md](https://agents.md) ایک سادہ، اوپن فارمیٹ ہے جو کوڈنگ ایجنٹس کو رہنمائی دینے کے لیے ہے۔

AGENTS.md کو ایجنٹس کے لیے README کی طرح سوچیں: ایک مخصوص، قابلِ پیش گوئی جگہ
جہاں آپ اپنے پروجیکٹ کے لیے AI کوڈنگ ایجنٹس کو مدد دینے کے لیے سیاق و سباق اور ہدایات دے سکتے ہیں۔

نیچے AGENTS.md فائل کی ایک سادہ مثال دی گئی ہے:

```markdown
# Sample AGENTS.md file

## Dev environment ہدایات
- `pnpm dlx turbo run where <project_name>` استعمال کریں کسی پیکیج پر جانے کے لیے۔
- `pnpm install --filter <project_name>` چلائیں تاکہ Vite, ESLint اور TypeScript اسے دیکھ سکیں۔
- نیا React + Vite پیکیج بنانے کے لیے: `pnpm create vite@latest <project_name> -- --template react-ts`
- ہر پیکیج کی package.json میں name فیلڈ چیک کریں—ٹاپ لیول کو چھوڑ دیں۔

## ٹیسٹنگ ہدایات
- CI پلان .github/workflows فولڈر میں دیکھیں۔
- `pnpm turbo run test --filter <project_name>` چلائیں۔
- پیکیج روٹ سے صرف `pnpm test` بھی چلایا جا سکتا ہے۔
- کسی ایک ٹیسٹ پر فوکس کرنے کے لیے: `pnpm vitest run -t "<test name>"`
- کسی بھی ٹیسٹ یا ٹائپ کی غلطیوں کو درست کریں۔
- فائلیں منتقل کرنے یا امپورٹس تبدیل کرنے کے بعد: `pnpm lint --filter <project_name>` چلائیں۔
- اپنے تبدیلیوں کے لیے ٹیسٹ شامل کریں یا اپڈیٹ کریں۔

## PR ہدایات
- ٹائٹل فارمیٹ: [<project_name>] <Title>
- کمٹ کرنے سے پہلے ہمیشہ `pnpm lint` اور `pnpm test` چلائیں۔