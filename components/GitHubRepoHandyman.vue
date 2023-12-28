<template>
  <div class="mb-6">
    <section class="hero is-medium is-primary is-bold mb-6">
      <div class="hero-body">
        <div class="container">
          <h2 class="title is-4 mt-4">GitHub Repository: Hanyman Connect</h2>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="table-container">
        <table class="table is-bordered is-striped is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>URL</th>
              <th>Last Updated</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="repo in repos" :key="repo.id">
              <td>{{ repo.id }}</td>
              <td>{{ repo.name }}</td>
              <td>{{ repo.html_url }}</td>
              <td>{{ formatDate(repo.updated_at) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Repository",
  data() {
    return {
      repos: null,
    };
  },
  created: function () {
    axios.get("https://api.github.com/repos/janlebar/hanyman-connect").then(async (response) => {
      this.repos = [response.data]; // Wrap the response in an array, as we are now dealing with a single repository

      // Fetch the content of each file in the repository
      for (const repo of this.repos) {
        repo.files = await this.fetchFiles(repo.contents_url);
      }
    });
  },
  methods: {
    formatDate(dateString) {
      const options = { year: "numeric", month: "short", day: "numeric" };
      return new Date(dateString).toLocaleDateString(undefined, options);
    },
  },
};
</script>

<style>
body {
  font: 15px/1.8 "Poppins", sans-serif !important;
}

.table td,
.table th {
  padding: 20px !important;
}
</style>


