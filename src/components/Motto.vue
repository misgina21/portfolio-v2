<template>

    <div class="relative isolate overflow-hidden bg-gray-50 py-10 px-6">
        <div class="mx-auto max-w-7xl lg:px-6">
            <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 lg:max-w-none lg:grid-cols-2 items-center">
                <dl class="grid grid-cols-1 gap-x-8 gap-y-10 lg:pt-2">
                    <img src="../assets/olive-team.JPG" alt="our background image" class="h-44 md:h-72 w-full" />
                </dl>
                <div class="max-w-xl lg:max-w-lg flex flex-col items-center mt-8 lg:mt-0">
                    <h2 class="text-3xl font-bold tracking-normal text-gray-800 sm:text-4xl">{{site_motto}}</h2>
                    <p class="mt-4 text-xl leading-8 text-gray-600 md:italic font-sans"> motto_description  </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useSettingStore } from '@/store/settings';

const settingStore = useSettingStore();
const site_motto = ref('')

const fetchSettings = async () => {
    let response = await settingStore.fetchSettingsAction();
    let motto = response.find((setting) => {
        return setting.key === 'site.moto';
    });
    site_motto.value = motto.value;
    
};

onMounted(() => {
    fetchSettings();
})
</script>

<style scoped></style>../services/imageUrl