<style>
body {
  margin: 0;
  padding: 0;
  font-family: 'Noto Sans', sans-serif;
}

.hero {
  display: grid;
  position: relative;
  grid-template-columns: 100vw;
  grid-template-rows: 100vh;
  place-items: center;
  overflow: hidden;
  animation: clip-hero-anim 1.25s cubic-bezier(0.29, 0.8, 0.8, 0.98);
  will-change: clip-path;
}

.hero__bg {
  align-self: center;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

.hero__bg {
  display: grid;
  position: relative;
  z-index: 0;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  place-items: center;
  animation: fade-in 0.75s linear;
  will-change: opacity;
}

.hero__bg::before {
  content: "";
  display: block;
  position: absolute;
  z-index: 5;
  top: -10%;
  right: -10%;
  bottom: -10%;
  left: -10%;
  background: rgba(#29042f, 0.4);
  background-blend-mode: screen;
}

.hero__bg picture {
  display: flex;
  height: 100vh;
  width: 100vw;
  animation: scaling-hero-anim 4s 0.25s cubic-bezier(0, 0.71, 0.4, 0.97) forwards;
  will-change: transform;
}

.hero__bg img {
  display: block;
  object-fit: cover;
  object-position: 77% 50%;
  height: auto;
  width: 100%;
}

@keyframes fade-in {
  from {
      opacity: 0;
  }
  to {
      opacity: 1;
  }
}

@keyframes scaling-hero-anim {
  from {
      transform: scale(1.25);
  }
  to {
      transform: scale(1.1);
  }
}

@keyframes clip-hero-anim {
  from {
    clip-path: polygon(0% 0%, 50% 0%, 50% 100%, 50% 100%);
  }
  to {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  }
}

</style> 


<template>
  <div class="container">
    <div class="hero">
      <div class="hero__bg">
        <picture>
          <img src="/img/different/face7.svg">
        </picture>
      </div>

    </div>
    <div class="hero">
      <div class="hero__bg">
        <picture>
          <img src="/img/different/face5.svg">
        </picture>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyComponent'}

</script>

