const indentionLength = 4;
const maxRowLength    = 120;

module.exports = {
    root: true,
    env:  {
        browser: true,
        es2021:  true,
        node:    true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        '@nuxtjs/eslint-config-typescript',
        'plugin:nuxt/recommended',
        'airbnb-base',
        'plugin:jsdoc/recommended',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        parser:      '@typescript-eslint/parser',
        sourceType:  'module',
    },
    plugins: [
        'import',
        'jsdoc',
        '@typescript-eslint',
    ],
    settings: {
        'import/resolver': {
            node: {
                extensions: [
                    '.js',
                    '.vue',
                ],
            },
        },
        jsdoc: {
            preferredTypes: {
                object: 'Object',
            },
        },
    },
    // add your custom rules here
    ignorePatterns: ['**/dist/**/*'],
    rules:          {
        'import/no-extraneous-dependencies': 'off',
        'max-len':                           [
            'error',
            maxRowLength,
            indentionLength,
            {
                ignoreComments: true,
            },
        ],
        'func-names': [
            'error',
            'never',
        ],
        indent: [
            'error',
            indentionLength,
            {
                SwitchCase:   1,
                ignoredNodes: [
                    'TemplateLiteral',
                ],
            },
        ],
        'key-spacing': [
            'error',
            {
                align: 'value',
            },
        ],
        'no-multi-spaces': [
            'error',
            {
                exceptions: {
                    VariableDeclarator: true,
                    ImportDeclaration:  true,
                },
            },
        ],
        'no-undef':                        'off',
        'no-new':                          'off',
        'no-param-reassign':               'off',
        'no-unused-vars':                  'off',
        'no-shadow':                       'off',
        'linebreak-style':                 'off',
        'no-underscore-dangle':            'off',
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                prev:      '*',
                next:      'return',
            },
            {
                blankLine: 'always',
                prev:      [
                    'const',
                    'let',
                    'var',
                ],
                next: '*',
            },
            {
                blankLine: 'any',
                prev:      [
                    'const',
                    'let',
                    'var',
                ],
                next: [
                    'const',
                    'let',
                    'var',
                ],
            },
            {
                blankLine: 'always',
                prev:      'if',
                next:      '*',
            },
            {
                blankLine: 'always',
                prev:      '*',
                next:      'if',
            },
            {
                blankLine: 'always',
                prev:      'import',
                next:      '*',
            },
            {
                blankLine: 'any',
                prev:      'import',
                next:      'import',
            },
            {
                blankLine: 'always',
                prev:      '*',
                next:      'export',
            },
        ],
        'arrow-parens': [
            'error',
            'as-needed',
            {
                requireForBlockBody: true,
            },
        ],
        'no-magic-numbers': [
            'warn',
            {
                ignore: [
                    2,
                    1,
                    0,
                    -1,
                ],
                ignoreArrayIndexes: true,
            },
        ],
        '@typescript-eslint/no-unused-vars': ['error', {
            vars:               'all',
            args:               'after-used',
            ignoreRestSiblings: true,
            varsIgnorePattern:  '^_',
            argsIgnorePattern:  '^_',
        }],
        'jsdoc/require-returns-description': 'off',
        'jsdoc/require-returns':             'off',
        'import/prefer-default-export':      'off',
        'import/no-unresolved':              'off',
        'import/extensions':                 [
            'error',
            'never',
            {
                js:      'never',
                ts:      'never',
                vue:     'always',
                json:    'always',
                scss:    'always',
                css:     'always',
                svg:     'always',
                service: 'always',
            },
        ],
        'vue/html-indent': [
            'error',
            indentionLength,
        ],
        'vue/max-attributes-per-line': [
            'error', {
                singleline: 1,
            },
        ],
        'vue/multi-word-component-names': ['error', {
            ignores: [],
        }],
    },
};
