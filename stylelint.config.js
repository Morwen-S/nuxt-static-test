module.exports = {
    extends: [
        'stylelint-config-standard-scss',
        'stylelint-config-recommended-vue',
    ],
    rules: {
        indentation:          4,
        'string-quotes':      'single',
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: [
                    'tailwind',
                    'apply',
                    'variants',
                    'responsive',
                    'screen',
                    'mixin',
                    'include',
                    'if',
                    'else',
                    'for',
                    'extend',
                ],
            },
        ],
        'selector-class-pattern':               null,
        'declaration-block-trailing-semicolon': null,
        'no-descending-specificity':            null,
        'no-extra-semicolons':                  true,
        'selector-pseudo-element-no-unknown':   [true, {
            ignorePseudoElements: ['v-deep'],
        }],
        'no-duplicate-selectors': true,
    },
    overrides: [
        {
            files:        '**/*.scss',
            customSyntax: 'postcss-scss',
        },
    ],
};
