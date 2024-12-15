//import { fixupConfigRules } from "@eslint/compat";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import eslintTs from 'typescript-eslint';
import eslintJs from '@eslint/js';
import importPlugin from 'eslint-plugin-import';

const tsFiles = ['{app,tests}/**/*.ts'];

const languageOptions = {
    globals: {
        ...globals.browser,
    },
    ecmaVersion: 2023,
    sourceType: 'module',
};

const recommendedTypeScriptConfigs = [
    ...eslintTs.configs.recommended.map((config) => ({
        ...config,
        files: tsFiles,
    })),
    ...eslintTs.configs.stylistic.map((config) => ({
        ...config,
        files: tsFiles,
    })),
];


const customTypescriptConfig = {
    files: tsFiles,
    plugins: {
        "react-refresh": reactRefresh,
        import: importPlugin,
    },

    languageOptions: {
        ...languageOptions,
    },

    settings: {
        react: {
            version: "18.2",
        },
    },

    rules: {
        ...importPlugin.configs.typescript.rules,
        "react-refresh/only-export-components": ["warn", {
            allowConstantExport: true,
        }],
        'import/no-duplicates': 'warn',
        "react/prop-types": 0,
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                ignoreRestSiblings: true,
                args: 'none',
            },
        ],
    },
};

export default [
    { ignores: ["**/dist", "**/.eslintrc.mjs", 'docs/*', 'build/*', 'lib/*', 'dist/*'] },
    eslintJs.configs.recommended,
    ...recommendedTypeScriptConfigs,
    customTypescriptConfig,
    //...fixupConfigRules(compat.extends(
    //    "eslint:recommended",
    //    "plugin:react/recommended",
    //    "plugin:react/jsx-runtime",
    //    "plugin:react-hooks/recommended",
    //)),
];