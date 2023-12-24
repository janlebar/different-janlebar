<!-- components/GitHubRepo.vue -->

<template>
    <div>
      <h1>{{ repo.name }}</h1>
      <p>{{ repo.description }}</p>
      <p>Stars: {{ repo.stargazers_count }}</p>
      <p>Forks: {{ repo.forks_count }}</p>
      <!-- Add more details as needed -->
    </div>
  </template>
  
  <script>
  export default {
    async asyncData({ params }) {
      try {
        const response = await this.$http.get(`https://api.github.com/repos/${params.owner}/${params.repo}`);
  
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
  