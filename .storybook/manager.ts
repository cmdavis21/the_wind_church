import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";

addons.setConfig({
  theme: create({
    base: "dark",
    brandTitle: "The Wind Church",
    brandUrl: "https://thewindchurch.org",
    brandImage: "/logo/logo_white.png",
    brandTarget: "_self",
  }),
});
