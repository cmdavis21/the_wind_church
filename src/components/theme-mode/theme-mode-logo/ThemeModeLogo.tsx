'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

import { useTheme } from '@/data/providers/theme-mode-provider';

interface ThemeModeLogoProps {
  changeColor?: boolean;
  noChangeColor?: boolean;
}

const ThemeModeLogo: React.FC<ThemeModeLogoProps> = ({ changeColor, noChangeColor }) => {
  const t = useTranslations('Footer');
  const { darkMode } = useTheme();

  const determineLogoToRender = () => {
    let relativePath = '/images/logo/logo-black.webp';

    if (darkMode) {
      relativePath = '/images/logo/logo-white.webp';
    } else {
      if (!changeColor) {
        if (!noChangeColor) relativePath = '/images/logo/logo-white.webp';
      }
    }

    return relativePath;
  };

  return (
    <Image
      priority
      src={determineLogoToRender()}
      alt={t('name')}
      width={150}
      height={100}
      className="max-sm:max-w-[140px]"
    />
  );
};

export default ThemeModeLogo;
