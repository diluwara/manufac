module.exports = {
    root: true,
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:@typescript-eslint/recommended-requiring-type-checking",
      "plugin:@typescript-eslint/strict",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      project: ["./tsconfig.json"],
    },
    plugins: ["@typescript-eslint", "import"],
    rules: {
      "@typescript-eslint/no-empty-interface": "error",
      "@typescript-eslint/no-misused-promises": "warn",
      "@typescript-eslint/no-empty-function": "warn",
    },
  };
  