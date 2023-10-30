<template>
    <div>
      <Header/>
      <About />
    </div>
    <h1>About Page</h1>

	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/profile.jpeg"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
  
  <script>
  import Header from '@/components/Header.vue'
  
  export default {
    components: {
      Header,
    },
    setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'I am a creative designer by education, passionately transitioning into the world of programming. I now want to leverage my creative talent and experience to create functional and visually appealing software solutions. With my enthusiasm and hard work, I am prepared to embrace the challenges that programming brings and to create innovative and user-friendly applications.',
				},
				{
					id: 2,
					bio:
						'I am a Full-Stack Developer and Designer with years of experience in web application development. My expertise spans both frontend and backend development, and I am proficient in various programming languages and technologies, including Python, JavaScript, SQL, PHP, CSS, and Tailwind. I have a solid foundation in JavaScript/TypeScript and have hands-on experience with frameworks like React.',
				},
			],
		};
	},
  }
  
  </script>