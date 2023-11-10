<template>
  <div>
    <h1>{{ title }}</h1>

    <div v-html="text"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    text: String,
  },
};
</script>

<style scoped>
/* Add your component styles here */
</style>
