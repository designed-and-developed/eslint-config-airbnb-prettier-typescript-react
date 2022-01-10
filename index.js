module.exports = {
    parser: "@typescript-eslint/parser",
    env: {
      browser: true,
      es6: true,
    },
    extends: [
      "airbnb",
      "airbnb/hooks",
      "plugin:@typescript-eslint/recommended",
      "prettier",
    ],
    plugins: ["prettier"],
    globals: {},
    rules: {
      // prettier
      "prettier/prettier": ["error"],
      // React
      "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
      "react/function-component-definition": [
        2,
        {
          namedComponents: ["function-declaration", "arrow-function", "function-expression"]
        },
      ],
      // import
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          js: "never",
          mjs: "never",
          jsx: "never",
          ts: "never",
          tsx: "never",
        },
      ],
    },
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".ts", ".jsx", ".tsx", ".json"],
        },
      },
      "import/extensions": [".js", ".ts", ".mjs", ".jsx", ".tsx"],
    },
  };