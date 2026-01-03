<template>
    <UHeader>
        <template #left>
            <div class="flex items-center gap-8">
                <NuxtLink to="/public">
                    <h1 class="w-auto shrink-0 text-xl text-primary font-semibold"
                        @click="goToHome"
                    >
                        Just Nuxt
                    </h1>
                </NuxtLink>
            </div>
        </template>

        <template #right>
            <UColorModeButton variant="ghost"></UColorModeButton>

            <UButton
                @click="showAboutModal = true"
                icon="lucide-info"
                color="neutral"
                variant="ghost"
            ></UButton>
        </template>

        <AboutModal v-model="showAboutModal"></AboutModal>
    </UHeader>
</template>

<script setup>
import AboutModal from '~/components/modals/AboutModal.vue';

const router = useRouter();

const showAboutModal = ref(false);

function goToHome() {
    router.push({ name: 'home' });
}
</script>

<style scoped>

</style>
