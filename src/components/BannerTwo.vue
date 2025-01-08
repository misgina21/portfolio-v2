<template>
  <div
    class="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-blsack before:opacitsy-50 before:z-1d0">
    <!-- <img src="@/assets/default-avatar.png" alt="Banner Image" class="absolute inset-0 w-full h-full object-cover" /> -->

    <div
      class="min-h-[550px] relative h-full max-w-4xl mx-auto flex flex-col justify-center items-center text-gray-300 p-6"
      id="home">
      <div data-aos="fade-right" data-aos-duration="1000" class="bg-rded-500 flex flex-col md:flex-row w-full">
        <div class="md:hidden flex justify-center mb-4">
          <img src="@/assets/misgina.jpg" alt="Banner Image"
            class="rounded-full h-64 w-64 md:h-96 md:w-96 border-8 border-blue-200 shadow-xl mt-4" />
        </div>
        <div class="md:w-1/2 flex flex-col justify-center">
          <div class="border-rd-4 w-fidt pr-4 mb-8 flex flex-col itedms-center">
            <h2 class="md:text-2xl text-2xl font-light text-center md:text-left">Hello, I'm</h2>
            <h2 class="md:text-5xl text-2xl font-normal text-center md:text-left uppercase">Misgina Gebretsadik</h2>
          </div>
          <div class="flex justify-center md:justify-start text-center md:text-left">
            <div class="md:ml-2 border-l-4 pl-4">
              <h2 class="md:text-2xl text-lg font-light"><span class="md:text-4xl text-xl font-normal">Fullstack Web
                  Developer</span></h2>
              <p class="md:text-2xl text-lg font-light">I develop web applications.</p>
            </div>
          </div>
          <div class="flex flex-col pt-6 mt-4 sm:flex-row justify-center lg:hidden">
            <div class="flex items-center justify-center">
              <p class=" text-lg font-semibold uppercase text-grey-20">
                Connect with me
              </p>
              <div class="hidden sm:block">
                <i class="bx bx-chevron-right text-2xl text-gray-300"></i>
              </div>
            </div>
            <div class="flex items-center justify-center pt-5 pl-2 sm:pt-0">
              <a href="https://www.linkedin.com/in/misgina-gebretsadik-195984195/" target="_blank" class="pl-4">
                <i class="bx bxl-linkedin text-2xl text-gray-50 hover:text-yellow-400"></i>
              </a>
              <a href="https://github.com/misgina21" target="_blank" class="pl-4">
                <i class="bx bxl-github text-2xl text-gray-50 hover:text-yellow-400"></i>
              </a>
              <a href="https://x.com/misginaGeb107" target="_blank" class="pl-4">
                <i class="bx bxl-twitter text-2xl text-gray-50 hover:text-yellow-400"></i>
              </a>
              <a href="https://www.instagram.com/_misgie_/" target="_blank" class="pl-4">
                <i class="bx bxl-instagram text-2xl text-gray-50 hover:text-yellow-400"></i>
              </a>
            </div>
          </div>
          <!-- <button type="button"
            class="hidden sm:flex mt-12 bg-transparent text-base py-3 px-6 border border-white rounded-lg hover:text-white transition duration-300 w-40">
            Download CV
          </button> -->
        </div>
        <div class="hidden md:flex pl-6">
          <img src="@/assets/misgina.jpg" alt="Banner Image"
            class="rounded-full h-48 w-48 md:h-96 md:w-96 border-4 border-gray-100 shadow-xl" />
        </div>

      </div>
    </div>
  </div>
  <div class="mx-10">
    <div class="bg-grey-50  md:px-16" id="about">
      <div class="container flex flex-col items-cdenter py-16 md:py-20 lg:flex-row">
        <div class="w-full text-cendter lg:text-left">
          <h2 data-aos="fade-up" data-aos-duration="1000"
            class="text-4xl font-semibold uppercase text-gray-300 sm:text-5xl lg:text-4xl">
            Who am I?
          </h2>
          <!-- <h4 data-aos="fade-up" data-aos-duration="1000" class="pt-6 text-2xl lg:text-3xl">
            Here is Misgina, a Web Developer!
          </h4> -->
          <p data-aos="fade-up" data-aos-duration="1000" class="pt-6 leading-relaxed">
            I am a deaf, able to speak, software developer who is passionate about developing resposnsive and intuitive
            web applications, websites and mobile applications. I can serve as a frontend, backend or fullstack
            developer. Regarding my communication, I am able to communicate through fast and excellent keyboard typing
            and sometimes lip reading.
          </p>
          <div data-aos="fade-up" data-aos-duration="1000"
            class="hidden lg:flex flex-col pt-6 sm:flex-row lg:justify-start">
            <div class="flex items-center justify-start">
              <p class="text-lg font-semibold uppercase text-grey-20">
                Connect with me
              </p>
              <div class="hidden sm:block">
                <i class="bx bx-chevron-right text-2xl text-gray-300"></i>
              </div>
            </div>
            <div class="flex items-center pt-5 pl-2 sm:justify-start sm:pt-0">
              <a href="https://www.linkedin.com/in/misgina-gebretsadik-195984195/" target="_blank" class="pl-4">
                <i class="bx bxl-linkedin text-2xl text-gray-300 hover:text-yellow-400"></i>
              </a>
              <a href="https://github.com/misgina21" target="_blank" class="pl-4">
                <i class="bx bxl-github text-2xl text-gray-300 hover:text-yellow-400"></i>
              </a>
              <a href="https://x.com/misginaGeb107" target="_blank" class="pl-4">
                <i class="bx bxl-twitter text-2xl text-gray-300 hover:text-yellow-400"></i>
              </a>
              <a href="https://www.instagram.com/_misgie_/" target="_blank" class="pl-4">
                <i class="bx bxl-instagram text-2xl text-gray-300 hover:text-yellow-400"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container md:px-16" id="services">
      <h2 data-aos="fade-up" data-aos-duration="1000"
        class="text-4xl font-semibold text-gray-300 sm:text-5xl lg:text-4xl my-10">
        Services I provide
      </h2>
      <!-- <h3 class="pt-6 text-xl font-medium sm:text-2xl lg:text-3xl">
        These are the services I offer
      </h3> -->

      <div data-aos="fade-up" data-aos-durtion="2000"
        class="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
        <div data-aos="fade-up" data-aos-duration="2000" class="group rounded border  py-12 shadow">
          <div class="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div class="block">
              <img src="@/assets/dashboard.png" class="text-white" alt="development icon" />
            </div>
          </div>
          <div class="text-center">
            <h3 class="pt-8 text-lg font-semibold text-gray-300 lg:text-xl">
              Web Application Development
            </h3>
            <p class="text-grey pt-4 text-sm group-hover:text-white md:text-base px-2">
              Building scalable and dynamic web-based applications to help solve real-world business needs and problems.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000" class="group rounded border  py-12 shadow">
          <div class="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div class="block">
              <img src="@/assets/fullstack.png" alt="development icon" />
            </div>
          </div>
          <div class="text-center">
            <h3 class="pt-8 text-lg font-semibold text-gray-300 lg:text-xl">
              Website Development
            </h3>
            <p class="text-grey pt-4 text-sm group-hover:text-white md:text-base px-2">
              Creating responsive and visually appealing websites that help you advertise your products and services.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" class="group rounded border  py-12 shadow">
          <div class="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div class="block">
              <img src="@/assets/deploy3.png" alt="content marketing icon" />
            </div>
          </div>
          <div class="text-center">
            <h3 class="pt-8 text-lg font-semibold text-gray-300 lg:text-xl">
              Deployment Service
            </h3>
            <p class="text-grey pt-4 text-sm group-hover:text-white md:text-base px-2">
              Setting up and launching your application to the world with reliability.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" class="group rounded border  py-12 shadow">
          <div class="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div class="block">
              <img src="@/assets/mobile.png" alt="content marketing icon" />
            </div>
          </div>
          <div class="text-center">
            <h3 class="pt-8 text-lg font-semibold text-gray-300 lg:text-xl">
              Mobile Application Development
            </h3>
            <p class="text-grey pt-4 text-sm group-hover:text-white md:text-base px-2">
              Developing user-friendly, cross-platform mobile applications that simplify your daily digital tasks.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container py-16 md:py-10 md:px-16" id="portfolio">
      <h2 data-aos="fade-up" data-aos-duration="1000"
        class="text-4xl font-semibold uppercase text-gray-300 sm:text-5xl lg:text-4xl my-24">
        Check out my Projects
      </h2>
      <div class="space-y-16 my-16">
        <div data-aos="fade-up" data-aos-duration="1000"
          class="flex flex-col shadow-xl rounded-sm shadow-secondary-1 dark:bg-surface-dark dark:text-white md:max-w-full md:flex-row py-6 px-6 border ">
          <img class="h-64 w-full rounded-sm object-cover md:h-36 md:w-48" src="@/assets/olive.png" alt="" />
          <div class="flex flex-col justify-start p-6 pt-3 md:ml-10">
            <div class="flex flex-col lg:flex-row items-center">
              <h5 class="mb-4 lg:mb-0 text-xl font-medium text-center">Olive Pharmaceutical Website</h5>
              <div class="flex space-x-4 lg:ml-8 justify-center">
                <div
                  class="flex justify-center rounded-sm bg-gray-100 px-2.5 border border-transparent text-sm text-gray-800 transition-all shadow-sm">
                  Vue.js
                </div>
                <div
                  class="flex justify-center rounded-sm bg-gray-100 px-2.5 border border-transparent text-sm text-gray-800 transition-all shadow-sm">
                  Tailwind CSS
                </div>
                <div
                  class="flex justify-center rounded-sm bg-gray-100 px-2.5 border border-transparent text-sm text-gray-800 transition-all shadow-sm">
                  Axios
                </div>
              </div>
            </div>
            <p class="mb-4 mt-4 text-base">
              A dynamic and responsive user-friendly website designed to facilitate the company’s online presence,
              showcase its pharmaceutical products and services, share its mission and vision, and facilitate
              communication with stakeholders.
            </p>
            <!-- <p class="text-xs text-surface/75 dark:text-neutral-300">
              Last updated 3 mins ago
            </p> -->
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000"
          class="flex flex-col shadow-xl rounded-sm shadow-secondary-1 dark:bg-surface-dark dark:text-white md:max-w-full md:flex-row py-6 px-6 border ">
          <img class="h-64 w-full rounded-sm object-cover md:h-36 md:w-48" src="@/assets/eCom.png" alt="" />
          <div class="flex flex-col justify-start p-6 pt-3 md:ml-10">
            <div class="flex flex-col lg:flex-row items-center">
              <h5 class="mb-4 lg:mb-0 text-xl font-medium text-center">E-Commerce System</h5>
              <div class="flex space-x-4 lg:ml-8 justify-center">
                <div
                  class="flex justify-center rounded-sm bg-gray-100 px-2.5 border border-transparent text-sm text-gray-800 transition-all shadow-sm">
                  Vue.js
                </div>
                <div
                  class="flex justify-center rounded-sm bg-gray-100 px-2.5 border border-transparent text-sm text-gray-800 transition-all shadow-sm">
                  Tailwind CSS
                </div>
                <div
                  class="flex justify-center rounded-sm bg-gray-100 px-2.5 border border-transparent text-sm text-gray-800 transition-all shadow-sm">
                  Axios
                </div>
              </div>
            </div>
            <p class="mb-4 mt-4 text-base">
              An e-commerce admin software that streamlines the management of shopping tracks. The system includes
              functionalities for product management, order processing, user analytics, and interactive dashboard.
            </p>
            <!-- <p class="text-xs text-surface/75 dark:text-neutral-300">
              Last updated 3 mins ago
            </p> -->
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000"
          class="flex flex-col shadow-xl rounded-sm shadow-secondary-1 dark:bg-surface-dark dark:text-white md:max-w-full md:flex-row py-6 px-6 border ">
          <img class="h-64 w-full rounded-sm object-cover md:h-36 md:w-48" src="@/assets/blogs.png" alt="" />
          <div class="flex flex-col justify-start p-6 pt-3 md:ml-10">
            <div class="flex flex-col lg:flex-row items-center">
              <h5 class="mb-4 lg:mb-0 text-xl font-medium text-center">Blog Post</h5>
              <div class="flex space-x-4 lg:ml-8 justify-center">
                <div
                  class="flex justify-center rounded-sm bg-gray-100 px-2.5 border border-transparent text-sm text-gray-800 transition-all shadow-sm">
                  HTML/CSS
                </div>
                <div
                  class="flex justify-center rounded-sm bg-gray-100 px-2.5 border border-transparent text-sm text-gray-800 transition-all shadow-sm">
                  Django
                </div>
                <div
                  class="flex justify-center rounded-sm bg-gray-100 px-2.5 border border-transparent text-sm text-gray-800 transition-all shadow-sm">
                  SQLite
                </div>
              </div>
            </div>
            <p class="mb-4 mt-4 text-base">
              An open source web-based blogging application, named as Programmers\' Blog, used to share information
              related to technology and programming.
            </p>
            <!-- <p class="text-xs text-surface/75 dark:text-neutral-300">
              Last updated 3 mins ago
            </p> -->
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000"
          class="flex flex-col shadow-xl rounded-sm shadow-secondary-1 dark:bg-surface-dark dark:text-white md:max-w-full md:flex-row py-6 px-6 border ">
          <img class="h-64 w-full rounded-sm object-cover md:h-36 md:w-48" src="@/assets/saving.png" alt="" />
          <div class="flex flex-col justify-start p-6 pt-3 md:ml-10">
            <div class="flex flex-col lg:flex-row items-center">
              <h5 class="mb-4 lg:mb-0 text-xl font-medium text-center">Web-based SACCO App</h5>
              <div class="flex space-x-4 lg:ml-8 justify-center">
                <div
                  class="flex justify-center rounded-sm bg-gray-100 px-2.5 border border-transparent text-sm text-gray-800 transition-all shadow-sm">
                  Laravel
                </div>
                <div
                  class="flex justify-center rounded-sm bg-gray-100 px-2.5 border border-transparent text-sm text-gray-800 transition-all shadow-sm">
                  Bootstrap
                </div>
                <div
                  class="flex justify-center rounded-sm bg-gray-100 px-2.5 border border-transparent text-sm text-gray-800 transition-all shadow-sm">
                  MySQL
                </div>
              </div>
            </div>
            <p class="mb-4 mt-4 text-base">
              A secure and user-friendly web-based saving and credit cooperative system software designed to manage
              member savings, loans, and financial transactions.
            </p>
            <!-- <p class="text-xs text-surface/75 dark:text-neutral-300">
              Last updated 3 mins ago
            </p> -->
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000"
          class="flex flex-col shadow-xl rounded-sm shadow-secondary-1 dark:bg-surface-dark dark:text-white md:max-w-full md:flex-row py-6 px-6 border ">
          <img class="h-64 w-full rounded-sm object-cover md:h-36 md:w-48" src="@/assets/school.png" alt="" />
          <div class="flex flex-col justify-start p-6 pt-3 md:ml-10">
            <div class="flex flex-col lg:flex-row items-center">
              <h5 class="mb-4 lg:mb-0 text-xl font-medium text-center">School Management System and Website</h5>
              <div class="flex space-x-4 lg:ml-8 justify-center">
                <div
                  class="flex justify-center rounded-sm bg-gray-100 px-2.5 border border-transparent text-sm text-gray-800 transition-all shadow-sm">
                  HTML/CSS
                </div>
                <div
                  class="flex justify-center rounded-sm bg-gray-100 px-2.5 border border-transparent text-sm text-gray-800 transition-all shadow-sm">
                  PHP
                </div>
                <div
                  class="flex justify-center rounded-sm bg-gray-100 px-2.5 border border-transparent text-sm text-gray-800 transition-all shadow-sm">
                  MySQL
                </div>
              </div>
            </div>
            <p class="mb-4 mt-4 text-base">
              An e-commerce admin software that streamlines the management of shopping tracks. The system includes
              functionalities for product management, order processing, user analytics, and interactive dashboard.
            </p>
            <!-- <p class="text-xs text-surface/75 dark:text-neutral-300">
              Last updated 3 mins ago
            </p> -->
          </div>
        </div>
      </div>
    </div>
    <div class="container px-6 md:px-20 pt-16 md:pt-10" id="experience">
      <h2 data-aos="fade-up" data-aos-duration="1000"
        class="text-4xl font-semibold uppercase text-gray-300 sm:text-5xl lg:text-4xl">
        My work experience
      </h2>
      <!-- <h3 class="pt-6 text-center  text-xl font-medium text-gray-300 sm:text-2xl lg:text-3xl">
        Here's what I did before freelancing
      </h3> -->

      <div class="relative lg:mx-8 mt-12 flex w-full flex-col">
        <div data-aos="fade-up" data-aos-duration="1000"
          class="mt-8 flex flex-col text-center md:flex-row md:text-left justify-center items-center border-l-2 pl-4">
          <div class="md:w-2/5">
            <div class="flex flex-col md:flex-row items-center justify-center md:justify-start">
              <a href="http://pilasatech.net/" target="_blank" class="shrink-0">
                <img src="@/assets/pilasa.png" class="h-32 w-32" alt="company logo" />
              </a>
              <div class="relative mb-4 lg:mb-0 lg:ml-3 w-full md:block">
                <a href="http://pilasatech.net/" target="_blank" class="text-blue-500 hover:underline">Pilasa
                  Technologies</a>
              </div>
            </div>
          </div>
          <div class="md:w-3/5 space-y-4">
            <div class="relative flex md:pl-18">

              <div class="mt-1 flex items-center">
                <span class="hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-gray-300 md:block">
                </span>
                <div class="md:-mt-1 md:pl-8">
                  <span class="block pt-2  text-xl font-bold text-gray-300">Fullstack
                    Developer</span>
                  <span class="block  font-semibold text-gray-300 text-base text-left">Sept 2020 - Nov 2020</span>

                </div>
              </div>
            </div>
            <div class="relative flex md:pl-18">
              <div class="mt-1 flex items-center">
                <!-- <i class="bx bxs-right-arrow hidden text-gray-300 md:block"></i> -->
                <span class="hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block">
                </span>

                <div class="md:-mt-1 md:pl-8">
                  <span class="block pt-2  text-xl font-bold text-gray-300">Frontend
                    Developer Intern</span>
                  <span class="block  font-semibold text-gray-300 text-left text-base">Feb 2024 - May 2024</span>
                  <!-- <div class="pt-2">
                    <span class="block  text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac
                      venenatis enim.</span>
                  </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000"
          class="mt-16 flex flex-col text-center md:flex-row md:text-left justify-center items-center border-l-2 pl-4">
          <div class="md:w-2/5">
            <div class="flex flex-col md:flex-row items-center justify-center md:justify-start">
              <a href="https://ahazplatforms.com/" target="_blank" class="shrink-0">
                <img src="@/assets/ahaz.avif" class="h-32 w-32" alt="company logo" />
              </a>
              <div class="relative mt-2 lg:mt-0 mb-4 lg:mb-0 lg:ml-3 w-full md:block">
                <a href="https://ahazplatforms.com/" target="_blank" class="text-blue-500 hover:underline">Ahaz
                  Platforms</a>
              </div>
            </div>
          </div>
          <div class="md:w-3/5">
            <div class="relative flex md:pl-18">
              <div class="mt-1 flex items-center">
                <span class="hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>
                <div class="md:-mt-1 md:pl-8">
                  <span class="block pt-2  text-xl font-bold text-gray-300">Frontend
                    Developer</span>
                  <span class="block  font-semibold text-gray-300 text-left text-base">Aug 2024 - Dec 2024</span>
                  <!-- <div class="pt-2">
                    <span class="block  text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac
                      venenatis enim.</span>
                  </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="px-6 md:px-20" id="skills">
      <div class="container pb-16">
        <h2 data-aos="fade-up" data-aos-duration="1000"
          class="text-2xl font-semibold uppercase text-gray-300 sm:text-3xl lg:text-4xl mt-24 pb-8">
          Technologies I am good at
        </h2>
        <div data-aos="fade-up" data-aos-duration="1000">
          <h4 class="py-6 text-center text-2xl">
            Advanced skills
          </h4>
          <div class="flex flex-wrap justify-center mx-auto max-w-4xl md:px-6">
            <div class="w-1/3 py-4 sm:py-6 lg:w-1/6">
              <div class="flex items-center">
                <img src="@/assets/html-icon.png" alt="client logo" class="mx-auto block h-12 w-auto" />
              </div>
              <p class="pt-2 font-semibold text-gray-300 text-center text-wrap lg:text-lg">
                HTML
              </p>
            </div>
            <div class="w-1/3 py-4 sm:py-6 lg:w-1/6">
              <div class="flex items-center">
                <img src="@/assets/css-icon.png" alt="client logo" class="mx-auto block h-12 w-auto" />
              </div>
              <p class="pt-2 font-semibold text-gray-300 text-center text-wrap lg:text-lg">
                CSS
              </p>
            </div>
            <div class="w-1/3 py-4 sm:py-6 lg:w-1/6">
              <div class="flex items-center">
                <img src="@/assets/javascript-39400.png" alt="client logo" class="mx-auto block h-12 w-auto" />
              </div>
              <p class="pt-2 font-semibold text-gray-300 text-center text-wrap lg:text-lg">
                JavaScript
              </p>
            </div>
            <div class="w-1/3 py-4 sm:py-6 lg:w-1/6">
              <div class="flex items-center">
                <img src="@/assets/vuejs.png" alt="client logo" class="mx-auto block h-12 w-auto" />
              </div>
              <p class="pt-2 font-semibold text-gray-300 text-center text-wrap lg:text-lg">
                Vue.js
              </p>
            </div>
            <div class="w-1/3 py-4 sm:py-6 lg:w-1/6">
              <div class="flex items-center">
                <img src="@/assets/nodejs.png" alt="client logo" class="mx-auto block h-12 w-auto" />
              </div>
              <p class="pt-2 font-semibold text-gray-300 text-center text-wrap lg:text-lg">
                Node.js
              </p>
            </div>
            <div class="w-1/3 py-4 sm:py-6 lg:w-1/6">
              <div class="flex items-center">
                <img src="@/assets/tailwind.png" alt="client logo" class="mx-auto block h-12 w-auto" />
              </div>
              <p class="pt-2 text-center font-semibold text-gray-300 lg:text-lg">
                Tailwind CSS
              </p>
            </div>
            <div class="w-1/3 py-4 sm:py-6 lg:w-1/6">
              <div class="flex items-center">
                <img src="@/assets/express.png" alt="client logo" class="mx-auto block h-12 w-auto" />
              </div>
              <p class="pt-2 text-center font-semibold text-gray-300 lg:text-lg">
                Express.js
              </p>
            </div>
            <div class="w-1/3 py-4 sm:py-6 lg:w-1/6">
              <div class="flex items-center">
                <img src="@/assets/mongodb.png" alt="client logo" class="mx-auto block h-12 w-auto" />
              </div>
              <p class="pt-2 text-center font-semibold text-gray-300 lg:text-lg">
                MongoDB
              </p>
            </div>
            <div class="w-1/3 py-4 sm:py-6 lg:w-1/6">
              <div class="flex items-center">
                <img src="@/assets/mysql.png" alt="client logo" class="mx-auto block h-12 w-auto" />
              </div>
              <p class="pt-2 text-center font-semibold text-gray-300 lg:text-lg">
                MySQL
              </p>
            </div>
            <div class="w-1/3 py-4 sm:py-6 lg:w-1/6">
              <div class="flex items-center">
                <img src="@/assets/git.png" alt="client logo" class="mx-auto block h-12 w-auto" />
              </div>
              <p class="pt-2 text-center font-semibold text-gray-300 lg:text-lg">
                Git
              </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000">
          <h4 class="py-6 text-center text-2xl mt-10">
            Basic skills
          </h4>
          <div class="flex flex-wrap justify-center mx-auto max-w-4xl md:px-6">
            <div class="w-1/3 py-4 sm:py-6 lg:w-1/6">
              <div class="flex items-center">
                <img src="@/assets/laravel.png" alt="client logo" class="mx-auto block h-12 w-auto" />
              </div>
              <p class="pt-2 text-center font-semibold text-gray-300 lg:text-lg">
                Laravel
              </p>
            </div>
            <div class="w-1/3 py-4 sm:py-6 lg:w-1/6 rounded-full">
              <div class="flex items-center">
                <img src="@/assets/flutter.png" alt="client logo" class="mx-auto block h-12 w-auto" />
              </div>
              <p class="pt-2 text-center font-semibold text-gray-300 lg:text-lg">
                Flutter
              </p>
            </div>
            <div class="w-1/3 py-4 sm:py-6 lg:w-1/6 rounded-full">
              <div class="flex items-center">
                <img src="@/assets/reactjs.png" alt="client logo" class="mx-auto block h-12 w-auto" />
              </div>
              <p class="pt-2 text-center font-semibold text-gray-300 lg:text-lg">
                React.js
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <Testimonial id="testimonial" /> -->
    <div class="mt-6 px-6 md:px-20" id="contact">
      <h2 data-aos="fade-up" data-aos-duration="1000"
        class="text-2xl font-semibold uppercase text-gray-300 sm:text-3xl lg:text-4xl mt-24 pb-8">
        Contact me
      </h2>
      <div data-aos="fade-up" data-aos-duration="1000"
        class="grid sm:grid-cols-2 items-start gap-12 py-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] font-[sans-serif]">
        <div>
          <!-- <h1 class="text-gray-300 text-3xl font-bold">Let's Talk</h1> -->
          <p class="text-base text-gray-300 mt-4">Have some projects or brand to develop and need help? Then reach out
            I would love to hear about your project and provide help with development.</p>

          <div class="mt-12">
            <h2 class="text-gray-300 text-base font-medium">Contact Information</h2>
            <ul class="mt-4">
              <li class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
                  <path
                    d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                  </path>
                  <path d="M15 7a2 2 0 0 1 2 2"></path>
                  <path d="M15 3a6 6 0 0 1 6 6"></path>
                </svg>
                <div class="text-gray-300 text-base ml-4 cursor-auto">
                  <p class="text-bold">+251 985 753 874</p>
                  <p class="block text-base">I would appreciate if you reach me out on text messages.</p>
                </div>
              </li>
              <li class="flex items-center mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#fff'
                  viewBox="0 0 479.058 479.058" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                  <path
                    d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                    data-original="#000000" />
                </svg>
                <p class="text-gray-300 text-base ml-4">
                  <p>misginag609@gmail.com</p>
                </p>
              </li>
              <li class="flex items-center mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
                  <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                  <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                  </path>
                </svg>
                <p class="text-gray-300 text-base ml-4">Mekelle, Tigray, Ethiopia</p>
              </li>
            </ul>
          </div>

          <div class="mt-12">
            <h2 class="text-gray-300 text-base font-medium">Socials</h2>

            <ul class="flex mt-4 space-x-4">
              <li class="h-10 rounded-full flex items-center justify-center shrink-0">
                <a href="https://www.linkedin.com/in/misgina-gebretsadik-195984195/" target="_blank">
                  <i class="bx bxl-linkedin text-2xl text-gray-300 hover:text-yellow-400"></i>
                </a>
              </li>
              <li class="h-10 w-1d0 rounded-full flex items-center justify-center shrink-0">
                <a href="https://github.com/misgina21" target="_blank">
                  <i class="bx bxl-github text-2xl text-gray-300 hover:text-yellow-400"></i>
                </a>
              </li>
              <li class="h-10 w-1d0 rounded-full flex items-center justify-center shrink-0">
                <a href="https://x.com/misginaGeb107" target="_blank">
                  <i class="bx bxl-twitter text-2xl text-gray-300 hover:text-yellow-400"></i>
                </a>
              </li>
              <li class="h-10 w-1d0 rounded-full flex items-center justify-center shrink-0">
                <a href="https://www.instagram.com/_misgie_/" target="_blank">
                  <i class="bx bxl-instagram text-2xl text-gray-300 hover:text-yellow-400"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <form class="ml-auo space-y-4">
          <input v-model="form.fullName" type='text' placeholder='Full Name' class="w-full text-gray-300 rounded-md bg-black py-2.5 px-4 border text-sm outline-nodne focus:border-white" :class="{ 'border-red-500': $v.fullName.$error }"/>
          <p v-if="$v.fullName.$error" class="text-sm text-red-500">{{ $v.fullName.$errors[0].$message }}</p>
          <input v-model="form.email" type='email' placeholder='Email' class="w-full text-gray-300 rounded-md bg-black py-2.5 px-4 border text-sm outline-none focus:border-white" :class="{ 'border-red-500': $v.email.$error }"/>
          <p v-if="$v.email.$error" class="text-sm text-red-500">
            <span v-for="(error, index) in $v.email.$errors" :key="index">
              {{ error.$message }}
            </span>
          </p>
          <textarea v-model="form.message" placeholder='Message' rows="6" class="w-full text-gray-300 rounded-md bg-black px-4 border text-sm pt-2.5 outline-none focus:border-white" :class="{ 'border-red-500': $v.message.$error }"></textarea>
          <p v-if="$v.message.$error" class="text-sm text-red-500">{{ $v.message.$errors[0].$message }}</p>
          <div v-if="success" class="flex p-2 bg-green-600 text-white rounded-sm">
            <p class="text-sm">{{ success }}</p>
            <button class="text-lg" @click="closeSuccessMessage">X</button>
          </div>
          <button type='button' @click="sendMail"
            class="text-white bg-blue-600 hover:bg-blue-500 rounded-md text-base px-4 py-2.5 w-full !mt-6">
            <p v-if="!sending">Send Message</p>
            <p v-else class="flex justify-center">
              <span>
                <svg class="animate-spin h-5 w-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 014 12H0c0 6.627 5.373 12 12 12v-4c-2.589 0-4.96-1.012-6.746-2.709L6 15.291zM20 12c0-6.627-5.373-12-12-12v4c2.589 0 4.96 1.012 6.746 2.709L18 8.709A7.96 7.96 0 0120 12z">
                  </path>
                </svg>
              </span>
              Sending message...
            </p>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import Testimonial from './TestimonialOne.vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email, helpers } from '@vuelidate/validators';

