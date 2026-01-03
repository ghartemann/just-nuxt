// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
    rules: {
        '@stylistic/indent': ['error', 4],
        '@stylistic/semi': ['error', 'always'],

        'vue/script-indent': ['error', 4, { baseIndent: 0 }],
        'vue/html-indent': ['error', 4, {
            baseIndent: 1
        }],
        'vue/html-self-closing': ['error', {
            html: {
                void: 'never',
                normal: 'never',
                component: 'never'
            },
            svg: 'never',
            math: 'never'
        }]
    }
});
