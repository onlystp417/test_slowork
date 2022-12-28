module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
    commonjs: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'react/no-unused-prop-types': 0,
    'react/no-unescaped-entities': 0,
    'react/prop-types': 0,
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 100,
        arrowParens: 'avoid',
        trailingComma: 'none',
        bracketSpacing: true,
        useTabs: false,
        jsxSingleQuote: false
      }
    ]
  }
};
