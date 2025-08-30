import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "es"], // List all locales that are supported
  defaultLocale: "en", // Used when no locale matches
});
