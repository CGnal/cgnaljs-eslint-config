const rules = [
    "./base"
].map(require.resolve);

module.exports = {
    extends: [
        ...rules,
        "plugin:react/recommended"
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: [
        "react"
    ],
    rules: {}
};
