<template>
    <header class="bg-blue-500 p-4">
      <nav class="container mx-auto flex items-center justify-between">
        <nuxt-link
            to="/" class="text-white text-2xl font-bold">Different</nuxt-link>

        <ul class="flex space-x-4">

          <li><nuxt-link
            to="/projects"
            class="font-general-medium block text-white text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
            aria-label="Home"
            >Projects</nuxt-link>
          </li>
          <li><nuxt-link
            to="/about"
            class="font-general-medium block text-white text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
            aria-label="About Me"
            >About Me</nuxt-link>
          </li>
          <li><nuxt-link
            to="/contact"
            class="font-general-medium block text-white text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
            aria-label="Contact"
            >Contact</nuxt-link>
          </li>

        </ul>
      </nav>
    </header>
  </template>
  

  
  
  <script>
  export default {
    name: 'Header',
  }
  </script>
  
  