const stylistic = require('@stylistic/eslint-plugin')
const parserTs = require('@typescript-eslint/parser')

module.exports = {
  plugins: {
    'style': stylistic,
  },
  languageOptions: {
    parser: parserTs,
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
    'style/indent': [
      'error',
      2,
    ],
    'style/comma-dangle': [
      'error',
      'always-multiline',
    ],
    'style/quotes': [
      'error',
      'single',
    ],
    'no-var': 'error',
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
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
    'eqeqeq': 'error',
  },
}
