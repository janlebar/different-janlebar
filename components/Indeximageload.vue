<template>
  <div class="top">
  <div class="containerimg">
    <div class="container__image" :class="{ 'start-animation': animateOnLoad }">
      <div class="containerinfoa container__author">DEVELOPER</div>
      <div class="containerinfob container__location">DESIGNER</div>
    </div>
    <div class="container__image--second"></div>
  </div>
</div>
</template>

<script>
export default {
  name: 'MyComponent',
  data() {
    return {
      animateOnLoad: null,
      imageUrls: ["/img/different/face7.svg", "/img/different/face5.svg"], // Add more URLs as needed
    };
  },
  mounted() {
    // Trigger animation on page load
    this.animateOnLoad = 0; // Start with the first image index

    // After a delay, reset the animation to allow hover interaction
    setTimeout(() => {
      this.animateOnLoad = null;
    }, 5000); // Adjust the delay as needed
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

 .top {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  font-size: 24px;


}

.containerimg {
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
  background: url("/img/different/face7.svg") center/cover;
  transition: ease-in-out 0.3s;
  z-index: 2;

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

    transform: scaleX(0.4);
    transition: ease-in-out 0.4s;
    border-radius: 120px;
    transform-origin: right;
    opacity: 0;
    z-index: -1;
  }

  .containerinfoa {
    position: relative;
    line-height: 1.8;
    transition: ease-in-out 0.3s;
    opacity: 0;
  }
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
    width: 50%;
    height: 80%;


    &:before {

    }

    .containerinfoa {
      transform: translate3d(70%, 0, 0);
      opacity: 1;
    }
    .containerinfob {
      transform: translate3d(25%, 0, 0);
      opacity: 1;
    }
  }
}


</style>


