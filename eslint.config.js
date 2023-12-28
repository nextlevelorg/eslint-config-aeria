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
    'eqeqeq': 'error',
    'function-paren-newline': [
      'error',
      {
        minItems: 5,
      },
    ],
    'no-unsafe-optional-chaining': 'error',
    'no-unused-vars': 'error',
    'no-var': 'error',
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    'ts/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports',
      },
    ],
    'ts/consistent-type-definitions': [
      'error',
      'type',
    ],
    'ts/no-inferrable-types': 'error',
    'ts/no-unnecessary-condition': 'error',
    'ts/no-unnecessary-type-assertion': 'error',
    'ts/no-unnecessary-type-constraint': 'error',
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
    'style/comma-dangle': [
      'error',
      'always-multiline',
    ],
    'style/array-bracket-newline': [
      'error',
      {
        minItems: 1,
      },
    ],
    'style/array-element-newline': [
      'error',
      {
        minItems: 1,
      },
    ],
    'style/arrow-parens': 'error',
    'style/indent': [
      'error',
      2,
    ],
    'style/linebreak-style': [
      'error',
      'unix',
    ],
    'style/multiline-ternary': 'error',
    'style/no-multi-spaces': 'error',
    'style/no-multiple-empty-lines': [
      'error',
      {
        max: 1,
      },
    ],
    'style/object-curly-newline': 'error',
    'style/object-property-newline': 'error',
    'style/quotes': [
      'error',
      'single',
    ],
    'style/semi': [
      'error',
      'never',
    ],
  },
}
