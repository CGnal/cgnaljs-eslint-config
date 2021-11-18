# CGnal ESLint rules

Linting rules for CGnal's JavaScript projects.

# Installation

```bash
npm install @cgnal/eslint-config --save-dev
```

The package requires the following peer dependencies:
- [`eslint`](https://github.com/eslint/eslint)` >= 7`
- [`eslint-plugin-import`](https://github.com/import-js/eslint-plugin-import)` >= 2` if you're using JS rules
- [`eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react)` >= 7` if you're using React rules

# Usage

Add the rulesets you want in the `extends` section of your ESLint configuration file.

e.g. to use both JS and React's rules:

```javascript
// ...

extends: [
    "@cgnal/eslint-config/js",
    "@cgnal/eslint-config/react"
]

// ...
```

# npm scripts

- `npm run bump` updates version number using an interactive shell
- `npm run check` validates all rules and performs the linting check
- `npm run check-js` validates JS rules
- `npm run check-react` validates React rules
- `npm run check-rules` validates all rules
- `npm run lint` performs the linting check
