<template>
    <div>
      <MarkdownContent
        :title="markdownData.title"
        :text="markdownData.text"
      />
    </div>
  </template>
  
  <script>
  import MarkdownContent from '~/components/MarkdownContent.vue';
  
  export default {
    components: {
      MarkdownContent,
    },
    data() {
      return {
        markdownData: {},
      };
    },
    async asyncData({ $content }) {
      const markdownData = await $content('sample').fetch();
      return { markdownData };
    },
  };
  </script>
  
  