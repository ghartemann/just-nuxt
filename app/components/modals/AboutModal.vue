<template>
    <UModal
        v-model:open="model"
        title="About Just Nuxt"
        close-icon="i-lucide-x"
        :ui="{content: 'max-w-6xl'}"
    >
        <template #body>
            <!--content-->
        </template>
    </UModal>
</template>

<script setup>
const model = defineModel({
    type: Boolean,
    default: false
});
</script>

<style scoped>

</style>
