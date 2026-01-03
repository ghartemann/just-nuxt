<template>
    <UApp>
        <AppHeader></AppHeader>

        <NuxtPage></NuxtPage>

        <USeparator></USeparator>

        <AppFooter></AppFooter>
    </UApp>
</template>

<script setup>
import AppFooter from '~/components/layout/AppFooter.vue';
import AppHeader from '~/components/layout/AppHeader.vue';
</script>
