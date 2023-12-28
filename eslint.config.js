const stylistic = require('@stylistic/eslint-plugin')
const typescriptPlugin = require('@typescript-eslint/eslint-plugin')
const parserTs = require('@typescript-eslint/parser')

module.exports = {
  plugins: {
    'style': stylistic,
    'ts': typescriptPlugin,
  },
  languageOptions: {
    parser: parserTs,
    parserOptions: {
      project: [
        './tsconfig.json',
      ],
    },
  },
  files: [
    '**/*.js',
    '**/*.ts',
  ],
  ignores: [
    '**/dist/**',
    '**/*.d.ts',
  ],
  rules: {
    'no-unused-vars': 'error',
    'no-var': 'error',
    'eqeqeq': 'error',
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    'ts/return-await': 'error',
    'ts/naming-convention': [
      'error',
      {
        selector: 'default',
        format: [
          'camelCase',
        ],
      },
      {
        selector: 'variable',
        format: [
          'camelCase',
          'PascalCase',
          'UPPER_CASE',
        ],
      },
      {
        selector: 'import',
        format: [
          'camelCase',
          'PascalCase',
        ],
      },
      {
        selector: 'parameter',
        format: [
          'camelCase',
        ],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'objectLiteralProperty',
        format: null,
      },
      {
        selector: 'typeLike',
        format: [
          'PascalCase',
        ],
      },
    ],
    'style/no-multiple-empty-lines': [
      'error',
      {
        max: 1,
      },
    ],
    'style/indent': [
      'error',
      2,
    ],
    'style/semi': [
      'error',
      'never',
    ],
    'style/comma-dangle': [
      'error',
      'always-multiline',
    ],
    'style/quotes': [
      'error',
      'single',
    ],
    'style/array-element-newline': [
      'error',
      {
        minItems: 1,
      },
    ],
    'style/array-bracket-newline': [
      'error',
      {
        minItems: 1,
      },
    ],
    'style/object-property-newline': 'error',
    'style/object-curly-newline': 'error',
  },
}
