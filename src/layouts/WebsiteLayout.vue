<template>
        <TheAppBarVue/>
        <main>
            <RouterView/>
        </main>
</template>

<script setup>
import { RouterView } from 'vue-router';
import TheAppBarVue from '../components/TheAppBar.vue';

</script>

<style scoped>

</style>