<template>
    <div>
        
        <transition name="fade" class="transition-opacity">
            <img v-if="showLeftImage" class="left-image opacity-100 w-1/4" src="/img/canabiovet/canabiovet1.svg" alt="Left Image" />
          </transition>
          <transition name="fade" class="transition-opacity">
            <img v-if="showRightImage" class="right-image opacity-100 w-1/4" src="/img/canabiovet/canabiovet2.svg" alt="Right Image" />
          </transition>
          
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
      }, 1000);
    },
  };
  </script>
  
  <style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 100;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 100;
  }
  
  .left-image {
    position: relative;
    left: 0;
  }
  
  .right-image {
    position: relative;
    right: 0;
  }
  </style>
