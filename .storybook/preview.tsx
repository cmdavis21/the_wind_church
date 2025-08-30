import type { Preview } from "@storybook/react";
import { Flowbite } from "flowbite-react";
import React from "react";
import "../src/styles/globals.css";
import { withThemeByClassName } from "@storybook/addon-themes";
import { theme } from "../src/styles/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
            <div className="relative w-full flex items-center justify-center p-6">
              <Story />
            </div>
          </Flowbite>
        </QueryClientProvider>
      );
    },
  ],
};

export default preview;

export const decorators = [
  withThemeByClassName({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
  }),
];
