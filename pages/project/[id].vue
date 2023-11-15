<script setup>
import { useRoute } from 'vue-router'
import Header from '~/components/Header.vue';
import ProjectInfo from '~/components/ProjectInfo.vue';

const route = useRoute()

// When accessing /posts/1, route.params.id will be 1
console.log(route.params.id)
const path = route.params.id.toLowerCase();

</script>

<template>
  <div>
    <!-- Hello {{ route.params.id }}! -->


    <main>
      <Header/>
      <ProjectInfo></ProjectInfo>
      <!-- Use route.params.id as the target.md -->
      <ContentDoc :path="`/singleprojects/${path}`" v-slot="{ doc }">
        <article>
          <div class="text-black mt-4">
            <div class="container mx-auto text-center">
              <h1 class="text-4xl font-bold">{{ doc.title }}</h1>
              <!-- Add more elements or text here as needed -->
            </div>
          </div>
        
        <div class="card" style="background-color: white; padding: 100px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); text-align: left;">
          <h3 class="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7"> {{ doc.customVariable}}</h3>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-tag w-4 h-4 text-ternary-dark dark:text-ternary-light" style="--darkreader-inline-stroke: currentColor;" data-darkreader-inline-stroke=""><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <div class="card" style="background-color: white; padding: 20px; text-align: left;">
            
           <br>
            <list class="font-general-regular text-ternary-dark dark:text-ternary-light">
              <h3 class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2">{{ doc.client }}</h3>
              <h3 class="text-black">{{ doc.services }}</h3>
              <h3 class="text-black">{{ doc.website }}</h3>
            </list>
            <br>
            <list class="font-general-regular text-ternary-dark dark:text-ternary-light">
              <h3 class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2">{{ doc.objective }}</h3>
              <p class="text-black">{{ doc.objectivetext }}</p>
              <br>
              <h3 class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2">{{ doc.tools }}</h3>
              <p class="text-black">{{ doc.toolstext }}</p>
              <br>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-youtube w-4 lg:w-5 h-4 lg:h-5" style="--darkreader-inline-stroke: currentColor;" data-darkreader-inline-stroke=""><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </list>
          </div>
        

        </div>

          <!-- <img :src="'~/public/img/${doc.image}.svg'"/> -->
          <!-- <img :src="`~/img/${parsedMarkdown.image}.svg`" alt="" class="rounded-full" /> -->
          <img :src="`~/public/img/${doc.image}.svg`" alt="" class="rounded-full" />
        
          
          <ContentRenderer :value="doc" />
        </article>

      </ContentDoc>
    </main>
  </div>

</template>





  