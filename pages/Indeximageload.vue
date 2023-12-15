<template>
  <div class="container">
    <div class="box" @mouseover="hoverImage(1)" @mouseout="resetImage(1)">
      <img v-show="showLeftImage" src="/img/different/face3.svg" alt="Left Image" />
      <span>DESIGNER</span>
    </div>
    <div class="box" @mouseover="hoverImage(2)" @mouseout="resetImage(2)">
      <img v-show="showRightImage" src="/img/different/face.svg" alt="Right Image" />
      <span>DEVELOPER</span>
    </div>
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
  methods: {
    hoverImage(imageNumber) {
      if (imageNumber === 1) {
        this.showLeftImage = true;
      } else if (imageNumber === 2) {
        this.showRightImage = true;
      }
    },
    resetImage(imageNumber) {
      if (imageNumber === 1) {
        this.showLeftImage = false;
      } else if (imageNumber === 2) {
        this.showRightImage = false;
      }
    },
  },
};
</script>

<style>
.container {
  display: flex;
  width: 150%;
  padding: 10% 10%;
  box-sizing: border-box;
  height: 100vh;
}

.box {
  flex: 1;
  transition: 3s;
  line-height: 0;
  position: relative;
}

.box > img {
  width: 200%;
  height: calc(100% - 10vh);
  object-fit: cover;
  transition: 0.5s;
  display: block;
  position: absolute;
  top: 0;
  left: 100px; /* Adjust left or right position here */
}

.box > span {
  font-size: 3.8vh;
  display: block;
  text-align: center;
  height: 10vh;
  line-height: 2.6;
}

.box:hover {
  flex: 1 5 90%;
  z-index: 1;
}

.box:hover > img {
  width: 100%;
  height: 100%;
  z-index: 2;
  left: 100px; /* Adjust left or right position here */
}
</style>









  
  
