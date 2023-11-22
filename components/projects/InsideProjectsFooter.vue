


<script>
import feather from 'feather-icons';
import ProjectsFilter from './ProjectsFilter.vue';
import ProjectSingle from './ProjectSingle.vue';

//import projects from './data/data';
const test = 'Design'
export default {
	components: { ProjectSingle, ProjectsFilter },
	props: ['allProjects'],
	data: () => {
		return {
			FilteredCategory: test,
		};
	},
	computed: {
		projects() {
			console.log(this.allProjects);
			return this.allProjects;
		},

		// Get the filtered projects
		filteredProjects() {
			if (this.FilteredCategory) {
				return this.filterProjectsByCategory();
			} 
			return this.projects;
		},
	},
	methods: {
		// Filter projects by category
		filterProjectsByCategory() {
			return this.projects.filter((item) => {
				let category =
					item.category.charAt(0).toUpperCase() +
					item.category.slice(1);
				console.log(category);
				return category.includes(this.FilteredCategory);
			});
		},

	},
	mounted() {
		feather.replace();
	},
};
</script>

<template>
	<!-- Projects grid -->
	<section class="pt-10 sm:pt-14">
		<!-- Filter and search projects -->
		<div class="mt-10 sm:mt-10">

			<div
				class="
					flex
					justify-between
					border-b border-primary-light
					dark:border-secondary-dark
					pb-3
					gap-2
				"
			>

				<ProjectsFilter @filter="FilteredCategory = $event" />
			</div>
		</div>

		<!-- Projects grid -->
		<div
			class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10"
		>
		<!-- MAP THROUGH PROJECTS AND DISPLAY THEM -->
			<ProjectSingle
				v-for="project in filteredProjects"
				:key="project.id"
				:project="project"
			/>
		</div>
	</section>
</template>