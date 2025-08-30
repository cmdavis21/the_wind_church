'use client';

import { useLocale, useTranslations } from 'next-intl';

import { routing } from '@/data/services/i18n/routing';

import LanguageSelectorSelect from './language-selector-select/LanguageSelectorSelect';

interface LanguageSelectorProps {
  changeColor: boolean;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ changeColor }) => {
  const t = useTranslations('LanguageSelector');
  const locale = useLocale();

  return (
    <LanguageSelectorSelect defaultValue={locale} label={t('label')} changeColor={changeColor}>
      {routing.locales.map((cur) => (
        <option
          key={cur}
          value={cur}
          className={`!bg-transparent ${
            changeColor
              ? 'text-black dark:text-softWhite'
              : 'text-white lg:text-black dark:text-softWhite'
          }`}
        >
          {t('locale', { locale: cur })}
        </option>
      ))}
    </LanguageSelectorSelect>
  );
};

export default LanguageSelector;
