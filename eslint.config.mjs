import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import tseslint from "typescript-eslint";
import importPlugin from "eslint-plugin-import";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

export default defineConfig([
  globalIgnores([
    "node_modules/**",
    ".next/**",
    "out/**",
    "build/**",
    "dist/**",
    "public/**",
    "next-env.d.ts",
    "eslint.config.mjs",
  ]),
  ...nextVitals,
  ...tseslint.configs.recommended,
  {
    plugins: {
      import: importPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      "import/order": [
        "warn",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling", "index"],
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/explicit-module-boundary-types": "warn",
      "prettier/prettier": "error",
    },
  },
  prettierConfig,
]);
