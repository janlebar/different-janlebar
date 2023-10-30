

<template>

  <div>
      <Header />
  
    </div>
  
    <div>
      <!-- Hero Section -->
      <section class="hero custom-red-background p-12">
        <div class="hero-content text-center">
          <h1 class="text-3xl sm:text-5xl font-bold text-blue-600">Welcome to Your Website</h1>
          <p class="text-lg sm:text-xl text-gray-600 mt-4">Your catchphrase or description goes here.</p>
          <a href="#contact" class="btn inline-block mt-6 py-2 px-4 bg-indigo-500 hover:bg-indigo-700 text-white font-semibold rounded-lg transition duration-300 ease-in-out">Contact Us</a>
        </div>
  
        <div class="flex justify-center sm:flex-block">
          <a
            download="Stoman-Resume.pdf"
            href="/files/JanLebarCV.pdf"
            class="w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-300 flex items-center justify-center"
            aria-label="Download Resume"
          >
            <i data-feather="arrow-down-circle" class="w-5 sm:w-6 mr-2 sm:mr-3 duration-100"></i>
            <span class="text-sm sm:text-lg font-general-medium duration-100">Download CV</span>
          </a>
        </div>
      </section>
  
  
      <!-- Image Section -->
      <section class="image-section">
        <div class="image-grid">
          <!-- Loop through 12 images -->
          <div v-for="image in imageList" :key="image.id" class="image-item">
            <img :src="image.url" :alt="image.alt" />
          </div>
        </div>
      </section>
  
      
  
  
    </div>
  </template>
  
  <script>
  import Header from '~/components/Header.vue'
  
  export default {
    components: {
      Header,
    },

  };
  </script>
  