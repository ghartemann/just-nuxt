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
        '@nuxt/ui',
        '@sentry/nuxt/module',
        '@nuxtjs/sitemap',
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
                    type: 'image/png',
                    href: '/icon.png'
                },
            ]
        }
    },

    sentry: {
        sourceMapsUploadOptions: {
            org: 'ghartemann',
            project: 'just-nuxt'
        }
    },

    components: [
        '~/components'
    ],

    sourcemap: {
        client: 'hidden'
    }
});