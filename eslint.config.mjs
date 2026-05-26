import next from "eslint-config-next";

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
];
