import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import prettier from 'eslint-plugin-prettier'
import unusedImports from 'eslint-plugin-unused-imports'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist', 'node_modules', 'public'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
      globals: globals.browser
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      prettier,
      'react-refresh': reactRefresh,
      'unused-imports': unusedImports
    },
    rules: {
      'arrow-body-style': ['error', 'as-needed'],
      'prettier/prettier': 'error',
      'unused-imports/no-unused-imports': 'error',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/jsx-uses-vars': 'error',
      'react/button-has-type': 'error',
      'react/display-name': 'off',
      'react/hook-use-state': 'warn',
      'react/jsx-no-duplicate-props': 'error',
      'react/require-default-props': 'off',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      indent: 'off',
      'jsx-quotes': ['warn', 'prefer-single'],
      'func-style': ['error', 'expression'],
      'linebreak-style': ['error', 'unix'],
      semi: ['error', 'never'],
      'keyword-spacing': 'error'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
)
