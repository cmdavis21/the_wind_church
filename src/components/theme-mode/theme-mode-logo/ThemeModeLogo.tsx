'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

import { AWS_ASSET_BASE_URL } from '@/data/constants';
import { useTheme } from '@/data/providers/theme-mode-provider';

interface ThemeModeLogoProps {
  changeColor?: boolean;
  noChangeColor?: boolean;
}

const ThemeModeLogo: React.FC<ThemeModeLogoProps> = ({ changeColor, noChangeColor }) => {
  const t = useTranslations('Footer');
  const { darkMode } = useTheme();

  const determineLogoToRender = () => {
    let relativePath = '/logos/logo.png';

    if (darkMode) {
      relativePath = '/logos/logo_white.png';
    } else {
      if (!changeColor) {
        if (!noChangeColor) relativePath = '/logos/logo_white.png';
      }
    }

    return `${AWS_ASSET_BASE_URL}${relativePath}`;
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
