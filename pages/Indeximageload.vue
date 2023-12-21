<template>
  <div class="hero">
    <div class="hero__background">
      <img src="/img/different/face5.svg">
      <h1>Scūtarius</h1>
    </div>

    <div class="hero__bg">
      <picture>
        <img src="/img/different/face7.svg">
      </picture>
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: 'Noto Sans', sans-serif;
}

:root {
  --hero-color: #981616;
  --hero-height: 100vh;
  --hero-width: 100vw;
}

.hero {
  display: grid;
  position: absolute;
  grid-template-columns: var(--hero-width);
  grid-template-rows: var(--hero-height);
  place-items: center;

}

/* Add a class to apply hover effect */
.hero__bg:hover {
  animation: clip-hero-anim-hover 20s cubic-bezier(0.0, 0, 0, 0);
}


.hero__background {
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
}

.hero__bg::before {
  content: "";
  display: block;
  position: absolute;
  z-index: 9;
  top: -10%;
  right: -10%;
  bottom: -10%;
  left: -10%;
  background: var(--hero-bg-mix);
  background-blend-mode: screen;
}

.hero__bg picture {
  display: flex;
  height: var(--hero-height);
  width: var(--hero-width);
  /* Add hover effect for scaling-hero-anim */
  animation: scaling-hero-anim-hover 10s cubic-bezier(0, 0.71, 0.4, 0.97) forwards;
  will-change: transform;
}

.hero__bg img {
  display: block;
  object-fit: cover;
  object-position: 77% 50%;
  height: 50%;
  width: 100%;
  z-index: 9;
}

.hero__background {
  display: grid;
  position: absolute;
  place-items: center;
  z-index: 0;
  color: var(--hero-color);
  width: 100%;
  text-transform: uppercase;
}

/* Add hover animation keyframes */
@keyframes clip-hero-anim-hover {
  from {
    clip-path: inset(0% 0% 0% 100%);
  }
  to {
    clip-path: inset(0% 0% 0% 0%);
  }
}
</style>


<script>
export default {
  name: 'MyComponent'
}
</script>


