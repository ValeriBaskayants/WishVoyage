module.exports = {
  root: true,
  env: {
    es2023: true,
    node: true,
    browser: true
  },
  ignorePatterns: [
    'node_modules/',
    'dist/',
    'build/',
    '.next/',
    'coverage/',
    '*.log',
    '.turbo/',
    '.server.tsbuildinfo'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    'import',
    'unused-imports',
    'prettier',
    'react',
    'react-hooks',
    'jsx-a11y'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended'
  ],
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      },
      typescript: {}
    }
  },
  rules: {
    'prettier/prettier': ['error'],

    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-unused-vars': 'off', 
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],

    'unused-imports/no-unused-imports': 'error',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
        groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index'], 'object', 'type']
      }
    ],
    'import/newline-after-import': 'error',

    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',

    'jsx-a11y/anchor-is-valid': 'off'
  },

  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json', './client/tsconfig.json', './server/tsconfig.json', './database/tsconfig.json'].filter(Boolean)
      }
    },

    {
      files: ['client/**/*.{ts,tsx,js,jsx}'],
      env: { browser: true, node: true },
      extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended', 'next/core-web-vitals'],
      rules: {
        'no-console': 'warn'
      }
    },

    {
      files: ['server/**/*.ts'],
      env: { node: true },
      rules: {
        'no-console': 'off'
      }
    },

    {
      files: ['**/*.{spec,test}.{ts,tsx,js,jsx}'],
      env: { jest: true },
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        'no-unused-expressions': 'off'
      }
    },

    {
      files: ['**/*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off'
      }
    }
  ]
}