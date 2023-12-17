<template>

  <div class="container">
    <div class="imagecontainer">
      <img class="image" src="/img/different/face7.svg"  />
    </div>

    <div class="imagecontainer">
      <img class="image" src="/img/different/face5.svg" />
    </div>
  </div>

  
</template>

<script>
export default {
  name: 'MyComponent',
};
</script>

<style>


.imagecontainer {
  position: absolute;
  inset: 0;
}

.image {

  width: 50%;
  height: 100%;
  object-fit: cover;
}
</style>

