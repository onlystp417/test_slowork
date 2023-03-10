module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "jest/globals": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  "overrides": [
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "prettier",
    "jest"
  ],
  "rules": {
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "no-unused-vars": "off",
    "react/prop-types": "off",
    'prettier/prettier': [
      'warn',
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
}
