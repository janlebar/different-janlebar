<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()

// When accessing /posts/1, route.params.id will be 1
console.log(route.params.id)


</script>

<template>
  <div>
    Hello {{ route.params.id }}!

    <main>
      <!-- Use route.params.id as the target.md -->
      <ContentDoc :path="`/projects/${route.params.id}`" />
      <ContentDoc path="/my-post" />

    </main>
  </div>
</template>






  