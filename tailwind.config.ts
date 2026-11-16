import flowbite from 'flowbite-react/tailwind';
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class', // or 'media' — but must be at the root

  content: [
    flowbite.content(),
    './src/**/*.{js,jsx,ts,tsx}',
    './public/**/*.html',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}',
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-manrope)'],
        display: ['var(--font-permanent-marker)'],
      },

      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        fadeOut: { '0%': { opacity: '1' }, '100%': { opacity: '0' } },
        heroWordUp: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        heroFadeIn: { from: { opacity: '0' }, to: { opacity: '1' } },
        heroZoom: { from: { transform: 'scale(1.08)' }, to: { transform: 'scale(1)' } },
      },

      animation: {
        'fade-in': 'fadeIn 1s ease',
        'fade-out': 'fadeOut 1s ease-out',
        'hero-word-up': 'heroWordUp 0.7s cubic-bezier(0.22,1,0.36,1) both',
        'hero-fade-in': 'heroFadeIn 0.6s ease-out 0.3s both',
        'hero-zoom': 'heroZoom 20s ease-out forwards',
      },

      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.22, 1, 0.36, 1)',
        smooth: 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
      transitionDuration: { 1200: '1200ms', 8000: '8000ms' },
      transitionDelay: { 1200: '1200ms' },

      width: {
        lg: '25px',
        xl: '36px',
        xxl: '50px',
        '3xl': '65px',
        '4xl': '100px',
        '5xl': '125px',
        '6xl': '150px',
        '7xl': '200px',
      },

      minWidth: {
        lg: '25px',
        xl: '36px',
        xxl: '50px',
        '3xl': '65px',
        '4xl': '100px',
        '5xl': '125px',
        '6xl': '150px',
        '7xl': '200px',
      },

      spacing: {
        xxs: '4px',
        xs: '8px',
        sm: '12px',
        md: '16px',
        lg: '25px',
        xl: '36px',
        xxl: '50px',
        '3xl': '65px',
        '4xl': '100px',
        '5xl': '125px',
        '6xl': '150px',
        '7xl': '200px',
      },

      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        xxl: '24px',
      },

      colors: {
        info: '#1976D2',
        success: '#2E7D32',
        warning: '#F9A825',
        error: '#D32F2F',
        link: '#0067C0',

        brand: {
          primary: '#fdd738',
          light: '#f4e2b5',
          dark: '#c3941d',
        },

        light: {
          bg: '#FFFFFF',
          navy: '#051050',
          gray: '#E6E6E6',
          neutral: '#F2F2F2',
          charcoal: '#4A4A4A',
          primaryText: '#000000',
          secondaryText: '#605E5C',
        },

        dark: {
          bg: '#252525',
          navy: '#334C91',
          gray: '#404040',
          neutral: '#D9D9D9',
          charcoal: '#6B6B6B',
          primaryText: '#FFFFFFCC',
          secondaryText: '#605E5C',
        },
      },
    },
  },

  safelist: [
    {
      pattern: /(bg|text|border)-(brand|light|dark|success|warning|info|error)-?.*/,
    },
  ],

  plugins: [flowbite.plugin()],
};

export default config;
