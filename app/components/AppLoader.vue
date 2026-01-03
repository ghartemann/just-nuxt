<template>
    <div class="w-72 md:w-96 m-auto h-96">
        <UProgress v-model="model"></UProgress>

        <div class="text-center text-xs mt-2">
            Loading...
        </div>

        <div class="text-center text-xs text-dimmed">
            Please wait
        </div>
    </div>
</template>

<script setup>
const model = ref(null);
</script>

<style scoped>

</style>
