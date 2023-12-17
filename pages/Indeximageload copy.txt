<template>
  <div class="image-container">
    <transition name="slide" @before-enter="beforeEnterLeft" @enter="enter">
      <img
        v-if="showLeftImage"
        class="left-image"
        :style="{ transform: `translateX(${hoverLeft * 50}%)` }"
        @mousemove="updateHoverLeft"
        @mouseleave="resetHoverLeft"
        src="/img/canabiovet/canabiovet1.svg"
        alt="Left Image"
      />
    </transition>
    <transition name="slide" @before-enter="beforeEnterRight" @enter="enter">
      <img
        v-if="showRightImage"
        class="right-image"
        :style="{ transform: `translateX(${hoverRight * -50}%)` }"
        @mousemove="updateHoverRight"
        @mouseleave="resetHoverRight"
        src="/img/canabiovet/canabiovet2.svg"
        alt="Right Image"
      />
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showLeftImage: false,
      showRightImage: false,
      hoverLeft: 0,
      hoverRight: 0,
    };
  },
  methods: {
    beforeEnterLeft(el) {
      el.style.transform = "translateX(0%)"; // Initial position
    },
    beforeEnterRight(el) {
      el.style.transform = "translateX(0%)"; // Initial position
    },
    enter(el, done) {
      el.offsetHeight; // Trigger reflow to apply transform immediately
      el.style.transition = "transform 1s ease";
      el.style.transform = `translateX(${this.hoverLeft * -10}%)`;
      el.style.transform = `translateX(${this.hoverRight * 10}%)`;
      done();
    },
    updateHoverLeft(event) {
      const rect = event.target.getBoundingClientRect();
      this.hoverLeft = (event.clientY - rect.top) / rect.height;
    },
    resetHoverLeft() {
      this.hoverLeft = 0;
    },
    updateHoverRight(event) {
      const rect = event.target.getBoundingClientRect();
      this.hoverRight = (event.clientY - rect.top) / rect.height;
    },
    resetHoverRight() {
      this.hoverRight = 0;
    },
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
  transition: transform 0.5s ease; /* Add smooth transition for hover effect */
}

.right-image {
  right: 0;
}
</style>

  
  
  
