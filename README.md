# Cookielab's ESLint config for TypeScript

This package contains ESLint configuration for our code style.

The code-style tries to be as strict and defensive as possible to avoid unwanted side-effects and increase code readability.

## Installation

First add package as dev-dependency

```bash
npm install --save-dev @cookielab.io/eslint-config-typescript
```

or

```bash
yarn add --dev @cookielab.io/eslint-config-typescript
```

Set up `.eslintrc.json` in your project's root to extend our package.

```json
{
	"extends": "@cookielab.io/eslint-config-typescript"
}
```

## Run tests

Package contains tests to ensure all available rules are explicitly set for each environment.

```bash
bin/jest
```

It is also checked by its own plain ESlint set of rules.

```bash
bin/lint
```
