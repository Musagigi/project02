module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'simple-import-sort'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // "import/first": "error",
    // "import/newline-after-import": "error",
    // "import/no-duplicates": "error",
    // 'simple-import-sort/imports': ['error', {
    //   groups: [
    //     ["^react", "^@?\\w"],
    //     // Internal packages.
    //     // ["^(@|@company|@ui|components|utils|config|vendored-lib)(/.*|$)"],
    //     ["^"],
    //     // Side effect imports.
    //     ["^\\u0000"],
    //     // Parent imports. Put `..` last.
    //     ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
    //     // Other relative imports. Put same-folder imports and `.` last.
    //     ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
    //     // Style imports.
    //     ["^.+\\.s?css$"],
    //   ]
    // }]
  },
}
