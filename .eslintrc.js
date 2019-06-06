module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "eslint:recommended",
		"plugin:prettier/recommended",
		"xo"
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "capitalized-comments": "off",
		"object-curly-spacing": "off",
		"prettier/prettier": ["error", { "singleQuote": true, "useTabs": true, bracketSpacing: true }]
  },
  globals: {
    $nuxt: true
  }
};