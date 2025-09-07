<template>
    <div class="w-full min-h-screen flex flex-col overflow-hidden relative pb-16">
        <CreatedBy class="absolute bottom-0"></CreatedBy>
    </div>
</template>

<script setup>
const meta = {
    title: 'Just-Nuxt',
    description: 'It\'s just a template.',
    // image: 'https://trickledown.ghartemann.fr/3d-money.jpg',
    // url: 'https://trickledown.ghartemann.fr/'
};

useSeoMeta({
    description: meta.description,
    ogTitle: meta.title,
    ogDescription: meta.description,
    ogImage: meta.image,
    ogUrl: meta.url,
    twitterTitle: meta.title,
    twitterDescription: meta.description,
    twitterImage: meta.image,
    twitterCard: 'summary'
});

useHead({
    link: [
        { rel: 'canonical', href: meta.url }
    ]
});
</script>

<style scoped>

</style>
