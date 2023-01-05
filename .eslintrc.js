module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaFeatures: { jsx: true }, ecmaVersion: 12, sourceType: 'module' },
  ignorePatterns: ['node_modules/*', '!.prettierrc.js'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      settings: {
        react: { version: 'detect' },
        'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },
        'import/resolver': {
          typescript: {
            project: './tsconfig.json',
          },
        },
      },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:import/typescript',
        'plugin:import/recommended',
        'prettier',
      ],
      plugins: [
        'prettier',
        'react',
        'react-native',
        '@typescript-eslint',
        'import',
        'simple-import-sort',
        'unused-imports',
      ],
      rules: {
        // ESLint rules
        'no-implicit-coercion': 'error', // use shorter, more self-explanatory notation for the type conversion

        // React rules
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'react/jsx-props-no-spreading': 'off', // _app.tsx uses spread operator
        'react/destructuring-assignment': 'off', // Vscode doesn't support automatically destructuring, it's a pain to add a new variable

        // TypeScript rules
        '@typescript-eslint/no-unused-vars': 'off', // duplicate option "unused-imports/no-unused-vars"
        '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
        '@typescript-eslint/consistent-type-imports': 'error', // Ensure `import type` is used when it's necessary
        '@typescript-eslint/comma-dangle': 'off', // Avoid conflict rule between Eslint and Prettier
        '@typescript-eslint/naming-convention': [
          'error',
          {
            format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
            selector: 'variable',
            leadingUnderscore: 'allow',
          },
          { format: ['camelCase', 'PascalCase'], selector: 'function' },
          { format: ['PascalCase'], selector: 'interface' },
          { format: ['PascalCase'], selector: 'typeAlias' },
        ],

        // Default import rules
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off', // Named export is easier to refactor automatically

        // Simple import recommended rules
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'import/first': 'error', // makes sure all imports are at the top of the file. (autofixable)
        'import/newline-after-import': 'error', // makes sure there’s a newline after the imports. (autofixable)
        'import/no-duplicates': 'error', // merges import statements of the same file. (autofixable, mostly)

        // Unused import recommended rules
        'unused-imports/no-unused-imports': 'off',
        'unused-imports/no-unused-vars': [
          'warn',
          { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
        ],
      },
    },
  ],
};
