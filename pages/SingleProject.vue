<script>
import Header from '~/components/Header.vue';
import Design from '~/components/Design.vue';

export default {
  data() {
    return {
      projects: [],
    };
  },
  async created() {
    const result = await useAsyncData('projects', () => queryContent('projects').find());
    const value = result.data.value;

    if (value) {
      this.projects = value.map((project) => ({
        id: project._id,
        title: project.title,
        description: project.description,
        img: project.image,
      }));
    }
  },
};
</script>


<template>
  <div>
    <Header/>
	<Design :allProjects="projects" />
  </div>
</template>

