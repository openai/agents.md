# AGENTS.md

<p align="center">
  <img src="https://agents.md/og.png">
</p>

[AGENTS.md](https://agents.md) هو صيغة بسيطة ومفتوحة لتوجيه وكلاء البرمجة.

فكر في AGENTS.md على أنه README للوكلاء: مكان محدد ومتوقع
لتقديم السياق والتعليمات لمساعدة وكلاء الذكاء الاصطناعي على العمل في مشروعك.

فيما يلي مثال بسيط على ملف AGENTS.md:

```markdown
# Sample AGENTS.md file

## نصائح بيئة التطوير
- استخدم `pnpm dlx turbo run where <project_name>` للانتقال إلى حزمة معينة.
- شغّل `pnpm install --filter <project_name>` حتى يتمكن Vite و ESLint و TypeScript من رؤيته.
- لإنشاء حزمة React + Vite جديدة: `pnpm create vite@latest <project_name> -- --template react-ts`
- تحقق من حقل name في package.json لكل حزمة—تجاوز المستوى الأعلى.

## تعليمات الاختبار
- تحقق من خطة CI في مجلد .github/workflows.
- شغّل `pnpm turbo run test --filter <project_name>` لتشغيل جميع الفحوصات.
- من جذر الحزمة، يمكنك فقط تشغيل `pnpm test`.
- للتركيز على اختبار واحد: `pnpm vitest run -t "<test name>"`
- أصلح أي أخطاء في الاختبار أو الأنواع.
- بعد نقل الملفات أو تغيير الاستيرادات: شغّل `pnpm lint --filter <project_name>`.
- أضف أو حدّث الاختبارات للتغييرات التي أجريتها.

## تعليمات PR
- صيغة العنوان: [<project_name>] <Title>
- شغّل دائمًا `pnpm lint` و `pnpm test` قبل الالتزام.