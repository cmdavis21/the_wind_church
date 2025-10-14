'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

import { AWS_ASSET_BASE_URL } from '@/data/constants';
import { useTheme } from '@/data/providers/theme-mode-provider';

interface ThemeModeLogoProps {
  changeColor?: boolean;
  noChangeColor?: boolean;
  className: string;
}

const ThemeModeLogo: React.FC<ThemeModeLogoProps> = ({ changeColor, noChangeColor, className }) => {
  const t = useTranslations('Footer');
  const { darkMode } = useTheme();
  const determineLogoToRender = () => {
    if (darkMode) {
      if (changeColor) {
        return `${AWS_ASSET_BASE_URL}/logos/logo_white.png`;
      } else {
        return `${AWS_ASSET_BASE_URL}/logos/logo_white.png`;
      }
    } else {
      if (changeColor) {
        return `${AWS_ASSET_BASE_URL}/logos/logo.png`;
      } else {
        if (noChangeColor) {
          return `${AWS_ASSET_BASE_URL}/logos/logo.png`;
        } else {
          return `${AWS_ASSET_BASE_URL}/logos/logo_white.png`;
        }
      }
    }
  };
  return (
    <Image
      priority
      src={determineLogoToRender()}
      alt={t('name')}
      width={100}
      height={100}
      className={`${className}`}
    />
  );
};

export default ThemeModeLogo;
