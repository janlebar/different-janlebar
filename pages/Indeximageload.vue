<template>
  <div>
    <transition name="slide" @before-enter="beforeEnterLeft" @enter="enter">
      <img
        v-if="showLeftImage"
        class="left-image"
        :style="{ transform: `translateX(${hoverLeft * 10}%)` }"
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
        :style="{ transform: `translateX(${hoverRight * -10}%)` }"
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
      el.style.transform = "translateX(-100%)";
    },
    beforeEnterRight(el) {
      el.style.transform = "translateX(100%)";
    },
    enter(el, done) {
      el.offsetHeight; // Trigger reflow to apply transform immediately
      el.style.transition = "transform 1s ease";
      el.style.transform = `translateX(${this.hoverLeft * 10}%)`;
      el.style.transform = `translateX(${this.hoverRight * -10}%)`;
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
.left-image,
.right-image {
  position: absolute;
  width: 25%;
  transition: transform 0.5s ease; /* Add smooth transition for hover effect */
}

.right-image {
  right: 0;
}
</style>



  
  
  
