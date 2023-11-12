<template>
    <div class="design-container">
      <h2>Projects</h2>
      <div v-if="allProjects.length === 0">No projects available</div>
      <div v-else>
        <div v-for="project in allProjects" :key="project.id" class="project-card">
          <img :src="project.img" alt="Project Image" />
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      allProjects: {
        type: Array,
        default: () => [],
      },
    },
  };
  </script>
  
  <style scoped>
  .design-container {
    max-width: 800px;
    margin: auto;
    padding: 20px;
  }
  
  .project-card {
    border: 1px solid #ccc;
    margin-bottom: 20px;
    padding: 10px;
  }
  
  .project-card img {
    max-width: 100%;
    height: auto;
  }
  
  h2 {
    color: #333;
  }
  
  /* Add more styles based on your design preferences */
  </style>
  