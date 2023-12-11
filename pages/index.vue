<script>
import Header from '~/components/Header.vue'
import projects from '~/components/Footer.vue';
import Footerprojects from '~/components/Footerprojects.vue';



export default {
  components: {
    Header,
    projects,
    Footerprojects,
  },
  data() {
    return {
      description: 'Application development',
      customClassFromParent: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mt-6 sm:gap-10', 
    };
  },
};



</script>

<template>

  <div>
      <Header />
  
    </div>
  
    <div>
      <!-- Hero Section -->
      <section class="hero custom-red-background p-12">
        <div class="hero-content text-center">
          <h1 class="text-3xl sm:text-5xl font-bold text-blue-600">Welcome to Different</h1>
          <p class="text-lg sm:text-xl text-gray-600 mt-4">With Your idea and my skills lets make things happen.</p>

        <div class="btn inline-block mt-6 py-2 px-4 bg-indigo-500 hover:bg-indigo-700 text-white font-semibold rounded-lg transition duration-300 ease-in-out">
        
          <nuxt-link to="/contact">Contact</nuxt-link>
        </div>
        </div>
  


      </section>
      
      <div class="container mx-auto">
        <Footerprojects :customClass="customClassFromParent" :description="description" />
      </div>      
      <section>
      

      </section>




      <div class="container mx-auto">
        <projects />
      </div>

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
  

  