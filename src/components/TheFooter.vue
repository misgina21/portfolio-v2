<template>
  <div>
    <footer class="py-1s2">
      <hr class="my-6 border-gray-400 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between sm:mx-20 pb-6">
        <span class="text-sm text-white text-center dark:text-gray-400">©{{ currentYear }} Misgina Gebretsadik. All Rights Reserved.
        </span>
        <p class="text-white text-center">Designed and developed by: <a href="https://pilasatech.net/" target="_blank"
            class="font-medium text-gray-200 hover:underline">Misgina Gebretsadik</a></p>
      </div>
      <!-- </div> -->
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue';
const currentYear = computed(() => {
  return new Date().getFullYear();
})
</script>

<style scoped></style>