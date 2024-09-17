module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', "prettier"],
  settings: {
    "import/resolver": {
      typescript: true,
      node: true,
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'prettier/prettier': 'error',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: false },
    ],
    'import/no-unresolved': 'error',
    'import/no-duplicates': 'error',
    'import/no-named-as-default-member': 'off',
    'import/no-named-as-default': 'off',
    "import/default": "off",
    'import/order': [
      'error',
      {
        groups: [
          'external',
          'builtin',
          'internal',
          'index',
          'type',
          'parent',
          'sibling',
        ],

        alphabetize: {
          'order': 'asc',
          'caseInsensitive': true
        },
        'newlines-between': 'always-and-inside-groups'
      }
    ],
  },
}
