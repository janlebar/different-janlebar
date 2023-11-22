<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue';
import Header from '~/components/Header.vue';

const route = useRoute()
console.log(route.params.id)
const path = route.params.id.toLowerCase();


// Create a new ref to store the description
const filtereddescription = ref('')
console.log(filtereddescription + 'HERE')
console.log(filtereddescription[1] + 'HERE')

// const elem = document.getElementsByClassName("strong");
// console.log(elem + 'here strong')



</script>

<template>
  <div>
    <main>
      <Header/>
      <div class="p-20">
      <ContentDoc :path="`/singleprojects/${path}`" v-slot="{ doc }">
        <div class="container mx-auto text-center">
        <h1 class="text-4xl font-bold pt-0 p-10">{{ doc.title }}</h1>
        <h1 class="text-4xl font-bold pt-0 p-10">{{ doc.description }}</h1>
        
        <!-- Update the description ref when doc changes -->
        <template v-if="filtereddescription = doc.description"></template>

        <div class="flex flex-wrap -mx-2">
          <div v-for="(image, index) in doc.image" :key="index" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
            <img :src="image" alt="Description" class="w-full h-auto rounded-lg">
          </div>
        </div>
        

        </div>
        <article class="mx-auto pt-0 pl-80 pr-80">
          <ContentRenderer :value="doc" />
        </article>


      </ContentDoc>
    </div>
    <div class="pt-0">
      <!-- Pass the description ref to the Footerprojects component -->
      <Footerprojects :description="filtereddescription"/>
    </div>
    </main>
  </div>

</template>




