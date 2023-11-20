<script>
import { filename } from 'pathe/utils';

const glob = import.meta.glob('@/src/assets/images/projects/*.svg', { eager: true });

const images = Object.
	entries(glob).
	map(([key, value]) => ({filename: filename(key), image: value.default}));

export default {
	props: ['project'],
	computed: {
		image: ({ project }) => {
			console.log(images, project.img);
			return images.find((image) => image.filename == project.img).image;
		}
	}
}

</script>

<template>
	<router-link
		:to="`/project/${project.title}`"
		class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
		aria-label="Single Project"
	>
		<div>
			<img
				:src="image"
				:alt="project.title"
				class="rounded-t-xl border-none"
			/>
		</div>

		<!-- TITLE -->
		<div class="text-center px-4 py-7">
			<p class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-1">
				{{ project.maintitle }}
			</p>
			<span class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light">{{ project.category }}</span>
			<div class="text-center px-4 py-4">
				<p class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light mb-1">
					{{ project.description }}
				</p>
			</div>
		</div>

	</router-link>
</template>