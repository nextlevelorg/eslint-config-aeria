const stylistic = require('@stylistic/eslint-plugin')
const parserTs = require('@typescript-eslint/parser')

module.exports = {
  plugins: {
    '@stylistic': stylistic,
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
    '@stylistic/indent': [
      'error',
      2,
    ],
    '@stylistic/comma-dangle': [
      'error',
      'always-multiline',
    ],
    '@stylistic/quotes': [
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
    '@stylistic/array-element-newline': [
      'error',
      {
        minItems: 1,
      },
    ],
    '@stylistic/array-bracket-newline': [
      'error',
      {
        minItems: 1,
      },
    ],
    '@stylistic/object-property-newline': 'error',
    '@stylistic/object-curly-newline': 'error',
    'eqeqeq': 'error',
  },
}
