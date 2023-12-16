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
  <div class="containertwo">
  <div class="box static-image">
    <img src="/img/different/face3.svg" alt="Static Image" />
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      showLeftImage: true,
      showRightImage: true,
      leftImagePosition: -500,
      rightImagePosition: 500,
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
  width: 100%;
  padding: 10% 10%;
  box-sizing: border-box;
  height: 100vh;
}

.containertwo {
  display: flex;
  width: 100%;
  padding: 10% 10%;
  box-sizing: border-box;
  height: 100vh;
}

.box {
  flex: 1;
  transition: 5s;
  line-height: 0;
  position: relative;
}

.box.static-image {
  position: absolute;
  width: 1000px;
  height:700px;
  top: 100;
  left: 0;
  z-index: 999;
}


.box > img {
  width: 200%;
  height: calc(100% - 10vh);
  object-fit: cover;
  transition: 5s;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.box > span {
  font-size: 3.8vh;
  display: block;
  text-align: center;
  height: 10vh;
  line-height: 2.6;
}

.box:hover {
  flex: 1 5 150%;
  z-index: 2;
}

.box:hover > img {
  width: 100%;
  height: 100%;
  z-index: 3;
}
</style>










  
  
