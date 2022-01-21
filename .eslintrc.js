module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        ["airbnb-base", "plugin:prettier/recommended"],
    ],
    parserOptions: {
        ecmaVersion: 13,
        sourceType: "module",
    },
    rules: {
        semi: ["error", "always"],
        quotes: ["error", "double", { allowTemplateLiterals: true }],
        indent: ["error", 4],
        "linebreak-style": 0,
        "eol-last": ["error", "never"],
        "space-before-function-paren": ["error", {
            anonymous: "always",
            named: "always",
            asyncArrow: "always",
        }],
    },

};