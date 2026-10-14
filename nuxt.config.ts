// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    ssr: true,
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    css: ['~/assets/css/main.css'],

    vite: {
        plugins: [
            tailwindcss(),
        ],
    },

    modules: [
        '@nuxt/eslint',
        '@nuxt/ui',
        '@pinia/nuxt',
        'nuxt-anchorscroll',
        '@nuxt/image'
    ],

    app: {
        head: {
            title: 'Just-Nuxt',
            htmlAttrs: {
                lang: 'en',
            },
            link: [
                {
                    rel: 'icon',
                    type: 'image/svg',
                    href: '/icon.svg'
                },
            ]
        }
    },

    components: [
        '~/components'
    ],

    // sourcemap: {
    //     client: 'hidden'
    // }
});
