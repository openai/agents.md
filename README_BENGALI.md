# AGENTS.md

<p align="center">
  <img src="https://agents.md/og.png">
</p>

[AGENTS.md](https://agents.md) হলো একটি সহজ, ওপেন ফর্ম্যাট যা কোডিং এজেন্টদের নির্দেশ দেওয়ার জন্য।

AGENTS.md-কে এজেন্টদের জন্য README হিসেবে ভাবুন: একটি নির্দিষ্ট, পূর্বনির্ধারিত স্থান
যেখানে আপনি প্রোজেক্টের জন্য AI কোডিং এজেন্টদের সাহায্য করার নির্দেশাবলী দিতে পারেন।

নীচে AGENTS.md ফাইলের একটি সাধারণ উদাহরণ দেওয়া হলো:

```markdown
# Sample AGENTS.md file

## Dev environment টিপস
- `pnpm dlx turbo run where <project_name>` ব্যবহার করুন কোনো প্যাকেজে যাওয়ার জন্য।
- `pnpm install --filter <project_name>` চালান যাতে Vite, ESLint এবং TypeScript এটি দেখতে পারে।
- নতুন React + Vite প্যাকেজ তৈরির জন্য: `pnpm create vite@latest <project_name> -- --template react-ts`
- প্রতিটি প্যাকেজের package.json এ name ফিল্ড চেক করুন—top-level বাদ দিন।

## টেস্টিং নির্দেশনা
- CI পরিকল্পনা .github/workflows ফোল্ডারে দেখুন।
- `pnpm turbo run test --filter <project_name>` চালান।
- প্যাকেজ রুট থেকে শুধু `pnpm test` চালাতে পারেন।
- কোনো একটি টেস্টে ফোকাস করতে: `pnpm vitest run -t "<test name>"`
- টেস্ট বা টাইপ ভুল ঠিক করুন।
- ফাইল সরানোর বা ইমপোর্ট পরিবর্তনের পরে: `pnpm lint --filter <project_name>` চালান।
- পরিবর্তনের জন্য টেস্ট যোগ করুন বা আপডেট করুন।

## PR নির্দেশনা
- টাইটেল ফরম্যাট: [<project_name>] <Title>
- কমিট করার আগে সবসময় `pnpm lint` এবং `pnpm test` চালান।
