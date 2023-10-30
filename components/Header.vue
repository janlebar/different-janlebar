<template>
    <header class="bg-blue-500 p-4">
      <nav class="container mx-auto flex items-center justify-between">
        <div class="text-white text-2xl font-bold">My Nuxt App</div>
        <ul class="flex space-x-4">
          <li><nuxt-link to="/" class="text-white hover:text-blue-300">Home</nuxt-link></li>
          <li><nuxt-link to="/about" class="text-white hover:text-blue-300">About</nuxt-link></li>
          <li><nuxt-link to="/contact" class="text-white hover:text-blue-300">Contact</nuxt-link></li>
        </ul>
      </nav>
    </header>
  </template>
  

  
  
  <script>
  export default {
    name: 'Header',
  }
  </script>
  
  