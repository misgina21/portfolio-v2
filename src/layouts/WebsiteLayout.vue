<template>
        <TheAppBarVue/>
        <main>
            <RouterView/>
        </main>
        <TheFooter/>
</template>

<script setup>
import { RouterView } from 'vue-router';
import TheAppBarVue from '../components/TheAppBar.vue';
import TheFooter from '@/components/TheFooter.vue';

</script>

<style scoped>

</style>