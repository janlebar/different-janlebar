<script>
export default {
  name: 'About',
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
};


</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/src/assets/images/profile.jpeg"
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
	<div class="flex justify-center sm:flex-block">
		<a
		  download="Resume.pdf"
		  href="https://github.com/janlebar/cv_pdf/blob/main/Cirriculum%20Vitae%20Jan%20Lebar%20en.pdf"
		  class="w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-300 flex items-center justify-center"
		  aria-label="Download Resume"
		>
		  <i data-feather="arrow-down-circle" class="w-5 sm:w-6 mr-2 sm:mr-3 duration-100"></i>
		  <span class="text-sm sm:text-lg font-general-medium duration-100">Download CV</span>
		</a>
	  </div>
</template>
