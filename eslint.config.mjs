import prettierPlugin from "eslint-plugin-prettier";
import next from "eslint-config-next";
import tseslint from "@typescript-eslint/eslint-plugin";
import reactPlugin from "eslint-plugin-react";
import importPlugin from "eslint-plugin-import";

export default [
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "dist/**",
      "public/**",
      "next-env.d.ts",
      "eslint.config.mjs",
    ],
  },
  ...next,
  {
    plugins: {
      "@typescript-eslint": tseslint,
      react: reactPlugin,
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
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "prettier/prettier": ["error"],
      "@typescript-eslint/explicit-module-boundary-types": "warn",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
