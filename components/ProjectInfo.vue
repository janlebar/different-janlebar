<script>
import feather from 'feather-icons';

export default {

	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
};
</script>

<template>
	<div class="block sm:flex gap-0 sm:gap-10 mt-14">
		<!-- Single project left section details -->
		<div class="w-full sm:w-1/3 text-left">
			<!-- Single project client details -->

			</div>

			<!-- Single project objectives -->
			<div class="mb-7">
				<p
					class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"
				>

				</p>
				<p
					class="font-general-regular text-primary-dark dark:text-ternary-light"
				>

				</p>
			</div>

			<!-- Single project technologies -->
			<div class="mb-7">
				<p
					class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"
				>

				</p>
				<p
					class="font-general-regular text-primary-dark dark:text-ternary-light"
				>

				</p>
			</div>

			<!-- Single project social sharing -->
			<div>
				<p
					class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"
				>

				</p>
				<div class="flex items-center gap-3 mt-5">
					<a

						target="__blank"
						aria-label="Share Project"
						class="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"

					></a>
				</div>
			</div>
		</div>

		<!-- Single project right section details -->
		<div class="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
			<p
				class="font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7"
			>
				
			</p>
			<p

				class="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
			>

			</p>
		</div>

</template>