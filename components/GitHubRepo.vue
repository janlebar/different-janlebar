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
      // Set your GitHub API token
      const githubToken = 'YOUR_GITHUB_TOKEN';

      // Include the token in the request headers
      const response = await $http.get(`https://api.github.com/repos/${params.owner}/${params.repo}`, {
        headers: {
          Authorization: `Bearer ${githubToken}`,
        },
      });

      // Check if the response status is 404 (Not Found)
      if (response.status === 404) {
        console.log('Repository not found:', params.owner, params.repo);
        return {
          repo: null,
        };
      }

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

