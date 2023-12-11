


<script>
import feather from 'feather-icons';
import ProjectsFilter from './ProjectsFilter.vue';
import ProjectSingle from './ProjectSingle.vue';

export default {
  components: { ProjectSingle, ProjectsFilter },
  props: ['allProjects', 'category', 'description', 'customClass'], // Include customClass prop
  data: ({ description }) => {
    return {
      FilteredCategory: description,
    };
  },
  computed: {
    projects() {
      console.log(this.allProjects);
      return this.allProjects;
    },

    // Get the filtered projects
    filteredProjects() {
      if (this.FilteredCategory) {
        return this.filterProjectsByCategory();
      }
      return this.projects;
    },

    // Include the computedClass from the mixin
    computedClass() {
      // Use the customClass from the parent if available, otherwise use the default class
      return this.customClass || 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10';
    },
  },
  methods: {
    // Filter projects by category
    filterProjectsByCategory() {
      return this.projects.filter((item) => {
        let category =
          item.category.charAt(0).toUpperCase() +
          item.category.slice(1);
        console.log(category);
        return category.includes(this.FilteredCategory);
      });
    },
  },
  mounted() {
    feather.replace();
  },
};

</script>

<template>
  <section class=" ">
    <div class=" ">
      <ProjectsFilter :showSelect="false" @filter="FilteredCategory = $event"/>
    </div>

	<div :class="computedClass">
		<!-- Content of your component goes here -->
      <ProjectSingle
        v-for="project in filteredProjects"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
</template> 




