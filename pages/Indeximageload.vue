<template>
  <div class="container">
    <div class="box" @mouseover="hoverImage(1)" @mouseout="resetImage(1)">
      <img v-show="showLeftImage" src="/img/canabiovet/canabiovet1.svg" alt="Left Image" />
      <span>CSS</span>
    </div>
    <div class="box" @mouseover="hoverImage(2)" @mouseout="resetImage(2)">
      <img v-show="showRightImage" src="/img/canabiovet/canabiovet2.svg" alt="Right Image" />
      <span>Image</span>
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
  width: 100%;
  padding: 4% 2%;
  box-sizing: border-box;
  height: 100vh;
}

.box {
  flex: 1;
  overflow: hidden;
  transition: 0.5s;
  line-height: 0;
}

.box > img {
  width: 200%;
  height: calc(100% - 10vh);
  object-fit: cover;
  transition: 0.5s;
  display: block; /* Ensure the image is initially displayed */
}

.box > span {
  font-size: 3.8vh;
  display: block;
  text-align: center;
  height: 10vh;
  line-height: 2.6;
}

.box:not(:hover) > img {
  display: none; /* Hide the image when not hovered */
}

.box:hover {
  flex: 1 1 50%;
}

.box:hover > img {
  width: 100%;
  height: 100%;
}
</style>









  
  
