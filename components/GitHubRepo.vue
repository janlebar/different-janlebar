<!-- components/GitHubRepo.vue -->

<template>
    <div>
      <h1 v-if="repo">{{ repo.name }}</h1>
      <p v-if="repo">{{ repo.description }}</p>
      <p v-if="repo">Stars: {{ repo.stargazers_count }}</p>
      <p v-if="repo">Forks: {{ repo.forks_count }}</p>
      <!-- Add more details as needed -->
      <p v-if="!repo">Repository not found</p>
    </div>
  </template>
  
  <script>
  export default {
    async asyncData({ params, $http }) {
      try {
        // const response = await $http.get(`https://api.github.com/repos/${params.owner}/${params.repo}`);
        const response = await $http.get('https://api.github.com/repos/janlebar/hanyman-connect');
        return {
          repo: response.data,
        };
      } catch (error) {
        console.error('Error fetching GitHub repository:', error);
        return {
          repo: null,
        };
      }
    },
  };
  </script>
  