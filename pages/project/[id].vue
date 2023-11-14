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
        
          <h3 class="text-red-500"> {{ doc.customVariable }}</h3>
          <h3 class="text-red-500"> {{ doc.customVariabletwo }}</h3>

          <ContentRenderer :value="doc" />
        </article>
      </ContentDoc>
    </main>
  </div>

</template>







  