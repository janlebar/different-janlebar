<template>
  <div class="image-container">
    <img
      v-if="showLeftImage"
      class="left-image"
      src="/img/canabiovet/canabiovet1.svg"
      alt="Left Image"
    />
    <img
      v-if="showRightImage"
      class="right-image"
      src="/img/canabiovet/canabiovet2.svg"
      alt="Right Image"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showLeftImage: false,
      showRightImage: false,
    };
  },
  mounted() {
    // Use a timeout to stagger the appearance of the images
    setTimeout(() => {
      this.showLeftImage = true;
    }, 500);

    setTimeout(() => {
      this.showRightImage = true;
    }, 500);
  },
};
</script>

<style>
.image-container {
  position: relative;
  width: 100%;
  height: 100vh; /* Adjust this to fit your design */
  overflow: hidden; /* Clip the images outside the container */
}

.left-image,
.right-image {
  position: absolute;
  width: 25%;
  height: 100%;
  top: 0;
}

.right-image {
  right: 0;
}
</style>

  
  
