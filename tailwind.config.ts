import flowbite from 'flowbite-react/tailwind';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [flowbite.content(), './src/**/*.{js,jsx,ts,tsx}', './public/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-manrope)', 'sans-serif'],
        display: ['var(--font-permanent-marker)', 'cursive'],
      },
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
        black: '#000000',
        white: '#FFFFFF',
        /* ------------------------------------------------------
         * LIGHT MODE
         * ------------------------------------------------------ */
        light: {
          bg: '#FFFFFF',
          navy: '#0A1A4A',
          gray: '#E6E6E6',
          neutral: '#F2F2F2',
          charcoal: '#4A4A4A',
          primaryText: '#323130',
          secondaryText: '#605E5C',
        },
        /* ------------------------------------------------------
         * DARK MODE
         * ------------------------------------------------------ */
        dark: {
          bg: '#2E2E2E',
          navy: '#334C91',
          gray: '#404040',
          neutral: '#D9D9D9',
          charcoal: '#6B6B6B',
          primaryText: '#FFFFFFCC',
          secondaryText: '#605E5C',
        },
        /* ------------------------------------------------------
         * BRAND YELLOWS
         * ------------------------------------------------------ */
        brand: {
          primary: '#f4c430',
          light: '#f4e2b5',
          dark: '#c3941d',
        },
        /* ------------------------------------------------------
         * SEMANTIC TOKENS
         * ------------------------------------------------------ */
        success: '#2E7D32',
        warning: '#F9A825',
        info: '#1976D2',
        error: '#D32F2F',
      },
    },
  },
  plugins: [flowbite.plugin()],
};

export default config;
