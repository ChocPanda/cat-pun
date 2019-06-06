module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/recommended",
    "eslint:recommended",
    "prettier/vue",
		"plugin:prettier/recommended",
		"xo"
  ],
  rules: {
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
		"object-curly-spacing": "off",
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
		"prettier/prettier": ["error", { "singleQuote": true, "useTabs": true, bracketSpacing: true }]
  },
  globals: {
    $nuxt: true
  },
  parserOptions: {
    parser: "babel-eslint"
	}
};