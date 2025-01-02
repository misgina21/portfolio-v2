<template>
  <div>
    <footer class="bg-green-600 dark:bg-gray-200">
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <!-- <div class="md:flex md:justify-between"> -->
        <div class="flex flex-col md:flex-row gap-8">
          <div>
            <h2 class="mb-3 text-lg font-semibold text-white uppercase dark:text-white"> newsletter_title  </h2>
            <h3 class="text-gray-100 mb-6 font-medium"> newsletter_description  </h3>
            <p v-if="success" class="text-green-600 bg-gray-100 my-4 text-center p-2 font-medium rounded-sm">
              {{ success }}
            </p>
            <div>
              <div class="flex space-x-1">
                <input v-model="formData.email" type="email" autocomplete="email"
                  class="min-w-0 flex-auto rounded-md border-0 bg-gray-100 md:px-2 px-3.5 py-2 md:py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  placeholder="Enter your email" />
                <button type="button" @click="subscribe"
                  class="flex-none rounded-md bg-blue-500 md:px-2 px-3.5 py-2 md:py-1 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  :class="{'bg-blue-300': submitting}">
                  <p v-if="!submitting">Subscribe</p>
                  <p v-else class="flex">
                    <span>
                      <svg class="animate-spin h-5 w-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                        </circle>
                        <path class="opacity-75" fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 014 12H0c0 6.627 5.373 12 12 12v-4c-2.589 0-4.96-1.012-6.746-2.709L6 15.291zM20 12c0-6.627-5.373-12-12-12v4c2.589 0 4.96 1.012 6.746 2.709L18 8.709A7.96 7.96 0 0120 12z">
                        </path>
                      </svg>
                    </span>
                    Subscibing...
                  </p>
                </button>
              </div>
              <p v-for="error in $v.email.$errors" :key="error.$uid" class="text-red-500 text-sm italic mt-2">
              {{error.$message}}</p>
              <div class="hidden md:flex flex-col mt-10">
                <h2 class="mb-3 text-lg sm:text-xl font-semibold whitespace-nowrap text-white dark:text-white">
                   follow_us  
                </h2>
                <div class="flex sm:mt-0 items-center space-x-4">
                  <a href="#" @mouseenter="showFacebook = true" @mouseleave="showFacebook = false"
                    class="text-gray-100 hover:text-white dark:hover:text-white relative transform transitiion duration-200 hover:scale-150">
                    <svg class="h-5 w-5 sm:w-6 sm:h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                      fill="white" viewBox="0 0 24 24">
                      <path fill-rule="evenodd"
                        d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"
                        clip-rule="evenodd" />
                    </svg>
                    <span class="sr-only">Facebook page</span>
                    <div v-show="showFacebook"
                      class="absolute top-0 -mt-10 left-1/2 transform -translate-x-1/2 bg-gray-100 text-black text-xs font-semibold px-2 py-1 rounded">
                      Facebook</div>
                  </a>
                  <a href="#" @mouseenter="showTwitter = true" @mouseleave="showTwitter = false"
                    class="text-gray-200 hover:text-white dark:hover:text-white relative transform transitiion duration-200 hover:scale-150">
                    <svg class="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor" viewBox="0 0 21 16">
                      <path
                        d="M13.8 10.5 20.7 2h-3l-5.3 6.5L7.7 2H1l7.8 11-7.3 9h3l5.7-7 5.1 7H22l-8.2-11.5Zm-2.4 3-1.4-2-5.6-7.9h2.3l4.5 6.3 1.4 2 6 8.5h-2.3l-4.9-7Z" />
                    </svg>
                    <span class="sr-only">Twitter page</span>
                    <div v-show="showTwitter"
                      class="absolute top-0 -mt-10 left-1/2 transform -translate-x-1/2 bg-gray-100 text-black text-xs font-semibold px-2 py-1 rounded">
                      Twitter</div>
                  </a>
                  <a href="#" @mouseenter="showYouTube = true" @mouseleave="showYouTube = false"
                    class="text-gray-200 hover:text-white pt-1 dark:hover:text-white relative transform transitiion duration-200 hover:scale-150">
                    <svg class="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor" viewBox="0 0 20 17">
                      <path fill-rule="evenodd"
                        d="M19.7 3.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.84c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.84A4.225 4.225 0 0 0 .3 3.038a30.148 30.148 0 0 0-.2 3.206v1.5c.01 1.071.076 2.142.2 3.206.094.712.363 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.15 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965c.124-1.064.19-2.135.2-3.206V6.243a30.672 30.672 0 0 0-.202-3.206ZM8.008 9.59V3.97l5.4 2.819-5.4 2.8Z"
                        clip-rule="evenodd" />
                    </svg>
                    <span class="sr-only">YouTube page</span>
                    <div v-show="showYouTube"
                      class="absolute top-0 -mt-10 left-1/2 transform -translate-x-1/2 bg-gray-100 text-black text-xs font-semibold px-2 py-1 rounded">
                      YouTube</div>
                  </a>
                  <a href="#" @mouseenter="showWhatsApp = true" @mouseleave="showWhatsApp = false"
                    class="text-gray-200 hover:text-white pt-1 dark:hover:text-white relative transform transitiion duration-200 hover:scale-150">
                    <svg class="w-4 h-4 sm:h-5 sm:w-5" viewBox="0 0 16 17" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M13.3945 2.66016C14.1328 3.43359 14.6953 4.27734 15.1172 5.22656C15.5391 6.17578 15.75 7.16016 15.75 8.17969C15.75 9.58594 15.3633 10.8867 14.6602 12.082C13.957 13.2773 12.9727 14.2266 11.7773 14.9297C10.582 15.6328 9.28125 15.9844 7.875 15.9844C6.53906 15.9844 5.27344 15.668 4.14844 15.0352L0 16.125L1.125 12.082C0.421875 10.8867 0.0703125 9.58594 0.0703125 8.17969C0.0703125 6.77344 0.421875 5.47266 1.125 4.27734C1.82812 3.08203 2.77734 2.13281 3.97266 1.42969C5.16797 0.726562 6.46875 0.375 7.875 0.375C8.89453 0.375 9.87891 0.585938 10.8281 0.972656C11.7773 1.39453 12.6211 1.95703 13.3945 2.66016ZM7.875 14.6836C9.03516 14.6836 10.125 14.4023 11.1445 13.8047C12.1289 13.2422 12.9375 12.4336 13.5352 11.4492C14.1328 10.4648 14.4492 9.375 14.4492 8.17969C14.4492 7.33594 14.2734 6.52734 13.9219 5.71875C13.5703 4.94531 13.0781 4.24219 12.4453 3.60938C11.8125 2.97656 11.1094 2.51953 10.3359 2.16797C9.5625 1.85156 8.71875 1.67578 7.875 1.67578C6.67969 1.67578 5.58984 1.99219 4.60547 2.55469C3.62109 3.15234 2.8125 3.96094 2.25 4.94531C1.65234 5.92969 1.37109 7.01953 1.37109 8.17969C1.37109 9.44531 1.6875 10.5703 2.39062 11.625L2.53125 11.8711L1.86328 14.2617L4.32422 13.6289L4.57031 13.7695C5.55469 14.4023 6.67969 14.6836 7.875 14.6836ZM11.4258 9.79688L11.5312 9.86719C11.6719 9.9375 11.7773 10.0078 11.8125 10.043C11.8125 10.1133 11.8125 10.2188 11.8125 10.3945C11.8125 10.6055 11.7422 10.7812 11.6719 10.9922C11.6016 11.2031 11.3906 11.3789 11.1094 11.5898C10.8281 11.8008 10.582 11.9062 10.3711 11.9062C10.0195 11.9766 9.70312 11.9766 9.42188 11.9062C9.07031 11.8359 8.57812 11.6953 8.01562 11.4141C6.82031 10.9219 5.73047 9.9375 4.74609 8.53125L4.67578 8.46094C4.14844 7.75781 3.90234 7.08984 3.90234 6.45703C3.90234 5.85938 4.11328 5.33203 4.53516 4.875L4.57031 4.83984C4.71094 4.69922 4.88672 4.59375 5.09766 4.59375H5.51953C5.58984 4.59375 5.66016 4.62891 5.73047 4.66406C5.80078 4.69922 5.83594 4.76953 5.90625 4.91016L6.50391 6.35156C6.57422 6.49219 6.57422 6.63281 6.53906 6.70312C6.39844 6.94922 6.25781 7.16016 6.08203 7.33594C5.97656 7.44141 5.90625 7.51172 5.90625 7.58203C5.87109 7.65234 5.90625 7.6875 5.97656 7.75781C6.29297 8.39062 6.67969 8.84766 7.13672 9.19922C7.45312 9.48047 7.94531 9.76172 8.61328 10.0781C8.78906 10.1836 8.92969 10.1836 9.03516 10.043C9.31641 9.69141 9.52734 9.44531 9.66797 9.26953C9.70312 9.19922 9.77344 9.12891 9.84375 9.12891C9.91406 9.12891 9.98438 9.16406 10.0898 9.16406C10.2656 9.23438 10.7227 9.44531 11.4258 9.79688Z"
                        fill="#fff"></path>
                    </svg>
                    <span class="sr-only">WhatsApp page</span>
                    <div v-show="showWhatsApp"
                      class="absolute top-0 -mt-10 left-1/2 transform -translate-x-1/2 bg-gray-100 text-black text-xs font-semibold px-2 py-1 rounded">
                      WhatsApp</div>
                  </a>
                  <a href="#" @mouseenter="showTelegram = true" @mouseleave="showTelegram = false"
                    class="text-gray-200 hover:text-white pt-1 dark:hover:text-white relative transform transitiion duration-200 hover:scale-150">
                    <svg class="w-6 h-6 sm:w-8 sm:h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor" viewBox="0 0 32 32">
                      <path fill-rule="evenodd"
                        d="M25.515 6.896 6.027 14.41c-1.33.534-1.322 1.276-.243 1.606l5 1.56 1.72 5.66c.226.625.115.873.77.873.506 0 .73-.235 1.012-.51l2.43-2.363 5.056 3.734c.93.514 1.602.25 1.834-.863l3.32-15.638c.338-1.363-.52-1.98-1.41-1.577z"
                        clip-rule="evenodd" />
                    </svg>
                    <span class="sr-only">Telegram page</span>
                    <div v-show="showTelegram"
                      class="absolute top-0 -mt-10 left-1/2 transform -translate-x-1/2 bg-gray-100 text-black text-xs font-semibold px-2 py-1 rounded">
                      Telegram</div>
                  </a>
                </div>
              </div>
            </div>
            
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 md:space-x-4">
            <div>
              <h2 class="mb-3 text-lg font-semibold text-white uppercase dark:text-white"> service  </h2>
              <!-- <ul class="text-gray-100 dark:text-gray-400 font-medium">
                <li v-for="(service, index) in serviceStore.servicesOnFooter" :key="index"
                  class="mb-3 flex items-center space-x-3">
                  <svg viewBox="0 0 24 24" fill="none" class="w-5 h-5" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14 7H16C18.7614 7 21 9.23858 21 12C21 14.7614 18.7614 17 16 17H14M10 7H8C5.23858 7 3 9.23858 3 12C3 14.7614 5.23858 17 8 17H10M8 12H16" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>

                  <RouterLink :to="{name: 'ServiceDetail', params: {id: service.id}}"
                     class="hover:underline" >{{ service.name }}</RouterLink>
                </li>
              </ul> -->
            </div>
            <div>
              <h2 class="mb-3 text-lg font-semibold text-white uppercase dark:text-white"> product  </h2>
              <!-- <ul class="text-gray-100 dark:text-gray-400 font-medium">
                <li v-for="(product, index) in productStore.productsOnFooter" :key="index" class="mb-3 flex items-center space-x-3">
                  <svg viewBox="0 0 24 24" fill="none" class="w-5 h-5" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14 7H16C18.7614 7 21 9.23858 21 12C21 14.7614 18.7614 17 16 17H14M10 7H8C5.23858 7 3 9.23858 3 12C3 14.7614 5.23858 17 8 17H10M8 12H16" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                  <RouterLink :to="{name: 'ProductDetail', params: {slug: product.slug}}"
                     class="hover:underline" >{{ product.name }}</RouterLink>
                </li>
              </ul> -->
            </div>
            <div>
              <h2 class="mb-3 text-lg font-semibold text-white uppercase dark:text-white"> news_link  </h2>
              <!-- <ul class="text-gray-100 dark:text-gray-400 font-medium">
                <li v-for="(news, index) in newsStore.newsOnFooter" :key="index" class="mb-3 flex items-center space-x-3">
                  <svg viewBox="0 0 24 24" fill="none" class="w-10 h-10" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14 7H16C18.7614 7 21 9.23858 21 12C21 14.7614 18.7614 17 16 17H14M10 7H8C5.23858 7 3 9.23858 3 12C3 14.7614 5.23858 17 8 17H10M8 12H16" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                  <RouterLink :to="getNewsDetailRoute(news)" class="hover:underline" >
                    {{ trans(news, 'title') }}</RouterLink>
                </li>
              </ul> -->
            </div>
          </div>
          <div class="flex flex-col md:hidden">
            <h2 class="mb-3 text-lg sm:text-xl font-semibold whitespace-nowrap text-white dark:text-white">
               follow_us  
            </h2>
            <div class="flex sm:mt-0 items-center space-x-4">
              <a href="#" @mouseenter="showFacebook = true" @mouseleave="showFacebook = false"
                class="text-gray-100 hover:text-white dark:hover:text-white relative transform transitiion duration-200 hover:scale-150">
                <svg class="h-5 w-5 sm:w-6 sm:h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white"
                  viewBox="0 0 24 24">
                  <path fill-rule="evenodd"
                    d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"
                    clip-rule="evenodd" />
                </svg>
                <span class="sr-only">Facebook page</span>
                <div v-show="showFacebook"
                  class="absolute top-0 -mt-10 left-1/2 transform -translate-x-1/2 bg-gray-100 text-black text-xs font-semibold px-2 py-1 rounded">
                  Facebook</div>
              </a>
              <a href="#" @mouseenter="showTwitter = true" @mouseleave="showTwitter = false"
                class="text-gray-200 hover:text-white dark:hover:text-white relative transform transitiion duration-200 hover:scale-150">
                <svg class="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor" viewBox="0 0 21 16">
                  <path
                    d="M13.8 10.5 20.7 2h-3l-5.3 6.5L7.7 2H1l7.8 11-7.3 9h3l5.7-7 5.1 7H22l-8.2-11.5Zm-2.4 3-1.4-2-5.6-7.9h2.3l4.5 6.3 1.4 2 6 8.5h-2.3l-4.9-7Z" />
                </svg>
                <span class="sr-only">Twitter page</span>
                <div v-show="showTwitter"
                  class="absolute top-0 -mt-10 left-1/2 transform -translate-x-1/2 bg-gray-100 text-black text-xs font-semibold px-2 py-1 rounded">
                  Twitter</div>
              </a>
              <a href="#" @mouseenter="showYouTube = true" @mouseleave="showYouTube = false"
                class="text-gray-200 hover:text-white pt-1 dark:hover:text-white relative transform transitiion duration-200 hover:scale-150">
                <svg class="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor" viewBox="0 0 20 17">
                  <path fill-rule="evenodd"
                    d="M19.7 3.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.84c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.84A4.225 4.225 0 0 0 .3 3.038a30.148 30.148 0 0 0-.2 3.206v1.5c.01 1.071.076 2.142.2 3.206.094.712.363 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.15 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965c.124-1.064.19-2.135.2-3.206V6.243a30.672 30.672 0 0 0-.202-3.206ZM8.008 9.59V3.97l5.4 2.819-5.4 2.8Z"
                    clip-rule="evenodd" />
                </svg>
                <span class="sr-only">YouTube page</span>
                <div v-show="showYouTube"
                  class="absolute top-0 -mt-10 left-1/2 transform -translate-x-1/2 bg-gray-100 text-black text-xs font-semibold px-2 py-1 rounded">
                  YouTube</div>
              </a>
              <a href="#" @mouseenter="showWhatsApp = true" @mouseleave="showWhatsApp = false"
                class="text-gray-200 hover:text-white pt-1 dark:hover:text-white relative transform transitiion duration-200 hover:scale-150">
                <svg class="w-4 h-4 sm:h-5 sm:w-5" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M13.3945 2.66016C14.1328 3.43359 14.6953 4.27734 15.1172 5.22656C15.5391 6.17578 15.75 7.16016 15.75 8.17969C15.75 9.58594 15.3633 10.8867 14.6602 12.082C13.957 13.2773 12.9727 14.2266 11.7773 14.9297C10.582 15.6328 9.28125 15.9844 7.875 15.9844C6.53906 15.9844 5.27344 15.668 4.14844 15.0352L0 16.125L1.125 12.082C0.421875 10.8867 0.0703125 9.58594 0.0703125 8.17969C0.0703125 6.77344 0.421875 5.47266 1.125 4.27734C1.82812 3.08203 2.77734 2.13281 3.97266 1.42969C5.16797 0.726562 6.46875 0.375 7.875 0.375C8.89453 0.375 9.87891 0.585938 10.8281 0.972656C11.7773 1.39453 12.6211 1.95703 13.3945 2.66016ZM7.875 14.6836C9.03516 14.6836 10.125 14.4023 11.1445 13.8047C12.1289 13.2422 12.9375 12.4336 13.5352 11.4492C14.1328 10.4648 14.4492 9.375 14.4492 8.17969C14.4492 7.33594 14.2734 6.52734 13.9219 5.71875C13.5703 4.94531 13.0781 4.24219 12.4453 3.60938C11.8125 2.97656 11.1094 2.51953 10.3359 2.16797C9.5625 1.85156 8.71875 1.67578 7.875 1.67578C6.67969 1.67578 5.58984 1.99219 4.60547 2.55469C3.62109 3.15234 2.8125 3.96094 2.25 4.94531C1.65234 5.92969 1.37109 7.01953 1.37109 8.17969C1.37109 9.44531 1.6875 10.5703 2.39062 11.625L2.53125 11.8711L1.86328 14.2617L4.32422 13.6289L4.57031 13.7695C5.55469 14.4023 6.67969 14.6836 7.875 14.6836ZM11.4258 9.79688L11.5312 9.86719C11.6719 9.9375 11.7773 10.0078 11.8125 10.043C11.8125 10.1133 11.8125 10.2188 11.8125 10.3945C11.8125 10.6055 11.7422 10.7812 11.6719 10.9922C11.6016 11.2031 11.3906 11.3789 11.1094 11.5898C10.8281 11.8008 10.582 11.9062 10.3711 11.9062C10.0195 11.9766 9.70312 11.9766 9.42188 11.9062C9.07031 11.8359 8.57812 11.6953 8.01562 11.4141C6.82031 10.9219 5.73047 9.9375 4.74609 8.53125L4.67578 8.46094C4.14844 7.75781 3.90234 7.08984 3.90234 6.45703C3.90234 5.85938 4.11328 5.33203 4.53516 4.875L4.57031 4.83984C4.71094 4.69922 4.88672 4.59375 5.09766 4.59375H5.51953C5.58984 4.59375 5.66016 4.62891 5.73047 4.66406C5.80078 4.69922 5.83594 4.76953 5.90625 4.91016L6.50391 6.35156C6.57422 6.49219 6.57422 6.63281 6.53906 6.70312C6.39844 6.94922 6.25781 7.16016 6.08203 7.33594C5.97656 7.44141 5.90625 7.51172 5.90625 7.58203C5.87109 7.65234 5.90625 7.6875 5.97656 7.75781C6.29297 8.39062 6.67969 8.84766 7.13672 9.19922C7.45312 9.48047 7.94531 9.76172 8.61328 10.0781C8.78906 10.1836 8.92969 10.1836 9.03516 10.043C9.31641 9.69141 9.52734 9.44531 9.66797 9.26953C9.70312 9.19922 9.77344 9.12891 9.84375 9.12891C9.91406 9.12891 9.98438 9.16406 10.0898 9.16406C10.2656 9.23438 10.7227 9.44531 11.4258 9.79688Z"
                    fill="#fff"></path>
                </svg>
                <span class="sr-only">WhatsApp page</span>
                <div v-show="showWhatsApp"
                  class="absolute top-0 -mt-10 left-1/2 transform -translate-x-1/2 bg-gray-100 text-black text-xs font-semibold px-2 py-1 rounded">
                  WhatsApp</div>
              </a>
              <a href="#" @mouseenter="showTelegram = true" @mouseleave="showTelegram = false"
                class="text-gray-200 hover:text-white pt-1 dark:hover:text-white relative transform transitiion duration-200 hover:scale-150">
                <svg class="w-6 h-6 sm:w-8 sm:h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor" viewBox="0 0 32 32">
                  <path fill-rule="evenodd"
                    d="M25.515 6.896 6.027 14.41c-1.33.534-1.322 1.276-.243 1.606l5 1.56 1.72 5.66c.226.625.115.873.77.873.506 0 .73-.235 1.012-.51l2.43-2.363 5.056 3.734c.93.514 1.602.25 1.834-.863l3.32-15.638c.338-1.363-.52-1.98-1.41-1.577z"
                    clip-rule="evenodd" />
                </svg>
                <span class="sr-only">Telegram page</span>
                <div v-show="showTelegram"
                  class="absolute top-0 -mt-10 left-1/2 transform -translate-x-1/2 bg-gray-100 text-black text-xs font-semibold px-2 py-1 rounded">
                  Telegram</div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between sm:mx-20 pb-6">
        <span class="text-sm text-white text-center dark:text-gray-400">©{{ currentYear }} Olive Pharmaceutical
          Industry. All Rights Reserved.
        </span>
        <p class="text-white text-center">Developed by: <a href="https://pilasatech.net/" target="_blank"
            class="font-medium text-gray-200 hover:underline">Pilasa Technologies</a></p>
      </div>
      <!-- </div> -->
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useNewsLetterStore } from '@/store/newsletter';
import { useServiceStore } from '@/store/services';
import { useProductStore } from '@/store/products';
import { useNewsStore } from '@/store/news';
import { useVuelidate } from '@vuelidate/core';
import { required, email, helpers } from '@vuelidate/validators';
import { RouterLink } from 'vue-router';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const currentYear = new Date().getFullYear();
const showFacebook = ref(false);
const showTwitter = ref(false);
const showYouTube = ref(false);
const showWhatsApp = ref(false);
const showTelegram = ref(false);

