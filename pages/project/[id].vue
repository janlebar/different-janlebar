<script setup>
import { useRoute } from 'vue-router'
import Header from '~/components/Header.vue';


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
      <!-- <ProjectInfo></ProjectInfo> -->
      <!-- Use route.params.id as the target.md -->
      <div class="p-20">
      <ContentDoc :path="`/singleprojects/${path}`" v-slot="{ doc }">
        <div class="container mx-auto text-center">
        <h1 class="text-4xl font-bold pt-0 p-10">{{ doc.title }}</h1>
        <!-- <img :src="doc.image"/> -->
        



        <div class="flex flex-wrap -mx-2">
          <div v-for="(image, index) in doc.image" :key="index" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
            <img :src="image" alt="Description" class="w-full h-auto rounded-lg">
          </div>
        </div>
        




        </div>
        <article class="mx-auto pt-0 p-80">
          <ContentRenderer :value="doc" />
        </article>
      </ContentDoc>
    </div>
    </main>
  </div>

</template>