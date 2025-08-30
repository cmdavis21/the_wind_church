import { defineConfig } from "eslint/config";
import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import _import from "eslint-plugin-import";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([{
    extends: fixupConfigRules(compat.extends(
        "next/core-web-vitals",
        "next",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
    )),

    plugins: {
        "@typescript-eslint": fixupPluginRules(typescriptEslint),
        import: fixupPluginRules(_import),
    },

    rules: {
        "import/order": ["warn", {
            groups: [
                "builtin",
                "external",
                "internal",
                ["sibling", "parent"],
                "index",
                "object",
            ],

            alphabetize: {
                order: "asc",
                caseInsensitive: true,
            },

            "newlines-between": "always",
        }],

        "no-restricted-imports": ["error", {
            paths: [{
                name: "next/link",
                message: "Use `Link` from @/data/services/i18n/navigation to ensure proper internationalized routing.",
            }, {
                name: "next/navigation",
                message: "Use routing utilities from @/data/services/i18n/navigation for i18n-aware navigation.",
            }],
        }],

        "no-restricted-syntax": ["error", {
            selector: "ImportDeclaration[source.value='next/link']",
            message: "Routing must go through @/data/services/i18n/navigation – do not use next/link.",
        }, {
            selector: "ImportDeclaration[source.value='next/navigation']",
            message: "Routing must go through @/data/services/i18n/navigation – do not use next/navigation.",
        }],
    },
}]);