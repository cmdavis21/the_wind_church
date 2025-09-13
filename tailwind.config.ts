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
        // 🌟 Brand Identity
        primary: '#FED23E', // Logo yellow — use for buttons, highlights, accents
        primaryDark: '#D9B22F', // Slightly muted yellow for hover states or dark mode

        // 🧭 Navigation & Structure
        navy: '#001F3F', // Deep blue — use for headers, navbars, and footers
        navyLight: '#334C91', // Soft blue — for dark theme backgrounds or section dividers

        charcoal: '#4A4A4A', // Primary structural color — headers, navbars, footers
        charcoalLight: '#6B6B6B', // Section dividers, muted text, dark mode accents

        // 🧼 Backgrounds
        backgroundLight: '#FAF5E9', // Light beige — warm, soft page background
        backgroundDark: '#2E2E2E', // Dark gray — dark mode background #1C1C1E '#2E2E2E'

        // 🖋️ Text
        textPrimary: '#4A4A4A', // Charcoal — main body text
        textSecondary: '#6B6B6B', // Muted gray — subtext, captions
        textInverse: '#FFFFFFCC', // Soft white — text on dark backgrounds

        // 🎯 Actions & Feedback
        success: '#28B463', // Green — success messages, confirmations
        error: '#D63434', // Red — error messages, destructive actions
        warning: '#FCCE2F', // Yellow — alerts, cautions

        // 🧱 Borders & Dividers
        gray: '#E6E6E6', // Light gray — card borders, input outlines
        grayDark: '#404040', // Soft charcoal — dark mode borders

        // 🧊 Skeleton Loading
        skeletonGray: '#F2F2F2', // Light shimmer base
        skeletonDarkGray: '#D9D9D9', // Dark shimmer overlay
      },
      // colors: {
      //   // Primary Colors
      //   yellow: '#FCCE2F',
      //   blue: '#00004D',

      //   // Light Theme
      //   black: '#000000',
      //   white: '#FFFFFF',
      //   gray: '#F7F7F7',
      //   lightGray: '#E6E6E6',
      //   charcoal: '#4A4A4A',
      //   red: '#D63434',
      //   green: '#28b463',
      //   beige: '#FAF5E9',

      //   // Dark Theme
      //   softYellow: '#D9B22B',
      //   softWhite: '#FFFFFFCC',
      //   softBlue: '#334C91',
      //   softRed: '#B54646',
      //   softBeige: '#3A3A32',
      //   softGray: '#2E2E2E',
      //   softCharcoal: '#404040',

      //   // Skeleton Colors
      //   skeletonGray: '#F2F2F2',
      //   skeletonDarkGray: '#D9D9D9',
      // },
    },
  },
  plugins: [flowbite.plugin()],
};

export default config;
