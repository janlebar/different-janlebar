<template>
  <div class="post">

    <h1 class="post-title">{{ title }}</h1>
    <p class="post-text">{{ text }}</p>
  </div>
</template>

<script>
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },

  text: {
    type: String,
    required: true,
  },
});
</script>