import flowbite from 'flowbite-react/tailwind';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [flowbite.content(), './src/**/*.{js,jsx,ts,tsx}', './public/**/*.html'],
  theme: {
    extend: {
      spacing: {
        xxs: '4px',
        xs: '8px',
        sm: '12px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        xxl: '64px',
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        xxl: '24px',
      },
      colors: {
        primary: '#FED23E',
        primaryDark: '#D9B22F',
        navy: '#001F3F',
        navyLight: '#334C91',
        charcoal: '#4A4A4A',
        charcoalLight: '#6B6B6B',
        backgroundLight: '#FFFFFF',
        backgroundDark: '#2E2E2E',
        textPrimary: '#000000',
        textSecondary: '#6B6B6B',
        textInverse: '#FFFFFFCC',
        success: '#239E57',
        error: '#D63434',
        warning: '#FCCE2F',
        gray: '#E6E6E6',
        grayDark: '#404040',
        skeletonGray: '#F2F2F2',
        skeletonDarkGray: '#D9D9D9',
      },
    },
  },
  plugins: [flowbite.plugin()],
};

export default config;
