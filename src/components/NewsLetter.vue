<template>
  <div class="relative isolate overflow-hidden bg-green-400 py-16 sm:py-24 lg:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
        <div class="max-w-xl lg:max-w-lg ">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl"> newsletter_title  </h2>
          <p class="mt-4 text-lg leading-8 text-gray-100 font-semibold"> newsletter_description  </p>
          <div class="mt-6 flex flex-col sm:flex-row max-w-full gap-x-4 gap-y-4">
            <label for="fullname" class="sr-only"> full_name  </label>
            <input id="fullname" v-model="fullName" name="fullname" type="text" required=""
              class="min-w-0 flex-auto rounded-md border-0 bg-gray-100 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              placeholder="Enter your full name" />
            <label for="email-address" class="sr-only"> email_address  </label>
            <input id="email-address" v-model="email" name="email" type="email" autocomplete="email" required=""
              class="min-w-0 flex-auto rounded-md border-0 bg-gray-100 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              placeholder="Enter your email" />
          </div>
          <p v-if="success" class="text-white bg-green-500 mt-4 text-center py-2 font-medium">
                {{ success }}
              </p>
          <div class="flex justify-between mt-4">
            <div class="flex justify-between w-8/12 px-2 rounded-sm" :class="{'bg-red-100' : error}">

              <p v-if="error" class="text-red-600 py-2 font-medium">
                {{ error }}
              </p>
              <button v-show="error" class="text-red-600" @click="error = ''">X</button>
            </div>
            <button type="button" @click="subscribe"
              class="flex-none rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" :class="{'bg-blue-300': submitting}">
              <p v-if="!submitting">Subscribe</p>
              <p v-else class="flex">
                <span>
                  <svg class="animate-spin h-5 w-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 014 12H0c0 6.627 5.373 12 12 12v-4c-2.589 0-4.96-1.012-6.746-2.709L6 15.291zM20 12c0-6.627-5.373-12-12-12v4c2.589 0 4.96 1.012 6.746 2.709L18 8.709A7.96 7.96 0 0120 12z">
                    </path>
                  </svg>
                </span>
                Subscibing...
              </p>
            </button>
          </div>

        </div>
        <dl class="hidden lg:grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
          <div class="flex flex-col items-start">
            <div class="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
              <CalendarDaysIcon class="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <dt class="mt-4 font-semibold text-white">Weekly articles</dt>
            <dd class="mt-2 leading-7 text-gray-100">Non laboris consequat cupidatat laborum magna. Eiusmod non irure
              cupidatat duis commodo amet.</dd>
          </div>
          <div class="flex flex-col items-start">
            <div class="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
              <HandRaisedIcon class="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <dt class="mt-4 font-semibold text-white">No spam</dt>
            <dd class="mt-2 leading-7 text-gray-100">Officia excepteur ullamco ut sint duis proident non adipisicing.
              Voluptate incididunt anim.</dd>
          </div>
        </dl>
      </div>
    </div>
    <div class="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
      <div class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
  </div>

</template>

<script setup>
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/vue/24/outline';
import { ref, onMounted } from 'vue';
import { useNewsLetterStore } from '@/store/newsletter';

const fullName = ref('');
const email = ref('');
const error = ref('');
const success = ref('');
const submitting = ref(false)

const subscription = useNewsLetterStore(); // Now, we have access to all our store's state and actions

const subscribe = async() => {
  if (!fullName.value || !email.value) {
    return error.value = 'Please fill out all the fields';
  }
  submitting.value = true;
  await subscription.addSubscriberAction({ name: fullName.value, email: email.value });
  submitting.value = false;
  success.value = 'Subscription sent successfully.'
  setTimeout(() => {
    success.value = ''
  }, 5000)
  fullName.value = '';
  email.value = '';
};

const fetchSubscribers = () => {
  subscription.fetchSubscribersAction();
};
onMounted(() => {
  fetchSubscribers();
});
</script>

<style scoped></style>