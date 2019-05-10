/* eslint-disable max-lines */

module.exports = {
    rules: {
        'accessor-pairs': 'off',
        'array-bracket-newline': ['error', 'consistent'],
        'array-bracket-spacing': ['error', 'never'],
        'array-callback-return': 'error',
        'array-element-newline': ['error', 'consistent'],
        'arrow-body-style': 'off',
        'arrow-parens': ['error', 'always'],
        'arrow-spacing': 'error',
        'block-scoped-var': 'error',
        'block-spacing': 'error',
        'brace-style': ['error', '1tbs'],
        'callback-return': 'off',
        'camelcase': ['error', {
            properties: 'never',
        }],
        'capitalized-comments': 'off',
        'class-methods-use-this': 'off',
        'comma-dangle': ['error', {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'only-multiline', // in future switch to always-multiline
        }],
        'comma-spacing': 'error',
        'comma-style': 'error',
        'complexity': ['error', 10],
        'computed-property-spacing': 'error',
        'consistent-return': 'error',
        'consistent-this': 'error',
        'constructor-super': 'error',
        'curly': 'error',
        'default-case': 'error',
        'dot-location': ['error', 'property'],
        'dot-notation': 'error',
        'eol-last': 'error',
        'eqeqeq': ['error', 'always', {
            'null': 'ignore',
        }],
        'for-direction': 'error',
        'func-call-spacing': 'error',
        'func-name-matching': 'off',
        'func-names': ['error', 'never'],
        'func-style': 'error',
        'function-paren-newline': ['error', 'multiline'],
        'generator-star-spacing': 'error',
        'getter-return': 'error',
        'global-require': 'off',
        'guard-for-in': 'error',
        'handle-callback-err': 'off',
        'id-blacklist': 'off',
        'id-length': 'off',
        'id-match': 'off',
        'implicit-arrow-linebreak': 'error',
        'indent': ['error', 4, {
            SwitchCase: 1,
            MemberExpression: 1,
        }],
        'indent-legacy': 'off',
        'init-declarations': 'error',
        'jsx-quotes': 'off',
        'key-spacing': 'error',
        'keyword-spacing': 'error',
        'line-comment-position': 'off',
        'linebreak-style': 'error',
        'lines-around-comment': ['error', {
            beforeLineComment: false,
            allowBlockStart: true,
            allowBlockEnd: true,
            allowObjectStart: true,
            allowObjectEnd: true,
            allowArrayStart: true,
            allowArrayEnd: true,
        }],
        'lines-around-directive': 'off',
        'lines-between-class-members': ['error', 'always', {
            exceptAfterSingleLine: true,
        }],
        'max-classes-per-file': 'off',
        'max-depth': 'off',
        'max-len': 'off',
        'max-lines': ['warn', {
            max: 300,
            skipBlankLines: true,
            skipComments: true,
        }],
        'max-lines-per-function': 'off',
        'max-nested-callbacks': ['error', 3],
        'max-params': 'off',
        'max-statements': 'off',
        'max-statements-per-line': 'error',
        'multiline-comment-style': 'error',
        'multiline-ternary': 'off',
        'new-cap': ['error', {
            capIsNew: false,
        }],
        'new-parens': 'error',
        'newline-after-var': 'off',
        'newline-before-return': 'off',
        'newline-per-chained-call': 'error',
        'no-alert': 'error',
        'no-array-constructor': 'error',
        'no-async-promise-executor': 'error',
        'no-await-in-loop': 'off',
        'no-bitwise': 'error',
        'no-buffer-constructor': 'error',
        'no-caller': 'error',
        'no-case-declarations': 'error',
        'no-catch-shadow': 'off',
        'no-class-assign': 'error',
        'no-compare-neg-zero': 'error',
        'no-cond-assign': 'error',
        'no-confusing-arrow': 'off',
        'no-console': 'off',
        'no-const-assign': 'error',
        'no-constant-condition': ['error', {
            checkLoops: false,
        }],
        'no-continue': 'off',
        'no-control-regex': 'error',
        'no-debugger': 'error',
        'no-delete-var': 'error',
        'no-div-regex': 'off',
        'no-dupe-args': 'error',
        'no-dupe-class-members': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-duplicate-imports': 'off',
        'no-else-return': ['error', {
            allowElseIf: false,
        }],
        'no-empty': 'error',
        'no-empty-character-class': 'error',
        'no-empty-function': 'error',
        'no-empty-pattern': 'error',
        'no-eq-null': 'off',
        'no-eval': 'error',
        'no-ex-assign': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-extra-boolean-cast': 'error',
        'no-extra-label': 'error',
        'no-extra-parens': 'off',
        'no-extra-semi': 'error',
        'no-fallthrough': 'error',
        'no-floating-decimal': 'error',
        'no-func-assign': 'error',
        'no-global-assign': 'error',
        'no-implicit-coercion': 'error',
        'no-implicit-globals': 'off',
        'no-implied-eval': 'error',
        'no-inline-comments': 'off',
        'no-inner-declarations': 'error',
        'no-invalid-regexp': 'error',
        'no-invalid-this': 'error',
        'no-irregular-whitespace': 'error',
        'no-iterator': 'error',
        'no-label-var': 'error',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-lonely-if': 'error',
        'no-loop-func': 'error',
        'no-magic-numbers': 'off',
        'no-misleading-character-class': 'off',
        'no-mixed-operators': ['error', {
            groups: [
                ['&', '|', '^', '~', '<<', '>>', '>>>'],
                ['&&', '||'],
            ],
            allowSamePrecedence: true,
        }],
        'no-mixed-requires': 'error',
        'no-mixed-spaces-and-tabs': 'error',
        'no-multi-assign': 'error',
        'no-multi-spaces': 'error',
        'no-multi-str': 'error',
        'no-multiple-empty-lines': ['error', {
            max: 1,
            maxEOF: 1,
            maxBOF: 0,
        }],
        'no-native-reassign': 'off', // deprecated
        'no-negated-condition': 'off',
        'no-negated-in-lhs': 'off', // deprecated
        'no-nested-ternary': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-object': 'error',
        'no-new-require': 'error',
        'no-new-symbol': 'error',
        'no-new-wrappers': 'error',
        'no-obj-calls': 'error',
        'no-octal': 'error',
        'no-octal-escape': 'error',
        'no-param-reassign': 'error',
        'no-path-concat': 'error',
        'no-plusplus': 'off',
        'no-process-env': 'error',
        'no-process-exit': 'off',
        'no-proto': 'error',
        'no-prototype-builtins': 'off',
        'no-redeclare': 'error',
        'no-regex-spaces': 'error',
        'no-restricted-globals': 'off',
        'no-restricted-imports': 'off',
        'no-restricted-modules': 'off',
        'no-restricted-properties': 'off',
        'no-restricted-syntax': 'off',
        'no-return-assign': 'error',
        'no-return-await': 'off',
        'no-script-url': 'error',
        'no-self-assign': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-shadow': 'error',
        'no-shadow-restricted-names': 'error',
        'no-spaced-func': 'off', // deprecated
        'no-sparse-arrays': 'error',
        'no-sync': 'error',
        'no-tabs': 'off',
        'no-template-curly-in-string': 'error',
        'no-ternary': 'off',
        'no-this-before-super': 'error',
        'no-throw-literal': 'error',
        'no-trailing-spaces': 'error',
        'no-undef': 'error',
        'no-undef-init': 'off',
        'no-undefined': 'error',
        'no-underscore-dangle': ['error', {
            allowAfterThis: true,
            allowAfterSuper: false,
            enforceInMethodNames: false,
        }],
        'no-unexpected-multiline': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unneeded-ternary': 'error',
        'no-unreachable': 'error',
        'no-unsafe-finally': 'error',
        'no-unsafe-negation': 'error',
        'no-unused-expressions': 'error',
        'no-unused-labels': 'error',
        'no-unused-vars': 'error',
        'no-use-before-define': 'off', // needs to be tested how it behaves in recursive call
        'no-useless-call': 'error',
        'no-useless-computed-key': 'error',
        'no-useless-concat': 'error',
        'no-useless-constructor': 'error',
        'no-useless-escape': 'error',
        'no-useless-rename': 'error',
        'no-useless-return': 'error',
        'no-var': 'error',
        'no-void': 'error',
        'no-warning-comments': 'off',
        'no-whitespace-before-property': 'error',
        'no-with': 'error',
        'nonblock-statement-body-position': 'off',
        'object-curly-newline': 'off',
        'object-curly-spacing': ['error', 'never'],
        'object-property-newline': ['error', {
            allowAllPropertiesOnSameLine: true,
        }],
        'object-shorthand': ['error', 'consistent'],
        'one-var': ['error', 'never'],
        'one-var-declaration-per-line': 'error',
        'operator-assignment': ['error', 'never'],
        'operator-linebreak': ['error', 'before'],
        'padded-blocks': ['error', {
            classes: 'never',
        }],
        'padding-line-between-statements': 'off', // we need to configure it because of lines-around-directive is deprecated
        'prefer-arrow-callback': 'error',
        'prefer-const': 'error',
        'prefer-destructuring': 'off',
        'prefer-numeric-literals': 'error',
        'prefer-object-spread': 'off',
        'prefer-promise-reject-errors': 'error',
        'prefer-reflect': 'off', // deprecated
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'quote-props': ['error', 'consistent-as-needed'],
        'quotes': ['error', 'single', {
            avoidEscape: true,
        }],
        'radix': 'error',
        'require-atomic-updates': 'error',
        'require-await': 'error',
        'require-jsdoc': 'off', // deprecated
        'require-unicode-regexp': 'error',
        'require-yield': 'error',
        'rest-spread-spacing': 'error',
        'semi': 'error',
        'semi-spacing': 'error',
        'semi-style': 'off',
        'sort-imports': 'off',
        'sort-keys': 'off',
        'sort-vars': 'off',
        'space-before-blocks': 'error',
        'space-before-function-paren': ['error', {
            anonymous: 'always',
            named: 'never',
        }],
        'space-in-parens': 'error',
        'space-infix-ops': 'error',
        'space-unary-ops': 'error',
        'spaced-comment': 'error',
        'strict': ['error', 'never'],
        'switch-colon-spacing': 'off',
        'symbol-description': 'off',
        'template-curly-spacing': 'error',
        'template-tag-spacing': 'off',
        'unicode-bom': 'error',
        'use-isnan': 'error',
        'valid-jsdoc': 'off',
        'valid-typeof': 'error',
        'vars-on-top': 'off',
        'wrap-iife': 'error',
        'wrap-regex': 'off',
        'yield-star-spacing': 'error',
        'yoda': 'error',
    },
};
