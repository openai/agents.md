# AGENTS.md

<p align="center">
  <img src="https://agents.md/og.png">
</p>

[AGENTS.md](https://agents.md) एक सरल, ओपन फॉर्मेट है जो कोडिंग एजेंट्स को मार्गदर्शन देने के लिए है।

AGENTS.md को एजेंट्स के लिए README की तरह सोचें: एक विशेष, पूर्वानुमानित जगह
जहां आप प्रोजेक्ट पर AI कोडिंग एजेंट्स को मदद करने के लिए संदर्भ और निर्देश दे सकते हैं।

नीचे AGENTS.md फ़ाइल का एक न्यूनतम उदाहरण दिया गया है:

```markdown
# Sample AGENTS.md file

## Dev environment टिप्स
- `pnpm dlx turbo run where <project_name>` का उपयोग करें किसी पैकेज पर जाने के लिए।
- `pnpm install --filter <project_name>` चलाएँ ताकि Vite, ESLint और TypeScript उसे देख सकें।
- नया React + Vite पैकेज बनाने के लिए: `pnpm create vite@latest <project_name> -- --template react-ts`
- प्रत्येक पैकेज की package.json में name फ़ील्ड जांचें—टॉप-लेवल को छोड़ दें।

## टेस्टिंग निर्देश
- CI प्लान .github/workflows फ़ोल्डर में देखें।
- `pnpm turbo run test --filter <project_name>` चलाएँ।
- पैकेज रूट से सिर्फ `pnpm test` भी चला सकते हैं।
- किसी एक टेस्ट पर ध्यान देने के लिए: `pnpm vitest run -t "<test name>"`
- किसी भी टेस्ट या टाइप त्रुटियों को ठीक करें।
- फ़ाइलें मूव करने या इम्पोर्ट बदलने के बाद: `pnpm lint --filter <project_name>` चलाएँ।
- अपने बदलाव के लिए टेस्ट जोड़ें या अपडेट करें।

## PR निर्देश
- टाइटल फॉर्मेट: [<project_name>] <Title>
- कमिट करने से पहले हमेशा `pnpm lint` और `pnpm test` चलाएँ।
