<script setup>
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue';
import Header from '~/components/Header.vue';
import { watchEffect } from 'vue';
import Footerprojects from '~/components/Footerprojects.vue';

const route = useRoute()
console.log(route.params.id)
const path = route.params.id.toLowerCase();

</script>

<template>
  <div>
    <main>
      <ContentDoc :path="`/singleprojects/${path}`" v-slot="{ doc }">
        <Header />
        <div class="p-20">

          <div class="container mx-auto text-center">
            <h1 class="text-4xl font-bold pt-0 p-10">{{ doc.title }}</h1>
            <h3 class="text-4xl font-bold pt-0 p-10">{{ doc.description }}</h3>

            <!-- Assign doc.description to description -->

            <div class="flex flex-wrap -mx-2">
              <div v-for="(image, index) in doc.image" :key="index"
                class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
                <img :src="image" alt="Description" class="w-full h-auto rounded-lg">
              </div>
            </div>

          </div>
          <article class="mx-auto pt-0 pl-80 pr-80">
            <ContentRenderer :value="doc" />
          </article>

        </div>
        <div class="pt-0 mx-auto pt-0 pl-80 pr-80">
          <h2 class=" mx-auto pt-0 pl-20 pr-80 pt-0">Similar Projects</h2>
          <!-- Pass the description ref to the Footerprojects component -->
          <Footerprojects :description="doc.description" />


        </div>
      </ContentDoc>
    </main>
  </div>
</template>





