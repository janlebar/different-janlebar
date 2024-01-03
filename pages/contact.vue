<template>
  <div>
    <Header />
    <!-- Contact Section -->
    <section id="contact" class="contact-section p-8">
      <div class="max-w-md mx-auto">
        <div class="bg-white rounded-lg shadow-lg p-8">
          <h2 class="text-3xl font-bold text-blue-600 mb-4">Contact me</h2>
          <form @submit.prevent="submitForm">
            <div class="mb-4">
              <label for="name" class="block text-lg text-gray-600">Name</label>
              <input type="text" id="name" v-model.trim="formData.name" required class="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div class="mb-4">
              <label for="email" class="block text-lg text-gray-600">Email</label>
              <input type="email" id="email" v-model.trim="formData.email" required class="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div class="mb-4">
              <label for="message" class="block text-lg text-gray-600">Message</label>
              <textarea id="message" v-model.trim="formData.message" rows="4" required class="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
            </div>
            <button type="submit" class="bg-blue-500 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out">Submit</button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import config from '@/config';

export default {
  components: {
    Header
  },
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      // Create a mailto link with the specified email address and form data
      const mailtoLink = `mailto:${config.email}?subject=${encodeURIComponent('Contact Form Submission')}&body=${encodeURIComponent(`Name: ${this.formData.name}\nEmail: ${this.formData.email}\nMessage: ${this.formData.message}`)}`;

      // Open the default mail client with the mailto link
      window.open(mailtoLink);

      // Optionally, you can reset the form data after submission
      this.formData = {
        name: '',
        email: '',
        message: ''
      };
    }
  }
};
</script>


