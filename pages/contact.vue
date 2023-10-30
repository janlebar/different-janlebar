<template>
  <div>
    <Header />
  </div>
<!-- Contact Section -->
<section id="contact" class="contact-section p-8">
  <div class="max-w-md mx-auto">
    <div class="bg-white rounded-lg shadow-lg p-8">
      <h2 class="text-3xl font-bold text-blue-600 mb-4">Contact Us</h2>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="name" class="block text-lg text-gray-600">Name</label>
          <input type="text" id="name" v-model="formData.name" required class="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-lg text-gray-600">Email</label>
          <input type="email" id="email" v-model="formData.email" required class="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        <div class="mb-4">
          <label for="message" class="block text-lg text-gray-600">Message</label>
          <textarea id="message" v-model="formData.message" rows="4" required class="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
        </div>
        <button type="submit" class="bg-indigo-500 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out">Submit</button>
      </form>
    </div>
  </div>
</section>
</template>

<script>
import Header from '@/components/Header.vue'




export default {
  components: {
    Header,
  },
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      },
      imageList: [
        { id: 1, url: 'image1.jpg', alt: 'Image 1' },
        // Add data for other images
      ]
    };
  },
  methods: {
    submitForm() {
      // Handle form submission here, e.g., using Axios
      console.log('Form submitted with data:', this.formData);
    }
  }
};
</script>
