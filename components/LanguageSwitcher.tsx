import { useRouter } from 'next/router';
import Link from 'next/link';

export default function LanguageSwitcher() {
  const router = useRouter();
  const { locale, locales, asPath } = router;

  return (
    <div className="flex items-center gap-2">
      {locales?.map((loc) => {
        const isActive = locale === loc;
        return (
          <Link
            key={loc}
            href={asPath}
            locale={loc}
            className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
              isActive
                ? 'bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            {loc.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
