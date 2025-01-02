<template>
  <div class="relative">

    <!-- Loading spin -->
    <div v-if="isLoading" class="h-44 inset-0 z-50 flex items-center justify-center bg-gray-100 bg-opacity-50">
        <div class="animate-spin rounded-full h-20 w-20 border-t-4 border-r-2 border-l-2 border-b-4 border-blue-500"></div>
      </div>
    <Carousel :autoplay="2000" :wrap-around="true">
      <Slide v-for="(image, index) in slides" :key="index" class="m-0">
        <div class="relative w-full">
          <img :src="imageUrl(image.image)" :alt="image.alt" class="h-96 w-full m-0">
          <div class="flex justify-center">
            <div class="absolute bottom-0 text-center bg-gray-700 bg-opacity-75 py-4 px-2 text-white">
              <h3 class="text-xl sm:text-2xl md:text-3xl font-semibold mb-3">{{ trans(image,"name")}}</h3>
              <p class="text-base md:text-lg">{{ image.desc }}</p>
            </div>
          </div>
        </div>
      </Slide>
      <template #addons>
        <Pagination />
        <div class="text-white">
  
          <Navigation />
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import apiService from '@/services/apiService';
import imageUrl from '@/services/imageUrl';
import { onMounted, ref } from 'vue';
import { Carousel, Pagination, Slide, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const slides = ref([]);
const isLoading = ref(false);

const fetchSlides = async () => {
  isLoading.value = true;
  let res = await apiService.all('slides');
  slides.value = res.data.mydata;
  isLoading.value = false;
};
const trans = (str, col) => {

  const translations = Array.isArray(str.translations) ? str.translations : [str.translations];
if(translations){
  const translation = translations.find(
    translation => translation.locale === locale.value &&
    translation.column_name === col
  );
  if(translation) return translation.value;
}
return col === 'name' ? str.name : '';
}
onMounted(() => {
  fetchSlides();
});
</script>

<style scoped></style>@/services/imageUrl