const form = ref({
  fullName: '',
  email: '',
  message: ''
});
const sending = ref(false)
const success = ref('')

const rules = {
  fullName: {
    required: helpers.withMessage('Please fill your name', required)
  },
  email: {
    required: helpers.withMessage('Please fill your email address', required),
    email: helpers.withMessage('Please input a valid email address', email)
  },
  message: {
    required: helpers.withMessage('Please fill your message', required)
  }
};
const $v = useVuelidate(rules, form.value);

const sendMail = async () => {
  const params = {
    to_name: 'Misgina',
    subject: 'Contact from Portfolio',
    from_name: form.value.fullName,
    from_email: form.value.email,
    message: form.value.message,
  };

  const serviceId = "service_hhkaepm";
  const templateId = "template_t3e3xjk";

  const validationResult = await $v.value.$validate();
  if (validationResult) {
    try {
      sending.value = true
      let res = await emailjs.send(serviceId, templateId, params)
      console.log("email response: ", res);
      success.value = 'Your message has been sent successfully. Thank you for reaching out!'
      setTimeout(() => {
        success.value = ''
      }, 5000)
      form.value = {}
    } catch (error) {
      console.log("error sending: ", error);
      alert(error);
    } finally {
      sending.value = false
    }
  }
}
const closeSuccessMessage = () => {
  success.value = ''
}

</script>

<style scoped></style>