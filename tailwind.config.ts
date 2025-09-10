import type { Config } from 'tailwindcss';
import flowbite from 'flowbite-react/tailwind';

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
        // Primary Colors
        yellow: '#FCCE2F',
        blue: '#00004D',

        // Light Theme
        black: '#000000',
        white: '#FFFFFF',
        gray: '#F7F7F7',
        lightGray: '#E6E6E6',
        charcoal: '#4A4A4A',
        red: '#D63434',
        green: '#28b463',
        beige: '#FAF5E9',

        // Dark Theme
        softYellow: '#D9B22B',
        softWhite: '#FFFFFFCC',
        softBlue: '#334C91',
        softRed: '#B54646',
        softBeige: '#3A3A32',
        softGray: '#2E2E2E',
        softCharcoal: '#404040',

        // Skeleton Colors
        skeletonGray: '#F2F2F2',
        skeletonDarkGray: '#D9D9D9',
      },
    },
  },
  plugins: [flowbite.plugin()],
};

export default config;
