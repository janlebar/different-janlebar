<style>
* {
  box-sizing: border-box;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  background-color: #ffffff;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.container__image {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: url("{{ currentImageUrl }}") center/cover;
  transition: ease-in-out 0.3s opacity; /* Updated transition property */
  z-index: 2;
  opacity: 0; /* Set initial opacity to 0 */

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    background: inherit;
    background-position: bottom;
    filter: blur(40px) saturate(0%);
    transform: scaleX(0.4);
    transition: ease-in-out 0.4s;
    border-radius: 120px;
    transform-origin: right;
    opacity: 0;
    z-index: -1;
  }

  .containerinfoa,
  .containerinfob {
    position: relative;
    line-height: 1.8;
    transition: ease-in-out 0.3s;
    opacity: 0;
  }

  .container__location {
    transition-delay: 0.15s;
  }

  &:hover {
    border-radius: 0;
    width: 450px;
    height: 310px;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(9, 55, 53, 0.08),
      0 16px 24px rgba(9, 55, 53, 0.1), 0 24px 32px rgba(9, 55, 53, 0.14);

    &:before {
      width: 100%;
      opacity: 0.18;
      filter: blur(10px) saturate(100%);
      transform: scale(2.8) translate3d(-18%, 0, 0);
    }

    .containerinfoa {
      transform: translate3d(80%, 0, 0);
      opacity: 1;
    }
    .containerinfob {
      transform: translate3d(10%, 0, 0);
      opacity: 1;
    }
  }

  &.fade-in {
    opacity: 1; /* Set opacity to 1 on image switch */
  }
}
</style>

<template>
  <div class="container">
    <div
      ref="imageContainer"
      class="container__image"
      :class="{ 'start-animation': animateOnLoad, 'fade-in': animateOnSwitch }"
      :style="{ background: 'url(' + currentImageUrl + ') center/cover' }"
    >
      <div class="containerinfoa container__author">DEVELOPER</div>
      <div class="containerinfob container__location">DESIGNER</div>
    </div>
    <div class="container__image--second"></div>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  data() {
    return {
      animateOnLoad: null,
      animateOnSwitch: false, // New property to control fade-in class
      imageUrls: ["/img/different/face7.svg", "/img/different/face5.svg", "/img/different/face4.svg"],
      currentImageIndex: 0,
    };
  },
  computed: {
    currentImageUrl() {
      return this.imageUrls[this.currentImageIndex];
    },
  },
  mounted() {
    this.animateOnLoad = true;

    // After a delay, reset the animation to allow hover interaction
    setTimeout(() => {
      this.animateOnLoad = null;
    }, 5000);

    // Interval to switch images
    setInterval(() => {
      this.animateOnSwitch = true; // Trigger fade-in animation
      // Wait for the transition to complete and then switch the image
      setTimeout(() => {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.imageUrls.length;
        this.animateOnSwitch = false; // Reset fade-in animation
      }, 5000); // Adjust the delay as needed
    }, 3000); // Adjust the interval as needed
  },
  watch: {
    currentImageIndex(newIndex) {
      // You can perform additional logic here if needed
      console.log("currentImageIndex changed:", newIndex);
    },
  },
};
</script>

