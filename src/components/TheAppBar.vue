<template>
  <div class="">
    <!-- Mobile menu -->
    <TransitionRoot as="template" :show="open" class="z-50">
      <Dialog as="div" class="relative z-40 lg:hidden" @close="open = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0"
          enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100"
          leave-to="opacity-0">
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 z-50 flex">
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full" enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0"
            leave-to="-translate-x-full">
            <DialogPanel style="background-color: #231f1e;"
              class="relative flex w-full max-w-xs flex-col overflow-y-auto pb-12 shadow-xl rounded-r-3xl border-r-4">
              <div class="flex justify-end px-4 pb-2 pt-5">
                <button type="button"
                  class="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-100"
                  @click="open = false">
                  <span class="absolute -inset-0.5" />
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div class="h-screen">
                <div class="my-4 flex h-5/6 w-72 flex-col rounded-tr-2xl rounded-br-2xl">
                  <ul class=" flex flex-col">
                    <li class="relative transition">
                      <a  @click.prevent="scrollToSection('home')"
                        class="relative mx-2 flex cursor-pointer items-center py-3 pl-5"
                        :class="[$route.name === 'Home' ? 'bg-gray-200 text-gray-800' : 'text-gray-200']">
                        <span class="mr-5 flex w-5"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                              d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg></span>
                        Home
                      </a>
                    </li>
                    <li class="relative transition">
                      <a  @click.prevent="scrollToSection('services')"
                        class="relative mx-2 flex cursor-pointer items-center py-3 pl-5"
                        :class="[$route.name === 'Home' ? 'bg-gray-200 text-gray-800' : 'text-gray-200']">
                        <span class="mr-5 flex w-5"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                              d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg></span>
                        Services
                      </a>
                    </li>
                    <li class="relative transition">
                      <a  @click.prevent="scrollToSection('portfolio')"
                        class="relative mx-2 flex cursor-pointer items-center py-3 pl-5"
                        :class="[$route.name === 'Home' ? 'bg-gray-200 text-gray-800' : 'text-gray-200']">
                        <span class="mr-5 flex w-5"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                              d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg></span>
                        Projects
                      </a>
                    </li>
                    <li class="relative transition">
                      <a  @click.prevent="scrollToSection('experience')"
                        class="relative mx-2 flex cursor-pointer items-center py-3 pl-5"
                        :class="[$route.name === 'Home' ? 'bg-gray-200 text-gray-800' : 'text-gray-200']">
                        <span class="mr-5 flex w-5"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                              d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg></span>
                        Experience
                      </a>
                    </li>
                    <li class="relative transition">
                      <a  @click.prevent="scrollToSection('skills')"
                        class="relative mx-2 flex cursor-pointer items-center py-3 pl-5"
                        :class="[$route.name === 'Home' ? 'bg-gray-200 text-gray-800' : 'text-gray-200']">
                        <span class="mr-5 flex w-5"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                              d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg></span>
                        Skills
                      </a>
                    </li>
                    <li class="relative transition">
                      <a  @click.prevent="scrollToSection('testimonial')"
                        class="relative mx-2 flex cursor-pointer items-center py-3 pl-5"
                        :class="[$route.name === 'Home' ? 'bg-gray-200 text-gray-800' : 'text-gray-200']">
                        <span class="mr-5 flex w-5"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                              d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg></span>
                        Testimonial
                      </a>
                    </li>
                    <li class="relative transition">
                      <a  @click.prevent="scrollToSection('contact')"
                        class="relative mx-2 flex cursor-pointer items-center py-3 pl-5"
                        :class="[$route.name === 'Home' ? 'bg-gray-200 text-gray-800' : 'text-gray-200']">
                        <span class="mr-5 flex w-5"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                              d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg></span>
                        Contact Me
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>
    <!-- Tablet and Laptop Screens -->
    <header class="relative bg-grasy-100 z-50">
      <nav id="navbar" aria-label="Top"
        :class="{ 'fixed top-0 left-0 right-0 bg-gray-900 text-gray-800': scrollHeight >= 48 }" class="mx-0 w-full">
        <div class="flex px-2 h-20 md:h-24 items-center">
          <!-- Menu -->
          <button type="button" class="relative rounded-md px-1 text-white lg:hidden" @click="open = true">
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
          <!-- Logo -->
          <div class="">
            <RouterLink :to="{name: 'Home'}">
              <div class="ml-1 sm:ml-4 flex items-center lg:ml-0">
                <span class="sr-only">Your Company</span>
                <!-- <img v-if="logo" class="hidden md:block h-14 w-14 lg:h-16 lg:w-16 xl:h-20 xl:w-20 rounded-full"
                      :src="imageUrl(logo)" alt="Company Logo" /> -->
                <h1 class="sm:ml-3 font-semibold text-xl md:text-2xl lg:text-xl xl:text-2xl text-gray-100 lg:ml-16">MG
                </h1>
              </div>
            </RouterLink>
          </div>
          <!-- Navbar Links -->

          <div class="ml-auto flex items-center flex-wrap lg:flex-nowrap md:mr-40 justify-end">
            <div class="hidden lg:flex lg:items-center lg:justify-end lg:space-x-1 lg:flex-wrap text-gray-100">
              <p @click.prevent="scrollToSection('home')" class="text-lg font-normal leading-6 pr-6 cursor-pointer"> Home </p>
              <p @click.prevent="scrollToSection('services')" class="text-lg font-normal leading-6 pr-6 cursor-pointer"> Services </p>
              <p @click.prevent="scrollToSection('portfolio')" class="text-lg font-normal leading-6 pr-6 cursor-pointer">Projects</p>
              <p @click.prevent="scrollToSection('experience')" class="text-lg font-normal leading-6 pr-6 cursor-pointer"> Experience </p>
              <p @click.prevent="scrollToSection('skills')" class="text-lg font-normal leading-6 pr-6 cursor-pointer"> Skills </p>
              <p @click.prevent="scrollToSection('contact')" class="text-lg font-normal leading-6 pr-6 cursor-pointer">Contact Me</p>
            </div>
            <button type="button"
              class="sm:hidden flex justify-center bg-transpdarent text-white text-base py-2 border rounded-lg hover:bg-gray-800 transition duration-300 w-32">
              Download CV
            </button>
          </div>
        </div>
        <!-- Scroll top button -->
        <button v-show="showButton" @click="scrollTop"
          class="fixed bottom-12 right-6 bg-white hover:bg-blue-600 text-black p-2 rounded-full shadow opacity-90">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </nav>
    </header>
    
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, onBeforeUnmount } from 'vue';
import { RouterLink } from 'vue-router';
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue';
import {
  Bars3Icon, XMarkIcon
} from '@heroicons/vue/24/outline';

const open = ref(false);

const scrollHeight = ref(0); // Add scrollHeight variable
const scrollY = ref(window.scrollY);
const showButton = ref(false);
const logo = ref('');


const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  console.log('section: ', section);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    open.value = false
  }
};
const handleScroll1 = () => {
  scrollY.value = window.scrollY;
  showButton.value = scrollY.value > 100; // Change 200 to your desired scroll position
};


onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll1);
});


// Don't forget to remove the event listener when component is unmounted
onUnmounted(() => {
  // document.removeEventListener('click', closeModal);
});

const handleScroll = () => {
  scrollHeight.value = window.scrollY; // Update scrollHeight on scroll
};


onMounted(() => {
  window.addEventListener('scroll', handleScroll); // Add scroll event listener
  // document.addEventListener('click', closeModal);
  window.addEventListener('scroll', handleScroll1);
});

</script>