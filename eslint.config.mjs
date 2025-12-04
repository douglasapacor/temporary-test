import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "react/jsx-curly-brace-presence": ["error"],
      "no-console": [
        "error",
        {
          allow: ["warn", "error", "info"],
        },
      ],
    },
  },
];
export default eslintConfig;
