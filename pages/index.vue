<script>
import Header from '~/components/Header.vue'
import projects from '~/components/Footer.vue';
import Footerprojects from '~/components/Footerprojects.vue';
import GitHubRepoHandyman from '~/components/GitHubRepoHandyman.vue';
import GitHubRepoSideeffects from '~/components/GitHubRepoSideeffects.vue';
// import Indeximageload from '~/components/Indeximageload.vue'


export default {
  components: {
    Header,
    projects,
    Footerprojects,
    GitHubRepoHandyman,
    GitHubRepoSideeffects,
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
        </div>
<!-- 
        <p
        class="font-general-medium mt-2 text-lg sm:text-xl  xl:text-2xl text-center sm:text-left leading-none text-gray-400"
      >
        A Full-Stack Developer & Designer
      </p>
       -->
      </section>
      <section>
        <Indeximageload></Indeximageload>
    </section>
      <div class="container mx-auto">
        <p class="text-lg font-semibold sm:text-xl text-gray-600 mt-4">Presenting two latest web apps:</p>
        <Footerprojects :customClass="customClassFromParent" :description="description" />
      </div> 
      <section>
        <div class="container mx-auto flex items-center justify-center h-full">
          <div class="btn inline-block mt-6 py-2 px-4 bg-blue-500 hover:bg-indigo-700 text-white font-semibold rounded-lg transition duration-300 ease-in-out">
            <nuxt-link to="/contact">Contact me for Web aplication development</nuxt-link>
          </div>
        </div>
      </section>
      <br>
      <br>
      <section class="flex">
        <div class="container mx-auto flex">
          <GitHubRepoHandyman class="mr-12" />
          <GitHubRepoSideeffects class="ml-12" />
            <!-- <GitHubRepo :owner="$route.params.owner" :repo="$route.params.repo" /> -->
        </div>
    </section>
    
      <div class="container mx-auto pt-20">
        <p class="text-lg font-semibold sm:text-xl text-gray-600 mt-4">Presenting three random projects:</p>
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
  

  