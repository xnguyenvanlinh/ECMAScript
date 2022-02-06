module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: 1,
    },
    extends: [
        ['airbnb-base', 'plugin:prettier/recommended']
    ],
    parserOptions: {
        ecmaVersion: 13,
        sourceType: 'module',
    },
    rules: {
        semi: ['error', 'always'],
        quotes: [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
        indent: ['error', 4],
        'linebreak-style': 0,
        'eol-last': ['error', 'never'],
    },
};