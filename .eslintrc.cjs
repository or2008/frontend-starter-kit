module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        // "hardcore",
        "hardcore/react",
        // "hardcore/fp",
        // "hardcore/ts"
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        sourceType: 'module',
        project: "./tsconfig.json"
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        "putout/putout": "off",
        "prettier/prettier": "off",
        "indent": ["error", 4],
        "quotes": "off",
        "max-len": ["error", { "ignoreComments": true, "code": 150 }],
        "import/no-extraneous-dependencies": ["error", { "devDependencies": true, "optionalDependencies": false, "peerDependencies": false }],
        "camelcase": "off",
        "import/no-unused-modules": "off",
        "semi": "off",
        "import/exports-last": "off",
        "arrow-body-style": ["error", "as-needed"],
        "arrow-parens": ["error", "as-needed"],
        "promise/avoid-new": "off",
        "import/prefer-default-export": "off",
        "react-perf/jsx-no-new-object-as-prop": "off",
        "react/destructuring-assignment": ["error", "always", { "destructureInSignature": "ignore" }],
        "curly": [2, "multi-or-nest", "consistent"],
        "func-style": ["error", "declaration", { "allowArrowFunctions": true }],
        // "fp/no-mutation": ["error", { "exceptions": [{ "property": "src" }, { "object": "document", "property": "documentElement" }] }],
        "etc/no-commented-out-code": "off",
        // Typescript
        "@typescript-eslint/semi": "error",
        "@typescript-eslint/prefer-readonly-parameter-types": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/quotes": ["error", "single", { "avoidEscape": true }],
        "@typescript-eslint/naming-convention": [
            "error",
            {
                "selector": "variable",
                "types": ["boolean"],
                "format": ["PascalCase"],
                "prefix": ["is", "should", "has", "can", "did", "will"]
            },
            {
                "selector": "variable",
                "format": ["camelCase", "PascalCase", "UPPER_CASE"]
            },
            {
                "selector": "parameter",
                "format": ["camelCase"],
                "leadingUnderscore": "allow"
            },
            {
                "selector": "memberLike",
                "modifiers": ["private"],
                "format": ["camelCase"],
                "leadingUnderscore": "require"
            },

            {
                "selector": "typeLike",
                "format": ["PascalCase"]
            }
        ],

        // React
        "react/jsx-curly-brace-presence": "error",
        "react/prop-types": "off",
        "react/function-component-definition": [2, { "namedComponents": "arrow-function" }],
        "react-perf/jsx-no-jsx-as-prop": 'off',
        "react/forbid-component-props": "off",
        "jsx-quotes": ["error", "prefer-double"],

        // jsx-a11y
        "jsx-a11y/no-static-element-interactions": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/no-noninteractive-element-interactions": "off"
    }
}
