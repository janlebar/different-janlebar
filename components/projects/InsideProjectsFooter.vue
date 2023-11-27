


<script>
import feather from 'feather-icons';
import ProjectsFilter from './ProjectsFilter.vue';
import ProjectSingle from './ProjectSingle.vue';



//import projects from './data/data';
export default {
	components: { ProjectSingle, ProjectsFilter,},
	props: ['allProjects','category','description'],
	data: ({description}) => {
		return {
			FilteredCategory: description,
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
	<!-- Projects grid  -->
	<section class=" ">
		 <!-- Filter and search projects -->
		<div class=" ">



				<!-- <ProjectsFilter @filter="FilteredCategory = $event" /> -->
				<ProjectsFilter :showSelect="false" @filter="FilteredCategory = $event"/>


			</div>


		<!-- Projects grid  -->
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



