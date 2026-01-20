// import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview } from '@storybook/nextjs';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Flowbite } from 'flowbite-react';
import React from 'react';
import '../src/styles/fonts.css';
import '../src/styles/globals.css';
import { theme } from '../src/styles/theme';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story: React.FC) => {
      const client = new QueryClient();
      return (
        <QueryClientProvider client={client}>
          <Flowbite theme={{ theme }}>
            <div className="relative flex items-center justify-center p-4">
              <Story />
            </div>
          </Flowbite>
        </QueryClientProvider>
      );
    },
  ],
};

export default preview;

// export const decorators = [
//   withThemeByClassName({
//     themes: {
//       light: 'light',
//       dark: 'dark',
//     },
//     defaultTheme: 'light',
//   }),
// ];