const formData = ref({
  email: ''
});
const success = ref('');
const submitting = ref(false);

const subscriptionStore = useNewsLetterStore();
const serviceStore = useServiceStore();
const productStore = useProductStore();
const newsStore = useNewsStore();

const trans = (str, col) => {

const translations = Array.isArray(str.translations) ? str.translations : [str.translations];
if(translations){
const translation = translations.find(
  translation => translation.locale === locale.value &&
  translation.column_name === col
);
if(translation) return translation.value;
}
return col === 'name' ? str.name : col === 'title' ? str.title : '';
}

const rules = computed(() => {
  return {
    email: {
      required: helpers.withMessage('Email is required.', required),
      email: helpers.withMessage('Invalid email format.', email)
    }
  };
});

// Vuelidate setup
const $v = useVuelidate(rules, formData.value);

const subscribe = async () => {
  const validationResult = await $v.value.$validate();
  if (validationResult) {
    submitting.value = true;
    await subscriptionStore.addSubscriberAction({ email: formData.value });
    submitting.value = false;
    success.value = 'Subscription sent successfully.';
    setTimeout(() => {
      success.value = '';
    }, 5000);
    formData.value = '';
  }
};

// Helper function to get category slug from category ID
const getCategorySlug = (categoryId) => {
  const category = newsStore.categories.find(cat => cat.id === categoryId);
  return category ? category.slug : '';
};

const fetchFeaturedServices = async () => {
  await serviceStore.fetchServicesAction();
};
const fetchFeaturedProducts = async () => {
  await productStore.fetchProductsAction();
};
const fetchFeaturedNews = async () => {
  await newsStore.fetchNewsAction();
};
const fetchOneService = async (id) => {
  await serviceStore.fetchOneServiceAction(id);
};
const fetchOneProduct = async (id) => {
  await productStore.fetchOneProductAction(id);
};
const fetchOneNews = async (id) => {
  await newsStore.fetchOneNewsAction(id);
};

const getNewsDetailRoute = (newsItem) => {
  const category = newsStore.categories.find(cat => cat.id === newsItem.category_id);
  const categorySlug = category ? category.slug : 'unknown-category';
  return {
    name: 'NewsDetail',
    params: {
      categorySlug: categorySlug,
      postSlug: newsItem.slug
    }
  };
};
onMounted(() => {
  fetchFeaturedServices();
  fetchFeaturedProducts();
  fetchFeaturedNews();
  // fetchOneService();
  // fetchOneProduct();
  // fetchOneNews();
});

</script>

<style scoped></style>