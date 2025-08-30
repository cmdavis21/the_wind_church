import { useParams } from 'next/navigation';
import React, { ChangeEvent, useTransition } from 'react';
import { Locale } from 'next-intl';

import { usePathname, useRouter } from '@/data/services/i18n/navigation';

interface LanguageSelectorSelectProps {
  children: React.ReactNode;
  defaultValue: string;
  label: string;
  changeColor: boolean;
}

const LanguageSelectorSelect: React.FC<LanguageSelectorSelectProps> = ({
  children,
  defaultValue,
  label,
  changeColor,
}) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value as Locale;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  };
  return (
    <label>
      <div className="hidden">{label}</div>
      <select
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
        className={`w-full min-w-[115px] !p-0 !border-0 !ring-0 !outline-none !bg-transparent ${
          changeColor
            ? 'text-black dark:text-softWhite'
            : 'text-white lg:text-black dark:text-softWhite'
        }`}
      >
        {children}
      </select>
    </label>
  );
};

export default LanguageSelectorSelect;
