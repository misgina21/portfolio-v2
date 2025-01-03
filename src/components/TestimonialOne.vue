<template>
    <div class="pb-10">
        <div class="mx-6 sm:mx-16 py-5">    
            <div data-aos="fade-up" data-aos-duration="1000" class="mx-auto mt-5 md:max-w-5xl lg:max-w-7xl relative">
                <h3 class="mb-5 uppercase text-4xl font-semibold text-gray-300 dark:text-neutral-200">
                    What people say about me
                </h3>
            </div>
            <swiper data-aos="fade-up" data-aos-duration="1000" :slidesPerView="3" center-insufficient-slides :spaceBetween="30" :breakpoints="{
            300: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }" :pagination="{
            clickable: true
          }" :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }" :modules="[Pagination, Navigation]" class="mySwiper ml-3 items-center">
          
                <swiper-slide v-for="(testimonial, index) in testimonials" :key="index"
                    class="flex flex-col items-center mt-20 hover:-translate-y-2 hover:scale-105 duration-300 rounded-lg">
                    <div class="flex flex-col min-h-[350px] overflow-hidden rounded-lg mb-2">
                        <div class="flex flex-col justify-between flex-1 p-2 bg-gray-900 lg:py-4 lg:px-7">
                            <div class="flex flex-1 items-center bg-rded-200">
                                <blockquote class="flex-1 mt-2 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                        class="inline-block h-7 w-7 pr-2 text-gray-200" viewBox="0 0 24 24">
                                        <path
                                            d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                                    </svg>
                                    <span class="text-lg leading-relaxed text-gray-200 font-pj">{{testimonial.message}}”
                                    </span>
                                </blockquote>
                            </div>

                            <div class="flex items-center mt-8">
                                <img class="flex-shrink-0 object-cover rounded-full w-11 h-11"
                                    :src="testimonial.image" alt="" />
                                <div class="ml-4">
                                    <p class="text-base font-bold text-gray-200 font-pj">{{testimonial.title
                                        + ' ' + testimonial.name}}</p>
                                    <p class="mt-0.5 text-sm font-pj text-gray-200">{{
                                        testimonial.position}}&nbsp;<span v-if="testimonial.position">|</span>
                                        <span class="ps-2 text-sm sm:text-md font-medium text-blue-500">{{
                                            testimonial.institution}}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <!-- Customized next and previous buttons -->
                <div class="swiper-button-next">
                    <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                        viewBox="0 0 20 20">
                        <path
                            d="M9.707 2.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 11H3a1 1 0 0 1 0-2h11.586l-5.293-5.293a1 1 0 0 1 0-1.414z" />
                    </svg>
                </div>
                <div class="swiper-button-prev">
                    <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                        viewBox="0 0 20 20">
                        <path
                            d="M10.293 17.707a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 1.414L5.414 9H17a1 1 0 0 1 0 2H5.414l4.293 4.293a1 1 0 0 1 0 1.414z" />
                    </svg>
                </div>
            </swiper>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";

const testimonials = ref([
    {
        name: 'Yibrah Girmay',
        title: 'Mr.',
        institution: 'Pilasa Technologies',
        position: 'CEO',
        message: 'Misgina owns...'
    },
    {
        name: 'Asmelash Girmay',
        title: 'Mr.',
        institution: 'Ahaz Platforms',
        position: 'CEO',
        message: 'Misgina owns...'
    },
    {
        name: 'Teklay Gereziher',
        title: 'Mr.',
        institution: 'Ahaz Platforms',
        position: 'Sr. SWE',
        message: 'Misgina owns...'
    }
])



</script>

<style scoped>
/* The swiper style is overriding the tailwind classes. So create custom CSS styles here */
/* Hide the default arrow icons */
.swiper-button-next::after,
.swiper-button-prev::after {
    display: none;
}

.swiper-button-prev,
.swiper-button-next {
    position: absolute;
    top: 8%;
    width: 30px;
    height: 30px;
    background-color: hsl(220, 39%, 95%);
    color: #0a0a0a;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.swiper-button-prev {
    left: 80%;
}

.swiper-button-next {
    right: 5px;
}

/* Resize the arrow icons */
.swiper-button-next svg,
.swiper-button-prev svg {
    width: 16px;
    height: 16px;
}

/* Media Query for Mobile Devices */
@media (max-width: 480px) {
    .swiper-button-prev {
        left: 70%;
    }
}

/* Media Query for low resolution  Tablets, Ipads */
@media (min-width: 481px) and (max-width: 767px) {}

/* Media Query for Tablets Ipads portrait mode */
@media (min-width: 768px) and (max-width: 1024px) {

    .swiper-button-next,
    .swiper-button-prev {
        font-size: 50px;
        width: 50px;
        height: 50px;
    }

    .swiper-button-prev {
        left: 80%;
    }

    .swiper-button-next svg,
    .swiper-button-prev svg {
        width: 24px;
        height: 24px;
    }
}

/* Media Query for Laptops and Desktops */
@media (min-width: 1025px) and (max-width: 1280px) {

    .swiper-button-next,
    .swiper-button-prev {
        font-size: 50px;
        width: 50px;
        height: 50px;
    }

    .swiper-button-prev {
        left: 85%;
    }

    .swiper-button-next svg,
    .swiper-button-prev svg {
        width: 24px;
        /* Adjust width */
        height: 24px;
        /* Adjust height */
    }
}

/* Media Query for Large screens */
@media (min-width: 1281px) {
    .swiper-button-prev {
        left: 90%;
    }

    .swiper-button-next,
    .swiper-button-prev {
        font-size: 50px;
        width: 50px;
        height: 50px;
    }

    .swiper-button-next svg,
    .swiper-button-prev svg {
        width: 24px;
        height: 24px;
    }
}
</style>