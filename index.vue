

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
  
      <!-- Contact Section -->
      <section id="contact" class="contact-section p-8">
    <div class="max-w-md mx-auto">
      <div class="bg-white rounded-lg shadow-lg p-8">
        <h2 class="text-3xl font-bold text-blue-600 mb-4">Contact Us</h2>
        <form @submit.prevent="submitForm">
          <div class="mb-4">
            <label for="name" class="block text-lg text-gray-600">Name</label>
            <input type="text" id="name" v-model="formData.name" required class="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-lg text-gray-600">Email</label>
            <input type="email" id="email" v-model="formData.email" required class="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div class="mb-4">
            <label for="message" class="block text-lg text-gray-600">Message</label>
            <textarea id="message" v-model="formData.message" rows="4" required class="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
          </div>
          <button type="submit" class="bg-indigo-500 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out">Submit</button>
        </form>
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
    data() {
      return {
        formData: {
          name: '',
          email: '',
          message: ''
        },
        imageList: [
          { id: 1, url: 'image1.jpg', alt: 'Image 1' },
          // Add data for other images
        ]
      };
    },
    methods: {
      submitForm() {
        // Handle form submission here, e.g., using Axios
        console.log('Form submitted with data:', this.formData);
      }
    }
  };
  </script>
  