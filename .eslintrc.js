module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": 0,
    "no-constant-condition": ["error", { checkLoops: false }],
  },
  ignorePatterns: ["/.next", "/styles/bulma.css"],
  settings: {
    react: {
      version: "detect",
    },
  },
};
