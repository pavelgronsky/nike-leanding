import importPlugin from "eslint-plugin-import";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import eslintJs from "@eslint/js";
import eslintTs from "typescript-eslint";

import tailwind from "eslint-plugin-tailwindcss";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";

const filesExtensions = ["{app,tests,src}/**/*.{ts,tsx}"];

const languageOptions = {
  globals: {
    ...globals.node,
    ...globals.jest,
  },
  ecmaVersion: 2023,
  sourceType: "module",
};

const customTypescriptConfig = {
  files: filesExtensions,
  plugins: {
    import: importPlugin,
    "import/parsers": tsParser,
  },
  languageOptions: {
    ...languageOptions,
    parser: tsParser,
    parserOptions: {
      project: "./tsconfig.json",
    },
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    tailwindcss: {
      callees: ["classnames", "clsx", "ctl"],
      config: "tailwind.config.js",
      cssFiles: [
        "**/*.css",
        "!**/node_modules",
        "!**/.*",
        "!**/dist",
        "!**/build",
      ],
      cssFilesRefreshRate: 5_000,
      removeDuplicates: true,
      skipClassAttribute: false,
      whitelist: [],
      tags: [],
      classRegex: "^class(Name)?$",
    },
  },
  rules: {
    ...importPlugin.configs.typescript.rules,
    "no-unused-vars": "warn",
    "import/no-duplicates": "warn",
    "react/prop-types": 0,
    "import/export": "error",
    "@typescript-eslint/no-use-before-define": "off",
    "require-await": "off",
    "no-duplicate-imports": "error",
    "no-unneeded-ternary": "error",
    "prefer-object-spread": "error",
    "no-multiple-empty-lines": 1,
    //'prettier/prettier': [
    //  'error',
    //  {
    //    singleQuote: true,
    //    parser: 'flow',
    //  },
    //],
  },
};

// Add the files for applying the recommended TypeScript configs
// only for the Typescript files.
// This is necessary when we have the multiple extensions files
// (e.g. .ts, .tsx, .js, .cjs, .mjs, etc.).
const recommendedTypeScriptConfigs = [
  ...eslintTs.configs.recommended.map((config) => ({
    ...config,
    files: filesExtensions,
  })),
  ...eslintTs.configs.stylistic.map((config) => ({
    ...config,
    files: filesExtensions,
  })),
];

export default [
  { ignores: ["**/dist", "**/.eslintrc.cjs"] },
  eslintJs.configs.recommended,
  customTypescriptConfig,
  eslintPluginPrettier,
  ...recommendedTypeScriptConfigs,
  ...tailwind.configs["flat/recommended"],
];
