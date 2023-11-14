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
          <h1 class="text-red-500">{{ doc.title }}</h1>

          <ContentRenderer :value="doc" />
        </article>
      </ContentDoc>
    </main>
  </div>

</template>







  