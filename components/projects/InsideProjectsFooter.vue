<script>
import feather from 'feather-icons';

import ProjectSingle from './ProjectSingle.vue';
//import projects from './data/data';

export default {
	components: { ProjectSingle },
	props: ['allProjects'],
	data: () => {
		return {
			selectedCategory: '',
			searchProject: '',
		};
	},
	computed: {
		projects() {
			console.log(this.allProjects);
			return this.allProjects;
		},


		// Get three random projects
		randomProjects() {
			const shuffledProjects = this.projects.slice().sort(() => 0.5 - Math.random());
			return shuffledProjects.slice(0, 3);
		},


		// // Get the filtered projects
		// filteredProjects() {
		// 	if (this.selectedCategory) {
		// 		return this.filterProjectsByCategory();
		// 	} else if (this.searchProject) {
		// 		return this.filterProjectsBySearch();
		// 	}
		// 	return this.projects;
		// },
	},

	mounted() {
		feather.replace();
	},
};
</script>

<template>
	<!-- Projects grid -->
	<section class="pt-10 sm:pt-14">
		<!-- Projects grid title -->

	



		<!-- Projects grid -->
		<div
			class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10"
		>
		<!-- MAP THROUGH PROJECTS AND DISPLAY THEM -->
			<ProjectSingle
				v-for="project in randomProjects"
				:key="project.id"
				:project="project"
			/>
		</div>
	</section>
</template>



