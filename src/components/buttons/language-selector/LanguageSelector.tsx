'use client';

import { setUserLocale } from '@/data/services/i18n/locale';
import { LOCALES } from '@/data/services/i18n/utils';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import LanguageSelectorSelect from './language-selector-select/LanguageSelectorSelect';

interface LanguageSelectorProps {
  changeColor: boolean;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ changeColor }) => {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations('LanguageSelector');

  const handleLocaleChange = (newLocale: string) => {
    setUserLocale(newLocale);
    router.refresh();
  };

  return (
    <LanguageSelectorSelect
      label={t('label')}
      defaultValue={locale}
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
