'use client';

import { LOCALES } from '@/data/services/i18n/utils';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { setCookie } from 'nookies';
import LanguageSelectorSelect from './language-selector-select/LanguageSelectorSelect';

interface LanguageSelectorProps {
  changeColor: boolean;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ changeColor }) => {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations('LanguageSelector');

  const handleLocaleChange = (locale: string) => {
    const newLocale = locale;
    setCookie(null, 'WSWC_PREFERRED_LOCALE', newLocale, {
      maxAge: 30 * 24 * 60 * 60, // 30 days
      path: '/',
    });
    router.refresh(); // Refresh to re-render with the new locale
  };

  return (
    <LanguageSelectorSelect
      defaultValue={locale}
      label={t('label')}
      changeColor={changeColor}
      onLocaleChange={handleLocaleChange}
    >
      {LOCALES.map((cur) => (
        <option key={cur} value={cur}>
          {t('locale', { locale: cur })}
        </option>
      ))}
    </LanguageSelectorSelect>
  );
};

export default LanguageSelector;
