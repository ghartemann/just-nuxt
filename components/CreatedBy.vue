<template>
    <div class="w-full text-center text-xs pb-4">
        <div>Version {{ version }}</div>
    <div>
        Created by
        <ULink to="https://ghartemann.fr" target="_blank">ghartemann</ULink>
        © 2025
    </div>
    </div>
</template>

<script setup>
import v from "~/version.json";

const version = ref(v.version);
</script>

<style scoped>

</style>