<script setup>
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue';
import Header from '~/components/Header.vue';
import { watchEffect } from 'vue';
import Footerprojects from '~/components/Footerprojects.vue';

// const vimeoUrl = 'https://vimeo.com/888487453?share=copy';
// const vimeoId = vimeoUrl.split('/')[3].split('?')[0];

const route = useRoute()
console.log(route.params.id)
const path = route.params.id.toLowerCase();
</script>

<template>
  <div>
    <main>
      <ContentDoc :path="`/singleprojects/${path}`" v-slot="{ doc }">
        <Header />
        <div class="p-4 sm:p-20">
          <div class="container mx-auto text-center">
            <h1 class="text-2xl sm:text-4xl font-bold pt-0 sm:p-10">{{ doc.title }}</h1>
            <h3 class="text-2xl sm:text-4xl pt-0 ">{{ doc.description }}</h3>
            <br>
            <!-- <client-only>
              <vimeo-player ref="player" :video-id="vimeoId" />
            </client-only>	 -->
            <div class="flex flex-wrap -mx-2">
              <div v-for="(image, index) in doc.image" :key="index"
                class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
                <img :src="image" alt="Description" class="w-full h-auto rounded-lg">
              </div>
            </div>
          </div>
          <article class="mx-auto pt-0 pl-4 pr-4 sm:pl-80 sm:pr-80">
            <ContentRenderer :value="doc" />
          </article>
        </div>
        <div class="pt-0 mx-auto pl-4 pr-4 sm:pl-80 sm:pr-80">
          <h2 class="mx-auto pt-0 pl-2 pr-4 sm:pl-20 sm:pr-80 pt-0">Similar Projects</h2>

          <Footerprojects :description="doc.description" />
        </div>
      </ContentDoc>
    </main>
  </div>
</template>







